import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCarousel from './components/FeaturedCarousel';
import { Steps, FinderSection, ListYourPG, AboutContact } from './components/Sections';

export default function App() {
  const findRef = useRef(null);

  const handleExplore = () => {
    const el = document.getElementById('find');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero onExplore={handleExplore} />
        <Steps />
        <FeaturedCarousel />
        <FinderSection />
        <ListYourPG />
        <AboutContact />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Student PG Finder — Built for VIT Chennai students.</div>
          <div className="text-slate-500">Brokerage-free • Verified • Student-first</div>
        </div>
      </footer>
    </div>
  );
}
