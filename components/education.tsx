"use client"

import { useContent } from "@/components/content-provider"
import { Reveal } from "@/components/reveal"

export function Education() {
  const { content } = useContent()
  const { education } = content

  return (
    <section id="education" aria-labelledby="education-heading" className="border-b">
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 id="education-heading" className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
          Education
        </h2>
        <ol className="relative border-l pl-6">
          {education.map((item, idx) => (
            <Reveal as="li" key={item.institution + idx} delay={idx * 90} direction="up" className="relative mb-10">
              <div className="absolute left-0 mt-1 h-3 w-3 -translate-x-7.5 rounded-full bg-foreground" aria-hidden="true" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <div className="font-medium">
                  {item.degree} • {item.institution}
                </div>
                <div className="text-xs text-muted-foreground">{item.period}</div>
              </div>
              <div className="text-xs text-muted-foreground">{item.location}</div>
              {item.items && item.items.length > 0 && (
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                  {item.items.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}


