import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    cadence: 'per month',
    highlights: [
      '2,000 verifications included',
      'Basic risk checks',
      'Access to Email Finder',
      'Community support',
    ],
    cta: 'Begin Free Trial',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    cadence: 'per month',
    highlights: [
      '10,000 verifications included',
      'Bounce prediction (AI)',
      'Bulk list cleansing',
      'Priority email support',
    ],
    cta: 'Choose Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'contact sales',
    highlights: [
      'Unlimited scale & SLAs',
      'Dedicated onboarding',
      'SSO & security reviews',
      'Premium support',
    ],
    cta: 'Talk to Sales',
    popular: false,
  },
];

function TierCard({ tier }) {
  return (
    <div
      className={`relative rounded-2xl border bg-slate-900/40 backdrop-blur-md p-6 transition-transform hover:-translate-y-1 ${
        tier.popular ? 'border-blue-500/50 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)]' : 'border-white/10'
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-md">
          Most popular
        </div>
      )}
      <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-4xl font-extrabold text-white">{tier.price}</span>
        <span className="text-slate-400">{tier.cadence}</span>
      </div>
      <ul className="mt-6 space-y-2">
        {tier.highlights.map((h) => (
          <li key={h} className="text-sm text-slate-300">• {h}</li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all ${
          tier.popular
            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-blue-600/30 hover:shadow-blue-600/50'
            : 'bg-slate-800/70 border border-white/10 hover:border-white/30'
        }`}
      >
        {tier.cta}
      </a>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.15),transparent_25%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">Simple, scalable pricing</h2>
          <p className="mt-3 text-slate-300">Transparent tiers that grow with you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <TierCard key={t.name} tier={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
