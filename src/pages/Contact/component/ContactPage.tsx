import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Users, 
  MessageSquare, 
  Building, 
  Globe, 
  Send, 
  CheckCircle,
  Award,
  Shield,
  HeadphonesIcon,
  ArrowRight,
  Sparkles
} from "lucide-react";

const ContactUs = () => {
  const { scrollY } = useScroll();
  
  // Parallax transformations for hero elements
  const heroBackgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  const titleY = useTransform(scrollY, [0, 300], [0, 50]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const step1X = useTransform(scrollY, [0, 400], [0, -30]);
  const step2X = useTransform(scrollY, [0, 400], [0, 0]);
  const step3X = useTransform(scrollY, [0, 400], [0, 30]);
  const stepOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    inquiryType: "",
    message: "",
    subscribe: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    "General Inquiry",
    "Partnership Opportunities", 
    "School Services",
    "Teacher Recruitment",
    "Substitute Services",
    "Career Opportunities",
    "Media Relations",
    "Technical Support"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        inquiryType: "",
        message: "",
        subscribe: false
      });
    }, 3000);
  };

  return (
    <>
      {/* Hero Section with Parallax - Matching Referrals styling */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 flex items-center justify-center">
        {/* Floating Elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-red-500/20 rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-500/20 rounded-full"
        />
        
        {/* Parallax Background Layers */}
        <motion.div 
          style={{ y: heroBackgroundY }}
          className="absolute inset-0 z-0 opacity-20"
        >
          {/* Layer 1 - Slowest moving (deepest) */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50px 50px, rgba(239, 68, 68, 0.1) 2%, transparent 0%)`,
            backgroundSize: '200px 200px',
            backgroundPosition: '0% 0%'
          }}></div>
          
          {/* Layer 2 - Medium speed */}
          <motion.div 
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 100px 100px, rgba(59, 130, 246, 0.08) 1%, transparent 0%)`,
              backgroundSize: '150px 150px',
              backgroundPosition: '50% 50%'
            }}>
          </motion.div>
          
          {/* Layer 3 - Fastest moving (closest) */}
          <motion.div 
            animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 150px 150px, rgba(255, 255, 255, 0.05) 0.5%, transparent 0%)`,
              backgroundSize: '100px 100px',
              backgroundPosition: '80% 80%'
            }}>
          </motion.div>
        </motion.div>

        {/* Content with Parallax */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
            style={{ y: titleY, opacity: titleOpacity }}
          >
           
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                Contact{" "}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-red-500 inline-block"
              >
                FirstHand
              </motion.span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Connect with our team of education experts. We're here to support your school's staffing needs and answer any questions.
            </p>

            {/* Steps with Parallax Effects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20"
              style={{ opacity: stepOpacity }}
            >
              {/* Step 1 */}
              <motion.div 
                style={{ x: step1X }}
                className="flex flex-col items-center gap-4 text-gray-300 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.3)" }}
                  className="flex items-center justify-center w-14 h-14 bg-white/10 rounded-full border-2 border-white/20 group-hover:border-red-500/50 transition-all duration-300"
                >
                  <span className="font-bold text-white text-xl">1</span>
                </motion.div>
                <span className="text-lg font-medium group-hover:text-red-400 transition-colors">Share Your Details</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="h-1 bg-red-500/50 rounded-full"
                />
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, 5, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-8 h-8 text-gray-500 rotate-90 sm:rotate-0" />
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                style={{ x: step2X }}
                className="flex flex-col items-center gap-4 text-gray-300 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.3)" }}
                  className="flex items-center justify-center w-14 h-14 bg-white/10 rounded-full border-2 border-white/20 group-hover:border-red-500/50 transition-all duration-300"
                >
                  <span className="font-bold text-white text-xl">2</span>
                </motion.div>
                <span className="text-lg font-medium group-hover:text-red-400 transition-colors">Describe Your Needs</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="h-1 bg-red-500/50 rounded-full"
                />
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, 5, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <ArrowRight className="w-8 h-8 text-gray-500 rotate-90 sm:rotate-0" />
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                style={{ x: step3X }}
                className="flex flex-col items-center gap-4 text-gray-300 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.3)" }}
                  className="flex items-center justify-center w-14 h-14 bg-white/10 rounded-full border-2 border-white/20 group-hover:border-red-500/50 transition-all duration-300"
                >
                  <span className="font-bold text-white text-xl">3</span>
                </motion.div>
                <span className="text-lg font-medium group-hover:text-red-400 transition-colors">Get Expert Support</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="h-1 bg-red-500/50 rounded-full"
                />
              </motion.div>
            </motion.div>

            {/* CTA Button with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="#contact-form" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-full shadow-xl shadow-red-900/30 transition-all duration-300"
              >
                Get in Touch
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
              <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>

        {/* Gradient Overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent"></div>
      </section>

      {/* Form Section */}
      <section id="contact-form" className="min-h-screen bg-gray-50 py-12 md:py-24 -mt-32 relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <MessageSquare className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in Touch With Our Team
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Complete the form below and our education experts will respond within 24 business hours.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Phone Support",
                  details: ["+1 (555) 123-4567", "Mon-Fri: 8AM-6PM EST"],
                  color: "bg-red-100"
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email",
                  details: ["info@firsthandeducation.com", "support@firsthandeducation.com"],
                  color: "bg-blue-100"
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Headquarters",
                  details: ["123 Education Plaza", "New York, NY 10001"],
                  color: "bg-green-100"
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Response Time",
                  details: ["Within 24 hours", "Emergency: 2 hours"],
                  color: "bg-purple-100"
                }
              ].map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center`}>
                      <div className="text-gray-700">{info.icon}</div>
                    </div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                  </div>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              ))}
            </div>

            {isSubmitted ? (
              <Card className="border-0 shadow-xl overflow-hidden mb-12">
                <CardContent className="p-12 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Thank you for contacting FirstHand Education. Our team will respond to your inquiry within 24 business hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Send Another Message
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-xl overflow-hidden mb-12">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit}>
                    {/* REQUIRED INFORMATION header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-px flex-1 bg-red-200"></div>
                        <h2 className="text-xl font-bold text-gray-900 whitespace-nowrap">
                          CONTACT INFORMATION
                        </h2>
                        <div className="h-px flex-1 bg-red-200"></div>
                      </div>

                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-3">
                          <Label htmlFor="firstName" className="text-gray-700 font-medium flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            FIRST NAME *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your first name"
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="lastName" className="text-gray-700 font-medium flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            LAST NAME *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your last name"
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            EMAIL ADDRESS *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter email address here"
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            PHONE NUMBER
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter phone number here"
                            className="h-12"
                          />
                        </div>
                      </div>

                      {/* Professional Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-3">
                          <Label htmlFor="company" className="text-gray-700 font-medium flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            SCHOOL/ORGANIZATION *
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter school or organization name"
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="jobTitle" className="text-gray-700 font-medium flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            POSITION/TITLE *
                          </Label>
                          <Input
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your position or title"
                            className="h-12"
                          />
                        </div>
                      </div>

                      {/* Inquiry Details */}
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <Label htmlFor="inquiryType" className="text-gray-700 font-medium flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            TYPE OF INQUIRY *
                          </Label>
                          <select
                            id="inquiryType"
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleInputChange}
                            required
                            className="w-full h-12 px-3 border border-input rounded-md bg-background"
                          >
                            <option value="">Select an inquiry type</option>
                            {inquiryTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="message" className="text-gray-700 font-medium flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            YOUR MESSAGE *
                          </Label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            placeholder="Please provide details about your inquiry, including any specific requirements or timeline..."
                            className="w-full p-3 border border-input rounded-md bg-background resize-none min-h-[150px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Consent Checkbox */}
                    <div className="mb-8 p-6 bg-blue-50 border border-blue-100 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="consent"
                          name="consent"
                          checked={formData.subscribe}
                          onCheckedChange={(checked) => 
                            setFormData(prev => ({ ...prev, subscribe: checked as boolean }))
                          }
                          className="mt-1"
                        />
                        <Label htmlFor="consent" className="text-gray-700 leading-relaxed cursor-pointer">
                          I consent to the collection, use, storage, and processing of my personal and, where applicable, health-related information, for the purpose of evaluating or fulfilling my request made through this form. I understand this will be handled in accordance with the Privacy Notice.
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col items-center gap-6">
                      <div className="w-full h-px bg-gray-200"></div>
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-red-600 hover:bg-red-700 text-white px-12 h-14 text-lg rounded-full shadow-lg shadow-red-900/20"
                      >
                        <Send className="w-5 h-5 mr-3" />
                        SEND MESSAGE
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Footer Note */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                Your inquiry is important to us. We'll respond within 24 business hours to discuss how we can support your educational needs.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Need immediate assistance? Call our emergency line: <span className="text-red-600 font-semibold">+1 (555) 123-4567</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;