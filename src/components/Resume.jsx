import Section from './Section.jsx'
import { experience, education } from '../data.js'

function TimelineItem({ title, place, period, children }) {
  return (
    <li className="relative border-l border-slate-800 pb-10 pl-6 last:pb-0">
      <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-emerald-400" />
      <p className="font-mono text-sm text-emerald-400">{period}</p>
      <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
      <p className="text-slate-400">{place}</p>
      <div className="mt-3 text-slate-400">{children}</div>
    </li>
  )
}

export default function Resume() {
  return (
    <>
      <Section id="experience" title="Työkokemus">
        <ol>
          {experience.map((job) => (
            <TimelineItem key={job.role} title={job.role} place={job.place} period={job.period}>
              <ul className="list-disc space-y-1 pl-5">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </ol>
      </Section>

      <Section id="education" title="Koulutus">
        <ol>
          {education.map((item) => (
            <TimelineItem key={item.degree} title={item.degree} place={item.place} period={item.period}>
              <p>{item.description}</p>
            </TimelineItem>
          ))}
        </ol>
      </Section>
    </>
  )
}
