import { useEffect, useRef, useState } from 'react'

export default function RenderVideo({
  src,
  title = 'Decorative automotive render',
  eager = false,
  className = '',
  videoClassName = '',
  overlay = 'hero',
  children
}) {
  const wrapperRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(eager)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!media) return undefined

    const update = () => setReducedMotion(media.matches)
    update()

    media.addEventListener?.('change', update)
    return () => media.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    if (eager || shouldLoad || reducedMotion) return undefined

    const node = wrapperRef.current
    if (!node) return undefined

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '520px 0px', threshold: 0.01 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [eager, shouldLoad, reducedMotion])

  const canRenderVideo = shouldLoad && !reducedMotion && !failed

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden bg-black ${className}`}>
      <div
        aria-label={title}
        className={`absolute inset-0 transition-opacity duration-700 ${
          loaded && canRenderVideo ? 'opacity-0' : 'opacity-100'
        } bg-[radial-gradient(circle_at_50%_12%,rgba(14,165,233,0.30),transparent_38%),linear-gradient(135deg,#050507_0%,#0b1220_48%,#020304_100%)]`}
      />

      {canRenderVideo && (
        <video
          className={`absolute inset-0 h-full w-full object-cover transition duration-[1200ms] ease-out ${
            loaded ? 'scale-100 opacity-100' : 'scale-[1.03] opacity-0'
          } ${videoClassName}`}
          autoPlay
          muted
          loop
          playsInline
          preload={eager ? 'metadata' : 'none'}
          aria-hidden="true"
          onLoadedData={() => setLoaded(true)}
          onError={() => setFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      <VideoOverlay variant={overlay} />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.10)_42%,transparent_52%)] opacity-25 mix-blend-screen" />

      {children && <div className="relative z-10 h-full">{children}</div>}
    </div>
  )
}

function VideoOverlay({ variant }) {
  const base = 'pointer-events-none absolute inset-0 z-[1]'

  if (variant === 'card') {
    return (
      <>
        <div className={`${base} bg-gradient-to-t from-black/86 via-black/24 to-black/18`} />
        <div className={`${base} bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.20),transparent_32%),radial-gradient(circle_at_90%_18%,rgba(14,165,233,0.24),transparent_35%)]`} />
        <div className={`${base} bg-[linear-gradient(90deg,rgba(0,0,0,0.20),transparent_34%,rgba(255,255,255,0.06)_50%,transparent_68%,rgba(0,0,0,0.28))]`} />
      </>
    )
  }

  if (variant === 'soft') {
    return (
      <>
        <div className={`${base} bg-gradient-to-br from-black/74 via-black/24 to-black/72`} />
        <div className={`${base} bg-[linear-gradient(115deg,rgba(255,255,255,0.12),transparent_32%,rgba(14,165,233,0.14)_68%,transparent)]`} />
      </>
    )
  }

  if (variant === 'cinema') {
    return (
      <>
        <div className={`${base} bg-gradient-to-r from-black/88 via-black/28 to-black/50`} />
        <div className={`${base} bg-[radial-gradient(circle_at_50%_36%,transparent_0%,rgba(0,0,0,0.12)_48%,rgba(0,0,0,0.86)_100%)]`} />
        <div className={`${base} bg-gradient-to-t from-[#050507] via-transparent to-black/50`} />
      </>
    )
  }

  return (
    <>
      <div className={`${base} bg-gradient-to-r from-black/92 via-black/50 to-black/18`} />
      <div className={`${base} bg-gradient-to-t from-[#08080a] via-transparent to-black/42`} />
      <div className={`${base} bg-[radial-gradient(circle_at_26%_22%,rgba(14,165,233,0.24),transparent_32%),linear-gradient(115deg,rgba(255,255,255,0.10),transparent_28%,rgba(255,255,255,0.06)_64%,transparent)]`} />
    </>
  )
}