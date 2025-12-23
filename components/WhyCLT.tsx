
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BookOpen, Users, Headphones, GraduationCap, BarChart3, CloudLightning } from 'lucide-react';

const features = [
  { icon: <GraduationCap />, title: "Live market mentorship", desc: "Interactive sessions with real-time analysis." },
  { icon: <BookOpen />, title: "Structured curriculum", desc: "Beginner to advanced pathways that make sense." },
  { icon: <BarChart3 />, title: "Real-time practice", desc: "Learn by doing in live market conditions." },
  { icon: <Headphones />, title: "Lifetime support", desc: "A community that never leaves you behind." },
  { icon: <Users />, title: "Evolving Community", desc: "Collaborate with professional traders daily." },
  { icon: <CloudLightning />, title: "Institutional Concepts", desc: "No confusion, just pure professional smart money logic." }
];

export const WhyCLT: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why-clt" ref={sectionRef} className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-5">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Why CLT <span className="text-red-600"><span style={{ textDecoration: 'line-through'  }} className="">Never</span> Always</span> Works</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            At CLT Trading Academy, we don’t believe in quick fixes or hype. We believe in structure, discipline, and proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card group bg-white p-8 rounded-[2rem] shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
                {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:border-red-600 transition-all shadow-xl group">
            Show Me How CLT Works
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
