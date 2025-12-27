"use client"
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { AnimatedNumber } from './AnimatedNumber';

export const Counter: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const stats = [
    {
      value: 3000,
      suffix: "+",
      label: "Trading Course Delivered",
      prefix: "",
      decimals: 0
    },
    {
      value: 2,
      suffix: "M+",
      label: "PROFITS BOOKED 2025",
      prefix: "$",
      decimals: 0
    },
    {
      value: 82,
      suffix: "%",
      label: "Success Rate",
      prefix: "",
      decimals: 0
    },
    {
      value: 24,
      suffix: "/7",
      label: "Community Support",
      prefix: "",
      decimals: 0
    }
  ];

  return (
    <div className="w-full mt-10 px-4 flex items-center justify-center" ref={containerRef}>
      <div className="relative w-full overflow-hidden">
        {/* Modern Background Decorations */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2"></div>

        <div className="bg-red-600 w-full rounded-3xl grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 py-16 px-6 border-y border-white/10 shadow-2xl relative z-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-baseline justify-center text-4xl md:text-5xl font-black text-white mb-2 tabular-nums">
                {stat.prefix && <span className="mr-0.5 opacity-90">{stat.prefix}</span>}
                <AnimatedNumber 
                  value={isInView ? stat.value : 0} 
                  decimals={stat.decimals}
                />
                <span className="ml-0.5 opacity-90">{stat.suffix}</span>
              </div>
              <div className="text-[11px] md:text-[12px] font-black text-white/80 uppercase tracking-[0.2em] leading-tight px-4 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
              
              {/* Decorative separator for desktop */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/20" style={{ left: `${(index + 1) * 25}%` }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
