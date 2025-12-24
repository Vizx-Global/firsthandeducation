import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/firsthealthLogo.png";
import logoDark from "@/assets/firsthealthLogo-dark.png"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isJobListingsOpen, setIsJobListingsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight;
      setIsScrolled(scrolled);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { 
      label: "Medical Staffing", 
      href: "/healthcare-staffing-medical-staffing" 
    },
    { 
      label: "Job Listings", 
      href: "#",
      submenu: [
        { label: "For Employers", href: "/healthcare-staffing-for-employers" },
        { label: "For Jobseekers", href: "/healthcare-staffing-for-job-seekers" }
      ]
    },
    { label: "Careers", href: "/healthcare-staffing-careers" },
    { label: "About Us", href: "/healthcare-staffing-about-us" },
   
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href !== "#") {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleContactClick = () => {
    navigate("/contact");
    setIsMenuOpen(false);
  };

  const handleApplyClick = () => {
    navigate("/healthcare-staffing-for-job-seekers");
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 shadow-2xl backdrop-blur-lg border-b border-gray-200' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo & Brand - Dynamic logo based on scroll state */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group relative"
            aria-label="Firsthand Healthcare - Home"
          >
            {/* White logo for transparent background - ORIGINAL STYLING */}
            <motion.img
              src={logo}
              alt="Firsthand Healthcare"
              className={`h-10 w-auto lg:h-12 object-contain transition-all duration-500 ${
                isScrolled ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              } absolute transition-transform duration-300 group-hover:scale-105`}
              loading="eager"
            />
            {/* Dark logo for white background - RESTYLED */}
            <motion.div
              className={`transition-all duration-500 ${
                isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <motion.img
                src={logoDark}
                alt="Firsthand Healthcare"
                className="h-10 w-auto lg:h-12 object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-0 invert-[0.2] hover:invert-[0.3]"
                loading="eager"
              />
            </motion.div>
          </button>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center space-x-1"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <Button
                    variant="ghost"
                    onClick={() => setIsJobListingsOpen(!isJobListingsOpen)}
                    className={`font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-1 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-corporate-red hover:bg-red-50' 
                        : 'text-white hover:text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      isJobListingsOpen ? 'rotate-180' : ''
                    } ${isScrolled ? 'text-gray-600' : 'text-white/80'}`} />
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    onClick={() => handleNavClick(item.href)}
                    className={`font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-corporate-red hover:bg-red-50' 
                        : 'text-white hover:text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Button>
                )}

                {/* Job Listings Dropdown */}
                {item.submenu && (
                  <AnimatePresence>
                    {isJobListingsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`absolute top-full left-0 mt-2 w-48 rounded-lg shadow-2xl border backdrop-blur-lg py-2 z-50 ${
                          isScrolled 
                            ? 'bg-white border-gray-200' 
                            : 'bg-black/80 border-white/20 backdrop-blur-xl'
                        }`}
                      >
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => handleNavClick(subItem.href)}
                            className={`w-full text-left px-4 py-2 transition-colors duration-200 font-medium ${
                              isScrolled
                                ? 'text-gray-700 hover:text-corporate-red hover:bg-red-50'
                                : 'text-white hover:text-white hover:bg-white/10'
                            }`}
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Phone Button */}
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={`font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-corporate-red hover:bg-red-50' 
                  : 'text-white hover:text-white/90 hover:bg-white/10'
              }`}
            >
              <a href="tel:281-747-6757">
                <Phone className={`w-4 h-4 mr-2 ${isScrolled ? 'text-gray-600' : 'text-white/80'}`} />
                281-747-6757
              </a>
            </Button>

            {/* Apply Now Button */}
            <Button
              onClick={handleApplyClick}
              className={`font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group ${
                isScrolled
                  ? 'bg-corporate-red hover:bg-red-600 text-white shadow-lg'
                  : 'bg-white text-corporate-red hover:bg-white/90 shadow-lg border border-white/20'
              }`}
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-red-50 hover:text-corporate-red hover:scale-105' 
                : 'text-white hover:bg-white/10 hover:scale-105'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className={`py-4 space-y-2 border-t rounded-b-2xl ${
                isScrolled
                  ? 'bg-white/95 border-gray-200 backdrop-blur-lg'
                  : 'bg-black/80 border-white/20 backdrop-blur-xl'
              }`}>
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.submenu ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => setIsJobListingsOpen(!isJobListingsOpen)}
                          className={`w-full flex items-center justify-between px-4 py-3 font-normal transition-all duration-200 rounded-lg ${
                            isScrolled
                              ? 'text-gray-700 hover:text-corporate-red hover:bg-red-50'
                              : 'text-white hover:text-white/90 hover:bg-white/10'
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            isJobListingsOpen ? 'rotate-180' : ''
                          } ${isScrolled ? 'text-gray-600' : 'text-white/80'}`} />
                        </button>
                        <AnimatePresence>
                          {isJobListingsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1"
                            >
                              {item.submenu.map((subItem) => (
                                <button
                                  key={subItem.label}
                                  onClick={() => handleNavClick(subItem.href)}
                                  className={`w-full text-left px-4 py-2 transition-colors duration-200 rounded-lg font-normal ${
                                    isScrolled
                                      ? 'text-gray-600 hover:text-corporate-red hover:bg-red-50'
                                      : 'text-white/80 hover:text-white hover:bg-white/10'
                                  }`}
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={`w-full text-left px-4 py-3 font-normal transition-all duration-200 rounded-lg ${
                          isScrolled
                            ? 'text-gray-700 hover:text-corporate-red hover:bg-red-50'
                            : 'text-white hover:text-white/90 hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="px-4 pt-2 space-y-3">
                  {/* Phone Button */}
                  <Button
                    variant="ghost"
                    className={`w-full justify-center px-4 py-3 font-medium transition-all duration-200 rounded-lg ${
                      isScrolled
                        ? 'text-gray-700 hover:text-corporate-red hover:bg-red-50'
                        : 'text-white hover:text-white/90 hover:bg-white/10'
                    }`}
                    asChild
                  >
                    <a href="tel:281-747-6757">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>

                  {/* Apply Now Button */}
                  <Button
                    onClick={handleApplyClick}
                    className={`w-full font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-xl group ${
                      isScrolled
                        ? 'bg-corporate-red hover:bg-red-600 text-white'
                        : 'bg-white text-corporate-red hover:bg-white/90'
                    }`}
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Close dropdown when clicking outside */}
      {isJobListingsOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsJobListingsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;