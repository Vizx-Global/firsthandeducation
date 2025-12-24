import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Clock, CalendarDays, UserCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "K-12 Staffing",
    description: "Comprehensive staffing solutions for all grade levels, ensuring continuity in education.",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Temporary Placements",
    description: "Quick and reliable coverage for short-term absences, sick leave, or emergencies.",
    icon: Clock,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Long-term Placements",
    description: "Qualified educators for maternity leaves, sabbaticals, or extended vacancies.",
    icon: CalendarDays,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Direct Hire Opportunities",
    description: "Helping schools find permanent talent that fits their culture and long-term goals.",
    icon: UserCheck,
    color: "bg-orange-50 text-orange-600"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-3 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            General Staffing Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We provide tailored staffing solutions to meet the unique needs of educational institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} transition-transform group-hover:scale-110`}>
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center text-red-600 font-medium text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                Learn More <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
