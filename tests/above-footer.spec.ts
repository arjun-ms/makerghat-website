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

    // Check vertical alignment (bottom of wrapper touching top of footer)
    const wrapper = landscapeImage.locator('..');
    const wrapperBox = await wrapper.boundingBox();
    const footerBox = await footer.boundingBox();
    
    expect(wrapperBox).toBeTruthy();
    expect(footerBox).toBeTruthy();

    if (wrapperBox && footerBox) {
      // The bottom of the wrapper should be at or slightly below the top of the footer 
      // (0 gap or up to 1px overlap to prevent subpixel white lines)
      const wrapperBottom = wrapperBox.y + wrapperBox.height;
      const gap = footerBox.y - wrapperBottom;
      
      // Gap must not be positive (no white space)
      expect(gap).toBeLessThanOrEqual(0);
      
      // Overlap must not be more than 1.5px
      expect(gap).toBeGreaterThanOrEqual(-1.5);
    }
  });
});
