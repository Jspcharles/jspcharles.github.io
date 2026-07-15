# Your website

Five files, no build step, no framework:

- `index.html` — page structure
- `style.css` — the whole visual design (a "drought index" theme: warm dark
  background, amber = drought / teal = wet, used as a recurring stripe motif)
- `data.js` — **all your CV content lives here** as plain JavaScript objects
  (education, experience, publications, skills, awards, service, referees)
- `script.js` — renders `data.js` into the page and powers the interactive
  bits: the Academic/Industry mode switch, expandable timeline entries, and
  the publication filter + search
- `portrait.jpg` — your headshot, extracted from the CV you uploaded

## What's interactive

- **Academic / Industry toggle** in the hero — swaps the tagline and summary,
  and dims timeline entries that are less relevant to the selected lens
  (research-tagged entries like your RA roles always stay highlighted).
- **Timeline** — click any education or experience entry to expand its
  detail bullets.
- **Publications** — filter by Journal/Conference, or type into the search
  box to match by title, journal, or year.

## 1. Edit your content

Almost everything now lives in **`data.js`**, not `index.html` — open it and
edit the arrays directly (they're plain objects, easy to read). This is
where you'll:

- Add real DOI links to the two "submitted"/in-press papers once available
- Update the `link` field for any publication
- Add or remove experience/education/award/service entries
- Fix the thesis title if your final wording differs — your two source CVs
  actually disagreed with each other on this, so I used the version that
  matches what you've used elsewhere; worth confirming it's current

In `index.html`, search for `[Add link]` to find the Google Scholar,
LinkedIn, and GitHub placeholders — those need real URLs (your CV listed
the labels but not the actual links).

**Left off the public site on purpose:**
- Your home street address — kept it to "Queensland, Australia" instead
- Your phone number — easy to add back into the Contact section if you'd
  rather have it visible
- Referees' personal emails/phone numbers — only their names, titles, and
  affiliations are shown, to protect their privacy on a public page

Everything visual (colours, fonts, layout) lives in `style.css` — the top
of the file has a `:root` block with all the colours named, so you can
retheme the whole site by changing a handful of hex values.

## 2. Preview it locally

Just double-click `index.html` — it opens in your browser, no server needed.

## 3. Put it online for free

Three good free options, easiest first:

### Option A — GitHub Pages (recommended, free forever, your own subdomain)

1. Create a free GitHub account if you don't have one, and a new repository
   — name it exactly `your-username.github.io` (replace `your-username`
   with your actual GitHub username).
2. Upload `index.html`, `style.css`, and `script.js` to that repository
   (drag-and-drop works on github.com — use "Add file → Upload files").
3. Go to the repo's **Settings → Pages**, and under "Build and deployment"
   set Source to "Deploy from a branch", branch `main`, folder `/root`.
4. Save. Your site is live at `https://your-username.github.io` within a
   few minutes.
5. To update later: edit the files locally and re-upload, or use `git push`
   if you're comfortable with git.

### Option B — Netlify (free, fastest to update, custom domain support)

1. Create a free account at netlify.com.
2. Drag the whole site folder onto the Netlify dashboard ("Deploys" tab has
   a drag-and-drop zone) — it deploys instantly with a `*.netlify.app` URL.
3. You can rename the subdomain for free in Site settings, or connect a
   custom domain later if you buy one.

### Option C — Cloudflare Pages (free, good performance, custom domain support)

1. Create a free Cloudflare account.
2. Go to Workers & Pages → Create → Pages → Upload assets, and upload the
   folder.
3. You get a `*.pages.dev` URL immediately.

## Optional: a custom domain (e.g. josephcharles.com)

All three hosts above support connecting a domain you buy separately
(from a registrar like Namecheap, Google Domains successor Squarespace
Domains, or similar) — typically $10-15/year. Once bought, you point its
DNS at GitHub Pages / Netlify / Cloudflare Pages following their
"custom domain" docs, and the free hosting continues to work as-is.

## Adding a blog later

There's no blog section in this version — the CV-driven build focused on
About, Timeline, Publications, Skills, Service, and Contact. If you want to
add one later, the simplest path is a new `blog.html` (or one file per post)
reusing the same header/footer and `style.css`, linked from the nav.
