import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 scroll-smooth">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}


