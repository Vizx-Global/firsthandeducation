import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Shield, 
  Clock, 
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Heart,
  Stethoscope,
  Calendar,
  TrendingUp,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from "react-router-dom";

const MedicalStaffingPage = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Users,
      title: 'Registered Nurses',
      description: 'Skilled RNs across all specialties including ICU, ER, OR, and Med-Surg',
      features: ['Critical Care', 'Emergency', 'Pediatrics', 'Oncology']
    },
    {
      icon: Stethoscope,
      title: 'Allied Health Professionals',
      description: 'Therapists, technologists, and support staff for comprehensive care',
      features: ['Radiology Techs', 'Physical Therapists', 'Respiratory Therapists', 'Lab Technicians']
    },
    {
      icon: Heart,
      title: 'Certified Nursing Assistants',
      description: 'Compassionate CNAs providing essential patient care and support',
      features: ['Daily Living Activities', 'Mobility Assistance',  'Patience Care', 'Vital Signs',]
    },
    {
      icon: FileText,
      title: 'Advanced Practice Providers',
      description: 'NPs and PAs to enhance your provider team and expand services',
      features: ['Nurse Practitioners', 'Physician Assistants', 'Specialty Care', 'Primary Care']
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Fully Vetted Professionals',
      description: 'Comprehensive background checks, license verification, and reference validation'
    },
    {
      icon: Clock,
      title: 'Rapid Placement',
      description: '24-48 hour staffing solutions to meet urgent healthcare needs'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '90-day satisfaction guarantee on all placed healthcare professionals'
    },
    {
      icon: TrendingUp,
      title: 'Cost-Effective Solutions',
      description: 'Optimized staffing models that reduce overtime and agency costs'
    }
  ];
  const processSteps = [
    {
      step: '01',
      title: 'Needs Assessment',
      description: 'We conduct a thorough analysis of your staffing requirements and challenges'
    },
    {
      step: '02',
      title: 'Customized Plan',
      description: 'Develop a tailored staffing solution that aligns with your organizational goals'
    },
    {
      step: '03',
      title: 'Candidate Matching',
      description: 'Leverage our extensive network to find the perfect fit for your team'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Continuous partnership to ensure staffing success and address evolving needs'
    }
  ];

    const handleSetAppointment = () => {
    navigate("/healthcare-staffing-contact");
  };

    const handleApply = () => {
    navigate("/healthcare-staffing-for-job-seekers");
  };

    const handleViewCareers = () => {
    navigate("/healthcare-staffing-careers");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-gray-900 to-blue-900 text-white overflow-hidden">
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
                <Users className="w-4 h-4 text-corporate-red" />
                <span className="text-sm font-semibold text-corporate-red uppercase tracking-wide">
                  HEALTHCARE SOLUTIONS —
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Exceptional Medical
                <span className="block bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
                  Staffing Solutions
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Partner with Texas' premier healthcare staffing provider to build your ideal medical team with qualified, compassionate professionals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button 
                 onClick={handleViewCareers}
                  className="bg-corporate-red hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  View Open Careers
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  onClick={handleSetAppointment}
                  variant="outline" 
                  className="border-white text-white bg-white/10 font-semibold px-8 py-3 rounded-xl"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Speak with Consultant
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-white/70 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-corporate-red" />
                  <span className="text-sm">Fully Licensed & Certified</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-corporate-red" />
                  <span className="text-sm">Comprehensive Background Checks</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-corporate-red" />
                  <span className="text-sm">24/7 Staffing Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
{/* Services Section */}
<section className="py-16 lg:py-24 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Comprehensive Staffing Services
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          We provide specialized healthcare professionals across all departments and specialties, 
          ensuring your facility has the right talent at the right time.
        </p>
      </motion.div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex flex-col">
            <CardContent className="p-6 flex flex-col flex-1">
              {/* Icon Section */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-corporate-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              
              {/* Features Section - Uniform Height */}
              <div className="mt-auto">
                <div className="border-t border-gray-200 pt-4">
                  <ul className="space-y-3 min-h-[120px] flex flex-col justify-center">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center gap-3 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-corporate-red flex-shrink-0" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose FirstHand Healthcare Staffing?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're committed to delivering staffing solutions that exceed expectations and drive positive outcomes for your facility.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-corporate-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Staffing Process
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A streamlined approach to ensure we understand your unique needs and deliver exceptional staffing solutions.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 -z-10" />
                )}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-corporate-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-corporate-red to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Healthcare Staffing?
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Join 500+ healthcare facilities across Texas that trust FirstHand for their staffing needs. 
                Let's build your ideal team together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  onClick={handleApply}
                  className="bg-white text-corporate-red hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Apply Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  onClick={handleSetAppointment}
                  variant="outline" 
                  className="border-white text-white bg-white/10 font-semibold px-8 py-3 rounded-xl"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Have questions about our medical staffing services? Our team is here to help you find the perfect staffing solutions for your healthcare facility.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Visit Our Office</h3>
                      <p className="text-gray-600">
                        1300 W Sam Houston Parkway S, Suite 100<br />
                        Houston, TX 77042
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                      <p className="text-gray-600">Phone: 281-747-6757</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600">info@firsthandhealthcarestaffing.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Facility Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300"
                          placeholder="Enter your facility name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Staffing Needs
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-red/50 focus:border-corporate-red transition-all duration-300"
                          placeholder="Describe your staffing requirements..."
                        />
                      </div>

                      <Button className="w-full bg-corporate-red hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all duration-300">
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalStaffingPage;