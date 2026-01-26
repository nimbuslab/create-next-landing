#!/usr/bin/env bun

import * as p from "@clack/prompts";
import pc from "picocolors";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { AI_CONFIGS, type AIProvider } from "./ai-configs";

async function main() {
  console.log();
  console.log(pc.cyan("  create-next-landing setup"));
  console.log();

  p.intro(pc.bgCyan(pc.black(" Project Setup ")));

  const config = await p.group(
    {
      name: () =>
        p.text({
          message: "Project name:",
          placeholder: "my-landing",
          validate: (v) => (v ? undefined : "Name is required"),
        }),
      theme: () =>
        p.select({
          message: "Default theme:",
          options: [
            { value: "dark", label: "Dark", hint: "recommended" },
            { value: "light", label: "Light" },
            { value: "system", label: "System", hint: "follows OS preference" },
          ],
        }),
      aiAssistant: () =>
        p.select({
          message: "Which AI assistant do you use?",
          options: [
            { value: "claude", label: "Claude Code", hint: "Anthropic" },
            { value: "cursor", label: "Cursor", hint: "AI-first editor" },
            { value: "copilot", label: "GitHub Copilot" },
            { value: "windsurf", label: "Windsurf", hint: "Codeium" },
            { value: "none", label: "None", hint: "skip AI config" },
          ],
        }),
    },
    {
      onCancel: () => {
        p.cancel("Setup cancelled");
        process.exit(0);
      },
    }
  );

  const s = p.spinner();

  // Update package.json
  s.start("Updating package.json...");
  try {
    const pkgPath = "package.json";
    const pkg = JSON.parse(await readFile(pkgPath, "utf-8"));
    pkg.name = config.name;
    await writeFile(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
    s.stop("package.json updated");
  } catch {
    s.stop("Error updating package.json");
  }

  // Update theme in layout.tsx
  s.start("Configuring theme...");
  try {
    const layoutPath = "src/app/layout.tsx";
    let layout = await readFile(layoutPath, "utf-8");
    layout = layout.replace(
      /defaultTheme="(dark|light|system)"/,
      `defaultTheme="${config.theme}"`
    );
    await writeFile(layoutPath, layout);
    s.stop(`Theme set to ${config.theme}`);
  } catch {
    s.stop("Error configuring theme");
  }

  // Generate AI config
  if (config.aiAssistant !== "none") {
    s.start(`Generating ${config.aiAssistant} config...`);
    try {
      const aiConfig = AI_CONFIGS[config.aiAssistant as AIProvider];
      const content = aiConfig.content("landing");

      // Create directory if needed (for copilot)
      if (aiConfig.filename.includes("/")) {
        const dir = aiConfig.filename.split("/").slice(0, -1).join("/");
        await mkdir(dir, { recursive: true });
      }

      await writeFile(aiConfig.filename, content);
      s.stop(`${aiConfig.filename} created`);
    } catch {
      s.stop("Error generating AI config");
    }
  }

  p.outro(pc.green("Setup complete!"));

  console.log();
  console.log(pc.bold("Next steps:"));
  console.log();
  console.log(`  ${pc.cyan("bun")} dev`);
  console.log();
}

main().catch(console.error);
