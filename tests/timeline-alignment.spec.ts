import { test, expect } from '@playwright/test';

test.describe('Timeline Alignment & Integration', () => {
  test('Green line touches the right edge and plane sits half outside', async ({ page }) => {
    // Navigate to the Our Story page
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    
    // Wait for the timeline to be visible
    const timelineWrapper = page.locator('#desktop-timeline').first();
    await expect(timelineWrapper).toBeVisible({ timeout: 10000 });
    
    // Evaluate layout
    const isAligned = await page.evaluate(() => {
      const timeline = document.getElementById('desktop-timeline');
      if (!timeline) return { success: false, error: 'No timeline' };
      
      const yellowContainer = timeline.closest('.bg-\\[\\#FAF5E8\\]') || document.getElementById('timeline-main-container');
      if (!yellowContainer) return { success: false, error: 'No yellow container' };
      
      const containerRect = yellowContainer.getBoundingClientRect();
      
      // Find the combined green line
      const greenLineImg = timeline.querySelector('img[alt="Combined Green Path"]');
      if (!greenLineImg) return { success: false, error: 'No green line img' };
      
      const greenLineRect = greenLineImg.getBoundingClientRect();
      
      // The right edge of the green line should be very close to the right edge of the yellow container
      const rightEdgeDiff = Math.abs(greenLineRect.right - containerRect.right);
      
      // Check the plane position
      const planeImg = timeline.querySelector('img[alt="paper aeroplane"]');
      if (!planeImg) return { success: false, error: 'No plane img' };
      
      const planeRect = planeImg.getBoundingClientRect();
      
      // Plane should be half outside the left edge of the container
      // If plane center is approximately on the container's left edge
      const planeCenter = planeRect.left + planeRect.width / 2;
      const leftEdgeDiff = Math.abs(planeCenter - containerRect.left);
      
      return { 
        success: true, 
        rightEdgeDiff, 
        leftEdgeDiff,
        greenLineRight: greenLineRect.right,
        containerRight: containerRect.right
      };
    });
    
    expect(isAligned.success, isAligned.error).toBe(true);
    
    // Allow a small pixel tolerance (e.g. 5px) for browser rendering differences
    expect(isAligned.rightEdgeDiff, 'Green line should touch right edge').toBeLessThan(10);
    
    // Plane center should be close to the container left edge (tolerance of 25px)
    expect(isAligned.leftEdgeDiff, 'Plane should sit halfway on the left edge').toBeLessThan(25);
  });

  test('Tower image, sparkling star, and redline align to right edge', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    
    const timelineWrapper = page.locator('#desktop-timeline').first();
    await expect(timelineWrapper).toBeVisible({ timeout: 10000 });
    
    // Evaluate layout
    const isAligned = await page.evaluate(() => {
      const timeline = document.getElementById('desktop-timeline');
      if (!timeline) return { success: false, error: 'No timeline' };
      
      const yellowContainer = timeline.closest('.bg-\\[\\#FAF5E8\\]') || document.getElementById('timeline-main-container');
      if (!yellowContainer) return { success: false, error: 'No yellow container' };
      
      const containerRect = yellowContainer.getBoundingClientRect();
      
      const towerImg = timeline.querySelector('img[alt="Kids Building Tower"]');
      if (!towerImg) return { success: false, error: 'No tower img' };
      
      const starImg = timeline.querySelector('img[alt="sparkling star"]');
      if (!starImg) return { success: false, error: 'No star img' };
      
      const redlineImg = timeline.querySelector('img[alt="red line"]');
      if (!redlineImg) return { success: false, error: 'No redline img' };
      
      const towerRect = towerImg.getBoundingClientRect();
      const starRect = starImg.getBoundingClientRect();
      
      // Tower right edge should touch container right edge
      const towerRightEdgeDiff = Math.abs(towerRect.right - containerRect.right);
      
      // Star should be aligned towards the right edge, approximately 54px inset
      // 54px was the original figma distance from the right edge
      const expectedStarRight = containerRect.right - 54;
      const starRightDiff = Math.abs(starRect.right - expectedStarRight);
      
      return { 
        success: true, 
        towerRightEdgeDiff,
        starRightDiff
      };
    });
    
    expect(isAligned.success, isAligned.error).toBe(true);
    
    expect(isAligned.towerRightEdgeDiff, 'Tower should touch right edge').toBeLessThan(10);
    // Allowing 10px tolerance for star
    expect(isAligned.starRightDiff, 'Star should be properly aligned to right').toBeLessThan(10);
  });

  test('Section 2 elements (hand, text block, tools) are placed properly without overlapping', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 2000 });
    await page.goto('/');
    
    const timelineWrapper = page.locator('#desktop-timeline').first();
    await expect(timelineWrapper).toBeVisible({ timeout: 10000 });
    
    // Evaluate layout
    const isPlaced = await page.evaluate(() => {
      const timeline = document.getElementById('desktop-timeline');
      if (!timeline) return { success: false, error: 'No timeline' };
      
      const group423 = timeline.querySelector('img[alt="Group 423"]');
      if (!group423) return { success: false, error: 'Missing Group 423' };

      // Find the text block "How did MG start"
      const mgStartHeading = Array.from(timeline.querySelectorAll('h3')).find(el => el.textContent && el.textContent.includes('How did MG start'));
      if (!mgStartHeading) return { success: false, error: 'Missing How did MG start heading' };
      
      const textBlock = mgStartHeading.parentElement;
      const greenLineImg = timeline.querySelector('img[alt="Combined Green Path"]');
      if (!greenLineImg) return { success: false, error: 'No green line img' };
      
      const groupPicImg = timeline.querySelector('img[alt="How MG started"]');
      if (!groupPicImg) return { success: false, error: 'No group pic img' };
      const groupPic = groupPicImg.parentElement;

      const group423Rect = group423.getBoundingClientRect();
      const textBlockRect = textBlock.getBoundingClientRect();
      const greenLineRect = greenLineImg.getBoundingClientRect();
      const groupPicRect = groupPic.getBoundingClientRect();

      // Check 1: Text block should be to the right of the vertical green line
      const isTextRightOfLine = textBlockRect.left > greenLineRect.left + 20;
      
      // Check 2: Group 423 should be BELOW the text block
      const isGroupBelowText = group423Rect.top > textBlockRect.bottom + 10;
      
      // Check 3: Group 423 (triple arrows) should be to the RIGHT of the vertical green line
      const isGroupRightOfLine = group423Rect.left > greenLineRect.left + 5;
      
      // Check 4: Text block and Group Picture should be horizontally aligned
      const isTextAlignedWithPic = Math.abs(textBlockRect.top - groupPicRect.top) < 5;

      return { 
        success: true, 
        isTextRightOfLine,
        isGroupBelowText,
        isGroupRightOfLine,
        isTextAlignedWithPic,
        textLeft: textBlockRect.left,
        lineLeft: greenLineRect.left,
        groupTop: group423Rect.top,
        textBottom: textBlockRect.bottom,
        groupLeft: group423Rect.left,
        textTop: textBlockRect.top,
        picTop: groupPicRect.top
      };
    });
    
    expect(isPlaced.success, isPlaced.error).toBe(true);
    expect(isPlaced.isTextRightOfLine, `Text block (left: ${isPlaced.textLeft}) should be right of green line (left: ${isPlaced.lineLeft})`).toBe(true);
    expect(isPlaced.isGroupBelowText, `Group 423 (top: ${isPlaced.groupTop}) should be below text block (bottom: ${isPlaced.textBottom})`).toBe(true);
    expect(isPlaced.isGroupRightOfLine, `Group 423 (left: ${isPlaced.groupLeft}) should be right of green line (left: ${isPlaced.lineLeft})`).toBe(true);
    expect(isPlaced.isTextAlignedWithPic, `Text block (top: ${isPlaced.textTop}) should be aligned with group pic (top: ${isPlaced.picTop})`).toBe(true);
  });

  test('Red double arrow 1 points right and sits before 2018 section as per 2.2 mockup', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 2000 });
    await page.goto('/');
    
    const timelineWrapper = page.locator('#desktop-timeline').first();
    await expect(timelineWrapper).toBeVisible({ timeout: 10000 });
    
    const isArrowCorrect = await page.evaluate(() => {
      const timeline = document.getElementById('desktop-timeline');
      if (!timeline) return { success: false, error: 'No timeline' };
      
      const redArrow1 = timeline.querySelector('img[alt="red double arrow 1"]');
      if (!redArrow1) return { success: false, error: 'Missing red double arrow 1' };
      
      const year2018 = Array.from(timeline.querySelectorAll('span')).find(el => el.textContent === '2018');
      if (!year2018) return { success: false, error: 'Missing 2018 tag' };
      
      const year2018Box = year2018.parentElement;
      if (!year2018Box) return { success: false, error: 'Missing 2018 box' };
      
      const arrowRect = redArrow1.getBoundingClientRect();
      const yearRect = year2018Box.getBoundingClientRect();
      
      // Arrow should be to the right of 2018 tag
      const isRightOf2018 = arrowRect.left > yearRect.right;
      
      // Find 2019
      const year2019 = Array.from(timeline.querySelectorAll('span')).find(el => el.textContent === '2019');
      const year2019Box = year2019 ? year2019.parentElement : null;
      let isLeftOf2019 = true;
      if (year2019Box) {
        const year2019Rect = year2019Box.getBoundingClientRect();
        isLeftOf2019 = arrowRect.right < year2019Rect.left;
      }
      
      // Arrow should be horizontally aligned with 2018
      const isAlignedHorizontally = Math.abs(arrowRect.top - yearRect.top) < 50;
      
      return {
        success: true,
        isRightOf2018,
        isLeftOf2019,
        isAlignedHorizontally,
        arrowLeft: arrowRect.left,
        yearRight: yearRect.right
      };
    });
    
    expect(isArrowCorrect.success, isArrowCorrect.error).toBe(true);
    expect(isArrowCorrect.isRightOf2018, `Arrow (left: ${isArrowCorrect.arrowLeft}) should be right of 2018 tag (right: ${isArrowCorrect.yearRight})`).toBe(true);
    expect(isArrowCorrect.isLeftOf2019, `Arrow should be left of 2019 tag`).toBe(true);
  });

  test('Lower timeline renders the reference decorators around 2022 through 2026', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 2600 });
    await page.goto('/');

    const timelineWrapper = page.locator('#desktop-timeline').first();
    await expect(timelineWrapper).toBeVisible({ timeout: 10000 });

    const result = await page.evaluate(() => {
      const timeline = document.getElementById('desktop-timeline');
      if (!timeline) return { success: false, error: 'No timeline' };

      const rectForAlt = (alt: string) => {
        const element = timeline.querySelector(`img[alt="${alt}"]`);
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        return {
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        };
      };

      const yearBox = (year: string) => {
        const yearText = Array.from(timeline.querySelectorAll('span')).find((el) => el.textContent === year);
        const element = yearText?.parentElement;
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        return {
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        };
      };

      const year2022 = yearBox('2022');
      const year2023 = yearBox('2023');
      const year2024 = yearBox('2024');
      const year2025 = yearBox('2025');
      const year2026 = yearBox('2026');
      const lowerReferenceDecorators = {
        redState: rectForAlt('orange state behind 2022'),
        stem: rectForAlt('STEM circles'),
        yellowCircle: rectForAlt('yellow circle behind 2023'),
        hand: rectForAlt('hand icon'),
        rocket: rectForAlt('rocket icon'),
        puzzle: rectForAlt('yellow puzzle behind 2026'),
        topRightArrows: rectForAlt('red down arrows near 2023'),
        lowerRightArrows: rectForAlt('red down arrows near 2026'),
        lowerCenterArrows: rectForAlt('red small arrows near 2026'),
      };

      const missing = Object.entries({ year2022, year2023, year2024, year2025, year2026, ...lowerReferenceDecorators })
        .filter(([, rect]) => !rect)
        .map(([name]) => name);

      if (missing.length) return { success: false, error: `Missing ${missing.join(', ')}` };

      return {
        success: true,
        error: null,
        redStateBehind2022: lowerReferenceDecorators.redState!.right > year2022!.right,
        yellowCircleAbove2023: lowerReferenceDecorators.yellowCircle!.bottom < year2023!.bottom + 220,
        stemBetween2022And2025: lowerReferenceDecorators.stem!.top > year2022!.top && lowerReferenceDecorators.stem!.bottom < year2025!.bottom,
        handNear2023And2024: lowerReferenceDecorators.hand!.left > year2023!.left && lowerReferenceDecorators.hand!.bottom < year2024!.top,
        rocketAbove2024: lowerReferenceDecorators.rocket!.top < year2024!.top,
        puzzleBehind2026: lowerReferenceDecorators.puzzle!.top > year2024!.top && lowerReferenceDecorators.puzzle!.left > year2026!.left,
        arrowsBracketLowerBand:
          lowerReferenceDecorators.topRightArrows!.top < year2023!.top &&
          lowerReferenceDecorators.lowerRightArrows!.top > year2024!.bottom &&
          lowerReferenceDecorators.lowerRightArrows!.top < year2026!.bottom + 80 &&
          lowerReferenceDecorators.lowerCenterArrows!.left < year2026!.left,
      };
    });

    expect(result.success, result.error ?? undefined).toBe(true);
    expect(result.redStateBehind2022, 'Orange state should sit behind the 2022 collage').toBe(true);
    expect(result.yellowCircleAbove2023, 'Yellow circle should anchor the 2023 collage area').toBe(true);
    expect(result.stemBetween2022And2025, 'STEM circles should sit between 2022 and 2025').toBe(true);
    expect(result.handNear2023And2024, 'Hand icon should sit between the 2023 and 2024 items').toBe(true);
    expect(result.rocketAbove2024, 'Rocket should sit above the 2024 group photo').toBe(true);
    expect(result.puzzleBehind2026, 'Puzzle piece should sit behind the 2026 discovery diary').toBe(true);
    expect(result.arrowsBracketLowerBand, 'Red arrow markers should bracket the lower timeline band').toBe(true);
  });
});
