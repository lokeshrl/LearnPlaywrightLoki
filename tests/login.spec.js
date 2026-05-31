import { test, expect } from '@playwright/test';

test('Verify login with valid credentials', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

await page.locator("input[name='username']").fill("Admin")

await page.locator("//input[@type='password']").fill("admin123")

await page.locator("//button[contains(.,'Login')]").click()

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

})

