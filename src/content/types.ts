export type Lang = 'pt' | 'en'

export interface ProjectLink {
  label: string
  href: string
  primary?: boolean
}

export interface Project {
  name: string
  description: string
  tags: string[]
  image: string
  imageAlt: string
  links: ProjectLink[]
  note?: string
}

export type HighlightIcon = 'workflow' | 'plug' | 'check' | 'users'
export type SkillGroupIcon = 'work' | 'code' | 'study'

export interface CaseStudy {
  docTitle: string
  badges: string[]
  title: string
  subtitle: string
  intro: string
  videoAria: string
  links: { download: string; web: string; code: string; api: string }
  problem: { title: string; text: string }
  solution: { title: string; features: string[] }
  role: { title: string; text: string }
  decisions: { title: string; items: { title: string; text: string }[] }
  architecture: {
    title: string
    text: string
    app: string
    appItems: string[]
    api: string
    apiLayers: string[]
    database: string
    services: { name: string; detail: string }[]
    ci: string
  }
  numbers: { title: string; items: { value: string; label: string }[] }
  learnings: { title: string; items: string[] }
  next: { title: string; items: string[] }
  cta: { title: string; text: string; button: string }
}

export interface Content {
  docTitle: string
  ui: {
    skipToContent: string
    openMenu: string
    closeMenu: string
    toDark: string
    toLight: string
    switchLang: string
    otherLang: string
    backToPortfolio: string
    copyHint: string
    copied: string
    builtWith: string
    seeCode: string
  }
  nav: { id: string; label: string }[]
  hero: {
    hello: string
    photoAlt: string
    role: string
    tagline: string
    lead: string
    ctaProjects: string
    ctaCv: string
    videoChip: string
    videoAria: string
  }
  experience: {
    title: string
    role: string
    roleNote: string
    company: string
    period: string
    context: string
    bullets: string[]
    tags: string[]
    educationTitle: string
    education: { period: string; title: string; detail: string }[]
  }
  projects: {
    title: string
    featured: {
      badges: string[]
      name: string
      paragraphs: string[]
      tags: string[]
      note: string
      apiDocs: string
      caseStudy: string
      download: string
      code: string
      imageAlt: string
    }
    items: Project[]
  }
  skills: {
    title: string
    highlights: { icon: HighlightIcon; title: string; text: string }[]
    groups: { icon: SkillGroupIcon; title: string; tags: string[] }[]
  }
  about: { title: string; paragraphs: string[]; location: string; languages: string }
  contact: { title: string; lead: string; gmail: string }
  caseStudy: CaseStudy
}
