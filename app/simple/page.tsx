import { Navbar } from '@/components/blocks/navbar'

export default function SimplePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container-custom py-16">
        <h1 className="text-4xl font-bold mb-6">
          Hi, I&apos;m <span className="text-primary">Raghav Mehta</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Product Manager specializing in AI-powered innovation and B2B SaaS solutions
        </p>
        <p className="text-lg text-muted-foreground">
          4.5+ years of experience spanning Customer Success, Product Management, and AI-led fulfillment systems.
        </p>
      </div>
    </main>
  )
}