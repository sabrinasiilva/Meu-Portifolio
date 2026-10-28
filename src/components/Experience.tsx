import { usePreferences } from '../context/Preferences'
import { Reveal, Section, Tags } from './ui'

export function Experience() {
  const { experience: e } = usePreferences().t

  return (
    <Section id="experience" title={e.title}>
      <Reveal>
        <article className="flex flex-col gap-5 rounded-3xl border border-line p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold">
                {e.role} <span className="font-normal text-muted">{e.roleNote}</span>
              </h3>
              <p className="font-medium">{e.company}</p>
            </div>
            <span className="text-sm whitespace-nowrap text-muted">{e.period}</span>
          </div>

          <p className="text-muted">{e.context}</p>

          <ul className="flex flex-col gap-2">
            {e.bullets.map(item => (
              <li key={item} className="relative pl-5 before:absolute before:top-[0.65em] before:left-0 before:size-1.5 before:rounded-full before:bg-ink">
                {item}
              </li>
            ))}
          </ul>

          <Tags items={e.tags} />
        </article>
      </Reveal>

      <Reveal className="mt-12">
        <h3 className="mb-5 text-xl font-semibold">{e.educationTitle}</h3>
        <ol className="ml-1 border-l-2 border-line">
          {e.education.map(item => (
            <li key={item.title} className="grid gap-1 py-3 pl-6 sm:grid-cols-[120px_1fr] sm:gap-4">
              <span className="text-sm text-muted">{item.period}</span>
              <div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  )
}
