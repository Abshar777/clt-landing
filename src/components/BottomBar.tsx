"use client";
import { ArrowRight, Play, Video, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { whatsappRedirect } from "./whatsapp";

const BottomBar = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeVideo]);
  return (
    <>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 p-1.5 bg-black/5 backdrop-blur-xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full hover:scale-[1.02] transition-transform duration-300">
          <button onClick={()=>setActiveVideo("/l.mp4")} className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-all group">
            <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
              <Play className="ml-0.5 text-slate-900" />
            </div>
            <span>See Video</span>
          </button>

          <button onClick={whatsappRedirect} className="shiny-cta focus:outline-none group">
            <span>
              Let's Start
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 w-full  max-h-[90vh] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-red-600 transition text-white p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video with Sound */}
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomBar;
