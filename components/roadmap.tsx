
import React from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
  step: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const StepCard: React.FC<StepCardProps> = ({ step, isActive, onClick, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div 
      className={`relative flex items-center justify-between mb-12 md:mb-24 w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
        className="w-full md:w-[45%] group"
      >
        <motion.div 
          onClick={onClick}
          whileHover={{ y: -5 }}
          className={`
            p-6 md:p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer shadow-sm
            ${isActive 
              ? 'bg-white border-red-600 shadow-2xl shadow-red-100 ring-4 ring-red-50' 
              : 'bg-white border-slate-100 hover:border-red-200 hover:shadow-xl'
            }
          `}
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              animate={isActive ? { rotate: [0, -10, 10, 0] } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
              className={`
                p-4 rounded-2xl transition-colors duration-300
                ${isActive ? 'bg-red-600 text-white' : 'bg-red-50 text-red-600'}
              `}
            >
              {step.icon}
            </motion.div>
            <div className="flex flex-col">
              <span className="text-red-600 font-bold text-xs tracking-[0.2em] uppercase">Phase {step.id}</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight group-hover:text-red-600 transition-colors">
                {step.title}
              </h3>
            </div>
          </div>
          
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {step.description}
          </p>
          
          {isActive && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 pt-6 border-t border-slate-100"
            >
              <span className="text-sm font-bold text-red-600 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                Active Learning Path
              </span>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Center Line Connector */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className={`
            w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-lg transition-all duration-500
            ${isActive ? 'bg-red-600 scale-125 ring-8 ring-red-50' : 'bg-slate-200'}
          `}
        >
          <span className={`font-black text-sm ${isActive ? 'text-white' : 'text-slate-500'}`}>{step.id}</span>
        </motion.div>
      </div>

      {/* Empty Side (For desktop layout balance) */}
      <div className="hidden md:block w-[45%]"></div>
    </div>
  );
};

export default StepCard;
