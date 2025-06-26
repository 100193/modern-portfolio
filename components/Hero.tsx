"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentRole, setCurrentRole] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const indexRef = useRef(0) // huidige positie in de tekst
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const roles = ["Creative Developer", "Digital Innovator", "UI/UX Enthusiast", "Problem Solver"]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    function handleTyping() {
      const currentRoleText = roles[currentRole]

      if (isTyping) {
        // Typen
        if (indexRef.current < currentRoleText.length) {
          setTypedText(currentRoleText.slice(0, indexRef.current + 1))
          indexRef.current++
          timeoutRef.current = setTimeout(handleTyping, 100)
        } else {
          // Wacht 2 seconden als klaar met typen
          timeoutRef.current = setTimeout(() => {
            setIsTyping(false)
            timeoutRef.current = setTimeout(handleTyping, 50)
          }, 2000)
        }
      } else {
        // Wissen
        if (indexRef.current > 0) {
          setTypedText(currentRoleText.slice(0, indexRef.current - 1))
          indexRef.current--
          timeoutRef.current = setTimeout(handleTyping, 50)
        } else {
          // Naar volgende rol en weer typen
          setIsTyping(true)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }

    // Start de typing animatie
    timeoutRef.current = setTimeout(handleTyping, 500)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [currentRole, isTyping])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-2 animate-slide-up">
              Alec <span className="text-blue-600 dark:text-blue-400 animate-pulse">de Man</span>
            </h1>
            <div className="h-8 md:h-10">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                {typedText}
                <span className="animate-blink">|</span>
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
            Bringing innovative digital experiences to life with modern technologies. Passionate about creative
            solutions and exceptional user interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-1000">
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors group"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} className="group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
