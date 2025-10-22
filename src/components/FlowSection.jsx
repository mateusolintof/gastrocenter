"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Workflow, Maximize2, UserCircle2, Sparkles, CalendarCheck2, CheckCircle2 } from 'lucide-react'
import FlowchartModal from './FlowchartModal'

export default function FlowSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="section snap-section bg-gray-50">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-3">
              <Workflow className="w-5 h-5 text-brand" />
              <span className="text-sm font-medium text-gray-700">Fluxo Inteligente</span>
            </div>
            <h2 className="section-title">Fluxo de Atendimento</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="card rounded-3xl p-10">
              <div className="grid grid-cols-4 gap-6 mb-8">
                {[
                  { step: 1, title: 'Recepção', desc: 'Paciente envia mensagem', icon: UserCircle2 },
                  { step: 2, title: 'Agente SDR', desc: 'Identifica a necessidade', icon: Sparkles },
                  { step: 3, title: 'Triagem', desc: 'Encaminha para subfunil', icon: Workflow },
                  { step: 4, title: 'Atendimento', desc: 'Resolve ou agenda', icon: CheckCircle2 },
                ].map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      {(() => { const Icon = item.icon; return <Icon className="w-6 h-6 text-brand"/> })()}
                    </div>
                    <div className="text-base text-brand font-semibold mb-1">Etapa {item.step}</div>
                    <h4 className="text-xl font-bold mb-1 text-gray-900">{item.title}</h4>
                    <p className="text-base text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary text-white px-8 py-4 text-lg"
                >
                  <Maximize2 className="w-6 h-6" />
                  Explorar Fluxo Completo Interativo
                  <Workflow className="w-6 h-6" />
                </button>
                <p className="text-sm text-gray-500 mt-4">Clique para visualizar o fluxo detalhado e interativo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FlowchartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
