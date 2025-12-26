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

export const teamMembers = [
  {
    id: 18,
    name: "Edwin Joy",
    type: "Mentors",
    role: "Master Of Academics",
    bio: "Master Of Academics",
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
    imageUrl: t45,
    qualifications: "B Tech in Mechanical Engineering ",
    comfortableAreaInTrading: "Currency Pairs",
    experience:
      "4+ years of market experience. 2 year experience as a Forex Mentor. Expertise in swing trading with proper risk management and psychology and also worked in trading sales field. ",
  },
];
export default function OurTeam() {


  return (
    <div className="md:py-10 py-6 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14 flex flex-col items-center justify-center ">
          <div className="px-5 rounded-full mb-2 border border-primary text-primary font-semibold w-fit text-center py-2">
            <p className="md:text-sm text-xs uppercase text-nowrap">
              CLT ACADEMY Mentors
            </p>
          </div>
          <h1 className="md:text-5xl text-4xl text-center md:text-start text-black/90 font-bold">
            Collaboration at the core of innovation
          </h1>
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
            <SwiperSlide key={index}>
              <div className="relative image-anime bg-transparent rounded-xl overflow-hidden group">
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-2xl bg-[#DBE0E3]">
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
                <div className="absolute bottom-10 left-6 right-6 text-center z-20 transform translate-y-6 transition-all duration-500 group-hover:-translate-y-6">
                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>

                  {/* Description (hidden until hover) */}
                  <p className="text-white/70 text-sm mt-3 opacity-100 group-hover:opacity-100 transition-all duration-500">
                    {member.bio}
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
