# NETRAX — Web-Based Presentation Deck Strategy & Architecture
**SIH 2026 • Problem Statement SIH26106**
*AI-Powered Email Threat Detection, GeoLocation and Forensic Intelligence Platform*
**Organization**: All India Council for Technical Education (Cyber Security Cell)
**Category**: Software | **Theme**: Blockchain & Cybersecurity
**Core Positioning**: *"Agentic AI for Email Threat Detection & Forensic Intelligence."*

---

## 1. Executive Direction: PowerPoint-Style Web Presentation

NetraX has been completely re-architected from a traditional vertical scroll page into a **discrete, full-screen, presentation deck experience** designed for high-stakes SIH judging.

### Core Interaction Principles:
- **ONE SCREEN = ONE SLIDE**: Exactly `100vw × 100vh`. No half-slides, no vertical document scrolling, no clipped elements.
- **Controlled Presentation State**: `currentSlide = 0...5` (6 discrete slides).
- **Universal Keynote Navigation**:
  - `[Space]`, `[→]`, `[↓]`, `[PageDown]` → Advance slide
  - `[←]`, `[↑]`, `[PageUp]` → Previous slide
  - `[Mouse Wheel]` → Debounced discrete 1-slide transitions (~650ms lock)
  - `[Touch Gestures]` → Swipe left/up (next), swipe right/down (previous)
  - `[Home / End]` → Jump to start or finale slide
  - `[F] / [P]` → Toggle distraction-free Fullscreen Presentation Mode
  - Clickable discrete slide navigation dots and bottom-right `←` / `→` arrow buttons.

---

## 2. The 6 Dedicated Presentation Slides

```
[Slide 01: Hero]                 → Cinematic visual: Suspicious email → NetraX Agent → 87 High Risk
[Slide 02: Problem & Shift]      → Side-by-side: Traditional Black Box vs NetraX Agentic Investigation
[Slide 03: Architecture]         → Connected 7-stage pipeline: Ingest → State Graph → Tools → Fusion → STIX
[Slide 04: Control Room]         → Hero Cockpit: Email Viewer, Audited Timeline, Animated Risk, Graph
[Slide 05: Transformative Impact]→ Stakeholder ecosystem + 25-minute to 4-second triage comparison
[Slide 06: Research & Finale]    → Authoritative corpora (RFCs, Enron, SpamAssassin, URLhaus) + Finale
```

---

## 3. Guaranteed Safe Area & Responsive Design

Every slide canvas is bounded within:
- **Canvas Dimensions**: `max-w-6xl mx-auto h-full max-h-[86vh]`
- **Tested Resolutions**:
  - `1920 × 1080` (Standard Desktop Display)
  - `1600 × 900` (Widescreen Laptops)
  - `1440 × 900` (MacBook Standard)
  - `1366 × 768` (Standard Corporate / University Laptops)
  - `1280 × 720` (Compact Projector Display)
- **Zero Clipping Guarantee**: No scrollbars, no cut-off typography, no overflowing components.

---

## 4. Multi-Case Synthetic Demo Engine

Judges can toggle among **3 safe synthetic cases** from the top presentation bar:
1. `phishing-m365`: Credential Harpoon — **87 / 100** (High Risk)
2. `bec-ceo`: Executive Wire Transfer Harpoon (Linkless) — **74 / 100** (High Risk)
3. `legit-corporate`: Official AICTE Government Notice — **08 / 100** (Verified Safe)

---

## 5. Technical Accuracy Standards

- **GeoLocation**: Formatted strictly as *"Approximate infrastructure geolocation. Never physical individual attribution."*
- **Threat Intelligence**: Explicitly adheres to *"NO MATCH ≠ SAFE"*.
- **Offline Baseline**: Enron Corpus cited strictly as a benign corporate linguistic baseline.
