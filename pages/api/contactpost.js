export default function handler(req, res) {
  const body = req.body;

  res.status(200).json({
    user: `First Name: ${body.firstName}
      Last Name: ${body.lastName} 
      Region: ${body.region} 
      Message: ${body.message}`,
  });
}