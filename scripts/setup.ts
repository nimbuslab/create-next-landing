#!/usr/bin/env bun

import * as p from "@clack/prompts";
import pc from "picocolors";

async function main() {
  console.log();
  console.log(pc.cyan("  create-next-landing"));
  console.log();

  p.intro(pc.bgCyan(pc.black(" Project Setup ")));

  p.note(
    `This template was already configured by the CLI.\n\nRun ${pc.cyan("bun dev")} to start development.`,
    "Ready to go!"
  );

  p.outro(pc.green("Happy coding!"));

  console.log();
  console.log(pc.bold("Commands:"));
  console.log();
  console.log(`  ${pc.cyan("bun")} dev       Start development server`);
  console.log(`  ${pc.cyan("bun")} build     Production build`);
  console.log(`  ${pc.cyan("bun")} lint      Run ESLint`);
  console.log();
}

main().catch(console.error);
