import { randomUUID } from "crypto";

// TODO: replace this stub with your real MoMo integration:
//   1. Get an access token (POST /collection/token/)
//   2. Call POST /collection/v1_0/requesttopay with:
//        amount, currency, externalId, payer: { partyIdType: 'MSISDN', partyId: phone },
//        payerMessage, payeeNote
//   3. Save an Order + Payment row to your database (status: PENDING) keyed by referenceId
//   4. Return referenceId to the client so it can poll /api/momo/status/[referenceId]

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { customer, items, total, currency } = req.body || {};

  if (!customer?.phone || !items?.length || !total) {
    return res.status(400).json({ message: "Missing required checkout data." });
  }

  try {
    const referenceId = randomUUID();

    // await prisma.payment.create({
    //   data: { referenceId, phoneNumber: customer.phone, amount: total, currency, status: "PENDING" },
    // });

    return res.status(200).json({ referenceId });
  } catch (err) {
    console.error("Checkout error:", err);
    return res.status(500).json({ message: "Could not start payment." });
  }
}
