import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "@/helpers/db-util";

async function handler(req, res) {
  const {
    body: { comment, email, name },
    method,
    query: { eventId },
  } = req;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Connecting to the database failed!" });
  }

  if (method === "POST") {
    if (
      !email.includes("@") ||
      !name ||
      !name.trim().length ||
      !comment ||
      !comment.trim().length
    ) {
      client.close();
      return res.status(422).json({ message: "Invalid input." });
    }

    try {
      const result = await insertDocument(client, "comments", {
        comment,
        email,
        eventId,
        name,
      });
      client.close();
      return res.status(201).json({
        message: "Added Comment.",
        comment: { comment, email, name, _id: result.insertedId },
      });
    } catch (error) {
      client.close();
      return res.status(500).json({ message: "Inserting comment failed!" });
    }
  }

  if (method === "GET") {
    try {
      const comments = await getAllDocuments(client, "comments", { _id: -1 });
      client.close();
      return res.status(200).json({ comments });
    } catch (error) {
      client.close();
      return res.status(500).json({ message: "Getting comments failed!" });
    }
  }
  client.close();
}

export default handler;
