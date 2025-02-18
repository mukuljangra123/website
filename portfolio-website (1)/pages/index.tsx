"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Certifications from "../components/Certifications"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gradient-to-b from-[#1A1A2E] to-[#121212]" : "bg-gray-100"}`}>
      <Head>
        <title>Mukul Jangra - Portfolio</title>
        <meta name="description" content="Mukul Jangra's portfolio - Computer Science & AI Enthusiast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

