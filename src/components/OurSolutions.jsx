"use client"
import { motion } from 'framer-motion'
import { CalendarCheck2, BellRing, MessageSquare, Stethoscope, KanbanSquare, BarChart3 } from 'lucide-react'

export default function OurSolutions() {
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
      </div>
    </section>
  )
}
