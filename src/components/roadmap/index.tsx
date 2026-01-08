"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ROADMAP_STEPS } from "@/const";
import RoadmapItem from "./roadmapSteps";
import LeftSection from "./leftSide";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence,  } from "framer-motion";
import { Play, Clock, Share2, Bookmark, Users, Star, X } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

const RodmapV2 = () => {
  const [steps] = useState(ROADMAP_STEPS);

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!leftRef.current || !rightRef.current) return;

    ScrollTrigger.create({
      trigger: rightRef.current,       // roadmap controls duration
      start: "top top+=80",             // when pin starts
      end: "bottom bottom",             // when roadmap ends
      pin: leftRef.current,             // pin LEFT section
      pinSpacing: false,                // prevents extra space
      scrub: false,
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const [activeVideo, setActiveVideo] = useState<string | null>(null);
    
      // Lock body scroll when modal is open
      useEffect(() => {
        document.body.style.overflow = activeVideo ? "hidden" : "auto";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [activeVideo]);

  return (
    <div className="relative mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* LEFT — PINNED */}
          <div ref={leftRef} className="h-fit">
            <LeftSection OnClick={()=>setActiveVideo("/l.mp4")} />
          </div>

          {/* RIGHT — SCROLL CONTROLLER */}
          <div ref={rightRef} className="relative pt-8">
            <div className="absolute left-6 top-16 bottom-0 w-1 bg-red-100/50 rounded-full hidden sm:block" />

            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute left-6 top-16 bottom-0 w-1 roadmap-line-gradient rounded-full hidden sm:block z-20"
            />

            <div className="space-y-12 sm:space-y-24 relative">
              {steps.map((step, index) => (
                <RoadmapItem
                  key={step.id}
                  step={{
                    id: step.id.toString(),
                    title: step.title,
                    description: step.description,
                    icon: step.icon,
                  }}
                  index={index}
                  total={steps.length}
                />
              ))}
            </div>
          </div>

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
    </div>
  );
};

export default RodmapV2;
