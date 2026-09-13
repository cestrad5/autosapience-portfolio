import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Advantage from '@/components/Advantage';
import SegmentTabs from '@/components/SegmentTabs';
import BusinessModel from '@/components/BusinessModel';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070c17] text-[#cbd5e1] relative overflow-hidden bg-noise">

      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="orb orb-amber" style={{ width: '700px', height: '700px', top: '-250px', right: '-200px' }} />
        <div className="orb orb-amber" style={{ width: '450px', height: '450px', bottom: '10%', left: '-150px', opacity: 0.5 }} />
      </div>

      <Header />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <Hero />
        <PainPoints />
        <Advantage />
        <SegmentTabs />
        <BusinessModel />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
