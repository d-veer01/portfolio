"use client"

import { motion } from "framer-motion"
import { Code, Database, Terminal, Server, Globe, Users } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["C/C++", "Python", "PHP", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Frameworks",
      icon: <Globe size={24} />,
      skills: ["HTML and CSS", "NodeJS", "React"],
    },
    {
      title: "Tools & Platforms",
      icon: <Terminal size={24} />,
      skills: ["MySQL", "Wireshark", "Burpsuite", "Nmap", "Kali Linux", "Metasploit"],
    },
    {
      title: "Cybersecurity",
      icon: <Server size={24} />,
      skills: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Malware Analysis",
        "Cryptography",
        "Network Security",
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users size={24} />,
      skills: ["Problem-Solving", "Time Management", "Teamwork", "Adaptability", "Communication"],
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MySQL", "Database Design", "SQL Queries", "Data Management"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills that I've developed through education, projects, and
            training.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-500 mr-4">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * skillIndex, duration: 0.3 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                    className="px-3 py-1 bg-emerald-900/30 text-emerald-100 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
