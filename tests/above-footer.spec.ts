import { test, expect } from '@playwright/test';

test.describe('Above Footer Section', () => {
  test('Village landscape image is placed edge-to-edge right above the footer', async ({ page }) => {
    await page.goto('/');

    const landscapeImage = page.locator('img[alt="Village landscape silhouette"]');
    await expect(landscapeImage).toBeVisible();
    await expect(landscapeImage).toHaveAttribute('src', /above-the-footbar\.png/);

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Check full width
    const imageBox = await landscapeImage.boundingBox();
    const viewportSize = page.viewportSize();
    expect(imageBox).toBeTruthy();
    expect(viewportSize).toBeTruthy();

    if (imageBox && viewportSize) {
      // Allow a small 1px variance for rounding
      expect(Math.abs(imageBox.width - viewportSize.width)).toBeLessThanOrEqual(1);
    }

    // Check vertical alignment (bottom of image touching top of footer)
    const footerBox = await footer.boundingBox();
    expect(footerBox).toBeTruthy();

    if (imageBox && footerBox) {
      // The bottom of the image should be exactly equal to the top of the footer
      const imageBottom = imageBox.y + imageBox.height;
      expect(Math.abs(imageBottom - footerBox.y)).toBeLessThanOrEqual(1);
    }
  });
});
