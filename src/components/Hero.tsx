import { ArrowRight, Download, Mail } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import { links } from '../content'
import { asset } from '../lib/asset'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { PhoneVideo } from './PhoneVideo'
import { ButtonLink } from './ui'

export function Hero() {
  const { t } = usePreferences()
  const { hero } = t

  return (
    <section
      id="top"
      className="mx-auto grid min-h-svh max-w-[1080px] items-center gap-14 px-4 pt-32 pb-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pt-28"
    >
      <div className="flex flex-col items-start gap-5">
        <div className="flex items-center gap-3">
          <img
            src={asset('sabrina.jpg')}
            alt={hero.photoAlt}
            width={56}
            height={56}
            className="size-14 rounded-full object-cover ring-2 ring-line"
          />
          <p className="text-lg text-muted">{hero.hello}</p>
        </div>

        <div>
          <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">Sabrina Silva</h1>
          <p className="text-gradient mt-2 w-fit text-2xl font-medium sm:text-3xl">{hero.role}</p>
        </div>

        <p className="text-xl font-medium sm:text-2xl">{hero.tagline}</p>
        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">{hero.lead}</p>

        <div className="flex flex-wrap gap-3 pt-1">
          <ButtonLink href="#projects" primary>
            {hero.ctaProjects}
          </ButtonLink>
          <ButtonLink href={asset('Sabrina-Silva-Curriculo.pdf')} download="Sabrina-Silva-Curriculo.pdf">
            <Download className="size-4" aria-hidden /> {hero.ctaCv}
          </ButtonLink>
        </div>

        <div className="flex gap-4 pt-1 text-muted">
          <a href={links.github} target="_blank" rel="noopener" aria-label="GitHub" className="transition hover:-translate-y-0.5 hover:text-ink">
            <GithubIcon className="size-6" />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="transition hover:-translate-y-0.5 hover:text-ink">
            <LinkedinIcon className="size-6" />
          </a>
          <a href={links.gmail} target="_blank" rel="noopener" aria-label="E-mail" className="transition hover:-translate-y-0.5 hover:text-ink">
            <Mail className="size-6" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <PhoneVideo ariaLabel={hero.videoAria} />
        <a
          href={asset('co2bank.html')}
          className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium transition hover:border-ink"
        >
          <span className="size-1.5 rounded-full bg-green-600" aria-hidden />
          {hero.videoChip}
          <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
        </a>
      </div>
    </section>
  )
}
