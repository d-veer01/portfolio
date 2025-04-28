"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Typed from "typed.js"
import { ChevronDown, Linkedin, Github, Mail, Phone } from "lucide-react"

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Ethical Hacker", "Red Team Enthusiast"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/deshveer",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/d-veer01",
      color: "hover:text-purple-500",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:d.veer.robo507@gmail.com",
      color: "hover:text-red-500",
    },
    {
      name: "Phone",
      icon: <Phone size={20} />,
      url: "tel:+917297079685",
      color: "hover:text-green-500",
    },
  ]

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <img
              //src="/placeholder.svg?height=150&width=150"
             // alt="Deshveer"
             // className="w-32 h-32 mx-auto rounded-full border-4 border-emerald-500 glow"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm <span className="gradient-text">Deshveer</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8"
          >
            <span ref={typedRef}></span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-4 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gray-800 text-white ${link.color} transition-all`}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-4"
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-transparent border border-emerald-600 text-white rounded-full font-medium hover:bg-emerald-900/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#skills"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="text-emerald-400 hover:text-emerald-300"
        >
          <ChevronDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
