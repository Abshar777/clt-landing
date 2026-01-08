"use client";
import React from "react";
import { CandlestickChart, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const Navbar: React.FC = () => {
  const router=useRouter()
  return (
    <nav className="sticky top-0 w-full z-40  bg-black/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="w-auto h-14 p-4  rounded-xl flex items-center justify-center text-white group-hover:bg-red-600 transition-all duration-500 transform group-hover:rotate-6">
                <img
                  src="/logo.png"
                  alt="CLT Logo"
                  className="w-auto drop-shadow-lg h-14"
                />
              </div>
              {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white animate-ping"></div> */}
            </div>
            {/* <div className="flex flex-col">
              <span className="text-slate-900 font-extrabold text-xl tracking-tighter leading-none">CLT</span>
              <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Academy</span>
            </div> */}
          </div>

          <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-slate-600">
            <a
              href="#why-clt"
              className="hover:text-red-600 transition-colors py-2"
            >
              Why CLT
            </a>
            <a
              href="#courses"
              className="hover:text-red-600 transition-colors py-2"
            >
              Programs
            </a>
            <a
              href="#testimonials"
              className="hover:text-red-600 transition-colors py-2"
            >
              Success Stories
            </a>
            <a
              href="#enroll"
              className="hover:text-red-600 transition-colors py-2 "
            >
              Get Educational Account
            </a>
          </div>

          <div className="flex items-center gap-5">
            <button onClick={()=>{
              router.push("#enroll")
            }} className="group relative flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-red-600 transition-all duration-300 shadow-xl hover:-translate-y-1">
              <a href="#enroll" className="flex items-center justify-center gap-2">
                Start Journey
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
