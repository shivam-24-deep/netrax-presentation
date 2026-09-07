# NETRAX — Web-Native Interactive Presentation Experience
### Smart India Hackathon 2026 • Problem Statement SIH26106
**Official Title**: *AI-Powered Email Threat Detection, GeoLocation and Forensic Intelligence Platform*  
**Organization**: All India Council for Technical Education (Cyber Security Cell)  
**Theme**: Blockchain & Cybersecurity | **Category**: Software  
**Core Positioning**: *"Agentic AI for Email Threat Detection & Forensic Intelligence."*

---

## Overview

NetraX is a complete, premium, web-native interactive presentation experience built specifically for SIH 2026 evaluation. It delivers a high-impact narrative designed to inform and convince judging panels within 60 to 90 seconds.

Unlike traditional slide decks or static landing pages, NetraX functions as an **interactive cinematic presentation** combining:
- **Product Launch Aesthetics**: High-contrast dark theme, crisp typography, clean micro-grids, and subtle focal glows.
- **Agentic Dynamic Tool Routing**: Visual proof of how NetraX invokes specialized forensic tools conditionally.
- **Investigation Control Room**: Live 4-pane SOC cockpit featuring email parsing, 10-step audited timelines, animated risk gauge (0 to 87), and dynamic evidence graphs.
- **Synthetic Multi-Case Demo Engine**: Instant switching between Credential Phishing (87 High Risk), CEO BEC Harpoon (74 Risk), and Legitimate Corporate Traffic (08 Safe).
- **Authoritative Research Dossier**: Direct integration of RFC 7208/6376/7489, SpamAssassin, Enron Corpus, UCI Phishing benchmarks, PhishTank, and URLhaus.

---

## Quick Start (How to Run Locally)

The project is located at:
```
C:\Users\deeps\.gemini\antigravity\scratch\netrax-web
```

> **Recommendation**: Set `C:\Users\deeps\.gemini\antigravity\scratch\netrax-web` as your active workspace directory in your IDE.

### 1. Launch Development Server
```bash
cd C:\Users\deeps\.gemini\antigravity\scratch\netrax-web
npm run dev
```
Open your browser to `http://localhost:5173` (or the URL printed in the terminal).

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in `dist/`.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 17 Narrative Scenes Breakdown

1. **Scene 01 — Hero**: Cinematic statement, suspicious email inspector, live anomaly flags, and 87 Risk reveal.
2. **Scene 02 — The Threat**: Realistic modern inbox with expanding stealth BEC email demonstrating how attackers exploit trust rather than simple keywords.
3. **Scene 03 — The Shift**: Side-by-side comparison between traditional black-box detection (WHAT) and NetraX agentic investigation (WHY).
4. **Scene 04 — What is NetraX**: Autonomous AI supervisor with orbital dynamic tool routing and conditional trigger simulations.
5. **Scene 05 — Investigation Control Room**: Hero product cockpit featuring email viewer, 10-step audited tool timeline, animated risk gauge, and evidence topology.
6. **Scene 06 — Email Forensics**: Ingress header hop chain (Sender → Mail Server → Relay → Source IP → ASN → Approx Geo) and cryptographic SPF/DKIM/DMARC status.
7. **Scene 07 — Infrastructure Intelligence**: Interactive lineage graph (`EMAIL → DOMAIN → IP → ASN → COUNTRY`) with hoverable node metadata and approximate geolocation caveats.
8. **Scene 08 — Threat Intelligence**: PhishTank and URLhaus cross-referencing with explicit enforcement of the `NO MATCH ≠ SAFE` axiom.
9. **Scene 09 — Evidence Fusion Engine**: Convergence of 8 heterogeneous telemetry streams into a composite Bayesian risk engine.
10. **Scene 10 — Explainable Decision**: "Don't just flag it. Explain it." 5 evidence-backed findings linked to verified forensic provenance.
11. **Scene 11 — Human in the Loop**: SOC analyst adjudication console with 1-click triage actions (`Confirm Threat`, `False Positive`, `Escalate`).
12. **Scene 12 — Transformative Impact**: Stakeholder ecosystem visual (User, SOC, Enterprise, Govt) and 25-minute to 4-second workflow comparison.
13. **Scene 13 — Technical Blueprint**: 6-layer enterprise architecture from RFC MIME ingest to STIX 2.1 IOC export.
14. **Scene 14 — Data & ML Pipeline**: Benchmark corpora (Enron, SpamAssassin, UCI) vs live runtime threat feeds, with honest model evaluation notices.
15. **Scene 15 — Feasibility & Production Defense**: 4 buildability pillars and real-world failure mode mitigations.
16. **Scene 16 — Research & Academic Standards**: Clean source map and interactive slide-over dossier.
17. **Scene 17 — Final Pitch CTA**: Concluding impact statement, SIH26106 identity, and presentation replay actions.

---

## Project Documentation
- Detailed Pitch & Architecture Plan: [`docs/WEB_PITCH_PLAN.md`](./docs/WEB_PITCH_PLAN.md)
- Quality Assurance & Judge Test Checklist: [`docs/WEB_PITCH_QA.md`](./docs/WEB_PITCH_QA.md)

---

## License & Attribution
Prepared for the **Smart India Hackathon 2026** under the auspices of the **AICTE Cyber Security Cell**. All research datasets and threat feeds cited strictly under educational fair-use guidelines.
