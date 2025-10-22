"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Brain, FileBarChart } from 'lucide-react'

export default function ExpectedGains() {
  const [isBenefitsModalOpen, setIsBenefitsModalOpen] = useState(false)

  return (
    <section className="section snap-section" id="ganhos">
      <div className="container stack-lg">
        <div className="stack-sm">
          <h2 className="section-title">Ganhos Esperados</h2>
          <p className="subtitle">Resultados concretos e mensuráveis para a Gastrocentro</p>
        </div>

        <div className="grid md:grid-cols-2 grid-gap-xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card hover:shadow-md transition-shadow">
            <div className="text-xl font-bold text-brand mb-2 flex items-center gap-2"><Trophy className="h-5 w-5"/> O que você conquista</div>
            <div className="text-gray-700 space-y-2 text-sm">
              <div>Atendimento 24/7 no WhatsApp — sem perda de leads fora do horário</div>
              <div>Qualificação e FAQ automatizados — equipe foca no que importa</div>
              <div>Confirmações e reagendamentos automáticos — redução de faltas</div>
              <div>Follow‑up pós‑atendimento — retornos/exames e continuidade</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card hover:shadow-md transition-shadow">
            <div className="text-xl font-bold text-brand mb-2 flex items-center gap-2"><Brain className="h-5 w-5"/> Inteligência em tempo real &amp; Relatórios</div>
            <div className="text-gray-700 space-y-2 text-sm">
              <div>Taxa de conversão por origem e etapa</div>
              <div>Especialidades e exames mais procurados</div>
              <div>Previsão de no-show, ocupação e capacidade</div>
              <div>Funil completo por período com KPIs executivos</div>
              <div>Baseado em dados — sem achismos</div>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <button onClick={() => setIsBenefitsModalOpen(true)} className="btn-outline-brand px-8 py-4 text-lg">
            Ver Benefícios Completos
          </button>
        </div>
      </div>

      <BenefitsModal open={isBenefitsModalOpen} onClose={() => setIsBenefitsModalOpen(false)} />
    </section>
  )
}

function BenefitsModal({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-gray-700 text-xl leading-none">✕</button>
        <h4 className="modal-title">Benefícios Completos</h4>
        <div className="modal-columns">
          <div className="modal-callout stack-sm">
            <h5 className="text-lg font-semibold text-gray-900">Para os Pacientes</h5>
            <ul>
              <li><strong>Agilidade:</strong> Resposta imediata, sem espera</li>
              <li><strong>Conveniência:</strong> Agenda a qualquer hora</li>
              <li><strong>Clareza:</strong> Recebe todas as informações necessárias</li>
              <li><strong>Confirmação:</strong> Lembretes automáticos</li>
              <li><strong>Experiência:</strong> Atendimento profissional e empático</li>
            </ul>
          </div>
          <div className="modal-callout stack-sm">
            <h5 className="text-lg font-semibold text-gray-900">Para a Gastrocentro</h5>
            <ul>
              <li><strong>Aumento de 40% na conversão de leads</strong></li>
              <li><strong>Melhoria na reputação online</strong> (menos reclamações)</li>
              <li><strong>Equipe focada</strong> em casos complexos e atendimento VIP</li>
              <li><strong>Redução de no-show</strong> em até 50%</li>
              <li><strong>Dados e insights</strong> sobre demanda</li>
              <li><strong>Escalabilidade</strong> sem aumentar equipe</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
