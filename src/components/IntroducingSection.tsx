import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Target, Shield, Star, Calendar } from "lucide-react";
import healthcareImage from "@/assets/ImageWithText.jpg"; 

const IntroducingSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: "Shared Vision",
      description: "United by the common goal of improving patient quality of life"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Well-trained professionals working effectively together"
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "Reliable staffing solutions you can depend on every time"
    },
    {
      icon: Heart,
      title: "Patient-Focused",
      description: "Dedicated to addressing unique patient needs with care"
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30, scale: 1.1 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
    const handleSetAppointment = () => {
    navigate("/healthcare-staffing-contact");
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-10 lg:py-18 bg-gradient-to-br from-white via-slate-50 to-blue-50/50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-corporate-red/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-corporate-red/10 border border-corporate-red/20"
              >
                <Star className="w-4 h-4 text-corporate-red" />
                <span className="text-sm font-semibold text-corporate-red uppercase tracking-wide">
                  INTRODUCING
                </span>
              </motion.div>

              <motion.h2
                variants={textVariants}
                className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight"
              >
                FirstHand{" "}
                <span className="bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
                  Healthcare
                </span>{" "}
                Staffing
              </motion.h2>
            </motion.div>

            {/* Main Description */}
            <motion.div
              variants={textVariants}
              className="space-y-6"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl lg:text-2xl font-light text-gray-700 leading-relaxed"
              >
                All industries under health care share the same goal:{" "}
                <span className="font-semibold text-gray-900">improving patient quality of life</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                This goal is only achievable with well-trained staff members who are capable of addressing patients' unique needs and working effectively with other caregivers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-r from-corporate-red/5 to-transparent border-l-4 border-corporate-red p-6 rounded-r-2xl"
              >
                <p className="text-lg font-semibold text-gray-800">
                  If you're looking for a staffing agency you can trust, we deliver exceptional services every time.
                </p>
              </motion.div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-4 pt-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  custom={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-corporate-red to-red-600 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-4"
            >
              <Button 
                size="lg"
                onClick={handleSetAppointment}
                className="bg-corporate-red hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Calendar className="w-5 h-5 mr-3" />
                <span>Set an Appointment</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
            className="relative"
          >
            {/* Main Image Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square"
            >
              {/* Actual Healthcare Image with Pinkish Overlay */}
              <div className="relative w-full h-full">
                <img 
                  src={healthcareImage} 
                  alt="FirstHand Healthcare Staffing Team"
                  className="w-full h-full object-cover"
                />
                {/* Pinkish gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-corporate-red/30 mix-blend-soft-light"></div>
                {/* Additional overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

            {/* Content Overlay */}
<div className="absolute inset-0 flex items-center justify-center p-8">
  <div className="relative w-full h-full flex items-center justify-center">

    
    {/* Reddish Accent Elements */}
    <div className="absolute top-10 left-10 w-32 h-32 bg-corporate-red/20 rounded-full blur-2xl"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-600/15 rounded-full blur-2xl"></div>
    
    {/* Content Container with Dark Background */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="relative bg-gradient-to-br from-black/80 via-gray-900/90 to-corporate-red/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl max-w-md mx-auto"
    >
      {/* Red Accent Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-corporate-red/30 to-transparent opacity-50"></div>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="w-20 h-20 bg-gradient-to-br from-corporate-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-red-400/30"
      >
        <Users className="w-10 h-10 text-white" />
      </motion.div>
      
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="text-2xl font-bold mb-3 text-white drop-shadow-lg"
      >
        Healthcare Excellence
      </motion.h3>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-white/90 drop-shadow-lg text-lg font-light"
      >
        Trusted Staffing Solutions
      </motion.p>
      
      {/* Decorative Red Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute -top-2 -right-2 w-6 h-6 bg-corporate-red rounded-full border-2 border-white/20"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white/20"
      ></motion.div>
    </motion.div>
  </div>
</div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-corporate-red" />
                  <span className="text-sm font-semibold text-gray-700">Certified Professionals</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Background Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, rotate: -45 }}
              animate={isInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -45 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-4 -left-4 w-24 h-24 bg-corporate-red/10 rounded-3xl -z-10"
            />
            <motion.div
              initial={{ opacity: 0, rotate: 45 }}
              animate={isInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: 45 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-3xl -z-10"
            />
          </motion.div>
        </div>

        {/* Trust Badge */}
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 0.6, delay: 1 }}
  className="text-center mt-16"
>
  <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/40 shadow-lg">
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {/* Healthcare Professional Profile Images */}
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-red-500 shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="Healthcare professional"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full border-4 border-red-500 shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="Healthcare professional"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-red-500 shadow-lg overflow-hidden">
          <img 
   src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"  
            alt="Healthcare professional"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="text-left">
        <p className="font-semibold text-gray-900">Trusted by 200+ Facilities</p>
        <p className="text-sm text-gray-600">Healthcare partners nationwide</p>
      </div>
    </div>
    <div className="h-8 w-px bg-gray-300"></div>
   <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-sm">4.9/5 Satisfaction Rating</span>
                </div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default IntroducingSection;