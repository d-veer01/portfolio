"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle } from "lucide-react"

const Training = () => {
  const training = {
    company: "IBM",
    period: "Jun 2024 – Aug 2024",
    title: "Cybersecurity",
    description:
      "Gained practical experience with core cybersecurity concepts, tools, and techniques. Worked with Metasploit, password cracking, and malware analysis to identify vulnerabilities. Used Linux for enumeration, penetration testing, cryptography, and malware analysis, adhering to security best practices.",
    techStacks: ["Linux", "Enumeration", "CEH Methodology", "Malware", "Cryptography"],
    highlights: [
      "Performed vulnerability assessments and penetration testing on simulated environments",
      "Analyzed malware samples and identified potential threats",
      "Implemented cryptographic solutions for secure data transmission",
      "Followed industry best practices for security incident response",
      "Collaborated with team members on security projects",
    ],
  }

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
    <section id="training" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Training</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional training experience that has enhanced my skills and knowledge in cybersecurity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card p-8 rounded-xl"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
              <div className="p-4 rounded-full bg-emerald-500/20 text-emerald-500">
                <Shield size={32} />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-2xl font-bold gradient-text mb-2 md:mb-0">{training.company}</h3>
                <span className="text-sm text-gray-400">{training.period}</span>
              </div>
              <h4 className="text-xl font-semibold text-emerald-400 mb-3">{training.title}</h4>
              <p className="text-gray-300 mb-4">{training.description}</p>

              <div className="mb-6">
                <h5 className="text-lg font-semibold mb-3">Tech Stacks Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {training.techStacks.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      className="px-3 py-1 bg-emerald-900/30 text-emerald-100 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-lg font-semibold mb-3">Key Highlights:</h5>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  {training.highlights.map((highlight, index) => (
                    <motion.li key={index} variants={itemVariants} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{highlight}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Training
