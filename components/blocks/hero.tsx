'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowDown, ExternalLink, LinkedinIcon } from 'lucide-react'

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <h1 className="text-hero text-balance mb-6">
              <span className="text-foreground font-ui">Hi, I&apos;m </span>
              <span className="font-display text-primary">Raghav Mehta</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <p className="text-subheading text-muted-foreground mb-8 text-balance">
              Product Manager specializing in{' '}
              <span className="text-primary font-semibold">AI-powered innovation</span> and{' '}
              <span className="text-primary font-semibold">B2B SaaS solutions</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.15, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <p className="text-body-large text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
              4.5+ years of experience spanning Customer Success, Product Management, and AI-led fulfillment systems.
              Building zero-to-one products in WMS, OMS, and iPaaS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/raghav-mehta-58394015b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.25, ease: [0.4, 0.0, 0.2, 1] }}
            className="flex justify-center"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection('about')}
              className="animate-bounce"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/20 rounded-full animate-pulse delay-500" />
    </section>
  )
}