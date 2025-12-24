import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, Award, ThumbsUp, Users, RefreshCw, CheckCircle2 } from "lucide-react";

const criteria = [
  {
    icon: BookOpen,
    title: "First Hand Knowledge",
    description: "You have first hand knowledge of teaching and instruction in the modern classroom."
  },
  {
    icon: ShieldCheck,
    title: "You Are Confident",
    description: "You bring confidence and authority to the classroom environment."
  },
  {
    icon: Award,
    title: "You Are Skilled",
    description: "You possess the necessary skills to manage and educate effectively."
  },
  {
    icon: ThumbsUp,
    title: "You Are Dependable",
    description: "Schools can rely on you to be there and be prepared."
  },
  {
    icon: Users,
    title: "You Are a Leader",
    description: "You lead by example and guide students towards success."
  },
  {
    icon: RefreshCw,
    title: "You Are Flexible",
    description: "You adapt easily to new environments and changing schedules."
  }
];

const MatchCriteria = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 font-bold tracking-wider uppercase text-sm mb-3 block"
          >
            Why You?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Do You Match Our Criteria?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            We are looking for exceptional educators who embody these core qualities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-gray-200"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatchCriteria;
