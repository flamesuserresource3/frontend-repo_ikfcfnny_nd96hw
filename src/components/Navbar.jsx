import React from 'react';

export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg shadow-blue-500/40" />
            <span className="text-white font-semibold tracking-wide">endbounce</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-200/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-shadow"
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
