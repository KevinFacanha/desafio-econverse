# Desafio Front-End — Econverse (Pixel Perfect)

Projeto desenvolvido para o desafio técnico Front-End da **Econverse**, com foco em **pixel-perfect no desktop (1440px)** e **responsividade com bom senso**, seguindo as regras do README do desafio.

---

## Stack / Regras do desafio
- **React + TypeScript + Vite**
- **SCSS / SCSS Modules**
- **Sem bibliotecas de UI** (nada de MUI/Chakra/Bootstrap/Tailwind)
- Componentização por seção, código limpo e organizado
- Semântica e acessibilidade básica (botões, aria-label quando necessário)

---

## O que foi implementado
- Header (TopBar, MainBar e NavBar)
- Banner/Hero
- Seção “Compre por categoria”
- Seção “Produtos relacionados” com carrossel e tabs
- Seção de parceiros / banners
- Newsletter
- Footer
- Modal do produto (ao clicar em **COMPRAR**)

---

## Fonte de dados (Produtos) — FIEL AO JSON
A vitrine e o modal consomem o JSON do desafio via `fetch`.

**Contrato utilizado (exatamente como no JSON):**
- `productName`
- `descriptionShort`
- `photo`
- `price`

### `price` vem em centavos
O campo `price` é tratado como **centavos** e formatado para BRL na UI.

Exemplo:
- `15000` → **R$ 150,00**

### Decisão importante (por requisito do desafio)
Por boas práticas e por fidelidade ao requisito da vaga, os **cards** exibem **somente nome + preço** (sem preço antigo, parcelamento ou frete grátis), pois esses campos **não existem no JSON** fornecido.

O **modal** segue a mesma regra: usa **apenas** `productName`, `descriptionShort`, `photo` e `price`.

---

## Observação sobre CORS no DEV (Vite Proxy)
Em ambiente local, chamadas diretas para o endpoint externo podem falhar por **CORS**.  
Por isso, no **DEV** é usado um **proxy do Vite** (`/api/products`).  
Em **produção**, o fetch usa a URL real do endpoint.

> Arquivos relacionados: `vite.config.ts` e `src/services/products.ts`

---

## Como rodar o projeto
```bash
npm install
npm run dev
