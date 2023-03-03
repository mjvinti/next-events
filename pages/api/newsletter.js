import { MongoClient } from "mongodb";

async function handler(req, res) {
  const {
    body: { email },
    method,
  } = req;

  if (method === "POST") {
    if (!email || !email.includes("@")) {
      return res.status(422).json({ message: "Invalid email address." });
    }

    const client = await MongoClient.connect(process.env.DB_URL);
    const db = client.db();
    await db.collection("emails").insertOne({ email });
    client.close();
    return res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
