import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(500);
  await page.locator('[data-test="username"]').click();
  await page.waitForTimeout(500);
  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').click();
  await page.waitForTimeout(500);

  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.waitForTimeout(500);

  await page.locator('[data-test="login-button"]').click();
  await page.waitForTimeout(500);

  const productName = await page.locator('.inventory_item_name').nth(1).innerText();
  await page.locator('.btn_inventory').nth(1).click();
  await page.waitForTimeout(500);

  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.waitForTimeout(500);
  await expect(page.locator('.inventory_item_name')).toHaveText(productName);
  await page.waitForTimeout(500);

  await page.getByRole('button', { name: 'Open Menu' }).click();
   await page.waitForTimeout(500);

  await page.locator('[data-test="logout-sidebar-link"]').click();
});