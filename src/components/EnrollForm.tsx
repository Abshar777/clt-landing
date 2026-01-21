"use client";
import React, { useEffect, useState } from "react";
import { Mail, Phone, ArrowRight, Wallet, Loader2, User } from "lucide-react";
import { CountryCode, parsePhoneNumberFromString } from "libphonenumber-js";
import { toast } from "sonner";
import { phoneNumber } from "@/const";
import { detectCountry } from "@/utils/util";
import { whatsappRedirect } from "./whatsapp";
export const EnrollForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+971",
    message: "",
  });

  const [callingCode, setCallingCode] = useState("+971");
  const [phoneCodeLoading, setPhoneCodeLoading] = useState(true);

  useEffect(() => {
    detectCountry()
      .then((code) => {
        setCallingCode(code);
        setFormData((prev) => ({ ...prev, phone: code }));
        setPhoneCodeLoading(false);
      })
      .catch(() => {
        setPhoneCodeLoading(false);
      });
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);

  const url =
    "https://script.google.com/macros/s/AKfycbw-uyPiyPDttDCasddkRP4-tTD2vqTQivU6MLnUU80g-r6Tsx3P8sVWiX6Zzrgj1zp2/exec";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const phoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Remove non-digits
    let digits = value.replace(/\D/g, "");

    // Remove country code digits if user pastes full number
    const ccDigits = callingCode.replace("+", "");
    if (digits.startsWith(ccDigits)) {
      digits = digits.slice(ccDigits.length);
    }

    // Limit length (UAE = 9 digits)
    digits = digits.slice(0, 9);

    const formatted = `${callingCode} ${digits}`;

    setFormData((prev) => ({ ...prev, phone: formatted }));
    setIsValidPhone(digits.length === 9);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          Name: formData?.name,
          Email: formData?.email,
          PhoneNumber: " " + formData?.phone + "_",
          Message: " ",
        }),
      });

      toast.success("Message sent successfully");
      setFormData({
        name: "",
        message: "",
        email: "",
        phone: callingCode,
      });

      // window.open(
      //   `https://wa.me/${phoneNumber.replace("+", "").replace(" ", "")}?text=${
      //     formData?.name
      //   } \n ${formData?.email} \n${formData?.phone} \n${formData?.message}`
      // );
    } catch (error) {
      console.error(error);
      toast.error("Message send failed");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="enroll" className="py-24 bg-slate-50">
      <div className="md:max-w-7xl md:mx-auto px-2 sm:px-2 lg:px-8">
        <div className="relative bg-white md:rounded-[3.5rem] rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="grid lg:grid-cols-2">
            <div className="md:p-12 p-4 lg:p-20 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                Immediate Entry
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Ready to Begin?
              </h2>
              <p className="text-slate-500 font-medium md:text-lg text-sm leading-relaxed">
                If you’re serious about mastering trading—not just dabbing—CLT
                Trading Academy gives you the roadmap, skills, and support you
                need.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 md:p-6 p-2 bg-slate-50 rounded-3xl border border-slate-100 hover:border-red-600 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-red-600">
                    <Wallet size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold md:text-base text-xs text-slate-900">
                      Free Educational Account
                    </h4>
                    <p className="md:text-sm text-xs text-slate-500 font-medium">
                      Start trading with our capital on us.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black md:p-12 p-6 lg:p-20 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full"></div>
              <div className="relative z-10 space-y-8">
                <h3 className="text-2xl font-black text-white">
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
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder-slate-500 focus:outline-none focus:border-red-600 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                      size={18}
                    />
                    <input
                      value={formData?.email}
                      onChange={handleChange}
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder-slate-500 focus:outline-none focus:border-red-600 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Phone
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                      size={18}
                    />
                    <input
                      value={formData?.phone}
                      onChange={phoneNumberChange}
                      type="tel"
                      disabled={phoneCodeLoading}
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full disabled:cursor-not-allowed disabled:opacity-50 bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder-slate-500 focus:outline-none focus:border-red-600 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || !isValidPhone}
                    className="w-full disabled:opacity-50 disabled:cursor-not-allowed bg-red-600 text-white py-5 rounded-2xl font-bold md:text-lg text-xs hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-xl"
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
                  <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
                    Or what?? <span className="text-red-600">Regret!!!</span>
                  </p>
                </form>

                <div className="pt-10 border-t border-white/10">
                  <button
                    data-click="whatsapp"
                    onClick={whatsappRedirect}
                    className=" whatsapp  w-full bg-white/5 md:text-base text-xs border border-white/20 text-white py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
                  >
                    Talk to a Mentor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
