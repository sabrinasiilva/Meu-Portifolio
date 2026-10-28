import { usePreferences } from '../context/Preferences'
import { links } from '../content'

export function Footer() {
  const { t } = usePreferences()

  return (
    <footer className="border-t border-line px-4 py-10 text-center text-sm text-muted">
      <p>© {new Date().getFullYear()} Sabrina Silva</p>
      <p className="mt-1">
        {t.ui.builtWith}{' '}
        <a href={links.portfolioCode} target="_blank" rel="noopener" className="border-b border-line transition hover:border-ink hover:text-ink">
          {t.ui.seeCode}
        </a>
      </p>
    </footer>
  )
}
