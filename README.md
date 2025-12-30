# Cleartrip Bus Booking Automation – Playwright (LLM + MCP)

This project automates the Cleartrip bus booking flow using **Playwright with JavaScript**.
The automation logic was generated and refined with the help of an **LLM agent using MCP (Model Context Protocol)** via GitHub Copilot.

---

## 🚀 Automated Flow
- Login to Cleartrip
- Navigate to **Bus** section
- Select **From** and **To** destinations
- Choose a specific date from the date picker
- Select the first available bus

---

## 🛠 Tech Stack
- Playwright
- JavaScript
- Node.js
- GitHub Copilot
- MCP (LLM Agent)

---

## 🤖 LLM + MCP Usage
- Used MCP-based LLM agent to generate Playwright commands from natural language prompts
- Refined selectors and assertions manually for stability
- Improved test reliability by replacing hard waits with Playwright waits

> ⚠️ Note: This project is for learning and experimentation with AI-assisted automation, not an official Cleartrip automation suite.

---

## ▶️ How to Run
```bash
npm install
npx playwright install
npx playwright test --headed
