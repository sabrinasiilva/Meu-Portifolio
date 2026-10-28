import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Aparece com fade e sobe um pouco quando entra na tela. */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisivel(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${visivel ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-[1080px] px-4 py-16 sm:px-6 sm:py-20">
      <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:mb-10 sm:text-4xl">{title}</h2>
      {children}
    </section>
  )
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map(item => (
        <li key={item} className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
          {item}
        </li>
      ))}
    </ul>
  )
}

interface ButtonLinkProps {
  href: string
  children: ReactNode
  primary?: boolean
  external?: boolean
  download?: string
  className?: string
}

export function ButtonLink({ href, children, primary, external, download, className = '' }: ButtonLinkProps) {
  const estilo = primary
    ? 'bg-ink text-bg hover:opacity-85'
    : 'border-[1.5px] border-ink text-ink hover:bg-ink hover:text-bg'
  return (
    <a
      href={href}
      download={download}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition ${estilo} ${className}`}
    >
      {children}
    </a>
  )
}

export function Badge({ children, live }: { children: ReactNode; live?: boolean }) {
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-0.5 text-xs font-medium">
      {live && <span className="size-1.5 rounded-full bg-green-600" aria-hidden />}
      {children}
    </li>
  )
}
