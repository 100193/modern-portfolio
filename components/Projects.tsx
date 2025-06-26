"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Github, Star } from "lucide-react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stars: 124,
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      tech: ["React", "Firebase", "Tailwind CSS"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stars: 89,
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts and charts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      tech: ["Next.js", "Chart.js", "OpenWeather API"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stars: 156,
    },
    {
      title: "Blog Platform",
      description: "A modern blog platform with CMS integration and SEO optimization.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=400&h=300&fit=crop",
      tech: ["Next.js", "Sanity", "Vercel"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stars: 203,
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative design and animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stars: 78,
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tech: ["React", "D3.js", "Express.js"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stars: 92,
    },
  ]

  const categories = ["All", "Frontend", "Full Stack"]
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional web
            experiences.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12 animate-fade-in-up animation-delay-500">
            <div className="flex space-x-4 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-md">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105 ${
                    filter === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star size={12} className="mr-1" />
                      Featured
                    </div>
                  )}
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 flex items-center justify-center space-x-4 ${
                      hoveredProject === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Star size={14} className="mr-1" />
                      {project.stars}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
