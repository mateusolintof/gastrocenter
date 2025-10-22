"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Workflow, Maximize2, UserCircle2, Sparkles, CalendarCheck2, CheckCircle2 } from 'lucide-react'
import FlowchartModal from './FlowchartModal'

export default function FlowSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [stepModal, setStepModal] = useState(null)

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
                    <div className="inline-flex items-center justify-center gap-2 mb-2">
                      <div className="w-10 h-10 bg-red-100 rounded-2xl flex items-center justify-center">
                        {(() => { const Icon = item.icon; return <Icon className="w-5 h-5 text-brand"/> })()}
                      </div>
                      <div className="text-base text-brand font-semibold">Etapa {item.step}</div>
                    </div>
                    <h4 className="text-xl font-bold mb-1 text-gray-900">{item.title}</h4>
                    <p className="text-base text-gray-600 mb-2">{item.desc}</p>
                    <button
                      className="text-sm font-semibold text-brand underline underline-offset-4"
                      onClick={() => setStepModal(item.step)}
                    >
                      Ver mais
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Botão fora do card */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary text-white px-8 py-4 text-lg"
            >
              <Maximize2 className="w-6 h-6" />
              Explorar Fluxo Completo Interativo
              <Workflow className="w-6 h-6" />
            </button>
            <p className="text-sm text-gray-500 mt-3">Clique para visualizar o fluxo detalhado e interativo</p>
          </div>
        </div>
      </section>

      <FlowchartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Modais de detalhes por etapa */}
      <StepDetailModal
        open={stepModal === 1}
        onClose={() => setStepModal(null)}
        title="Etapa 1 — Recepção"
      >
        Leads chegam por múltiplos canais (omnichannel): site, WhatsApp, Instagram, formulários e outros pontos de entrada definidos pela clínica. Todos os canais convergem para uma fila única.
      </StepDetailModal>
      <StepDetailModal
        open={stepModal === 2}
        onClose={() => setStepModal(null)}
        title="Etapa 2 — Agente SDR"
      >
        O Agente SDR identifica a necessidade do paciente, qualifica (particular × convênio), coleta dados essenciais, valida convênios e direciona o atendimento corretamente.
      </StepDetailModal>
      <StepDetailModal
        open={stepModal === 3}
        onClose={() => setStepModal(null)}
        title="Etapa 3 — Triagem"
      >
        Encaminha automaticamente para o subfunil adequado (Resultados, Procedimentos, Exames ou Dúvidas), aplicando regras específicas e priorização quando necessário.
      </StepDetailModal>
      <StepDetailModal
        open={stepModal === 4}
        onClose={() => setStepModal(null)}
        title="Etapa 4 — Atendimento"
      >
        Resolve a demanda ou agenda com especialista, integra com a agenda e dispara confirmações e lembretes para reduzir no‑show.
      </StepDetailModal>
    </>
  )
}

function StepDetailModal({ open, onClose, title, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
      <div className="bg-white w-full max-w-xl mx-4 rounded-2xl shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xl font-bold text-gray-900">{title}</h4>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">✕</button>
        </div>
        <div className="text-gray-700 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}
