# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, localhost:5173)
npm run build     # TypeScript compile + Vite production build
npm run preview   # Preview production build locally
npm run lint      # ESLint check
```

There are no tests in this project.

## Architecture

Single-page portfolio built with React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion.

**Root controller — `src/App.tsx`**
Manages all global state: `lang` (EN/ES), `activeSection` (scroll-spy), and `isProjectOpen` (locks body scroll on mobile when a project modal is open). The Navigation component is conditionally hidden while a project modal is open. All section components and the layout components receive `t` (the active translation object) as a prop.

**Sections** live in `src/components/sections/` — Hero, About, Skills, Work, Contact — rendered in order inside App.tsx. There is also a legacy `src/components/` directory (Hero.tsx, About.tsx, Work.tsx, Connect.tsx, CodeBlock.tsx) that is **no longer used** and can be ignored.

**Internationalization — `src/data/translations.ts`**
All UI strings are centralized here in two objects (`en` / `es`). Keys follow the pattern `section_property` (e.g. `hero_title`, `nav_about`, `contact_send`). The `t` prop is typed as `any` throughout, so adding a new key just requires adding it to both language objects. `TranslationKey` is exported for type-safe access when needed.

**Project data — `src/data/projects.tsx`**
`getProjects(t)` returns the projects array, using translation keys for descriptive text so projects are bilingual. Add new projects here. Tech stack icon images are loaded from `public/projets/` (note: folder name is "projets", not "projects").

**Skills globe — `src/components/orbiting-skills.tsx`**
Self-contained animated component. Two concentric orbits (inner cyan, outer purple) each driven by a `requestAnimationFrame` loop. Supports mouse drag to rotate. Sizes adapt to mobile via a `isMobile` state. Add/remove skills by editing the `skillsConfig` array inside `OrbitingSkillsGlobe`. SVG icons for common techs are inline; images for others are loaded from `public/projets/`.

**Animations — `src/utils/animations.ts`**
Shared Framer Motion variant presets (`containerVariants`, `itemVariants`, `codeContainerVariants`, `codeLineVariants`). Sections use `whileInView` with these variants for scroll-triggered entrance animations.

**Navigation**
- Desktop: fixed vertical bar on the right (`lg:flex`, hidden below lg).
- Mobile: fixed top bar + fullscreen overlay menu (`lg:hidden`). The `LanguageSelector` component is desktop-only (`hidden lg:block` in App.tsx); the mobile overlay includes inline language toggle buttons.
- Scroll-spy: `IntersectionObserver` in App.tsx watches each section id and updates `activeSection`, which the Navigation uses to highlight the current section.
