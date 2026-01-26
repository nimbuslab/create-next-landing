# create-next-landing

Template pronto para producao para criar landing pages modernas com as tecnologias mais recentes.

[Read in English](../README.md)

## Stack

- **Next.js 16** - App Router, Server Components, Turbopack
- **React 19** - Recursos mais recentes e melhorias de performance
- **Tailwind CSS 4** - CSS utilitario com configuracao CSS-first
- **shadcn/ui** - Componentes acessiveis e customizaveis
- **TypeScript** - Tipagem completa com modo strict
- **Bun** - Runtime JavaScript e gerenciador de pacotes rapido

## Inicio Rapido

```bash
# Criar novo projeto
bunx @nimbuslab/create-next-landing minha-landing

# Navegar para o projeto
cd minha-landing

# Instalar dependencias
bun install

# Iniciar servidor de desenvolvimento
bun dev
```

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx      # Layout raiz com metadata
│   ├── page.tsx        # Pagina inicial
│   └── globals.css     # Estilos globais e variaveis CSS
├── components/
│   ├── landing/        # Secoes da landing page
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── cta.tsx
│   │   └── footer.tsx
│   └── ui/             # Componentes shadcn/ui
└── lib/
    └── utils.ts        # Funcoes utilitarias
```

## Scripts Disponiveis

```bash
bun dev       # Iniciar servidor de desenvolvimento com Turbopack
bun build     # Build para producao
bun start     # Iniciar servidor de producao
bun lint      # Executar ESLint
```

## Adicionando Componentes

Use shadcn/ui para adicionar mais componentes:

```bash
bunx --bun shadcn@latest add [nome-do-componente]
```

Componentes disponiveis: https://ui.shadcn.com/docs/components

## Customizacao

### Tema

Edite `src/app/globals.css` para customizar cores, bordas e outros tokens de design.

### Componentes

Os componentes da landing page estao em `src/components/landing/`. Cada secao e um componente separado para facil customizacao.

### Metadata

Atualize os metadados SEO em `src/app/layout.tsx`.

## Performance

Este template e otimizado para performance:

- Server Components por padrao
- Code splitting automatico
- Otimizacao de imagens com next/image
- Otimizacao de fontes com next/font
- Otimizacao de CSS com Tailwind CSS 4

## Deploy

### Vercel (Recomendado)

```bash
bunx vercel
```

### Docker

```dockerfile
FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun:1-slim
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["bun", "server.js"]
```

## Contribuindo

Contribuicoes sao bem-vindas! Por favor, leia nossas diretrizes de contribuicao antes de enviar um PR.

## Licenca

Licenca MIT - veja [LICENSE](../LICENSE) para detalhes.

---

Feito com cuidado no Brasil por [nimbuslab](https://nimbuslab.com.br)
