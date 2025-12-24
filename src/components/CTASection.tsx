import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const CTASection = () => {
    const navigate = useNavigate()
    
    const benefits = [
        'Immediate access to qualified healthcare professionals',
        'Thorough credential verification and background checks',
        '24/7 support for urgent staffing needs',
        'Customized staffing solutions for your facility',
    ]

    return (
        <section id="cta" className="py-10 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-corporate-red/20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-corporate-red/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
                <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            className="text-white"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20"
                            >
                                <Users className="w-4 h-4 text-corporate-red" />
                                <span className="text-white font-semibold">
                                    HEALTHCARE STAFFING SOLUTIONS —
                                </span>
                            </motion.div>
                            
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                                Find Qualified
                                <span className="block bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent mt-2">
                                    Healthcare Professionals
                                </span>
                            </h2>
                            
                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                Access our network of pre-screened, qualified healthcare professionals 
                                ready to fill your staffing gaps and maintain quality patient care.
                            </p>

                            {/* Benefits */}
                            <div className="space-y-4 mb-8">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={benefit}
                                        className="flex items-center gap-4 text-white/90"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-6 h-6 bg-gradient-to-br from-corporate-red to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-4 w-4 text-white" />
                                        </div>
                                        <span className="font-medium text-lg">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 mb-8"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-corporate-red to-red-600 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-red-500/25 group"
                                    onClick={() => navigate('/healthcare-staffing-for-job-seekers')}
                                >
                                    Apply Now
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Right Feature Cards */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Vetted Professionals Card */}
                            <motion.div
                                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-corporate-red to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-2 text-lg">Vetted Professionals</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            Every healthcare professional undergoes thorough background checks, 
                                            credential verification, and skills assessment.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                            
                            {/* 24/7 Support Card */}
                            <motion.div
                                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-2 text-lg">24/7 Staffing Support</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            Round-the-clock assistance for emergency staffing needs, 
                                            last-minute coverage, and ongoing support.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Custom Solutions Card */}
                            <motion.div
                                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-2 text-lg">Customized Solutions</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            Tailored staffing strategies designed specifically for your 
                                            facility's unique needs and patient care requirements.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-20 w-6 h-6 bg-corporate-red/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 left-32 w-4 h-4 bg-blue-500/40 rounded-full animate-bounce"></div>
        </section>
    )
}

export default CTASection