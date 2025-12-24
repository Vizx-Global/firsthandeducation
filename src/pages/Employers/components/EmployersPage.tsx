import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Building, 
  MapPin, 
  DollarSign, 
  Clock, 
  Users, 
  FileText,
  CheckCircle2,
  Eye,
  Share2,
  Download,
  Calendar,
  Briefcase,
  GraduationCap,
  Star,
  Mail,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const JobPostingModule = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [activeTab, setActiveTab] = useState("details");
  const [previewMode, setPreviewMode] = useState(false);

  const [jobData, setJobData] = useState({

    jobTitle: "",
    department: "",
    specialty: "",
    employmentType: "",
    workSetting: "",
    
    locations: [""],
    shiftType: "",
    schedule: "",
    startDate: "",
    
    experienceLevel: "",
    educationLevel: "",
    certifications: [""],
    skills: [""],
    licenseRequirements: "",

    salaryRange: { min: "", max: "" },
    salaryType: "",
    benefits: [],
    bonusPotential: "",

    jobSummary: "",
    responsibilities: [""],
    qualifications: [""],
 
    applicationDeadline: "",
    hiringTimeline: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: ""
  });

  const steps = [
    { id: 1, title: "Basic Info", description: "Job overview" },
    { id: 2, title: "Location & Schedule", description: "Work details" },
    { id: 3, title: "Requirements", description: "Qualifications" },
    { id: 4, title: "Compensation", description: "Pay & benefits" },
    { id: 5, title: "Description", description: "Role details" },
    { id: 6, title: "Application", description: "Process & contact" }
  ];

  const addItem = (field) => {
    setJobData(prev => ({
      ...prev,
      [field]: [...prev[field], ""]
    }));
  };

  const removeItem = (field, index) => {
    setJobData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const updateItem = (field, index, value) => {
    setJobData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    console.log("Job posting submitted:", jobData);
  };
  const handleSetAppointment = () => {
    navigate("/healthcare-staffing-contact");
  };

  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
                <Briefcase className="w-4 h-4 text-corporate-red" />
                <span className="text-sm font-semibold text-corporate-red uppercase tracking-wide">
                  EMPLOYER SOLUTIONS —
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Find Exceptional
                <span className="block bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
                  Healthcare Talent
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Connect with qualified healthcare professionals and build your dream team with FirstHand's comprehensive staffing platform.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button 
                  className="bg-corporate-red hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Posting Jobs
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
                  <Users className="w-5 h-5 text-corporate-red" />
                  <span className="text-sm">500+ Healthcare Professionals</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-corporate-red" />
                  <span className="text-sm">250+ Partner Facilities</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-corporate-red" />
                  <span className="text-sm">95% Success Rate</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="main-content" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="bg-white shadow-sm border-b rounded-t-lg mb-8">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => navigate(-1)}
                    className="text-gray-600 hover:text-black/90"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                  </Button>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Create Job Posting</h1>
                    <p className="text-sm text-gray-600">Attract top healthcare talent</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => setPreviewMode(!previewMode)}
                    className="flex items-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{previewMode ? 'Edit' : 'Preview'}</span>
                  </Button>
                  <Button className="bg-corporate-red hover:bg-red-600">
                    Save Draft
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex justify-between mb-2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`text-sm font-medium ${
                    step.id <= currentStep ? 'text-corporate-red' : 'text-gray-400'
                  }`}
                >
                  {step.title}
                </div>
              ))}
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Steps Navigation */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="text-lg">Posting Steps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {steps.map((step) => (
                    <button
                      key={step.id}
                      onClick={() => setCurrentStep(step.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        step.id === currentStep
                          ? 'bg-corporate-red text-white shadow-md'
                          : step.id < currentStep
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {step.id < currentStep ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <div className={`w-5 h-5 rounded-full border-2 ${
                            step.id === currentStep ? 'border-white' : 'border-gray-400'
                          }`} />
                        )}
                        <div>
                          <div className="font-medium">Step {step.id}</div>
                          <div className="text-sm">{step.title}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="shadow-xl border-0">
                    <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                      <CardTitle className="text-2xl flex items-center space-x-2">
                        <Briefcase className="w-6 h-6" />
                        <span>{steps[currentStep - 1]?.title}</span>
                      </CardTitle>
                      <CardDescription className="text-blue-100">
                        {steps[currentStep - 1]?.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      {previewMode ? (
                        <JobPreview jobData={jobData} />
                      ) : (
                        <JobForm 
                          currentStep={currentStep}
                          jobData={jobData}
                          setJobData={setJobData}
                          addItem={addItem}
                          removeItem={removeItem}
                          updateItem={updateItem}
                        />
                      )}
                      
                      {/* Navigation Buttons */}
                      <div className="flex justify-between pt-6 mt-6 border-t">
                        <Button
                          variant="outline"
                          onClick={handleBack}
                          disabled={currentStep === 1}
                        >
                          Back
                        </Button>
                        
                        <div className="space-x-3">
                          <Button variant="outline">
                            Save as Draft
                          </Button>
                          {currentStep < steps.length ? (
                            <Button 
                              onClick={handleNext}
                              className="bg-corporate-red hover:bg-red-600"
                            >
                              Continue to {steps[currentStep]?.title}
                            </Button>
                          ) : (
                            <Button 
                              onClick={handleSubmit}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Publish Job Posting
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Stats */}
                  {currentStep === 6 && !previewMode && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
                    >
                      <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-0">
                        <CardContent className="p-4 text-center">
                          <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-green-700">24-48h</div>
                          <div className="text-sm text-green-600">Avg. First Applicants</div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-gradient-to-br from-blue-50 to-cyan-100 border-0">
                        <CardContent className="p-4 text-center">
                          <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-blue-700">85%</div>
                          <div className="text-sm text-blue-600">Quality Match Rate</div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-0">
                        <CardContent className="p-4 text-center">
                          <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-purple-700">72h</div>
                          <div className="text-sm text-purple-600">Avg. Time to Hire</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Job Form Component
const JobForm = ({ currentStep, jobData, setJobData, addItem, removeItem, updateItem }) => {
  switch (currentStep) {
    case 1:
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title *
              </label>
              <Input
                value={jobData.jobTitle}
                onChange={(e) => setJobData({...jobData, jobTitle: e.target.value})}
                placeholder="e.g., Registered Nurse, Medical Assistant"
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department *
              </label>
              <Select value={jobData.department} onValueChange={(value) => setJobData({...jobData, department: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="emergency">Emergency Department</SelectItem>
                  <SelectItem value="surgery">Surgery</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="oncology">Oncology</SelectItem>
                  <SelectItem value="icu">Intensive Care Unit</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialty *
              </label>
              <Select value={jobData.specialty} onValueChange={(value) => setJobData({...jobData, specialty: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="critical-care">Critical Care</SelectItem>
                  <SelectItem value="trauma">Trauma</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="psychiatry">Psychiatry</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employment Type *
              </label>
              <Select value={jobData.employmentType} onValueChange={(value) => setJobData({...jobData, employmentType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full Time</SelectItem>
                  <SelectItem value="part-time">Part Time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="per-diem">Per Diem</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Work Setting *
            </label>
            <Select value={jobData.workSetting} onValueChange={(value) => setJobData({...jobData, workSetting: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select work setting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hospital">Hospital</SelectItem>
                <SelectItem value="clinic">Clinic</SelectItem>
                <SelectItem value="nursing-home">Nursing Home</SelectItem>
                <SelectItem value="home-health">Home Health</SelectItem>
                <SelectItem value="telehealth">Telehealth</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      );
    
    case 2:
      return (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Work Locations *
            </label>
            <div className="space-y-3">
              {jobData.locations.map((location, index) => (
                <div key={index} className="flex space-x-2">
                  <Input
                    value={location}
                    onChange={(e) => updateItem('locations', index, e.target.value)}
                    placeholder="Enter facility address"
                    className="flex-1"
                  />
                  {jobData.locations.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeItem('locations', index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => addItem('locations')}
                className="flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Another Location</span>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shift Type *
              </label>
              <Select value={jobData.shiftType} onValueChange={(value) => setJobData({...jobData, shiftType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select shift type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Day Shift</SelectItem>
                  <SelectItem value="night">Night Shift</SelectItem>
                  <SelectItem value="evening">Evening Shift</SelectItem>
                  <SelectItem value="rotating">Rotating Shifts</SelectItem>
                  <SelectItem value="weekends">Weekends Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Schedule *
              </label>
              <Select value={jobData.schedule} onValueChange={(value) => setJobData({...jobData, schedule: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select schedule" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8-5">8:00 AM - 5:00 PM</SelectItem>
                  <SelectItem value="7-7">7:00 AM - 7:00 PM</SelectItem>
                  <SelectItem value="7p-7a">7:00 PM - 7:00 AM</SelectItem>
                  <SelectItem value="10-6">10:00 AM - 6:00 PM</SelectItem>
                  <SelectItem value="flexible">Flexible Schedule</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Start Date *
              </label>
              <Input
                type="date"
                value={jobData.startDate}
                onChange={(e) => setJobData({...jobData, startDate: e.target.value})}
                className="w-full"
              />
            </div>
          </div>
        </div>
      );
    
    case 3:
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience Level *
              </label>
              <Select value={jobData.experienceLevel} onValueChange={(value) => setJobData({...jobData, experienceLevel: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                  <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                  <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                  <SelectItem value="leadership">Leadership (8+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Education Level *
              </label>
              <Select value={jobData.educationLevel} onValueChange={(value) => setJobData({...jobData, educationLevel: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select education level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">High School Diploma</SelectItem>
                  <SelectItem value="associate">Associate Degree</SelectItem>
                  <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                  <SelectItem value="master">Master's Degree</SelectItem>
                  <SelectItem value="doctorate">Doctorate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Certifications
            </label>
            <div className="space-y-3">
              {jobData.certifications.map((cert, index) => (
                <div key={index} className="flex space-x-2">
                  <Input
                    value={cert}
                    onChange={(e) => updateItem('certifications', index, e.target.value)}
                    placeholder="e.g., BLS, ACLS, PALS"
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem('certifications', index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => addItem('certifications')}
                className="flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Certification</span>
              </Button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Skills
            </label>
            <div className="space-y-3">
              {jobData.skills.map((skill, index) => (
                <div key={index} className="flex space-x-2">
                  <Input
                    value={skill}
                    onChange={(e) => updateItem('skills', index, e.target.value)}
                    placeholder="e.g., EMR proficiency, IV certification"
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem('skills', index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => addItem('skills')}
                className="flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Skill</span>
              </Button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              License Requirements *
            </label>
            <Select value={jobData.licenseRequirements} onValueChange={(value) => setJobData({...jobData, licenseRequirements: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select license requirement" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rn-license">RN License</SelectItem>
                <SelectItem value="lpn-license">LPN License</SelectItem>
                <SelectItem value="cna-certification">CNA Certification</SelectItem>
                <SelectItem value="md-license">Medical Doctor License</SelectItem>
                <SelectItem value="pa-certification">Physician Assistant Certification</SelectItem>
                <SelectItem value="none">No License Required</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      );
    
    case 4:
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Salary *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  type="number"
                  value={jobData.salaryRange.min}
                  onChange={(e) => setJobData({
                    ...jobData, 
                    salaryRange: {...jobData.salaryRange, min: e.target.value}
                  })}
                  placeholder="0"
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Salary *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  type="number"
                  value={jobData.salaryRange.max}
                  onChange={(e) => setJobData({
                    ...jobData, 
                    salaryRange: {...jobData.salaryRange, max: e.target.value}
                  })}
                  placeholder="0"
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salary Type *
              </label>
              <Select value={jobData.salaryType} onValueChange={(value) => setJobData({...jobData, salaryType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Per Hour</SelectItem>
                  <SelectItem value="weekly">Per Week</SelectItem>
                  <SelectItem value="monthly">Per Month</SelectItem>
                  <SelectItem value="yearly">Per Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bonus Potential
            </label>
            <Input
              value={jobData.bonusPotential}
              onChange={(e) => setJobData({...jobData, bonusPotential: e.target.value})}
              placeholder="e.g., $5,000 signing bonus, performance bonuses"
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Benefits Package
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Health Insurance",
                "Dental Insurance",
                "Vision Insurance",
                "Retirement Plan",
                "Paid Time Off",
                "Continuing Education",
                "Flexible Spending Account",
                "Life Insurance",
                "Disability Insurance"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={benefit}
                    checked={jobData.benefits.includes(benefit)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setJobData({
                          ...jobData,
                          benefits: [...jobData.benefits, benefit]
                        });
                      } else {
                        setJobData({
                          ...jobData,
                          benefits: jobData.benefits.filter(b => b !== benefit)
                        });
                      }
                    }}
                    className="rounded border-gray-300 text-corporate-red focus:ring-corporate-red"
                  />
                  <label htmlFor={benefit} className="text-sm text-gray-700">
                    {benefit}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    
    case 5:
      return (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Summary *
            </label>
            <Textarea
              value={jobData.jobSummary}
              onChange={(e) => setJobData({...jobData, jobSummary: e.target.value})}
              placeholder="Provide a compelling overview of the role and your organization..."
              rows={4}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Key Responsibilities *
            </label>
            <div className="space-y-3">
              {jobData.responsibilities.map((responsibility, index) => (
                <div key={index} className="flex space-x-2">
                  <Input
                    value={responsibility}
                    onChange={(e) => updateItem('responsibilities', index, e.target.value)}
                    placeholder="Describe a key responsibility..."
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem('responsibilities', index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => addItem('responsibilities')}
                className="flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Responsibility</span>
              </Button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Qualifications *
            </label>
            <div className="space-y-3">
              {jobData.qualifications.map((qualification, index) => (
                <div key={index} className="flex space-x-2">
                  <Input
                    value={qualification}
                    onChange={(e) => updateItem('qualifications', index, e.target.value)}
                    placeholder="List a required qualification..."
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem('qualifications', index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => addItem('qualifications')}
                className="flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Qualification</span>
              </Button>
            </div>
          </div>
        </div>
      );
    
    case 6:
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Application Deadline *
              </label>
              <Input
                type="date"
                value={jobData.applicationDeadline}
                onChange={(e) => setJobData({...jobData, applicationDeadline: e.target.value})}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Hiring Timeline *
              </label>
              <Select value={jobData.hiringTimeline} onValueChange={(value) => setJobData({...jobData, hiringTimeline: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                  <SelectItem value="2-4-weeks">2-4 Weeks</SelectItem>
                  <SelectItem value="1-2-months">1-2 Months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Person *
              </label>
              <Input
                value={jobData.contactPerson}
                onChange={(e) => setJobData({...jobData, contactPerson: e.target.value})}
                placeholder="Full name"
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Email *
              </label>
              <Input
                type="email"
                value={jobData.contactEmail}
                onChange={(e) => setJobData({...jobData, contactEmail: e.target.value})}
                placeholder="email@company.com"
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Phone *
              </label>
              <Input
                type="tel"
                value={jobData.contactPhone}
                onChange={(e) => setJobData({...jobData, contactPhone: e.target.value})}
                placeholder="(555) 123-4567"
                className="w-full"
              />
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Ready to Post?</h4>
            <p className="text-sm text-blue-600">
              Your job will be immediately visible to our network of qualified healthcare professionals. 
              You can manage applications, track candidates, and edit the posting anytime from your employer dashboard.
            </p>
          </div>
        </div>
      );
    
    default:
      return null;
  }
};

// Job Preview Component
const JobPreview = ({ jobData }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{jobData.jobTitle || "Job Title"}</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              <Building className="w-3 h-3 mr-1" />
              {jobData.department || "Department"}
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              <Briefcase className="w-3 h-3 mr-1" />
              {jobData.employmentType || "Employment Type"}
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700">
              <MapPin className="w-3 h-3 mr-1" />
              {jobData.workSetting || "Work Setting"}
            </Badge>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4 mr-1" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-1" />
            Export
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y">
        <div className="text-center">
          <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-1" />
          <div className="text-sm font-medium text-gray-900">
            ${jobData.salaryRange.min || "0"} - ${jobData.salaryRange.max || "0"}
          </div>
          <div className="text-xs text-gray-500">{jobData.salaryType || "Per Year"}</div>
        </div>
        
        <div className="text-center">
          <MapPin className="w-6 h-6 text-red-600 mx-auto mb-1" />
          <div className="text-sm font-medium text-gray-900">{jobData.locations.length} Locations</div>
          <div className="text-xs text-gray-500">Multiple Facilities</div>
        </div>
        
        <div className="text-center">
          <Clock className="w-6 h-6 text-blue-600 mx-auto mb-1" />
          <div className="text-sm font-medium text-gray-900">{jobData.shiftType || "Shift"}</div>
          <div className="text-xs text-gray-500">{jobData.schedule || "Schedule"}</div>
        </div>
        
        <div className="text-center">
          <Calendar className="w-6 h-6 text-purple-600 mx-auto mb-1" />
          <div className="text-sm font-medium text-gray-900">
            {jobData.startDate ? new Date(jobData.startDate).toLocaleDateString() : "ASAP"}
          </div>
          <div className="text-xs text-gray-500">Start Date</div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Job Summary</h3>
        <p className="text-gray-700 whitespace-pre-wrap">
          {jobData.jobSummary || "Job summary will appear here..."}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities</h3>
          <ul className="space-y-2">
            {jobData.responsibilities.map((resp, index) => (
              resp && (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{resp}</span>
                </li>
              )
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Qualifications</h3>
          <ul className="space-y-2">
            {jobData.qualifications.map((qual, index) => (
              qual && (
                <li key={index} className="flex items-start">
                  <GraduationCap className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{qual}</span>
                </li>
              )
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Application Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-medium text-gray-500">Contact Person</div>
            <div className="text-gray-900">{jobData.contactPerson || "Not specified"}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Contact Email</div>
            <div className="text-gray-900">{jobData.contactEmail || "Not specified"}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Application Deadline</div>
            <div className="text-gray-900">
              {jobData.applicationDeadline 
                ? new Date(jobData.applicationDeadline).toLocaleDateString()
                : "Not specified"
              }
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Hiring Timeline</div>
            <div className="text-gray-900">{jobData.hiringTimeline || "Not specified"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingModule;