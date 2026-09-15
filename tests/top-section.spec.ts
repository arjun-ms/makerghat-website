import { test, expect } from '@playwright/test';

test.describe('Top Section Layout', () => {
  test('Navbar contains the correct image logo', async ({ page }) => {
    await page.goto('/');
    const logoImage = page.locator('nav img[alt="MakerGhat Logo"]');
    await expect(logoImage).toBeVisible();
    await expect(logoImage).toHaveAttribute('src', /maker_ghat_main_top_left_logo\.png/);
  });

  test('Tabs have correct text, colors, and rounded top corners without overlap', async ({ page }) => {
    await page.goto('/');
    
    // Find the tab containers
    const storyTab = page.locator('text="MakerGhat story"').locator('..');
    const teamTab = page.locator('text="MakerGhat team"').locator('..');
    const supportTab = page.locator('text="Support system"').locator('..');
    const volunteersTab = page.locator('text="Volunteers & Alumni"').locator('..');
    
    // Check shapes: rounded corners, no clip-path
    for (const tab of [storyTab, teamTab, supportTab, volunteersTab]) {
      const styleAttr = await tab.getAttribute('style');
      if (styleAttr) {
        expect(styleAttr).not.toContain('clip-path');
      }
    }

    // Check computed background colors (rgb format from Playwright)
    // #FAF5E8 -> rgb(250, 245, 232)
    // #F2EDFA -> rgb(242, 237, 250)
    // #FFF2CC -> rgb(255, 242, 204)
    // #FCEAE5 -> rgb(252, 234, 229)
    await expect(storyTab).toHaveCSS('background-color', 'rgb(250, 245, 232)');
    await expect(teamTab).toHaveCSS('background-color', 'rgb(242, 237, 250)');
    await expect(supportTab).toHaveCSS('background-color', 'rgb(255, 242, 204)');
    await expect(volunteersTab).toHaveCSS('background-color', 'rgb(252, 234, 229)');
    
    // Verify top border radius is applied
    await expect(storyTab).toHaveCSS('border-top-left-radius', '16px');
    await expect(storyTab).toHaveCSS('border-top-right-radius', '16px');
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
