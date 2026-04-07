# Konik Matematyczny — Development Guide

## Mission & Audience
**For:** Kindergarteners (5-6 year olds, "zerówka" in Polish school system). These kids are just learning to count, add, and subtract. They CANNOT read — everything must be visual/iconic.

**Goal:** Make math feel like play, not school. The child rides a horse through a beautiful world, and math is woven into exploration — not an abstract quiz. The game should make kids say "wow!" and want to keep playing.

**Context:** Built to demo at a kindergarten visit. Must work on tablets (mobile joystick) and laptops. Parents share the URL — it must look polished and load fast.

**Design Principles:**
- Visual over textual — dots/icons before numbers, no text labels kids can't read
- Concrete before abstract — count real objects, not symbols
- Celebration on success — confetti, eating animation, cutscene camera
- No punishment on failure — bucket just tips over empty, gentle pushback
- Progression must feel earned but not frustrating — fast early levels, slower later
- The world itself should be worth exploring even without challenges

**Live:** https://ai-kids-edu.github.io/konik/
**Repo:** github.com/ai-kids-edu/konik

## Tech Stack
- **Single-file game**: `index.html` (~2800 lines) — all HTML, CSS, JS in one file
- **Three.js 0.160** via CDN importmap (no build system)
- **GLTFLoader + SkeletonUtils** for 3D model loading
- **47 GLB models** in `models/` directory (Quaternius CC0 + three.js birds)
- **Dev server**: `node dev-server.mjs` on port 3333 with SSE hot reload
- **Hosting**: GitHub Pages from main branch

## Architecture

### Scale Convention
**1 unit = 1 meter.** All model scales are calculated as `real_world_height / model_native_height`. Quaternius models have internal 100x scale on their armature node. Reference sizes:
- Player horse: 0.50 scale (~2.8m, oversized for visibility)
- Cow: 0.22, Donkey: 0.35, Fox: 0.12, Deer: 0.34
- Trees: ~2.0-3.0 scale (5-8m tall)
- Stable: 3.0 scale (~10m)

### Coordinate Convention
```
Movement angle: 0 = +Z direction
Direction vector: (sin(angle), 0, cos(angle))
Camera: behind horse at -direction * 6, height +4.5
Horse model rotation.y = 0 (faces +Z natively)
horseGroup.rotation.y = horseAngle
```

### Key Globals
- `horsePos`, `horseAngle`, `horseSpeed` — horse state
- `challenges[]` — active math challenges
- `farmAnimals[]` — animals with GLB models + AnimationMixers
- `animationMixers[]` — all active Three.js AnimationMixers (updated each frame)
- `loadedModels{}`, `modelAnimations{}` — loaded GLB cache
- `barnColliders[]` — AABB collision boxes

### Model System
- `cloneModel(key, scale)` — clone with material independence (uses SkeletonUtils for skinned meshes)
- `createAnimatedClone(key, scale)` — clone with AnimationMixer
- `brightenModel(model, factor)` — multiply colors (Quaternius models are dark)
- Models are loaded async at game start with progress indicator

### Challenge System
- 7 difficulty levels: L1 addition 1-5 (dots), L2 addition 1-7, L3 +subtraction 1-7, L4+ numbers
- Levels 1-3: visual dots on sign board AND bucket labels
- Levels 4+: numeric display
- Advancement: 2 correct (L1-3) or 3 correct (L4+) at 65%+ accuracy
- Wrong answers never 0 at L1, never negative, always within maxNumber range
- Subtraction: a always > b, capped at 4 for L2-3

### Animation Names (Quaternius Horse)
Strip `AnimalArmature|` prefix, lowercase: `idle`, `idle_2`, `walk`, `gallop`, `eating`, `gallop_jump`, `death`, `attack_headbutt`, `attack_kick`, `jump_toidle`, `idle_headlow`

## Visual Style
- **NOT low-poly** — user explicitly rejected flat shading. Use realistic PBR materials.
- Quaternius models need `brightenModel(model, 1.8-2.5)` because their base colors are very dark
- ACES Filmic tone mapping, exposure 1.8
- Warm ambient (0xffffff, 0.8) + hemisphere (0xaaddff, 0x88aa55, 0.6) + directional sun (1.8)
- Gradient sky canvas (blue → pale → warm haze)

## Game Feel
- Gallop animation at 0.65 timeScale (was too frantic at 1.0)
- Horse root motion clamped to 0 each frame (prevent animation bounce)
- Camera: cinematic side close-up during eating sequences
- ESC = full reset (clear sessionStorage, reload)
- Confetti: pastel colored PlaneGeometry pieces with gentle gravity

## Things That Were Tried and Rejected
- Low-poly flat shading — "brzydkie" (ugly)
- HTML overlay for question — hard to read, blocks view. Use 3D sign on gate instead
- Sprite billboards for question — rotates weirdly. Use PlaneGeometry mesh fixed to gate
- Apples as GLB model (Apple_4.glb) — it's a whole apple TREE sapling, not a fruit. Use primitive sphere
- Carrots at 45° angle — look like they're planted. Lay on side (rotation.z = PI/2)
- Lid as child of bucket pivot — flies like UFO when bucket tips. Detach to hayGroup first

## Development Workflow
- `node dev-server.mjs` starts server on :3333
- `curl -X POST http://localhost:3333/__trigger-reload` to hot-reload browser
- State persists via sessionStorage (position, score, level) — but challenges regenerate fresh
- Always check bracket balance after edits: `node -e "...bracket counting script..."`
- Commit frequently, push to main for GitHub Pages auto-deploy

## Known Issues / TODO
- Stable collision is solid box (can't enter) — door position unknown in model
- Beach decorations still use primitive geometry (shells, rocks)
- Farmer NPCs still primitive geometry (not GLB)
- No sound effects yet
- Mobile joystick needs testing
- See GAMEPLAY-IDEAS.md for quest system redesign plans
