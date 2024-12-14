import { test, expect } from "@playwright/test";

test("User are able to navigate to the homepage", async ({page}) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await expect(page.getByLabel('store logo')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Home Page');
});