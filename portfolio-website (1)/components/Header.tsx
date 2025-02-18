"use client"

import { useState } from "react"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-opacity-90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="./" className="text-2xl font-bold text-cyan-500">
          MJ
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="./#about" className="text-gray-300 hover:text-cyan-500 transition duration-300">
            About
          </Link>
          <Link href="./#skills" className="text-gray-300 hover:text-cyan-500 transition duration-300">
            Skills
          </Link>
          <Link href="./#projects" className="text-gray-300 hover:text-cyan-500 transition duration-300">
            Projects
          </Link>
          <Link href="./#experience" className="text-gray-300 hover:text-cyan-500 transition duration-300">
            Experience
          </Link>
          <Link href="./#certifications" className="text-gray-300 hover:text-cyan-500 transition duration-300">
            Certifications
          </Link>
          <Link href="./#contact" className="text-gray-300 hover:text-cyan-500 transition duration-300">
            Contact
          </Link>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-800 text-yellow-400">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6 text-gray-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90 backdrop-blur-sm">
          <Link href="./#about" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-800">
            About
          </Link>
          <Link href="./#skills" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-800">
            Skills
          </Link>
          <Link href="./#projects" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-800">
            Projects
          </Link>
          <Link href="./#experience" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-800">
            Experience
          </Link>
          <Link href="./#certifications" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-800">
            Certifications
          </Link>
          <Link href="./#contact" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-800">
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}

