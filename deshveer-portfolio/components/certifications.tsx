"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

const Certifications = () => {
  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Jul 2024 – Oct 2024",
      url: "https://drive.google.com/file/d/1mCX5BtkBPEr_gK0a5h2VO3lONprwOPMX/view?usp=sharing",
    },
    {
      title: "IBM Introduction to Cybersecurity",
      issuer: "IBM",
      date: "Apr 2024",
      url: "https://coursera.org/verify/JKW8QURHWEHF",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "Apr 2024",
      url: "https://coursera.org/verify/KXR3C8S9S9RW",
    },
    {
      title: "Google Cybersecurity",
      issuer: "Google",
      date: "Feb 2024",
      url: "https://coursera.org/verify/professional-cert/U65VA4W4Q9ZK",
    },
    {
      title: "Ethical Hacking Essential",
      issuer: "EC-Council",
      date: "Feb 2023",
      url: "https://drive.google.com/file/d/1NnLYO-dyefIyiUJ22tCNji4zXxJm_zqR/view?usp=drive_link",
    },
    {
      title: "HTML, CSS, JavaScript",
      issuer: "Cipher School",
      date: "Sep 2022 – Jan 2023",
      url: "https://drive.google.com/file/d/1ZgfbsPI3m5yvo_ZmF7sooyBu3yil1_Ow/view?usp=sharing",
    },
    {
      title: "Python",
      issuer: "Cipher School",
      date: "Sep 2022 – Jan 2023",
      url: "https://drive.google.com/file/d/12AhIKS5iv1icAjNQpkPTf7lltPBYnchN/view?usp=sharing",
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
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my skills and knowledge in various technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants} className="card p-6 rounded-xl" whileHover={{ y: -5 }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-500">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                  <p className="text-sm text-emerald-400 mb-2">{cert.issuer}</p>
                  <p className="text-xs text-gray-400 mb-3">{cert.date}</p>
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300"
                    whileHover={{ x: 3 }}
                  >
                    <span className="mr-1">View Certificate</span>
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
