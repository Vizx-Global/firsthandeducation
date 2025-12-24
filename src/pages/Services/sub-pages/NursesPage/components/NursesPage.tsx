import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  CheckCircle, 
  Star,
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail,
  Heart,
  Zap,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import nursesHero from '@/assets/ServicesHero.jpg';
import icuSpecialty from '@/assets/ICU.jpg';
import emergencySpecialty from '@/assets/emergency.jpg';
import medsurgSpecialty from '@/assets/medsurgery.jpg';
import pediatricsSpecialty from '@/assets/pediatricsSpecialty.jpg';

const NursesServicePage = () => {
  const specialties = [
    {
      title: "ICU & Critical Care",
      description: "Specialized RNs for intensive care units and critical patient needs",
      image: icuSpecialty
    },
    {
      title: "Emergency Department",
      description: "Emergency-trained RNs for fast-paced trauma and urgent care",
      image: emergencySpecialty
    },
    {
      title: "Medical-Surgical",
      description: "Experienced RNs for general medical and surgical units",
      image: medsurgSpecialty
    },
    {
      title: "Pediatrics",
      description: "Compassionate RNs specialized in pediatric patient care",
      image: pediatricsSpecialty
    }
  ];

  const requirements = [
    "Current State RN License",
    "BLS/ACLS Certification",
    "2+ Years Clinical Experience",
    "Specialty Certifications",
    "Excellent Clinical Skills",
    "Strong Communication Abilities"
  ];

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
                  <Users className="w-4 h-4 text-corporate-red" />
                  <span className="text-sm font-semibold text-corporate-red uppercase tracking-wide">
                    NURSING SERVICES —
                  </span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Registered Nurse
                  <span className="block bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
                    Staffing Solutions
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                  Expert RN staffing for all healthcare settings. Our registered nurses deliver 
                  exceptional patient care with the highest standards of clinical excellence.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button className="bg-corporate-red hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                    Request RN Staff
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-white text-white bg-white/10 font-semibold px-8 py-3 rounded-xl">
                    View Available RNs
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
                    src={nursesHero}
                    alt="Registered Nurses"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-corporate-red text-white px-4 py-2 rounded-full font-semibold text-sm">
                      500+ RNs Available
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
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
                NURSING SPECIALTIES
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive RN Staffing
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Specialized registered nurses for every healthcare setting and patient need
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={specialty.image}
                      alt={specialty.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{specialty.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{specialty.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                  RN Requirements & Standards
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our registered nurses meet the highest standards of clinical excellence 
                  and professional competency.
                </p>

                <div className="grid gap-4">
                  {requirements.map((requirement, index) => (
                    <motion.div
                      key={requirement}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                    >
                      <CheckCircle className="w-5 h-5 text-corporate-red flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{requirement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <Card className="border-0 shadow-xl bg-gradient-to-br from-corporate-red to-red-600 text-white">
                  <CardContent className="p-8 text-center">
                    <Users className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-lg font-semibold">Registered Nurses</div>
                    <div className="text-sm opacity-90 mt-2">Ready to Serve</div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-white">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-corporate-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Our RNs?</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        "98% Client Satisfaction Rate",
                        "24-48 Hour Placement",
                        "90-Day Quality Guarantee",
                        "Ongoing Training & Support",
                        "Competitive Compensation",
                        "Comprehensive Benefits"
                      ].map((feature, index) => (
                        <div key={feature} className="flex items-center gap-3 text-gray-700">
                          <Star className="w-4 h-4 text-corporate-red flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
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
                Ready to Staff Registered Nurses?
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Connect with qualified RNs who are ready to provide exceptional patient care in your facility.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  className="bg-white text-corporate-red hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Request RN Staffing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white bg-white/10 font-semibold px-8 py-3 rounded-xl"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Our Team
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NursesServicePage;