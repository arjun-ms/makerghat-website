import { test, expect } from '@playwright/test';

test.describe('Top Section Layout', () => {
  test('Navbar contains the correct image logo', async ({ page }) => {
    await page.goto('/');
    const logoImage = page.locator('nav img[alt="MakerGhat Logo"]');
    await expect(logoImage).toBeVisible();
    await expect(logoImage).toHaveAttribute('src', /maker_ghat_main_top_left_logo\.png/);
  });

  test('Tabs have the slanted right edge and overlap correctly', async ({ page }) => {
    await page.goto('/');
    
    // Find the tabs by their text content
    const storyTab = page.locator('text="MakerGhat story"').locator('..');
    const teamTab = page.locator('text="MakerGhat team"').locator('..');
    
    // Check that clip-path is applied for the slant
    const styleAttr = await storyTab.getAttribute('style');
    expect(styleAttr).toContain('calc(100% - 25px) 0');
    
    // Check the overlap by getting bounding boxes of the parent container holding the tabs
    const storyContainer = page.locator('.flex-shrink-0').nth(0);
    const teamContainer = page.locator('.flex-shrink-0').nth(1);
    
    const storyBox = await storyContainer.boundingBox();
    const teamBox = await teamContainer.boundingBox();
    
    expect(storyBox).toBeTruthy();
    expect(teamBox).toBeTruthy();
    
    if (storyBox && teamBox) {
      // The right edge of the first tab container should be further right than the left edge of the second container
      expect(storyBox.x + storyBox.width).toBeGreaterThan(teamBox.x);
    }
  });

  test('Hero section title and background are correctly placed', async ({ page }) => {
    await page.goto('/');
    
    const heroTitle = page.locator('h1', { hasText: 'The story that built MakerGhat' });
    await expect(heroTitle).toBeVisible();
    
    const heroImage = page.locator('img[alt="Hero Background"]');
    await expect(heroImage).toBeVisible();
    
    // Title should be positioned above the hero image visually
    const titleBox = await heroTitle.boundingBox();
    const imageBox = await heroImage.boundingBox();
    
    expect(titleBox).toBeTruthy();
    expect(imageBox).toBeTruthy();
    
    if (titleBox && imageBox) {
      expect(titleBox.y + titleBox.height).toBeLessThan(imageBox.y);
    }
  });
});
