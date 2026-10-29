import { profile } from '../data.js'

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col-reverse items-start justify-center gap-10 py-20 md:flex-row md:items-center md:justify-between">
      <div className="max-w-xl">
        <p className="mb-4 font-mono text-emerald-400">Hei, olen</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">{profile.name}</h1>
        <h2 className="mt-2 text-2xl font-semibold text-slate-400 sm:text-4xl">{profile.title}</h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-400">{profile.intro}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-emerald-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-emerald-400"
          >
            Katso projektit
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-emerald-400 hover:text-emerald-400"
          >
            Ota yhteyttä
          </a>
        </div>
      </div>

      {profile.photo && (
        <div className="relative shrink-0">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-emerald-400" />
          <img
            src={profile.photo}
            alt={profile.name}
            className="relative h-40 w-40 rounded-2xl object-cover grayscale-[30%] transition duration-300 hover:grayscale-0 sm:h-56 sm:w-56 md:h-72 md:w-72"
          />
        </div>
      )}
    </section>
  )
}
