import React from 'react'
import { motion } from 'framer-motion'
import { SITE } from '../config'

export default function Hero(){
  return (
    <section id="home" className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0 section-fixed-bg" style={{ backgroundImage: `url(${SITE.heroBackground})` }} aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/60 to-slate-950" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-brand-500/20 blur-3xl rounded-full radial-mask" data-speed="-0.15" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 h-full flex flex-col items-start justify-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Building spaces that stand the test of time.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8 }} className="mt-4 max-w-2xl text-slate-300">
          From concept to completion — we handle planning, materials, construction and delivery. Materials at cheaper prices thanks to no middlemen.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-8 flex gap-3">
          <a href="#projects" className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-semibold shadow-soft">View Projects</a>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none" aria-hidden>
        <div className="absolute left-8 bottom-8 w-24 h-24 rounded-3xl bg-white/10 backdrop-blur parallax" data-speed="-.06"/>
        <div className="absolute right-16 bottom-10 w-32 h-32 rounded-full bg-brand-400/20 parallax" data-speed="-.1"/>
      </div>
    </section>
  )
}
