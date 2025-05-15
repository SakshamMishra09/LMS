// pages/contact.js
"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Simulate form submission success
    setFormStatus('success');
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
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

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-700 to-violet-700 text-white py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-violet-500/30 via-indigo-700/10 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                Get in Touch
              </h1>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                We'd love to hear from you. Reach out with questions, feedback, or partnership inquiries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you have a question about our learning platform, need technical support, or want to explore partnership opportunities, our team is here to help.
                </p>

                <div className="space-y-8">
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <Mail className="h-6 w-6 text-indigo-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">support@lmsplatform.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <Phone className="h-6 w-6 text-indigo-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <MapPin className="h-6 w-6 text-indigo-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                      <p className="text-gray-600">
                        123 Learning Avenue<br />
                        Suite 400<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: Twitter, href: "#", label: "Twitter" },
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Facebook, href: "#", label: "Facebook" },
                      { icon: Instagram, href: "#", label: "Instagram" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="h-6 w-6 text-indigo-600" />
                        <span className="sr-only">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                  
                  {formStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg"
                    >
                      <p>Thank you! Your message has been sent successfully.</p>
                    </motion.div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find quick answers to common questions about our platform
              </p>
            </motion.div>

            <motion.div 
              className="max-w-3xl mx-auto space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  question: "How can I get technical support for the LMS platform?",
                  answer: "For technical support, you can reach out to our team via email at support@lmsplatform.com or call our support line during business hours. You can also check our help center for guides and solutions to common issues."
                },
                {
                  question: "Do you offer custom solutions for institutions?",
                  answer: "Yes, we provide tailored LMS solutions for educational institutions, corporate training departments, and other organizations. Contact our partnership team to discuss your specific requirements."
                },
                {
                  question: "How do I report a bug or suggest a feature?",
                  answer: "We welcome feedback from our users. You can report bugs or suggest features through our contact form or by emailing feedback@lmsplatform.com. Our product team reviews all submissions regularly."
                },
                {
                  question: "What are your typical response times?",
                  answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent technical issues, our premium support plan offers faster response times."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Come say hello at our office HQ
              </p>
            </motion.div>

            <motion.div 
              className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Replace with your map component or embed */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <span>Map placeholder - integrate with Google Maps or your preferred map service</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}