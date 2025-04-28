"use client"

import { motion } from "framer-motion"
import { ChevronUp, Linkedin, Github, Mail, Phone } from "lucide-react"

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      url: "https://linkedin.com/in/deshveer",
    },
    {
      name: "GitHub",
      icon: <Github size={18} />,
      url: "https://github.com/d-veer01",
    },
    {
      name: "Email",
      icon: <Mail size={18} />,
      url: "mailto:d.veer.robo507@gmail.com",
    },
    {
      name: "Phone",
      icon: <Phone size={18} />,
      url: "tel:+917297079685",
    },
  ]

  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.a
            href="#home"
            className="p-2 bg-emerald-500/20 text-emerald-500 rounded-full mb-6"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={24} />
          </motion.a>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold gradient-text mb-4"
          >
            Deshveer
          </motion.h2>

          <div className="flex space-x-4 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 text-white rounded-full hover:bg-emerald-900/50 hover:text-emerald-400"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>

          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Deshveer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
