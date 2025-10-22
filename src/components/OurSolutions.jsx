"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarCheck2, BellRing, MessageSquare, Stethoscope } from 'lucide-react'

export default function OurSolutions() {
  const [showDifferentials, setShowDifferentials] = useState(false)

  return (
    <section className="section snap-section bg-white" id="solucoes">
      <div className="container stack-lg">
        <div className="stack-sm">
          <h2 className="section-title">Nossas Soluções</h2>
          <p className="subtitle">Fluxos inteligentes para WhatsApp, agenda unificada e gestão comercial</p>
        </div>

        <div className="grid md:grid-cols-2 grid-gap-xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card">
            <div className="font-semibold text-brand flex items-center gap-2"><CalendarCheck2 className="h-5 w-5"/> SDR Qualificador + Agendamento</div>
            <ul className="mt-3 space-y-1 text-gray-700 text-sm">
              <li>• Atendimento 24/7 com resposta imediata</li>
              <li>• Qualificação automática (particular × convênio)</li>
              <li>• Validação de convênios e proposta de horários</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card">
            <div className="font-semibold text-brand flex items-center gap-2"><MessageSquare className="h-5 w-5"/> FAQ Inteligente</div>
            <ul className="mt-3 space-y-1 text-gray-700 text-sm">
              <li>• Procedimentos, exames, convênios e valores</li>
              <li>• Localização, horários e preparo</li>
              <li>• Convida a agendar ao final</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card">
            <div className="font-semibold text-brand flex items-center gap-2"><BellRing className="h-5 w-5"/> Anti No‑Show + Follow‑Up</div>
            <ul className="mt-3 space-y-1 text-gray-700 text-sm">
              <li>• Lembretes D‑2, D‑1 e D‑2h + confirmação</li>
              <li>• Reagendamento automático e fila de espera</li>
              <li>• Follow‑up pós‑atendimento</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card">
            <div className="font-semibold text-brand flex items-center gap-2"><Stethoscope className="h-5 w-5"/> CRM + Agenda Unificada + Dashboard</div>
            <ul className="mt-3 space-y-1 text-gray-700 text-sm">
              <li>• Unifica convênios + particular</li>
              <li>• Funis, tags e histórico completo</li>
              <li>• KPIs, funil e relatórios executivos</li>
            </ul>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 grid-gap-xl">
          <div className="card">
            <div className="font-semibold text-brand">SOLUÇÕES INTELIGENTES</div>
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              <li>Dashboard em tempo real</li>
              <li>CRM com histórico completo</li>
              <li>Insights e relatórios acionáveis</li>
            </ul>
          </div>
          <div className="card">
            <div className="font-semibold text-brand">CONFIABILIDADE E SEGURANÇA</div>
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              <li>• Fallback humano quando necessário</li>
              <li>• Monitoramento e reprocessamento</li>
              <li>• Privacidade, LGPD e segurança de dados</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button onClick={() => setShowDifferentials(true)} className="btn-outline-brand px-8 py-4 text-lg">
            Ver Diferenciais da Solução
          </button>
        </div>
      </div>

      <DifferentialsModal open={showDifferentials} onClose={() => setShowDifferentials(false)} />
    </section>
  )
}

function DifferentialsModal({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-gray-700 text-xl leading-none">✕</button>
        <h4 className="modal-title">🎯 Diferenciais da Solução</h4>
        <div className="modal-body">
          <section className="stack-sm">
            <h5 className="text-lg font-semibold text-gray-900">1. Atendimento 24/7</h5>
            <ul>
              <li>Paciente agenda às 22h, domingo ou feriado</li>
              <li>Não perde leads por estar fora do horário</li>
              <li>Reduz ansiedade do paciente</li>
            </ul>
          </section>

          <section className="stack-sm">
            <h5 className="text-lg font-semibold text-gray-900">2. Resposta Instantânea</h5>
            <ul>
              <li>Tempo de resposta: <strong>menos de 3 segundos</strong></li>
              <li>Paciente não espera na fila</li>
              <li>Taxa de conversão aumenta drasticamente</li>
            </ul>
          </section>

          <section className="stack-sm">
            <h5 className="text-lg font-semibold text-gray-900">3. Humanização Real</h5>
            <ul>
              <li>Conversa natural, não robótica</li>
              <li>Usa o nome do paciente</li>
              <li>Tom empático e acolhedor</li>
              <li>Se adapta ao estilo de comunicação</li>
            </ul>
          </section>

          <section className="stack-sm">
            <h5 className="text-lg font-semibold text-gray-900">4. Inteligência Contextual</h5>
            <ul>
              <li>Entende erros de digitação</li>
              <li>Compreende gírias e regionalismos</li>
              <li>Lembra conversas anteriores</li>
              <li>Ajusta respostas conforme perfil</li>
            </ul>
          </section>

          <section className="stack-sm">
            <h5 className="text-lg font-semibold text-gray-900">5. Escalabilidade</h5>
            <ul>
              <li>Atende diversos pacientes simultaneamente</li>
              <li>Sem custo adicional por volume</li>
              <li>Equipe humana focada em casos complexos</li>
            </ul>
          </section>

          <section className="stack-sm">
            <h5 className="text-lg font-semibold text-gray-900">6. Integração Total</h5>
            <ul>
              <li>Conecta com sistema de agendamento existente</li>
              <li>Atualiza CRM de atendimento</li>
              <li>Gera relatórios de desempenho e análises personalizadas</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
