export const metadata = {
  title: "Gastrocentro — Agentes de IA para Atendimento",
  description:
    "Proposta contínua com agentes de IA, fluxo interativo e ganhos esperados, adaptada à identidade da Gastrocentro.",
};

import "../src/styles/main.css";
import "reactflow/dist/style.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
