import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { ImSpinner2 } from "react-icons/im";
import { ArrowRight, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactMeImage from "@/assets/ContactMe.png";

const ContactMeSection = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "",
    phone: "",
    company: ""
  });
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "", phone: "", company: "" });
      setSuccessPopup(true);
      setLoading(false);
      setTimeout(() => setSuccessPopup(false), 4000);
    }, 1500);
  };
    const handleSetAppointment = () => {
    navigate("/healthcare-staffing-contact");
  };
   const handleApply = () => {
    navigate("/healthcare-staffing-for-job-seekers");
  };

  return (
    <section className="relative py-10 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-corporate-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Popup */}
        {successPopup && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50"
          >
            <AiOutlineCheckCircle className="text-white text-2xl" />
            <span className="font-semibold text-lg">Message sent successfully!</span>
          </motion.div>
        )}

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-corporate-red/10 border border-corporate-red/20 mb-6"
          >
            <HiOutlineMailOpen className="w-4 h-4 text-corporate-red" />
            <span className="text-sm font-semibold text-corporate-red uppercase tracking-wide">
              GET IN TOUCH —
            </span>
          </motion.div>

          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Discuss Your{" "}
            <span className="bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
              Staffing Needs
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Ready to find the perfect healthcare professionals for your team? 
            We're here to help you build your dream staff.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="border border-corporate-red/20 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 p-8">
            {/* Left Column - Content with Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-snug">
                Got staffing <br />
                <span className="bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
                  needs?
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
                We specialize in connecting healthcare facilities with qualified professionals. 
                Let's build your ideal team together.
              </p>

              {/* Contact Image - Exactly as in inspirational code */}
              <img
                src={ContactMeImage}
                alt="Healthcare Staffing Illustration"
                className="w-[250px] sm:w-[300px] lg:w-[350px] mt-4"
              />
            </motion.div>

            {/* Right Column - Contact Form and Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 space-y-8"
            >
              {/* Contact Options Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Recruitment Solutions Card */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-corporate-red to-red-600 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Recruitment Solutions
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    We can help you find professionals for your team.
                  </p>
                  <button    onClick={handleApply}  className="group flex items-center gap-2 text-corporate-red font-semibold hover:text-red-700 transition-colors duration-300 text-sm">
                    <span>Apply Here »</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Consultation Card */}
                <div className="bg-gradient-to-br from-corporate-red to-red-600 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Free Consultations
                  </h3>
                  <p className="text-white/90 mb-4 text-sm leading-relaxed">
                    Let's discuss your staffing needs and how we can help.
                  </p>
                  <button
                  onClick={handleSetAppointment}
                   className="group flex items-center gap-2 font-semibold bg-white text-corporate-red px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 text-sm">
                    <span>Click Here »</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-corporate-red to-red-600 rounded-xl flex items-center justify-center">
                    <HiOutlineMailOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Reach Out to Us</h3>
                    <p className="text-gray-600 text-sm">Send us a message</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message(s) *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300 resize-none"
                      placeholder="Tell us about your staffing needs..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-corporate-red to-red-600 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl group"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <ImSpinner2 className="w-4 h-4 animate-spin" />
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Submit
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;