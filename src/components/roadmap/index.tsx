"use client";
import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ROADMAP_STEPS } from "@/const";
import RoadmapItem from "./roadmapSteps";
import LeftSection from "./leftSide";

const RodmapV2 = () => {
  const [steps] = useState(ROADMAP_STEPS);
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="relative">
      <div className="max-w-7xl   mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 md:pt-24">
        <div className="absolute  top-0 left-0 w-full h-full pointer-events-none z-0 opacity-10">
          <svg
            width="100%"
            className="opacity-50"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="waves"
                width="100"
                height="20"
                patternUnits="userSpaceOnUse"
                patternTransform="scale(2)"
              >
                <path
                  d="M0 10 Q25 0 50 10 T100 10"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Sticky Hero/Intro Section */}
          <div className="lg:sticky lg:top-24 h-fit">
            <LeftSection />
          </div>

          {/* Right Column: Roadmap Timeline */}
          <div className="relative pt-8">
            {/* The Vertical Background Line */}
            <div className="absolute left-6 top-16 bottom-0 w-1 bg-red-100/50 rounded-full hidden sm:block" />

            {/* The Animated Progress Line */}
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute left-6 top-16 bottom-0 w-1 roadmap-line-gradient rounded-full hidden sm:block z-20 shadow-[0_0_10px_rgba(239,68,68,0.3)]"
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
    </div>
  );
};

export default RodmapV2;
