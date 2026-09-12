import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'senna.dev — Build. Automate. Deploy.',
  description: 'senna.dev adalah rumah ekosistem digital: Kiki Pratama, SennMarket, dan SennPayy.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
