'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { motion } from 'framer-motion'
import { ExternalLink, LinkedinIcon, MapPin, Briefcase } from 'lucide-react'

const keyMetrics = [
  { label: "Years Experience", value: 4.5, suffix: "+", icon: <Briefcase className="h-4 w-4" /> },
  { label: "Enterprise Clients", value: 18, suffix: "", icon: <Briefcase className="h-4 w-4" /> },
  { label: "Team Members Led", value: 20, suffix: "", icon: <Briefcase className="h-4 w-4" /> },
  { label: "Products Built", value: 3, suffix: "+", icon: <Briefcase className="h-4 w-4" /> },
]

const specializations = [
  "AI-powered innovation",
  "B2B SaaS solutions",
  "Enterprise fulfillment systems",
  "0-to-1 product development"
]

export function CompactHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/20 rounded-full animate-pulse delay-500" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Profile + Content Combined - Left Side */}
          <div className="order-1 lg:order-1 lg:col-span-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                className="flex-shrink-0"
              >
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48">
                  {/* Simplified border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl" />
                  <div className="absolute inset-1 bg-background rounded-2xl" />

                  {/* Profile image */}
                  <div className="absolute inset-2 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/profile.jpeg"
                      alt="Raghav Mehta - Product Manager"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 768px) 176px, 192px"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Main Content */}
              <div className="flex-1 text-center lg:text-left min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }}
              className="mb-6"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Bangalore, India</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                <span className="text-foreground font-ui">Hi, I&apos;m </span>
                <span className="font-display text-primary">Raghav Mehta</span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Product Manager specializing in{' '}
                <motion.span
                  className="text-primary font-semibold"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  AI-powered innovation
                </motion.span>
                {' '}and B2B SaaS solutions
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="group"
              >
                Get In Touch
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="group"
              >
                <a
                  href="https://www.linkedin.com/in/raghav-mehta-58394015b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
              </div>
            </div>
          </div>

          {/* Metrics Dashboard - Sidebar */}
          <div className="order-2 lg:order-2 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Key Metrics</h3>
                <div className="space-y-4">
                {keyMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/60 border border-border/20 hover:border-primary/30 transition-colors duration-200"
                  >
                    <div className="text-sm text-muted-foreground font-medium">
                      {metric.label}
                    </div>
                    <div className="text-xl font-bold text-primary">
                      <AnimatedCounter
                        to={metric.value}
                        suffix={metric.suffix}
                        duration={1500}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              </div>

              {/* Specializations */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">Specializations</h4>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec, index) => (
                    <motion.span
                      key={spec}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.6 + index * 0.1 }}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                    >
                      {spec}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}