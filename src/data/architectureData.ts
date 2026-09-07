export interface ArchLayer {
  number: number;
  name: string;
  subtitle: string;
  description: string;
  technologies: string[];
  components: string[];
  securityNote?: string;
}

export const ARCHITECTURE_LAYERS: ArchLayer[] = [
  {
    number: 1,
    name: 'EMAIL INGESTION & PARSING',
    subtitle: 'MIME & RFC 5322 Ingestion Protocol',
    description: 'Receives raw .eml, RFC 5322 streams, or webhook dispatches from mail gateways. Sanitizes byte streams, decompresses multipart trees, defangs URLs, and extracts hop headers.',
    technologies: ['FastAPI', 'Python mailparser', 'RFC 5322 parser', 'SSRF Sandbox'],
    components: ['Header Extractor', 'MIME Tree Normalizer', 'Attachment Hasher (SHA256)', 'Defanging Buffer'],
    securityNote: 'Strict file-size caps, zero-execution sandbox, input sanitization against mail bombs.',
  },
  {
    number: 2,
    name: 'AGENTIC ORCHESTRATION ENGINE',
    subtitle: 'Dynamic State Graph & Tool Router',
    description: 'Autonomous reasoning agent dynamically examines extracted artifacts and schedules specialized forensic tools on demand rather than running static bloated pipelines.',
    technologies: ['LangGraph / StateGraph', 'Gemini AICTE Agent', 'Pydantic Types', 'Redis State Cache'],
    components: ['Routing Supervisor', 'Conditional Tool Invoker', 'Execution Audit Ledger', 'Telemetry Bus'],
    securityNote: 'Auditable deterministic tool invocation; internal chain-of-thought is guarded and logged.',
  },
  {
    number: 3,
    name: 'INTELLIGENCE & FORENSIC TOOLS',
    subtitle: 'Heterogeneous Signal Acquisition Suite',
    description: 'Micro-modular tools called conditionally by the agent to acquire deep evidence from headers, DNS records, public BGP routing, WHOIS, and threat databases.',
    technologies: ['dnspython', 'WHOIS client', 'GeoLite2 ASN/City', 'PhishTank API', 'URLhaus API'],
    components: ['SPF/DKIM/DMARC Auditor', 'Levenshtein Typosquat Detector', 'BGP/ASN Resolver', 'Threat Feed Broker'],
    securityNote: 'Outbound HTTP requests wrapped in egress proxy to prevent SSRF and IP leaks.',
  },
  {
    number: 4,
    name: 'MACHINE LEARNING & RULE ENGINE',
    subtitle: 'Multi-Modal Inference & Heuristics',
    description: 'Lightweight local ML models and rule matrices analyze linguistic urgency, executive hierarchy impersonation, and URL entropy without third-party data leakage.',
    technologies: ['Scikit-learn', 'LightGBM', 'HuggingFace Embeddings', 'Regex Rule Engine'],
    components: ['NLP Urgency Scorer', 'BEC Impersonation Heuristic', 'URL Lexical Classifier', 'Domain Age Weighting'],
    securityNote: 'Enron/SpamAssassin trained models run locally in container; zero PII sent to public LLMs.',
  },
  {
    number: 5,
    name: 'EVIDENCE FUSION & RISK SCORING',
    subtitle: 'Multi-Criteria Bayesian Synthesis',
    description: 'Aggregates signals across authentication, domain age, infrastructure, threat intelligence, and language. Computes normalized composite risk (0-100) with confidence bounds.',
    technologies: ['Bayesian Inference Matrix', 'Signal Fusion Engine', 'Risk Weighting Matrix'],
    components: ['Confidence Normalizer', 'Contradiction Resolver', 'Composite Risk Calculator', 'Audit Evidence Formatter'],
    securityNote: 'Mathematically explainable scoring; every point added has an auditable evidence pointer.',
  },
  {
    number: 6,
    name: 'CASE DOSSIER & SOC REMEDIATION',
    subtitle: 'Human-in-the-Loop & Incident Actions',
    description: 'Formats evidence into an actionable SOC cockpit, generates standardized STIX 2.1 IOC feeds, issues firewall/EDR isolation webhooks, and accepts analyst decisions.',
    technologies: ['React 19 / TypeScript', 'Supabase RLS', 'Tailwind CSS', 'Framer Motion', 'STIX 2.1 Exporter'],
    components: ['Interactive SOC Console', 'STIX/TAXII Generator', 'EDR Containment Webhook', 'Analyst Adjudication Portal'],
    securityNote: 'Role-Based Access Control (RBAC), immutable audit trail, automated tamper-evident logging.',
  },
];

