import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Mail, Phone, User, Send, Plus, Trash2, ArrowRight, Users, Sparkles } from "lucide-react";

interface Referral {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const Referrals = () => {
  const { scrollY } = useScroll();
  
  // Parallax transformations for hero elements
  const heroBackgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  const titleY = useTransform(scrollY, [0, 300], [0, 50]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const step1X = useTransform(scrollY, [0, 400], [0, -30]);
  const step2X = useTransform(scrollY, [0, 400], [0, 0]);
  const step3X = useTransform(scrollY, [0, 400], [0, 30]);
  const stepOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [referrals, setReferrals] = useState<Referral[]>([
    { id: 1, name: "", email: "", phone: "" }
  ]);

  const handleAddReferral = () => {
    setReferrals([
      ...referrals,
      { id: referrals.length + 1, name: "", email: "", phone: "" }
    ]);
  };

  const handleRemoveReferral = (id: number) => {
    if (referrals.length > 1) {
      setReferrals(referrals.filter(ref => ref.id !== id));
    }
  };

  const handleReferralChange = (id: number, field: keyof Referral, value: string) => {
    setReferrals(referrals.map(ref => 
      ref.id === id ? { ...ref, [field]: value } : ref
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!referrerName || !referrerEmail) {
      alert("Please fill in all required referrer information");
      return;
    }

    if (!consent) {
      alert("Please consent to the privacy notice");
      return;
    }

    const submissionData = {
      referrer: {
        name: referrerName,
        email: referrerEmail
      },
      referrals: referrals.filter(ref => ref.name || ref.email || ref.phone),
      consent: consent,
      submittedAt: new Date().toISOString()
    };

    console.log("Submission data:", submissionData);
    alert("Thank you for your referrals! We'll be in touch soon.");
    
    setReferrerName("");
    setReferrerEmail("");
    setConsent(false);
    setReferrals([{ id: 1, name: "", email: "", phone: "" }]);
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
                Refer a{" "}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-red-500 inline-block"
              >
                Teacher
              </motion.span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Help exceptional educators find their next opportunity. Your recommendation could change a teacher's career—and students' lives.
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
                <span className="text-lg font-medium group-hover:text-red-400 transition-colors">Fill Referrer Details</span>
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
                <span className="text-lg font-medium group-hover:text-red-400 transition-colors">Add Teacher Info</span>
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
                <span className="text-lg font-medium group-hover:text-red-400 transition-colors">Submit & Help Grow</span>
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
                href="#referral-form" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-full shadow-xl shadow-red-900/30 transition-all duration-300"
              >
                Start Referring
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


        {/* Gradient Overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent"></div>
      </section>

      {/* Form Section */}
      <section id="referral-form" className="min-h-screen bg-gray-50 py-12 md:py-24 -mt-32 relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <UserPlus className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Know a teacher?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Send us their details, and help them find career growth with us!
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

                    {/* Referrer Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      <div className="space-y-3">
                        <Label htmlFor="referrerName" className="text-gray-700 font-medium flex items-center gap-2">
                          <User className="w-4 h-4" />
                          NAME OF REFERRER *
                        </Label>
                        <Input
                          id="referrerName"
                          value={referrerName}
                          onChange={(e) => setReferrerName(e.target.value)}
                          placeholder="Enter name of referrer here"
                          required
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="referrerEmail" className="text-gray-700 font-medium flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          EMAIL ADDRESS *
                        </Label>
                        <Input
                          id="referrerEmail"
                          type="email"
                          value={referrerEmail}
                          onChange={(e) => setReferrerEmail(e.target.value)}
                          placeholder="Enter email address here"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    {/* Referrals Section */}
                    <div className="space-y-8">
                      {referrals.map((referral, index) => (
                        <div key={referral.id} className="space-y-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-800">
                              Referral #{index + 1}
                            </h3>
                            {referrals.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveReferral(referral.id)}
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Remove
                              </Button>
                            )}
                          </div>

                          <div className="space-y-6">
                            <div className="space-y-3">
                              <Label className="text-gray-700 font-medium flex items-center gap-2">
                                <User className="w-4 h-4" />
                                NAME
                              </Label>
                              <Input
                                value={referral.name}
                                onChange={(e) => handleReferralChange(referral.id, 'name', e.target.value)}
                                placeholder="Enter name here"
                                className="h-12"
                              />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-3">
                                <Label className="text-gray-700 font-medium flex items-center gap-2">
                                  <Mail className="w-4 h-4" />
                                  EMAIL ADDRESS
                                </Label>
                                <Input
                                  type="email"
                                  value={referral.email}
                                  onChange={(e) => handleReferralChange(referral.id, 'email', e.target.value)}
                                  placeholder="Enter email address here"
                                  className="h-12"
                                />
                              </div>

                              <div className="space-y-3">
                                <Label className="text-gray-700 font-medium flex items-center gap-2">
                                  <Phone className="w-4 h-4" />
                                  PHONE
                                </Label>
                                <Input
                                  type="tel"
                                  value={referral.phone}
                                  onChange={(e) => handleReferralChange(referral.id, 'phone', e.target.value)}
                                  placeholder="Enter phone here"
                                  className="h-12"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add more referrals button */}
                    <div className="mt-6">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAddReferral}
                        className="w-full md:w-auto border-dashed border-2 border-gray-300 hover:border-red-300 hover:bg-red-50 text-gray-600"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add more referrals...
                      </Button>
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
                      SUBMIT REFERRALS
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Footer Note */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                Your referrals help us connect with amazing educators. We'll reach out to them within 2-3 business days.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Have questions about our referral program? <a href="/contact" className="text-red-600 hover:text-red-700 underline">Contact our team</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Referrals;