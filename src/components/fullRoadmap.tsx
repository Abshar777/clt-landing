"use client";
import { ROADMAP_STEPS } from "@/const";
import { getStepInsight } from "@/service/gemini";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import StepCard from "./roadmap";
import gsap from "gsap";

const FullRoadmap = () => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [insight, setInsight] = useState<{
    insight: string;
    tips: string[];
  } | null>(null);
  const [loadingInsight, setLoadingInsight] = useState(false);
  const roadmapRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const fetchInsight = async (title: string) => {
    setLoadingInsight(true);
    try {
      const data = await getStepInsight(title);
      setInsight(data);
    } catch (error) {
      console.error("Failed to fetch insight", error);
      setInsight({
        insight:
          "Ready to elevate your trading game? Our experts are here to help you navigate the markets with precision.",
        tips: [
          "Maintain strict risk management",
          "Keep a detailed trading journal",
          "Focus on process over profit",
        ],
      });
    } finally {
      setLoadingInsight(false);
    }
  };

  const handleStepClick = (id: number, title: string) => {
    setActiveStepId(id);
    fetchInsight(title);
  };

  useEffect(() => {
    fetchInsight(ROADMAP_STEPS[0].title);
  }, []);
  useEffect(() => {
    // Initial reveal animation for the whole page
    gsap.to("body", { opacity: 1, duration: 1, ease: "power2.out" });
    gsap.to(".opacity-0", { opacity: 1, duration: 1, ease: "power2.out" });
  }, []);
  return (
    <main
      ref={roadmapRef}
      className="flex-grow grid-bg py-32 bg-slate-50 relative overflow-hidden"
    >
      <div className="flex flex-col mb-10  items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Learn forex trading in
          <br />
          easy steps with <span className="text-red-600">CLT</span>
        </h2>
        <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
          Our roadmap is designed to help you achieve your trading goals.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* CURVED SVG PATH */}
        <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-24 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Path (Dashed/Light) */}
            <path
              d="M50 0 C 80 150, 20 250, 50 400 C 80 550, 20 650, 50 800 C 80 900, 50 1000, 50 1000"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="10 10"
            />

            {/* Active Progress Path */}
            <motion.path
              d="M50 0 C 80 150, 20 250, 50 400 C 80 550, 20 650, 50 800 C 80 900, 50 1000, 50 1000"
              stroke="#DC2626"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength }}
            />

            {/* Glow effect for the head of the path */}
            <motion.circle
              r="3"
              fill="#DC2626"
              style={{
                offsetPath:
                  "path('M50 0 C 80 150, 20 250, 50 400 C 80 550, 20 650, 50 800 C 80 900, 50 1000, 50 1000')",
                offsetDistance: useTransform(pathLength, (v) => `${v * 100}%`),
              }}
              className="shadow-[0_0_15px_rgba(220,38,38,0.8)]"
            />
          </svg>
        </div>

        {/* Steps Rendering */}
        <div className="relative pl-14 md:pl-0 z-20">
          {ROADMAP_STEPS.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              isActive={activeStepId === step.id}
              onClick={() => handleStepClick(step.id, step.title)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FullRoadmap;
