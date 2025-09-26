"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, GithubIcon, Linkedin } from 'lucide-react'
import Link from "next/link"
import { useContent } from "@/components/content-provider"
import { Reveal } from "@/components/reveal"

export function Hero() {
  const { content } = useContent()
  const { name, role, summary, social } = content.portfolio

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.10),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24 grid gap-10 md:grid-cols-[1.2fr_1fr] items-center">
        <div className="order-2 md:order-1">
          <Reveal as="div" direction="up" delay={50}>
            <h1 id="hero-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              <span
                className="bg-[linear-gradient(90deg,#111827,#10b981,#111827)] dark:bg-[linear-gradient(90deg,#e5e7eb,#10b981,#e5e7eb)] bg-clip-text text-transparent bg-[length:200%_100%]"
                style={{ animation: "name-gradient 8s ease-in-out infinite" }}
              >
                {name}
              </span>
            </h1>
          </Reveal>
          <Reveal as="p" direction="up" delay={120}>
            <span className="mt-2 block text-lg md:text-xl text-muted-foreground">{role}</span>
          </Reveal>
          <Reveal as="p" direction="up" delay={200}>
            <span className="mt-6 block text-base md:text-lg leading-relaxed text-muted-foreground">
              {summary}
            </span>
          </Reveal>

          <Reveal as="div" direction="up" delay={280}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href="#projects">
                  View projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/Stefano_Racca_CV.pdf" download aria-label="Download resume">
                  Download resume
                </a>
              </Button>
              <div className="flex items-center gap-2 ml-1">
                <Button asChild variant="ghost" size="icon" aria-label="GitHub">
                  <Link href={social.github} target="_blank" rel="noreferrer">
                    <GithubIcon className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
                  <Link href={social.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal as="div" direction="right" delay={120} className="order-1 md:order-2 flex justify-center">
          <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full ring-1 ring-border overflow-hidden transition-transform duration-500 will-change-transform hover:scale-[1.03]">
            <Image
              src="/Stefano_Racca_Hero_Banner.jpeg"
              alt="Portrait of the site owner"
              fill
              className="object-cover scale-180 ml-[-15px] mt-[10px]"
              sizes="(min-width: 768px) 256px, 192px"
              priority
            />
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        @keyframes name-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}
