import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  MapPin, 
  Clock, 
  DollarSign,
  Award,
  Star,
  Heart,
  GraduationCap,
  Shield,
  Calendar,
  TrendingUp,
  BookOpen,
  Video,
  Phone,
  Mail,
  ExternalLink,
  Filter,
  Search,
  Play,
  ChevronDown,
  Building,
  Stethoscope,
  Zap,
  Globe,
  Coffee
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CareersPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [showVideo, setShowVideo] = useState(false);

  const jobCategories = [
    { id: 'all', name: 'All Roles', count: 47, icon: Users },
    { id: 'nursing', name: 'Nursing', count: 28, icon: Heart },
    { id: 'allied', name: 'Allied Health', count: 12, icon: Stethoscope },
    { id: 'advanced', name: 'Advanced Practice', count: 5, icon: GraduationCap },
    { id: 'leadership', name: 'Leadership', count: 2, icon: TrendingUp }
  ];

  const featuredJobs = [
    {
      id: 1,
      title: 'Registered Nurse - ICU',
      department: 'Critical Care',
      type: 'Full Time',
      location: 'Houston, TX',
      shift: 'Night Shift',
      experience: '2+ years',
      salary: '$75,000 - $95,000',
      urgency: 'high',
      featured: true,
      bonuses: ['$5,000 Signing Bonus', 'Relocation Assistance'],
      requirements: ['TX RN License', 'BLS/ACLS', 'ICU Experience']
    },
    {
      id: 2,
      title: 'Travel Nurse - ER',
      department: 'Emergency',
      type: 'Travel Contract',
      location: 'Multiple Locations',
      shift: 'Rotating',
      experience: '1+ years',
      salary: '$2,800 - $3,200/wk',
      urgency: 'high',
      featured: true,
      bonuses: ['Housing Stipend', 'Travel Reimbursement'],
      requirements: ['Compact License', 'PALS', 'ER Experience']
    },
    {
      id: 3,
      title: 'Physical Therapist',
      department: 'Rehabilitation',
      type: 'Full Time',
      location: 'Dallas, TX',
      shift: 'Day Shift',
      experience: 'New Grads Welcome',
      salary: '$85,000 - $105,000',
      urgency: 'medium',
      featured: true,
      bonuses: ['CEU Allowance', 'Student Loan Assistance'],
      requirements: ['TX PT License', 'DPT Degree']
    }
  ];

  const allJobs = [
    ...featuredJobs,
    {
      id: 4,
      title: 'Medical Assistant',
      department: 'Primary Care',
      type: 'Part Time',
      location: 'Austin, TX',
      shift: 'Day Shift',
      experience: '6+ months',
      salary: '$45,000 - $55,000',
      urgency: 'medium'
    },
    {
      id: 5,
      title: 'Surgical Tech',
      department: 'Operating Room',
      type: 'Full Time',
      location: 'San Antonio, TX',
      shift: 'Day Shift',
      experience: '1+ years',
      salary: '$60,000 - $75,000',
      urgency: 'high'
    },
    {
      id: 6,
      title: 'Nurse Practitioner',
      department: 'Cardiology',
      type: 'Full Time',
      location: 'Houston, TX',
      shift: 'Day Shift',
      experience: '2+ years',
      salary: '$110,000 - $130,000',
      urgency: 'low'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Top-tier pay rates with regular market adjustments'
    },
    {
      icon: Shield,
      title: 'Comprehensive Benefits',
      description: 'Health, dental, vision, and retirement plans'
    },
    {
      icon: BookOpen,
      title: 'Career Development',
      description: 'CEU funding, certification support, and advancement paths'
    },
    {
      icon: Globe,
      title: 'Flexible Scheduling',
      description: 'Choose shifts that fit your lifestyle and goals'
    },
    {
      icon: Award,
      title: 'Recognition Program',
      description: 'Regular bonuses and awards for exceptional care'
    },
    {
      icon: Coffee,
      title: 'Wellness Support',
      description: 'Mental health resources and work-life balance initiatives'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Travel RN',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      quote: 'FirstHand helped me transition from staff nursing to travel nursing seamlessly. The support and opportunities are incredible!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Physical Therapist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      quote: 'The career guidance and continuing education support have been game-changers for my professional growth.',
      rating: 5
    },
    {
      name: 'Jessica Martinez',
      role: 'ICU Nurse',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      quote: 'I found my dream job through FirstHand. The team truly cares about matching you with the right facility.',
      rating: 5
    }
  ];

  const filteredJobs = allJobs.filter(job => {
    const matchesCategory = activeCategory === 'all' || job.department.toLowerCase().includes(activeCategory);
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'all' || job.location.includes(locationFilter);
    
    return matchesCategory && matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-r from-gray-900 to-blue-900 text-white overflow-hidden">
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
                <Zap className="w-4 h-4 text-corporate-red" />
                <span className="text-sm font-semibold text-corporate-red uppercase tracking-wide">
                  JOIN OUR TEAM —
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Launch Your Healthcare
                <span className="block bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
                  Career Journey
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Join hundreds of healthcare professionals who trust FirstHand to connect them 
                with exceptional career opportunities across Texas' top facilities.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button 
                  className="bg-corporate-red hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('job-listings').scrollIntoView({ behavior: 'smooth' })}
                >
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-white/70 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
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
                  <span className="text-sm">500+ Healthcare Professionals</span>
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose FirstHand?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're committed to supporting your career growth with comprehensive benefits 
                and opportunities for professional development.
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
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-corporate-red to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section id="job-listings" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Search and Filter Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex-1 w-full">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Search positions, departments, or keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 py-3 text-lg border-0 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>
                
                <div className="flex gap-4 w-full lg:w-auto">
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger className="w-full lg:w-[200px] bg-gray-50 border-0">
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Houston">Houston, TX</SelectItem>
                      <SelectItem value="Dallas">Dallas, TX</SelectItem>
                      <SelectItem value="Austin">Austin, TX</SelectItem>
                      <SelectItem value="San Antonio">San Antonio, TX</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button className="bg-corporate-red hover:bg-red-600 px-6">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-4 mt-6">
                {jobCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-corporate-red text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <Badge variant="secondary" className={
                      activeCategory === category.id 
                        ? 'bg-white text-corporate-red' 
                        : 'bg-gray-200 text-gray-700'
                    }>
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Featured Jobs */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Opportunities</h3>
              <div className="grid gap-6">
                {featuredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-2 border-corporate-red/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="text-xl font-bold text-gray-900">{job.title}</h4>
                              <Badge className="bg-corporate-red text-white">
                                Featured
                              </Badge>
                              {job.urgency === 'high' && (
                                <Badge variant="outline" className="border-red-200 text-red-700">
                                  Urgent Hire
                                </Badge>
                              )}
                            </div>
                            
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center gap-1">
                                <Building className="w-4 h-4" />
                                {job.department}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.shift}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {job.salary}
                              </div>
                            </div>

                            {/* Bonuses */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {job.bonuses?.map((bonus, i) => (
                                <Badge key={i} variant="secondary" className="bg-green-50 text-green-700">
                                  {bonus}
                                </Badge>
                              ))}
                            </div>

                            {/* Requirements */}
                            <div className="flex flex-wrap gap-2">
                              {job.requirements?.map((req, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {req}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-3">
                            <Button className="bg-corporate-red hover:bg-red-600">
                              Apply Now
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                            <Button variant="outline">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* All Job Listings */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">All Open Positions ({filteredJobs.length})</h3>
              <div className="grid gap-4">
                <AnimatePresence>
                  {filteredJobs.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 border-0">
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-lg font-semibold text-gray-900">{job.title}</h4>
                                {job.urgency === 'high' && (
                                  <Badge variant="outline" className="border-red-200 text-red-700">
                                    Urgent
                                  </Badge>
                                )}
                              </div>
                              
                              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                  <Building className="w-4 h-4" />
                                  {job.department}
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {job.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {job.shift}
                                </div>
                                <div className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4" />
                                  {job.salary}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex gap-3">
                              <Button size="sm" className="bg-corporate-red hover:bg-red-600">
                                Quick Apply
                              </Button>
                              <Button size="sm" variant="outline">
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Hear From Our Team
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover why healthcare professionals choose FirstHand for their career growth.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-corporate-red to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                    
                    <div className="flex text-yellow-400 mb-3">
                      {"★".repeat(testimonial.rating)}
                    </div>
                    
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
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
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Join thousands of healthcare professionals who've found their dream careers with FirstHand. 
                Apply today and take the first step toward your future.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  onClick={() => document.getElementById('job-listings').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-corporate-red hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Browse All Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white bg-white/10 font-semibold px-8 py-3 rounded-xl"
                >
                  <Phone className="w-4 h-4 mr-2" />
                      <a href="tel:281-747-6757">
                       Speak with Recruiter
                      </a>
                  
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-corporate-red mx-auto mb-4" />
                  <p className="text-gray-600">Company Culture Video</p>
                </div>
              </div>
              <Button
                className="mt-4 w-full"
                onClick={() => setShowVideo(false)}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareersPage;