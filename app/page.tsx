import { Navbar } from '@/components/blocks/navbar'
import { CompactHero } from '@/components/blocks/compact-hero'
import { CompactAbout } from '@/components/blocks/compact-about'
import { CompactExperience } from '@/components/blocks/compact-experience'
import { CompactSkills } from '@/components/blocks/compact-skills'
import { CompactAchievements } from '@/components/blocks/compact-achievements'
import { Contact } from '@/components/blocks/contact'
import { Footer } from '@/components/blocks/footer'
import { FloatingActions } from '@/components/blocks/floating-actions'

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <CompactHero />
      <CompactAbout />
      <CompactExperience />
      <CompactSkills />
      <CompactAchievements />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  )
}