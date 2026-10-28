import { useEffect, type RefObject } from 'react'

/**
 * Toca o vídeo (mudo) quando ele aparece na tela e pausa quando sai.
 * Não faz isso se a pessoa pausou à mão ou prefere menos movimento.
 */
export function useAutoplay(ref: RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const video = ref.current
    const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!video || menosMovimento || !('IntersectionObserver' in window)) return

    let pausadoPelaPessoa = false
    let pausandoSozinho = false

    const aoPausar = () => {
      if (!pausandoSozinho) pausadoPelaPessoa = true
      pausandoSozinho = false
    }
    const aoTocar = () => {
      pausadoPelaPessoa = false
    }
    video.addEventListener('pause', aoPausar)
    video.addEventListener('play', aoTocar)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !pausadoPelaPessoa) {
          video.play().catch(() => {})
        } else if (!entry.isIntersecting && !video.paused) {
          pausandoSozinho = true
          video.pause()
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(video)

    return () => {
      observer.disconnect()
      video.removeEventListener('pause', aoPausar)
      video.removeEventListener('play', aoTocar)
    }
  }, [ref])
}
