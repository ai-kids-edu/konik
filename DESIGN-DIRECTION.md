# Konik Matematyczny — Design Direction (graphics / world / engine glow-up)

Direction and ideas, not a rigid spec. This is a **for-fun home project** that must keep
**shipping fast** (single `index.html`, Three.js via CDN, GitHub Pages auto-deploy) and stay
**kid-first** (5–6 yo, can't read, tablets + laptops). The goal here is to set a good direction so
that when we later focus on one thing (e.g. swapping the horse), we're already prepared — without
over-engineering ahead of need.

Sources for everything below live in `scratchpad/research-codebase.md`, `research-models.md`,
`research-engine.md` (three background research passes). Links collected in the Appendix.

---

## 1. Where we are today

One `<script type="module">` in `index.html` (~6940 lines), vanilla Three.js 0.160, no build step,
custom SSE hot-reload dev server, 42 GLBs in `models/` (Quaternius CC0 + three.js birds).

| Subsystem | Owns | Health |
|---|---|---|
| Model loader | `MODEL_MANIFEST`, `loadAllModels`, `cloneModel`, `createAnimatedClone`, `brightenModel` | ⚠️ material cloning inconsistent (bleed footgun) |
| State | ~60 free globals + module objects (`Stamina`, `Economy`, `HorseMotion`) | mixed — modules good, globals soupy |
| Terrain / world | `getTerrainHeight` (single ground-truth), `createTerrain`, clouds/water/beach | ✅ terrain chokepoint good |
| Renderer/lights/world build | `initScene` | ❌ **god function** — renderer + lights + every builder inline |
| Camera | inline in `update()` (fixed offset, eating special-case) | ❌ no module, no occlusion, bad up-close |
| Horse | `createHorse` (hardcoded `horse_q`/scale 0.50/rot 0), `HorseMotion` (clean), gait anim | `HorseMotion` ✅ / `createHorse` hardcoded |
| Animals | `createFarmAnimal` + 5 bespoke ambient critters (Dalmatian/Cheetah=scaled fox/BlueTiger/Crab) | ⚠️ duplicated state machines; fox-as-cheetah ugly |
| Human NPCs | `createTownsperson`/`createFarmer` — ~30 primitive meshes each | ⚠️ primitive, no skeletal anim |
| Buildings + zones | `build*`, `_placeBuilding` (pushes one AABB), `interactionZones`, `barnColliders` | ❌ solid boxes, no interiors |
| Challenges/difficulty | `createChallenge`, `LEVELS[]`, `levelRules`, `updateDifficulty` | ✅ data-driven |
| Economy / passengers / grooming | `SHOP_ITEMS`/`Economy`, passenger+letter quests, salon+mud (`refreshHorseLook`) | ✅ recently refactored |
| Input | keyboard + joystick + mobile action buttons (`getInput`, `computeMobileActions`) | ✅ |
| HUD / minimap / persistence | HUD writers, `drawMinimap`, `saveState`/`loadState` (localStorage) | ✅ |
| Audio | — | ❌ none yet |

**Keep as-is (healthy):** `HorseMotion`, `Stamina`, `Economy`, `getTerrainHeight`, `LEVELS[]`,
save/load. **Landmines for a graphics upgrade:** `initScene` god function, inconsistent material
cloning, the implicit `AnimalArmature|` anim-name convention, twin ad-hoc collision, inline camera.

---

## 2. Where we're going

A world that makes kids say *wow* and is worth exploring: a **textured hero horse** (done — the
realistic **Henry S** horse shipped in v12, see §3), **real animals** (no scaled-fox cheetah),
**enterable buildings**, a **camera that never blinds you**,
richer lighting/atmosphere, and eventually **sound**. Guardrails that don't change: keep it one fast
project, kid-readable (icons over text), works on a tablet, loads fast, deploys from `main`.

---

## 3. Models — what to use

**Recommended bundle:** an **all‑Quaternius CC0 world for ~80%** of the list (one author = one
consistent silhouette, zero attribution for the bulk) **+ one CC‑BY hero horse** + CC0 sky/ground
from Poly Haven / ambientCG.

> **Texturing caveat (important):** most Quaternius character/animal packs have **no UVs** (flat
> per-material colours). Great for a toon look and recolouring, but they **block UV-texture effects**
> (paintable skins, mud decals, makeover overlays) — this is the exact wall we already hit on the
> current horse. So: use **textured/UV models wherever a surface must be painted** (the hero horse),
> and flat CC0 packs where recolour-only is fine.

| Category | Top pick | License | Anim | Textured/UV | Note |
|---|---|---|---|---|---|
| **Hero horse** ✅ SHIPPED (v12) | Henry S — realistic horse (`horse_realistic.glb`) | CC-BY | ✅ 28 clips | ✅ yes, UV + 1k textures | integrated as `horse_real`; 19.8 MB → **needs compression** |
| **Farm+wild animals** | Quaternius Ultimate Animated Animals + Farm Animal Pack | CC0 | rich (Gallop/Walk/Jump…) | ❌ flat | kills "fox = everything" instantly |
| **Cheetah / big cat** | Poly-by-Google Cheetah (static) | CC-BY | ❌ static | — | see cheetah note below |
| **Human NPCs** | Quaternius Modular Men + Women | CC0 | 24 clips | ❌ flat | farmer/hairdresser/kids by part-swap+scale |
| **Buildings (shells)** | Quaternius Farm Buildings + Survival Pack | CC0 | — | some | no CC0 *interiors* exist — fake them |
| **Interior props** | Kenney Furniture / Food kits | CC0 | — | atlas UV | dress fake interiors |
| **Trees/rocks/bushes** | Quaternius Stylized Nature MegaKit | CC0 | — | ✅ **textured** (rare!) | best overall world look |
| **Sky** | Poly Haven HDRIs | CC0 | — | — | env lighting, big quality jump |
| **Ground** | ambientCG ground PBR | CC0 | — | ✅ | replace flat vertex-colour terrain |
| **Water** | three.js built-in `Water` shader | — | — | — | not a model |

**Shipped hero horse — Henry S realistic horse (CC-BY), integrated in v12.** How it actually landed
(`models/horse_realistic.glb`, registered as `horse_real`; `createHorse` uses it, farm horses stay
Quaternius):
- **Auto-fit sizing:** scaled by the largest bounding-box extent (axis-agnostic) after
  `updateMatrixWorld`, then feet dropped to `y=0` — no per-model hand-sizing. Good pattern to keep
  when adding future models.
- **Animation aliasing:** this model prefixes clips with `Skeleton|` and uses different names, so
  gaits are aliased in `createHorse`: `idle←'1 ilde'`, `walk←'walk'`, `gallop←'gallop'`,
  `eating←'6 eat'`, `gallop_jump←'jump'` (28 clips total). This is the per-model remap the
  `PLAYER_HORSE.animMap` idea (§4) generalises.
- **Saddle/bridle** hidden via a `SHOW_SADDLE` toggle (default = bare horse).
- **Attribution:** CC-BY ⇒ `CREDITS.md` added for Henry S. ✅
- **Textured + UV (the payoff):** the coat now has UVs and real textures, so **mud and grooming can
  become real textures** (paint dirt / tint the Horse/Hair materials) instead of stuck-on blob
  meshes. **Not done yet:** the grooming add-ons (bow / rainbow / mud blobs) are still positioned for
  the OLD Quaternius horse and must be redone as material/texture effects — **this is the immediate
  next step.**
- **⚠️ Size:** the GLB is **19.8 MB** (1k textures). That's heavy for tablets/GitHub Pages — run it
  through the gltf-transform pipeline (§6.7: Draco/meshopt + KTX2) to cut it 50–80%. High priority.
- **Scope:** player horse only; farm horses (`Horse_Q`/`Horse_White`) stay Quaternius for now.

**The cheetah / big-cat answer (updated after the Henry S follow-up research):**
- **Henry S is a dead end for siblings** — the author has only two public models (our horse + a
  static truck). No animal set to harvest.
- **WildMesh 3D — license clarified (an earlier note wrongly rejected them wholesale).** It's
  **per-model, two regimes**: their **free *downloadable* models are standard Creative Commons** —
  e.g. the **Lioness = CC BY-NC 4.0**, the **Stylized Animals BIG PACK = CC BY 4.0** — which **ARE
  usable** for this game (CC BY-NC permits redistribution + serving the raw `.glb`, as long as we stay
  **non-commercial** and credit the author). Only their **realistic showcase Lion/Tiger**
  (AnimalMesh/CoreMesh accounts) are **view-only + "personal use only" EULA, not downloadable free** →
  not usable. So a full *realistic* set is still out, but individual free WildMesh CC models are fine.
- **No clean CC-BY realistic *cheetah/leopard* exists** (a literal one is a GTA rip). Best free big-cat
  substitutes for the "cheetah": **WildMesh Lioness (CC BY-NC 4.0, free, ~16.5k tris)** — usable now
  with attribution + non-commercial; or a **stylized cat from the WildMesh CC BY BIG PACK**. The
  realistic Lion/Tiger showcases are Patreon-paid and, even bought, a client-side site serving the raw
  file may still violate the paid EULA — avoid.
  ⚠️ Not-a-lawyer note: "non-commercial" is the load-bearing condition — adding ads/sales later breaks
  CC-NC. Record every CC-BY/CC-BY-NC asset in `CREDITS.md`.
- **Direction:** keep the CC0 Quaternius farm animals (deer/dog/fox/donkey have no clean realistic
  upgrade), treat the **Henry S horse as the sole realistic hero**, and add **at most one more
  realistic hero — a big cat** for the "cheetah". A full realistic zoo also blows the tablet/Pages
  budget (the horse alone is ~20MB), reinforcing "one or two heroes, stylized CC0 for the rest."

**Attribution:** CC-BY items (hero horse, cheetah) need a credit line — add a `CREDITS.md` and an
in-game credits blurb when we adopt them. All-Quaternius/Kenney = CC0 = no credit required.

---

## 4. Architecture & refactor plan (low-regret, phased)

Four refactors give the most leverage; each is small and unblocks a named goal. Do them **just
before** the feature that needs them, not speculatively.

1. **`PLAYER_HORSE` config object** — `{ modelKey, scale, rotOffset, yOffset, tint, animMap }` routed
   through `createHorse` / gait selection / `refreshHorseLook`. **Unblocks the horse swap.** Today the
   model key, scale, rotation and the `AnimalArmature|`-strip gait names are hardcoded, and the
   tint/roughness math assumes dark untextured Quaternius mats — all of that becomes data.
   **v12 already did an ad-hoc version of this for the Henry S horse** (`createHorse` uses `horse_real`,
   auto-fits scale from the bounding box, and aliases gaits `idle←'1 ilde'`, `walk`, `gallop`,
   `eating←'6 eat'`, `gallop_jump←'jump'` because that model prefixes clips with `Skeleton|`). Folding
   that into a reusable `PLAYER_HORSE` config (with the per-model alias map, not a global
   `AnimalArmature|` strip) is the small generalisation that makes the *next* model swap trivial.
2. **Extract a `Camera` module** (pure move first, zero risk) — then add the raycast pull-in (§5b).
   **Unblocks up-close/indoor camera.**
3. **Stable/building solid-box → per-wall AABBs with a door gap + keep roof refs for fade.**
   **Unblocks entering buildings** without needing real interiors; `_barnBlocked` already does
   multi-box + wall-slide.
4. **`createAnimatedClone` clones materials + promote `MODEL_MANIFEST` → registry**
   `{ path, scale, tint, brighten, animMap }`. Removes the material-bleed footgun (player horse and
   grooming both hand-work around it today) and makes the whole glow-up data-driven.

**Tech forks (pragmatic, hobby):**
- **Vite + ES modules** — the one bigger infra call. Not blocking; the single file still edits fine
  and the current zero-build + SSE hot-reload works. Adopt it **when** (a) single-file editing starts
  hurting, or (b) we pull in loader/postprocessing addons (KTX2/Draco/`EffectComposer`) that are far
  nicer under a bundler. GitHub Pages still works via a built `dist/`.
- **JSDoc + `// @ts-check`** instead of a TypeScript rewrite — catches global-typo bugs at zero build cost.
- **NO** to: a physics engine (Rapier), react-three-fiber/Threlte, engine switch (Babylon/PlayCanvas),
  full TS, ECS, navmesh. All rewrites, no gameplay payoff — velocity comes from the simple imperative code.

---

## 5. The two real blockers, solved

### 5a. Enterable buildings

The single AABB failed for three concrete reasons: a box **can't have a doorway gap**; it **drifted**
because it was authored from the group origin while the visible mesh sits at a **child offset**
(Quaternius 100× armature + local translation); and collision was **all-or-nothing**.

**Recipe A — vanilla, no deps (do this first):**
- Derive the collider from the *visible* mesh: `new THREE.Box3().setFromObject(building)` in **world
  space**. This alone kills the "collider next to the building" bug — it honours child offsets.
- Split the footprint into **3–4 thin per-wall Box3s**; punch the doorway by making the front wall
  **two segments around a gap**. Horse collides as circle-vs-AABB (already have wall-slide).
- Add a **`Box3Helper` wireframe debug toggle**. Authoring colliders blind is what caused "struggled
  for ages" — with debug-draw you see the misalignment in seconds.
- A separate larger Box3 = **interior trigger** (`containsPoint(horsePos)`) → fires enter/exit,
  doesn't block.
- **Interior reveal:** on the trigger, **fade the roof** (and near walls) + a slight **camera
  pull-in**. Use `alphaHash` dither fade to avoid transparency sort-popping; fade walls between camera
  and horse via a normal dot-product test. (Kid-friendly winner; no real interiors needed at first —
  dress later with Kenney furniture.)

**Recipe B — precise, one dep (later):** merge static world into one mesh, BVH it with
**three-mesh-bvh**, collide the horse capsule via `shapecast` collide-and-slide; doorways are just
absence of triangles. BVH is static (can't include the skinned horse/animals — fine, they aren't
colliders). **Recipe C (Rapier KCC): skip** — overkill for a horse on flat ground.

### 5b. Camera (up-close / indoors)

Replace the fixed offset with a **collision-aware spring arm**:
1. Ideal pos = behind `-dir * followDist`, above `+followHeight`.
2. **Raycast** from an eye pivot (`target + ~1.2y`) toward the desired pos; on hit, pull `camDist` in
   to `hit.distance - skin`. Use **three-mesh-bvh** so the per-frame ray is ~free on tablets; add ~4
   offset rays ("thick" ray) so thin walls don't slip through.
3. **Critically-damped, frame-rate-independent smoothing** (`k = 1 - exp(-lambda*dt)`), smoothing
   position and look-target **separately**; snap in faster than it eases back out.
4. **Occlusion:** raycast camera→horse, fade any non-horse occluder (same dither trick).
5. **Indoors:** shorten distance, lower height, **widen FOV 60→70°** (don't just move closer), small
   look-ahead, clamp min distance ~1.5–2 so the near plane never clips the horse.

Library shortcut if we don't want to hand-roll: **yomotsu/camera-controls** (collision + damping built in).

---

## 6. Graphics glow-up (impact ÷ effort)

1. **HDRI environment** via `PMREMGenerator` → `scene.environment` — biggest quality jump, ~free
   (Poly Haven CC0).
2. **Fog + low-strength UnrealBloom** — cheap "wow" for celebrations/confetti.
3. **Tight-frustum PCFSoft shadows** + blob contact shadows.
4. **pmndrs/postprocessing** for batched vignette / LUT / bloom.
5. **Water.js** for the farm pond.
6. **Perf for tablets:** `InstancedMesh` for grass/fences/trees (biggest lever), `THREE.LOD`, merge
   static geometry, three-mesh-bvh for all raycasts.
7. **Asset pipeline (highest-ROI infra):** run **gltf-transform** once over the GLBs —
   `optimize --compress meshopt` + `--texture-compress ktx2` (load via KTX2Loader/MeshoptDecoder).
   Cuts asset size 50–80% with no kid-visible loss.

---

## 7. Roadmap (incremental — each phase ships on its own)

Ordered so each step is useful alone and quietly prepares the next, without over-building ahead.

- **P0 — unblock, zero deps:** derived per-wall AABBs + `Box3Helper` debug (enter buildings) · extract
  `Camera` module + raycast pull-in (fix up-close/indoor). *Fixes today's two worst pains.*
- **P1 — model plumbing:** `createAnimatedClone` clones materials · `MODEL_MANIFEST` → registry ·
  `PLAYER_HORSE` config. *Makes the horse swap and future models data-driven; kills material bleed.*
- **P2 — hero horse: ✅ DONE (v12, Henry S realistic).** Registered `horse_real`, auto-fit sizing,
  gait aliases, `SHOW_SADDLE` toggle, `CREDITS.md`. **Remaining follow-ups:** (a) redo mud/grooming
  as **real textures** on the new Horse/Hair materials — the bow/rainbow/mud add-ons are still placed
  for the old model; (b) **compress the 19.8 MB GLB** via gltf-transform (§6.7); (c) optionally fold
  the ad-hoc integration into a reusable `PLAYER_HORSE` config (§4.1) for the next swap.
- **P3 — world art pass:** Quaternius Stylized Nature MegaKit (textured) for trees/rocks · real
  animals + Poly-Google cheetah · Quaternius Modular characters for NPCs. *No more fox-as-everything, no primitives.*
- **P4 — atmosphere:** HDRI env + fog + bloom + soft shadows + Water.js.
- **P5 — infra when it pays:** three-mesh-bvh (fast rays for cam + collision) · gltf-transform pipeline ·
  instancing · Vite+ES-modules **iff** editing pain / addon needs justify it.
- **P6 — polish:** interiors (Kenney furniture) · sound effects · credits (CC-BY attribution).

---

## Appendix — sources

**Models:** flairetic horse `sketchfab.com/3d-models/toon-horse-with-saddle-rigged-animated-db8fe38f93cb48e7a5c9df446a105f7a` ·
Quaternius packs `quaternius.com` (Ultimate Animated Animals, Farm Animal, Modular Men/Women, Farm
Buildings, Stylized Nature MegaKit) · Poly Pizza bundles `poly.pizza` · Poly-Google Cheetah
`poly.pizza/m/5y59KqZXxWf` · Kenney `kenney.nl` · KayKit `github.com/KayKit-Game-Assets` · Khronos Fox
`github.com/KhronosGroup/glTF-Sample-Assets` · awesome-cc0 `github.com/madjin/awesome-cc0`.
**Engine:** three-mesh-bvh `github.com/gkjohnson/three-mesh-bvh` · pmndrs/postprocessing
`github.com/pmndrs/postprocessing` · camera-controls `github.com/yomotsu/camera-controls` ·
gltf-transform `gltf-transform.dev` · Rapier KCC `threejs.org/examples/physics_rapier_character_controller.html`.
**Assets:** Poly Haven `polyhaven.com` · ambientCG `ambientcg.com`.
