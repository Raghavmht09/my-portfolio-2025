import type { Config } from "tailwindcss"

export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6750A4",
          dark: "#D0BCFF",
        },
        secondary: {
          DEFAULT: "#625B71",
          dark: "#CCC2DC",
        },
        surface: {
          DEFAULT: "#FFFBFE",
          dark: "#1C1B1F",
        },
        error: {
          DEFAULT: "#B3261E",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        lg: "16px",
        md: "12px",
        sm: "8px",
        xl: "28px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: { fontSize: "3rem", fontWeight: "700" },
            h2: { fontSize: "2.25rem", fontWeight: "600" },
            h3: { fontSize: "1.5rem", fontWeight: "600" },
            p: { fontSize: "1rem", lineHeight: "1.7" },
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-out",
        "slide-up": "slideUp 0.25s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "slide-down": "slideDown 0.25s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      transitionDuration: {
        "200": "200ms",
        "250": "250ms",
      },
      transitionTimingFunction: {
        "material": "cubic-bezier(0.4, 0.0, 0.2, 1)",
        "material-decelerate": "cubic-bezier(0.0, 0.0, 0.2, 1)",
        "material-accelerate": "cubic-bezier(0.4, 0.0, 1, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config