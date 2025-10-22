"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Workflow, Maximize2, UserCircle2, Sparkles, CalendarCheck2, CheckCircle2 } from 'lucide-react'
import FlowchartModal from './FlowchartModal'

export default function FlowSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [stepModal, setStepModal] = useState(null)
  const [contingencyOpen, setContingencyOpen] = useState(false)

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

          {/* Botão/Modal de Contingência (abaixo do card) */}
          <div className="text-center mt-4 mb-3">
            <button
              onClick={() => setContingencyOpen(true)}
              className="inline-flex items-center justify-center rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-brand hover:bg-red-100"
            >
              Solução de Contingência
            </button>
          </div>

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
        <div className="space-y-3">
          <p>Primeiro contato do paciente. O agente responde imediatamente, com tom humano e acolhedor.</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Detecta se é primeira vez ou retorno</li>
            <li>Identifica urgência na mensagem</li>
            <li>Cria rapport com linguagem simples</li>
          </ul>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
            <div className="font-semibold text-slate-800 mb-1">Canais omnichannel</div>
            <div>Site, WhatsApp, Instagram, formulários e demais canais configurados convergem para uma fila única.</div>
          </div>
        </div>
      </StepDetailModal>
      <StepDetailModal
        open={stepModal === 2}
        onClose={() => setStepModal(null)}
        title="Etapa 2 — Agente SDR"
      >
        <div className="space-y-3">
          <p>Qualificação inteligente com perguntas contextuais e sem menus engessados.</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Identifica a necessidade (consulta ou exame)</li>
            <li>Coleta: convênio ou particular</li>
            <li>Adapta perguntas conforme respostas</li>
            <li>Evita perguntas desnecessárias</li>
          </ul>
        </div>
      </StepDetailModal>
      <StepDetailModal
        open={stepModal === 3}
        onClose={() => setStepModal(null)}
        title="Etapa 3 — Triagem"
      >
        <div className="space-y-3">
          <p>Encaminhamento para o subfunil correto com coleta mínima de dados.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-md border border-slate-200 p-3">
              <div className="font-semibold text-slate-800 mb-1">Convênio</div>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Nome do convênio</li>
                <li>Número da carteirinha e validade</li>
                <li>Especialista desejado</li>
              </ul>
            </div>
            <div className="rounded-md border border-slate-200 p-3">
              <div className="font-semibold text-slate-800 mb-1">Particular</div>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Nome completo, CPF e telefone</li>
                <li>Especialista desejado</li>
              </ul>
            </div>
          </div>
          <p className="text-sm">Valida dados em tempo real e prepara o agendamento.</p>
        </div>
      </StepDetailModal>
      <StepDetailModal
        open={stepModal === 4}
        onClose={() => setStepModal(null)}
        title="Etapa 4 — Atendimento"
      >
        <div className="space-y-3">
          <p>Agendamento inteligente com consulta de agenda em tempo real.</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Apresenta opções formatadas (data/horário)</li>
            <li>Confirma a escolha e registra no sistema</li>
            <li>Dispara confirmação e orientações</li>
            <li>Automatiza lembretes e follow‑up (reduz no‑show)</li>
          </ul>
        </div>
      </StepDetailModal>

      {/* Modal: Solução de Contingência */}
      <StepDetailModal
        open={contingencyOpen}
        onClose={() => setContingencyOpen(false)}
        title="Solução de Contingência — Quando o agente transfere para humano?"
      >
        <div className="space-y-3">
          <div className="text-slate-800 font-semibold">O Agente é inteligente e sabe quando precisa de ajuda humana.</div>
          <div>
            <div className="font-semibold text-rose-600 mb-1">Transfere quando:</div>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Situação de emergência médica</li>
              <li>Dúvidas sobre procedimentos muito específicos</li>
              <li>Reclamações ou problemas complexos</li>
              <li>Negociação de valores</li>
              <li>Casos que fogem do padrão</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-emerald-700 mb-1">Resolve sozinho:</div>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>80% dos agendamentos de rotina</li>
              <li>Dúvidas sobre localização, horários e convênios</li>
              <li>Reagendamentos simples e confirmações</li>
              <li>Informações sobre preparo de exames</li>
            </ul>
          </div>
        </div>
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
