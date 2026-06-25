export default function StudioBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(29,78,216,0.34),transparent_36%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.16),transparent_30%),linear-gradient(180deg,#050508_0%,#08080a_50%,#030305_100%)]" />
      <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl animate-drift-slow" />
      <div className="absolute right-[-12rem] top-[25rem] h-[32rem] w-[32rem] rounded-full bg-blue-700/20 blur-3xl animate-drift-slower" />
      <div className="absolute bottom-[-16rem] left-[-8rem] h-[36rem] w-[36rem] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.65)_1px,transparent_1px)] [background-size:72px_72px]" />
    </div>
  )
}
