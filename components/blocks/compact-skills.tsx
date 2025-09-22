'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Brain, Code, Database, Zap } from 'lucide-react'
import type { Skill } from '@/types'

const skills: Skill[] = [
  // Technical & AI Tools
  { name: "Claude", category: "technical" },
  { name: "OpenAI", category: "technical" },
  { name: "LangGraph", category: "technical" },
  { name: "Cursor", category: "technical" },
  { name: "Lovable", category: "technical" },
  { name: "Ripplet", category: "technical" },

  // Product Management
  { name: "Product Discovery", category: "product" },
  { name: "GTM Strategy", category: "product" },
  { name: "Stakeholder Management", category: "product" },
  { name: "Product Launches", category: "product" },
  { name: "API Documentation", category: "product" },
  { name: "Roadmap Planning", category: "product" },

  // Domain Expertise
  { name: "WMS", category: "domain" },
  { name: "OMS", category: "domain" },
  { name: "iPaaS Integrations", category: "domain" },
  { name: "B2B SaaS", category: "domain" },
  { name: "AI-First Features", category: "domain" },
  { name: "Enterprise Solutions", category: "domain" },
]

const categories = [
  { id: "all", label: "All", icon: <Zap className="h-4 w-4" />, count: skills.length },
  { id: "technical", label: "AI & Technical", icon: <Code className="h-4 w-4" />, count: skills.filter(s => s.category === "technical").length },
  { id: "product", label: "Product Mgmt", icon: <Brain className="h-4 w-4" />, count: skills.filter(s => s.category === "product").length },
  { id: "domain", label: "Domain", icon: <Database className="h-4 w-4" />, count: skills.filter(s => s.category === "domain").length },
]

const categoryColors = {
  technical: "bg-blue-500/10 text-blue-700 border-blue-200 dark:text-blue-300 dark:border-blue-800",
  product: "bg-green-500/10 text-green-700 border-green-200 dark:text-green-300 dark:border-green-800",
  domain: "bg-purple-500/10 text-purple-700 border-purple-200 dark:text-purple-300 dark:border-purple-800",
}

export function CompactSkills() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="py-16 md:py-20 bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.4, 0.0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core <span className="text-primary font-display">Skills</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Comprehensive toolkit spanning AI tools, product management methodologies,
            and enterprise fulfillment domain expertise.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`
                relative flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 shadow-sm
                ${activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg hover:shadow-xl"
                  : "bg-background/80 border-2 border-primary/20 text-foreground hover:border-primary/40 hover:bg-primary/5"
                }
              `}
              size="default"
            >
              <span className={`transition-transform duration-200 ${activeCategory === category.id ? "scale-110" : ""}`}>
                {category.icon}
              </span>
              <span className="whitespace-nowrap">{category.label}</span>
              <Badge
                variant="secondary"
                className={`
                  ml-1 text-xs px-2 py-1 rounded-full min-w-[24px] justify-center
                  ${activeCategory === category.id
                    ? "bg-primary-foreground/20 text-primary-foreground border-0"
                    : "bg-primary/10 text-primary border border-primary/20"
                  }
                `}
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
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
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-200 hover:scale-[1.02] group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-200">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{category.label}</h3>
                        <p className="text-xs text-muted-foreground">{categorySkills.length} skills</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.15, delay: index * 0.03 }}
                        >
                          <Badge
                            variant="outline"
                            className={`text-xs transition-all duration-200 hover:scale-110 ${categoryColors[skill.category]}`}
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

        {/* All Skills Flat View */}
        {activeCategory === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="mt-8"
          >
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4 text-center">All Skills Overview</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.15, delay: index * 0.02 }}
                    >
                      <Badge
                        variant="outline"
                        className={`text-xs transition-all duration-200 hover:scale-110 ${categoryColors[skill.category]}`}
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-primary/5 rounded-full px-6 py-3 border border-primary/20">
            <Brain className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              <span className="text-primary font-bold">{skills.length} skills</span> across technical, product, and domain expertise
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}