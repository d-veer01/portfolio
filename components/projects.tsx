"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Network, Utensils } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Network Traffic Analyzer",
      description:
        "Developed a Python tool to capture and analyze network packets using Scapy, Pyshark, and Psutil. Implemented a command-line interface for customizable packet capture and real-time traffic analysis. Planned future enhancements, including predictive maintenance and cloud environment support.",
      tech: ["Python", "Scapy", "Pyshark", "Psutil"],
      icon: <Network size={24} />,
      date: "Jun 2024 – Jul 2024",
      links: [
        { name: "GitHub", url: "https://github.com/d-veer01/network-traffic-analyzer", icon: <Github size={18} /> },
      ],
    },
    {
      title: "Restaurant Website",
      description:
        "Developed a restaurant website as a first-year college project. Including key pages like Home, Menu, Offers, Contact Us, and Book. Integrated interactive features like booking forms and dynamic content to enhance user engagement. Designed the layout using HTML and CSS, while JavaScript powered the website's interactivity.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: <Utensils size={24} />,
      date: "Jan 2023 – Feb 2023",
      links: [
        { name: "GitHub", url: "https://github.com/d-veer01/restaurant-website", icon: <Github size={18} /> },
        //{ name: "Live Demo", url: "#", icon: <ExternalLink size={18} /> },
      ],
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical projects, demonstrating my skills and experience in various technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6 rounded-xl flex flex-col md:flex-row gap-6"
            >
              <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                <div className="p-4 rounded-full bg-emerald-500/20 text-emerald-500">{project.icon}</div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold gradient-text mb-2 md:mb-0">{project.title}</h3>
                  <span className="text-sm text-gray-400">{project.date}</span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-emerald-900/30 text-emerald-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.links.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
