"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  isTransitioning: boolean
}

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
  isTransitioning: false,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>("light")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const setTheme = (newTheme: Theme) => {
    if (newTheme === theme) return
    setIsTransitioning(true)
    setThemeState(newTheme)
    // Stel de overgangsduur in, pas dit aan als je een andere animatieduur hebt
    setTimeout(() => setIsTransitioning(false), 500)
  }

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme,
    isTransitioning,
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
