import React, { useState } from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { Mail, AlertCircle, CheckCircle, ShieldAlert, CornerDownRight, ArrowUpRight, Search } from 'lucide-react';

interface InboxItem {
  id: string;
  sender: string;
  domain: string;
  subject: string;
  time: string;
  isThreat: boolean;
  threatType?: string;
  indicators?: string[];
}

const INBOX_ITEMS: InboxItem[] = [
  {
    id: 'm1',
    sender: 'Cloudflare Zero Trust',
    domain: 'cloudflare.com',
    subject: 'Weekly Team Access Telemetry & Gateway Report',
    time: '08:45 AM',
    isThreat: false,
  },
  {
    id: 'm2',
    sender: 'Sarah Jenkins (CEO)',
    domain: 'acme-corp.co', // subtle combosquat .co
    subject: 'CONFIDENTIAL: Urgent Wire Authorization - Q3 Vendor Settlement',
    time: '09:12 AM',
    isThreat: true,
    threatType: 'SPEAR PHISHING / EXECUTIVE BEC',
    indicators: [
      'Sender spoofing via Lookalike domain (acme-corp.co vs acme-corp.com)',
      'Reply-To diverts to anonymous encrypted proton.me webmail',
      'Urgent psychological pressure forbidding out-of-band phone calls',
      'Zero executable attachment, evades signature antivirus',
    ],
  },
  {
    id: 'm3',
    sender: 'AWS Billing Operations',
    domain: 'amazon.com',
    subject: 'Your monthly invoice summary for account #8491-xxxx',
    time: '10:30 AM',
    isThreat: false,
  },
  {
    id: 'm4',
    sender: 'GitHub Security Advisories',
    domain: 'github.com',
    subject: '[Dependabot] Security alert for repository dependencies',
    time: '11:15 AM',
    isThreat: false,
  },
  {
    id: 'm5',
    sender: 'HDFC Bank Corporate Alerts',
    domain: 'hdfcbank.net',
    subject: 'Action Required: Update KYC contact parameters within 24h',
    time: '12:02 PM',
    isThreat: true,
    threatType: 'FINANCIAL CREDENTIAL HARVEST',
    indicators: [
      'Spoofed banking portal domain (hdfcbank.net instead of hdfcbank.com)',
      'Obfuscated URL redirect pointing to credential capture node',
      'MTA sending IP fails SPF authentication',
    ],
  },
];

export const TheThreatScene: React.FC = () => {
  const [selectedEmail, setSelectedEmail] = useState<InboxItem>(INBOX_ITEMS[1]);

  return (
    <section id="the-threat" className="py-24 px-4 md:px-8 border-t border-slate-900 bg-slate-950/60 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="01"
          tag="THE EVOLVING ATTACK SURFACE"
          headline="Today's attacks don't always look malicious."
          subheadline="Attackers exploit identity, infrastructure and human trust — not just malicious keywords."
          badgeColor="red"
        />

        {/* Realistic Inbox Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-10">
          {/* Left: Modern Enterprise Inbox List */}
          <div className="lg:col-span-6 rounded-2xl glass-panel-elevated border border-slate-800 p-4 space-y-2.5">
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>INBOX (5 UNREAD MESSAGES)</span>
              </div>
              <span className="text-[11px] text-slate-500">Tap to inspect signals</span>
            </div>

            <div className="space-y-1.5">
              {INBOX_ITEMS.map((item) => {
                const isSelected = selectedEmail.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedEmail(item)}
                    className={`p-3.5 rounded-xl cursor-pointer transition-all duration-200 border ${
                      isSelected
                        ? item.isThreat
                          ? 'bg-red-950/40 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.15)]'
                          : 'bg-cyan-950/30 border-cyan-500/40'
                        : 'bg-slate-900/40 border-slate-800/60 hover:bg-slate-800/40 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className={`font-semibold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {item.sender}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">{item.time}</span>
                    </div>

                    <div className="text-xs text-slate-300 truncate font-medium mb-1.5">
                      {item.subject}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-500">{item.domain}</span>
                      {item.isThreat ? (
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-red-950 text-red-400 border border-red-800/60">
                          STEALTH THREAT
                        </span>
                      ) : (
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                          BENIGN
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Deconstructed Threat Anatomy */}
          <div className="lg:col-span-6 rounded-2xl glass-panel-elevated border border-slate-800 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldAlert className={`w-5 h-5 ${selectedEmail.isThreat ? 'text-red-400' : 'text-emerald-400'}`} />
                <h3 className="text-sm font-bold font-mono tracking-wide text-white uppercase">
                  {selectedEmail.isThreat ? selectedEmail.threatType : 'AUTHENTICATED ENTERPRISE TRAFFIC'}
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">
                DECONSTRUCTION
              </span>
            </div>

            {/* Email Header Preview */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Subject:</span>
                <span className="text-slate-200 font-semibold">{selectedEmail.subject}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Claimed Sender:</span>
                <span className="text-cyan-300">{selectedEmail.sender}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Domain:</span>
                <span className={selectedEmail.isThreat ? 'text-amber-400 font-bold' : 'text-slate-400'}>
                  {selectedEmail.domain}
                </span>
              </div>
            </div>

            {/* Why Traditional Scanners Miss It */}
            {selectedEmail.isThreat && selectedEmail.indicators ? (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Deceptive Vectors Exposed by NetraX:
                </h4>
                <div className="space-y-2">
                  {selectedEmail.indicators.map((ind, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-red-950/30 border border-red-900/40 text-xs text-slate-300 flex items-start gap-2.5"
                    >
                      <CornerDownRight className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  Authenticated Baseline Message
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Cryptographic signatures (DKIM) match the authoritative sending domain. No combosquatting or psychological coercion detected.
                </p>
              </div>
            )}

            {/* Bottom punch statement */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="text-xs font-mono text-cyan-400 font-semibold">
                Traditional keyword filters give a false sense of security.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
