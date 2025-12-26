"use client";
import React, { useEffect } from "react";
import { StatsTicker } from "../StatsTicker";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "sonner";
import { Footer } from "../Footer";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";


const IndexLayout = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <div className="min-h-screen  transition-opacity duration-1000">
      <Toaster position="bottom-right" richColors />
      <StatsTicker />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default IndexLayout;
