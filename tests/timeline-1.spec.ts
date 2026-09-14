import { test, expect } from '@playwright/test';

test.describe('Timeline Section 1 (2..png)', () => {
  test('Timeline nodes are present and correctly positioned on left/right', async ({ page }) => {
    await page.goto('/');

    // Target the DesktopTimeline specifically using its ID
    const desktopTimeline = page.locator('#desktop-timeline').first();
    const year2018 = desktopTimeline.locator('text="2018"').first();
    const year2019 = desktopTimeline.locator('text="2019"').first();

    await expect(year2018).toBeVisible();
    await expect(year2019).toBeVisible();

    const box2018 = await year2018.boundingBox();
    const box2019 = await year2019.boundingBox();
    const viewportSize = page.viewportSize();

    expect(box2018).toBeTruthy();
    expect(box2019).toBeTruthy();
    expect(viewportSize).toBeTruthy();

    if (box2018 && box2019 && viewportSize) {
      const centerX = viewportSize.width / 2;

      // 2018 should be on the left side
      expect(box2018.x + box2018.width).toBeLessThan(centerX);

      // 2019 should be on the right side
      expect(box2019.x).toBeGreaterThan(centerX);

      // 2018 should be vertically above 2019, or roughly horizontally adjacent
      // Let's just ensure 2018's top is not below 2019's bottom
      expect(box2018.y).toBeLessThan(box2019.y + box2019.height);
    }

    const year2020 = desktopTimeline.locator('text="2020"').first();
    const year2021 = desktopTimeline.locator('text="2021"').first();

    await expect(year2020).toBeVisible();
    await expect(year2021).toBeVisible();

    const box2020 = await year2020.boundingBox();
    const box2021 = await year2021.boundingBox();

    if (box2020 && box2021 && viewportSize) {
      const centerX = viewportSize.width / 2;

      // In the timeline, 2020 should come before 2021 vertically!
      expect(box2020.y).toBeLessThan(box2021.y);
    }
  });
});
