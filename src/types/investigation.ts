export type RiskLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'BENIGN';

export interface EmailAuthStatus {
  spf: 'FAIL' | 'PASS' | 'SOFTFAIL' | 'NONE';
  dkim: 'FAIL' | 'PASS' | 'NONE';
  dmarc: 'FAIL' | 'PASS' | 'NONE';
  spfSender?: string;
  dkimDomain?: string;
}

export interface EmailData {
  fromDisplay: string;
  fromAddress: string;
  replyTo: string;
  returnPath: string;
  to: string;
  subject: string;
  date: string;
  bodySnippet: string;
  fullBody: string;
  suspiciousUrl: string;
  cleanUrlDisplay: string;
  sourceIp: string;
  auth: EmailAuthStatus;
  anomalies: string[];
}

export interface TimelineStep {
  id: string;
  stepNumber: number;
  toolName: string;
  actionLabel: string;
  status: 'COMPLETED' | 'FLAGGED' | 'VERIFIED' | 'NEUTRAL';
  summary: string;
  latencyMs: number;
  evidenceSnippet: string;
}

export interface RiskFactor {
  id: string;
  label: string;
  weight: number;
  severity: RiskLevel;
  category: string;
  description: string;
}

export interface HeaderHop {
  hop: number;
  title: string;
  server: string;
  ip: string;
  asn: string;
  location: string;
  status: 'clean' | 'anomaly' | 'danger';
  note: string;
}

export interface GraphNode {
  id: string;
  label: string;
  category: 'EMAIL' | 'SENDER' | 'DOMAIN' | 'URL' | 'IP' | 'ASN' | 'COUNTRY' | 'THREAT_INTEL';
  value: string;
  status: 'danger' | 'warning' | 'clean' | 'neutral';
  metadata: {
    title: string;
    details: string;
    caveat?: string;
    verifiedBy?: string;
  };
  x: number; // percentage coordinates (0-100)
  y: number;
}

export interface GraphEdge {
  from: string;
  to: string;
  label: string;
  status: 'danger' | 'warning' | 'clean';
}

export interface ThreatFeedResult {
  status: 'MATCH' | 'NO MATCH' | 'UNAVAILABLE';
  feedName: string;
  details: string;
  signature?: string;
  lastUpdated: string;
}

export interface ExplainableFinding {
  id: string;
  title: string;
  provenance: string;
  verdict: 'HIGH RISK' | 'MEDIUM RISK' | 'VERIFIED BENIGN';
  evidence: string;
  impact: string;
}

export interface SyntheticDemoCase {
  id: string;
  caseCode: string;
  name: string;
  category: 'Credential Phishing' | 'Business Email Compromise (BEC)' | 'Legitimate Corporate';
  tagline: string;
  overallRiskScore: number;
  riskLevel: 'HIGH RISK' | 'MEDIUM RISK' | 'VERIFIED SAFE';
  email: EmailData;
  timeline: TimelineStep[];
  riskFactors: RiskFactor[];
  headerHops: HeaderHop[];
  nodes: GraphNode[];
  edges: GraphEdge[];
  threatFeeds: ThreatFeedResult[];
  findings: ExplainableFinding[];
  remediation: {
    verdict: string;
    socAction: string;
    firewallRule: string;
    edrAction: string;
    alertRecipient: string;
  };
}
