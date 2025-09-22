'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Award, GraduationCap, Users, Star } from 'lucide-react'

const achievements = [
  {
    id: "best-mentor",
    title: "Best Mentor Award",
    organization: "Rethink Systems",
    year: "2024",
    category: "award",
    description: "Recognized for mentoring 20-25 aspiring Product Managers",
    icon: <Trophy className="h-5 w-5" />,
    color: "bg-yellow-500/10 border-yellow-200 text-yellow-800 dark:text-yellow-300"
  },
  {
    id: "capstone-winner",
    title: "Capstone Project Winner",
    organization: "Product Faculty",
    year: "2024",
    category: "award",
    description: "Winner of Advanced PM skillset program",
    icon: <Award className="h-5 w-5" />,
    color: "bg-blue-500/10 border-blue-200 text-blue-800 dark:text-blue-300"
  },
  {
    id: "ai-pm-cert",
    title: "AI Product Management",
    organization: "Product Faculty",
    year: "2024",
    category: "certification",
    description: "Advanced certification with Mindad Jafri",
    icon: <GraduationCap className="h-5 w-5" />,
    color: "bg-purple-500/10 border-purple-200 text-purple-800 dark:text-purple-300"
  },
  {
    id: "advanced-pm",
    title: "Advanced Product Management",
    organization: "Product Faculty",
    year: "2024",
    category: "certification",
    description: "Comprehensive PM program completion",
    icon: <GraduationCap className="h-5 w-5" />,
    color: "bg-green-500/10 border-green-200 text-green-800 dark:text-green-300"
  }
]

const quickStats = [
  { label: "PMs Mentored", value: "25+", icon: <Users className="h-4 w-4" /> },
  { label: "Certifications", value: "4", icon: <GraduationCap className="h-4 w-4" /> },
  { label: "Awards Won", value: "2", icon: <Trophy className="h-4 w-4" /> },
  { label: "Active Year", value: "2024", icon: <Star className="h-4 w-4" /> },
]

export function CompactAchievements() {
  return (
    <section id="achievements" className="py-16 md:py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.4, 0.0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & <span className="text-primary font-display">Recognition</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in product management, mentorship, and continuous learning
            in AI-powered product development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Achievements Grid - Left Side */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-200 hover:scale-[1.02] group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-200">
                          {achievement.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-semibold leading-tight">{achievement.title}</h3>
                            <Badge variant="outline" className={achievement.color}>
                              {achievement.year}
                            </Badge>
                          </div>

                          <p className="text-sm text-muted-foreground font-medium mb-2">
                            {achievement.organization}
                          </p>

                          <p className="text-sm text-foreground/80">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Education Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <Card className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Education Foundation</h3>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">B.Tech Information Technology</div>
                    <div className="text-muted-foreground">Guru Gobind Singh Indraprastha University</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quick Stats - Right Side */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-6">Quick Stats</h3>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 mb-8">
                {quickStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center p-4 hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-0">
                        <div className="text-primary mb-2 flex justify-center">
                          {stat.icon}
                        </div>
                        <div className="text-xl font-bold text-primary mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Mentorship Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-0 text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Mentorship Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      Mentored 25+ aspiring Product Managers and received Best Mentor recognition
                      for exceptional guidance and support.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-primary/5 rounded-full px-6 py-3 border border-primary/20">
            <Trophy className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              <span className="text-primary font-bold">2024</span> - Year of recognition and growth in AI Product Management
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}