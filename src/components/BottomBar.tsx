import { ArrowRight, Play, Video } from "lucide-react";
import React from "react";

const BottomBar = () => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-1.5 bg-black/5 backdrop-blur-xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full hover:scale-[1.02] transition-transform duration-300">
        <button className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-all group">
          <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
            <Play className="ml-0.5 text-slate-900" />
          </div>
          <span>See Video</span>
        </button>

        <button className="shiny-cta focus:outline-none group">
          <span>
            Let's Start
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
