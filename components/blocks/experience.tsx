'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Building2,
  Calendar,
  Users,
  Target,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

const experienceData = [
  {
    id: "pm-ipaas",
    title: "Product Manager - iPaaS Platform",
    company: "Increff",
    period: "2024 - Present",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Leading the API iPaaS platform (Channel Connect) and driving AI-first innovation across WMS & OMS systems.",
    achievements: [
      "Built AI-first features: smart picking, robotics integration, dynamic order routing",
      "Developed AI-powered insights from in-store customer feedback",
      "Led API dashboards, health metrics, monitoring, and alerting systems",
      "Managed end-to-end product lifecycle for enterprise integrations"
    ],
    skills: ["API Design", "iPaaS", "AI/ML", "Product Strategy", "Enterprise Integration"],
    metrics: [
      { label: "Platform Uptime", value: "99.9%" },
      { label: "API Integrations", value: "50+" },
      { label: "AI Features", value: "8" }
    ],
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    id: "apm",
    title: "Associate Product Manager",
    company: "Increff",
    period: "2023 - 2024",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Transitioned to product management, delivering key features across WMS/OMS and launching 0-to-1 products.",
    achievements: [
      "Delivered key WMS features: B2B item management, palletization, expiry workflows",
      "Built OMS enhancements: dynamic splitting routing engine, manufacturable product definition",
      "Drove Store Fulfillment Solution as a 0-to-1 product from concept to launch",
      "Improved internal processes and API documentation"
    ],
    skills: ["Product Development", "API Documentation", "WMS/OMS", "0-to-1 Products", "Process Improvement"],
    metrics: [
      { label: "Features Delivered", value: "12+" },
      { label: "Process Efficiency", value: "+40%" },
      { label: "Documentation Coverage", value: "90%" }
    ],
    icon: <Lightbulb className="h-6 w-6" />
  },
  {
    id: "team-lead",
    title: "Customer Success Team Leader",
    company: "Increff",
    period: "2022 - 2023",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Led customer success operations for enterprise clients, managing a portfolio of 18 major brands.",
    achievements: [
      "Managed portfolio of 18 enterprise customers (Puma, Adidas, Aditya Birla Fashion, etc.)",
      "Led team of 8 senior executives handling enterprise accounts",
      "Focused on relationship building, quarterly reviews, upselling/cross-selling",
      "Drove adoption of new WMS/OMS features across client base"
    ],
    skills: ["Team Leadership", "Enterprise Accounts", "Relationship Management", "Upselling", "Training"],
    metrics: [
      { label: "Enterprise Clients", value: "18" },
      { label: "Team Size", value: "8" },
      { label: "Client Retention", value: "95%" }
    ],
    icon: <Users className="h-6 w-6" />
  },
  {
    id: "cs-exec",
    title: "Customer Success Executive",
    company: "Increff",
    period: "2021 - 2022",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Started customer success journey, handling support issues and learning the product deeply.",
    achievements: [
      "Handled complex support issues and technical troubleshooting",
      "Delivered comprehensive training sessions for customer teams",
      "Collaborated cross-functionally to resolve high-priority issues",
      "Built deep product knowledge across WMS and OMS systems"
    ],
    skills: ["Customer Support", "Technical Training", "Cross-functional Collaboration", "Problem Solving"],
    metrics: [
      { label: "Support Tickets", value: "500+" },
      { label: "Training Sessions", value: "25+" },
      { label: "Resolution Time", value: "-30%" }
    ],
    icon: <Target className="h-6 w-6" />
  }
]

export function Experience() {
  return (
    <section id="experience" className="section-spacing bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-heading mb-6">
            Professional <span className="text-primary font-display">Experience</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto text-balance">
            A progressive journey from Customer Success to Product Leadership,
            building AI-powered solutions and managing enterprise relationships.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="text-primary bg-primary/10 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {experience.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl lg:text-2xl mb-2">
                          {experience.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium">{experience.company}</span>
                          <span>•</span>
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                          <span>•</span>
                          <span>{experience.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 lg:gap-2 lg:text-center">
                      {experience.metrics.map((metric, i) => (
                        <div key={i} className="text-center lg:text-right">
                          <div className="text-lg font-bold text-primary">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Key Achievements
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <ArrowRight className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}