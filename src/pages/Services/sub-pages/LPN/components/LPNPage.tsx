import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  CheckCircle, 
  Star,
  Heart,
  Clock,
  Users,
  Award,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import local images from assets
import lpnHero from '@/assets/NurseHero.jpg';
import longtermCare from '@/assets/ICU.jpg';
import rehabilitation from '@/assets/emergency.jpg';
import clinics from '@/assets/medsurgery.jpg';
import homeHealth from '@/assets/pediatricsSpecialty.jpg';

const LPNLVNServicePage = () => {
  const navigate = useNavigate();

  const settings = [
    {
      title: "Long-term Care",
      description: "Skilled nursing facilities and extended care",
      image: longtermCare
    },
    {
      title: "Rehabilitation",
      description: "Therapy and recovery centers",
      image: rehabilitation
    },
    {
      title: "Clinics",
      description: "Outpatient and primary care settings",
      image: clinics
    },
    {
      title: "Home Health",
      description: "In-home patient care services",
      image: homeHealth
    }
  ];

  const handleRequestStaff = () => {
    navigate('/healthcare-staffing-for-employers');
  };

  const handleViewQualifications = () => {
    document.getElementById('qualifications')?.scrollIntoView({ behavior: 'smooth' });
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
                  <Shield className="w-4 h-4 text-corporate-red" />
                  <span className="text-sm font-semibold text-corporate-red uppercase tracking-wide">
                    LPN/LVN SERVICES —
                  </span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Licensed Practical & Vocational
                  <span className="block bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
                    Nurse Staffing
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                  Qualified LPNs and LVNs providing essential nursing care with compassion 
                  and clinical expertise across diverse healthcare settings.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button 
                    onClick={handleRequestStaff}
                    className="bg-corporate-red hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Request LPN/LVN Staff
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    onClick={handleViewQualifications}
                    variant="outline" 
                    className="border-white text-white bg-white/10 font-semibold px-8 py-3 rounded-xl"
                  >
                    View Qualifications
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
                    src={lpnHero}
                    alt="LPN/LVN Nurses"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-corporate-red text-white px-4 py-2 rounded-full font-semibold text-sm">
                      300+ LPNs/LVNs Available
                    </div>
                  </div>
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
                WORK SETTINGS
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                LPN/LVN Work Environments
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our licensed practical and vocational nurses serve in various healthcare environments
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {settings.map((setting, index) => (
              <motion.div
                key={setting.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={setting.image}
                      alt={setting.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{setting.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{setting.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="py-16 lg:py-24 bg-gray-50">
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
                  LPN/LVN Qualifications
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Education & Licensing",
                      items: ["State LPN/LVN License", "Nursing Program Diploma", "CPR/BLS Certification"]
                    },
                    {
                      title: "Clinical Skills",
                      items: ["Medication Administration", "Wound Care", "Vital Signs Monitoring", "Patient Assessment"]
                    },
                    {
                      title: "Professional Attributes",
                      items: ["Compassionate Care", "Strong Communication", "Team Collaboration", "Attention to Detail"]
                    }
                  ].map((category, index) => (
                    <Card key={category.title} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                        <div className="grid gap-3">
                          {category.items.map((item, itemIndex) => (
                            <div key={item} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-corporate-red flex-shrink-0" />
                              <span className="text-gray-700 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
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
                    <div className="text-3xl font-bold mb-2">300+</div>
                    <div className="text-lg font-semibold">LPNs & LVNs</div>
                    <div className="text-sm opacity-90 mt-2">In Our Network</div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-white">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-corporate-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Our LPNs/LVNs?</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        "Experienced in diverse healthcare settings",
                        "Comprehensive background verification",
                        "Ongoing education and training support",
                        "Flexible scheduling options available",
                        "Competitive compensation packages",
                        "Strong team collaboration skills"
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
                Ready to Staff LPNs & LVNs?
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Connect with qualified licensed practical and vocational nurses ready to provide exceptional patient care.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  onClick={handleRequestStaff}
                  className="bg-white text-corporate-red hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Request LPN/LVN Staff
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

export default LPNLVNServicePage;