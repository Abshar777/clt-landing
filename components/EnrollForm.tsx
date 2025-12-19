
import React from 'react';
import { Mail, Phone, ArrowRight, Wallet } from 'lucide-react';

export const EnrollForm: React.FC = () => {
  return (
    <section id="enroll" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border border-slate-200">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                Immediate Entry
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Ready to Begin?</h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed">
                If you’re serious about mastering trading—not just dabbing—CLT Trading Academy gives you the roadmap, skills, and support you need.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-red-600 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-red-600">
                    <Wallet size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Free Funded Account</h4>
                    <p className="text-sm text-slate-500 font-medium">Start trading with our capital on us.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black p-12 lg:p-20 relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full"></div>
               <div className="relative z-10 space-y-8">
                  <h3 className="text-2xl font-black text-white">Start My Trading Journey</h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder-slate-500 focus:outline-none focus:border-red-600 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder-slate-500 focus:outline-none focus:border-red-600 transition-all"
                      />
                    </div>
                    <button className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-xl">
                      Get My Free Roadmap
                      <ArrowRight size={20} />
                    </button>
                    <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
                      Or what?? <span className="text-red-600">Regret!!!</span>
                    </p>
                  </div>
                  
                  <div className="pt-10 border-t border-white/10">
                    <button className="w-full bg-white/5 border border-white/20 text-white py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                      Talk to a Mentor
                    </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
