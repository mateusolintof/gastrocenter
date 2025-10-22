"use client"

import { motion } from 'framer-motion'
import { FileText, Stethoscope, CreditCard } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    { icon: FileText, title: 'Gestão de 7 Tipos de Exames', count: '7 Exames' },
    { icon: Stethoscope, title: '11 Procedimentos Especializados', count: '11 Procedimentos' },
    { icon: CreditCard, title: '10+ Planos de Saúde', count: '10+ Convênios' },
  ]

  return (
    <section className="section snap-section bg-white">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
          <h2 className="section-title">Solução <span className="text-brand">Customizada</span> para a Gastrocentro</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema desenvolvido especificamente para atender toda a complexidade e variedade de serviços da clínica
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.8 }}>
                <div className="card rounded-2xl p-8 h-full text-center">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <div className="text-2xl font-bold text-brand">{benefit.count}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
