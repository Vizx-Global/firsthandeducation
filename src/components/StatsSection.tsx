import { motion } from 'framer-motion'
import { Users, Shield, Clock, Heart, TrendingUp, Award } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'

const HealthcareStatsSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const navigate = useNavigate()

    const stats = [
        {
            icon: Users,
            number: 500,
            suffix: '+',
            label: 'Healthcare Professionals',
            description: 'Qualified nurses and caregivers in our network',
            color: 'from-blue-500 to-cyan-500',
            image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
            duration: 2.5,
        },
        {
            icon: Shield,
            number: 98,
            suffix: '%',
            label: 'Client Satisfaction',
            description: 'Of healthcare facilities recommend our services',
            color: 'from-emerald-500 to-green-600',
           image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
        },
        {
            icon: Clock,
            number: 24,
            suffix: 'hr',
            label: 'Rapid Placement',
            description: 'Average time to fill critical staffing needs',
            color: 'from-amber-500 to-orange-500',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
        },
        {
            icon: Heart,
            number: 50,
            suffix: '+',
            label: 'Healthcare Facilities',
            description: 'Hospitals and clinics we serve nationwide',
            color: 'from-rose-500 to-pink-600',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80',
            duration: 3,
        },
        {
            icon: TrendingUp,
            number: 15,
            suffix: '%',
            label: 'Cost Efficiency',
            description: 'Average savings on staffing costs for our clients',
            color: 'from-purple-500 to-indigo-600',
            image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
        },
        {
            icon: Award,
            number: 25,
            suffix: '+',
            label: 'Years Experience',
            description: 'Dedicated to healthcare staffing excellence',
            color: 'from-corporate-red to-red-600',
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    }

    const handleApplyToday = () => {
        navigate('/healthcare-staffing-for-job-seekers') 
    }

    const handleLearnMore = () => {
        navigate('/healthcare-staffing-about-us') 
    }

    return (
        <section className="relative py-10 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden" ref={ref}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-corporate-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-corporate-red/10 border border-corporate-red/20 mb-6"
                    >
                        <TrendingUp className="w-4 h-4 text-corporate-red" />
                        <span className="text-sm font-semibold text-corporate-red uppercase tracking-wide">
                            OUR IMPACT —
                        </span>
                    </motion.div>

                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Healthcare Staffing{" "}
                        <span className="bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
                            Excellence
                        </span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8"
                    >
                        Trusted by healthcare facilities nationwide to deliver qualified professionals 
                        and exceptional staffing solutions.
                    </motion.p>

                    <div className="w-24 h-1 bg-gradient-to-r from-corporate-red to-red-600 mx-auto mb-6 rounded-full"></div>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            whileHover={{ 
                                scale: 1.02,
                                y: -5,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Background image with gradient overlay */}
                            <div className="absolute inset-0">
                                <img
                                    src={stat.image}
                                    alt={stat.label}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 transition-all duration-500 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/60"></div>
                                {/* Accent gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-30`}></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 text-center h-full flex flex-col items-center justify-center min-h-[320px]">
                                {/* Icon Container */}
                                <motion.div
                                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg shadow-md`}
                                    whileHover={{ rotate: 5 }}
                                >
                                    <stat.icon className="w-7 h-7 text-white" />
                                </motion.div>

                                {/* Stat Number */}
                                <motion.div 
                                    className="text-4xl lg:text-5xl font-bold text-white mb-3 font-sans tracking-tight"
                                    initial={{ scale: 0.8 }}
                                    animate={inView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                                >
                                    {typeof stat.number === 'number' ? (
                                        <CountUp
                                            end={inView ? stat.number : 0}
                                            duration={stat.duration || 2.5}
                                            decimals={stat.number % 1 !== 0 ? 1 : 0}
                                            suffix={stat.suffix || ''}
                                            className="drop-shadow-lg"
                                        />
                                    ) : (
                                        stat.number
                                    )}
                                </motion.div>

                                {/* Label */}
                                <motion.h3 
                                    className="text-xl lg:text-2xl font-semibold text-white mb-3 leading-tight"
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                                >
                                    {stat.label}
                                </motion.h3>

                                {/* Description */}
                                <motion.p 
                                    className="text-gray-200 font-light text-sm lg:text-base leading-relaxed max-w-xs"
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.9 }}
                                >
                                    {stat.description}
                                </motion.p>
                            </div>

                            {/* Hover Border Effect */}
                            <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10`}>
                                <div className="absolute inset-[2px] rounded-3xl bg-transparent"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-600 mb-6">
                        Join hundreds of healthcare facilities that trust us with their staffing needs
                    </p>
                    <motion.div
                        className="inline-flex gap-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button 
                            onClick={handleApplyToday}
                            className="bg-gradient-to-r from-corporate-red to-red-600 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Apply Today
                        </button>
                        <button 
                            onClick={handleLearnMore}
                            className="border-2 border-corporate-red text-corporate-red hover:bg-corporate-red hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
                        >
                            Learn More
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default HealthcareStatsSection