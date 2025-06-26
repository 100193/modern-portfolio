"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeProviderContext = createContext({
  theme: "light",
  setTheme: () => null,
  isTransitioning: false,
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const toggleTheme = (newTheme) => {
    setIsTransitioning(true)

    // Add transition class to body
    document.body.classList.add("theme-transitioning")

    setTimeout(() => {
      setTheme(newTheme)

      setTimeout(() => {
        setIsTransitioning(false)
        document.body.classList.remove("theme-transitioning")
      }, 500)
    }, 250)
  }

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: toggleTheme,
    isTransitioning,
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
      {/* Theme transition overlay */}
      <div
        className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-500 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full transition-all duration-700 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600"
                  : "bg-gradient-to-r from-yellow-400 to-orange-500"
              } ${isTransitioning ? "animate-theme-circle" : ""}`}
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${0.8 + Math.random() * 0.4}s`,
              }}
            />
          ))}
        </div>

        {/* Ripple effect */}
        <div className={`absolute inset-0 ${isTransitioning ? "animate-theme-ripple" : ""}`}>
          <div
            className={`w-full h-full rounded-full transform scale-0 ${
              theme === "dark"
                ? "bg-gradient-radial from-gray-900 via-gray-800 to-transparent"
                : "bg-gradient-radial from-white via-gray-50 to-transparent"
            }`}
          />
        </div>
      </div>
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
