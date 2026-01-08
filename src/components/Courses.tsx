"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CheckCircle2, Crown, Zap, Clock } from "lucide-react";
import { whatsappRedirect } from "./whatsapp";

export const Courses: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".course-reveal", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        // x: -50,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="courses" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Courses That <span className="text-red-600">Transform</span> You
          </h2>
          <p className="text-slate-500 font-medium">
            Choose your path from beginner to pro institutional trader.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* 1. Trade Craft – Beginner */}
          <div className="course-reveal group relative md:p-10 p-6 bg-slate-50 md:rounded-[3rem] rounded-2xl border border-slate-200 overflow-hidden hover:border-red-600 transition-all duration-500 shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Zap size={120} className="text-slate-900" />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest border">
                Beginner Friendly
              </span>
              <div className="flex items-center gap-1 text-red-600 font-bold text-xs">
                <Clock size={14} /> 4-Weeks
              </div>
            </div>

            <h3 className="text-3xl font-black text-slate-900 mb-2">
              Trade Craft
            </h3>
            <p className="text-red-600 font-bold mb-8 uppercase tracking-tighter">
              Beginner Trading Course
            </p>

            <div className="flex flex-1 h-full  flex-col ">
              <ul className="space-y-4 mb-12">
                {[
                  "Trading principles",
                  "Risk management basics",
                  "Strategy development",
                  "Support & Resistance",
                  "MT5 platform training",
                  "Trading psychology & discipline",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 font-semibold text-sm"
                  >
                    <CheckCircle2 className="text-red-600" size={18} />
                    {item}
                  </li>
                ))}
              </ul>

              <button onClick={whatsappRedirect} className="w-full py-5  left-0 md:translate-y-[6.5rem]    bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold hover:bg-black hover:text-white transition-all shadow-lg text-lg">
                Start with Traders Craft
              </button>
            </div>
          </div>

          {/* 2. Profit Matrix – Intermediate */}
          <div className="course-reveal group relative md:p-10 p-6 bg-black text-white md:rounded-[3rem] rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Crown size={120} className="text-white" />
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 bg-red-600 rounded-full text-[10px] font-bold uppercase">
                Intermediate Level
              </span>
            </div>

            <h3 className="text-3xl font-black mb-2">Profit Matrix</h3>
            <p className="text-red-500 font-bold mb-8 uppercase tracking-tighter">
              Intermediate Trading Course
            </p>

            <div className="mb-6 text-sm font-bold text-red-400">
              8-Week Program
            </div>

            <ul className="space-y-4 mb-12">
              {[
                "Advanced strategy development",
                "Live market execution",
                "Advanced trading psychology",
                "Long-term growth planning",
                "Candlesticks & zones",
                "Multi-timeframe analysis",
                "Advanced scaling models",
                "Entry stacking & exit slicing",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-300 font-semibold text-sm"
                >
                  <CheckCircle2 className="text-red-600" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <button onClick={whatsappRedirect} className="w-full py-5 bg-red-600 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl text-lg">
              Execute Perfectly with Profit Matrix
            </button>
          </div>
          <div className="course-reveal group relative md:p-10 p-6 bg-slate-50 md:rounded-[3rem] rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Zap size={120} className="text-slate-900" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest border">
                Advanced Level
              </span>
              <div className="flex items-center gap-1 text-red-600 font-bold text-xs">
                <Clock size={14} /> 14-Weeks
              </div>
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-2">
              Market Code
            </h3>
            <p className="text-red-600 font-bold mb-8 uppercase tracking-tighter">
              Advanced Trading Course • 14 Weeks
            </p>

            <ul className="space-y-4 mb-12">
              {[
                "Price movement logic",
                "Institutional-level trading",
                "Smart Money Concepts (SMC)",
                "Liquidity manipulation",
                "High-precision entries",
                "Risk-to-reward systems",
                "BOS / CHOCH mapping",
                "Real-time strategy execution",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-700 font-semibold text-sm"
                >
                  <CheckCircle2 className="text-red-600" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <button onClick={whatsappRedirect} className="w-full py-5 md:translate-y-[4.5rem]    bg-black text-white rounded-2xl font-bold hover:bg-red-600 transition-all shadow-lg text-lg">
              Master Consistency with Market Code
            </button>
          </div>
          <div className="course-reveal group relative md:p-10 p-6 bg-black text-white md:rounded-[3rem] rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Crown size={120} className="text-white" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-red-600 rounded-full text-[10px] font-bold uppercase">
                Expert Level
              </span>

              <div className="flex items-center gap-1 text-red-600 font-bold text-xs">
                <Clock size={14} /> 28-Weeks
              </div>
            </div>
            <h3 className="text-3xl font-black mb-2">CLT Vantage</h3>
            <p className="text-red-500 font-bold mb-8 uppercase tracking-tighter">
              Expert Trading Course • 28 Weeks
            </p>

            <ul className="space-y-4 mb-12">
              {[
                "Capital scaling systems",
                "High-frequency precision entries",
                "Adaptive strategy building",
                "Institutional execution tactics",
                "Advanced liquidity mapping",
                "Live chart trading",
                "Peer-to-peer training",
                "Private portfolio structuring",
                "Fibonacci, order blocks, FVGs",
                "Trading structure architecture",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-300 font-semibold text-sm"
                >
                  <CheckCircle2 className="text-red-600" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <button onClick={whatsappRedirect} className="w-full py-5 bg-red-600 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl text-lg">
              Upgrade to CLT Vantage
            </button>
          </div>
          {/* 3. Market Code – Advanced */}

          {/* 4. CLT Vantage – Expert */}
        </div>
      </div>
    </section>
  );
};
