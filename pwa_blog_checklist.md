# Blog Project Checklist: Priority-Based Roadmap

## 1. Project Setup
- [x] Initialize project with version control (Git)
- [x] Set up project structure (src, public, assets, etc.)
- [x] Configure package manager and dependencies (Tailwind CSS, daisyUI, Next.js, etc.)
- [x] Set up code formatting and linting (Prettier, ESLint)

## 2. UI Scaffolding & Design
- [x] Install and configure Tailwind CSS and daisyUI
- [x] Pick a color palette and font pairing 
- [ ] Improve typography and spacing (font hierarchy, padding, margin)
- [ ] Redesign featured article card (overlay text, gradient, larger image, bold headline)
- [ ] Redesign side/bottom article cards (consistent aspect ratio, rounded corners, hover effects)
- [ ] Add section headers (e.g., "Featured", "Latest", "Opinion")
- [ ] Add a right sidebar for "Opinion" or "Trending" (WSJ style)
- [ ] Add a real or stylized logo for blog.moikas
- [ ] Polish navbar: hover/active states, sticky on scroll, prominent search bar
- [ ] Add a theme toggle for dark/light mode (daisyUI theme switcher)
- [ ] Add author avatars and meta info (date, read time, comment count)
- [ ] Add colored badges for categories/tags (e.g., "REVIEW", "NEWS")
- [ ] Add a simple footer with copyright, links, and social icons
- [ ] Use daisyUI's built-in themes/components for rapid improvement
- [ ] Ensure all UI is responsive and accessible
- [ ] Add playful colors and large images for Kotaku-inspired sections
- [ ] Use minimal, elegant palette and whitespace for WSJ-inspired sections

## 3. Authentication & Authorization (Clerk)
- [ ] Install and configure Clerk in the project
- [ ] Set up ClerkProvider in layout
- [ ] Implement sign up, sign in, and sign out flows
- [ ] Protect routes for authenticated users (e.g., post creation, editing)
- [ ] Add user profile management UI

## 4. Database & Backend (Supabase)
- [ ] Set up Supabase project and database
- [ ] Configure Supabase client in Next.js
- [ ] Design and create tables for users, posts, comments, categories, etc.
- [ ] Implement CRUD operations for blog posts (create, read, update, delete)
- [ ] Implement user roles/permissions if needed
- [ ] Integrate Supabase authentication with Clerk (if required)

## 5. Blog Post Editor (BlockNote)
- [ ] Install and configure BlockNote editor
- [ ] Integrate BlockNote for rich text blog post creation/editing
- [ ] Save and load blog post content from Supabase
- [ ] Support images, videos, and embeds in posts
- [ ] Add markdown export/import if needed

## 6. Content Management
- [ ] Support for text, image, and video articles
- [ ] Author profiles and avatars
- [ ] Article categories/tags
- [ ] Search and filter functionality
- [ ] Comments or reactions (optional)

## 7. Progressive Web App (PWA) Features
- [x] Add `manifest.json` with app name, icons, theme color, and display mode
- [x] Implement service worker for offline support and caching
- [x] Enable installability (Add to Home Screen prompt)
- [ ] Test PWA compliance using Lighthouse

## 8. SEO Best Practices
- [ ] Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, etc.)
- [ ] Set unique, descriptive `<title>` and `<meta description>` for each page/article
- [ ] Use Open Graph and Twitter Card meta tags for social sharing
- [ ] Generate and submit sitemap.xml and robots.txt
- [ ] Use structured data (JSON-LD) for articles (text, image, video)
- [ ] Optimize images (responsive, lazy loading, alt text)
- [ ] Ensure fast load times (optimize assets, code splitting, minification)
- [ ] Use canonical URLs to prevent duplicate content

## 9. Accessibility (a11y)
- [ ] Ensure keyboard navigation for all interactive elements
- [ ] Use sufficient color contrast (WCAG 2.1 AA)
- [ ] Provide skip navigation links
- [ ] Use ARIA attributes where necessary
- [ ] Add alt text for all images
- [ ] Provide captions/transcripts for videos
- [ ] Test with screen readers

## 10. Testing & Quality Assurance
- [ ] Write unit, integration, and end-to-end tests
- [ ] Test on multiple browsers and devices
- [ ] Validate HTML, CSS, and accessibility
- [ ] Regular code reviews

## 11. Deployment & Monitoring
- [ ] Set up automated build and deployment pipeline
- [ ] Enable HTTPS and security best practices
- [ ] Monitor performance and errors (e.g., via analytics, Sentry)
- [ ] Regularly update dependencies and audit for vulnerabilities

---

**Progress Notes:**
- Tailwind CSS and daisyUI are installed and configured.
- PWA manifest and service worker are implemented and integrated in the layout.
- Next: UI scaffolding, Clerk, Supabase, and BlockNote integration.

**References:**
- [Best Practices for PWA Accessibility](https://blog.pixelfreestudio.com/best-practices-for-pwa-accessibility/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/forced-color-adjust)
- [daisyUI Blog Template Guide](https://daisyui.com/blog/how-to-make-a-blog-quickly-using-astro-and-daisyUI)
- [daisyUI Install Guide for Next.js](https://daisyui.com/blog/install-daisyui-and-tailwindcss-in-nextjs) 