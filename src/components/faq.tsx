"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { FAQS } from '../const';

const FAQItem: React.FC<{ question: string, answer: string, index: number }> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`border-2 rounded-3xl mb-4 transition-all duration-300 ${isOpen ? 'border-red-600 bg-red-50/30' : 'border-slate-100 bg-white'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left"
      >
        <span className={`text-lg md:text-xl font-black transition-colors ${isOpen ? 'text-red-600' : 'text-slate-900'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-red-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 md:px-8 md:pb-10 text-slate-600 leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-red-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-red-200 mx-auto mb-6"
          >
            <MessageCircle className="w-8 h-8" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Frequently Asked <span className="text-red-600">Questions</span></h2>
          <p className="text-slate-500 font-medium">Everything you need to know about starting your trading journey with CLT.</p>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} {...faq} index={i} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center p-8 rounded-[2rem] bg-white border-2 border-dashed border-slate-200"
        >
          <p className="text-slate-900 font-bold text-lg mb-2">Still have questions?</p>
          <p className="text-slate-500 mb-6">Our academic counselors are ready to help you 24/7.</p>
          <button className="text-red-600 font-black flex items-center gap-2 mx-auto hover:gap-4 transition-all">
            Chat with an expert <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

import { ArrowRight } from 'lucide-react';
export default FAQ;
