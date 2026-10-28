import { Languages, MapPin } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import { Reveal, Section } from './ui'

export function About() {
  const { about: a } = usePreferences().t

  return (
    <Section id="about" title={a.title}>
      <Reveal className="flex max-w-2xl flex-col gap-4 text-lg leading-relaxed">
        {a.paragraphs.map(texto => (
          <p key={texto}>{texto}</p>
        ))}
        <ul className="mt-2 flex flex-wrap gap-x-8 gap-y-2 text-[0.95rem] text-muted">
          <li className="flex items-center gap-2">
            <MapPin className="size-4" aria-hidden /> {a.location}
          </li>
          <li className="flex items-center gap-2">
            <Languages className="size-4" aria-hidden /> {a.languages}
          </li>
        </ul>
      </Reveal>
    </Section>
  )
}
