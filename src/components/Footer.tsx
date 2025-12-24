import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerLinks = [
    { label: 'Medical Staffing', href: '/medical-staffing' },
    { label: 'For Employers', href: '/employers' },
    { label: 'For Job Seekers', href: '/jobseekers' },
    { label: 'Careers', href: '/careers' },
  ];

  return (
    <>
      <footer className="relative bg-gray-900 text-white border-t border-white/10">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-32 h-32 bg-corporate-red/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-12">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">GET IN TOUCH</h3>
                  <p className="text-sm font-semibold text-white/80 mb-2">Contact Details</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" />
                    <p className="text-white/70 text-sm leading-relaxed">
                      1300 W Sam Houston Parkway S, Suite 100<br />
                      Houston, TX 77042
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-corporate-red flex-shrink-0" />
                    <p className="text-white/70 text-sm">Phone: 281-747-6757</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-corporate-red flex-shrink-0" />
                    <p className="text-white/70 text-sm">Email: info@firsthandhealthcarestaffing.com</p>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-bold text-white mb-4">QUICK LINKS</h3>
                <div className="flex flex-wrap gap-4 lg:gap-6">
                  {footerLinks.map((link, index) => (
                    <motion.button
                      key={link.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="text-white/70 hover:text-corporate-red transition-colors duration-300 text-sm font-medium block w-full text-left"
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Emergency Staffing Feature */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-corporate-red/10 to-red-600/10 border border-corporate-red/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-corporate-red to-red-600 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Emergency Staffing</h3>
                      <p className="text-white/70 text-sm">24/7 Urgent Support</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    Need immediate staffing coverage? Our emergency team is available 
                    24/7 to handle urgent healthcare staffing needs.
                  </p>
                  
                  <Button
                    className="w-full bg-gradient-to-r from-corporate-red to-red-600 hover:from-red-700 hover:to-red-800 text-white font-semibold py-2 rounded-lg transition-all duration-300 group"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: 281-747-6757
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
    
      </footer>

      {/* Absolute Bottom Copyright */}
     <div className="bg-gray-900 border-t border-white/10 py-3">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <p className="text-white/60 text-sm text-center">
      © Copyright {new Date().getFullYear()} FirstHand Healthcare Staffing | Designed by Vizx Global Dev Team
    </p>
  </div>
</div>
    </>
  );
};

export default Footer;