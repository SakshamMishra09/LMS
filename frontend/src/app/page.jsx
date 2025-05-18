'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Award, CalendarDays, Clock, Video, MessageSquare, ChevronRight, Sparkles, Star, TrendingUp, Globe, Shield, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LMSLandingPage() {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo account request submitted for: " + email);
    setEmail("");
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const featureVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  const faqs = [
    {
      question: "How easy is it to get started with EduHub LMS?",
      answer: "Getting started is simple! Sign up for a free trial, and our intuitive setup wizard will guide you through the process. You can have your first course up and running in less than an hour."
    },
    {
      question: "Can I customize the platform to match my brand?",
      answer: "Yes! EduHub LMS offers extensive customization options. You can customize colors, logos, domain names, and even the learning interface to match your brand identity."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 support through live chat, email, and phone. Our dedicated support team is always ready to help you with any questions or issues you might have."
    },
    {
      question: "Is EduHub LMS suitable for corporate training?",
      answer: "Absolutely! Many organizations use EduHub LMS for employee training, onboarding, and professional development. Our platform supports various content types and assessment methods."
    }
  ];
  
  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-100 via-indigo-50 to-white opacity-70"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 mb-6"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Next Generation Learning Platform</span>
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                  <span className="block">Transform your</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                    learning experience
                  </span>
                </h1>
                <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                  EduHub LMS provides a seamless, intuitive platform for course creation, student engagement, and progress tracking—all in one place.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/browse-course"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get started
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="Demo"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-indigo-600 bg-indigo-50 hover:bg-indigo-100 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Watch demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="absolute top-0 right-0 w-1/2 h-full hidden lg:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-violet-100 rounded-l-3xl transform -skew-x-12 origin-top-right"></div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 3D LMS Images Section */}
            <div className="mb-16 flex flex-col md:flex-row items-center justify-center gap-8">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="3D LMS Illustration 1" className="rounded-2xl shadow-xl w-full md:w-1/3 object-cover" />
              <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80" alt="3D LMS Illustration 2" className="rounded-2xl shadow-xl w-full md:w-1/3 object-cover" />
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="3D LMS Illustration 3" className="rounded-2xl shadow-xl w-full md:w-1/3 object-cover" />
            </div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need for online learning
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Our LMS platform provides powerful tools for educators and an engaging experience for learners.
              </p>
            </motion.div>

            <motion.div 
              className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Video className="h-6 w-6" />,
                  title: "Interactive Content",
                  description: "Create engaging lessons with videos, quizzes, and interactive materials that keep students motivated."
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Collaborative Learning",
                  description: "Foster community with discussion forums, group projects, and peer-to-peer feedback."
                },
                {
                  icon: <Award className="h-6 w-6" />,
                  title: "Certification",
                  description: "Issue custom certificates upon course completion to recognize student achievements."
                },
                {
                  icon: <CalendarDays className="h-6 w-6" />,
                  title: "Scheduling",
                  description: "Plan and organize course timelines with our intuitive calendar and scheduling tools."
                },
                {
                  icon: <Clock className="h-6 w-6" />,
                  title: "Progress Tracking",
                  description: "Monitor student engagement and performance with comprehensive analytics and reports."
                },
                {
                  icon: <MessageSquare className="h-6 w-6" />,
                  title: "Communication Tools",
                  description: "Stay connected with integrated messaging, announcements, and email notifications."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  whileHover="hover"
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="py-20 bg-gradient-to-b from-white to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Impact</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by educators worldwide
              </p>
            </motion.div>

            <motion.div 
              className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { icon: <Users className="h-8 w-8" />, value: "1M+", label: "Active Students" },
                { icon: <BookOpen className="h-8 w-8" />, value: "50K+", label: "Courses Created" },
                { icon: <Globe className="h-8 w-8" />, value: "150+", label: "Countries" },
                { icon: <TrendingUp className="h-8 w-8" />, value: "98%", label: "Satisfaction Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white mb-6">
                    {stat.icon}
                  </div>
                  <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What our users say
              </p>
            </motion.div>

            <motion.div 
              className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  quote: "EduHub LMS transformed how we deliver our online courses. The intuitive interface and robust features allowed us to focus on content creation rather than technical issues.",
                  author: "Sarah Johnson",
                  role: "Online Course Creator",
                  rating: 5
                },
                {
                  quote: "The analytics and reporting features have been game-changing for our institution. We can now track student progress in real-time and provide targeted support when needed.",
                  author: "Michael Chen",
                  role: "University Professor",
                  rating: 5
                },
                {
                  quote: "As a corporate trainer, I've tried many LMS platforms, but EduHub stands out with its user-friendly interface and comprehensive features. It's made training our global team so much easier.",
                  author: "Lisa Rodriguez",
                  role: "Corporate Training Director",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  whileHover="hover"
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Security Section */}
        <div className="py-20 bg-gradient-to-b from-indigo-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Security</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Your data is safe with us
              </p>
            </motion.div>

            <motion.div 
              className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Enterprise-grade Security",
                  description: "Bank-level encryption and security protocols to protect your data"
                },
                {
                  icon: <Globe className="h-8 w-8" />,
                  title: "Global Compliance",
                  description: "Compliant with GDPR, CCPA, and other international standards"
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "99.9% Uptime",
                  description: "Reliable infrastructure with guaranteed service availability"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  whileHover="hover"
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">FAQ</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </p>
            </motion.div>

            <motion.div 
              className="mt-16 max-w-3xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  className="mb-4"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-left"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      <ChevronRight
                        className={`h-5 w-5 text-indigo-500 transform transition-transform duration-200 ${
                          openFaq === index ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                    {openFaq === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 text-gray-600"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Simple, transparent pricing
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Choose the plan that works best for your educational needs
              </p>
            </motion.div>

            <motion.div 
              className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  name: "Basic",
                  price: "$29",
                  features: ["Up to 500 students", "5 courses", "Basic reporting"],
                  highlighted: false
                },
                {
                  name: "Professional",
                  price: "$79",
                  features: ["Up to 2,000 students", "20 courses", "Advanced analytics", "Priority support"],
                  highlighted: true
                },
                {
                  name: "Enterprise",
                  price: "$199",
                  features: ["Unlimited students", "Unlimited courses", "Custom integrations", "24/7 dedicated support"],
                  highlighted: false
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  whileHover="hover"
                  className={`relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    plan.highlighted ? 'border-2 border-indigo-500' : 'border border-gray-100'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-600">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-4 text-5xl font-extrabold text-gray-900">{plan.price}</p>
                  <p className="mt-2 text-base text-gray-500">per month</p>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0">
                          <ChevronRight className="h-5 w-5 text-indigo-500" />
                        </div>
                        <p className="ml-3 text-base text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-8 w-full py-3 px-4 rounded-full text-base font-medium transition-colors duration-300 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-700 hover:to-violet-700'
                        : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                    }`}
                  >
                    {plan.highlighted ? 'Get started' : 'Contact sales'}
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="contact" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to get started?</span>
                <span className="block text-indigo-200">Request a demo today.</span>
              </h2>
              <motion.form 
                onSubmit={handleSubmit}
                className="mt-8 sm:flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="min-w-0 flex-1">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white sm:flex-1"
                  />
                </div>
                <motion.div 
                  className="mt-3 sm:mt-0 sm:ml-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    type="submit"
                    className="block w-full px-5 py-3 text-base font-medium text-indigo-600 bg-white rounded-full hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white sm:flex-1"
                  >
                    Request demo
                  </button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}