"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

const Education = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      location: "Phagwara Punjab",
      degree: "Bachelor Of Technology – Computer Science and Engineering",
      grade: "CGPA: 7.4",
      period: "Since Aug 2022",
      current: true,
    },
    {
      institution: "Sikar Vidhyapeeth SR SEC School",
      location: "Sikar, Rajasthan",
      degree: "Intermediate",
      grade: "Percentage: 93%",
      period: "Apr 2020 – Jun 2021",
      current: false,
    },
  ]

  const activities = [
    {
      title: "Attend Hackathon",
      organization: "LPU",
      date: "Sep 2024",
    },
    {
      title: "Attend Workshop on Cybersecurity",
      organization: "LPU",
      date: "Dec 2023",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="education" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic background and co-curricular activities that have shaped my knowledge and skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Academic Background</h3>
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants} className="card p-6 rounded-xl relative">
                {edu.current && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs">
                    Current
                  </div>
                )}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-500">
                      <GraduationCap size={24} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-semibold gradient-text mb-1">{edu.institution}</h4>
                    <p className="text-sm text-gray-400 mb-3">{edu.location}</p>
                    <p className="text-md font-medium mb-1">{edu.degree}</p>
                    <p className="text-emerald-400 mb-2">{edu.grade}</p>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={14} className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-6">Co-Curricular Activities</h3>
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-5 rounded-xl mb-4"
                whileHover={{ x: 5 }}
              >
                <h4 className="text-lg font-medium mb-1">{activity.title}</h4>
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-400">{activity.organization}</span>
                  <span className="text-gray-400">{activity.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
