import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import educationImage from "@/assets/education_service.png";

const EducatorsCTA = () => {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          <div className="p-12 md:p-16 flex-1 flex flex-col justify-center">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
             >
                <span className="text-red-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
                    Now Hiring
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Retired Teachers, Coaches, and Educators Needed Now
                </h2>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                    Your experience is invaluable. Return to the classroom on your own terms and continue to make an impact in students' lives. We offer flexible schedules that work for you.
                </p>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2 w-fit px-8" asChild>
                    <Link to="/apply">
                        Apply Today
                        <ArrowRight size={18} />
                    </Link>
                </Button>
            </motion.div>
          </div>
          
          {/* Image Side */}
          <div className="md:w-2/5 relative overflow-hidden group">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-full"
            >
              <img 
                src={educationImage} 
                alt="Retired teacher back in classroom working with students" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Overlay gradient for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-transparent md:bg-gradient-to-r md:from-transparent md:to-gray-900/10"></div>
              
              {/* Optional text overlay on image */}
              <div className="absolute bottom-8 left-8 right-8 md:hidden">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900">Your Experience Matters</h3>
                  <p className="text-gray-600 text-sm">Flexible opportunities for retired educators</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducatorsCTA;