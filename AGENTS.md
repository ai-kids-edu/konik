# AGENTS.md — conventions for anyone (human or AI) working on Konik Matematyczny

Start with `CLAUDE.md` for the game guide (mission, tech, architecture). This file adds the
**dev / test / release conventions**. Also see `DESIGN-DIRECTION.md` (glow-up direction) and
`CREDITS.md` (CC-BY attributions).

## Protect the family save — the #1 rule

A real child plays the **live** game (`https://ai-kids-edu.github.io/konik/`) and her progress is in
her browser's `localStorage` under the key **`horseGameState`**. `localStorage` is **per-origin, not
per-path** — everything under `ai-kids-edu.github.io/*` shares it. So:

- **Never** wipe, reset, or cheat the default `horseGameState` slot during testing.
- Keep `loadState` **backward-compatible** (tolerate missing fields; default them) so a schema change
  never destroys her save.
- Test on a **separate origin** (localhost) or in a **named save slot** (below).

## Test save slots + cash cheat (query string)

Implemented in `index.html` (`SAVE_NAME` / `SAVE_KEY` / `CHEAT_CASH`):

- `?save_name=<slot>` — routes all progress to an isolated slot `horseGameState_<slot>`. The default
  (no param) is the shared family save and is left untouched. Use this for ALL manual testing.
- `?cash=<N>` — tops up coins by N on load. **Only applies when a `save_name` slot is active**, so a
  stray `?cash=` can never inflate the family save.
- The version badge (bottom-left) shows `🧪<slot>` and `+<N>🪙` markers so you always know you're in a
  test context.
- Examples: `…/?save_name=test&cash=1000` · `…/?save_name=marek`

When adding more debug switches, follow the same pattern: gate anything that writes state behind a
`save_name` slot; never let a debug switch mutate the default save.

## Local dev

- `node dev-server.mjs` serves on port 3333 (override with `PORT=…`; useful when a sibling worktree
  already holds a port). `curl -X POST http://localhost:<port>/__trigger-reload` hot-reloads.
- Multiple worktrees/sessions may run servers at once — **verify which worktree a port serves** before
  trusting a preview (grep the served HTML for your change / the expected `GAME_VERSION`).

## Release discipline

- `main` **is** the live game (GitHub Pages auto-deploys). Only push **verified** changes to it.
- **Bump `GAME_VERSION`** (`{ number, label }` near the top of `index.html`) on every shipped change —
  the number is incremental, the label is a 1–3 word Polish hook.
- Cache-busting link after a push: `https://ai-kids-edu.github.io/konik/?v=<commit-sha>` (query string
  bypasses the CDN cache for `index.html`).
- After edits: check bracket balance (`node -e` counter) and, when the change is observable, load it
  in the browser and check the console before pushing.

## House rules (from CLAUDE.md, worth repeating)

- Audience: kindergarteners who **can't read** — visual/iconic over text.
- **Not** low-poly flat shading; realistic PBR look.
- Source/code/comments/commits in **English**; player-facing UI strings in **Polish**.
- Prefer **self-documenting code** (clear names, small functions, data tables) over comment blocks.
