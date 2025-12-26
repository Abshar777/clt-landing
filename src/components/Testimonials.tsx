
import React from 'react';
import { Star, TrendingUp, Award, UserCheck } from 'lucide-react';

const steps = [
  "Learn basics",
  "Understand market structure",
  "Build strategy",
  "Practice in live markets",
  "Trade confidently"
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Let's Hear <span className="text-red-600">Them...</span></h2>
            <p className="text-slate-500 font-medium mb-10 leading-relaxed">
              Success leaves clues. Here's the path our most successful students took to financial freedom.
            </p>
            
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-black text-slate-400 group-hover:bg-red-600 group-hover:text-white transition-all">
                    {i + 1}
                  </div>
                  <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative group hover:border-red-200 transition-all shadow-sm">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-8 font-medium leading-relaxed">
                  "The Elite Trade Blueprint changed my life. I went from blowing accounts to passing a 100k funded challenge in 3 weeks. The institutional logic is the real deal."
                </p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/100/100?random=${i+10}`} className="w-12 h-12 rounded-full object-cover" alt="Student" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Student Name {i}</p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Funded Trader</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};
