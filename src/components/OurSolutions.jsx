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

        <div className="grid md:grid-cols-2 grid-gap-lg">
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

        <div className="grid md:grid-cols-2 grid-gap-lg">
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

  const differentials = [
    {
      title: '1. Atendimento 24/7',
      bullets: [
        'Paciente agenda às 22h, domingo ou feriado',
        'Não perde leads por estar fora do horário',
        'Reduz ansiedade do paciente',
      ],
    },
    {
      title: '2. Resposta Instantânea',
      bullets: [
        'Tempo de resposta: menos de 3 segundos',
        'Paciente não espera na fila',
        'Taxa de conversão aumenta drasticamente',
      ],
    },
    {
      title: '3. Humanização Real',
      bullets: [
        'Conversa natural, não robótica',
        'Usa o nome do paciente',
        'Tom empático e acolhedor',
        'Se adapta ao estilo de comunicação',
      ],
    },
    {
      title: '4. Inteligência Contextual',
      bullets: [
        'Entende erros de digitação',
        'Compreende gírias e regionalismos',
        'Lembra conversas anteriores',
        'Ajusta respostas conforme perfil',
      ],
    },
    {
      title: '5. Escalabilidade',
      bullets: [
        'Atende diversos pacientes simultaneamente',
        'Sem custo adicional por volume',
        'Equipe humana focada em casos complexos',
      ],
    },
    {
      title: '6. Integração Total',
      bullets: [
        'Conecta com sistema de agendamento existente',
        'Atualiza CRM de atendimento',
        'Gera relatórios de desempenho e análises personalizadas',
      ],
    },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-gray-700 text-xl leading-none">✕</button>
        <h4 className="modal-title">🎯 Diferenciais da Solução</h4>
        <div className="modal-body">
          <div className="modal-grid">
            {differentials.map((item) => (
              <div key={item.title} className="card stack-sm">
                <h5 className="text-lg font-semibold text-gray-900">{item.title}</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  {item.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
