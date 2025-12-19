
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsTicker } from './components/StatsTicker';
import { WhyCLT } from './components/WhyCLT';
import { Courses } from './components/Courses';
import { EnrollForm } from './components/EnrollForm';
import { Philosophy } from './components/Philosophy';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import './index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WhatsappButton from './components/whatsapp';
import BottomBar from './components/BottomBar';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    // Initial reveal animation for the whole page
    gsap.to('body', { opacity: 1, duration: 1, ease: 'power2.out' });
    gsap.to('.opacity-0', { opacity: 1, duration: 1, ease: 'power2.out' });
  }, []);

  return (
    <div className="min-h-screen opacity-0 transition-opacity duration-1000">
      <StatsTicker />
      <Navbar />
      <main>
        <WhatsappButton />
        <Hero />
        <WhyCLT />
        <Courses />
        <Philosophy />
        <Testimonials />
        <EnrollForm />
        <BottomBar />
      </main>
      <Footer />
    </div>
  );
};

export default App;
