import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Users, Shield, Award, Star, Heart, FileCheck, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

import healthcare1 from "@/assets/FirstHandHero3.jpg";
import healthcare2 from "@/assets/FirstHandHero1.jpg";
import healthcare3 from "@/assets/FirstHandHero2.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDownload = () => {
    const pdfUrl = '/assets/FirstHand_Healthcare_Staffing_Tips_Guide_v2.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'FirstHand_Healthcare_Staffing_Tips_Guide_v2.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const slides = [
    {
      background: healthcare1,
      title: "WE EXIST TO LEND A HAND TO",
      highlight: "Facilities in Need of Additional Support",
      description: "We ensure we provide professionals a chance to pursue a fruitful career in healthcare by matching them with reliable companies.",
      stats: { facilities: "200+", professionals: "5k+", satisfaction: "98%" },
      cta: "Apply Now!"
    },
    {
      background: healthcare2,
      title: "PREMIUM HEALTHCARE STAFFING",
      highlight: "When You Need It Most",
      description: "Rapid response staffing solutions for hospitals, clinics, and healthcare facilities facing critical staffing shortages.",
      stats: { response: "24/7", placements: "10k+", retention: "95%" },
      cta: "Request Staff"
    },
    {
      background: healthcare3,
      title: "YOUR CAREER PARTNER IN",
      highlight: "Healthcare Excellence",
      description: "Connect with top healthcare facilities and advance your career with opportunities that match your skills and aspirations.",
      stats: { specialties: "50+", growth: "3x", support: "100%" },
      cta: "Find Jobs"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center py-24">
      {/* Background Carousel with Healthcare Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
          >
            {/* Healthcare image with exact gradient overlay */}
            <div className="relative w-full h-full">
              <img 
                src={slide.background} 
                alt={`Firsthand Healthcare - ${slide.title}`}
                className="w-full h-full object-cover transform scale-105"
              />
              {/* Exact gradient overlay from first design */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-corporate-red/10 rounded-full blur-3xl"></div>
      </div>

      {/* EXACT ALIGNMENT: Using container and grid layout from reference */}
      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section - Exact same structure as reference */}
          <div className="max-w-2xl">
            {/* Trust Badge - Matching reference styling */}
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <div className="h-2 w-2 rounded-full animate-pulse bg-corporate-red" />
              <span className="text-sm font-medium text-white/90 tracking-wide">
                Healthcare Staffing Excellence
              </span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-3 h-3 fill-corporate-red text-corporate-red" 
                  />
                ))}
              </div>
            </div>

            {/* Main Heading with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-corporate-red" />
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {slides[currentSlide].highlight}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="mb-8 text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-lg">
              {slides[currentSlide].description}
            </p>

            {/* Feature Points - Updated to match reference stats bar style */}
            <div className="flex items-center gap-8 mb-8 py-4 border-y border-white/10">
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-corporate-red" />
                <div>
                  <div className="text-white font-semibold">Certified</div>
                  <div className="text-white/60 text-sm">Professionals</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-corporate-red" />
                <div>
                  <div className="text-white font-semibold">24/7</div>
                  <div className="text-white/60 text-sm">Staffing</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-corporate-red" />
                <div>
                  <div className="text-white font-semibold">Award</div>
                  <div className="text-white/60 text-sm">Winning</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Matching reference styling */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-corporate-red hover:bg-red-700 text-white rounded-full shadow-2xl group px-8 py-6 text-lg font-semibold"
                onClick={() => navigate('/healthcare-staffing-for-job-seekers')}
              >
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white rounded-full bg-transparent hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold group"
                onClick={() => navigate('/healthcare-staffing-for-employers')}
              >
                For Employers
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats Grid - Updated to match reference trust indicator */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-xs text-white/60 mb-4">Healthcare Staffing Excellence</p>
              <div className="grid grid-cols-3 gap-6 max-w-md">
                {Object.entries(slides[currentSlide].stats).map(([key, value], index) => (
                  <div 
                    key={key}
                    className="text-center transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-corporate-red mb-1">
                      {value}
                    </div>
                    <div className="text-xs font-medium text-white/80 uppercase tracking-wider">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - For floating card on larger screens */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-xs transform hover:scale-105 transition-all duration-300 ml-auto">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-corporate-red rounded-full flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Free Guide</p>
                  <p className="text-white/60 text-sm">Healthcare Staffing Tips</p>
                </div>
              </div>
              <Button 
                className="w-full bg-corporate-red hover:bg-red-700 text-white mt-2 rounded-full"
                onClick={handleDownload}
              >
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-xl bg-white/20 backdrop-blur-lg border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 group shadow-lg hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 text-white group-hover:text-corporate-red transition-colors duration-300" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-110 shadow-md" 
                  : "bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-xl bg-white/20 backdrop-blur-lg border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 group shadow-lg hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 text-white group-hover:text-corporate-red transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;