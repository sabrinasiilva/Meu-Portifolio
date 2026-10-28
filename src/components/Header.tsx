import { useState } from 'react'
import { ArrowLeft, Menu, Moon, Sun, X } from 'lucide-react'
import { usePreferences } from '../context/Preferences'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { links } from '../content'
import { asset } from '../lib/asset'
import { GithubIcon } from './BrandIcons'

export function Header({ variant = 'home' }: { variant?: 'home' | 'case' }) {
  const { t, theme, toggleLang, toggleTheme } = usePreferences()
  const [menuAberto, setMenuAberto] = useState(false)
  const ativo = useScrollSpy(variant === 'home' ? t.nav.map(item => item.id) : [])
  const home = asset('')

  const botaoIcone = 'grid size-9 place-items-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white'

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        {t.ui.skipToContent}
      </a>

      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="relative mx-auto flex max-w-[1080px] items-center justify-between gap-4 rounded-full bg-[#111114]/85 py-2 pr-2 pl-5 text-white shadow-lg backdrop-blur-md dark:bg-[#18181d]/85 dark:ring-1 dark:ring-white/10">
          {variant === 'home' ? (
            <a href="#top" className="font-semibold whitespace-nowrap">
              Sabrina Silva
            </a>
          ) : (
            <a href={home} className="inline-flex items-center gap-2 font-semibold whitespace-nowrap">
              <ArrowLeft className="size-4" aria-hidden />
              {t.ui.backToPortfolio}
            </a>
          )}

          {variant === 'home' && (
            <nav className="hidden md:block" aria-label="Seções">
              <ul className="flex gap-7 text-sm">
                {t.nav.map(item => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={ativo === item.id ? 'true' : undefined}
                      className={`relative py-1 transition after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-linear-to-r after:from-brand-blue after:to-brand-pink after:transition-transform ${
                        ativo === item.id
                          ? 'text-white after:scale-x-100'
                          : 'text-white/75 after:scale-x-0 hover:text-white hover:after:scale-x-100'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleLang}
              aria-label={t.ui.switchLang}
              title={t.ui.switchLang}
              className="h-9 rounded-full px-3 text-xs font-semibold tracking-wide text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {t.ui.otherLang}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t.ui.toLight : t.ui.toDark}
              title={theme === 'dark' ? t.ui.toLight : t.ui.toDark}
              className={botaoIcone}
            >
              {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <a
              href={links.github}
              target="_blank"
              rel="noopener"
              className="ml-1 hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#111114] transition hover:scale-[1.03] sm:inline-flex"
            >
              <GithubIcon className="size-4" /> GitHub
            </a>
            {variant === 'home' && (
              <button
                type="button"
                onClick={() => setMenuAberto(aberto => !aberto)}
                aria-label={menuAberto ? t.ui.closeMenu : t.ui.openMenu}
                aria-expanded={menuAberto}
                aria-controls="menu-celular"
                className={`${botaoIcone} md:hidden`}
              >
                {menuAberto ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            )}
          </div>

          {variant === 'home' && menuAberto && (
            <nav
              id="menu-celular"
              className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-3xl bg-[#18181d] p-3 shadow-xl md:hidden"
            >
              <ul className="flex flex-col text-center">
                {t.nav.map(item => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMenuAberto(false)}
                      className={`block rounded-2xl py-3 transition hover:bg-white/10 ${ativo === item.id ? 'text-white' : 'text-white/75'}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
