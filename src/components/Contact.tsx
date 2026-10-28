import { useRef, useState, type MouseEvent } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import { links } from '../content'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './BrandIcons'
import { ButtonLink, Reveal } from './ui'

export function Contact() {
  const { t } = usePreferences()
  const [copiado, setCopiado] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  // Copia o e-mail. Se o navegador não deixar, o link mailto abre normalmente.
  const copiar = async (event: MouseEvent<HTMLAnchorElement>) => {
    if (!navigator.clipboard) return
    event.preventDefault()
    try {
      await navigator.clipboard.writeText(links.email)
      setCopiado(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopiado(false), 2500)
    } catch {
      window.location.href = `mailto:${links.email}`
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-[1080px] px-4 py-20 text-center sm:px-6">
      <Reveal className="flex flex-col items-center gap-5">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.contact.title}</h2>
        <p className="text-muted">{t.contact.lead}</p>

        <a
          href={`mailto:${links.email}`}
          onClick={copiar}
          title={t.ui.copyHint}
          className="group inline-flex items-center gap-3 border-b-2 border-line text-[clamp(1.2rem,4vw,2rem)] font-semibold break-all transition hover:border-ink"
        >
          {links.email}
          {copiado ? (
            <Check className="size-5 shrink-0 text-green-600" aria-hidden />
          ) : (
            <Copy className="size-5 shrink-0 text-muted" aria-hidden />
          )}
        </a>
        <p className="h-5 text-sm font-medium text-green-600" aria-live="polite">
          {copiado ? t.ui.copied : ''}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink href={links.gmail} external>
            <Mail className="size-4" aria-hidden /> {t.contact.gmail}
          </ButtonLink>
          <ButtonLink href={links.linkedin} external>
            <LinkedinIcon className="size-4" /> LinkedIn
          </ButtonLink>
          <ButtonLink href={links.whatsapp} external>
            <WhatsappIcon className="size-4" /> WhatsApp
          </ButtonLink>
          <ButtonLink href={links.github} external>
            <GithubIcon className="size-4" /> GitHub
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  )
}
