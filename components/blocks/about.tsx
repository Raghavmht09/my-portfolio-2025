'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Calendar, Users, TrendingUp } from 'lucide-react'

const timelineData = [
  {
    period: "2024–Present",
    title: "Product Manager & iPaaS Leadership",
    company: "Increff",
    description: [
      "Promoted to Product Manager in 2024, managing the API iPaaS platform (Channel Connect)",
      "Building AI-first features across WMS & OMS: smart picking, robotics integration, dynamic order routing",
      "Developing AI-powered insights from in-store customer feedback",
      "Leading API dashboards, health metrics, monitoring, and alerting systems for integrations"
    ],
    icon: <TrendingUp className="h-5 w-5" />,
    color: "bg-primary"
  },
  {
    period: "2023–2024",
    title: "Transition to Product Management",
    company: "Increff",
    description: [
      "Promoted to Associate Product Manager in 2023",
      "Improved internal processes and API documentation",
      "Delivered key WMS features: B2B item management, palletization, expiry workflows",
      "Contributed to OMS enhancements: dynamic splitting routing engine, manufacturable product definition, rule-based order orchestration",
      "Drove the Store Fulfillment Solution as a 0-to-1 product"
    ],
    icon: <CheckCircle className="h-5 w-5" />,
    color: "bg-secondary"
  },
  {
    period: "2021–2022",
    title: "Customer Success",
    company: "Increff",
    description: [
      "Joined as Customer Success Executive in 2021, handling support issues and deeply learning the product",
      "Delivered training sessions for customer teams and collaborated cross-functionally to resolve high-priority issues",
      "Promoted to Team Leader in 2022, managing a portfolio of 18 enterprise customers (e.g., Puma, Adidas, Aditya Birla Fashion, Urban Lifestyle Brands)",
      "Led a team of eight senior executives handling enterprise accounts. Focused on relationship building, quarterly reviews, upselling/cross-selling, trainings, and adoption of new WMS/OMS features"
    ],
    icon: <Users className="h-5 w-5" />,
    color: "bg-muted"
  }
]

const keyStats = [
  { label: "Years of Experience", value: "4.5+", icon: <Calendar className="h-6 w-6" /> },
  { label: "Enterprise Customers", value: "18", icon: <Users className="h-6 w-6" /> },
  { label: "Team Members Led", value: "8", icon: <CheckCircle className="h-6 w-6" /> },
  { label: "Products Built", value: "0→1", icon: <TrendingUp className="h-6 w-6" /> },
]

export function About() {
  return (
    <section id="about" className="section-spacing bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-heading mb-6">
            About <span className="text-primary font-display">Me</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto text-balance">
            A Product Manager with 4.5+ years of experience spanning Customer Success, Product Management,
            and AI-led fulfillment systems. My journey includes managing enterprise portfolios, leading teams,
            and building zero-to-one products in WMS, OMS, and iPaaS.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {keyStats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold mb-4">Career Journey</h3>
            <p className="text-muted-foreground">
              From Customer Success to Product Leadership
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full ${item.color} border-4 border-background z-10`}>
                </div>

                {/* Content */}
                <Card className="ml-20 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-primary">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <p className="text-muted-foreground font-medium">{item.company}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}