"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RoadmapItemProps {
  step: RoadmapStep;
  index: number;
  total: number;
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RoadmapData {
  title: string;
  subtitle: string;
  steps: RoadmapStep[];
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ step, index, }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex flex-col sm:flex-row group"
    >
      {/* Numbered Timeline Badge (Desktop) */}
      {/* 
        The line is at left-6 (24px). Line width is w-1 (4px). Center = 26px.
        Badge is w-10 (40px). Half = 20px. 
        Offset to center badge on line: 26px - 20px = 6px.
      */}
      <div className="absolute left-[6px] top-8 hidden sm:flex items-center justify-center z-30">
        <motion.div
          animate={{
            scale: isInView ? 1.1 : 0.9,
            backgroundColor: isInView ? "#dc2626" : "#ffffff",
            borderColor: isInView ? "#ef4444" : "#fee2e2",
            color: isInView ? "#ffffff" : "#ef4444",
          }}
          className="w-10 h-10 rounded-full border-4 flex items-center justify-center font-black text-sm transition-colors duration-500 shadow-md"
        >
          {index + 1}
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="flex-1 ml-0 sm:ml-16">
        <div
          className={`
          p-6 sm:p-8 rounded-3xl transition-all duration-500 border-2
          ${
            isInView
              ? "bg-red-600 border-red-400 shadow-xl scale-[1.02] transform"
              : "bg-white border-transparent shadow-sm hover:shadow-md"
          }
        `}
        >
          <div className="flex items-start gap-6">
            {/* Icon Circle */}
            <div
              className={`
              flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500
              ${isInView ? "bg-white text-red-600" : "bg-red-50 text-red-600"}
            `}
            >
              {step.icon}
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3
                  className={`text-xl font-bold transition-colors duration-500 ${
                    isInView ? "text-white" : "text-slate-800"
                  }`}
                >
                  {step.title}
                </h3>
              </div>
              <p
                className={`text-base leading-relaxed transition-colors duration-500 ${
                  isInView ? "text-red-50" : "text-slate-500"
                }`}
              >
                {step.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RoadmapItem;
