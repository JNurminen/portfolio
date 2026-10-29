import Section from './Section.jsx'
import { profile } from '../data.js'

export default function Contact() {
  return (
    <Section id="contact" title="Yhteystiedot">
      <div className="max-w-xl">
        <p className="text-lg text-slate-400">
          Haluatko jutella harjoittelusta, projektista tai muuten vain? Laita viestiä!
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-lg bg-emerald-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-emerald-400"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex gap-6">
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-400">
              GitHub
            </a>
          )}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-400">
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  )
}
