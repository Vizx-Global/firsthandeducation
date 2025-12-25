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
  Zap,
  Globe,
  Coffee,
  School,
  Book,
  Brain,
  Music,
  Palette,
  Calculator,
  FlaskRound as Flask,
  Languages,
  History,
  Globe as Earth,
  Briefcase
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
    { id: 'all', name: 'All Education Roles', count: 52, icon: GraduationCap },
    { id: 'teacher', name: 'Classroom Teachers', count: 35, icon: Languages },
    { id: 'substitute', name: 'Substitute Teachers', count: 12, icon: Users },
    { id: 'specialist', name: 'Special Education', count: 8, icon: Heart },
    { id: 'admin', name: 'Administration', count: 5, icon: TrendingUp },
    { id: 'support', name: 'Support Staff', count: 7, icon: Briefcase }
  ];

  const featuredJobs = [
    {
      id: 1,
      title: 'High School Math Teacher',
      department: 'Mathematics',
      type: 'Full Time',
      location: 'Houston, TX',
      gradeLevel: '9-12',
      experience: '2+ years teaching',
      salary: '$55,000 - $70,000',
      urgency: 'high',
      featured: true,
      bonuses: ['$3,000 Signing Bonus', 'Relocation Assistance'],
      requirements: ['Texas Teaching Certificate', 'Math 7-12 Certification', 'Bachelor\'s Degree']
    },
    {
      id: 2,
      title: 'Elementary Substitute Teacher',
      department: 'Elementary Education',
      type: 'Flexible Schedule',
      location: 'Dallas-Fort Worth, TX',
      gradeLevel: 'K-5',
      experience: 'New Grads Welcome',
      salary: '$150 - $200/day',
      urgency: 'high',
      featured: true,
      bonuses: ['Daily Pay Option', 'Flexible Scheduling'],
      requirements: ['Bachelor\'s Degree', 'Teaching Certificate Preferred', 'Background Check']
    },
    {
      id: 3,
      title: 'Special Education Specialist',
      department: 'Special Education',
      type: 'Full Time',
      location: 'Austin, TX',
      gradeLevel: 'K-12',
      experience: '3+ years SPED',
      salary: '$60,000 - $75,000',
      urgency: 'medium',
      featured: true,
      bonuses: ['CEU Allowance', 'Additional Stipend'],
      requirements: ['SPED Certification', 'Texas Teaching Certificate', 'IEP Experience']
    }
  ];

  const allJobs = [
    ...featuredJobs,
    {
      id: 4,
      title: 'Middle School Science Teacher',
      department: 'Science',
      type: 'Full Time',
      location: 'San Antonio, TX',
      gradeLevel: '6-8',
      experience: '1+ years',
      salary: '$52,000 - $68,000',
      urgency: 'medium'
    },
    {
      id: 5,
      title: 'High School English Teacher',
      department: 'English Language Arts',
      type: 'Full Time',
      location: 'Houston, TX',
      gradeLevel: '9-12',
      experience: '2+ years',
      salary: '$54,000 - $69,000',
      urgency: 'low'
    },
    {
      id: 6,
      title: 'School Administrator',
      department: 'Administration',
      type: 'Full Time',
      location: 'Dallas, TX',
      gradeLevel: 'K-12',
      experience: '5+ years leadership',
      salary: '$75,000 - $95,000',
      urgency: 'low'
    },
    {
      id: 7,
      title: 'Substitute Teacher - All Grades',
      department: 'Substitute Teaching',
      type: 'Daily Assignments',
      location: 'Multiple Locations',
      gradeLevel: 'K-12',
      experience: 'Flexible',
      salary: '$140 - $180/day',
      urgency: 'high'
    },
    {
      id: 8,
      title: 'Art Teacher',
      department: 'Fine Arts',
      type: 'Full Time',
      location: 'Austin, TX',
      gradeLevel: '6-12',
      experience: 'New Grads Welcome',
      salary: '$50,000 - $65,000',
      urgency: 'medium'
    }
  ];

  const subjectIcons = {
    'Mathematics': Calculator,
    'Science': Flask,
    'English Language Arts': Book,
    'Special Education': Heart,
    'Elementary Education': School,
    'Administration': TrendingUp,
    'Substitute Teaching': Users,
    'Fine Arts': Palette
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salaries',
      description: 'Market-competitive pay with regular adjustments and performance bonuses'
    },
    {
      icon: Shield,
      title: 'Comprehensive Benefits',
      description: 'Health insurance, retirement plans, and paid time off for all full-time educators'
    },
    {
      icon: BookOpen,
      title: 'Professional Development',
      description: 'CEU funding, certification support, and ongoing training opportunities'
    },
    {
      icon: Globe,
      title: 'Flexible Opportunities',
      description: 'Full-time, part-time, and substitute positions to match your lifestyle'
    },
    {
      icon: Award,
      title: 'Recognition & Growth',
      description: 'Career advancement paths and recognition for exceptional educators'
    },
    {
      icon: Coffee,
      title: 'Supportive Community',
      description: 'Mentorship programs and collaborative teaching environments'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'High School Math Teacher',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
      quote: 'FirstHand helped me find my perfect teaching position. The support during the hiring process was incredible!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Substitute Teacher',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      quote: 'The flexibility and variety of assignments through FirstHand have been perfect for my schedule.',
      rating: 5
    },
    {
      name: 'Jessica Martinez',
      role: 'Special Education Specialist',
       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      quote: 'I found my dream teaching job through FirstHand. They truly understand educators\' needs.',
      rating: 5
    }
  ];

  const filteredJobs = allJobs.filter(job => {
    const matchesCategory = activeCategory === 'all' || 
      (activeCategory === 'teacher' && job.department !== 'Administration' && job.department !== 'Substitute Teaching' && job.department !== 'Support Staff') ||
      (activeCategory === 'substitute' && job.department === 'Substitute Teaching') ||
      (activeCategory === 'specialist' && job.department === 'Special Education') ||
      (activeCategory === 'admin' && job.department === 'Administration') ||
      (activeCategory === 'support' && job.department === 'Support Staff');
    
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.gradeLevel.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = locationFilter === 'all' || job.location.includes(locationFilter);
    
    return matchesCategory && matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-r from-gray-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-6">
                <Zap className="w-4 h-4 text-red-500" />
                <span className="text-sm font-semibold text-red-500 uppercase tracking-wide">
                  TEACHING OPPORTUNITIES —
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Shape Young Minds with
                <span className="block bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  FirstHand Education
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Join hundreds of passionate educators who trust FirstHand to connect them 
                with exceptional teaching opportunities across Texas' top schools.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('job-listings').scrollIntoView({ behavior: 'smooth' })}
                >
                  View Teaching Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-white/70 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-red-500 shadow-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" 
                        alt="Educator"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full border-4 border-red-500 shadow-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                        alt="Educator"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-red-500 shadow-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b786d4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                        alt="Educator"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-sm">500+ Educators Placed</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-sm">4.8/5 Educator Satisfaction</span>
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
                Why Teach With FirstHand?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're committed to supporting educators with comprehensive benefits 
                and opportunities for professional growth in the classroom.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
                      placeholder="Search teaching positions, subjects, or grade levels..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 py-3 text-lg border-0 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>
                
                <div className="flex gap-4 w-full lg:w-auto">
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger className="w-full lg:w-[200px] bg-gray-50 border-0">
                      <SelectValue placeholder="All School Districts" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All School Districts</SelectItem>
                      <SelectItem value="Houston">Houston ISD</SelectItem>
                      <SelectItem value="Dallas">Dallas ISD</SelectItem>
                      <SelectItem value="Austin">Austin ISD</SelectItem>
                      <SelectItem value="San Antonio">San Antonio ISD</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button className="bg-red-600 hover:bg-red-700 px-6">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-4 mt-6">
                {jobCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-red-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.name}</span>
                      <Badge variant="secondary" className={
                        activeCategory === category.id 
                          ? 'bg-white text-red-600' 
                          : 'bg-gray-200 text-gray-700'
                      }>
                        {category.count}
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Featured Jobs */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Teaching Opportunities</h3>
              <div className="grid gap-6">
                {featuredJobs.map((job, index) => {
                  const SubjectIcon = subjectIcons[job.department] || School;
                  return (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="border-2 border-red-600/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                  <SubjectIcon className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                  <h4 className="text-xl font-bold text-gray-900">{job.title}</h4>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Badge className="bg-red-600 text-white">
                                      Featured
                                    </Badge>
                                    {job.urgency === 'high' && (
                                      <Badge variant="outline" className="border-red-200 text-red-700">
                                        Urgent Hire
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                                <div className="flex items-center gap-1">
                                  <School className="w-4 h-4" />
                                  {job.department}
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {job.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <GraduationCap className="w-4 h-4" />
                                  {job.gradeLevel}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {job.type}
                                </div>
                                <div className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4" />
                                  {job.salary}
                                </div>
                              </div>

                              {/* Bonuses */}
                              {job.bonuses && (
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {job.bonuses.map((bonus, i) => (
                                    <Badge key={i} variant="secondary" className="bg-green-50 text-green-700">
                                      {bonus}
                                    </Badge>
                                  ))}
                                </div>
                              )}

                              {/* Requirements */}
                              {job.requirements && (
                                <div className="flex flex-wrap gap-2">
                                  {job.requirements.map((req, i) => (
                                    <Badge key={i} variant="outline" className="text-xs">
                                      {req}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            <div className="flex flex-col gap-3">
                              <Button className="bg-red-600 hover:bg-red-700">
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
                  );
                })}
              </div>
            </div>

            {/* All Job Listings */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">All Open Teaching Positions ({filteredJobs.length})</h3>
              <div className="grid gap-4">
                <AnimatePresence>
                  {filteredJobs.map((job, index) => {
                    const SubjectIcon = subjectIcons[job.department] || School;
                    return (
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
                                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                    <SubjectIcon className="w-4 h-4 text-red-600" />
                                  </div>
                                  <div>
                                    <h4 className="text-lg font-semibold text-gray-900">{job.title}</h4>
                                    <div className="flex items-center gap-2">
                                      {job.urgency === 'high' && (
                                        <Badge variant="outline" className="border-red-200 text-red-700">
                                          Urgent
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                  <div className="flex items-center gap-1">
                                    <School className="w-4 h-4" />
                                    {job.department}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {job.location}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <GraduationCap className="w-4 h-4" />
                                    {job.gradeLevel}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <DollarSign className="w-4 h-4" />
                                    {job.salary}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex gap-3">
                                <Button size="sm" className="bg-red-600 hover:bg-red-700">
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
                    );
                  })}
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
                Hear From Our Educators
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover why passionate teachers choose FirstHand for their career in education.
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
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold">
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Inspire the Next Generation?
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Join hundreds of dedicated educators who've found their perfect teaching positions with FirstHand. 
                Apply today and take the first step toward your future in education.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  onClick={() => document.getElementById('job-listings').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Browse All Teaching Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white bg-white/10 font-semibold px-8 py-3 rounded-xl"
                  onClick={() => window.open("tel:+12817476757", "_self")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Speak with Recruiter
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;