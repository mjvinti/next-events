function handler(req, res) {
  const {
    body: { comment, email, name },
    method,
    query: { eventId },
  } = req;

  if (method === "POST") {
    if (
      !email.includes("@") ||
      !name ||
      !name.trim().length ||
      !comment ||
      !comment.trim().length
    ) {
      return res.status(422).json({ message: "Invalid input." });
    }

    return res.status(201).json({
      message: "Added Comment.",
      comment: { id: new Date().toISOString(), comment, email, name },
    });
  }

  if (method === "GET") {
    return res.status(200).json({
      comments: [
        { id: "c1", name: "Max", comment: "A first comment!" },
        { id: "c2", name: "Manuel", comment: "A second comment!" },
      ],
    });
  }
}

export default handler;
