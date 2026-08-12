# Política de segurança

## Versões suportadas

Este repositório é um template: cada projeto criado a partir dele passa a ser
mantido por quem o criou. Correções de segurança são aplicadas apenas na branch
`main`, que é a fonte usada pelo `@nimbuslab/cli` e pelo `bunx degit`.

Projetos gerados antes de uma correção não são atualizados automaticamente.
Compare o seu `package.json` com o do template e atualize as dependências
afetadas.

## Como reportar uma vulnerabilidade

Não abra issue pública para vulnerabilidade.

Escreva para **contato@nimbuslab.com.br** com:

- descrição do problema e do impacto;
- passos para reproduzir, de preferência com um projeto mínimo;
- versões de `next`, `react`, Bun e Node;
- qualquer sugestão de correção que você já tenha.

Confirmamos o recebimento antes de qualquer divulgação pública e mantemos você
informado até a correção sair. Pedimos que a divulgação pública aconteça só
depois que a correção estiver publicada em `main`.

## Escopo

Está no escopo o que este repositório entrega:

- o código em `src/`, os scripts em `scripts/` e a configuração do build;
- a configuração do `Dockerfile` e do `next.config.ts`;
- versões de dependências declaradas no `package.json` que exponham o projeto
  gerado a uma vulnerabilidade conhecida.

Está fora do escopo:

- vulnerabilidades em dependências de terceiros, que devem ser reportadas ao
  projeto de origem (por exemplo, Next.js, React ou Tailwind CSS);
- problemas de configuração do ambiente de quem usa o template;
- problemas na plataforma de hospedagem escolhida no deploy.

## Verificando as dependências do seu projeto

```bash
bun audit
```

Rode esse comando logo depois de criar o projeto e sempre que atualizar as
dependências.
