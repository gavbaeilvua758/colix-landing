const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["POST"],
    allowedHeaders: ["Content-Type"]
  })
);
app.use(express.json());

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const buildTelegramMessage = (payload) => {
  const lines = ["🚀 New Colix Application"];

  Object.entries(payload).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    const label = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (char) => char.toUpperCase());
    const emoji = key.toLowerCase() === "email" ? "📧" : "•";
    lines.push(`${emoji} ${label}: ${value}`);
  });

  lines.push(`🕒 Time: ${new Date().toISOString()}`);
  return lines.join("\n");
};

app.post("/apply", async (req, res) => {
  const { email, ...rest } = req.body || {};

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ success: false, message: "Invalid email." });
  }

  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    return res.status(500).json({
      success: false,
      message: "Server is missing Telegram configuration."
    });
  }

  const message = buildTelegramMessage({ email, ...rest });

  try {
    await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message
      }
    );

    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to send Telegram message."
    });
  }
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Colix backend running on port ${port}`);
});
