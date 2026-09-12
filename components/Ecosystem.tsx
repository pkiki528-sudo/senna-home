'use client';

import { motion } from 'framer-motion';

const items = [
  {
    n: '01',
    tag: 'OWNER / BUILDER',
    title: 'Kiki Pratama',
    desc: 'Orang di balik senna.dev. Bot & web developer yang membangun semua sistem di ekosistem ini.',
    href: 'https://portfolio-senna.vercel.app',
    link: 'Lihat portfolio Kiki →',
  },
  {
    n: '02',
    tag: 'DIGITAL MARKETPLACE',
    title: 'SennMarket',
    desc: 'Platform katalog produk digital dengan pengalaman belanja yang cepat dan modern.',
    href: 'https://sennmarket.web.id',
    link: 'Kunjungi sennmarket.web.id →',
  },
  {
    n: '03',
    tag: 'PAYMENT PLATFORM',
    title: 'SennPayy',
    desc: 'Identitas project pembayaran digital untuk alur invoice dan transaksi online.',
    href: 'https://sennpayy.biz.id',
    link: 'Kunjungi sennpayy.biz.id →',
  },
  {
    n: '04',
    tag: 'FINANCE WEB APP',
    title: 'Kasaku',
    desc: 'Aplikasi pencatatan keuangan pribadi & usaha dengan auth, paket PayKita, PWA, dan dashboard modern.',
    href: 'https://kasaku.biz.id',
    link: 'Kunjungi kasaku.biz.id →',
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="mx-auto w-[min(1120px,calc(100%-40px))] py-[92px] pt-6">
      <p className="mb-3 text-center font-mono text-xs uppercase tracking-[2px] text-cyan-300 text-glow-cyan">{'// ecosystem'}</p>
      <h2 className="text-center text-[clamp(30px,4vw,46px)] font-extrabold tracking-[-1.5px]">Empat pintu, satu rumah.</h2>
      <p className="mx-auto mt-3 max-w-[620px] text-center leading-[1.75] text-slate-400">Masuk lewat mana pun, kamu tetap berada di dalam ekosistem senna.dev.</p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-[15px] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-[#0a0a18]/90 to-violet-500/10 p-6 transition hover:-translate-y-1.5 hover:border-cyan-300/60 hover:shadow-[0_0_25px_rgba(0,232,255,.14)]"
          >
            <span className="font-mono text-[11px] tracking-[1px] text-cyan-300">{p.n} / {p.tag}</span>
            <h3 className="mb-2 mt-2 text-[28px] font-extrabold tracking-[-.8px]">{p.title}</h3>
            <p className="mb-4 text-sm leading-[1.55] text-slate-400">{p.desc}</p>
            <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white transition hover:text-cyan-300">{p.link}</a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
