"use client"

import type React from "react"

import { createContext, useContext } from "react"
import {
  portfolio as defaultPortfolio,
  projects as defaultProjects,
  education as defaultEducation,
  skillsByCategory as defaultSkillsByCategory,
} from "@/lib/portfolio-data"

type Portfolio = typeof defaultPortfolio
type Projects = typeof defaultProjects
type Education = typeof defaultEducation
type SkillsByCategory = typeof defaultSkillsByCategory

export type Content = {
  portfolio: Portfolio
  projects: Projects
  education: Education
  skillsByCategory: SkillsByCategory
}

const DEFAULT_CONTENT: Content = {
  portfolio: defaultPortfolio,
  projects: defaultProjects,
  education: defaultEducation,
  skillsByCategory: defaultSkillsByCategory,
}

type Ctx = {
  content: Content
}

const ContentContext = createContext<Ctx | null>(null)

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const api: Ctx = {
    content: DEFAULT_CONTENT,
  }

  return <ContentContext.Provider value={api}>{children}</ContentContext.Provider>
}

export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error("useContent must be used within ContentProvider")
  return ctx
}
