
import React from 'react';
import { 
  Calendar, 
  Users, 
  BookOpen, 
  Headphones, 
  Video, 
  Wallet, 
  TrendingUp, 
  Trophy,
  Award,
  Star,
  Shield,
  Medal,
  Globe,
  Zap,
  Binary,
  Cpu,
  Briefcase
} from 'lucide-react';
import p1 from "@/../public/1.jpeg";      
import p2 from "@/../public/2.jpeg";
import p3 from "@/../public/3.jpeg";
import p4 from "@/../public/4.jpeg";
import p5 from "@/../public/5.jpeg";
import p6 from "@/../public/6.jpeg";
import p7 from "@/../public/7.jpeg";
import p8 from "@/../public/8.jpeg";
import p9 from "@/../public/9.jpeg";
import p10 from "@/../public/10.jpeg";    
import p11 from "@/../public/11.jpeg";
import p12 from "@/../public/12.jpeg";
import p13 from "@/../public/13.jpeg";
import p14 from "@/../public/14.jpeg";
import p15 from "@/../public/15.jpeg";



import a0 from "@/../public/a0.jpg";
import a1 from "@/../public/a1.jpeg";
import a2 from "@/../public/a2.jpeg";
import a3 from "@/../public/a3.jpeg";
import a4 from "@/../public/a4.jpeg";
import a5 from "@/../public/a5.jpeg";
import a6 from "@/../public/a6.jpeg";
import a7 from "@/../public/a7.jpeg";
import a8 from "@/../public/a8.jpeg";
import a9 from "@/../public/a9.jpeg";
import a10 from "@/../public/a10.jpeg";




export const ROADMAP_STEPS = [
  {
    id: 1,
    title: "BOOK YOUR FREE CONSULTATION",
    description: "Start your journey by speaking with our experts to understand your trading goals.",
    icon: <Calendar className="w-6 h-6" />
  },
  {
    id: 2,
    title: "GET CONNECTED WITH ACADEMIC COUNSELLORS",
    description: "Our counselors will guide you through the curriculum and set up your learning path.",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 3,
    title: "JOIN OUR CLASSES",
    description: "Dive into structured learning modules designed for beginners and pros alike.",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    id: 4,
    title: "24/7 CLIENT SUPPORT",
    description: "Never trade alone. Our support team is here for you every hour of every day.",
    icon: <Headphones className="w-6 h-6" />
  },
  {
    id: 5,
    title: "LIVE SESSION WITH MENTORS",
    description: "Participate in real-time market analysis and trades with seasoned forex mentors.",
    icon: <Video className="w-6 h-6" />
  },
  {
    id: 6,
    title: "GET 500$ TRADING ACCOUNT AND BENEFITS",
    description: "Receive capital to practice your skills and unlock exclusive platform benefits.",
    icon: <Wallet className="w-6 h-6" />
  },
  {
    id: 7,
    title: "PROFITABLE TRADER",
    description: "Achieve consistent results and join our community of successful trading professionals.",
    icon: <TrendingUp className="w-6 h-6" />
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Abdul Aseez",
    role: "Full-time Trader",
    profit: "+$2,400",
    thumbnail: "/1.mp4",
    quote: "CLT Academy changed my perspective on risk management. I'm now consistently profitable."
  },
  {
    id:     2,
    name: "Ranjith ",
    role: "Student",
    profit: "+$850",
    thumbnail: "/2.mp4",
    quote: "The live sessions with mentors are invaluable. Being able to see real trades in real-time is a game-changer."
  },
  {
    id: 3,
    name: "Jeevan",
    role: "Part-time Trader",
    profit: "+$4,200",
    thumbnail: "/3.mp4",
    quote: "The $500 trading account gave me the boost I needed to start my career without fear."
  },
  {
    id: 4,
    name: "Abdul Aseez",
    role: "Entrepreneur",
    profit: "+$1,150",
    thumbnail: "/1.mp4",
    quote: "The support team is incredible. They are available 24/7 whenever I have a question about my trades."
  }
];

