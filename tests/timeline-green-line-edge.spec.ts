import { test, expect } from '@playwright/test';

test.describe('Timeline Green Line Edge Alignment', () => {
  test('Green line should start from the right edge of the yellow container', async ({ page }) => {
    await page.goto('http://localhost:3000/our-story');

    // Get the yellow container
    const yellowContainer = page.locator('#timeline-main-container');
    const containerBox = await yellowContainer.boundingBox();
    expect(containerBox).not.toBeNull();

    // Get the green line SVG container in DesktopTimeline
    const greenLine = page.locator('#desktop-timeline img[alt="Green Path"]').first();
    const greenLineBox = await greenLine.boundingBox();
    expect(greenLineBox).not.toBeNull();

    // The right edge of the green line should be equal to the right edge of the yellow container
    // We allow a small pixel tolerance (e.g., 2px) for rendering differences
    const containerRightEdge = containerBox!.x + containerBox!.width;
    const greenLineRightEdge = greenLineBox!.x + greenLineBox!.width;

    expect(Math.abs(containerRightEdge - greenLineRightEdge)).toBeLessThan(5);
  });
});
