'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Mail,
  LinkedinIcon,
  MapPin,
  ExternalLink
} from 'lucide-react'

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "raghavmht9@gmail.com",
    href: "mailto:raghavmht9@gmail.com",
    color: "text-blue-600"
  },
  {
    icon: <LinkedinIcon className="h-5 w-5" />,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/raghav-mehta-58394015b/",
    color: "text-blue-700"
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Bangalore, India",
    href: null,
    color: "text-green-600"
  }
]

export function Contact() {

  return (
    <section id="contact" className="section-spacing bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-heading mb-6">
            Let&apos;s <span className="text-primary font-display">Connect</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto text-balance">
            Interested in discussing product opportunities, AI innovation, or just want to chat?
            I&apos;d love to hear from you. Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I&apos;m always open to discussing new opportunities, innovative product ideas,
              or sharing insights about AI-powered solutions in the enterprise space.
              Whether you&apos;re looking for product leadership, strategic guidance, or
              collaboration opportunities, let&apos;s connect!
            </p>
          </motion.div>

          {/* Contact Information - Horizontal Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6 text-center">
                    <div className={`${info.color} bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      {info.icon}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground mb-2">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center justify-center gap-2"
                      >
                        {info.value}
                        {info.href.startsWith('http') && (
                          <ExternalLink className="h-4 w-4" />
                        )}
                      </a>
                    ) : (
                      <div className="text-foreground font-medium">{info.value}</div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto"
              >
                <a href="mailto:raghavmht9@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a
                  href="https://www.linkedin.com/in/raghav-mehta-58394015b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}