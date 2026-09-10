# MakerGhat - Our Story

This project is a pixel-accurate recreation of the MakerGhat "Our Story" page, built with Next.js and Tailwind CSS.

## Project Structure

- `src/app/page.tsx`: The main landing page integrating all components.
- `src/app/layout.tsx`: Root layout defining fonts and global settings.
- `src/app/globals.css`: Global styles, font definitions (Outfit, Parkinsans), and Tailwind theme configurations.
- `src/components/Navbar.tsx`: Responsive navigation bar.
- `src/components/Footer.tsx`: Semantic footer with FAQs, resources, and newsletter subscription form.
- `src/components/Timeline.tsx`: Horizontal timeline component.
- `src/components/TeamSection.tsx`: "Behind MakerGhat" section displaying the team, support system, and volunteers.
- `src/components/PartnerSection.tsx`: "Our Partners" section displaying the STEM Collective highlight and partner grid.
- `public/images/`: Contains all assets extracted directly from the provided Figma file.

## Development Approach

1. **Figma Extraction**: Extracted colors, typography, layout structures, and PNG assets using the Framelink Figma MCP.
2. **Component Modularity**: Split the monolithic UI into functional React components (`Navbar`, `Timeline`, `TeamSection`, `Footer`) to ensure maintainability.
3. **Responsive Design**: Designed Mobile-First using Tailwind breakpoints (`sm:`, `md:`) to ensure perfect rendering across 375px (mobile), 768px (tablet), and 1440px+ (desktop) viewports. Touch-friendly targets and flexible CSS Grids/Flexbox were utilized.
4. **Typography Optimization**: Configured Next.js `next/font/google` for optimal Cumulative Layout Shift (CLS) prevention using the `Outfit` and `Parkinsans` fonts.

## Assumptions Made

- **Interactions & States**: The mobile hamburger menu icon and the desktop dropdown arrows (Curriculum, Training, Programs) are currently static. Because open menu frames were not provided in the Figma design, creating custom sub-links and dropdown styling was omitted to avoid scope creep and strictly adhere to the provided design.
- **Form Submission**: The newsletter subscription is a semantic `<form>` but currently lacks a submission handler or backend endpoint.
- **Routing**: Links are standard Next.js `<Link>` components, temporarily pointing to `#` until respective pages are developed.

## AI Attribution

This project was built pair-programming with Google Antigravity. AI tools used:
- Antigravity Native Agent (Model: M16) for codebase scaffolding, Tailwind CSS implementation, debugging Windows native bindings, and component refactoring.
- Framelink Figma MCP for extracting design tokens and image assets directly from Figma.
- Subagent Parallel Reviewers for validating Code Standards and Spec Requirements.

## Deployment

To deploy this project to Vercel:
1. Push this repository to your GitHub account.
2. Log into [Vercel](https://vercel.com).
3. Import the repository and deploy with default Next.js settings.
