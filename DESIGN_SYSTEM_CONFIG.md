# 🎨 Design System Configuration
## Complete setup guide to replicate this portfolio's design in other projects

---

## 📦 **Required Dependencies**

```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-toast": "^1.1.5",
    "@tailwindcss/typography": "^0.5.13",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "framer-motion": "^11.3.2",
    "lucide-react": "^0.408.0",
    "next": "14.2.5",
    "next-themes": "^0.3.0",
    "tailwind-merge": "^2.4.0",
    "tailwindcss": "^3.4.6"
  }
}
```

---

## 🔤 **Typography & Fonts**

### **Google Fonts Import**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
```

### **Next.js Font Configuration**
```typescript
// app/layout.tsx
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

// In body className:
className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
```

### **Typography Scale**
```css
/* Custom Typography Utilities */
.text-hero {
  @apply text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight;
}

.text-section-heading {
  @apply text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.2] tracking-tight;
}

.text-subheading {
  @apply text-lg sm:text-xl md:text-2xl font-medium leading-[1.4];
}

.text-body-large {
  @apply text-lg leading-[1.6];
}

.text-body {
  @apply text-base leading-[1.7];
}

.text-body-small {
  @apply text-sm leading-[1.6];
}

/* Font Family Utilities */
.font-display {
  font-family: var(--font-playfair);
}

.font-ui {
  font-family: var(--font-inter);
}
```

---

## 🎨 **Color Palette**

### **Material 3 Color Tokens**
```typescript
// tailwind.config.ts
colors: {
  // Material 3 Primary Colors
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
  
  // shadcn/ui Color System (HSL)
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
}
```

### **CSS Custom Properties (Light/Dark Mode)**
```css
@layer base {
  :root {
    /* Light Theme */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    /* Dark Theme */
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}
```

---

## 📐 **Layout & Spacing**

### **Container & Grid System**
```css
.container-custom {
  @apply mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8;
}

.section-spacing {
  @apply py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32;
}

.section-spacing-mobile {
  @apply py-12 sm:py-16;
}
```

### **Material 3 Spacing Scale**
```css
.spacing-xs { @apply p-1; }    /* 4px */
.spacing-sm { @apply p-2; }    /* 8px */
.spacing-md { @apply p-4; }    /* 16px */
.spacing-lg { @apply p-6; }    /* 24px */
.spacing-xl { @apply p-8; }    /* 32px */
```

### **Responsive Breakpoints**
```typescript
// Tailwind default breakpoints
sm: '640px',   // Mobile landscape
md: '768px',   // Tablet
lg: '1024px',  // Desktop
xl: '1280px',  // Large desktop
```

---

## 🎭 **Border Radius & Elevation**

### **Material 3 Border Radius**
```typescript
borderRadius: {
  lg: "16px",    // Material 3 expressive
  md: "12px",
  sm: "8px",
  xl: "28px",    // Extra expressive
}
```

### **Material 3 Elevation Shadows**
```css
.elevation-1 {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
}

.elevation-2 {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
}

.elevation-3 {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23);
}
```

---

## ✨ **Animations & Transitions**

### **Custom Animations**
```typescript
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
```

### **Material 3 Easing Functions**
```typescript
transitionTimingFunction: {
  "material": "cubic-bezier(0.4, 0.0, 0.2, 1)",
  "material-decelerate": "cubic-bezier(0.0, 0.0, 0.2, 1)",
  "material-accelerate": "cubic-bezier(0.4, 0.0, 1, 1)",
},
```

---

## 🛠️ **Complete Tailwind Config**

```typescript
// tailwind.config.ts
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
```

---

## 🧩 **Design Libraries Used**

### **Core UI Framework**
- **shadcn/ui** - Core components with Radix UI primitives
- **Radix UI** - Accessibility-first component primitives
- **Tailwind CSS** - Utility-first CSS framework

### **Component Libraries**
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library
- **next-themes** - Theme switching for Next.js

### **Utility Libraries**
- **clsx** - Conditional className utility
- **tailwind-merge** - Merge Tailwind CSS classes
- **class-variance-authority** - Component variant management

---

## 🚀 **Quick Setup Guide**

1. **Install dependencies:**
```bash
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-slot @radix-ui/react-toast @tailwindcss/typography class-variance-authority clsx framer-motion lucide-react next-themes tailwind-merge tailwindcss
```

2. **Copy the Tailwind config** above to `tailwind.config.ts`

3. **Copy the CSS variables** to your `globals.css`

4. **Set up fonts** in your layout file

5. **Add theme provider** for dark mode support

6. **Use the typography utilities** for consistent text styling

This design system provides a professional, modern, and accessible foundation for any project! 🎨✨
