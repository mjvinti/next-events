import { MongoClient } from "mongodb";

async function connectDatabase() {
  return await MongoClient.connect(process.env.DB_URL);
}

async function insertDocument(client, document) {
  const db = client.db();
  return await db.collection("newsletters").insertOne(document);
}

async function handler(req, res) {
  const {
    body: { email },
    method,
  } = req;

  if (method === "POST") {
    if (!email || !email.includes("@")) {
      return res.status(422).json({ message: "Invalid email address." });
    }

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Connecting to the database failed!" });
    }

    try {
      await insertDocument(client, { email });
      client.close();
    } catch (error) {
      return res.status(500).json({ message: "Inserting data failed!" });
    }

    return res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
