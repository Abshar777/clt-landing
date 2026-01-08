import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Clock, Share2, Bookmark, Users, Star, X } from "lucide-react";

const LeftSection = ({OnClick}: {OnClick: () => void}) => {
   
  return (
   
    <div className="space-y-8">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-bold tracking-wide uppercase"
        >
          Exclusive Trading Academy
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight"
        >
          Path to Becoming <br />
          <span className="text-red-600 relative inline-block">
            Profitable Trader
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 338 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10C55.6667 4.66667 197 -3.5 336 10"
                stroke="#ef4444"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-600 max-w-lg leading-relaxed"
        >
          Follow our proven 7-step blueprint to master the markets. From
          consultation to your first live $500 account.
        </motion.p>
      </div>

      {/* Video Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        onClick={() => OnClick()}
        className="relative group rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-video flex items-center justify-center border-4 border-white"
      >
        <video
          src="/l.mp4"
          autoPlay
          muted

          loop
          playsInline
          controls={false}
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg flex items-center gap-1 uppercase italic">
            Academy Intro
          </span>
        </div>

        <div className="z-10 flex flex-col items-center">
          <button className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 hover:scale-110 transition-transform group/btn">
            <Play className="fill-white w-6 h-6 ml-1 group-hover/btn:scale-110 transition-transform" />
          </button>
          <span className="mt-4 text-white font-medium text-sm tracking-widest uppercase opacity-80">
            Success Story
          </span>
        </div>

        {/* <div className="absolute bottom-4 right-4 flex gap-4">
          <div className="flex flex-col items-center cursor-pointer group/icon">
            <Clock className="w-5 h-5 text-white/70 group-hover/icon:text-white transition-colors" />
            <span className="text-[10px] text-white/70 mt-1">Later</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer group/icon">
            <Share2 className="w-5 h-5 text-white/70 group-hover/icon:text-white transition-colors" />
            <span className="text-[10px] text-white/70 mt-1">Share</span>
          </div>
        </div> */}
      </motion.div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-sm flex items-center gap-4">
          <div className="bg-red-100 p-2 rounded-lg text-red-600">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm text-slate-500 font-medium">Community</div>
            <div className="text-lg font-bold text-slate-800">5k+ Traders</div>
          </div>
        </div>
        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-sm flex items-center gap-4">
          <div className="bg-red-100 p-2 rounded-lg text-red-600">
            <Star className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm text-slate-500 font-medium">Rating</div>
            <div className="text-lg font-bold text-slate-800">4.9 Stars</div>
          </div>
        </div>
      </div>
       
    </div>
   

  );
};

export default LeftSection;
