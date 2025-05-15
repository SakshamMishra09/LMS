'use client'
import { motion } from "framer-motion";
import { Users, BookOpen, Globe, TrendingUp, Star, Heart, Shield, Award, Lightbulb, Target } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AboutUs() {
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

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
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
                About EduHub LMS
              </h1>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                Empowering learners worldwide with accessible, high-quality education through innovative technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At EduHub LMS, we're on a mission to revolutionize education by making quality learning accessible to everyone, everywhere. We believe that education should be a right, not a privilege.
                </p>
                <p className="text-lg text-gray-600">
                  Through our innovative platform, we're breaking down barriers and creating opportunities for learners worldwide to achieve their full potential.
                </p>
              </div>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                    <Target className="w-24 h-24 text-white opacity-80" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do at EduHub LMS
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Passion for Learning",
                  description: "We're driven by a deep passion for education and its transformative power."
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Innovation",
                  description: "We constantly push boundaries to create better learning experiences."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Community",
                  description: "We believe in the power of learning together and supporting each other."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  whileHover="hover"
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The passionate individuals behind EduHub LMS
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  name: "Dr. Sarah Johnson",
                  role: "Chief Education Officer",
                  bio: "Ph.D. in Educational Technology with over 15 years of experience in online learning.",
                  image: "S"
                },
                {
                  name: "Michael Chen",
                  role: "Chief Technology Officer",
                  bio: "Software architect specializing in educational technology platforms.",
                  image: "M"
                },
                {
                  name: "Elena Rodriguez",
                  role: "Head of Content",
                  bio: "Curriculum development expert with experience in creating engaging learning materials.",
                  image: "E"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  whileHover="hover"
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-32 w-32 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white text-4xl font-bold mb-6">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{member.name}</h3>
                  <p className="text-indigo-600 text-center mb-4">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Making a difference in education worldwide
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { icon: <Users className="w-8 h-8" />, value: "1M+", label: "Active Students" },
                { icon: <BookOpen className="w-8 h-8" />, value: "50K+", label: "Courses Created" },
                { icon: <Globe className="w-8 h-8" />, value: "150+", label: "Countries" },
                { icon: <Award className="w-8 h-8" />, value: "98%", label: "Satisfaction Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  whileHover="hover"
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
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
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-700 to-violet-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Be part of the future of education. Together, we can make learning accessible to everyone.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-indigo-600 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}