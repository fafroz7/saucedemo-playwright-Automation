# Sauce Demo Playwright Automation

## Description
This project contains automated tests for the [Sauce Demo](https://www.saucedemo.com/) website using **Playwright with JavaScript**.  

**Scenario tested:**  
1. User logs in with valid credentials.  
2. Adds one product to the cart.  
3. Verifies the product name in the cart.  
4. Logs out successfully.  

The project is structured to be **easily cloned and executed** on any machine.

---

## Technologies Used
- JavaScript (ES6+)  
- Playwright  
- Node.js  

---

## Setup and Run

### 1. Clone the repository
```bash
git clone https://github.com/fafroz7/saucedemo-playwright-Automation.git
cd saucedemo-playwright-Automation

#  Install Node.js project dependencies
npm install

#  Install Playwright browsers
npx playwright install

# Run the tests (headed mode to see the browser)
npx playwright test --headed
