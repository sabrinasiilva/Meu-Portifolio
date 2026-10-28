import { useEffect, useState } from 'react'

/** Retorna o id da seção que está no meio da tela, para destacar o link certo no menu. */
export function useScrollSpy(ids: string[]) {
  const [ativo, setAtivo] = useState<string | null>(null)
  const chave = ids.join(',')

  useEffect(() => {
    if (!chave || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setAtivo(entry.target.id)
        })
      },
      // considera só a faixa do meio da tela
      { rootMargin: '-45% 0px -50% 0px' },
    )

    chave.split(',').forEach(id => {
      const secao = document.getElementById(id)
      if (secao) observer.observe(secao)
    })
    return () => observer.disconnect()
  }, [chave])

  return ativo
}
