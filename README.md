# The Listening Desk · 听说提升计划

A self-paced English listening & speaking system built around real materials —
earnings calls, Bloomberg Surveillance, FP&A interviews, business meetings, and daily life.

## What's inside

- **Today** — the 45-minute daily routine, with checkboxes that build a streak. A stats strip shows your library at a glance.
- **Library** — **24 pre-curated materials, 279 chunks, 68 source links** across:
  - **Hyperscalers** (4): Microsoft, Google/Alphabet, Amazon/AWS, Meta — all Q1/Q3 2026
  - **AI / Tech** (7): NVIDIA Q4 FY26, AMD Q4 FY25, TSMC Q1 2026, Lex Fridman Podcast, Hard Fork (NYT), AI Daily Brief, All-In Podcast
  - **EMS Earnings** (5): Logitech (interview prep), Flex (your employer), Sanmina, Jabil, Celestica
  - **Markets**: Bloomberg Surveillance daily show
  - **Interview Prep** (3): three FP&A interview YouTube channels
  - **Business Comm**: 20 high-frequency meeting English chunks
  - **Daily English** (3): coffee chat / restaurants / friends
- Every material has direct links to transcripts, YouTube videos, podcast pages, or official IR sites.
- **Shadowing** — phrase-by-phrase practice mode, scenario filters, keyboard nav (← → space)
- **Chunks Notebook** — your personal library, searchable, exportable as JSON
- **Add Material** — form to add your own YouTube channels / podcasts / earnings calls (everything saves to localStorage)
- **Reflection** — daily journal + 18 common Chinese-speaker mistakes mapped to native versions

All data lives in `localStorage` — nothing leaves your browser.

## Run locally

```bash
# from this folder, any static server works:
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just **double-click `index.html`** — it works as a file:// page too.

## Deploy to GitHub Pages

1. Create a new repo (e.g. `listening-desk`) at https://github.com/xcai2
2. Push these two files:
   ```bash
   git init
   git add index.html data.js README.md
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/xcai2/listening-desk.git
   git push -u origin main
   ```
3. In repo Settings → Pages → Source: `Deploy from branch` → `main` / `/ (root)` → Save
4. Visit `https://xcai2.github.io/listening-desk/` (1-2 min after enabling Pages)

## Editing content

- `data.js` holds the seed materials, daily plan, and correction patterns. Edit it directly in Cursor / VS Code to change anything pre-filled.
- The web UI's "Add Material" + Chunks Notebook lets you add stuff at runtime — saved to localStorage, exportable as JSON.

## Keyboard shortcuts (Shadowing tab)

- `←` / `→` — previous / next phrase
- `space` — shuffle
- `a` — add to Notebook
