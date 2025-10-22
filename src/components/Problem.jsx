"use client"

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, TrendingDown, Users, MessageSquare } from 'lucide-react'

export default function Problem() {
  const problems = [
    {
      icon: Users,
      stat: null,
      label: 'Equipe Administrativa Sobrecarregada',
      description: 'Dificuldade de atender fora do horário comercial',
    },
    {
      icon: TrendingDown,
      stat: '23% → 1%',
      label: 'Queda na Conversão',
      description: 'Taxa de conversão despenca quando a resposta demora mais de 1 dia',
    },
    {
      icon: MessageSquare,
      stat: '~1.200',
      label: 'Mensagens/Mês',
      description: 'Volume atual de mensagens via WhatsApp sem atendimento adequado',
    },
  ]

  const impacts = [
    {
      icon: Users,
      title: 'Perda de Pacientes',
      description: '60% dos pacientes procuram outras clínicas por demora no atendimento',
    },
    {
      icon: AlertTriangle,
      title: 'Insatisfação Crescente',
      description: 'Reclamações e avaliações negativas aumentam pela falta de resposta',
    },
    {
      icon: TrendingDown,
      title: 'Receita Perdida',
      description: 'Cada minuto de atraso representa perda de oportunidades e faturamento',
    },
  ]

  return (
    <section className="section snap-section bg-white" id="desafio">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <span className="badge mb-4">O Problema Atual</span>
          <h2 className="section-title">O Gargalo que Está <span className="text-brand">Custando Caro</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            A demora no atendimento está gerando frustração nos pacientes e impactando diretamente nos resultados da Gastrocenter
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 mt-6 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <div className="card rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  {problem.stat ? (
                    <div className="text-3xl font-bold text-brand mb-1">{problem.stat}</div>
                  ) : null}
                  <h3 className="text-lg font-bold mb-1 text-gray-900">{problem.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-red-50 border border-red-200 rounded-3xl p-8 mt-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Consequências do Atendimento Lento</h3>
          <div className="grid grid-cols-3 gap-6">
            {impacts.map((impact, index) => {
              const Icon = impact.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Icon className="w-7 h-7 text-brand" />
                  </div>
                  <h4 className="text-base font-semibold mb-1 text-gray-900">{impact.title}</h4>
                  <p className="text-sm text-gray-600">{impact.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 text-center"
        >
          <div className="inline-block card rounded-2xl px-6 py-3 border border-brand">
            <p className="text-base font-bold text-brand">
              Cada minuto perdido é uma oportunidade que não volta
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
