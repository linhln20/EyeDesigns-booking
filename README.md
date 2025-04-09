#Eye Designs Booking test

Candidate name:
Lam Ngoc Linh
Position: Manual tester

# 🔍 Playwright E2E Testing – Login Flow

This project uses **[Playwright](https://playwright.dev/)** to write **end-to-end tests** in **TypeScript**, designed to test the login functionality at:  
👉 https://brand-cp.komobook.com/login

---

## 🛠️ Environment Setup

#### Install Playwright with TypeScript support
```bash
npm install -D @playwright/test
npx playwright install

# Create the repository
```bash
cd <project-folder>npm init playwright@latest
Playwright

#How to run test
npx playwright test

# Run a specific test file:
npx playwright test tests/login.spec.ts

# Project Structure
.
├── tests/
│   ├── pages/
│   │   └── LoginPage.ts       # Page Object Model for the login page
│   └── login.spec.ts          # Test cases for login functionality
├── playwright.config.ts       # Playwright configuration file (optional)
└── README.md

#Covered Test Cases
Eye Design booking:
* Open login page
* Enter valid credentials
* Verify redirect to correct page
* Confirm login success with element or text assertion

Checkbox testing:
* Check 1 checkbox
* check 2 checkbok
* Uncheck checkbox