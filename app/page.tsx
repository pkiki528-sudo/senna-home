import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import About from '@/components/About';
import Capabilities from '@/components/Capabilities';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <div className="grid-bg pointer-events-none fixed inset-0" />
      <Navbar />
      <Hero />
      <Ecosystem />
      <About />
      <Capabilities />
      <Contact />
      <Footer />
    </main>
  );
}
