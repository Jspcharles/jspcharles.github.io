# Your portfolio — new design

A fresh build, separate from the earlier "drought index" version — same idea
(plain HTML/CSS/JS, no framework, no build step), completely different look.

## Files

- `index.html` — page structure
- `style.css` — the design system (see "Design notes" below)
- `data.js` — **all your content lives here**: profile text, education,
  journey/experience, projects, tech stack, publications, milestones
- `script.js` — renders `data.js` into the page and runs the interactive bits
- `portrait.jpg` — your photo, cropped slightly and optimised for the web
- `Charles_Joseph_Resume.pdf` — the file the "Download Résumé" button serves
  (currently your academic CV; swap in whichever version you want people to
  download)

## What's interactive

- **Journey filter** — All / Research / Academic / Industry buttons actually
  filter the timeline, and each entry's marker lights up as you scroll past it.
- **Publication filter + search** — by type, or by typing a title/journal/year.
- **Scroll-reveal** on section headers, **scrollspy** highlighting the current
  section in the nav, and a staggered entrance animation on the hero.
- **Tech stack** renders as icon tiles pulled live from a public icon CDN
  (`cdn.simpleicons.org`) — no logo files to manage; if an icon fails to load
  it just hides itself rather than showing a broken image.

## Edit your content

Open **`data.js`** — everything is one plain object per section:

- `profile` — name, tagline, hero bio, full About bio (array of paragraphs),
  email, résumé filename, social links
- `education`, `journey` — same shape as before
- `projects` — I pulled four repos from your GitHub screenshot
  (`DeepYield-ResNet-V2`, `ProDrought-Detection`, `Drought-Propagation`,
  `Lockyer-Valley-QLD`) and wrote descriptions based on what I know of your
  research. **Please check these** — I inferred what each repo does from its
  name and your thesis work, not from the actual code. Each project currently
  uses a CSS-drawn placeholder cover (`cover: "contour" | "grid" | "wave" |
  "field"`) instead of a screenshot — add an `image: "path.jpg"` field and a
  matching `<img>` in the project card once you have real screenshots.
- `techStack` — grouped list of Simple Icons slugs. Find more slugs at
  [simpleicons.org](https://simpleicons.org) if you want to add tools.
- `publications` — same data as before; the "paper thumbnail" is a CSS
  placeholder, not a real image (see note below).
- `milestones` — awards, summer schools, visiting research, and memberships
  in one chronological feed, tagged by `type`.

**Left as placeholders you'll want to fill in:**
- `profile.social.linkedin` and `profile.social.scholar` — empty strings
  right now. Until you add a LinkedIn URL, the "Follow on LinkedIn" button
  quietly points at the Contact section instead of a dead link.
- Publication `link` for the one "submitted" paper — add it once you have a
  preprint or DOI.
- Publication thumbnails — I didn't fabricate images of your actual papers.
  The cards show a simple abstract "document" placeholder instead. Drop real
  first-page thumbnails in as `<img>` tags when you have them (a 300×400px
  JPEG export of page 1 of each PDF works well).
- Project screenshots — same approach, CSS placeholders for now.

## Design notes

Dark charcoal-plum background (not pure black), a coral→violet gradient for
your name and accents, mint for interactive states — meant to read as
"researcher who also builds things," not a generic dark template. The nested
faint rings behind your photo are a soft nod to topographic/contour maps,
without repeating the literal drought-severity motif from the previous site.
Fonts: Sora (headings), Manrope (body), JetBrains Mono (labels/data).

## Hosting (same free options as before)

1. **GitHub Pages** — new repo named `your-username.github.io`, upload all
   files, enable Pages in Settings, done.
2. **Netlify** — drag the folder onto the Netlify dashboard.
3. **Cloudflare Pages** — Workers & Pages → Upload assets.

Full steps are in the earlier `charles-website/README.md` if you still have
it — the hosting process is identical regardless of which design you pick.
