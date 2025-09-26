"use client"

import { useContent } from "@/components/content-provider"
import { Reveal } from "@/components/reveal"

export function Experience() {
  const { content } = useContent()
  const { experience } = content

  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-b">
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 id="experience-heading" className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
          Experience
        </h2>
        <ol className="relative border-l pl-6">
          {experience.map((item, idx) => (
            <Reveal as="li" key={item.company + idx} delay={idx * 90} direction="up" className="mb-10">
              <div className="absolute left-0 -translate-x-1/2 mt-1 h-3 w-3 rounded-full bg-foreground" aria-hidden="true" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <div className="font-medium">
                  {item.role} • {item.company}
                </div>
                <div className="text-xs text-muted-foreground">{item.period}</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
