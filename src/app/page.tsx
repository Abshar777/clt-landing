import { Hero } from "@/components/Hero";
import { WhyCLT } from "@/components/WhyCLT";
import { Courses } from "@/components/Courses";
import { EnrollForm } from "@/components/EnrollForm";
import { Philosophy } from "@/components/Philosophy";
import { Testimonials } from "@/components/Testimonials";

import WhatsappButton from "@/components/whatsapp";
import BottomBar from "@/components/BottomBar";
import OurTeam from "@/components/mentors";

import FAQ from "@/components/faq";
import VideoTestimonials from "@/components/videoTestimonials";
import FinalCTA from "@/components/cta";
import ProfitResults from "@/components/results";

import AwardsSection from "@/components/awwards";
import Videosection from "@/components/videosection";

export default function Home() {
  return (
    <main>
      <WhatsappButton />
      <Hero />
      <WhyCLT />

      <OurTeam />
      <Courses />
      <ProfitResults />
      <AwardsSection />
      <Videosection />
      <Philosophy />
      <Testimonials />
      <VideoTestimonials />

      <EnrollForm />
      <FAQ />
      <BottomBar />
      <FinalCTA />
    </main>
  );
}
