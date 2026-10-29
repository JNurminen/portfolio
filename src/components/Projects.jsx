import Section from './Section.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <Section id="projects" title="Projektit">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-emerald-500/50"
          >
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-3 flex-1 text-slate-400">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="font-mono text-xs text-emerald-400">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4 text-sm">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-400">
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-400">
                  Demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
