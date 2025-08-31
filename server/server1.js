// server/server.js
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

// Allow your frontend to call the API
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));

// Email transporter (cPanel SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "mail.frameworko.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: Number(process.env.SMTP_PORT) === 465, // true for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // helpful for self-signed certs
  },
});

// Verify SMTP connection
transporter.verify((err, success) => {
  if (err) {
    console.error("SMTP connection failed:", err);
  } else {
    console.log("SMTP server is ready to send emails");
  }
});

// Test route to check email sending
// app.get("/test-email", async (req, res) => {
//   try {
//     const info = await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: "your-personal-email@gmail.com", // replace with your test email
//       subject: "Test Email from Frameworko Node Server",
//       text: "This is a test email to verify SMTP configuration.",
//     });
//     console.log("Test email sent:", info.response);
//     res.json({ ok: true, response: info.response });
//   } catch (err) {
//     console.error("Test email failed:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

/* ---------------- EXISTING DEMO REQUEST ---------------- */
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
      from: process.env.EMAIL_USER,
      to: process.env.TEAM_EMAIL,
      subject: "New Free Demo Website Request",
      html: teamHtml,
    });

    // Confirmation email to user
    const userHtml = `
      <h2>We received your demo website request 🎉</h2>
      <p>Thanks for requesting a free demo website. Here are your details:</p>
      <ul>
        <li><b>Demo Name:</b> ${demoName}</li>
        <li><b>Category:</b> ${category}</li>
        <li><b>Pages:</b> ${pages}</li>
      </ul>
      <p><b>Description:</b> ${description}</p>
      <p>Frameworko will deliver your demo within <b>2 days</b> and notify you at this email.</p>
      <p>Frameworko</p>
      <p>support@frameworko.com</p>
      <p>+965 98996030</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Frameworko: Your Free Demo Website Request",
      html: userHtml,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error("Email sending failed:", err);
    res.status(500).json({ error: "Failed to send email." });
  }
});

/* ---------------- NEW PROJECT REQUEST ---------------- */
app.post("/project-request", async (req, res) => {
  try {
    const { projectName, category, pages, description, sampleUrl, email } = req.body;

    if (!projectName || !category || !pages || !description || !email) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Email to your team
    const teamHtml = `
      <h2>New Project Request</h2>
      <p><b>Project Name:</b> ${projectName}</p>
      <p><b>Category:</b> ${category}</p>
      <p><b>Pages:</b> ${pages}</p>
      <p><b>Description:</b> ${description}</p>
      <p><b>Sample URL:</b> ${sampleUrl || "N/A"}</p>
      <p><b>User Email:</b> ${email}</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.TEAM_EMAIL,
      subject: "New Project Request",
      html: teamHtml,
    });

    // Confirmation email to user
    const userHtml = `
      <h2>Frameworko received your project request </h2>
      <p>Thanks for sharing details about your project. Here’s a summary:</p>
      <ul>
        <li><b>Project Name:</b> ${projectName}</li>
        <li><b>Category:</b> ${category}</li>
        <li><b>Pages:</b> ${pages}</li>
        <li><b>Sample:</b> ${sampleUrl || "N/A"}</li>
      </ul>
      <p><b>Description:</b> ${description}</p>
      <p>Our team will review and get back to you soon.</p>
      <p>Frameworko</p>
      <p>support@frameworko.com</p>
      <p>+965 98996030</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Project Request Received",
      html: userHtml,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error("Project email failed:", err);
    res.status(500).json({ error: "Failed to send project request." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
