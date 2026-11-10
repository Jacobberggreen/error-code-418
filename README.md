<p align="center">
  <img src="docs/banner.png" alt="Error code 418" width="720">
</p>

<h1 align="center">Error code 418</h1>

<p align="center">
  The portfolio of four interaction designers from Umeå University.<br>The things we build together, at hackathons and beyond.<br>
  <a href="https://jacobberggreen.github.io/error-code-418/"><b>jacobberggreen.github.io/error-code-418</b></a>
</p>

<p align="center">
  <a href="https://github.com/Jacobberggreen/error-code-418/actions/workflows/ci.yml"><img src="https://github.com/Jacobberggreen/error-code-418/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://github.com/Jacobberggreen/error-code-418/actions/workflows/pages.yml"><img src="https://github.com/Jacobberggreen/error-code-418/actions/workflows/pages.yml/badge.svg" alt="Deploy"></a>
  <img src="https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white" alt="Vite 7">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="MIT license"></a>
</p>

## What this is

A single-page site for **Error code 418**, a team of four interaction designers. It shows what we build together at hackathons and in other projects, and who we are.

- **Work**: an index of projects. Each opens a full-screen case with the walkthrough, the story and the numbers.
- **Team**: one tile per person, with a profile, the projects they worked on, GitHub and LinkedIn.
- **Command palette**: press <kbd>⌘</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd> to jump to a project, a person or a link.

The name is the HTTP status [418, "I'm a teapot"](https://datatracker.ietf.org/doc/html/rfc2324). The footer answers it.

## Stack

React 19 · Vite 7 · plain CSS (no framework) · GSAP for the intro · Phosphor icons. Deployed to GitHub Pages by GitHub Actions.

## Run it locally

```bash
npm ci
npm run dev        # http://localhost:5173
```

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Dev server with hot reload                |
| `npm run build`   | Production build into `dist/`             |
| `npm run preview` | Serve the production build locally        |
| `npm run lint`    | ESLint                                    |

Requires Node 20 or newer.

## Add a project

All content is data. Nothing in the components needs to change.

1. Put the images in `public/images/`.
2. Copy the object in [`src/data/projects.js`](src/data/projects.js), change the fields and set `cover` and `gallery`.
3. Push to `main`. The site redeploys itself.

Team members live in [`src/data/team.js`](src/data/team.js): name, GitHub, LinkedIn and an optional photo in `public/team/`.

## Project structure

```
src/
  components/   Hero, Work, Team, CaseStudy, MemberDialog, CommandPalette, Modal ...
  data/         projects.js, team.js, site.js: all content
  styles.css    tokens first, then one section per part of the page
public/
  images/       project images and film
  team/         portraits
.github/
  workflows/    ci.yml (lint + build), pages.yml (deploy)
```

## Design notes

Near-black ground, one coral accent, Bricolage Grotesque for headings and Inter for text. Controls are square, and slanted bands are used for the team. Motion is transform and opacity only, and everything respects `prefers-reduced-motion`.

## Deployment

Every push to `main` runs [`pages.yml`](.github/workflows/pages.yml): install, build, publish `dist/` to GitHub Pages. The Vite `base` is relative (`./`), so the same build works under `/<repo>/` and on a custom domain.

## License

The code is released under the [MIT License](LICENSE). The text, photos, project images and film in `public/` and `src/data/` belong to the team and are not covered by it.
