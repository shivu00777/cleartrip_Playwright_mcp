import { test, expect } from '@playwright/test';

test('Automate bus booking on Cleartrip from Delhi to Jaipur on 18 jan 2026', async ({ browser }) => {
  const context = await browser.newContext({ permissions: [] });
  const page = await context.newPage();
  // Navigate to Cleartrip homepage
  await page.goto('https://www.cleartrip.com');

  // Close popup if it appears
  // await page.locator("//div[@class='pb-1 px-1 flex flex-middle nmx-1']//*[name()='svg']").click();

// Close popup ONLY if it appears (CI safe)
const closePopup = page.locator('svg[data-testid="close"]');
if (await closePopup.isVisible({ timeout: 3000 })) {
  await closePopup.click();
}

  
  // Click on Buses link
  await page.getByRole('link', { name: 'Buses Buses' }).click();

  // Wait for the bus search form to load
  await expect(page).toHaveURL(/.*bus/);

  // Fill "Leaving from?" with Delhi
  await page.getByRole('textbox', { name: 'Leaving from?' }).click();
  await page.getByText('Delhi', { exact: true }).click();

  // Fill "Going to?" with Jaipur
  await page.getByRole('textbox', { name: 'Going to?' }).click();
  await page.getByText('Jaipur').first().click();

  // Select date: 18 January 2026
  await page.locator(".icon-3").click();
  await page.waitForTimeout(2000);
  await page.locator('[class="sc-aXZVg jGgDjX flex ta-right  flex-middle"]').click();
  await page.getByText('18', { exact: true }).click();

  // Click Search Buses
  await page.getByRole('button', { name: 'Search Buses' }).click();

  // Assert that results page is loaded with buses found
  await expect(page).toHaveURL(/.*results.*/);
  await expect(page.getByText('Buses found')).toBeVisible();

  // Select the first available bus
  await page.getByRole('button', { name: 'Select seat' }).first().click();
  await page.waitForTimeout(2000);
});
