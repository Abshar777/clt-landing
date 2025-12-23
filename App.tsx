import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StatsTicker } from "./components/StatsTicker";
import { WhyCLT } from "./components/WhyCLT";
import { Courses } from "./components/Courses";
import { EnrollForm } from "./components/EnrollForm";
import { Philosophy } from "./components/Philosophy";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import "./index.css";
import { useState, useRef } from "react";
import { ROADMAP_STEPS } from "./const";
import StepCard from "./components/roadmap";
import { getStepInsight } from "./service/gemini";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhatsappButton from "./components/whatsapp";
import BottomBar from "./components/BottomBar";
import OurTeam from "./components/mentors";
import { Sparkles, X } from "lucide-react";
import FAQ from "./components/faq";
import VideoTestimonials from "./components/videoTestimonials";
import FinalCTA from "./components/cta";
import ProfitResults from "./components/results";
import { Toaster } from "sonner";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
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
    <div className="min-h-screen opacity-0 transition-opacity duration-1000">
     <Toaster position="bottom-right" richColors />
      <StatsTicker />
      <Navbar />
      <main>
        <WhatsappButton />
        <Hero />
        <WhyCLT />
        {/* Roadmap Section */}
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
                    offsetDistance: useTransform(
                      pathLength,
                      (v) => `${v * 100}%`
                    ),
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
        {/* <AnimatePresence>
          {insight && (
            <motion.div
              initial={{ y: 100, opacity: 0, x: "-50%" }}
              animate={{ y: 0, opacity: 1, x: "-50%" }}
              exit={{ y: 100, opacity: 0, x: "-50%" }}
              className="fixed bottom-8 left-1/2 w-[95%] max-w-xl bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 z-50 overflow-hidden"
            >
              <div className="p-8 relative">
                <button
                  onClick={() => setInsight(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center text-red-600">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 leading-none">
                      AI Trading Mentor
                    </h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">
                      Insight for Step {activeStepId}
                    </p>
                  </div>
                </div>

                {loadingInsight ? (
                  <div className="space-y-4">
                    <div className="h-4 bg-slate-50 rounded-full w-full animate-pulse"></div>
                    <div className="h-4 bg-slate-50 rounded-full w-3/4 animate-pulse"></div>
                    <div className="pt-4 grid grid-cols-1 gap-3">
                      <div className="h-10 bg-slate-50 rounded-xl w-full animate-pulse"></div>
                      <div className="h-10 bg-slate-50 rounded-xl w-full animate-pulse"></div>
                    </div>
                  </div>
                ) : (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <p className="text-slate-700 text-base md:text-lg font-medium leading-relaxed mb-8 border-l-4 border-red-600 pl-4 bg-red-50/30 py-2 rounded-r-lg">
                      "{insight?.insight}"
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {insight?.tips.map((tip, i) => (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          key={i}
                          className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-900 font-bold"
                        >
                          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[10px] text-red-600 border border-slate-200">
                            {i + 1}
                          </div>
                          {tip}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
        <OurTeam />
        <Courses />
        <ProfitResults />
        <Philosophy />
        <Testimonials />
        <VideoTestimonials />

        <EnrollForm />
        <FAQ />
        <BottomBar />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
