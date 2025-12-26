"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, ShieldCheck } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
   <div className="main p-4">
     <section className="py-20 rounded-3xl bg-red-600 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-red-500 rounded-full blur-[100px] opacity-30" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-400 rounded-full blur-[100px] opacity-20" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center text-white mx-auto mb-8 border border-white/20"
        >
          <Rocket className="w-10 h-10 animate-bounce" />
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
          Ready to become a <br />
          <span className="text-red-200 italic">Master Forex Trader?</span>
        </h2>
        
        <p className="text-red-100 text-xl font-medium mb-12 max-w-2xl mx-auto opacity-90">
          Join 10,000+ students worldwide who have decoded the markets. Your journey to financial freedom starts with a single step.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-5 bg-white text-red-600 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-2xl flex items-center justify-center gap-3 tracking-wide"
          >
            CLAIM YOUR SPOT NOW
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <div className="flex items-center gap-3 text-white/80 font-bold text-sm">
            <ShieldCheck className="w-5 h-5" />
            100% Risk-Free Consultation
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default FinalCTA;
