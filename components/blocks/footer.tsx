'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-muted/50 border-t border-border/40">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left">
            <Link href="/" className="font-serif text-xl font-semibold mb-2 block">
              Raghav Mehta
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Product Manager specializing in AI-powered innovation and B2B SaaS solutions.
              Building the future of enterprise fulfillment systems.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border/40 text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Raghav Mehta. Built with
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            using Next.js, TypeScript & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}