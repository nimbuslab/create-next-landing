# Contribuindo com o create-next-landing

Este template é mantido pela equipe da **nimbuslab**. Contribuições externas são
bem-vindas, mas o projeto segue uma direção interna alinhada aos produtos da
nimbuslab e aos clientes atendidos.

## Como contribuir

### Reportar bugs ou sugerir melhorias

Abra uma [issue](https://github.com/nimbuslab/create-next-landing/issues)
descrevendo:

- o que você esperava que acontecesse e o que aconteceu;
- versões de Bun, Node e sistema operacional;
- os passos exatos para reproduzir.

Vulnerabilidades de segurança não vão para issues públicas. Siga o
[SECURITY.md](./SECURITY.md).

### Pull requests

- **Correções de bug** com reprodução clara são sempre bem-vindas.
- **Novas seções da landing page ou mudanças de design** costumam ser aceitas
  só por convite. Abra uma issue antes de implementar.
- **Melhorias de documentação e de tipagem** são sempre bem-vindas.

## Setup local

```bash
git clone git@github.com:nimbuslab/create-next-landing.git
cd create-next-landing
bun install
bun run dev
```

Antes de abrir o PR, rode a mesma sequência que a CI executa:

```bash
bun install --frozen-lockfile
bun run typecheck
bun run lint
bun run build
```

Nunca escreva `bun build`: no bun 1.3 esse comando chama o bundler nativo e
falha com `error: Missing entrypoints`, ignorando o script do `package.json`.
O correto é `bun run build`.

## Fluxo de branches

```
<tipo>/<descricao>  ->  develop  ->  main
     trabalho          integração    template publicado
```

1. Crie a branch a partir de `develop` atualizado:
   `git switch -c fix/corrige-x origin/develop`
2. Abra o PR para `develop`. Os tipos usados são `feat/`, `fix/`, `chore/`,
   `docs/`, `refactor/` e `ci/`.
3. Quando `develop` estiver estável, um PR promove tudo para `main`.

`main` é a branch padrão do repositório, e é dela que o
`@nimbuslab/cli create <nome> --landing` clona o template. Todo commit que chega
em `main` vira template para quem criar um projeto novo.

Não faça push direto em `develop` nem em `main`.

## Padrão de commits

Conventional Commits em português brasileiro, com acentuação correta:

```
tipo(escopo): descrição do que o commit faz
```

- **Idioma:** português brasileiro. Termos técnicos e identificadores de código
  ficam em inglês.
- **Descrição:** diga o que o commit faz, não como.
- **Sem emojis.**
- **Sem assinatura de ferramenta ou de IA:** nada de `Co-Authored-By`,
  `Generated with` ou equivalentes.
- **Commits atômicos:** um assunto por commit.

Exemplos:

```
fix(landing): corrige quebra do menu mobile em telas de 320px
feat(seo): adiciona metadados Open Graph na página inicial
docs: documenta o script de setup interativo
```

## Padrão de código

- TypeScript em modo strict; `unknown` em vez de `any`.
- Server Components por padrão; `"use client"` só quando necessário.
- Arquivos em `kebab-case`, componentes em `PascalCase`.
- Named exports, nunca default export nos componentes de seção.
- Estilização com Tailwind CSS e `cn()` para merge de classes.
- Variantes com `class-variance-authority`.
- Acessibilidade primeiro: prefira primitivos Radix via shadcn/ui.
- `next/image` em vez de `<img>`.

## Antes de mesclar

- [ ] CI verde (`typecheck`, `lint` e `build`)
- [ ] Sem conflito com a branch base
- [ ] Título do PR em português, no mesmo padrão dos commits
- [ ] Documentação atualizada quando o comportamento muda

Todo comando escrito no README precisa existir de fato. Se o seu PR muda um
script, atualize o `README.md` da raiz e a versão em inglês em `docs/README.md`
no mesmo PR.

## Licença

Ao contribuir, você concorda em licenciar sua contribuição sob a
[MIT](./LICENSE).
