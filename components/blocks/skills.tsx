'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, Code, Database, Users, Zap } from 'lucide-react'
import type { Skill } from '@/types'

const skills: Skill[] = [
  // Technical & AI Tools
  { name: "Cursor", category: "technical" },
  { name: "Claude", category: "technical" },
  { name: "Lovable", category: "technical" },
  { name: "Ripplet", category: "technical" },
  { name: "LangGraph", category: "technical" },
  { name: "Open LLM Telemetry", category: "technical" },
  { name: "OpenAI", category: "technical" },
  { name: "Anthropic", category: "technical" },

  // Product Management
  { name: "Stakeholder Management", category: "product" },
  { name: "Product Discovery", category: "product" },
  { name: "Product Launches", category: "product" },
  { name: "GTM Strategy", category: "product" },
  { name: "API Documentation", category: "product" },
  { name: "Product Analytics", category: "product" },
  { name: "User Research", category: "product" },
  { name: "Roadmap Planning", category: "product" },

  // Domain Expertise
  { name: "WMS", category: "domain" },
  { name: "OMS", category: "domain" },
  { name: "Store Fulfillment", category: "domain" },
  { name: "iPaaS Integrations", category: "domain" },
  { name: "B2B SaaS", category: "domain" },
  { name: "Enterprise Solutions", category: "domain" },
  { name: "AI-First Features", category: "domain" },
  { name: "Robotics Integration", category: "domain" },
]

const categories = [
  { id: "all", label: "All Skills", icon: <Zap className="h-4 w-4" /> },
  { id: "technical", label: "Technical & AI", icon: <Code className="h-4 w-4" /> },
  { id: "product", label: "Product Management", icon: <Brain className="h-4 w-4" /> },
  { id: "domain", label: "Domain Expertise", icon: <Database className="h-4 w-4" /> },
]

const categoryColors = {
  technical: "bg-blue-500/10 text-blue-700 border-blue-200 dark:text-blue-300 dark:border-blue-800",
  product: "bg-green-500/10 text-green-700 border-green-200 dark:text-green-300 dark:border-green-800",
  domain: "bg-purple-500/10 text-purple-700 border-purple-200 dark:text-purple-300 dark:border-purple-800",
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="section-spacing bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-heading mb-6">
            Core <span className="text-primary font-display">Skills</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto text-balance">
            A comprehensive toolkit spanning technical AI tools, product management methodologies,
            and deep domain expertise in enterprise fulfillment systems.
          </p>
        </motion.div>

        {/* Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center gap-2 rounded-full px-6 py-2 transition-all duration-200 hover:scale-105"
            >
              {category.icon}
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.slice(1).map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category.id)
            const shouldShow = activeCategory === "all" || activeCategory === category.id

            if (!shouldShow) return null

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      {category.icon}
                      {category.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Badge
                            variant="outline"
                            className={`${categoryColors[skill.category]} transition-all duration-200 hover:scale-110`}
                          >
                            {skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* All Skills View - Flat Grid */}
        {activeCategory === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                >
                  <Badge
                    variant="outline"
                    className={`${categoryColors[skill.category]} text-sm px-4 py-2 transition-all duration-200 hover:scale-110`}
                  >
                    {skill.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}