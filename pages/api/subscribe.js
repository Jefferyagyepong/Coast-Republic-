export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    // Simulate saving to a database (you can replace this with a real DB call)
    console.log("New subscriber:", email);

    return res.status(200).json({ message: "Subscription successful!" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
