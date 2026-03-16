# jkim810.github.io — Future Work

## Pending

- [ ] **CV download** — upload PDF to `public/cv.pdf` and add a download link in the sidebar or About section
- [ ] **Talks/Presentations section** — `data/talks.ts` is scaffolded and `TalksSection` is commented out in `app/page.tsx`; populate with talk entries and re-enable
- [ ] **Blog posts** — blog is scaffolded at `/blog` with MDX support; write first post (e.g. spatial omics methods explainer)
- [ ] **Verify 2022 medRxiv paper** — check if "Persistent alveolar type 2 dysfunction and lung structural derangement in post-acute COVID-19" has been published in a journal since 2022; update venue + DOI if so
- [ ] **2025 bioRxiv paper** — update venue and add DOI once published in a journal

## Done

- [x] Next.js + Tailwind CSS v4 migration from Jekyll/al-folio
- [x] Editorial grid layout (130px margin column, blue spine #2563eb)
- [x] Cool Stone sidebar with ORCID, Google Scholar, X social links
- [x] Publications section with selected/all toggle and author truncation
- [x] Projects, Tools, News, Contact sections with real CV data
- [x] Active section tracking via IntersectionObserver + scroll fallback
- [x] Mobile-responsive layout — fixed top hamburger nav, full-width content
- [x] GitHub Actions auto-deployment to GitHub Pages
- [x] JK monogram favicon
- [x] Research interests paragraph in About section
- [x] Accessibility: focus rings, aria-labels, aria-current, skip-to-content
- [x] News dates formatted as "Jan 2025" etc.
- [x] Blog/Talks hidden with TODO comments pending content
