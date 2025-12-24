import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              FirstHand Education
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Uniting quality educators with exemplary PreK-12 schools. We are the bridge to your next great opportunity in education.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/healthcare-staffing-about-us" },
                { name: "Schools", href: "/schools" },
                { name: "Contact", href: "/healthcare-staffing-contact" },
                { name: "Careers", href: "/healthcare-staffing-careers" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-red-500 shrink-0 mt-0.5" />
                <span>6575 West Loop South, Suite 500,<br />Bellaire, TX 77401</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-red-500 shrink-0" />
                <span>(562) 234-5454</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-red-500 shrink-0" />
                <span>info@firsthand-education.com</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="h-40 bg-gray-800 rounded-lg overflow-hidden relative group">
             {/* Map Image Placeholder or Embed */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.639433438318!2d-95.46467868489228!3d29.72485698199996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3c861e38947%3A0x6295353592864609!2s6575%20W%20Loop%20S%20%23500%2C%20Bellaire%2C%20TX%2077401!5e0!3m2!1sen!2sus!4v1642834723945!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy"
                className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FirstHand Education. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
