
import React from 'react';
import { 
  Calendar, 
  Users, 
  BookOpen, 
  Headphones, 
  Video, 
  Wallet, 
  TrendingUp 
} from 'lucide-react';

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
    name: "Alex Johnson",
    role: "Full-time Trader",
    profit: "+$2,400",
    thumbnail: "/1.mp4",
    quote: "CLT Academy changed my perspective on risk management. I'm now consistently profitable."
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Student",
    profit: "+$850",
    thumbnail: "/2.mp4",
    quote: "The live sessions with mentors are invaluable. Being able to see real trades in real-time is a game-changer."
  },
  {
    id: 3,
    name: "David Chen",
    role: "Part-time Trader",
    profit: "+$4,200",
    thumbnail: "/3.mp4",
    quote: "The $500 trading account gave me the boost I needed to start my career without fear."
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Entrepreneur",
    profit: "+$1,150",
    thumbnail: "/1.mp4",
    quote: "The support team is incredible. They are available 24/7 whenever I have a question about my trades."
  }
];

export const FAQS = [
  {
    question: "Do I need prior experience to join?",
    answer: "Not at all! Our roadmap is designed to take you from zero to hero. We start with the absolute basics of forex and build your knowledge step-by-step."
  },
  {
    question: "What is the $500 trading account benefit?",
    answer: "After completing the core modules and demonstrating consistency on demo, we provide a $500 funded account for you to practice live market conditions with our capital."
  },
  {
    question: "How long does it take to become profitable?",
    answer: "Trading speed varies by student, but most of our students begin seeing consistent results within 3 to 6 months of following the CLT Roadmap."
  },
  {
    question: "Is the mentorship really 24/7?",
    answer: "Yes! We have a global team of mentors across different time zones to ensure that no matter when you are trading, someone is there to support you."
  }
];