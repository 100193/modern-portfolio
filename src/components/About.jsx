"use client"

import { useEffect, useState } from "react"
import { Code, Users, Lightbulb } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ projects: 0, clients: 0, ideas: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          // Animate counters
          const animateCounter = (key, target) => {
            let current = 0
            const increment = target / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
            }, 30)
          }

          setTimeout(() => {
            animateCounter("projects", 10)
            animateCounter("clients", 100)
            animateCounter("ideas", 25)
          }, 500)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Code, label: "Projects Completed", value: `${counters.projects}+`, color: "text-blue-500" },
    { icon: Users, label: "Clients & Collaborators", value: `${counters.clients}+`, color: "text-green-500" },
    { icon: Lightbulb, label: "Unique Ideas Built", value: `${counters.ideas}+`, color: "text-purple-500" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-500 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-purple-500 rounded-full animate-spin-reverse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="relative inline-block mb-8 group">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                  alt="Profile"
                  className="w-72 h-72 rounded-full shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute -inset-4 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 animate-slide-in-right">
                Creative Developer & Digital Innovator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed animate-fade-in-up animation-delay-300">
                As a creative developer, I specialize in bringing unique digital experiences to life using modern
                technologies like React, Next.js, and Tailwind CSS. I'm passionate about combining technical expertise
                with creative vision to build innovative solutions that stand out.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in-up animation-delay-500">
                When I'm not coding, you can find me exploring new design trends, experimenting with emerging
                technologies, or collaborating with other creatives to push the boundaries of what's possible on the
                web.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div
                      key={index}
                      className={`flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left`}
                      style={{ animationDelay: `${(index + 1) * 200}ms` }}
                    >
                      <div className={`p-3 rounded-lg mr-4 ${stat.color} bg-opacity-10`}>
                        <IconComponent className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
