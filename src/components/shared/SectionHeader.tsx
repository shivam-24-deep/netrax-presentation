import React from 'react';

interface SectionHeaderProps {
  number?: string;
  tag: string;
  headline: string;
  subheadline?: string;
  align?: 'left' | 'center';
  badgeColor?: 'blue' | 'cyan' | 'red' | 'amber' | 'emerald';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  tag,
  headline,
  subheadline,
  align = 'center',
  badgeColor = 'cyan',
}) => {
  const badgeClasses = {
    blue: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    cyan: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
    red: 'border-red-500/30 text-red-400 bg-red-500/10',
    amber: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    emerald: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  }[badgeColor];

  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto max-w-4xl' : 'max-w-3xl'}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider border mb-4 ${badgeClasses}`}>
        {number && <span className="opacity-80">{number} //</span>}
        <span className="uppercase">{tag}</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
        {headline}
      </h2>

      {subheadline && (
        <p className="text-base md:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto">
          {subheadline}
        </p>
      )}
    </div>
  );
};
