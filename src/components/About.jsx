import Section from './Section.jsx'
import { profile } from '../data.js'

export default function About() {
  return (
    <Section id="about" title="Minä">
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-slate-400">
        {profile.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
