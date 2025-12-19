
import React from 'react';
import { Brain, Compass, Shield, Zap, Search, MessageCircle } from 'lucide-react';

const pillars = [
  { icon: <MessageCircle />, title: "Mentorship", value: "Hands-on guidance." },
  { icon: <Compass />, title: "Structure", value: "Clear roadmap to profit." },
  { icon: <Shield />, title: "Discipline", value: "Rules that keep you safe." },
  { icon: <Zap />, title: "Correct Strategy", value: "Winning edges only." },
  { icon: <Search />, title: "Market Awareness", value: "Read the sentiment." },
  { icon: <Brain />, title: "Psychology", value: "The mental game of 1%." }
];

export const Philosophy: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-white to-red-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
              Our Philosophy: <br />
              <span className="text-red-600">Trade with Clarity, Not Hype.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              We focus on the pillars that actually produce results. No shortcuts, no fancy indicators. Just the raw truth of how markets move.
            </p>
            <div className="pt-8">
              <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-xl">
                Begin My Transformation
              </button>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-6">
            {pillars.map((p, idx) => (
              <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                <div className="text-red-600 mb-4">{React.cloneElement(p.icon as React.ReactElement, { size: 24 })}</div>
                <h4 className="font-bold text-lg mb-1">{p.title}</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{p.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
