#!/usr/bin/env bun

import * as p from "@clack/prompts";
import pc from "picocolors";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { $ } from "bun";
import { AI_CONFIGS, type AIProvider } from "./ai-configs";

interface GitHubOrg {
  login: string;
}

async function checkGitHubCli(): Promise<{
  installed: boolean;
  authenticated: boolean;
  username: string | null;
  orgs: string[];
}> {
  try {
    // Check if gh is installed
    const ghVersion = await $`gh --version`.quiet().nothrow();
    if (ghVersion.exitCode !== 0) {
      return { installed: false, authenticated: false, username: null, orgs: [] };
    }

    // Check if authenticated
    const authStatus = await $`gh auth status`.quiet().nothrow();
    if (authStatus.exitCode !== 0) {
      return { installed: true, authenticated: false, username: null, orgs: [] };
    }

    // Get username
    const username = (await $`gh api user --jq '.login'`.quiet().text()).trim();

    // Get user's organizations
    const orgsJson = await $`gh api user/orgs --jq '.[].login'`.quiet().text();
    const orgs = orgsJson.trim().split("\n").filter(Boolean);

    return { installed: true, authenticated: true, username, orgs };
  } catch {
    return { installed: false, authenticated: false, username: null, orgs: [] };
  }
}

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
            { value: "gemini", label: "Gemini CLI", hint: "Google" },
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

  // GitHub repository setup
  s.start("Checking GitHub CLI...");
  const gh = await checkGitHubCli();

  if (!gh.installed) {
    s.stop(pc.dim("GitHub CLI not found (skipping repo setup)"));
  } else if (!gh.authenticated) {
    s.stop(pc.dim("GitHub CLI not authenticated (skipping repo setup)"));
  } else {
    s.stop(`GitHub CLI ready (${gh.username})`);

    const createRepo = await p.confirm({
      message: "Create GitHub repository?",
      initialValue: false,
    });

    if (p.isCancel(createRepo)) {
      p.cancel("Setup cancelled");
      process.exit(0);
    }

    if (createRepo) {
      // Build options: personal account + user's orgs
      const repoOptions: { value: string; label: string; hint?: string }[] = [
        { value: gh.username!, label: gh.username!, hint: "personal account" },
        ...gh.orgs.map((org) => ({ value: org, label: org })),
      ];

      const repoOwner = await p.select({
        message: "Where to create the repository?",
        options: repoOptions,
      });

      if (p.isCancel(repoOwner)) {
        p.cancel("Setup cancelled");
        process.exit(0);
      }

      const repoVisibility = await p.select({
        message: "Repository visibility:",
        options: [
          { value: "private", label: "Private", hint: "recommended" },
          { value: "public", label: "Public" },
        ],
      });

      if (p.isCancel(repoVisibility)) {
        p.cancel("Setup cancelled");
        process.exit(0);
      }

      s.start("Creating GitHub repository...");
      try {
        const repoName = config.name as string;
        const owner = repoOwner as string;
        const visibility = repoVisibility as string;
        const isPersonal = owner === gh.username;

        // Remove existing origin if any
        await $`git remote remove origin`.quiet().nothrow();

        // Create repo
        if (isPersonal) {
          await $`gh repo create ${repoName} --${visibility} --source=. --remote=origin`.quiet();
        } else {
          await $`gh repo create ${owner}/${repoName} --${visibility} --source=. --remote=origin`.quiet();
        }

        s.stop(`Repository created: ${pc.cyan(`github.com/${owner}/${repoName}`)}`);
      } catch {
        s.stop(pc.red("Error creating repository"));
      }
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
