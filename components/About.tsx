'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="border-y border-cyan-300/10 bg-gradient-to-b from-transparent via-[#0a0d1d]/80 to-transparent py-[92px]">
      <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] grid-cols-1 items-start gap-8 md:grid-cols-[.85fr_1.15fr] md:gap-[70px]">
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-violet-500/5 p-6"
        >
          <div className="grid h-[62px] w-[62px] place-items-center rounded-[15px] border border-cyan-300/20 bg-cyan-300/10 text-[25px] font-extrabold text-cyan-300">S</div>
          <h3 className="mb-1 mt-4 text-[22px] font-bold">senna.dev</h3>
          <p className="text-sm text-slate-400">Digital ecosystem home<br />built by <span className="text-cyan-300">Kiki Pratama</span></p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="border-t border-cyan-300/20 pt-3"><b className="block text-[13px] text-cyan-300">PRINSIP</b><span className="text-sm text-slate-400">Simpel, aman, nyaman</span></div>
            <div className="border-t border-cyan-300/20 pt-3"><b className="block text-[13px] text-cyan-300">FOKUS</b><span className="text-sm text-slate-400">Bot, web & payment</span></div>
          </div>
        </motion.aside>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <p className="mb-3 font-mono text-xs uppercase tracking-[2px] text-cyan-300 text-glow-cyan">{'// tentang rumah ini'}</p>
          <h2 className="mb-3 text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.06] tracking-[-1.5px]">Satu rumah untuk semua yang saya bangun.</h2>
          <p className="max-w-[620px] leading-[1.75] text-slate-400">senna.dev adalah tempat semua project saya tinggal: portfolio personal, marketplace digital, dan payment platform. Setiap project punya perannya sendiri, tapi semuanya mengikuti standar yang sama — mudah dipakai customer, mudah dikelola admin, dan rapi di belakang layar.</p>
          <div className="my-6 h-px bg-gradient-to-r from-cyan-300 to-transparent opacity-35" />
          <p className="max-w-[620px] leading-[1.75] text-slate-400">Rumah ini terus berkembang. Saat ini saya sedang mendalami <b className="text-white">cloud dan backend tingkat lanjut</b> — Docker, API scaling, dan CI/CD — agar sistem di dalamnya makin scalable.</p>
        </motion.div>
      </div>
    </section>
  );
}
