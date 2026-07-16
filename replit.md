# Jeevan Kadam Portfolio

A personal portfolio website built with React + Vite + Tailwind CSS.

## Stack

- **React 19** with React Router v7 (SPA)
- **Vite 6** dev server on port 5000
- **Tailwind CSS 3** for styling
- **Framer Motion** for page transitions and animations
- **Three.js / @react-three/fiber** for 3D elements
- **GSAP** for advanced animations
- **Redux Toolkit** for state management

## Pages

- `/` — Home (hero, typed animation, profile)
- `/about-us` — About
- `/skills` — Skills with skill bars
- `/projects` — Projects
- `/experience` — Experience timeline
- `/education` — Education
- `/open-source` — Open Source contributions
- `/contact` — Contact form

## Running

```bash
npm run dev
```

The workflow **Start application** runs `npm run dev` and serves on port 5000.

## Environment Variables

- `VITE_GITHUB_TOKEN` — GitHub personal access token used to fetch repository data (set as a Replit Secret)

## Notes

- Dependencies must be installed with `--legacy-peer-deps` due to `react-helmet-async` not yet declaring React 19 peer support.
- The `node_modules` from the original repo were platform-specific (macOS); they were reinstalled fresh for Linux on Replit.

## User Preferences

- Keep the existing project structure and stack.
