import { test, expect } from '@playwright/test';

test.describe('Section 2 Middle Elements', () => {
  test('Decorators are positioned correctly relative to 2018 and 2019', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 2000 });
    await page.goto('/');
    
    const timelineWrapper = page.locator('#desktop-timeline').first();
    await expect(timelineWrapper).toBeVisible({ timeout: 10000 });
    
    const layout = await page.evaluate(() => {
      const timeline = document.getElementById('desktop-timeline');
      if (!timeline) return { success: false, error: 'No timeline' };
      
      const getRect = (alt: string) => timeline.querySelector(`img[alt="${alt}"]`)?.getBoundingClientRect();
      const getYear = (text: string) => Array.from(timeline.querySelectorAll('span')).find(el => el.textContent === text)?.parentElement?.getBoundingClientRect();
      
      const yellowArrows = getRect('yellow up arrows');
      const powai = getRect('2018'); // alt="2018" is powai_1.png
      
      const tools = getRect('tools');
      const year2018 = getYear('2018');
      
      const money = getRect('money on hand');
      const year2019 = getYear('2019');
      
      const printer = getRect('2019'); // alt="2019" is 3d_1.png
      const ellipse = getRect('green Ellipse');
      
      if (!yellowArrows || !powai || !tools || !year2018 || !money || !year2019 || !printer || !ellipse) {
        return { success: false, error: 'Missing elements' };
      }
      
      // 1. Yellow arrows align top with Powai image
      const isYellowArrowsAligned = Math.abs(yellowArrows.top - powai.top) < 50;
      
      // 2. Tools is below 2018 year box
      const isToolsBelow2018 = tools.top > year2018.bottom;
      const isToolsAlignedX2018 = Math.abs(tools.left + tools.width/2 - (year2018.left + year2018.width/2)) < 80;
      
      // 3. Money is below 2019 year box
      const isMoneyBelow2019 = money.top > year2019.bottom;
      const isMoneyAlignedX2019 = Math.abs(money.left + money.width/2 - (year2019.left + year2019.width/2)) < 80;
      
      // 4. Green ellipse is slightly right of 3D printer
      const isEllipseRightOfPrinter = ellipse.right > printer.right;
      const isEllipseAlignedBottom = Math.abs(ellipse.bottom - printer.bottom) < 50;
      
      return {
        success: true,
        isYellowArrowsAligned,
        isToolsBelow2018,
        isToolsAlignedX2018,
        isMoneyBelow2019,
        isMoneyAlignedX2019,
        isEllipseRightOfPrinter,
        isEllipseAlignedBottom
      };
    });
    
    expect(layout.success, layout.error).toBe(true);
    expect(layout.isYellowArrowsAligned, 'Yellow arrows should align top with powai image').toBe(true);
    expect(layout.isToolsBelow2018, 'Tools should be below 2018 box').toBe(true);
    expect(layout.isToolsAlignedX2018, 'Tools should be horizontally aligned with 2018 box').toBe(true);
    expect(layout.isMoneyBelow2019, 'Money should be below 2019 box').toBe(true);
    expect(layout.isMoneyAlignedX2019, 'Money should be horizontally aligned with 2019 box').toBe(true);
    expect(layout.isEllipseRightOfPrinter, 'Ellipse should be right of 3D printer').toBe(true);
    expect(layout.isEllipseAlignedBottom, 'Ellipse should be bottom aligned with 3D printer').toBe(true);
  });
});
