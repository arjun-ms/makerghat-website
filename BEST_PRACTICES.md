# Frontend Alignment & Layout Best Practices

This document outlines the proven strategies (and anti-patterns) we have discovered while attempting to perfectly align frontend components (specifically absolutely positioned images and UI decorators) to match exact Figma specifications.

## What Works (Proven Approaches)

1. **Calculate, Don't Guess**
   - Instead of eyeballing pixel values, pull the exact coordinates of structural anchor elements (e.g., from `timeline-coords.json` or React component styles). Use their `x`, `y`, `width`, and `height` to mathematically calculate the center points or offset edges for floating decorators.

2. **Test Real-Time Tweaks via `element.style`**
   - When refining pixel-perfect positioning in the browser DevTools, always apply tweaks directly to the **Styles tab (`element.style`)**. This updates the DOM instantly and avoids Tailwind JIT compilation issues.

3. **Validate with Bounding Box Playwright Tests**
   - Define exact UI layout seams by writing Playwright tests that extract `getBoundingClientRect()` for sibling elements. Assert their spatial relationships (e.g., `elementA.right < elementB.left`, or `Math.abs(elementA.top - elementB.top) < 10`). This codifies visual requirements into testable constraints.

4. **Take Programmatic Screenshots**
   - Run simple Node scripts utilizing Playwright (`page.screenshot`) to take full-page snapshots of the local environment. Comparing the rendered output side-by-side with the reference mockup prevents cumulative layout drift.

5. **Clear Cache on Stale HMR**
   - If Tailwind arbitrary values (like `top-[1250px]`) suddenly stop reflecting in the local environment despite file saves, kill the dev server, wipe the `.next` directory, and restart. 

## What Doesn't Work (Anti-Patterns)

1. **Editing Tailwind Classes in DevTools HTML Tab**
   - Trying to change `top-[1120px]` to `top-[1200px]` in the browser's Elements HTML tab usually fails. Tailwind JIT only compiles classes it detects in your source code during build time. The new class won't exist in the CSS stylesheet yet.

2. **Eyeballing Relative to Complex Vectors**
   - Attempting to position decorators visually relative to a giant, complex SVG background path is highly error-prone because the SVG lacks individual bounding boxes for its curves. Instead, anchor the positioning to nearby HTML text blocks or image containers whose `getBoundingClientRect()` is standard.

3. **Overwriting Classes Blindly**
   - Guessing layout values iteratively without calculating the spatial gap between two known elements often results in regressions on adjacent elements. 
