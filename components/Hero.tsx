'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid w-[min(1120px,calc(100%-40px))] min-h-[calc(100vh-72px)] grid-cols-1 items-center gap-10 py-14 md:py-[74px]">
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center">
        <h1 className="text-[clamp(52px,8vw,104px)] font-extrabold leading-[0.95] tracking-[-4px]">
          <span className="grad-text drop-shadow-[0_0_20px_rgba(0,232,255,.35)]">SENNA.DEV</span>
        </h1>
        <p className="mx-auto mt-4 max-w-[640px] text-[17px] leading-[1.75] text-slate-400">
          Rumah ekosistem digital yang dibangun oleh <b className="text-white">Kiki Pratama</b>.
          Semua project — bot, web, marketplace, dan payment — lahir dan dirawat di sini.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href="#ecosystem" className="rounded-[10px] border border-cyan-300/50 bg-gradient-to-br from-violet-600 to-violet-800 px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5">
            Explore Ecosystem ↓
          </a>
          <a href="https://t.me/sennasite" target="_blank" rel="noopener noreferrer" className="rounded-[10px] border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:-translate-y-0.5">
            Chat via Telegram
          </a>
        </div>
        <div className="mx-auto mt-8 flex max-w-[560px] flex-wrap justify-center gap-2 font-mono text-[11px]">
          <span className="rounded-lg border border-cyan-300/20 bg-[#0a0b19]/90 px-3 py-2 text-cyan-100">● KIKI PRATAMA</span>
          <span className="rounded-lg border border-cyan-300/20 bg-[#0a0b19]/90 px-3 py-2 text-cyan-100">● SENNMARKET</span>
          <span className="rounded-lg border border-cyan-300/20 bg-[#0a0b19]/90 px-3 py-2 text-cyan-100">● SENNPAYY</span>
        </div>
      </motion.div>
    </section>
  );
}
