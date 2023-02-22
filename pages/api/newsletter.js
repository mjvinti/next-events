function handler(req, res) {
  const {
    body: { email },
    method,
  } = req;

  if (method === "POST") {
    if (!email || !email.includes("@")) {
      return res.status(422).json({ message: "Invalid email address." });
    }

    console.log(email);
    return res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
