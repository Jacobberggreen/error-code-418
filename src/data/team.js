// `linkedin` is the profile path after linkedin.com/in/.
// Optional per member: `website` (bare domain), `role`, `bio`, `photo` (file name in public/team). Without a photo the card shows initials.
export const team = [
  { name: 'Jacob Berggren', github: 'Jacobberggreen', linkedin: 'jacobberggreen/', website: 'jacobberggren.se', photo: 'jacob.jpg' },
  { name: 'Omar Lundgren', github: 'OmarLundgren', linkedin: 'omar-lundgren/', website: 'omarlundgren.se', photo: 'omar.jpg' },
  { name: 'Sebastian Gabrielsson', github: 'Zeebooo', linkedin: 'sebastian-gabrielsson-352827384/', photo: 'sebastian.jpg' },
  { name: 'Adam Hultgren', github: 'adamhultgren', linkedin: 'adam-hultgren-4246081a9/', photo: 'adam.jpg' },
]

export const photoOf = (m) => (m.photo ? `./team/${m.photo}` : null)
export const initialsOf = (m) => m.name.split(' ').map((w) => w[0]).join('')
