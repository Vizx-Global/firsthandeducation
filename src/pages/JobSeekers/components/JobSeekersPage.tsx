import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Shield,
  Clock,
  Users,
  Award,
  FileText,
  UserCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const JobSeekersPage = () => {
  const [formData, setFormData] = useState({
    jobApplyingFor: '',
    firstName: '',
    lastName: '',
    middleInitial: '',
    email: '',
    telephone: '',
    period: '',
    resume: null,
    agreeToTerms: false,
    agreeToMarketing: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Handle success
    }, 2000);
  };

  const benefits = [
    {
      icon: Award,
      title: 'Competitive Compensation',
      description: 'Top-tier pay rates and comprehensive benefits packages'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Choose shifts that work with your lifestyle and commitments'
    },
    {
      icon: Users,
      title: 'Diverse Opportunities',
      description: 'Access to positions across 250+ healthcare facilities'
    },
    {
      icon: Shield,
      title: 'Career Growth',
      description: 'Professional development and advancement opportunities'
    }
  ];

  const steps = [
    { number: 1, title: 'Personal Information', description: 'Basic details and contact info' },
    { number: 2, title: 'Professional Details', description: 'Role preferences and availability' },
    { number: 3, title: 'Document Upload', description: 'Resume and credentials' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-corporate-red/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-corporate-red/20 border border-corporate-red/30 mb-6">
                <UserCheck className="w-4 h-4 text-corporate-red" />
                <span className="text-sm font-semibold text-corporate-red uppercase tracking-wide">
                  CAREER OPPORTUNITIES —
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Launch Your Healthcare
                <span className="block bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
                  Career Journey
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Join 500+ healthcare professionals who trust FirstHand to connect them 
                with exceptional career opportunities across Texas.
              </p>

              <div className="flex items-center justify-center gap-4 text-white/70">
                <div className="flex items-center gap-2">
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
                  <span className="text-sm">Trusted by Healthcare Professionals</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-sm">4.9/5 Satisfaction Rating</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-corporate-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Application Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Progress Steps */}
                  <div className="flex items-center justify-between mb-12">
                    {steps.map((step, index) => (
                      <div key={step.number} className="flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                          currentStep >= step.number 
                            ? 'bg-corporate-red border-corporate-red text-white' 
                            : 'border-gray-300 text-gray-400'
                        } font-semibold`}>
                          {currentStep > step.number ? <CheckCircle className="w-6 h-6" /> : step.number}
                        </div>
                        <div className="ml-4">
                          <p className={`font-semibold ${
                            currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                          }`}>
                            {step.title}
                          </p>
                          <p className="text-sm text-gray-500">{step.description}</p>
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`w-16 h-0.5 mx-8 ${
                            currentStep > step.number ? 'bg-corporate-red' : 'bg-gray-300'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-corporate-red to-red-600 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Application Form</h2>
                        <p className="text-gray-600">Complete your profile to unlock healthcare opportunities</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Step 1: Personal Information */}
                      {currentStep === 1 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-6"
                        >
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              JOB APPLYING FOR *
                            </label>
                            <input
                              type="text"
                              name="jobApplyingFor"
                              value={formData.jobApplyingFor}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300"
                              placeholder="Enter desired position (e.g., Registered Nurse, CNA, LPN)"
                            />
                          </div>

                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                FIRST NAME *
                              </label>
                              <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300"
                                placeholder="Enter first name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                LAST NAME *
                              </label>
                              <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300"
                                placeholder="Enter last name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                MIDDLE INITIAL
                              </label>
                              <input
                                type="text"
                                name="middleInitial"
                                value={formData.middleInitial}
                                onChange={handleChange}
                                maxLength="1"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300"
                                placeholder="MI"
                              />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                EMAIL ADDRESS *
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300"
                                placeholder="your.email@example.com"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                TELEPHONE *
                              </label>
                              <input
                                type="tel"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300"
                                placeholder="(555) 123-4567"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2: Professional Details */}
                      {currentStep === 2 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-6"
                        >
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              AVAILABILITY PERIOD *
                            </label>
                            <select
                              name="period"
                              value={formData.period}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300"
                            >
                              <option value="">Select your availability</option>
                              <option value="full-time">Full Time</option>
                              <option value="part-time">Part Time</option>
                              <option value="per-diem">Per Diem</option>
                              <option value="weekends">Weekends Only</option>
                              <option value="nights">Night Shifts</option>
                              <option value="flexible">Flexible Schedule</option>
                            </select>
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <h4 className="font-semibold text-blue-900 mb-2">Quick Apply Opportunities</h4>
                            <p className="text-blue-700 text-sm">
                              Based on your profile, you might be interested in these immediate openings:
                            </p>
                            <div className="grid grid-cols-2 gap-3 mt-4">
                              {['Emergency RN', 'ICU Nurse', 'Pediatric CNA', 'Surgical Tech'].map((role) => (
                                <button
                                  key={role}
                                  type="button"
                                  className="text-left p-3 bg-white border border-blue-200 rounded-lg hover:border-blue-400 transition-colors"
                                  onClick={() => setFormData(prev => ({ ...prev, jobApplyingFor: role }))}
                                >
                                  <span className="block font-medium text-blue-900">{role}</span>
                                  <span className="text-xs text-blue-600">Immediate Start</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3: Document Upload */}
                      {currentStep === 3 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-6"
                        >
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              UPLOAD RESUME *
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-corporate-red transition-colors duration-300">
                              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                              <p className="text-gray-600 mb-2">
                                Drag and drop your resume here, or{' '}
                                <label htmlFor="resume-upload" className="text-corporate-red font-semibold cursor-pointer">
                                  browse files
                                </label>
                              </p>
                              <p className="text-gray-500 text-sm">PDF, DOC, DOCX up to 10MB</p>
                              <input
                                id="resume-upload"
                                type="file"
                                name="resume"
                                onChange={handleChange}
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-4">
                            <label className="flex items-start gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 text-corporate-red border-gray-300 rounded focus:ring-corporate-red"
                                required
                              />
                              <span className="text-sm text-gray-700">
                                I agree to the Terms of Service and Privacy Policy *
                              </span>
                            </label>
                            
                            <label className="flex items-start gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                name="agreeToMarketing"
                                checked={formData.agreeToMarketing}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 text-corporate-red border-gray-300 rounded focus:ring-corporate-red"
                              />
                              <span className="text-sm text-gray-700">
                                I'd like to receive updates about new job opportunities and career resources
                              </span>
                            </label>
                          </div>
                        </motion.div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex justify-between pt-8 border-t border-gray-200">
                        {currentStep > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setCurrentStep(currentStep - 1)}
                            className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            Previous Step
                          </Button>
                        )}
                        
                        {currentStep < steps.length ? (
                          <Button
                            type="button"
                            onClick={() => setCurrentStep(currentStep + 1)}
                            className="bg-gradient-to-r from-corporate-red to-red-600 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                          >
                            Continue to {steps[currentStep].title}
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-gradient-to-r from-corporate-red to-red-600 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 group disabled:opacity-50"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                Submitting Application...
                              </>
                            ) : (
                              <>
                                Submit Application
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar - Contact Info & Benefits */}
              <div className="space-y-8">
                {/* Contact Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-corporate-red rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">GET IN TOUCH</h3>
                      <p className="text-white/80 text-sm">Contact Details</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-corporate-red mt-1 flex-shrink-0" />
                      <p className="text-white/80 text-sm leading-relaxed">
                        1300 W Sam Houston Parkway S, Suite 100<br />
                        Houston, TX 77042
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-corporate-red flex-shrink-0" />
                      <p className="text-white/80 text-sm">Phone: 281-747-6757</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-corporate-red flex-shrink-0" />
                      <p className="text-white/80 text-sm">Email: info@firsthandhealthcarestaffing.com</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <Button
                      className="w-full bg-corporate-red hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                    >
                          <Phone className="w-4 h-4 mr-2" />
                       <a href="tel:281-747-6757">
                      Call Our Recruiter
                     </a>
                    </Button>
                  </div>
                </motion.div>

                {/* Quick Apply Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                >
                  <h4 className="font-bold text-gray-900 mb-4">Why Apply With FirstHand?</h4>
                  <ul className="space-y-3">
                    {[
                      '24-48 hour application review',
                      'Personalized career matching',
                      'Direct facility connections',
                      'Licensing and credential support',
                      'Ongoing career guidance'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-corporate-red flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobSeekersPage;