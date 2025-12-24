import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoDark from "@/assets/firsthealthLogo-dark.png"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJobListingsOpen, setIsJobListingsOpen] = useState(false);
  const navigate = useNavigate();

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
      className="fixed top-0 w-full z-50 bg-white shadow-2xl border-b border-gray-200"
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo & Brand - Solid dark logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group relative"
            aria-label="Firsthand Healthcare - Home"
          >
            <motion.img
              src={logoDark}
              alt="Firsthand Healthcare"
              className="h-10 w-auto lg:h-12 object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-0 invert-[0.2] hover:invert-[0.3]"
              loading="eager"
            />
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
                    className="font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-1 text-gray-700 hover:text-corporate-red hover:bg-red-50"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      isJobListingsOpen ? 'rotate-180' : ''
                    } text-gray-600`} />
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    onClick={() => handleNavClick(item.href)}
                    className="font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 text-gray-700 hover:text-corporate-red hover:bg-red-50"
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
                        className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-2xl border border-gray-200 bg-white py-2 z-50"
                      >
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => handleNavClick(subItem.href)}
                            className="w-full text-left px-4 py-2 transition-colors duration-200 font-medium text-gray-700 hover:text-corporate-red hover:bg-red-50"
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
              className="font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 text-gray-700 hover:text-corporate-red hover:bg-red-50"
            >
              <a href="tel:281-747-6757">
                <Phone className="w-4 h-4 mr-2 text-gray-600" />
                281-747-6757
              </a>
            </Button>

            {/* Apply Now Button */}
            <Button
              onClick={handleApplyClick}
              className="font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group bg-corporate-red hover:bg-red-600 text-white shadow-lg"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-xl transition-all duration-300 text-gray-700 hover:bg-red-50 hover:text-corporate-red hover:scale-105"
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
              <div className="py-4 space-y-2 border-t border-gray-200 rounded-b-2xl bg-white">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.submenu ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => setIsJobListingsOpen(!isJobListingsOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 font-normal transition-all duration-200 rounded-lg text-gray-700 hover:text-corporate-red hover:bg-red-50"
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            isJobListingsOpen ? 'rotate-180' : ''
                          } text-gray-600`} />
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
                                  className="w-full text-left px-4 py-2 transition-colors duration-200 rounded-lg font-normal text-gray-600 hover:text-corporate-red hover:bg-red-50"
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
                        className="w-full text-left px-4 py-3 font-normal transition-all duration-200 rounded-lg text-gray-700 hover:text-corporate-red hover:bg-red-50"
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
                    className="w-full justify-center px-4 py-3 font-medium transition-all duration-200 rounded-lg text-gray-700 hover:text-corporate-red hover:bg-red-50"
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
                    className="w-full font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-xl group bg-corporate-red hover:bg-red-600 text-white"
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