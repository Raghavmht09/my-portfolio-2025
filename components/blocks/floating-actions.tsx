'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, LinkedinIcon, ArrowUp, Mail } from 'lucide-react'

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Main Contact FAB */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={scrollToContact}
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl elevation-3 hover:scale-110 transition-all duration-200 group"
          aria-label="Contact me"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
        </Button>
      </motion.div>

      {/* Secondary Actions */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }}
        className="fixed bottom-6 left-6 z-50 flex flex-col gap-3"
      >
        {/* LinkedIn */}
        <Button
          asChild
          variant="outline"
          size="icon"
          className="rounded-full w-12 h-12 shadow-md hover:shadow-lg bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:scale-110 transition-all duration-200 group"
        >
          <a
            href="https://www.linkedin.com/in/raghav-mehta-58394015b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
          </a>
        </Button>

        {/* Email */}
        <Button
          asChild
          variant="outline"
          size="icon"
          className="rounded-full w-12 h-12 shadow-md hover:shadow-lg bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:scale-110 transition-all duration-200 group"
        >
          <a
            href="mailto:raghavmht9@gmail.com"
            aria-label="Send email"
          >
            <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
          </a>
        </Button>
      </motion.div>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
            className="fixed bottom-24 right-6 z-50"
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 shadow-md hover:shadow-lg bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:scale-110 transition-all duration-200 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}