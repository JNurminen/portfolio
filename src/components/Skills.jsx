import Section from './Section.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" title="Taidot">
      <div className="grid gap-6 sm:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.group} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="mb-4 font-semibold text-white">{skill.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <li key={item} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
