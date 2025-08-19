// server/server.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());

// Allow your frontend to call the API (adjust origin in production)
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));

// Email transporter (Gmail App Password or your SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT || 465),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // your sending email
    pass: process.env.EMAIL_PASS, // app password or SMTP password
  },
});

app.post("/request-demo", async (req, res) => {
  try {
    const { demoName, category, pages, description, email } = req.body;

    if (!demoName || !category || !pages || !description || !email) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Email to your team
    const teamHtml = `
      <h2>New Demo Website Request</h2>
      <p><b>Demo Name:</b> ${demoName}</p>
      <p><b>Category:</b> ${category}</p>
      <p><b>Pages:</b> ${pages}</p>
      <p><b>Description:</b> ${description}</p>
      <p><b>User Email:</b> ${email}</p>
      <p>Deliver in 2 days (free of cost).</p>
    `;
    await transporter.sendMail({
      from: `Demo Requests <${process.env.EMAIL_USER}>`,
      to: process.env.TEAM_EMAIL, // your team inbox
      subject: "New Free Demo Website Request",
      html: teamHtml,
    });

    // Email to the user
    const userHtml = `
      <h2>We received your demo request 🎉</h2>
      <p>Thanks for requesting a free demo website. Here are your details:</p>
      <ul>
        <li><b>Demo Name:</b> ${demoName}</li>
        <li><b>Category:</b> ${category}</li>
        <li><b>Pages:</b> ${pages}</li>
      </ul>
      <p><b>Description:</b> ${description}</p>
      <p>We'll deliver your demo within <b>2 days</b> and notify you at this email.</p>
      <p>— Your Team</p>
    `;
    await transporter.sendMail({
      from: `Your Team <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Free Demo Website Request",
      html: userHtml,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));