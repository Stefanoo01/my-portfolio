"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, Workflow, Cpu, type LucideIcon } from 'lucide-react'
import { useContent } from "@/components/content-provider"
import { Reveal } from "@/components/reveal"

type CategoryIcon = (props: React.SVGProps<SVGSVGElement>) => JSX.Element

const iconMap: Record<string, CategoryIcon> = {
  "LLMs & GenAI": Brain,
  "Data & Infra": Database,
  "MLOps": Workflow,
  "Systems & Apps": Cpu,
}

export function Skills() {
  const { content } = useContent()
  const { skillsByCategory } = content

  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-b">
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 id="skills-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Skills
            </h2>
            <p className="text-muted-foreground mt-2">
              AI-focused strengths across LLMs, data pipelines, and productionization.
            </p>
          </div>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            Shipping AI to production
          </Badge>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillsByCategory.map((cat, idx) => {
            const Icon = iconMap[cat.name] as LucideIcon | undefined
            return (
              <Reveal key={cat.name} delay={idx * 90} direction="up">
                <Card className="h-full transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      {Icon ? (
                        <div className="rounded-md border bg-background p-2">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                      ) : null}
                      <div>
                        <CardTitle className="text-lg">{cat.name}</CardTitle>
                        <p className="text-xs text-muted-foreground">{cat.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {cat.items.map((item) => (
                      <div key={item.label} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">{item.label}</div>
                          <div className="text-xs text-muted-foreground">{item.level}%</div>
                        </div>
                        <Progress value={item.level} aria-label={`${item.label} proficiency ${item.level} percent`} />
                        {item.note ? (
                          <p className="text-xs text-muted-foreground">{item.note}</p>
                        ) : null}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>

        <Reveal as="div" delay={200} direction="up" className="mt-8 text-sm text-muted-foreground">
          <p>Want a deeper view? Ask for a matrix including datasets, eval metrics, and deployment examples.</p>
        </Reveal>
      </div>
    </section>
  )
}
