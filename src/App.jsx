import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';

function App() {
  return (
    <div className="bg-slate-950 text-white selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />

        {/* Blogs preview section */}
        <section id="blogs" className="relative py-24 bg-slate-950">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_300px_at_80%_10%,rgba(99,102,241,0.12),transparent)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold">Insights from the endbounce lab</h2>
              <p className="mt-3 text-slate-300">Deliverability tips, product updates, and growth experiments.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <article key={i} className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-md hover:border-blue-500/40 transition">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold">Future-proofing your email deliverability {i}</h3>
                    <p className="mt-2 text-slate-300 text-sm">Best practices and tooling to keep your campaigns in the inbox.</p>
                    <a href="#" className="mt-4 inline-flex text-sm text-blue-300 hover:text-blue-200">Read article →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="relative py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold">About endbounce</h2>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  We built endbounce to help teams send with confidence. Our AI-enhanced engine validates at the edge, predicts bounces, and cleanses lists at massive scale—without compromising on speed or privacy.
                </p>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  Reliability, transparency, and a delightful developer experience are at the core of everything we do.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/30 to-indigo-500/30 blur-2xl" />
                <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-8">
                  <dl className="grid grid-cols-2 gap-6">
                    <div>
                      <dt className="text-sm text-slate-400">Avg. accuracy</dt>
                      <dd className="text-2xl font-bold">99.5%</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-slate-400">API uptime</dt>
                      <dd className="text-2xl font-bold">99.99%</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-slate-400">Verifications/day</dt>
                      <dd className="text-2xl font-bold">10M+</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-slate-400">SDKs</dt>
                      <dd className="text-2xl font-bold">JS, Python</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="relative py-24 bg-slate-950">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.15),transparent_25%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold">Contact us</h2>
              <p className="mt-3 text-slate-300">Have questions about pricing, security, or integrations? We’re here to help.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <form className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-300 mb-1">Name</label>
                    <input type="text" required className="w-full rounded-lg bg-slate-800/70 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-1">Email</label>
                    <input type="email" required className="w-full rounded-lg bg-slate-800/70 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="you@company.com" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm text-slate-300 mb-1">Message</label>
                  <textarea rows={5} className="w-full rounded-lg bg-slate-800/70 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Tell us what you’re building..." />
                </div>
                <button type="submit" className="mt-6 inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50">
                  Send message
                </button>
              </form>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <h3 className="text-xl font-semibold mb-3">Get in touch</h3>
                <p className="text-slate-300">We typically respond within one business day.</p>
                <div className="mt-6 space-y-3 text-slate-300">
                  <p>Sales: sales@endbounce.com</p>
                  <p>Support: support@endbounce.com</p>
                  <p>HQ: Planet Blue, The Cloud</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} endbounce. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-slate-300 hover:text-white">About</a>
            <a href="#blogs" className="text-slate-300 hover:text-white">Blogs</a>
            <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
