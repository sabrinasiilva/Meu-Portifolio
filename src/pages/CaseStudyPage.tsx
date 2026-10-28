import type { ReactNode } from 'react'
import { ArrowDown, ArrowRight, Database, Download, GitBranch, Server, Smartphone } from 'lucide-react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { PhoneVideo } from '../components/PhoneVideo'
import { Badge, ButtonLink, Reveal } from '../components/ui'
import { usePreferences } from '../context/Preferences'
import { links } from '../content'
import type { CaseStudy } from '../content/types'
import { asset } from '../lib/asset'

function Bloco({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal className="py-10 sm:py-12">
      <h2 className="mb-5 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {children}
    </Reveal>
  )
}

function Caixa({ titulo, icone, children }: { titulo: string; icone: ReactNode; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-line bg-bg p-4">
      <p className="flex items-center gap-2 font-semibold">
        {icone}
        {titulo}
      </p>
      {children}
    </div>
  )
}

function Seta() {
  return (
    <div className="grid place-items-center text-muted" aria-hidden>
      <ArrowDown className="size-5 lg:hidden" />
      <ArrowRight className="hidden size-5 lg:block" />
    </div>
  )
}

function Arquitetura({ a }: { a: CaseStudy['architecture'] }) {
  const item = 'rounded-lg bg-surface px-3 py-2 text-sm'
  return (
    <div className="rounded-3xl border border-line bg-surface/60 p-4 sm:p-6">
      <div className="grid items-center gap-3 lg:grid-cols-[1fr_auto_1.2fr_auto_1fr]">
        <Caixa titulo={a.app} icone={<Smartphone className="size-5 text-brand-blue" aria-hidden />}>
          <ul className="flex flex-col gap-2">
            {a.appItems.map(texto => (
              <li key={texto} className={item}>
                {texto}
              </li>
            ))}
          </ul>
        </Caixa>
        <Seta />
        <Caixa titulo={a.api} icone={<Server className="size-5 text-brand-pink" aria-hidden />}>
          <ol className="flex flex-col gap-2">
            {a.apiLayers.map((camada, i) => (
              <li key={camada} className={`${item} border-l-4`} style={{ borderLeftColor: ['#009dff', '#8a4fff', '#ff00ff'][i] }}>
                {camada}
              </li>
            ))}
          </ol>
        </Caixa>
        <Seta />
        <div className="flex flex-col gap-3">
          <Caixa titulo={a.database} icone={<Database className="size-5 text-muted" aria-hidden />} />
          <ul className="grid gap-2">
            {a.services.map(s => (
              <li key={s.name} className="rounded-xl border border-line bg-bg px-3 py-2 text-sm">
                <span className="font-medium">{s.name}</span>
                <span className="text-muted"> · {s.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-dashed border-line px-3 py-2.5 text-center text-sm text-muted">
        <GitBranch className="size-4 shrink-0" aria-hidden /> {a.ci}
      </p>
    </div>
  )
}

export function CaseStudyPage() {
  const { t } = usePreferences()
  const c = t.caseStudy

  return (
    <>
      <Header variant="case" />
      <main id="conteudo">
        <section className="mx-auto grid max-w-[1080px] items-center gap-12 px-4 pt-32 pb-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col items-start gap-5">
            <ul className="flex flex-wrap gap-2">
              {c.badges.map((badge, i) => (
                <Badge key={badge} live={i === 0}>
                  {badge}
                </Badge>
              ))}
            </ul>
            <div>
              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">{c.title}</h1>
              <p className="text-gradient mt-2 w-fit text-xl font-medium sm:text-2xl">{c.subtitle}</p>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted">{c.intro}</p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={links.co2bank.apk} primary>
                <Download className="size-4" aria-hidden /> {c.links.download}
              </ButtonLink>
              <ButtonLink href={links.co2bank.web} external>
                {c.links.web}
              </ButtonLink>
              <ButtonLink href={links.co2bank.code} external>
                {c.links.code}
              </ButtonLink>
            </div>
            <a href={links.co2bank.api} target="_blank" rel="noopener" className="border-b border-line text-sm text-muted transition hover:border-ink hover:text-ink">
              {c.links.api}
            </a>
          </div>
          <PhoneVideo ariaLabel={c.videoAria} />
        </section>

        <div className="mx-auto max-w-3xl divide-y divide-line px-4 pb-10 sm:px-6">
          <Bloco title={c.problem.title}>
            <p className="text-lg leading-relaxed">{c.problem.text}</p>
          </Bloco>

          <Bloco title={c.solution.title}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {c.solution.features.map(texto => (
                <li key={texto} className="rounded-2xl bg-surface p-4 text-[0.95rem] leading-relaxed">
                  {texto}
                </li>
              ))}
            </ul>
          </Bloco>

          <Bloco title={c.role.title}>
            <p className="text-lg leading-relaxed">{c.role.text}</p>
          </Bloco>

          <Bloco title={c.decisions.title}>
            <div className="grid gap-4 sm:grid-cols-2">
              {c.decisions.items.map((d, i) => (
                <article key={d.title} className="flex flex-col gap-2 rounded-2xl border border-line p-5">
                  <span className="text-gradient w-fit text-sm font-semibold">0{i + 1}</span>
                  <h3 className="font-semibold">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{d.text}</p>
                </article>
              ))}
            </div>
          </Bloco>
        </div>

        <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
          <Reveal className="py-10 sm:py-12">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl">{c.architecture.title}</h2>
              <p className="mb-6 leading-relaxed text-muted">{c.architecture.text}</p>
            </div>
            <Arquitetura a={c.architecture} />
          </Reveal>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-line px-4 sm:px-6">
          <Bloco title={c.numbers.title}>
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {c.numbers.items.map(n => (
                <div key={n.label} className="rounded-2xl bg-surface p-4">
                  <dt className="sr-only">{n.label}</dt>
                  <dd>
                    <span className="text-gradient block w-fit text-3xl font-semibold">{n.value}</span>
                    <span className="mt-1 block text-sm leading-snug text-muted">{n.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Bloco>

          <Bloco title={c.learnings.title}>
            <ul className="flex flex-col gap-3">
              {c.learnings.items.map(texto => (
                <li key={texto} className="relative pl-6 text-lg leading-relaxed before:absolute before:top-[0.7em] before:left-0 before:size-2 before:rounded-full before:bg-linear-to-r before:from-brand-blue before:to-brand-pink">
                  {texto}
                </li>
              ))}
            </ul>
          </Bloco>

          <Bloco title={c.next.title}>
            <ul className="flex flex-col gap-2 text-muted">
              {c.next.items.map(texto => (
                <li key={texto}>→ {texto}</li>
              ))}
            </ul>
          </Bloco>
        </div>

        <Reveal className="mx-auto my-16 max-w-3xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-4 rounded-3xl bg-surface px-6 py-10 text-center">
            <h2 className="text-2xl font-semibold">{c.cta.title}</h2>
            <p className="text-muted">{c.cta.text}</p>
            <ButtonLink href={`${asset('')}#contact`} primary>
              {c.cta.button} <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  )
}
