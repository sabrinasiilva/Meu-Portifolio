import { useRef } from 'react'
import { useAutoplay } from '../hooks/useAutoplay'
import { asset } from '../lib/asset'

/** O vídeo de demonstração do CO2Bank dentro de uma moldura de celular. */
export function PhoneVideo({ ariaLabel, className = '' }: { ariaLabel: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  useAutoplay(ref)

  return (
    <div className={`relative mx-auto w-[min(260px,70vw)] ${className}`}>
      <div
        className="pointer-events-none absolute -inset-12 rounded-full bg-linear-to-br from-brand-blue/25 to-brand-pink/25 blur-3xl"
        aria-hidden
      />
      <div className="relative rounded-[2.4rem] bg-[#111114] p-2.5 shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
        <video
          ref={ref}
          src={asset('co2bank-demo.mp4')}
          poster={asset('co2bank-poster.jpg')}
          muted
          loop
          playsInline
          controls
          preload="none"
          aria-label={ariaLabel}
          className="block aspect-[9/16] w-full rounded-[1.9rem] bg-[#e6f4da]"
        />
      </div>
    </div>
  )
}
