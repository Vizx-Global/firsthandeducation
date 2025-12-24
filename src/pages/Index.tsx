import React from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Hero from "@/sections/Hero";
import MatchCriteria from "@/sections/MatchCriteria";
import EducatorsCTA from "@/sections/EducatorsCTA";
import Mission from "@/sections/Mission";
import Services from "@/sections/Services";
import Referral from "@/sections/Referrals";
import Contact from "@/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <MatchCriteria />
        <EducatorsCTA />
        <Mission />
        <Services />
        <Referral />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
