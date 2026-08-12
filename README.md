<div align="center">

# create-next-landing

**Template de landing page em Next.js 16, com App Router e Server Components.**
React 19, Tailwind CSS 4, shadcn/ui e setup interativo que gera documentação para assistentes de IA.

[Read in English](./docs/README.md)

[![license](https://img.shields.io/github/license/nimbuslab/create-next-landing?color=FF5500)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-FF5500)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-FF5500)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-FF5500)](https://tailwindcss.com)

[Instalação](#instalação) · [Quick start](#quick-start) · [Estrutura](#estrutura-do-projeto) · [Deploy](#deploy) · [Roadmap](#roadmap)

</div>

---

## Por que create-next-landing

- **Nove seções prontas**: header fixo, hero, features, how it works, showcase, tech stack, FAQ, CTA e footer, todas responsivas e com dark mode
- **Server Components por padrão**: `"use client"` só no header, no FAQ e no seletor de tema
- **Tailwind CSS 4 nativo**: configuração CSS-first em `src/app/globals.css`, sem `tailwind.config.ts`
- **shadcn/ui no estilo new-york**: Button, Card e Badge já instalados, prontos para receber o resto do catálogo
- **Setup interativo**: `bun run setup` renomeia o projeto, define o tema padrão e gera o arquivo de contexto do seu assistente de IA
- **Docker testado**: `output: "standalone"` no `next.config.ts` e um `Dockerfile` multi-stage na raiz que sobe e responde
- **CI incluída**: typecheck, lint e build em todo pull request

## Instalação

### Com a CLI da nimbuslab

O caminho mais completo, com setup interativo e documentação para IA:

```bash
bunx @nimbuslab/cli create minha-landing --landing
cd minha-landing
bun run dev
```

A CLI clona o template, configura serviços de forma interativa, gera os arquivos
de contexto para assistentes de IA (`AGENTS.md`, `CLAUDE.md`, `llms.txt`,
`ARCHITECTURE.md`, `EXAMPLES.md`, `.cursorrules` e
`.github/copilot-instructions.md`) e inicializa o Git.

### Clonando o template direto

```bash
bunx degit nimbuslab/create-next-landing minha-landing
cd minha-landing
bun install
bun run dev
```

Abra [http://localhost:3000](http://localhost:3000).

> O pacote `@nimbuslab/create-next-landing` não está publicado no npm. Os dois
> caminhos acima são os que funcionam hoje.

## Quick start

Depois de instalar, rode o setup interativo:

```bash
bun run setup
```

Ele pergunta o nome do projeto, o tema padrão (`dark`, `light` ou `system`) e
qual assistente de IA você usa. Em seguida:

- reescreve o campo `name` do `package.json`;
- troca o `defaultTheme` em `src/app/layout.tsx`;
- gera `CLAUDE.md`, `.cursorrules`, `.windsurfrules` ou
  `.github/copilot-instructions.md`, conforme a sua resposta.

Para editar o conteúdo da página, comece por `src/components/landing/hero.tsx` e
siga a ordem de composição em `src/app/page.tsx`.

## Stack

| Tecnologia | Versão | Papel |
|---|---|---|
| [Next.js](https://nextjs.org) | `16.3` | App Router, Server Components, Turbopack |
| [React](https://react.dev) | `19.2` | Biblioteca de interface |
| [TypeScript](https://www.typescriptlang.org) | `5.9` | Tipagem estática em modo strict |
| [Tailwind CSS](https://tailwindcss.com) | `4.1` | Estilização com configuração CSS-first |
| [shadcn/ui](https://ui.shadcn.com) | `new-york` | Componentes acessíveis sobre Radix UI |
| [next-themes](https://github.com/pacocoursey/next-themes) | `0.4` | Dark mode com `dark` como padrão |
| [Lucide](https://lucide.dev) | `0.563` | Ícones |
| [ESLint](https://eslint.org) | `9` | Análise estática |
| [Bun](https://bun.sh) | `1.3+` | Runtime e gerenciador de pacotes |

Node 20.9 ou superior é o mínimo exigido pelo Next 16.

## Estrutura do projeto

```
.
├── .github/workflows/ci.yml     # Typecheck, lint e build
├── Dockerfile                   # Build multi-stage com saída standalone
├── docs/
│   ├── COMPONENTS.md            # Referência dos componentes
│   └── CUSTOMIZATION.md         # Guia de personalização
├── scripts/
│   ├── setup.ts                 # Wizard de setup interativo
│   └── ai-configs.ts            # Modelos de configuração para IA
└── src/
    ├── app/
    │   ├── layout.tsx           # Layout raiz, fontes e metadados
    │   ├── page.tsx             # Composição da página
    │   ├── globals.css          # Tokens de design e estilos globais
    │   └── icon.svg             # Favicon
    ├── components/
    │   ├── landing/
    │   │   ├── header.tsx       # Navegação fixa com menu mobile
    │   │   ├── hero.tsx         # Headline, CTAs e snippet copiável
    │   │   ├── features.tsx     # Seis cards de recurso
    │   │   ├── how-it-works.tsx # Processo em três passos
    │   │   ├── showcase.tsx     # Quatro projetos de exemplo
    │   │   ├── tech-stack.tsx   # Tecnologias em badges
    │   │   ├── faq.tsx          # Oito perguntas em acordeão
    │   │   ├── cta.tsx          # Chamada final
    │   │   ├── footer.tsx       # Rodapé com links e redes
    │   │   └── index.ts         # Barrel file das seções
    │   ├── ui/                  # Componentes shadcn/ui
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   └── badge.tsx
    │   ├── theme-provider.tsx   # Provider do next-themes
    │   └── theme-toggle.tsx     # Alternador de tema
    └── lib/
        └── utils.ts             # Utilitários, incluindo cn()
```

## Scripts disponíveis

```bash
bun run dev        # Servidor de desenvolvimento com Turbopack
bun run build      # Build de produção
bun run start      # Servidor de produção
bun run lint       # Verifica com ESLint, sem alterar arquivos
bun run lint:fix   # Corrige o que o ESLint conseguir corrigir
bun run typecheck  # Verifica os tipos com tsc --noEmit
bun run setup      # Setup interativo do projeto
```

Use sempre `bun run <script>`. No bun 1.3, `bun build` chama o bundler nativo e
falha com `error: Missing entrypoints`, ignorando o script do `package.json`.

## Adicionando componentes

O template já traz Button, Card e Badge. Para o resto do catálogo:

```bash
bunx --bun shadcn@latest add form
bunx --bun shadcn@latest add dialog
bunx --bun shadcn@latest add accordion
```

Catálogo completo em [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components).

## Personalização

### Tema e cores

Os tokens de design ficam em `src/app/globals.css`, como variáveis CSS: cores,
raio de borda, fontes e sombras. O tema padrão é definido em
`src/app/layout.tsx`, na prop `defaultTheme` do `ThemeProvider`.

### Seções

Cada seção em `src/components/landing/` é independente. Para remover uma, apague
o arquivo, tire o export de `index.ts` e o uso de `src/app/page.tsx`.

### Metadados e SEO

Atualize o objeto `metadata` em `src/app/layout.tsx`, incluindo `metadataBase`,
`openGraph` e `alternates.canonical`, que hoje apontam para o repositório do
template.

Detalhes em [docs/CUSTOMIZATION.md](./docs/CUSTOMIZATION.md) e a referência de
cada componente em [docs/COMPONENTS.md](./docs/COMPONENTS.md).

## Deploy

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nimbuslab/create-next-landing)

Ou pela linha de comando:

```bash
bunx vercel
```

### Docker

O `Dockerfile` da raiz faz o build em multi-stage e serve a saída standalone do
Next:

```bash
docker build -t minha-landing .
docker run -p 3000:3000 minha-landing
```

As dependências são instaladas com bun; o build e o runtime usam node, porque o
`next build` termina em `SIGILL` sob o runtime do bun dentro do container.

### Outras plataformas

Qualquer plataforma que rode Next.js serve, entre elas Netlify, Railway, Dokploy
e Coolify.

## Roadmap

- [x] Nove seções de landing page com dark mode
- [x] Setup interativo com geração de contexto para assistentes de IA
- [x] Saída standalone e Dockerfile validado
- [x] CI com typecheck, lint e build
- [ ] Demo pública hospedada, para virar a homepage do repositório
- [ ] Versões em português de `docs/COMPONENTS.md` e `docs/CUSTOMIZATION.md`
- [ ] Imagens próprias no showcase, no lugar das fotos remotas do Unsplash
- [ ] Verificação automatizada de acessibilidade na CI

## Perguntas frequentes

**Dá para usar npm ou pnpm no lugar do Bun?**
Sim. Troque `bun run` pelo comando equivalente. O template é testado com Bun.

**Preciso da CLI da nimbuslab?**
Não. O `bunx degit` entrega o mesmo template. A CLI acrescenta a configuração
interativa de serviços e os arquivos de contexto para IA.

**Dá para remover seções que eu não uso?**
Sim. Cada seção é um componente independente, sem dependência entre elas.

**As imagens do showcase são minhas?**
Não. `src/components/landing/showcase.tsx` usa fotos remotas do Unsplash,
liberadas em `next.config.ts` via `images.remotePatterns`. Troque pelas suas
antes de publicar.

## Contribuindo

Leia o [CONTRIBUTING.md](./CONTRIBUTING.md): fluxo de branches, padrão de commits
em português e a sequência de verificação que a CI executa.

Para reportar bugs, abra uma
[issue](https://github.com/nimbuslab/create-next-landing/issues).
Para vulnerabilidades, siga o [SECURITY.md](./SECURITY.md).

## Licença

[MIT](./LICENSE) © [nimbuslab](https://nimbuslab.com.br)

<div align="center">

Construído em Brasília, DF, Brasil

</div>
