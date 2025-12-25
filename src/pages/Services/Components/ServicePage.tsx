import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Shield, 
  TrendingUp, 
  Handshake,
  Leaf,
  Star,
  Calendar,
  Building,
  BookOpen,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Lightbulb,
  Heart,
  Award,
  Clock,
  Briefcase,
  School,
  CheckCircle,
  FileText,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useNavigate } from "react-router-dom";
import schoolsHeroImage from '@/assets/FirstHandHero3.jpg';

const SchoolsPage = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: Users,
      title: 'PreK-12 Educational Staffing',
      description: 'Provide integrated education to your learners with motivated educators.',
      features: ['Certified Teachers', 'Special Education Staff', 'Subject Matter Experts', 'Instructional Support'],
      delay: 0.1
    },
    {
      icon: Clock,
      title: 'Day-To-Day Placements',
      description: 'Never worry about getting a substitute teacher for your staff again.',
      features: ['Immediate Coverage', 'Verified Substitutes', '24/7 Support', 'Easy Scheduling'],
      delay: 0.2
    },
    {
      icon: Calendar,
      title: 'Long-Term Placements',
      description: 'Find long-term contractual applicants who share your business goals.',
      features: ['Contract Teachers', 'Interim Positions', 'Leadership Roles', 'Special Programs'],
      delay: 0.3
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All educators are thoroughly vetted and qualified with background checks'
    },
    {
      icon: Award,
      title: 'Reliable Service',
      description: 'Consistent staffing solutions you can depend on year-round'
    },
    {
      icon: Briefcase,
      title: 'Flexible Placements',
      description: 'From daily substitutes to long-term contracts and leadership roles'
    },
    {
      icon: School,
      title: 'All Grade Levels',
      description: 'Staffing solutions for PreK through 12th grade and special programs'
    },
    {
      icon: CheckCircle,
      title: 'Fast Response',
      description: 'Quick placement turnaround with 24/7 support availability'
    },
    {
      icon: Heart,
      title: 'Education Focused',
      description: 'Specialized in educational staffing with deep industry knowledge'
    }
  ];

  const handleSetAppointment = () => {
    navigate("/education-staffing-contact");
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
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
                <School className="w-4 h-4 text-corporate-red" />
                <span className="text-sm font-semibold text-corporate-red uppercase tracking-wide">
                  FOR SCHOOLS —
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Cover Your School With
                <span className="block bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
                  FirstHand Education
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Quality educational staffing solutions designed to meet the unique needs of schools nationwide.
                Partner with us to provide integrated education to your learners with motivated educators.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button 
                  className="bg-corporate-red hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  Our Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white bg-white/10 font-semibold px-8 py-3 rounded-xl"
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                <Briefcase className="w-4 h-4" />
                OUR SERVICES
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Staffing Solutions
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Tailored educational staffing services designed for modern schools
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-corporate-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                WHY CHOOSE FIRSTHAND
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Excellence in Educational Staffing
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We combine educational expertise with staffing excellence to deliver exceptional results
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-corporate-red to-red-600 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                    <FileText className="w-4 h-4" />
                    GET STARTED
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    Partner With The <span className="text-corporate-red">Best in Education Staffing</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Complete the form to connect with our educational staffing experts. 
                    We'll work with you to understand your school's unique needs and provide 
                    tailored staffing solutions.
                  </p>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Immediate Support</h3>
                      <p className="text-gray-600">Call us anytime at (562) 234-5454</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Quick Response</h3>
                      <p className="text-gray-600">24-48 hour placement turnaround</p>
                    </div>
                  </div>
                </div>

                <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-corporate-red rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Quality Guarantee</h3>
                        <p className="text-sm text-gray-600">90-day satisfaction guarantee on all placements</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-corporate-red mb-2">
                        <FileText className="w-5 h-5" />
                        <span className="font-semibold">REQUIRED INFORMATION</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Request Staffing Solutions</h3>
                    </div>

                    <form className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="school-name" className="text-gray-700 font-medium">
                            SCHOOL NAME *
                          </Label>
                          <Input 
                            id="school-name" 
                            placeholder="Enter school name here"
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="school-website" className="text-gray-700 font-medium">
                            SCHOOL WEBSITE *
                          </Label>
                          <Input 
                            id="school-website" 
                            placeholder="Enter school website here"
                            className="mt-1"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="first-name" className="text-gray-700 font-medium">
                              FIRST NAME *
                            </Label>
                            <Input 
                              id="first-name" 
                              placeholder="Enter first name here"
                              className="mt-1"
                            />
                          </div>

                          <div>
                            <Label htmlFor="last-name" className="text-gray-700 font-medium">
                              LAST NAME *
                            </Label>
                            <Input 
                              id="last-name" 
                              placeholder="Enter last name here"
                              className="mt-1"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="contact-number" className="text-gray-700 font-medium">
                            CONTACT NUMBER *
                          </Label>
                          <Input 
                            id="contact-number" 
                            placeholder="Enter contact number here"
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email" className="text-gray-700 font-medium">
                            EMAIL *
                          </Label>
                          <Input 
                            id="email" 
                            type="email"
                            placeholder="Enter email here"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Checkbox id="consent" />
                          <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                            I consent to the collection, use, storage, and processing of my personal and, where applicable, health-related information, including any data I submit on behalf of others, for the purpose of evaluating or fulfilling my request made through this form. I understand this will be handled in accordance with the Privacy Notice.
                          </Label>
                        </div>

                        <div className="flex items-start gap-3">
                          <Checkbox id="newsletter" />
                          <Label htmlFor="newsletter" className="text-sm text-gray-600">
                            I'm not a robot
                          </Label>
                        </div>
                      </div>

                      <Button className="w-full bg-corporate-red hover:bg-red-600 text-white font-semibold py-3 text-lg">
                        SUBMIT REQUEST
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

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-corporate-red to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your School's Staffing?
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Join hundreds of educational institutions that trust FirstHand Education for their staffing needs.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <Phone className="w-8 h-8 mb-2 text-red-300" />
                    <div className="text-lg font-semibold opacity-90">Call Us</div>
                    <div className="text-sm opacity-90">(562) 234-5454</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-8 h-8 mb-2 text-red-300" />
                    <div className="text-lg font-semibold opacity-90">Visit Us</div>
                    <div className="text-sm opacity-90">6575 West Loop South, Suite 500</div>
                    <div className="text-sm opacity-90">Bellaire, TX 77401</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-8 h-8 mb-2 text-red-300" />
                    <div className="text-lg font-semibold opacity-90">Email Us</div>
                    <div className="text-sm opacity-90">contact@firsthandeducation.com</div>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleSetAppointment}
                className="bg-white text-corporate-red hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolsPage;