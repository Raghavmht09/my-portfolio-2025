'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Award, GraduationCap, Users, Star, Calendar } from 'lucide-react'

const achievements = [
  {
    id: "best-mentor",
    title: "Best Mentor Award",
    description: "Awarded Best Mentor in Mastering PM cohort for mentoring 20-25 aspiring Product Managers",
    year: "2024",
    category: "award",
    organization: "Rethink Systems",
    icon: <Trophy className="h-6 w-6" />,
    details: "Recognized for exceptional mentorship and guidance to aspiring product managers",
    color: "bg-yellow-500/10 border-yellow-200 text-yellow-800 dark:text-yellow-300"
  },
  {
    id: "capstone-winner",
    title: "Capstone Project Winner",
    description: "Winner of Capstone Project in Advanced PM skillset program",
    year: "2024",
    category: "award",
    organization: "Product Faculty",
    icon: <Award className="h-6 w-6" />,
    details: "Led and delivered winning project demonstrating advanced product management skills",
    color: "bg-blue-500/10 border-blue-200 text-blue-800 dark:text-blue-300"
  },
  {
    id: "ai-pm-cert",
    title: "AI Product Management Certification",
    description: "Completed advanced certification in AI Product Management",
    year: "2024",
    category: "certification",
    organization: "Product Faculty",
    instructor: "Mindad Jafri",
    icon: <GraduationCap className="h-6 w-6" />,
    details: "Specialized training in AI/ML product development and strategy",
    color: "bg-purple-500/10 border-purple-200 text-purple-800 dark:text-purple-300"
  },
  {
    id: "advanced-pm",
    title: "Advanced Product Management",
    description: "Completed comprehensive advanced product management program",
    year: "2024",
    category: "certification",
    organization: "Product Faculty",
    icon: <GraduationCap className="h-6 w-6" />,
    details: "Deep dive into advanced PM frameworks, strategy, and execution",
    color: "bg-green-500/10 border-green-200 text-green-800 dark:text-green-300"
  },
  {
    id: "mastering-pm",
    title: "Mastering Product Management Cohort",
    description: "Completed intensive product management bootcamp and mentored fellow participants",
    year: "2024",
    category: "certification",
    organization: "Rethink Systems",
    icon: <Users className="h-6 w-6" />,
    details: "Comprehensive PM training with focus on practical application and mentorship",
    color: "bg-indigo-500/10 border-indigo-200 text-indigo-800 dark:text-indigo-300"
  },
  {
    id: "btech",
    title: "B.Tech Information Technology",
    description: "Bachelor of Technology in Information Technology",
    year: "2021",
    category: "certification",
    organization: "Guru Gobind Singh Indraprastha University",
    icon: <GraduationCap className="h-6 w-6" />,
    details: "Strong foundation in technology and software development",
    color: "bg-slate-500/10 border-slate-200 text-slate-800 dark:text-slate-300"
  }
]

const categoryIcons = {
  award: <Trophy className="h-4 w-4" />,
  certification: <GraduationCap className="h-4 w-4" />,
  project: <Star className="h-4 w-4" />
}

export function Achievements() {
  const awards = achievements.filter(a => a.category === "award")
  const certifications = achievements.filter(a => a.category === "certification")

  return (
    <section id="achievements" className="section-spacing bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-heading mb-6">
            Achievements & <span className="text-primary font-display">Certifications</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto text-balance">
            Recognition for excellence in product management, mentorship, and continuous learning
            in the evolving landscape of AI-powered products.
          </p>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold">Awards & Recognition</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="text-primary bg-primary/10 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <Badge variant="outline" className={achievement.color}>
                        <Calendar className="h-3 w-3 mr-1" />
                        {achievement.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">
                      {achievement.organization}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      {achievement.description}
                    </p>
                    <p className="text-sm text-foreground/80">
                      {achievement.details}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold">Education & Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="text-primary bg-primary/10 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <Badge variant="outline" className={achievement.color}>
                        {achievement.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {achievement.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {achievement.organization}
                    </p>
                    {achievement.instructor && (
                      <p className="text-xs text-muted-foreground">
                        Instructor: {achievement.instructor}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      {achievement.details}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">PMs Mentored</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Recent Year</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}