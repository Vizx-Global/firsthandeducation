import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Home, Phone, User, Send, School, Navigation, ArrowRight, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RequestSub = () => {
  const { scrollY } = useScroll();
  
  // Parallax transformations for hero elements
  const heroBackgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  const titleY = useTransform(scrollY, [0, 300], [0, 50]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const step1X = useTransform(scrollY, [0, 400], [0, -30]);
  const step2X = useTransform(scrollY, [0, 400], [0, 0]);
  const step3X = useTransform(scrollY, [0, 400], [0, 30]);
  const stepOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolLocation: "",
    address: "",
    dayNeeded: "",
    timeNeeded: "",
    classType: "",
    subContactName: "",
    subContactPhone: ""
  });
  const [consent, setConsent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = [
      'schoolLocation',
      'address', 
      'dayNeeded',
      'timeNeeded',
      'classType',
      'subContactName',
      'subContactPhone'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    if (!consent) {
      alert("Please consent to the privacy notice");
      return;
    }

    // Submit data
    console.log("Sub request submitted:", formData);
    alert("Your substitute request has been submitted! We'll contact you shortly.");
    
    // Reset form
    setFormData({
      schoolLocation: "",
      address: "",
      dayNeeded: "",
      timeNeeded: "",
      classType: "",
      subContactName: "",
      subContactPhone: ""
    });
    setConsent(false);
  };

  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 flex items-center justify-center">
        {/* Floating Elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-red-500/20 rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-500/20 rounded-full"
        />
        
        {/* Parallax Background Layers */}
        <motion.div 
          style={{ y: heroBackgroundY }}
          className="absolute inset-0 z-0 opacity-20"
        >
          {/* Layer 1 - Slowest moving (deepest) */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50px 50px, rgba(239, 68, 68, 0.1) 2%, transparent 0%)`,
            backgroundSize: '200px 200px',
            backgroundPosition: '0% 0%'
          }}></div>
          
          {/* Layer 2 - Medium speed */}
          <motion.div 
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 100px 100px, rgba(59, 130, 246, 0.08) 1%, transparent 0%)`,
              backgroundSize: '150px 150px',
              backgroundPosition: '50% 50%'
            }}>
          </motion.div>
          
          {/* Layer 3 - Fastest moving (closest) */}
          <motion.div 
            animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 150px 150px, rgba(255, 255, 255, 0.05) 0.5%, transparent 0%)`,
              backgroundSize: '100px 100px',
              backgroundPosition: '80% 80%'
            }}>
          </motion.div>
        </motion.div>

        {/* Content with Parallax */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
            style={{ y: titleY, opacity: titleOpacity }}
          >
           
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                Request a{" "}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-red-500 inline-block"
              >
                Substitute
              </motion.span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Need immediate classroom coverage? Request a certified substitute teacher now and get back to teaching with confidence.
            </p>

            {/* Steps with Parallax Effects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20"
              style={{ opacity: stepOpacity }}
            >
              {/* Step 1 */}
              <motion.div 
                style={{ x: step1X }}
                className="flex flex-col items-center gap-4 text-gray-300 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.3)" }}
                  className="flex items-center justify-center w-14 h-14 bg-white/10 rounded-full border-2 border-white/20 group-hover:border-red-500/50 transition-all duration-300"
                >
                  <span className="font-bold text-white text-xl">1</span>
                </motion.div>
                <span className="text-lg font-medium group-hover:text-red-400 transition-colors">Fill School Details</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="h-1 bg-red-500/50 rounded-full"
                />
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, 5, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-8 h-8 text-gray-500 rotate-90 sm:rotate-0" />
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                style={{ x: step2X }}
                className="flex flex-col items-center gap-4 text-gray-300 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.3)" }}
                  className="flex items-center justify-center w-14 h-14 bg-white/10 rounded-full border-2 border-white/20 group-hover:border-red-500/50 transition-all duration-300"
                >
                  <span className="font-bold text-white text-xl">2</span>
                </motion.div>
                <span className="text-lg font-medium group-hover:text-red-400 transition-colors">Schedule Coverage</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="h-1 bg-red-500/50 rounded-full"
                />
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, 5, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <ArrowRight className="w-8 h-8 text-gray-500 rotate-90 sm:rotate-0" />
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                style={{ x: step3X }}
                className="flex flex-col items-center gap-4 text-gray-300 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.3)" }}
                  className="flex items-center justify-center w-14 h-14 bg-white/10 rounded-full border-2 border-white/20 group-hover:border-red-500/50 transition-all duration-300"
                >
                  <span className="font-bold text-white text-xl">3</span>
                </motion.div>
                <span className="text-lg font-medium group-hover:text-red-400 transition-colors">Get Confirmed</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="h-1 bg-red-500/50 rounded-full"
                />
              </motion.div>
            </motion.div>

            {/* CTA Button with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="#request-form" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-full shadow-xl shadow-red-900/30 transition-all duration-300"
              >
                Start Request
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
              <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>

        {/* Gradient Overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent"></div>
      </section>

      {/* Form Section */}
      <section id="request-form" className="min-h-screen bg-gray-50 py-12 md:py-24 -mt-32 relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate("/")}
                className="text-gray-600 hover:text-gray-900 p-0 h-auto"
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </Button>
              <span className="text-gray-400">»</span>
              <span className="text-red-600 font-medium">Request A Sub Now or Cover A Class Now</span>
            </div>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Request A Sub Now or Cover A Class Now
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Fill out the form below to request immediate substitute coverage
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
              <p className="text-gray-700">
                <strong className="font-semibold">Need immediate coverage?</strong> Please send us a message online by filling out the form below with your information. We'll match you with a qualified substitute teacher as soon as possible.
              </p>
            </div>

            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit}>
                  {/* REQUIRED INFORMATION header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-px flex-1 bg-red-200"></div>
                      <h2 className="text-xl font-bold text-gray-900 whitespace-nowrap">
                        REQUIRED INFORMATION
                      </h2>
                      <div className="h-px flex-1 bg-red-200"></div>
                    </div>

                    {/* School Information */}
                    <div className="space-y-8">
                      {/* Row 1: School Location & Address */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="schoolLocation" className="text-gray-700 font-medium flex items-center gap-2">
                            <School className="w-4 h-4" />
                            SCHOOL LOCATION *
                          </Label>
                          <Input
                            id="schoolLocation"
                            name="schoolLocation"
                            value={formData.schoolLocation}
                            onChange={handleInputChange}
                            placeholder="Enter location here"
                            required
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="address" className="text-gray-700 font-medium flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            ADDRESS *
                          </Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Enter address here"
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      {/* Row 2: Day, Time, Class */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="dayNeeded" className="text-gray-700 font-medium flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            DAY NEEDED *
                          </Label>
                          <Input
                            id="dayNeeded"
                            name="dayNeeded"
                            type="date"
                            value={formData.dayNeeded}
                            onChange={handleInputChange}
                            required
                            className="h-12"
                          />
                          <p className="text-xs text-gray-500">Select or enter the specific date</p>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="timeNeeded" className="text-gray-700 font-medium flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            TIME NEEDED *
                          </Label>
                          <div className="flex gap-2">
                            <Input
                              id="timeNeeded"
                              name="timeNeeded"
                              type="time"
                              value={formData.timeNeeded}
                              onChange={handleInputChange}
                              required
                              className="h-12 flex-1"
                            />
                            <select 
                              className="h-12 px-3 border border-input rounded-md bg-background"
                              value={formData.timeNeeded.includes("AM") ? "AM" : "PM"}
                              onChange={(e) => {
                                const time = formData.timeNeeded.replace(/AM|PM/, '') + e.target.value;
                                setFormData(prev => ({ ...prev, timeNeeded: time }));
                              }}
                            >
                              <option value="AM">AM</option>
                              <option value="PM">PM</option>
                            </select>
                          </div>
                          <p className="text-xs text-gray-500">Start time for coverage</p>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="classType" className="text-gray-700 font-medium flex items-center gap-2">
                            <School className="w-4 h-4" />
                            CLASS *
                          </Label>
                          <Input
                            id="classType"
                            name="classType"
                            value={formData.classType}
                            onChange={handleInputChange}
                            placeholder="Enter class here"
                            required
                            className="h-12"
                          />
                          <p className="text-xs text-gray-500">e.g., Math, Science, Elementary</p>
                        </div>
                      </div>

                      {/* Row 3: Contact Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="subContactName" className="text-gray-700 font-medium flex items-center gap-2">
                            <User className="w-4 h-4" />
                            SUB CONTACT NAME *
                          </Label>
                          <Input
                            id="subContactName"
                            name="subContactName"
                            value={formData.subContactName}
                            onChange={handleInputChange}
                            placeholder="Enter name here"
                            required
                            className="h-12"
                          />
                          <p className="text-xs text-gray-500">Who should we contact about this request?</p>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="subContactPhone" className="text-gray-700 font-medium flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            SUB CONTACT PHONE *
                          </Label>
                          <Input
                            id="subContactPhone"
                            name="subContactPhone"
                            type="tel"
                            value={formData.subContactPhone}
                            onChange={handleInputChange}
                            placeholder="Enter number here"
                            required
                            className="h-12"
                          />
                          <p className="text-xs text-gray-500">Best contact number</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information Section */}
                  <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Navigation className="w-5 h-5 text-red-600" />
                      Additional Information (Optional)
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="specialInstructions" className="text-gray-700">
                          Special Instructions or Notes
                        </Label>
                        <textarea
                          id="specialInstructions"
                          className="w-full h-32 p-3 border border-input rounded-md bg-white resize-none"
                          placeholder="Any special requirements, access codes, or additional information the substitute should know..."
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="gradeLevel" className="text-gray-700">
                            Grade Level
                          </Label>
                          <select 
                            id="gradeLevel"
                            className="w-full h-12 px-3 border border-input rounded-md bg-white"
                          >
                            <option value="">Select grade level</option>
                            <option value="k-2">Kindergarten - 2nd Grade</option>
                            <option value="3-5">3rd - 5th Grade</option>
                            <option value="6-8">6th - 8th Grade</option>
                            <option value="9-12">9th - 12th Grade</option>
                            <option value="special-ed">Special Education</option>
                          </select>
                        </div>
                        
                        <div>
                          <Label htmlFor="duration" className="text-gray-700">
                            Duration
                          </Label>
                          <select 
                            id="duration"
                            className="w-full h-12 px-3 border border-input rounded-md bg-white"
                          >
                            <option value="">Select duration</option>
                            <option value="half-day">Half Day (AM)</option>
                            <option value="half-day-pm">Half Day (PM)</option>
                            <option value="full-day">Full Day</option>
                            <option value="multiple">Multiple Days</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="mb-8 p-6 bg-blue-50 border border-blue-100 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="consent"
                        checked={consent}
                        onCheckedChange={(checked) => setConsent(checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="consent" className="text-gray-700 leading-relaxed cursor-pointer">
                        I consent to the collection, use, storage, and processing of my personal and, where applicable, health-related information, including any data I submit on behalf of others, for the purpose of evaluating or fulfilling my request made through this form. I understand this will be handled in accordance with the Privacy Notice.
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-full h-px bg-gray-200"></div>
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white px-12 h-14 text-lg rounded-full shadow-lg shadow-red-900/20"
                      disabled={!consent}
                    >
                      <Send className="w-5 h-5 mr-3" />
                      REQUEST SUBSTITUTE
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Response Time</h3>
                </div>
                <p className="text-gray-600">
                  We respond to urgent requests within 1-2 hours during school operating hours (7 AM - 5 PM).
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Emergency Contact</h3>
                </div>
                <p className="text-gray-600">
                  For immediate assistance, call our emergency line: <strong>(555) 123-4567</strong>
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <School className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Qualifications</h3>
                </div>
                <p className="text-gray-600">
                  All our substitutes are certified, background-checked, and experienced educators.
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                Your request helps us match you with the perfect substitute. We'll reach out within 1-2 business hours.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Have questions about our substitute service? <a href="/contact" className="text-red-600 hover:text-red-700 underline">Contact our team</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default RequestSub;