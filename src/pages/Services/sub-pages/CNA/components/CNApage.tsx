import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Heart, 
  CheckCircle, 
  Star,
  Users,
  Clock,
  Shield,
  Award,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import cnaHero from '@/assets/ContactMe.png';
import nursingHomes from '@/assets/education_service.png';
import hospitals from '@/assets/FirstHandHero3.jpg';
import assistedLiving from '@/assets/education_service.png';

const CNAsServicePage = () => {
  const navigate = useNavigate();

  const responsibilities = [
    {
      title: "Patient Hygiene & Care",
      description: "Assisting with bathing, grooming, and personal care",
      icon: Heart
    },
    {
      title: "Vital Signs Monitoring",
      description: "Regular checking of blood pressure, temperature, and pulse",
      icon: Users
    },
    {
      title: "Mobility Assistance",
      description: "Helping patients with movement and transfers",
      icon: Shield
    },
    {
      title: "Daily Living Activities",
      description: "Support with eating, dressing, and other daily tasks",
      icon: Clock
    }
  ];

  const handleRequestStaff = () => {
    navigate('/healthcare-staffing-for-employers');
  };

  const handleLearnAboutTraining = () => {
    navigate('/healthcare-staffing-careers');
  };

  const handleContactTeam = () => {
    navigate('/healthcare-staffing-contact');
  };

  const handleViewAllServices = () => {
    navigate('/healthcare-staffing-services');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      {/* Hero Section - Red/Black Theme */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-corporate-red/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-corporate-red/20 border border-corporate-red/30 mb-6">
                  <Heart className="w-4 h-4 text-corporate-red" />
                  <span className="text-sm font-semibold text-corporate-red uppercase tracking-wide">
                    CNA SERVICES —
                  </span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Certified Nursing
                  <span className="block bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
                    Assistants
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                  Compassionate CNAs providing essential daily patient care with dignity, 
                  respect, and professional expertise.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button 
                    onClick={handleRequestStaff}
                    className="bg-corporate-red hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Request CNA Staff
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    onClick={handleLearnAboutTraining}
                    variant="outline" 
                    className="border-white text-white bg-white/10 font-semibold px-8 py-3 rounded-xl"
                  >
                    Learn About Training
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={cnaHero}
                    alt="Certified Nursing Assistants"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-corporate-red text-white px-4 py-2 rounded-full font-semibold text-sm">
                      400+ CNAs Available
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                <Shield className="w-4 h-4" />
                CNA RESPONSIBILITIES
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Patient Care
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our certified nursing assistants provide essential daily care with compassion and expertise
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {responsibilities.map((responsibility, index) => (
              <motion.div
                key={responsibility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-corporate-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <responsibility.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{responsibility.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{responsibility.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications & Benefits Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                  <CheckCircle className="w-4 h-4" />
                  QUALIFICATIONS
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  CNA Qualifications
                </h2>
                
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      {[
                        "State CNA Certification",
                        "CPR/BLS Certification",
                        "High School Diploma or GED",
                        "Complete Background Check",
                        "Drug Screening Clearance",
                        "Professional References",
                        "Compassionate Demeanor",
                        "Strong Work Ethic"
                      ].map((requirement, index) => (
                        <div key={requirement} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-corporate-red flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                  <Award className="w-4 h-4" />
                  BENEFITS
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our CNAs?
                </h2>
                
                <div className="space-y-6">
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-corporate-red to-red-600 text-white">
                    <CardContent className="p-8 text-center">
                      <Users className="w-12 h-12 mx-auto mb-4" />
                      <div className="text-3xl font-bold mb-2">400+</div>
                      <div className="text-lg font-semibold">Certified CNAs</div>
                      <div className="text-sm opacity-90 mt-2">Ready to Serve</div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-xl bg-white">
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        {[
                          "Compassionate patient care approach",
                          "Reliable and consistently punctual",
                          "Excellent communication abilities",
                          "Adaptable to various healthcare settings",
                          "Continuous training and skill updates",
                          "Strong team collaboration skills"
                        ].map((benefit, index) => (
                          <div key={benefit} className="flex items-center gap-3">
                            <Star className="w-4 h-4 text-corporate-red flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Settings Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                WORK ENVIRONMENTS
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                CNA Work Settings
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our CNAs are experienced in various healthcare environments
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                setting: "Nursing Homes",
                description: "Long-term care facilities and skilled nursing",
                image: nursingHomes
              },
              {
                setting: "Hospitals",
                description: "Acute care and medical-surgical settings",
                image: hospitals
              },
              {
                setting: "Assisted Living",
                description: "Residential care communities",
                image: assistedLiving
              }
            ].map((env, index) => (
              <motion.div
                key={env.setting}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={env.image}
                      alt={env.setting}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{env.setting}</h3>
                    <p className="text-gray-600 text-sm">{env.description}</p>
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
                Ready to Staff Certified Nursing Assistants?
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Connect with compassionate CNAs ready to provide exceptional daily patient care in your facility.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  onClick={handleRequestStaff}
                  className="bg-white text-corporate-red hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Request CNA Staff
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  onClick={handleContactTeam}
                  variant="outline" 
                  className="border-white text-white bg-white/10 font-semibold px-8 py-3 rounded-xl"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Our Team
                </Button>
              </div>
              <div className="mt-6">
                <Button 
                  onClick={handleViewAllServices}
                  variant="link" 
                  className="text-white hover:text-gray-200 font-medium"
                >
                  View All Healthcare Staffing Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CNAsServicePage;