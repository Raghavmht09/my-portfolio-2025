'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, TrendingUp, Users, Lightbulb, Calendar } from 'lucide-react'

const careerHighlights = [
  {
    period: "2024–Present",
    role: "Product Manager",
    company: "Increff",
    type: "current",
    highlights: [
      "Leading API iPaaS platform (Channel Connect)",
      "Building AI-first features: smart picking, robotics integration",
      "Developing AI-powered insights from customer feedback"
    ],
    icon: <TrendingUp className="h-4 w-4" />
  },
  {
    period: "2023–2024",
    role: "Associate Product Manager",
    company: "Increff",
    type: "growth",
    highlights: [
      "Delivered key WMS/OMS features",
      "Drove Store Fulfillment Solution (0-to-1 product)",
      "Improved API documentation and processes"
    ],
    icon: <Lightbulb className="h-4 w-4" />
  },
  {
    period: "2021–2022",
    role: "Customer Success Team Leader",
    company: "Increff",
    type: "foundation",
    highlights: [
      "Managed 18 enterprise customers (Puma, Adidas, etc.)",
      "Led team of 8 senior executives",
      "Focused on relationship building and feature adoption"
    ],
    icon: <Users className="h-4 w-4" />
  }
]

const keyAchievements = [
  { metric: "4.5+", label: "Years Experience" },
  { metric: "18", label: "Enterprise Clients" },
  { metric: "25+", label: "PMs Mentored" },
  { metric: "3+", label: "0-to-1 Products" }
]

export function CompactAbout() {
  return (
    <section id="about" className="py-16 md:py-20 bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.4, 0.0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary font-display">Me</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Product Manager with expertise spanning Customer Success, Product Management,
            and AI-led fulfillment systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Career Journey - Left Side */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Career Journey
              </h3>
            </motion.div>

            <div className="space-y-6">
              {careerHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-200 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${
                          item.type === 'current' ? 'bg-primary/10 text-primary' :
                          item.type === 'growth' ? 'bg-blue-500/10 text-blue-600' :
                          'bg-green-500/10 text-green-600'
                        }`}>
                          {item.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <div>
                              <h4 className="font-semibold text-lg">{item.role}</h4>
                              <p className="text-muted-foreground">{item.company}</p>
                            </div>
                            <Badge variant="outline" className="self-start">
                              {item.period}
                            </Badge>
                          </div>

                          <ul className="space-y-2">
                            {item.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Stats - Right Side */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Key Achievements</h3>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 mb-8">
                {keyAchievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center p-4 hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-0">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {achievement.metric}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {achievement.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Education & Certifications Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h4 className="font-semibold mb-4">Education & Certifications</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-medium">B.Tech Information Technology</div>
                        <div className="text-muted-foreground">Guru Gobind Singh Indraprastha University</div>
                      </div>
                      <div>
                        <div className="font-medium">AI Product Management</div>
                        <div className="text-muted-foreground">Product Faculty</div>
                      </div>
                      <div>
                        <div className="font-medium">Best Mentor Award</div>
                        <div className="text-muted-foreground">Mastering PM Cohort</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}