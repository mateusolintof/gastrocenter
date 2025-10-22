"use client"
import { motion } from 'framer-motion'

export default function Investment() {
  return (
    <section className="section snap-section" id="investimento">
      <div className="container stack-lg">
        <div className="stack-sm">
          <h2 className="section-title">Investimento</h2>
          <p className="subtitle">Soluções Modulares ou Pacote Completo</p>
        </div>

        <div className="grid md:grid-cols-3 grid-gap-xl items-stretch">
          <div className="card flex flex-col">
            <div className="text-brand font-bold">FAQ Inteligente</div>
            <div className="mt-3 text-gray-800 space-y-2">
              <div>
                <div className="text-gray-600 text-sm">Investimento Único (Setup + Dev)</div>
                <div className="text-xl font-bold">R$ 12.000,00</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm">Mensalidade</div>
                <div className="text-lg font-semibold">R$ 1.000,00/mês</div>
              </div>
              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li>• Agente FAQ especialista</li>
                <li>• Base de conhecimento</li>
                <li>• Integração WhatsApp</li>
              </ul>
            </div>
          </div>

          <div className="card flex flex-col ring-2 ring-brand shadow-lg md:-mt-3">
            <div className="text-brand font-extrabold">SDR + Agendamento</div>
            <div className="mt-3 text-gray-800 space-y-2">
              <div>
                <div className="text-gray-600 text-sm">Investimento Único (Setup + Dev)</div>
                <div className="text-2xl font-extrabold">R$ 20.000,00</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm">Mensalidade</div>
                <div className="text-xl font-bold">R$ 2.200,00/mês</div>
              </div>
              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li>• SDR (Particular/Convênio)</li>
                <li>• Validação de convênios</li>
                <li>• CRM + Dashboard essencial</li>
              </ul>
            </div>
          </div>

          <div className="card flex flex-col">
            <div className="text-brand font-bold">Anti No‑Show</div>
            <div className="mt-3 text-gray-800 space-y-2">
              <div>
                <div className="text-gray-600 text-sm">Investimento Único (Setup + Dev)</div>
                <div className="text-xl font-bold">R$ 12.000,00</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm">Mensalidade</div>
                <div className="text-lg font-semibold">R$ 1.000,00/mês</div>
              </div>
              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li>• Lembretes e confirmação</li>
                <li>• Reagendamento inteligente</li>
                <li>• Follow‑up pós‑atendimento</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-gap-xl items-stretch">
          <div className="card flex flex-col">
            <div className="text-brand font-bold">Solução Full — Pacote Completo</div>
            <div className="mt-3 text-gray-800 space-y-2">
              <div className="text-gray-600 text-sm">Investimento Único</div>
              <div className="text-2xl font-extrabold">De R$ 44.000 → R$ 30.000</div>
              <div className="text-gray-600 text-sm">Mensalidade</div>
              <div className="text-lg font-semibold">R$ 2.500/mês</div>
              <div className="text-gray-700 text-sm mt-2">Inclui: SDR + FAQ + No‑Show + CRM + Agenda Unificada + Dashboard</div>
            </div>
          </div>

          <div className="card flex flex-col">
            <div className="text-brand font-bold">Condições de Pagamento</div>
            <div className="mt-3 text-gray-800 space-y-3 text-sm">
              <div>
                <div className="font-semibold text-gray-800">Investimento Único</div>
                <ul className="mt-1 space-y-1 text-gray-700">
                  <li>• À vista (5% de desconto)</li>
                  <li>• Entrada de R$ 10.000 + restante em 5x</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Mensalidade</div>
                <ul className="mt-1 space-y-1 text-gray-700">
                  <li>• Inicia apenas 60 dias após o go‑live</li>
                  <li>• Faturamento via boleto ou PIX</li>
                </ul>
              </div>
              <div className="text-xs text-gray-600">Incluso: Infraestrutura, suporte, manutenção, segurança, backup e monitoramento 24/7.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
