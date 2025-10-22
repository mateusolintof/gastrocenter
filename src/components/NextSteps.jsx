"use client"
import { motion } from 'framer-motion'

export default function NextSteps() {
  return (
    <section className="section snap-section bg-gray-50" id="proximos-passos">
      <div className="container">
        <h2 className="section-title">Próximos Passos</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Alinhamento Final', desc: 'Refinamento dos requisitos e expectativas' },
            { title: 'Aprovação da Proposta', desc: 'Formalização do acordo e início do projeto' },
            { title: 'Início do Projeto', desc: 'Kick-off e primeiros desenvolvimentos' },
          ].map((s, idx) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="card">
              <h3 className="text-lg font-semibold text-brand">{s.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
