"use client"

import { useEffect, useState } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills one by one
          const skills = ["React", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Git", "Figma"]
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => [...prev, skill])
            }, index * 200)
          })
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("skills")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", level: 90, color: "from-yellow-500 to-orange-500" },
        { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-800" },
        { name: "Tailwind CSS", level: 90, color: "from-teal-500 to-green-500" },
      ],
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Next.js", level: 88, color: "from-gray-700 to-gray-900" },
        { name: "Node.js", level: 80, color: "from-green-600 to-green-800" },
        { name: "Git", level: 85, color: "from-red-500 to-red-700" },
        { name: "Figma", level: 75, color: "from-purple-500 to-pink-500" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className="bg-blue-500 animate-pulse"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 animate-slide-in-left">
                  {category.title}
                </h3>

                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2 group">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${
                          animatedSkills.includes(skill.name) ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          width: animatedSkills.includes(skill.name) ? `${skill.level}%` : "0%",
                        }}
                      >
                        <div className="absolute inset-0 bg-white opacity-30 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
