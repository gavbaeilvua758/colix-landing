# 🚀 Colix — Drone Delivery Platform (UK)

Colix is a decentralized drone delivery platform designed for the UK market.  
We enable drone pilots to earn money by delivering lightweight items safely, legally, and efficiently.

---

## 🌐 Live Demo
https://gavbaeilvua758.github.io/colix-landing/.

---

## 🧠 About the Project

Colix is building the future of last-mile delivery.

Instead of centralized fleets, we empower independent drone pilots to:
- operate locally
- earn per delivery
- scale with demand

This landing page is the first MVP to:
- validate demand
- onboard early pilots
- present the core vision

---

## ⚡ Features

- Modern startup-style landing page
- Dark theme UI (tech-focused design)
- Responsive (mobile-first)
- Smooth UX & animations
- Pilot application form (email capture)
- GitHub Pages deployment


## 🛠 Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- GitHub Pages (deployment)
- gh-pages (CI deploy)

## Quick Start
```
npm install
npm run dev
```

## Build
```
npm run build
```

## Deploy
```
npm run deploy
```

## Backend Setup (Telegram)

### 1. Install backend dependencies
```bash
cd backend
npm install
```

### 2. Create your environment file
```bash
cp .env.example .env
```

Fill in:
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `PORT`

### 3. Run the backend
```bash
npm start
```

### 4. Test the form
- Start the backend on `http://localhost:5000`
- Start the frontend (`npm run dev` in the root)
- Submit the form — you should receive a Telegram message

### Frontend API base (optional)
Set `VITE_API_BASE_URL` if your backend runs on a different host.
Example:
```bash
VITE_API_BASE_URL=http://localhost:5000
```

## Telegram Bot Setup

- Create a bot with  and copy the token.
- Send a message to the bot.
- Open https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates and copy chat.id into TELEGRAM_CHAT_ID.

