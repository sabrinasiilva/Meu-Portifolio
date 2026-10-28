import { BookOpen, Briefcase, CircleCheck, Code, Plug, Users, Workflow, type LucideIcon } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import type { HighlightIcon, SkillGroupIcon } from '../content/types'
import { Reveal, Section, Tags } from './ui'

const iconesDestaque: Record<HighlightIcon, LucideIcon> = {
  workflow: Workflow,
  plug: Plug,
  check: CircleCheck,
  users: Users,
}

const iconesGrupo: Record<SkillGroupIcon, LucideIcon> = {
  work: Briefcase,
  code: Code,
  study: BookOpen,
}

export function Skills() {
  const { skills: s } = usePreferences().t

  return (
    <Section id="skills" title={s.title}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {s.highlights.map(item => {
          const Icone = iconesDestaque[item.icon]
          return (
            <Reveal key={item.title}>
              <div className="flex h-full flex-col gap-2.5 rounded-3xl bg-surface p-6">
                <span className="grid size-10 place-items-center rounded-xl bg-linear-to-br from-brand-blue to-brand-pink text-white">
                  <Icone className="size-5" aria-hidden />
                </span>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          )
        })}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {s.groups.map(grupo => {
          const Icone = iconesGrupo[grupo.icon]
          return (
            <Reveal key={grupo.title}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-line p-6">
                <h3 className="flex items-center gap-2.5 font-semibold">
                  <Icone className="size-5 text-muted" aria-hidden /> {grupo.title}
                </h3>
                <Tags items={grupo.tags} />
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
