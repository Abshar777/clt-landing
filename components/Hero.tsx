
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ShieldCheck, Zap, TrendingUp, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main text split reveal
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });

      // Floating icons animation
      gsap.to(".floating-icon", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
        ease: "sine.inOut"
      });

      // Background parallax
      gsap.to(".hero-bg-blob", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 200,
        scale: 1.2,
        opacity: 0.3
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative hero-bg min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 hero-bg-blob w-96 h-96 bg-red-100 rounded-full blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute bottom-20 right-10 hero-bg-blob w-80 h-80 bg-slate-100 rounded-full blur-[100px] -z-10 opacity-40"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl grid-bg mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-100 bg-red-50 text-red-600 text-[11px] font-bold uppercase tracking-widest mb-8 reveal-text">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          Next Level Trading Academy
        </div>

        <h1 ref={textRef} className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
          <div className="reveal-text overflow-hidden">Learn Trading.</div>
          <div className="reveal-text text-gradient">Grow For Life.</div>
        </h1>

        <p className="reveal-text text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium">
          The only place where you can learn smart trading. No hype, just institutional structure.
        </p>

        <div className="reveal-text flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#enroll" className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-2xl font-bold text-lg hover:bg-red-600 transition-all shadow-2xl hover:scale-105 active:scale-95">
            Start My Trading Journey
          </a>
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i} 
                src={`https://picsum.photos/100/100?random=${i}`} 
                className="w-12 h-12 rounded-full border-4 border-white shadow-md object-cover" 
                alt="Student"
              />
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600 shadow-md">
              +5k
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute left-[0rem] top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="floating-icon p-6 w-min bg-white rounded-3xl shadow-xl border border-slate-100 transform -rotate-12 mb-10">
            <ShieldCheck className="text-red-600" size={32} />
          </div>
          <div className="floating-icon p-6 w-min bg-white rounded-3xl shadow-xl border border-slate-100 transform rotate-6 ml-20">
            <TrendingUp className="text-green-600" size={32} />
          </div>
        </div>
        <div className="absolute right-[-4rem] top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="floating-icon p-6 w-min bg-white rounded-3xl shadow-xl border border-slate-100 transform rotate-12 mb-10">
            <Target className="text-red-600" size={32} />
          </div>
          <div className="floating-icon p-6 w-min bg-white rounded-3xl shadow-xl border border-slate-100 transform -rotate-6 mr-20">
            <Zap className="text-yellow-500" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};
