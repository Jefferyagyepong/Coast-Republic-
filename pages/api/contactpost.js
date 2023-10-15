import database from "./database";
export default function handler(req, res) {
  const body = req.body;

  res.status(200).json({
    user: `First Name: ${body.firstName} Last Name: ${body.lastName} Region: ${body.region}  Message: ${body.message}`,
  });
  if (req.method === "GET") {
    res.status(200).json();
  } else if (req.method === "POST") {
    const user = req.body.user;
    const newUser = {
      users: user,
    };
    database.push(newUser);
    res.status(201).json(newUser);
  }
}
