export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Basic validation for email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Here you can integrate with a real email service like SendGrid, Mailchimp, etc.
    try {
      // Simulate saving email (e.g., to a database or mailing service)
      console.log('Subscribed email:', email);

      // For example, using SendGrid or any other service here...
      // await sendEmailToNewsletterList(email);

      // If successful, send a success response
      return res.status(200).json({ message: 'Successfully subscribed!' });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to subscribe. Try again later.' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
