# MakerGhat OurStory Page Replication

This project is a pixel-accurate recreation of the MakerGhat "Our Story" page using Next.js and Tailwind CSS, based on the provided Figma design specs.

## Live Deployment
Live on Vercel: *(Vercel deployment URL here)*

## Project Structure
- src/app/page.tsx: Main structural layout, featuring overlapping desktop tabs and responsive image stacking.
- src/components/Timeline.tsx: Component managing the vertical chronological history of MakerGhat.
- src/components/Footer.tsx: 4-column responsive footer.
- src/components/Navbar.tsx: Responsive top navigation.
- public/images/: Exported static assets from Figma.

## Development Approach
1. **Figma CSS Extraction**: We analyzed the raw CSS exports from Figma (css(all layers)-export.txt) to derive exact widths, coordinates, spacing, and brand colors.
2. **Responsive Translation**: We adapted the rigid 1440px absolute coordinate system from Figma into flexible Tailwind classes. Negative margins (-ml-[32px]) were used to mimic the exact overlapping folder-tab appearance on desktop, falling back to a horizontal scrolling container on mobile viewports.
3. **Mobile First & Breakpoints**: Standard Tailwind breakpoints (md:) were utilized to switch from single-column mobile views to multi-column desktop views. Margins and image heights were proportionally scaled down for 375px screens to prevent overflow and maintain touch-friendly tap targets.

## Assumptions Made
- The absolute positioning in Figma was a stylistic choice for the desktop layout, not a mandate for mobile.
- The Parkinsans and Outfit font families are available globally in the project. (Resolved next/font/google build issues by standardizing local font usage).

## AI Attribution
This project was developed with the assistance of **Google Antigravity Agent**. 
AI was utilized for:
- Automating the translation of Figma CSS coordinates into responsive Tailwind structures.
- Debugging Vercel build errors related to Windows native bindings and Font fetching.
- Structuring the React component hierarchy.
- Generating the implementation plan and verifying viewport regressions.

