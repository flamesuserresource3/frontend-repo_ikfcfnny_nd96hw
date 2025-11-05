import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">        
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          onLoad={() => setLoaded(true)}
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient vignette overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950" />
      </div>

      {/* Futuristic loader overlay while 3D scene initializes */}
      <AnimatePresence>{!loaded && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative h-24 w-24">
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin" />
            <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-indigo-500 animate-[spin_1.8s_linear_infinite]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_20px_6px_rgba(59,130,246,0.7)]" />
            </div>
          </div>
        </motion.div>
      )}</AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Verify, find, and cleanse emails with an out-of-this-universe engine.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-slate-300 text-lg"
          >
            endbounce is an AI-powered email verification suite built for accuracy, speed, and deliverability—wrapped in a futuristic, interactive experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#pricing"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-shadow"
            >
              Start Verifying
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white/90 hover:text-white hover:border-white/40"
            >
              Explore Features
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
