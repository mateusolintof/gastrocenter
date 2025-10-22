# AGENTS.md — Guia Completo do Projeto Gastrocenter (Next.js)

Este arquivo orienta qualquer agente/humano a trabalhar neste repositório com segurança e consistência. Siga estas instruções sempre que criar, revisar ou executar o projeto.

- Stack principal: Next.js 14 (App Router) + React 18
- Estilos: Tailwind CSS v4 (via `@theme` e `@tailwindcss/postcss`)
- Animações: Framer Motion
- Flowchart: React Flow
- Linguagem: JavaScript (ESM)

## Requisitos
- Node.js >= 18.17 (recomendado 20.x)
- NPM >= 9

## Scripts NPM
- `npm run dev` — Executa o servidor de desenvolvimento em `http://localhost:3000`
- `npm run build` — Gera build de produção
- `npm run start` — Inicia servidor de produção (após `build`)

## Estrutura do Projeto
```
app/
  layout.jsx        # Layout global, importa CSS global e React Flow CSS
  page.jsx          # Página principal (Client Component)
src/
  App.jsx           # Composição das seções da landing
  components/       # Componentes reutilizáveis (Hero, About, etc.)
  styles/
    main.css        # Tailwind v4 + @theme (tokens de design)
postcss.config.js   # Configuração PostCSS (ESM) com @tailwindcss/postcss
package.json        # Scripts e dependências
```

## Convenções Importantes
- App Router (Next 14):
  - Componentes são Server Components por padrão. Use `"use client"` no topo apenas quando necessário (ex.: Framer Motion, React Flow, handlers de eventos globais do browser).
  - Páginas ficam em `app/`. Rotas adicionais = novas pastas com `page.jsx`.
  - Metadados globais (title/description) ficam em `app/layout.jsx` via `export const metadata`.
- CSS/Tailwind:
  - Tailwind v4 usa `@import "tailwindcss";` e `@theme` direto no CSS. Não há `tailwind.config.js` por padrão.
  - O plugin é `@tailwindcss/postcss` (configurado em `postcss.config.js` como ESM: `export default { ... }`).
  - CSS global deve ser importado em `app/layout.jsx` (não importe CSS global dentro de componentes).
- React Flow:
  - O CSS de React Flow (`reactflow/dist/style.css`) é importado uma única vez em `app/layout.jsx`.
- Pastas/Arquivos obsoletos:
  - Não recrie `index.html`, `vite.config.js` ou `src/main.jsx` (sistema antigo do Vite).
  - Não use `import.meta` ou qualquer referência específica do Vite.

## Estilo de Código
- Use nomes descritivos para variáveis/props e evite abreviações ambíguas.
- Componentes funcionais com props tipadas por JSDoc quando útil.
- Sem comentários ruidosos; mantenha o código legível e autoexplicativo.
- Evite lógica complexa dentro de JSX — extraia funções/helpers.

## Como Desenvolver
1. `npm install`
2. `npm run dev`
3. Acesse `http://localhost:3000`

Alterações visuais relevantes:
- `src/styles/main.css`: tokens de marca, cores, espaçamentos, tipografia (via `@theme`).
- `src/components/*`: seções da landing. Ajuste textos/dados aqui.

## Build e Deploy
- Produção local:
  - `npm run build` e `npm run start`
- Deploy recomendado: Vercel (Next.js nativo)
  - Sem configurações especiais; o projeto já está pronto para App Router.

## Limpeza de Caches (quando necessário)
- Next.js: `rm -rf .next`
- Turbo: `rm -rf .turbo`
- Vite (legado, se sobrar algo): `rm -rf node_modules/.vite`
- Reset completo: `rm -rf node_modules package-lock.json && npm install`

## Padrões para Novas Funcionalidades
- Novas páginas: crie pastas em `app/<rota>/page.jsx`. Ex.: `app/sobre/page.jsx`.
- Novos componentes: `src/components/` e importe na página/`App.jsx` conforme necessário.
- Estilos: use utilitários do Tailwind. Se precisar de classes globais, defina em `main.css`.
- Animações: Framer Motion apenas em Client Components (`"use client"`).

## Boas Práticas Next.js
- Prefira Server Components quando possível (melhor performance e bundle menor).
- Não acesse `window`/`document` fora de Client Components.
- Imagens: considere `next/image` para otimização quando adicionar assets.
- SEO: ajuste `metadata` em `app/layout.jsx` (e nas rotas se necessário via `generateMetadata`).

## Segurança e `.env`
- Se precisar de variáveis de ambiente, crie `.env.local` (não commitar).
- Use `process.env.NOME` em Server Components ou APIs. Em Client Components, exponha apenas variáveis com prefixo `NEXT_PUBLIC_`.

## Diagnóstico e Validação
- Build de verificação: `npm run build` (assegura que PostCSS/ESM, Tailwind e imports estão corretos).
- Erros comuns:
  - "module is not defined" em PostCSS: garanta que `postcss.config.js` exporta ESM (`export default`).
  - CSS global importado dentro de componente: mova para `app/layout.jsx`.
  - Uso de APIs do browser em Server Component: marque com `"use client"`.

## Anti‑Padrões (Evitar)
- Reintroduzir Vite (qualquer arquivo de config ou `import.meta`).
- Criar `index.html` no root (Next.js não usa HTML estático de entrada).
- Duplicar import de `reactflow/dist/style.css` (manter apenas em `app/layout.jsx`).

## Tarefas Frequentes
- Ajustar textos/estatísticas: editar componentes em `src/components/`.
- Ajustar paleta/tema: editar tokens em `src/styles/main.css` (`@theme`).
- Adicionar seção nova: criar componente em `src/components` e importar em `src/App.jsx`.

## Contato & Contexto
- Projeto: Landing de apresentação de Agentes de IA para a Gastrocenter.
- Objetivo: página de apresentação performática, estável e fácil de ajustar.

— Fim do guia —

