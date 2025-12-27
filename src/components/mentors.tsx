"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import t18 from "@/../public/t18.jpeg";
import t40 from "@/../public/t40.jpeg";
import t20 from "@/../public/t20.png";
import t20_1 from "@/../public/t20-1.png";
import t19 from "@/../public/t19.png";
import t45 from "@/../public/t45.jpeg";
import { motion } from "framer-motion";
import { TrendingUp, Users } from "lucide-react";

// Nihal Azhikodan

// Indices Scalper | Market Structure & Volume Trader
// 4+ years of experience trading indices with a strong focus on market structure, liquidity, and volume. Known for execution discipline, risk control, and psychological stability. Teaches traders to build a repeatable, process-driven trading system.

// Mathson Mathew

// Forex Trader | Smart Money Concepts
// Active in Forex markets for 4+ years, specializing in major and minor currency pairs. Trades using Smart Money Concepts, liquidity inducement, and market structure with strict risk management. Focuses on clarity, consistency, and disciplined execution.

// Edwin Joy

// Professional Forex Trader | SNR & Volume Specialist
// 9+ years of trading experience specializing in Malaysian SNR, candle liquidity, and chart patterns. Trades Gold, Silver, Crude Oil, US30, and US100. Provides portfolio and capital management with swing and intraday strategies.

// Rafat Shaik

// Trading Mentor | Stocks & Forex
// 7+ years of hands-on experience across Indian stock and Forex markets. Specializes in Gold, Silver, and major currency pairs. Certified in Smart Money Concepts, Price Action, and Trading Fundamentals, with a structured, market-driven approach.

// Ashwin Sudarsh

// Professional Stock & Forex Trader | SMC Specialist
// Active since 2019, specializing in Smart Money Concepts, market structure, liquidity engineering, and FVGs. Trades with a rule-based, risk-controlled approach. Mentors traders to execute professionally without signal dependency.

// Sriram S

// Trader & Mentor | Forex & Crypto
// 7+ years of experience in Forex and Crypto markets. Specializes in Smart Money Concepts, market structure, and liquidity dynamics. Known for disciplined execution and mentoring traders to become confident, independent decision-makers

