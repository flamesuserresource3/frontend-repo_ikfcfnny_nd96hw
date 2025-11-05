import React from 'react';
import { Shield, Search, ListChecks } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-md transition-transform hover:-translate-y-1 hover:border-blue-500/40">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-600/30">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Email Verification',
      description:
        'Instantly validate syntax, domain, MX records, catch-all risk, and deliverability signals with AI-powered heuristics.',
    },
    {
      icon: Search,
      title: 'Email Finder',
      description:
        'Find verified emails for prospects using smart enrichment and pattern detection while respecting privacy and compliance.',
    },
    {
      icon: ListChecks,
      title: 'List Cleansing',
      description:
        'Bulk-clean large lists with de-duplication, disposable detection, and bounce prediction to boost campaign performance.',
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.15),transparent_25%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">A complete suite for email success</h2>
          <p className="mt-3 text-slate-300">
            Built for precision, powered by AI, and designed to scale with your growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
