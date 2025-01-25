
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your Paystack secret key
const PAYSTACK_SECRET_KEY = "pk_test_e44bf87ec09165000fabee1d8ea8df1ec5d27f04";

app.use(express.json());

// Endpoint to create payment session
app.post("/create-payment", async (req, res) => {
  const { email, amount } = req.body;

  try {
    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          amount: amount * 100, // Convert to kobo or pesewa
        }),
      }
    );

    const data = await response.json();

    if (data.status) {
      res.json({
        paymentLink: data.data.reference, // You can return the reference to the frontend
      });
    } else {
      res.status(500).json({ error: "Payment initialization failed" });
    }
  } catch (error) {
    console.error("Error initializing payment", error);
    res
      .status(500)
      .json({ error: "An error occurred during payment initialization" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
