import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    email,
    fullName,
    address,
    city,
    state,
    postalCode,
    phoneNumber,
    paymentMethod,
    orderDetails,
  } = req.body;

  // Generate order items HTML
  const itemsHtml = orderDetails.items
    .map((item, index) => {
      const name = item.product?.name || "N/A";
      const weight = item.weight || "N/A";
      const quantity = item.quantity || 0;
      const pricePerUnit = item.product?.pricePerWeight?.[weight] || 0;
      const itemTotal = pricePerUnit * quantity;

      return `<p><strong>Item ${index + 1}:</strong> ${name} (${weight}g) - Qty: ${quantity} - ₹${itemTotal}</p>`;
    })
    .join("");

  const storeHtmlContent = `
    <h2>New Order from ${fullName} (${email})</h2>
    <h3>Customer Details</h3>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Address:</strong> ${address}, ${city}, ${state} - ${postalCode}</p>
    <p><strong>Payment Method:</strong> ${
      paymentMethod === "cod"
        ? "Cash on Delivery (COD)"
        : "Razorpay (Online Payment)"
    }</p>
    <h3>Order Summary</h3>
    ${itemsHtml}
    <hr />
    <p><strong>Total:</strong> ₹${orderDetails?.total || 0}</p>
  `;

  const customerHtmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e2e2; border-radius: 8px; background-color: #fff8e1;">
      <h2 style="color: #d35400;">Thank you for your order, ${fullName}!</h2>
      <p style="font-size: 16px; line-height: 1.5;">
        We’re thrilled to have you as a customer. Your order has been received and is now being processed with care.
      </p>

      <h3 style="border-bottom: 2px solid #d35400; padding-bottom: 5px;">Order Details</h3>
      ${itemsHtml}

      <p style="font-weight: bold; font-size: 18px; margin-top: 20px;">
        Total Amount: <span style="color: #d35400;">₹${orderDetails?.total || 0}</span>
      </p>

      <h3 style="border-bottom: 2px solid #d35400; padding-bottom: 5px; margin-top: 30px;">Shipping Address</h3>
      <p style="text-transform: uppercase; font-size: 15px; letter-spacing: 0.5px; line-height: 1.4;">
        ${address}, ${city}, ${state} - ${postalCode}
      </p>

      <p><strong>Payment Method:</strong> ${
        paymentMethod === "cod"
          ? "Cash on Delivery (COD)"
          : "Razorpay (Online Payment)"
      }</p>

      <p style="margin-top: 30px; font-size: 16px;">
        If you have any questions, feel free to reply to this email or call us anytime at <strong>+91 7995059659</strong>.
      </p>

      <p style="margin-top: 40px; font-style: italic; color: #7f8c8d;">
        Warm regards,<br />
        <strong>Aadhya Pickles Team</strong>
      </p>

      <hr style="border: none; border-top: 1px solid #ddd; margin-top: 40px;" />

      <p style="font-size: 12px; color: #aaa;">
        You’re receiving this email because you placed an order at Aadhya Pickles. If you believe this is a mistake, please contact us immediately.
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Aadhya Pickles" <${process.env.EMAIL_USER}>`,
      to: "tech.adhyaapickles@gmail.com",
      subject: `New Order from ${fullName}`,
      html: storeHtmlContent,
    });

    await transporter.sendMail({
      from: `"Aadhya Pickles" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Your Order Confirmation from Aadhya Pickles`,
      html: customerHtmlContent,
    });

    return res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Failed to send emails:", error);
    return res.status(500).json({ error: "Failed to send emails" });
  }
}
