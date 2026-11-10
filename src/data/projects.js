// One entry per thing we built together, newest first. Files live in public/images.
// To add a project: copy the object below, change the fields, drop the images in public/images.
//   kind     category shown on the card and used by the filter (e.g. Hackathon, Web, Design)
//   people   names exactly as in team.js
//   gallery  screens/film shown as tabs in the case: { id, label, image | video, alt, title, text }
//   story    short sections: what the problem was, how we approached it, what came out
export const projects = [
  {
    id: 'deja-view',
    title: 'Déjà View',
    year: '2026',
    kind: 'Hackathon',
    tagline: 'Ask for a dashboard in plain English. It checks whether one already exists before building a new one.',
    summary:
      'Since AI Hackathon in Turku, 38 hours, Bayer challenge "Build Less, Build Better". Companies drown in near-duplicate dashboards. Déjà View finds the one that fits, shows the risks, and only builds when nothing does.',
    people: ['Jacob Berggren', 'Omar Lundgren', 'Sebastian Gabrielsson', 'Adam Hultgren'],
    tags: ['React', 'Vite', 'WebLLM', 'SQLite-WASM'],
    cover: 'banner.webp',
    facts: [
      { value: '360', label: 'dashboards in the catalog' },
      { value: '32/32', label: 'decision cases passed' },
      { value: '0', label: 'bytes leave the browser' },
    ],
    links: [
      { label: 'View the repo', href: 'https://github.com/Jacobberggreen/DejaView' },
    ],
    story: [
      { heading: 'The problem', body: 'Every team asks for "a dashboard", and a similar one usually exists already, owned by someone who left or never certified. Duplicates pile up and nobody trusts the numbers.' },
      { heading: 'Our approach', body: 'Describe the need in your own words. The app extracts market, product, KPI and period, ranks what already exists, and explains each recommendation. Governance rules decide when building is allowed.' },
      { heading: 'What came out', body: 'A working product that runs entirely in the browser with no backend, tested on 129 unit tests and 32 decision cases, with a voiced demo film for the pitch.' },
    ],
    gallery: [
      { id: 'banner', label: 'Overview', image: 'banner.webp', alt: 'Déjà View banner: Build less. Build better. Check what exists before building more.', title: 'Build less. Build better.', text: 'Check what exists before building more. Governed analytics that runs entirely in the browser, built for the Bayer challenge.' },
      { id: 'describe', label: 'Describe', image: 'home.png', alt: 'Start page with a typed request, chips for what was understood and a map of 360 dashboards', title: 'Say what you need, see what was understood', text: 'Chips fill in while you type, and a missing market pulses so nobody has to guess what to add. A map of all 360 dashboards lights up the ones that could fit.' },
      { id: 'match', label: 'Match', image: 'matches.png', alt: 'Three existing dashboards ranked with warnings such as inactive owner and not certified', title: 'Reuse first, with the risks visible', text: 'Three existing dashboards, ranked. Warnings like inactive owner or not certified sit next to the score, and each recommendation explains what to do, why, and what changes.' },
      { id: 'review', label: 'Review', image: 'review.png', alt: 'Review screen with the decision, governance rules passed, data source and lineage', title: 'One screen before anything is registered', text: 'The decision, the governance rules it passed, the data source and its lineage. The button says exactly what will happen when pressed.' },
      { id: 'build', label: 'Build', image: 'build.png', alt: 'A new dashboard built on an approved data source and added to the catalog', title: 'Build only when nothing fits', text: 'When no dashboard is suitable, a new one is built on an approved data source and added to the catalog, so the next person finds it instead of asking again.' },
      { id: 'film', label: 'Film', video: 'deja-view-demo.mp4', poster: 'home.png', title: 'The whole flow in under two minutes', text: 'Voiceover walk-through of a request from the first keystroke to a registered dashboard.' },
    ],
  },
]

export const kinds = [...new Set(projects.map((p) => p.kind))]
