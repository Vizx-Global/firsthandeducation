import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-24 bg-red-600 relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <Quote className="w-16 h-16 text-white mb-8 opacity-80" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif italic font-medium text-white max-w-5xl leading-tight"
        >
          “As an educational staffing agency, we strive to unite quality educators with exemplary PreK-12 schools.”
        </motion.h2>

        <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-white/50 mt-12"
        />
      </div>
    </section>
  );
};

export default Mission;
