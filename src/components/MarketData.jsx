"use client"

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

export default function MarketData() {
  return (
    <section className="section snap-section bg-white">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
          <h2 className="section-title">O Mercado de <span className="text-brand">IA em Saúde</span> Está em Aceleração</h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-6">
          {[
            { value: '233%', label: 'Crescimento 2020-2023' },
            { value: '62.5%', label: 'Adoção no Brasil' },
            { value: '$180B', label: 'Projeção 2030' },
            { value: '24%', label: 'CAGR' },
          ].map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.6 }}>
              <div className="card rounded-2xl p-8 text-center h-full">
                <TrendingUp className="w-10 h-10 text-brand mx-auto mb-2" />
                <div className="text-4xl font-bold text-brand mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
