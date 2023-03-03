import { MongoClient } from "mongodb";

async function handler(req, res) {
  const {
    body: { comment, email, name },
    method,
    query: { eventId },
  } = req;

  const client = await MongoClient.connect(process.env.DB_URL);

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

    const db = client.db();
    const result = await db
      .collection("comments")
      .insertOne({ comment, email, eventId, name });
    client.close();

    return res.status(201).json({
      message: "Added Comment.",
      comment: { comment, email, name, id: result.insertedId },
    });
  }

  if (method === "GET") {
    const db = client.db();
    const comments = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();
    client.close();
    return res.status(200).json({ comments });
  }
}

export default handler;
