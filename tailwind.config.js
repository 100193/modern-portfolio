/** @type {import('tailwindcss').Config} */
const defaultConfig = require("tailwindcss/defaultConfig");
module.exports = {
  ...defaultConfig,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  darkMode: "class",
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1s infinite",
        "slide-up": "slideUp 1s ease-out",
        "slide-in-right": "slideInRight 1s ease-out",
        "slide-in-left": "slideInLeft 1s ease-out",
        "fade-in": "fadeIn 1s ease-out",
        "fade-in-up": "fadeInUp 1s ease-out",
        "bounce-slow": "bounce 2s infinite",
        "spin-slow": "spin 8s linear infinite",
        "spin-reverse": "spinReverse 6s linear infinite",
        shimmer: "shimmer 2s infinite",
        "theme-circle": "themeCircle 0.8s ease-out forwards",
        "theme-ripple": "themeRipple 0.6s ease-out forwards",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        blink: {
          "0%, 50%": {
            opacity: "1",
          },
          "51%, 100%": {
            opacity: "0",
          },
        },
        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInRight: {
          from: {
            opacity: "0",
            transform: "translateX(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        spinReverse: {
          from: {
            transform: "rotate(360deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        themeCircle: {
          "0%": {
            transform: "scale(0) rotate(0deg)",
            opacity: "0",
          },
          "50%": {
            opacity: "0.8",
          },
          "100%": {
            transform: "scale(1.5) rotate(180deg)",
            opacity: "0",
          },
        },
        themeRipple: {
          "0%": {
            transform: "scale(0)",
            opacity: "0.8",
          },
          "100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
}