"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme, isTransitioning } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Alec de Man</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={toggleTheme}
              disabled={isTransitioning}
              className="group relative p-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 overflow-hidden"
              aria-label="Toggle theme"
            >
              {/* Background animation */}
              <div
                className={`absolute inset-0 transition-transform duration-500 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 translate-y-0"
                    : "bg-gradient-to-r from-yellow-400 to-orange-500 translate-y-full"
                }`}
              />

              {/* Icon container */}
              <div className="relative z-10 flex items-center justify-center">
                <div
                  className={`transition-all duration-300 ${
                    theme === "light" ? "rotate-0 scale-100" : "rotate-180 scale-0"
                  } absolute`}
                >
                  <Moon size={20} />
                </div>
                <div
                  className={`transition-all duration-300 ${
                    theme === "dark" ? "rotate-0 scale-100" : "-rotate-180 scale-0"
                  } absolute`}
                >
                  <Sun size={20} />
                </div>
              </div>

              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-xl bg-white/20 animate-ping" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              disabled={isTransitioning}
              className="group relative p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 overflow-hidden"
              aria-label="Toggle theme"
            >
              {/* Background animation */}
              <div
                className={`absolute inset-0 transition-transform duration-500 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 translate-y-0"
                    : "bg-gradient-to-r from-yellow-400 to-orange-500 translate-y-full"
                }`}
              />

              {/* Icon container */}
              <div className="relative z-10 flex items-center justify-center">
                <div
                  className={`transition-all duration-300 ${
                    theme === "light" ? "rotate-0 scale-100" : "rotate-180 scale-0"
                  } absolute`}
                >
                  <Moon size={20} />
                </div>
                <div
                  className={`transition-all duration-300 ${
                    theme === "dark" ? "rotate-0 scale-100" : "-rotate-180 scale-0"
                  } absolute`}
                >
                  <Sun size={20} />
                </div>
              </div>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
