"use client";
import React from "react";
import { Star, TrendingUp, Award, UserCheck } from "lucide-react";
import test1 from "@/../public/test1.png";
import test2 from "@/../public/test2.png";
import test4 from "@/../public/test4.png";
import test3 from "@/../public/test3.png";
import Image from "next/image";
const steps = [
  "Learn basics",
  "Understand market structure",
  "Build strategy",
  "Practice in live markets",
  "Trade confidently",
];

export const Testimonials: React.FC = () => {
 
  const testimonials = [
    {
      name: "Salma Shaikh ",
      title: "",
      image: test1,
      link: "https://maps.app.goo.gl/7diMSetWDaxdznMp7",
      description:
        "I joined with zero knowledge about trading, but the academy made everything so easy to understand. The classes are interactive, and the mentors give real-time examples that make learning fun and practical. Highly recommend for anyone starting their trading journey!",
    },
    {
      name: "Nisham Nishu",
      title: "",
      image: test2,
      link: "https://maps.app.goo.gl/FnH6sKtQEbzFt9Ur7",
      description:
        "I am truly grateful for the learning experience at CLT Trading Academy. The course structure was clear, practical, and well-organized, making it easy to follow even for someone without a financial background. The instructors are highly knowledgeable, patient, and always willing to provide support whenever needed.",
    },
    {
      name: "YAHIYA M V",
      title: "",
      image: test3,
      link: "https://maps.app.goo.gl/JfWFCdDHv7SX54997",
      description:
        "CLT Academy is one of the best places for anyone who wants to build a strong career in the trading industry. The instructors are highly knowledgeable and explain even complex topics in a simple, practical way. The training sessions are very interactive, and real-time trading examples make learning much easier.",
    },
    {
      name: "Nidha Farzeen",
      title: "",
      link: "https://maps.app.goo.gl/Lmb26pVMazGsS41D6",
      description:
        "CLT was a life changer. Mentor's are so friendly and experienced . Sir: AMJAD took class for me his class was amazing and he teach from the basic level to profitable trader and he make sure every student understood the topic very clearly . I also appreciate the community support .",
      image: test4,
    },
  ];
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">
              Let's Hear From <span className="text-red-600">Our Students</span>
            </h2>
            <p className="text-slate-500 font-medium mb-10 leading-relaxed">
              Success leaves clues. Here's the path our most successful students
              took to financial freedom.
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-black text-slate-400 group-hover:bg-red-600 group-hover:text-white transition-all">
                    {i + 1}
                  </div>
                  <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 grid md:grid-cols-2 gap-8">
            {testimonials.map((test, i) => (
              <div
                onClick={() => window.open(test.link, "_blank")}
                key={i}
                className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative group hover:border-red-200 transition-all shadow-sm"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 font-medium leading-relaxed">
                  {test.description}
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonials[i].image}
                    className="w-12 h-12 rounded-full object-cover"
                    alt="Student"
                    width={100}
                    height={100}
                  />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">
                      {test.name}
                    </p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                      student
                    </p>
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
