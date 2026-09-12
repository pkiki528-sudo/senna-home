'use client';

const links = [
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#about', label: 'Tentang' },
  { href: '#capabilities', label: 'Dibangun' },
  { href: '#contact', label: 'Kontak' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#03030a]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-[min(1120px,calc(100%-40px))] items-center justify-between gap-5">
        <a href="#home" className="text-xl font-extrabold tracking-tight">
          senna<span className="text-cyan-300 text-glow-cyan">.dev</span>
          <small className="ml-2 font-mono text-[10px] font-medium text-violet-400">ecosystem home</small>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-cyan-300">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://t.me/sennasite"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[10px] border border-cyan-300/50 bg-gradient-to-br from-violet-600 to-violet-800 px-4 py-3 text-sm font-bold shadow-[0_0_18px_rgba(0,232,255,.25)] transition hover:-translate-y-0.5"
        >
          Telegram ↗
        </a>
      </div>
    </header>
  );
}
