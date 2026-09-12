'use client';

import { motion } from 'framer-motion';

const caps = [
  { n: '01', t: 'Bot Auto-Order', d: 'Katalog, stok, saldo, riwayat, notifikasi admin — sistem jualan otomatis di Telegram.' },
  { n: '02', t: 'Web & Dashboard', d: 'Landing page, katalog, Mini App, dan dashboard admin yang cepat di HP.' },
  { n: '03', t: 'QRIS Otomatis', d: 'Invoice otomatis, status dicek otomatis, order jalan setelah bayar.' },
  { n: '04', t: 'Deploy & Cloud', d: 'VPS & Pterodactyl hari ini, Docker & CI/CD sebagai arah pengembangan.' },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto w-[min(1120px,calc(100%-40px))] py-[92px]">
      <p className="mb-3 font-mono text-xs uppercase tracking-[2px] text-cyan-300 text-glow-cyan">{'// yang dibangun di sini'}</p>
      <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold tracking-[-1.5px]">Kemampuan rumah ini.</h2>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {caps.map((s, i) => (
          <motion.article
            key={s.t}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="relative overflow-hidden rounded-[14px] border border-cyan-300/20 bg-[#090a15] p-6 transition hover:-translate-y-1.5 hover:border-cyan-300/60"
          >
            <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-300 via-violet-500 to-pink-500" />
            <div className="font-mono text-[22px] text-cyan-300">{s.n}</div>
            <h3 className="mb-2 mt-4 text-[19px] font-bold">{s.t}</h3>
            <p className="text-sm leading-[1.65] text-slate-400">{s.d}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
