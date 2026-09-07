export interface ResearchItem {
  id: string;
  category: 'EMAIL SECURITY' | 'PHISHING DETECTION' | 'MALWARE URL INTEL' | 'GEOLOCATION' | 'EMAIL AUTHENTICATION';
  title: string;
  source: string;
  identifier: string;
  yearOrVersion: string;
  summary: string;
  relevance: string;
  url: string;
  type: 'RFC' | 'Dataset' | 'Feed' | 'Database' | 'Standard';
}

export const RESEARCH_SOURCES: ResearchItem[] = [
  {
    id: 'res-spf',
    category: 'EMAIL AUTHENTICATION',
    title: 'Sender Policy Framework (SPF) for Authorizing Use of Domains in Email',
    source: 'Internet Engineering Task Force (IETF)',
    identifier: 'RFC 7208',
    yearOrVersion: 'RFC 7208 / STD 73',
    summary: 'Specifies the protocol by which recipient MTAs verify that an email claiming to originate from a domain was sent by an authorized IP address.',
    relevance: 'Provides NetraX header engine with authoritative verification rules for detecting envelope-sender forgery.',
    url: 'https://datatracker.ietf.org/doc/html/rfc7208',
    type: 'RFC',
  },
  {
    id: 'res-dkim',
    category: 'EMAIL AUTHENTICATION',
    title: 'DomainKeys Identified Mail (DKIM) Signatures',
    source: 'Internet Engineering Task Force (IETF)',
    identifier: 'RFC 6376',
    yearOrVersion: 'RFC 6376',
    summary: 'Defines cryptographic public-key signatures embedded in email headers to guarantee message integrity and non-repudiation.',
    relevance: 'Used by NetraX to cryptographically prove that the email body and critical headers were not tampered with in transit.',
    url: 'https://datatracker.ietf.org/doc/html/rfc6376',
    type: 'RFC',
  },
  {
    id: 'res-dmarc',
    category: 'EMAIL AUTHENTICATION',
    title: 'Domain-based Message Authentication, Reporting, and Conformance (DMARC)',
    source: 'Internet Engineering Task Force (IETF)',
    identifier: 'RFC 7489',
    yearOrVersion: 'RFC 7489',
    summary: 'Allows domain owners to publish enforcement policies (none, quarantine, reject) and receive telemetry on unauthenticated messages.',
    relevance: 'Provides NetraX with domain enforcement context to evaluate whether spoofed messages bypass strict rejection policies.',
    url: 'https://datatracker.ietf.org/doc/html/rfc7489',
    type: 'RFC',
  },
  {
    id: 'res-enron',
    category: 'EMAIL SECURITY',
    title: 'The Enron Email Dataset',
    source: 'Federal Energy Regulatory Commission / CMU',
    identifier: 'Enron Corpus',
    yearOrVersion: 'Version 2015 update (~500,000 emails)',
    summary: 'A massive public collection of authentic corporate email communication spanning internal executive dialogues, operations, and threads.',
    relevance: 'Serves strictly as a benign baseline for linguistic structure, corporate conversation flows, and business formality distributions.',
    url: 'https://www.cs.cmu.edu/~./enron/',
    type: 'Dataset',
  },
  {
    id: 'res-spamassassin',
    category: 'EMAIL SECURITY',
    title: 'Apache SpamAssassin Public Mail Corpus',
    source: 'Apache Software Foundation',
    identifier: 'SpamAssassin Public Corpus',
    yearOrVersion: 'Release 2006+ Taxonomy',
    summary: 'Extensive benchmark collection of ham and historical spam emails with annotated RFC 822 / 5322 header traces.',
    relevance: 'Provides foundational heuristic weighting benchmarks for header anomaly patterns, deceptive subject formatting, and spam markers.',
    url: 'https://spamassassin.apache.org/old/publiccorpus/',
    type: 'Dataset',
  },
  {
    id: 'res-uci',
    category: 'PHISHING DETECTION',
    title: 'UCI Phishing Websites Benchmark Dataset',
    source: 'UCI Machine Learning Repository',
    identifier: 'UCI Phishing Websites',
    yearOrVersion: '11,055 website records / 30 features',
    summary: 'Standardized ML benchmark dataset isolating 30 lexical, host, and HTML features characteristic of phishing landing pages.',
    relevance: 'Informs NetraX URL lexical analyzer on feature weights including prefix-suffix hyphens, subdomain depth, and URL entropy.',
    url: 'https://archive.ics.uci.edu/dataset/327/phishing+websites',
    type: 'Dataset',
  },
  {
    id: 'res-phishtank',
    category: 'PHISHING DETECTION',
    title: 'PhishTank Community Threat Intelligence Feed',
    source: 'OpenDNS / Cisco Talos Community',
    identifier: 'PhishTank API & Verified Database',
    yearOrVersion: 'Real-time Live Feed',
    summary: 'Global collaborative clearing house for phishing data with community verification and algorithmic anti-abuse curation.',
    relevance: 'Integrates into NetraX as an external threat verification feed to corroborate whether detected target URLs have known active victims.',
    url: 'https://phishtank.org/',
    type: 'Feed',
  },
  {
    id: 'res-urlhaus',
    category: 'MALWARE URL INTEL',
    title: 'Abuse.ch URLhaus Malware URL Intelligence Project',
    source: 'Abuse.ch / Bern University of Applied Sciences',
    identifier: 'URLhaus Threat Intel Feed',
    yearOrVersion: 'Real-time IOC Feed',
    summary: 'Project dedicated to tracking, collecting, and sharing verified malicious URLs used for malware distribution and credential harvesting.',
    relevance: 'Provides NetraX with high-confidence IOC signatures and payload classifications for embedded links.',
    url: 'https://urlhaus.abuse.ch/',
    type: 'Feed',
  },
  {
    id: 'res-geolite',
    category: 'GEOLOCATION',
    title: 'MaxMind GeoLite2 Geolocation & ASN Intelligence',
    source: 'MaxMind Inc.',
    identifier: 'GeoLite2 Country & ASN Database',
    yearOrVersion: 'GeoLite2 Format Specification',
    summary: 'Widely used IP geolocation and Autonomous System Number (ASN) mapping database correlating IP blocks with network operators.',
    relevance: 'Powering NetraX approximate infrastructure geolocation and hosting provider classification (with explicit approximation caveats).',
    url: 'https://www.maxmind.com/en/geolite2',
    type: 'Database',
  },
];
