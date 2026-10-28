import { ArrowRight, Download } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import { links } from '../content'
import { asset } from '../lib/asset'
import { Badge, ButtonLink, Reveal, Section, Tags } from './ui'

export function Projects() {
  const { projects: p } = usePreferences().t
  const f = p.featured

  return (
    <Section id="projects" title={p.title}>
      <Reveal>
        <article className="grid overflow-hidden rounded-3xl border border-line transition hover:-translate-y-1 hover:shadow-xl md:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-4 p-6 sm:p-8">
            <ul className="flex flex-wrap gap-2">
              {f.badges.map((badge, i) => (
                <Badge key={badge} live={i === 0}>
                  {badge}
                </Badge>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold">{f.name}</h3>
            {f.paragraphs.map(texto => (
              <p key={texto} className="text-[0.95rem] leading-relaxed text-muted">
                {texto}
              </p>
            ))}
            <Tags items={f.tags} />
            <div className="mt-auto flex flex-wrap gap-3 pt-2">
              <ButtonLink href={asset('co2bank.html')} primary>
                {f.caseStudy} <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href={links.co2bank.apk}>
                <Download className="size-4" aria-hidden /> {f.download}
              </ButtonLink>
              <ButtonLink href={links.co2bank.code} external>
                {f.code}
              </ButtonLink>
            </div>
            <p className="text-xs text-muted">
              {f.note}{' '}
              <a href={links.co2bank.api} target="_blank" rel="noopener" className="border-b border-line transition hover:border-ink">
                {f.apiDocs}
              </a>
            </p>
          </div>
          <a
            href={asset('co2bank.html')}
            className="order-first flex items-center justify-center border-b border-line bg-surface p-6 md:order-none md:border-b-0 md:border-l"
            aria-label={f.caseStudy}
          >
            <img
              src={asset('co2bank-poster.jpg')}
              alt={f.imageAlt}
              loading="lazy"
              className="w-[200px] rounded-2xl shadow-lg md:w-[230px]"
            />
          </a>
        </article>
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {p.items.map(projeto => (
          <Reveal key={projeto.name}>
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line transition hover:-translate-y-1 hover:shadow-xl">
              <img
                src={asset(projeto.image)}
                alt={projeto.imageAlt}
                loading="lazy"
                className="aspect-[16/10] w-full border-b border-line object-cover object-top"
              />
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-xl font-semibold">{projeto.name}</h3>
                <p className="text-[0.95rem] leading-relaxed text-muted">{projeto.description}</p>
                <Tags items={projeto.tags} />
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  {projeto.links.map(link => (
                    <ButtonLink key={link.href} href={link.href} primary={link.primary} external>
                      {link.label}
                    </ButtonLink>
                  ))}
                </div>
                {projeto.note && <p className="text-xs text-muted">{projeto.note}</p>}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
