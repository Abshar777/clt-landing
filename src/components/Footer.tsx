import React from "react";
import {
  CandlestickChart,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { phoneNumber } from "@/const";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/10 border-t border-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-auto h-14 p-4  rounded-xl flex items-center justify-center text-white group-hover:bg-red-600 transition-all duration-500 transform group-hover:rotate-6">
                <img
                  src="/logo.png"
                  alt="CLT Logo"
                  className="w-auto drop-shadow-lg h-14"
                />
              </div>
              {/* <span className="text-slate-900 font-extrabold text-xl tracking-tighter uppercase">CLT Academy</span> */}
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              Institutional grade education for independent traders. We focus on
              clarity, discipline and structure.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Academy</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Why CLT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Mentor Notes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Student Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Programs</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Traders Edge
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Elite Blueprint
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Live Mentorship
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Funded Accounts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li>
                <a
                  href="mailto:support@cltacademy.com"
                  className="text-red-600 underline"
                >
                  support@cltacademy.com
                </a>
              </li>
              <li>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-red-600 underline"
                >
                  {phoneNumber}
                </a>
              </li>
              <li>
                CLT Academy Head Office <br />M09, Al&nbsp;Shaibani Building,
                Hor&nbsp;Al&nbsp;Anz&nbsp;East, Dubai, United Arab Emirates.
              </li>
              <li>
                <a
                  href={`https://wa.me/${phoneNumber
                    .replace("+", "")
                    .replace(
                      " ",
                      ""
                    )}?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20this.%20Could%20you%20please%20provide%20details?`}
                  className="text-red-600 underline"
                >
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 pb-10  border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
            &copy; 2024 CLT Trading Academy. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Risk Disclosure
            </a>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-100 flex justify-center items-center gap-6">
          <p className="text-xs text-center text-slate-400 font-bold uppercase tracking-widest">
            <b>warning:</b> The information provided on this website and within our educational programs, courses, workshops, and materials is for educational and informational purposes only. It is not intended to be, and does not constitute, financial advice, investment recommendations, or an invitation to buy or sell any financial instrument.
          </p>
         
        </div>
      </div>
    </footer>
  );
};
