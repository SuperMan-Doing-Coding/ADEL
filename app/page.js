"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PortalsSection from "@/components/sections/PortalsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import StatsSection from "@/components/sections/StatsSection";
import TeacherExamineSection from "@/components/sections/TeacherExamineSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <PortalsSection />
      <FeaturesSection />
      <StatsSection />
      <TeacherExamineSection />
      <CTASection />
      <Footer />
    </main>
  );
}