export const FAQS = [

//   FREQUENTLY ASKED QUESTIONS

// 1. Who can learn trading?
// Anyone above 18 years with proper mindset towards trading can join. No finance background is required.

// 2. How long does it take to become a profitable trader?
// There is no specific time period, it depends up on your consistency and smart work. The more you become consistent, less the time require to became profitable.

//     3. How much capital is required to start trading?
// Students of CLT Academy will be given 500 dollar initially for trading to ensure proper risk management, psychology and deal with emotions. 

// 4. Do you provide a certificate after completion?
// Yes, a course completion certificate is provided.

// 5. Why should you join CLT academy?
// Whether you are a complete beginner or an intermediate trader, our step-by-step curriculum ensures clarity, confidence, and consistency in your trading journey.
  {
    question: "Who can learn trading?",
    answer: "Anyone above 18 years with proper mindset towards trading can join. No finance background is required."
  },
  {
    question: "How long does it take to become a profitable trader?",
    answer: "There is no specific time period, it depends up on your consistency and smart work. The more you become consistent, less the time require to became profitable."
  },
  {
    question: "How much capital is required to start trading?",
    answer: "Students of CLT Academy will be given 500 dollar initially for trading to ensure proper risk management, psychology and deal with emotions."
  },
  {
    question: "Do you provide a certificate after completion?",
    answer: "Yes, a course completion certificate is provided."
  },
  {
    question: "Why should you join CLT academy?",
    answer: "Whether you are a complete beginner or an intermediate trader, our step-by-step curriculum ensures clarity, confidence, and consistency in your trading journey."
  },
  
];



export const PROFIT_RESULTS = [
  {
    pair: "XAUUSD",
    type: "BUY",
    profit: "$1,240.50",
    status: "PROFIT",
    date: "Today, 10:24 AM"
  },
  {
    pair: "EURUSD",
    type: "SELL",
    profit: "$890.00",
    status: "PROFIT",
    date: "Today, 09:15 AM"
  },
  {
    pair: "GBPUSD",
    type: "BUY",
    profit: "$2,105.20",
    status: "PROFIT",
    date: "Yesterday"
  },
  {
    pair: "USDJPY",
    type: "SELL",
    profit: "$450.75",
    status: "PROFIT",
    date: "Yesterday"
  }
];

// Phone-sized portrait screenshots
export const PROFIT_SCREENSHOTS = [
    p1,

  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  
  
];


export const AWARDS = [
  {
    id:0,
    title:"Forex Expo Award ",
    year:"2025",
    org:"Master of forex education",
     icon: <Award className="w-8 h-8" />,
    image:a0,
  },
  {
    id: 1,
    title: "ProFx Awards",
    year: "2024",
    org: "Best Forex Academy",
    icon: <Award className="w-8 h-8" />,
    image: a1,
  },
  {
    id: 2,
    title: "Global Islamic FinTech",
    year: "2022",
    org: "GIFA Market Leadership Award ",
    icon: <Shield className="w-8 h-8" />,
    image: a2,
  },
  {
    id: 3,
    title: "MEA Finance Annual Industry Awards",
    year: "2024",
    org: "Best Professional Trading Academy",
    icon: <Trophy className="w-8 h-8" />,
    image: a3,
  },
  {
    id: 4,
    title: "Gulf Finance Focus",
    year: "2021",
    org: "Customer service excellence award",
    icon: <Medal className="w-8 h-8" />,
    image: a4,
  },
  {
    id: 5,
    title: "Middle East Finance Focus MEA",
    year: "2025",
    org: "Leading online trading academy",
    icon: <Star className="w-8 h-8" />,
    image: a5,
  },
  {
    id: 6,
    title: "iFX EXPO Dubai",
    year: "2024",
    org: "Best Trading Curriculum Design",
    icon: <Globe className="w-8 h-8" />,
    image: a6,
  },
  {
    id: 7,
    title: "Leaders in Fintech",
    year: "2025",
    org: "Excellence in Trading Education Award",
    icon: <Zap className="w-8 h-8" />,
    image: a7,
  },
  {
    id: 8,
    title: "Middle East Blockchain",
    year: "2023",
    org: "Most Trusted Trading Education Brand",
    icon: <Binary className="w-8 h-8" />,
    image: a8,
  },
  {
    id: 9,
    title: "Banking Tech Summit",
    year: "2025",
    org: "Innovation in Trading Education Award",
    icon: <Cpu className="w-8 h-8" />,
    image: a9,
  },
  {
    id: 10,
    title: "Finance Middle East",
    year: "2023",
    org: "Leading online trading academy",
    icon: <Briefcase className="w-8 h-8" />,
    image: a10,
  }
];


export const phoneNumber = "+971557454523";