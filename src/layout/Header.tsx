import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" }, 
    { name: "Schools", href: "/schools" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/healthcare-staffing-contact" },
  ];

  const handleRequestSubClick = () => {
    navigate("/general-staffing-request-a-sub-now-or-cover-a-class-now");
    setIsMobileMenuOpen(false); 
  };

  const handleApplyNowClick = () => {
    // Open external URL in new tab
    window.open("https://firsthand-education.zohorecruit.com/jobs/Careers", "_blank", "noopener,noreferrer");
    setIsMobileMenuOpen(false); 
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="flex flex-col">
            <span className={cn("text-2xl font-bold tracking-tight transition-colors", isScrolled ? "text-primary" : "text-white")}>
              FirstHand
            </span>
            <span className={cn("text-xs font-medium tracking-widest uppercase", isScrolled ? "text-gray-600" : "text-gray-200")}>
              Education
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium hover:text-red-600 transition-colors",
                isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-3 ml-4">
             <Button 
                variant={isScrolled ? "outline" : "secondary"} 
                className={cn("text-xs font-semibold px-4", !isScrolled && "bg-white/10 text-white border-white/20 hover:bg-white/20")}
                onClick={handleApplyNowClick}
             >
                Apply Now
             </Button>
             <Button 
                className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 shadow-lg shadow-red-600/20"
                onClick={handleRequestSubClick}
             >
                Request Sub/Cover Now
             </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
          )}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full bg-white shadow-xl flex flex-col pt-24 pb-8 px-6 gap-6 md:hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
               <div className="flex flex-col gap-3 mt-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-center"
                  onClick={handleApplyNowClick}
                >
                  Apply Now
                </Button>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white justify-center"
                  onClick={handleRequestSubClick}
                >
                  Request Sub/Cover Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;