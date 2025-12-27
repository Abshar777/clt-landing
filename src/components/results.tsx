"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  Smartphone,
} from "lucide-react";
import { PROFIT_RESULTS, PROFIT_SCREENSHOTS } from "../const";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { teamMembers } from "./mentors";
import Image from "next/image";

const ProfitResults: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-black uppercase tracking-widest mb-4"
          >
            <TrendingUp className="w-4 h-4" /> Live Results
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Real Results, <span className="text-red-600">Real Proof</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Transparency is key. Here are some of the latest results generated
            by our community members using the CLT strategy.
          </p>
        </div>

        {/* <Swiper
          modules={[Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4.5 },
          }}
          className="!pb-12"
        >
          {PROFIT_SCREENSHOTS.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="relative image-anime bg-transparent rounded-xl overflow-hidden group">
               
                <div className="relative overflow-hidden rounded-2xl bg-[#DBE0E3]">
                 
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>

                  <Image
                    width={500}
                    height={500}
                    placeholder="blur"
                    src={member}
                    alt="Profit Screenshot"
                    className="w-full aspect-[1/2] object-cover rounded-2xl transform transition duration-500 group-hover:scale-110"
                  />
                </div>

             
          
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}

        <div className="grid md:w-4xl w-full md:mx-auto grid-cols-2  md:grid-cols-3 gap-2  md:gap-8">
          {/* Image Wrapper */}
          {PROFIT_SCREENSHOTS.slice(0, 6).map((member, index) => (
            <div className="relative image-anime bg-transparent rounded-xl overflow-hidden group">
              <div className="relative overflow-hidden rounded-2xl bg-[#DBE0E3]">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>

                <Image
                  width={500}
                  height={500}
                  placeholder="blur"
                  src={member}
                  alt="Profit Screenshot"
                  className="w-full max-h-[400px] object-cover rounded-2xl transform transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}

          {/* Content */}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?u=${i}`}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm font-bold">
              Over <span className="text-red-600">500+ screenshots</span> shared
              by students this week
            </p>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .profit-screenshot-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default ProfitResults;
