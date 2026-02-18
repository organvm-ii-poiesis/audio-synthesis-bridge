# CLAUDE.md — audio-synthesis-bridge

**ORGAN II** (Art) · `organvm-ii-poiesis/audio-synthesis-bridge`
**Status:** ACTIVE · **Branch:** `main`

## What This Repo Is

TypeScript bridge for audio synthesis via OSC and WebAudio

## Stack

**Languages:** TypeScript
**Build:** npm
**Testing:** Node test runner (likely)

## Directory Structure

```
📁 .github/
📁 docs/
    adr
📁 src/
    bridge
    index.ts
    osc.ts
    osc
    webaudio.ts
    webaudio
📁 tests/
    bridge.test.ts
    osc.test.ts
    webaudio.test.ts
  .gitignore
  CHANGELOG.md
  LICENSE
  README.md
  package.json
  seed.yaml
  tsconfig.json
```

## Key Files

- `README.md` — Project documentation
- `package.json` — Dependencies and scripts
- `seed.yaml` — ORGANVM orchestration metadata
- `src/` — Main source code
- `tests/` — Test suite

## Development

```bash
npm install     # Install dependencies
npm run build   # Build
npm test        # Run tests
```

## ORGANVM Context

This repository is part of the **ORGANVM** eight-organ creative-institutional system.
It belongs to **ORGAN II (Art)** under the `organvm-ii-poiesis` GitHub organization.

**Dependencies:**
- organvm-ii-poiesis/metasystem-master

**Registry:** [`registry-v2.json`](https://github.com/meta-organvm/organvm-corpvs-testamentvm/blob/main/registry-v2.json)
**Corpus:** [`organvm-corpvs-testamentvm`](https://github.com/meta-organvm/organvm-corpvs-testamentvm)
