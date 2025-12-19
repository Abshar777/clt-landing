
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CheckCircle2, Crown, Zap, Clock } from 'lucide-react';

export const Courses: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".course-reveal", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        x: -50,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="courses" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Courses That <span className="text-red-600">Transform</span> You</h2>
          <p className="text-slate-500 font-medium">Choose your path from beginner to pro institutional trader.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Traders Edge */}
          <div className="course-reveal group relative p-10 bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden hover:border-red-600 transition-all duration-500 shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
               <Zap size={120} className="text-slate-900" />
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-100">Beginner Friendly</span>
              <div className="flex items-center gap-1 text-red-600 font-bold text-xs">
                <Clock size={14} /> 4-Weeks
              </div>
            </div>

            <h3 className="text-3xl font-black text-slate-900 mb-2">Traders Edge</h3>
            <p className="text-red-600 font-bold mb-8 uppercase tracking-tighter">Start Strong Program</p>
            
            <p className="text-slate-500 font-medium mb-10 leading-relaxed">
              A perfect way to get your feet wet. Master the foundations of chart reading and MT5 navigation.
            </p>

            <ul className="space-y-4 mb-12">
              {["Forex, indices, & stocks overview", "Detailed Chart reading & Candlesticks", "Support & Resistance logic", "MT5 platform training", "Risk management foundations"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                  <CheckCircle2 className="text-red-600" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold hover:bg-black hover:text-white transition-all shadow-lg text-lg">
              Start With Traders Edge
            </button>
          </div>

          {/* Elite Trade Blueprint */}
          <div className="course-reveal group relative p-10 bg-black text-white rounded-[3rem] border border-slate-800 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
               <Crown size={120} className="text-white" />
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 bg-red-600 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Professional Level</span>
              <div className="flex items-center gap-1 text-red-400 font-bold text-xs uppercase">
                Most Enrolled
              </div>
            </div>

            <h3 className="text-3xl font-black text-white mb-2">Elite Trade Blueprint</h3>
            <p className="text-red-500 font-bold mb-8 uppercase tracking-tighter">Advanced & Institutional Level</p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Phase 1</p>
                <p className="text-xs font-bold">8-Week Profit Matrix</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Phase 2</p>
                <p className="text-xs font-bold">14-Week Market Code</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Phase 3</p>
                <p className="text-xs font-bold">28-Week CLT Vantage</p>
              </div>
            </div>

            <ul className="space-y-4 mb-12">
              {["Market Structure & Order Blocks", "Liquidity Sweeps & FVGs", "Fibonacci Sniper Tools", "Smart Money Concept (SMC) mastery", "Advanced strategy building & Backtesting"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-semibold text-sm">
                  <CheckCircle2 className="text-red-600" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full py-5 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl text-lg">
              Upgrade to Elite Blueprint
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