export const teamMembers = [
  {
    id: 18,
    name: "Edwin Joy",
    type: "Mentors",
    role: "Master Of Academics",
    bio: "Master Of Academics",
    det: "professional forex trader with expertise in chart patterns and volume analysis. With 9+ years of experience, I specialize in Malaysian SNR, candle liquidity analysis, and chart patterns.",
    imageUrl: t18,
    qualifications:
      "BTech, MTech, MBA, PGDIM, PGDHRM,Certified from NPTEL, IRADAI",
    achievements:
      "Published 11 Journal papers above impact factor 5 with ISBN number",
    experience:
      "Former Vice Principal, Polytechnic and Engg. College.9 years of trading experience in both Indian Market, Forex market Focused in gold, silver, WTI oil, UJ, US30, NASDAQ",
  },
  {
    id: 40,
    name: "Ashwin",
    type: "Mentors",
    role: "Senior mentor",
    bio: "Senior mentor",
    det: "Professional Stock & Forex Trader | SMC Specialist Active since 2019, specializing in Smart Money Concepts, market structure, liquidity engineering, and FVGs. Trades with a rule-based, risk-controlled approach. Mentors traders to execute professionally without signal dependency.",
    imageUrl: t40,
    qualifications: "Bachelor of commerce, Diploma in Hospitality Managment",
    experience: "Former Bank employee at Co operative bank",
  },

  {
    id: 20,
    name: "Rafat ",
    type: "Mentors",
    role: "Trading mentor",
    bio: "Trading mentor",
    det: "Trading Mentor | Stocks & Forex 7+ years of hands-on experience across Indian stock and Forex markets. Specializes in Gold, Silver, and major currency pairs. Certified in Smart Money Concepts, Price Action, and Trading Fundamentals, with a structured, market-driven approach.",
    imageUrl: t20,
    qualifications: "BBA, Masters in Project Management.",
    comfortableAreaInTrading: "Gold and BTC",
    experience: "7+ years in Financial Markets, 4 Years in Forex Market.",
  },
  {
    id: 28,
    name: "Nihal ",
    type: "Mentors",
    role: "Trading mentor",
    bio: "Trading mentor",
    det: "Indices Scalper | Market Structure & Volume Trader 4+ years of experience trading indices with a strong focus on market structure, liquidity, and volume. Known for execution discipline, risk control, and psychological stability. Teaches traders to build a repeatable, process-driven trading system.",
    imageUrl: t20_1,
    qualifications: "BBA graduate",
    comfortableAreaInTrading: "Nasdaq & S&P500 indices",
    experience:
      "6 years of trading experience in both Indian Market, Forex market",
  },
  {
    id: 19,
    name: "Sriram",
    type: "Mentors",
    role: "Trading mentor",
    bio: "Trading mentor",
    det: "Trader & Mentor | Forex & Crypto 7+ years of experience in Forex and Crypto markets. Specializes in Smart Money Concepts, market structure, and liquidity dynamics. Known for disciplined execution and mentoring traders to become confident, independent decision-makers",
    imageUrl: t19,
    qualifications: "B.E, MBA, Certified from NISM- PGCCM",
    achievements:
      "Created 200+ educational YouTube videos on Forex & financial markets, Mentored 100+ traders across the GCC region",
    experience:
      "6+ years GCC experience in financial markets, Former Deputy Manager – Kotak Securities Limited, 7+ years trading experience across Indian markets, Forex & Crypto, Core focus on Gold, Silver, GBPUSD, EURUSD & NASDAQ",
  },
  {
    id: 45,
    name: "Mathson Mathew ",
    type: "Mentors",
    role: "Junior Mentor",
    bio: "Junior Mentor",
    det: "Forex Trader | Smart Money Concepts Active in Forex markets for 4+ years, specializing in major and minor currency pairs. Trades using Smart Money Concepts, liquidity inducement, and market structure with strict risk management. Focuses on clarity, consistency, and disciplined execution.",
    imageUrl: t45,
    qualifications: "B Tech in Mechanical Engineering ",
    comfortableAreaInTrading: "Currency Pairs",
    experience:
      "4+ years of market experience. 2 year experience as a Forex Mentor. Expertise in swing trading with proper risk management and psychology and also worked in trading sales field. ",
  },
];
export default function OurTeam() {
  return (
    <div className="md:py-10 mt-20  py-6 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}

        <div className="text-center mb-14 flex flex-col items-center justify-center ">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-black uppercase tracking-widest mb-4"
          >
            <Users className="w-4 h-4" /> CLT ACADEMY Mentors
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black capitalize text-slate-900 tracking-tight">
            Collaboration at <span className="text-red-600   ">the core</span> of
            innovation
          </h2>
          <p className="text-slate-500 font-medium">
            Our mentors are here to guide you every step of the way.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="!pb-12"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide className="group" key={index}>
              <div className="relative cursor-pointer image-anime bg-transparent rounded-xl overflow-hidden ">
                {/* Image Wrapper */}
                <div className="relative group-hover:opacity-0 transition-all duration-500 overflow-hidden rounded-2xl bg-[#DBE0E3]">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>

                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full aspect-[1/1.35] object-cover rounded-2xl transform transition duration-500 group-hover:scale-110"
                    width={500}
                    height={500}
                    placeholder="blur"
                  />
                </div>

                {/* Content */}
                <div className="absolute group-hover:hidden  bottom-10 left-6 right-6 text-center z-20 transform translate-y-6 transition-all duration-500 group-hover:-translate-y-6">
                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>

                  {/* Description (hidden until hover) */}
                  <p className="text-white/70 group-hover:hidden text-sm mt-3 opacity-100 group-hover:opacity-100 transition-all duration-500">
                    {member.bio}
                  </p>
                </div>
                <div className="w-full absolute h-full top-0 hidden group-hover:flex opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500    flex-col justify-center items-center bg-red-600 ">
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>

                  <p className="text-xs text-center text-white/80">
                    {" "}
                    {member.det}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
