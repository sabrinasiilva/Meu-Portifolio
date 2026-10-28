import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { content } from '../content'
import type { Content, Lang } from '../content/types'

type Theme = 'light' | 'dark'

interface Preferences {
  lang: Lang
  theme: Theme
  t: Content
  toggleLang: () => void
  toggleTheme: () => void
}

const PreferencesContext = createContext<Preferences | null>(null)

// localStorage pode estar bloqueado (aba anônima, cookies desligados): aí só não lembra a escolha
function ler(chave: string) {
  try {
    return localStorage.getItem(chave)
  } catch {
    return null
  }
}

function salvar(chave: string, valor: string) {
  try {
    localStorage.setItem(chave, valor)
  } catch {
    /* sem armazenamento disponível */
  }
}

function idiomaInicial(): Lang {
  const salvo = ler('idioma')
  if (salvo === 'pt' || salvo === 'en') return salvo
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

// O script no <head> já aplicou o tema certo; aqui só lemos o que ele decidiu
function temaInicial(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function PreferencesProvider({ children, page }: { children: ReactNode; page: 'home' | 'case' }) {
  const [lang, setLang] = useState<Lang>(idiomaInicial)
  const [theme, setTheme] = useState<Theme>(temaInicial)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title = page === 'home' ? t.docTitle : t.caseStudy.docTitle
  }, [lang, page, t])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
  }, [theme])

  const toggleLang = () => {
    const novo: Lang = lang === 'pt' ? 'en' : 'pt'
    setLang(novo)
    salvar('idioma', novo)
  }

  const toggleTheme = () => {
    const novo: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(novo)
    salvar('tema', novo === 'dark' ? 'escuro' : 'claro')
  }

  return (
    <PreferencesContext.Provider value={{ lang, theme, t, toggleLang, toggleTheme }}>
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  const valor = useContext(PreferencesContext)
  if (!valor) throw new Error('usePreferences precisa estar dentro de PreferencesProvider')
  return valor
}
