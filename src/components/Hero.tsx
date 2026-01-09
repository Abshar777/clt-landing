"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ShieldCheck,
  Zap,
  TrendingUp,
  Target,
  Mail,
  Phone,
  ArrowRight,
  Loader2,
  User,
} from "lucide-react";
import heroImage from "@/../public/hero.jpeg";
import { TimeDisplay } from "./timer/TimeDisplay";
import { detectCountry, minutesLeftUntilJan30_2026 } from "@/utils/util";
import { toast } from "sonner";
import { useState } from "react";
import { phoneNumber } from "@/const";
import parsePhoneNumberFromString, { CountryCode } from "libphonenumber-js";
import Image from "next/image";

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);


  return (
    <>
      <section
        ref={heroRef}
        className="relative  grid-bg w-full mt-2   hero-bg min-h-[90vh] flex items-center justify-center  pt-13  md:px-20    pb-20"
      >
        <div className="absolute  z-[-1] flex flex-col items-center justify-center overflow-hidden rounded-2xl inset-0 top-0 w-full  ">
          <Image
            width={1000}
            height={1000}
            src={heroImage}
            loading="lazy"
            placeholder="blur"
            alt="hero-bg"
            className="w-[95%] h-full bg-black rounded-3xl opacity-20 object-cover"
          />
          <div className="w-[95%] z-[-1] absolute top-0  rounded-3xl h-full bg-black"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 hero-bg-blob w-96 h-96 bg-red-100 rounded-full blur-[120px] -z-10 opacity-60"></div>
        <div className="absolute bottom-20 right-10 hero-bg-blob w-80 h-80 bg-slate-100 rounded-full blur-[100px] -z-10 opacity-40"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className=" md:mx-auto mt-4 w-[90%] lg:px-8 relative z-10 text-center">
          <div className="inline-flex md:text-base text-xs  items-center gap-2 md:px-4 p-2 md:py-2 py-1 rounded-full border border-red-100 bg-red-50 text-red-600 md:text-[11px] text-[10px] font-bold uppercase tracking-widest mb-8 reveal-text">
            <span className="relative  md:flex hidden h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            CLAIM YOURS <span className="text-red-600  font-bold">FREE</span>{" "}
            EDUCATIONAL ACCOUNT
          </div>

          <h1
            ref={textRef}
            className="text-4xl md:text-6xl font-black text-slate-50 tracking-tighter leading-[0.9] md:mb-8 mb-4"
          >
            <div className="reveal-text overflow-hidden">KHDA Approved</div>
            <div className="reveal-text text-slate-50">
              Forex Trading Academy <br /> IN Dubai.
            </div>
          </h1>

          <p className="reveal-text text-sm md:text-xl text-slate-100  max-w-2xl mx-auto mb-5 font-medium">
            Last Few Days Remaining
          </p>
          <div className="relative md:w-full w-[80%] mx-auto flex items-center justify-center mb-4 z-10">
            <TimeDisplay totalSeconds={minutesLeftUntilJan30_2026()} />
          </div>

          <div className="reveal-text flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* <div className="flex -space-x-3 reveal-text text-lg  font-medium">Last Few Days Remaining</div> */}

            <a
              href="#enroll"
              className="w-full sm:w-auto px-10 py-5 bg-red-600 text-white rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              Talk to Our Mentor
            </a>
          </div>

          {/* Floating Icons */}
          {/* <div className="absolute left-[0rem] top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="floating-icon p-6 w-min bg-white rounded-3xl shadow-xl border border-slate-100 transform -rotate-12 mb-10">
            <ShieldCheck className="text-red-600" size={32} />
          </div>
          <div className="floating-icon p-6 w-min bg-white rounded-3xl shadow-xl border border-slate-100 transform rotate-6 ml-20">
            <TrendingUp className="text-green-600" size={32} />
          </div>
        </div> 
        <div className="absolute right-[-4rem] top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="floating-icon p-6 w-min bg-white rounded-3xl shadow-xl border border-slate-100 transform rotate-12 mb-10">
            <Target className="text-red-600" size={32} />
          </div>
          <div className="floating-icon p-6 w-min bg-white rounded-3xl shadow-xl border border-slate-100 transform -rotate-6 mr-20">
            <Zap className="text-yellow-500" size={32} />
          </div>
        </div> */}
        </div>
        {/* <div className=" rounded-md p-4">
        <div className="bg-slate-50  rounded-xl p-12 lg:p-20 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 space-y-8">
            <h3 className="text-2xl font-black text-black">
              Start My Trading Journey
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  size={18}
                />
                <input
                  value={formData?.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full bg-black/5 border border-black/10 rounded-2xl py-4 pl-12 pr-6 text-black placeholder-slate-500 focus:outline-none focus:border-red-600 transition-all"
                />
              </div>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  size={18}
                />
                <input
                  onChange={handleChange}
                  value={formData?.email}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full  bg-black/5 border border-black/10 rounded-2xl py-4 pl-12 pr-6 text-black placeholder-slate-500 focus:outline-none focus:border-red-600 transition-all"
                />
              </div>
              <div className="relative">
                <Phone
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  size={18}
                />
                <input
                  onChange={phoneNumberChange}
                  value={formData?.phone}
                  type="tel"
                  name="phone"
                  disabled={phoneCodeLoading}
                  placeholder="Phone Number"
                  className="w-full disabled:cursor-not-allowed disabled:opacity-50 bg-black/5 border border-black/10 rounded-2xl py-4 pl-12 pr-6 text-black placeholder-slate-500 focus:outline-none focus:border-red-600 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !isValidPhone || phoneCodeLoading}
                className="w-full disabled:opacity-50 disabled:cursor-not-allowed bg-red-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span className="text-white">submitting...</span>
                  </div>
                ) : (
                  "Get My Free Roadmap"
                )}
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div> */}
      </section>
    </>
  );
};
