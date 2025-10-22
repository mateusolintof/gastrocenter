"use client"
import { motion } from 'framer-motion'
import { Trophy, Brain, Lightbulb, FileBarChart } from 'lucide-react'

export default function ExpectedGains() {
  return (
    <section className="section snap-section" id="ganhos">
      <div className="container">
        <h2 className="section-title">Ganhos Esperados</h2>
        <p className="subtitle mt-2">Resultados concretos e mensuráveis para a Gastrocentro</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8 md:gap-10">
          <div className="card hover:shadow-md transition-shadow">
            <div className="text-xl font-bold text-brand mb-2 flex items-center gap-2"><Trophy className="h-5 w-5"/> O que você conquista</div>
            <div className="text-gray-700 space-y-2 text-sm">
              <div>Atendimento 24/7 no WhatsApp — sem perda de leads fora do horário</div>
              <div>Qualificação e FAQ automatizados — equipe foca no que importa</div>
              <div>Agenda unificada — menos conflitos e encaixes mais rápidos</div>
              <div>Confirmações e reagendamentos automáticos — redução de faltas</div>
              <div>Follow‑up pós‑atendimento — retornos/exames e continuidade</div>
            </div>
          </div>

          <div className="card hover:shadow-md transition-shadow">
            <div className="text-xl font-bold text-brand mb-2 flex items-center gap-2"><Brain className="h-5 w-5"/> Inteligência em tempo real</div>
            <div className="text-gray-700 space-y-2 text-sm">
              <div>Taxa de conversão por origem e etapa</div>
              <div>Especialidades e exames mais procurados</div>
              <div>Previsão de no‑show e ocupação</div>
            </div>
          </div>

          <div className="card hover:shadow-md transition-shadow">
            <div className="text-xl font-bold text-brand mb-2 flex items-center gap-2"><Lightbulb className="h-5 w-5"/> Exemplos de insights</div>
            <div className="text-gray-700 space-y-2 text-sm">
              <div>Gargalos de conversão por etapa do funil</div>
              <div>Horários de maior demanda</div>
              <div>Convênios com maior aderência</div>
            </div>
          </div>

          <div className="card hover:shadow-md transition-shadow">
            <div className="text-xl font-bold text-brand mb-2 flex items-center gap-2"><FileBarChart className="h-5 w-5"/> Relatórios avançados</div>
            <div className="text-gray-700 space-y-2 text-sm">
              <div>Funil completo por período</div>
              <div>KPIs executivos</div>
              <div>Baseado em dados — não em achismo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
