"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const preparedFor = 'Gastrocentro'
  const proposalDate = 'Outubro 2025'

  return (
    <section className="section snap-section bg-gradient-to-b from-white to-gray-50" id="hero">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="hero-kicker">PROPOSTA DE SOLUÇÃO COM IA</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-brand leading-tight">
            Agentes de IA para Atendimento Comercial
          </h1>
          <p className="subtitle mt-4 max-w-2xl">
            Automação ponta a ponta para captação, triagem, agendamento, confirmação e inteligência comercial — adaptado à realidade da Gastrocentro.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="badge">Preparado para: {preparedFor}</span>
            <span className="badge">Data: {proposalDate}</span>
          </div>
        </motion.div>

        <motion.div className="flex justify-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.6 }}>
          <Image src="/branding/gastrocentro-logo.svg" width={420} height={150} alt={`Logo ${preparedFor}`} className="drop-shadow-md" />
        </motion.div>
      </div>
    </section>
  )
}
