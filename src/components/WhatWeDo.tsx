import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, Heart, Zap } from "lucide-react";

import nursingHomesImage from "@/assets/RedNurseAttire.jpg";
import rehabilitationCentersImage from "@/assets/PinkAttire.jpg";
import hospitalsImage from "@/assets/emergency.jpg";

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const navigate = useNavigate();

const facilities = [
  {
    image: nursingHomesImage,
    title: "LPN/LVN",
    description: "Licensed Practical/Vocational Nurses provide hands-on care, assisting with daily activities and monitoring patient health.",
    icon: Heart,
    features: [
      "Basic Medical Care",
      "Vital Signs Monitoring",
      "Medication Administration",
      "Resident Comfort & Support"
    ],
    gradient: "from-blue-500 to-cyan-500",
    buttonLink: "/healthcare-staffing-services/lpn-lvn",
    delay: 0.1
  },
  {
    image: rehabilitationCentersImage,
    title: "Registered Nurses",
    description: "Registered Nurses deliver comprehensive care, coordinate treatment plans, and support recovery in specialized settings.",
    icon: Shield,
    features: [
      "Care Plan Coordination",
      "Rehabilitation Support",
      "Clinical Assessments",
      "Patient Advocacy"
    ],
    gradient: "from-red-500 to-red-500",
    buttonLink: "/healthcare-staffing-services/nurses",
    delay: 0.2
  },
  {
    image: hospitalsImage,
    title: "CNA's",
    description: "Certified Nursing Assistants provide essential support to patients and nurses, ensuring comfort and efficient care delivery.",
    icon: Users,
    features: [
      "Daily Living Assistance",
      "Patient Hygiene",
      "Mobility Support",
      "Vital Signs Collection"
    ],
    gradient: "from-purple-500 to-pink-500",
    buttonLink: "/healthcare-staffing-services/cnas",
    delay: 0.3
  }
];

  const [nursingHomes, rehabilitation, hospitals] = facilities;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    rest: { 
      scale: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: { 
      scale: 1.02,
      y: -8,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const handleViewMore = (serviceLink: string) => {
    navigate(serviceLink);
  };

  const handleViewMoreServices = () => {
    navigate("/healthcare-staffing-services");
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-8 md:py-12 lg:py-18 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-corporate-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-green-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full bg-corporate-red/10 border border-corporate-red/20 mb-4 md:mb-6"
          >
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-corporate-red" />
            <span className="text-xs md:text-sm font-semibold text-corporate-red uppercase tracking-wide">
              WHAT WE DO —
            </span>
          </motion.div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4">
            At FirstHand Healthcare Staffing, we provide staffing solutions for:
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 md:mt-8"
          >
            <Button 
              onClick={handleViewMoreServices}
              size="lg"
              className="bg-gradient-to-r from-corporate-red to-red-600 hover:from-red-700 hover:to-red-800 text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-semibold rounded-full shadow-2xl shadow-red-500/25 transition-all duration-300 hover:scale-105 group"
            >
              <span>View More Services</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Facilities Grid - Mobile: Stacked, Desktop: 1 large left + 2 stacked right */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto"
        >
          {/* Left Large Card - Rehabilitation - Mobile: First, Desktop: Left */}
          <motion.div
            variants={itemVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="group relative lg:row-span-2 order-1 lg:order-1"
          >
            {/* Enhanced Animated Background Gradient */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${rehabilitation.gradient} rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-700`}
            />
            
            {/* Card Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${rehabilitation.gradient} rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
            
            <motion.div
              variants={cardHoverVariants}
              className="relative h-full bg-white/90 backdrop-blur-lg rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl lg:hover:shadow-2xl p-6 md:p-8 overflow-hidden flex flex-col"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)'
              }}
            >
              {/* Image Container - Responsive sizing */}
              <div className="mb-4 md:mb-6 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={rehabilitation.image} 
                  alt={rehabilitation.title}
                  className="w-full h-48 sm:h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Enhanced Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex p-3 rounded-2xl transition-all duration-300"
              >
                <rehabilitation.icon className="w-6 h-6 text-corporate-red" />
              </motion.div>

              {/* Content */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight"
              >
                {rehabilitation.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base"
              >
                {rehabilitation.description}
              </motion.p>

              {/* Enhanced Features List */}
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2 mb-6 md:mb-8"
              >
                {rehabilitation.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + (featureIndex * 0.1) }}
                    className="flex items-center gap-3 text-gray-700 group/feature"
                  >
                    <motion.div 
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${rehabilitation.gradient} shadow-sm`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-sm font-medium group-hover/feature:text-gray-900 transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Centered CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-center mt-auto"
              >
                <Button
                  onClick={() => handleViewMore(rehabilitation.buttonLink)}
                  className={`bg-gradient-to-r ${rehabilitation.gradient} hover:shadow-lg text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full transition-all duration-300 group/btn hover:scale-105 shadow-md text-sm md:text-base`}
                >
                  <span>View More</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </motion.div>

              {/* Enhanced Hover Effect Glow */}
              <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br ${rehabilitation.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              
              {/* Bottom Accent Border */}
              <motion.div 
                className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r ${rehabilitation.gradient} rounded-full -translate-x-1/2 group-hover:w-3/4 transition-all duration-500`}
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Two Stacked Cards - Mobile: Below, Desktop: Right */}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 order-2 lg:order-2">
            {/* Top Right Card - Nursing Homes */}
            <motion.div
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative"
            >
              {/* Enhanced Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${nursingHomes.gradient} rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-700`}
              />
              
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${nursingHomes.gradient} rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
              
              <motion.div
                variants={cardHoverVariants}
                className="relative h-full bg-white/90 backdrop-blur-lg rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl lg:hover:shadow-2xl p-4 md:p-6 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)'
                }}
              >
                {/* Mobile: Stacked, Desktop: Horizontal Layout */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  {/* Text Content */}
                  <div className="flex-1">
                    {/* Enhanced Icon with Gradient Background */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${nursingHomes.gradient} mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <nursingHomes.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </motion.div>

                    {/* Content */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-base sm:text-lg font-bold text-gray-900 mb-2 md:mb-3 leading-tight"
                    >
                      {nursingHomes.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4 leading-relaxed"
                    >
                      {nursingHomes.description}
                    </motion.p>

                    {/* Features List */}
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="space-y-1 mb-3 md:mb-4"
                    >
                      {nursingHomes.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + (featureIndex * 0.1) }}
                          className="flex items-center gap-2 text-gray-700 group/feature"
                        >
                          <motion.div 
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${nursingHomes.gradient} shadow-sm`}
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="text-xs font-medium group-hover/feature:text-gray-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* Image Container */}
                  <div className="w-full sm:w-32 md:w-40 flex-shrink-0 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={nursingHomes.image} 
                      alt={nursingHomes.title}
                      className="w-full h-32 sm:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Centered CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex justify-center mt-3 md:mt-4"
                >
                  <Button
                    onClick={() => handleViewMore(nursingHomes.buttonLink)}
                    className={`bg-gradient-to-r ${nursingHomes.gradient} hover:shadow-lg text-white font-semibold py-2 px-3 md:py-2 md:px-4 rounded-full transition-all duration-300 group/btn hover:scale-105 shadow-md text-xs md:text-sm`}
                  >
                    <span>View More</span>
                    <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </motion.div>

                {/* Enhanced Hover Effect Glow */}
                <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br ${nursingHomes.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                
                {/* Bottom Accent Border */}
                <motion.div 
                  className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r ${nursingHomes.gradient} rounded-full -translate-x-1/2 group-hover:w-3/4 transition-all duration-500`}
                />
              </motion.div>
            </motion.div>

            {/* Bottom Right Card - Hospitals */}
            <motion.div
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative"
            >
              {/* Enhanced Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${hospitals.gradient} rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-700`}
              />
              
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${hospitals.gradient} rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
              
              <motion.div
                variants={cardHoverVariants}
                className="relative h-full bg-white/90 backdrop-blur-lg rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl lg:hover:shadow-2xl p-4 md:p-6 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)'
                }}
              >
                {/* Mobile: Stacked, Desktop: Horizontal Layout */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  {/* Image Container - Mobile: Top, Desktop: Left */}
                  <div className="w-full sm:w-32 md:w-40 flex-shrink-0 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300 order-1 sm:order-1">
                    <img 
                      src={hospitals.image} 
                      alt={hospitals.title}
                      className="w-full h-32 sm:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 order-2 sm:order-2">
                    {/* Enhanced Icon with Gradient Background */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${hospitals.gradient} mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <hospitals.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </motion.div>

                    {/* Content */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-base sm:text-lg font-bold text-gray-900 mb-2 md:mb-3 leading-tight"
                    >
                      {hospitals.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4 leading-relaxed"
                    >
                      {hospitals.description}
                    </motion.p>

                    {/* Features List */}
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="space-y-1 mb-3 md:mb-4"
                    >
                      {hospitals.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + (featureIndex * 0.1) }}
                          className="flex items-center gap-2 text-gray-700 group/feature"
                        >
                          <motion.div 
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${hospitals.gradient} shadow-sm`}
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="text-xs font-medium group-hover/feature:text-gray-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>

                {/* Centered CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex justify-center mt-3 md:mt-4"
                >
                  <Button
                    onClick={() => handleViewMore(hospitals.buttonLink)}
                    className={`bg-gradient-to-r ${hospitals.gradient} hover:shadow-lg text-white font-semibold py-2 px-3 md:py-2 md:px-4 rounded-full transition-all duration-300 group/btn hover:scale-105 shadow-md text-xs md:text-sm`}
                  >
                    <span>View More</span>
                    <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </motion.div>

                {/* Enhanced Hover Effect Glow */}
                <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br ${hospitals.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                
                {/* Bottom Accent Border */}
                <motion.div 
                  className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r ${hospitals.gradient} rounded-full -translate-x-1/2 group-hover:w-3/4 transition-all duration-500`}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;