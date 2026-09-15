import { test, expect } from '@playwright/test';

test.describe('Timeline General Layout', () => {
  test('Green line starts below tower image', async ({ page }) => {
    await page.goto('/');

    const desktopTimeline = page.locator('#desktop-timeline').first();
    await expect(desktopTimeline).toBeVisible();

    const towerImage = desktopTimeline.locator('img[alt="Kids Building Tower"]').first();
    const greenLine = desktopTimeline.locator('img[alt="Green Path"]').first();

    await expect(towerImage).toBeVisible();
    await expect(greenLine).toBeVisible();

    const towerBox = await towerImage.boundingBox();
    const greenLineBox = await greenLine.boundingBox();

    if (towerBox && greenLineBox) {
      // The green line should start below the tower image's bottom edge!
      expect(greenLineBox.y).toBeGreaterThanOrEqual(towerBox.y + towerBox.height - 10); // allowing a small overlap
    }
  });

  test('Container uses 1440px max-width to reduce white space', async ({ page }) => {
    await page.goto('/');
    
    // The container should be allowed to grow up to 1440px, not restricted to 1228px
    const desktopTimeline = page.locator('#desktop-timeline').first();
    const box = await desktopTimeline.boundingBox();
    
    // We expect the width to be greater than 1228px if the viewport is large enough (default playwright is 1280)
    // Actually, let's set viewport to 1440 and check
    await page.setViewportSize({ width: 1440, height: 900 });
    const newBox = await desktopTimeline.boundingBox();
    
    if (newBox) {
      expect(newBox.width).toBeGreaterThan(1228);
    }
  });
});