export const PIPELINE_STEPS = [
  { step: '01', title: 'Data Ingestion', desc: 'Raw RFC 5322 byte streams ingested from mail filter or manual forensic upload.' },
  { step: '02', title: 'Preprocessing', desc: 'MIME disassembly, HTML-to-text extraction, header normalization, URL defanging.' },
  { step: '03', title: 'Feature Engineering', desc: 'Lexical URL entropy, Levenshtein domain distance, SPF/DKIM flags, urgency score.' },
  { step: '04', title: 'Model Training', desc: 'Trained on Apache SpamAssassin & UCI Phishing benchmarks with Enron baseline.' },
  { step: '05', title: 'Validation & Testing', desc: 'Cross-validated with k-fold splits; calibrated false-positive penalization.' },
  { step: '06', title: 'Agentic Inference', desc: 'Real-time orchestration: Agent dynamically selects tools based on message structure.' },
];

export const FEASIBILITY_PILLARS = [
  {
    pillar: 'DATA READINESS',
    badge: 'Available & Standardized',
    points: [
      'Built upon public datasets: Apache SpamAssassin, UCI Phishing Websites, Enron Corpus.',
      'RFC 5322 / RFC 7208 / RFC 6376 / RFC 7489 open standards allow deterministic verification.',
      'Zero proprietary vendor lock-in for baseline email structure parsing.',
    ],
  },
  {
    pillar: 'AI ORCHESTRATION',
    badge: 'Lightweight & Explainable',
    points: [
      'Modular agentic state graph invokes only relevant tools (e.g. skips URL tools if linkless BEC).',
      'Local scikit-learn / LightGBM models run in sub-millisecond CPU memory footprint.',
      'LLM reasoning restricted to structured explanation synthesis without hallucinating evidence.',
    ],
  },
  {
    pillar: 'THREAT INTELLIGENCE',
    badge: 'Open API Ecosystem',
    points: [
      'Direct integration with Abuse.ch URLhaus & PhishTank public APIs.',
      'MaxMind GeoLite2 provides offline ASN and country mapping without external API latency.',
      'Built with graceful fallback: "NO MATCH ≠ SAFE" prevents false complacency.',
    ],
  },
  {
    pillar: 'ENTERPRISE DEFENSE',
    badge: 'Zero-Trust Architecture',
    points: [
      'Row-Level Security (RLS) and cryptographic tenant isolation in Supabase/PostgreSQL.',
      'Air-gapped sandboxing for attachment hashing and URL detonation to prevent SSRF.',
      'Human-in-the-loop analyst adjudication ensures SOC maintains ultimate decision authority.',
    ],
  },
];

export const CHALLENGE_MITIGATIONS = [
  {
    challenge: 'Incomplete or Stripped Headers',
    mitigation: 'Graceful heuristic degradation: Agent flags missing Received chain as an anomaly indicator rather than crashing.',
  },
  {
    challenge: 'External Threat Feed Outage',
    mitigation: 'Fallback mode: NetraX marks feed as "UNAVAILABLE" and relies on local behavioral & authentication scoring.',
  },
  {
    challenge: 'GeoLocation Uncertainty & VPNs',
    mitigation: 'Explicit labeling as "Approximate infrastructure geolocation" with confidence score; never claims physical actor location.',
  },
  {
    challenge: 'False Positive Business Friction',
    mitigation: 'Human-in-the-loop triage console enables 1-click override, whitelisting, and continuous feedback tuning.',
  },
];
