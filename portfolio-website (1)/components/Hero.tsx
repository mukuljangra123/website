"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Exploring AI, Robotics, & Data Science"

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(typing)
    }, 100)

    return () => clearInterval(typing)
  }, [])

  return (
    <section className="h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl font-bold text-white mb-4">Hi, I'm Mukul Jangra 🚀</h1>
        <h2 className="text-3xl text-cyan-400 mb-8">{text}</h2>
        <a
          href="#about"
          className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  )
}

