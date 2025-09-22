'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, Calendar, TrendingUp, Users, Target, CheckCircle2 } from 'lucide-react'

const experienceData = [
  {
    id: "pm-ipaas",
    title: "Product Manager",
    subtitle: "iPaaS Platform Leadership",
    company: "Increff",
    period: "2024 - Present",
    type: "current",
    keyAchievements: [
      "Leading API iPaaS platform (Channel Connect)",
      "Building AI-first features across WMS & OMS",
      "Developing AI-powered customer insights"
    ],
    metrics: [
      { label: "Platform Uptime", value: "99.9%" },
      { label: "AI Features", value: "8+" },
      { label: "Integrations", value: "50+" }
    ],
    skills: ["API Design", "AI/ML", "iPaaS", "Product Strategy"],
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    id: "apm",
    title: "Associate Product Manager",
    subtitle: "Product Development & 0-to-1 Solutions",
    company: "Increff",
    period: "2023 - 2024",
    type: "growth",
    keyAchievements: [
      "Delivered key WMS/OMS features and enhancements",
      "Drove Store Fulfillment Solution (0-to-1 product)",
      "Improved API documentation and internal processes"
    ],
    metrics: [
      { label: "Features Delivered", value: "12+" },
      { label: "Process Efficiency", value: "+40%" },
      { label: "API Coverage", value: "90%" }
    ],
    skills: ["Product Development", "0-to-1 Products", "API Documentation", "Process Improvement"],
    icon: <Target className="h-5 w-5" />
  },
  {
    id: "team-lead",
    title: "Customer Success Team Leader",
    subtitle: "Enterprise Portfolio Management",
    company: "Increff",
    period: "2022 - 2023",
    type: "leadership",
    keyAchievements: [
      "Managed 18 enterprise customers (Puma, Adidas, etc.)",
      "Led team of 8 senior executives",
      "Drove feature adoption and client relationships"
    ],
    metrics: [
      { label: "Enterprise Clients", value: "18" },
      { label: "Team Size", value: "8" },
      { label: "Client Retention", value: "95%" }
    ],
    skills: ["Team Leadership", "Enterprise Accounts", "Relationship Management", "Feature Adoption"],
    icon: <Users className="h-5 w-5" />
  }
]

export function CompactExperience() {
  return (
    <section id="experience" className="py-16 md:py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.4, 0.0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-primary font-display">Experience</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Progressive journey from Customer Success to Product Leadership,
            building AI-powered solutions for enterprise clients.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-all duration-200 hover:scale-[1.01] group overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-12 gap-6 p-6">

                    {/* Left Side - Role Info */}
                    <div className="md:col-span-7">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg group-hover:scale-110 transition-transform duration-200 ${
                          experience.type === 'current' ? 'bg-primary/10 text-primary' :
                          experience.type === 'growth' ? 'bg-blue-500/10 text-blue-600' :
                          'bg-green-500/10 text-green-600'
                        }`}>
                          {experience.icon}
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                            <div>
                              <h3 className="text-xl font-semibold">{experience.title}</h3>
                              <p className="text-muted-foreground font-medium">{experience.subtitle}</p>
                            </div>
                            <Badge variant="outline" className="self-start">
                              {experience.period}
                            </Badge>
                          </div>

                          <div className="flex items-center gap-2 mb-4">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{experience.company}</span>
                          </div>

                          {/* Key Achievements */}
                          <div className="space-y-2">
                            {experience.keyAchievements.map((achievement, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs bg-primary/10 text-primary border-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Right Side - Metrics */}
                    <div className="md:col-span-5">
                      <h4 className="font-semibold mb-4 text-center">Key Metrics</h4>
                      <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
                        {experience.metrics.map((metric, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.1 + i * 0.05 }}
                            viewport={{ once: true }}
                            className="text-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                          >
                            <div className="text-lg font-bold text-primary">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {metric.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-primary/5 rounded-full px-6 py-3 border border-primary/20">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              <span className="text-primary font-bold">4.5+ years</span> of progressive growth from Customer Success to Product Leadership
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}