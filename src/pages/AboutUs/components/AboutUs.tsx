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
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from "react-router-dom";
import aboutUsImage from '@/assets/FirstHandHero3.jpg';

const AboutUsPage = () => {
  const navigate = useNavigate();
  
  const coreValues = [
    {
      icon: Users,
      title: 'People First',
      description: 'Students and educators are at the center of everything we do. We prioritize the growth and success of our educational professionals, schools, and communities.'
    },
    {
      icon: TrendingUp,
      title: 'Educational Excellence',
      description: 'We\'re committed to raising educational standards by connecting schools with exceptional educators who drive positive student outcomes.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'We develop cutting-edge staffing strategies and technology solutions that address the unique challenges of the education sector.'
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We believe in building relationships based on transparency, honesty, and mutual respect with schools and educators.'
    },
    {
      icon: Handshake,
      title: 'Partnership Approach',
      description: 'We work collaboratively with educational institutions to understand their specific needs and build long-term staffing solutions.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Impact',
      description: 'We grow by planting roots in communities, committed to long-term educational improvement and community development.'
    }
  ];

  const milestones = [
    { year: '2010', event: 'FirstHand Education Founded', description: 'Established with vision to transform educational staffing' },
    { year: '2013', event: '100+ School Partnerships', description: 'Expanded to serve over 100 educational institutions' },
    { year: '2016', event: 'Quality Certification', description: 'Achieved industry-leading quality standards in educational staffing' },
    { year: '2019', event: 'Digital Platform Launch', description: 'Launched proprietary educational staffing technology platform' },
    { year: '2022', event: '1,000+ Educators Placed', description: 'Successfully placed over 1,000 qualified educators' },
    { year: '2024', event: 'Multi-State Expansion', description: 'Expanded services across Texas and neighboring states' }
  ];

  const handleSetAppointment = () => {
    navigate("/education-staffing-contact");
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
                <BookOpen className="w-4 h-4 text-corporate-red" />
                <span className="text-sm font-semibold text-corporate-red uppercase tracking-wide">
                  OUR STORY —
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Building the Future of
                <span className="block bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
                  Educational Staffing
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                With over 72 years of combined experience, we're revolutionizing educational staffing 
                through innovation, expertise, and an unwavering commitment to student success.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button 
                  className="bg-corporate-red hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('our-mission').scrollIntoView({ behavior: 'smooth' })}
                >
                  Our Mission
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white bg-white/10 font-semibold px-8 py-3 rounded-xl"
                  onClick={() => document.getElementById('who-we-are').scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section with Image */}
      <section id="who-we-are" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Enhanced Image Styling */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={aboutUsImage} 
                    alt="FirstHand Education Staffing Team"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="bg-gradient-to-t from-white/20 to-corporate-red backdrop-blur-sm rounded-xl p-4 border border-white/30">
                      <h3 className="text-lg font-semibold mb-1">72+ Years Combined Experience</h3>
                      <p className="text-sm opacity-90">Education & Staffing Industry Experts</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-corporate-red rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                  <GraduationCap className="w-4 h-4" />
                  WHO WE ARE
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Committed to Quality Educational Staffing
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    <strong>FirstHand Education Staffing</strong> is founded by a diverse team of professionals 
                    with exceptional background experience in both the Education and Staffing industries.
                  </p>
                  <p>
                    Our combined experience of <strong>over 72 years</strong> allows for the innovation, 
                    knowledge, and dedication needed to transform educational staffing.
                  </p>
                  <p>
                    We understand the unique challenges facing schools and educational institutions today, and we've 
                    built our organization from the ground up to address them with precision and care.
                  </p>
                  <p className="text-corporate-red font-semibold">
                    We are committed to providing exceptional educators who inspire and lead.
                  </p>
                </div>

                {/* Feature Indicators */}
                <div className="flex flex-wrap gap-6 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-corporate-red/10 rounded-lg flex items-center justify-center">
                      <Building className="w-5 h-5 text-corporate-red" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">200+ Schools</div>
                      <div className="text-sm text-gray-600">Partner Educational Institutions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-corporate-red/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-corporate-red" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">1,000+ Educators</div>
                      <div className="text-sm text-gray-600">Qualified Teaching Professionals</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="our-mission" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                <Target className="w-4 h-4" />
                OUR MISSION
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Empowering Educational Excellence
              </h2>
              
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 lg:p-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-corporate-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic mb-6">
                    "To connect exceptional educators with inspiring opportunities, fostering student success and building stronger educational communities through quality staffing solutions."
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-corporate-red to-red-600 mx-auto"></div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                CORE VALUES
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The Foundation of Everything We Do
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our values guide every decision, relationship, and innovation at FirstHand Education.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-corporate-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-red/10 text-corporate-red text-sm font-medium mb-4">
                <Calendar className="w-4 h-4" />
                OUR JOURNEY
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Milestones & Achievements
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                From our founding to becoming a trusted educational staffing partner
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-corporate-red to-red-600"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-corporate-red mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-8 h-8 bg-corporate-red rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
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
                    <MapPin className="w-8 h-8 mb-2 text-red-300" />
                    <div className="text-sm opacity-90">1300 W Sam Houston Parkway S</div>
                    <div className="text-sm opacity-90">Houston, TX 77042</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Phone className="w-8 h-8 mb-2 text-red-300" />
                    <div className="text-sm opacity-90">Phone: 281-747-6757</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-8 h-8 mb-2 text-red-300" />
                    <div className="text-sm opacity-90">info@firsthandeducationstaffing.com</div>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleSetAppointment}
                className="bg-white text-corporate-red hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;