import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera .next/standalone com um servidor autocontido, usado pelo Dockerfile.
  output: "standalone",
  // O "next dev" reescreve AGENTS.md e CLAUDE.md a cada execução. Neste
  // template esses arquivos são gerados pelo "bun run setup" e pela CLI da
  // nimbuslab, então a geração automática fica desligada para não sobrescrever
  // o conteúdo do projeto nem sujar a árvore de trabalho.
  agentRules: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
