"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useContent } from "@/components/content-provider"
import { Reveal } from "@/components/reveal"

export function Projects() {
  const { content } = useContent()
  const { projects } = content

  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-b">
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 id="projects-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Selected Work
            </h2>
            <p className="text-muted-foreground mt-2">
              A few projects that showcase my focus on clean design and robust engineering.
            </p>
          </div>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
            {"Let’s collaborate →"}
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 90} direction="up">
              <Card className="overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={
                      p.image ||
                      "/placeholder.svg?height=600&width=1000&query=minimal product ui screenshot" ||
                      "/placeholder.svg"
                    }
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  <CardDescription>{p.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="font-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center">
                  {p.href && p.href !== '#' && (
                    <Link
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
                    >
                      Visit <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  )}
                  {p.repo && (
                    <Link
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
