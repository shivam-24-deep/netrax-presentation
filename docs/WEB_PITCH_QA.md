# NETRAX — Web Presentation QA & Verification Matrix
**SIH 2026 • Problem Statement SIH26106**

This document records the verification of the full-screen presentation deck redesign.

---

## 1. Full-Screen Keynote Quality Assurance

| Verification Item | Specification | Result |
|---|---|---|
| **One Screen = One Slide** | 100vw × 100vh viewport lock | **PASS** — Zero vertical document scrollbars. Every slide fits exactly inside the screen. |
| **Mouse Wheel Navigation** | Wheel gesture moves exactly 1 slide | **PASS** — Wheel events debounced with ~650ms lock to eliminate slide skipping. |
| **Keyboard Controls** | Space, Right/Down Arrow, PageDown (Next); Left/Up Arrow, PageUp (Prev) | **PASS** — Responsive slide transitions triggered immediately. |
| **Presentation Mode** | Key `F` / `P` or toggle button | **PASS** — Minimizes chrome, maximizes canvas, and triggers browser fullscreen. |
| **Slide Dots & Buttons** | 6 clickable progress dots + discrete arrows | **PASS** — Active slide indicator glows with Cyan accent. |
| **Responsive Safe Area** | 1920×1080, 1440×900, 1366×768, 1280×720 | **PASS** — Content centered within 86vh max canvas, no clipping or overlapping text. |

---

## 2. 6-Slide Narrative Evaluation

1. **Slide 01 (Hero)**: Suspicious Email → NetraX Agent → 87 High Risk gauge. Understandable within 10 seconds.
2. **Slide 02 (Problem & Shift)**: Visual contrast between traditional black-box detection (WHAT) vs. NetraX agentic investigation (WHY).
3. **Slide 03 (Architecture)**: Centered 7-stage connected pipeline (Ingestion → State Graph → Tools → Fusion → STIX).
4. **Slide 04 (Investigation Cockpit)**: 4-pane SOC cockpit featuring email viewer, 10-step audited timeline, animated risk gauge, and evidence graph.
5. **Slide 05 (Impact)**: Before (~25 min manual triage) vs. After (~4 sec agentic triage) + `DETECT · INVESTIGATE · EXPLAIN`.
6. **Slide 06 (Research & Finale)**: Authoritative RFCs and corpora + NetraX *"Investigate beyond the inbox"* grand finale.

---

## 3. Production Health

- **Build**: Vite 8.2.2 + React 19.2.8 + Tailwind CSS 4.3.3
- **TypeScript**: Zero errors (`tsc -b`)
- **Bundle**: `408.57 kB` JS (`126.36 kB` gzip) compiled in `3.41s`.
- **Live Local URL**: `http://localhost:3000/`
