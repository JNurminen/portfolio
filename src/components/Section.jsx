export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-20">
      <h2 className="mb-8 text-2xl font-bold text-white sm:text-3xl">
        <span className="text-emerald-400">#</span> {title}
      </h2>
      {children}
    </section>
  )
}
