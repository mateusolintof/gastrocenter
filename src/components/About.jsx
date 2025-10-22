"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="section snap-section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="section-title">Quem é a <span className="text-brand">Convert.AI</span>?</h2>
          <div className="w-24 h-1 bg-brand rounded-full"></div>
        </motion.div>
        <div className="">
          {/* Nossa História - largura total (horizontal) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card rounded-2xl p-8 md:p-10 w-full">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Nossa História</h3>
              <div className="grid md:grid-cols-2 gap-8 text-gray-700">
                <p className="text-base md:text-lg leading-relaxed">
                  Somos uma <span className="text-brand font-semibold">agência especializada em tráfego pago para clínicas médicas</span> há mais de 6 anos, com expertise comprovada em performance e crescimento no setor de saúde.
                </p>
                <div className="space-y-4">
                  <p className="text-base md:text-lg leading-relaxed">
                    Durante nossa jornada, identificamos que um <span className="text-brand font-semibold">atendimento deficitário impactava drasticamente as conversões finais</span>, mesmo com campanhas de alta performance.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Com o advento dos <span className="text-brand font-semibold">Agentes de IA</span>, unimos expertise em marketing médico com tecnologia de IA, criando soluções específicas para nossos clientes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-8"
        >
          <div className="inline-block card rounded-2xl px-6 py-3">
            <p className="text-base md:text-lg text-gray-700">
              <span className="text-brand font-bold">Expertise em Marketing</span> + <span className="text-brand font-bold">Tecnologia de IA</span> = <span className="text-gray-900 font-bold">Resultados</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
