---
name: ai-court
description: "Deploy a multi-agent AI team on Discord using Clawdbot, inspired by the Ming Dynasty Six Ministries. Use when setting up, configuring, scaling, or troubleshooting a multi-bot Discord workspace with specialized agents (coding, finance, marketing, DevOps, legal, etc.)."
homepage: https://github.com/wanikua/ai-court-skill
metadata: {"clawdbot":{"emoji":"🏛️","requires":{"bins":["clawdbot"]},"install":[{"id":"node","kind":"node","package":"clawdbot","bins":["clawdbot"],"label":"Install Clawdbot"}]}}
---

# AI 朝廷 — Multi-Agent Discord Workspace

Deploy a team of specialized AI agents on Discord. Each agent is an independent bot with its own expertise, identity, and model.

## Quick Start

1. Install Clawdbot: `npm install -g clawdbot`
2. Install this skill: `clawdhub install ai-court`
3. Copy `references/clawdbot-template.json` to `~/.clawdbot/clawdbot.json`
4. Fill in your Anthropic API key and Discord bot tokens
5. Start: `systemctl --user start clawdbot-gateway`

For full server setup (Node.js, Chromium, firewall, swap), see the [setup guide on GitHub](https://github.com/wanikua/ai-court-skill).

## Architecture

- **司礼监** (main) — 调度中枢，Sonnet 快速响应
- **兵部** — 软件工程、架构（Opus）
- **户部** — 财务、成本（Opus）
- **礼部** — 营销、内容（Sonnet）
- **工部** — DevOps、运维（Sonnet）
- **吏部** — 项目管理（Sonnet）
- **刑部** — 法务合规（Sonnet）

## Config

See [references/clawdbot-template.json](references/clawdbot-template.json) for the full config template.

- Each Discord account **MUST** have `"groupPolicy": "open"` explicitly
- `identity.theme` defines the agent's persona
- `bindings` maps each agent to its Discord bot

## Workspace Files

| File | Purpose |
|---|---|
| `SOUL.md` | Core behavior rules |
| `IDENTITY.md` | Org structure and model tiers |
| `USER.md` | Info about the human owner |
| `AGENTS.md` | Group chat rules, memory protocol |

## Sandbox

Off by default. To enable read-only sandboxed execution:

```json
"sandbox": {
  "mode": "all",
  "workspaceAccess": "ro",
  "docker": { "network": "none" }
}
```

Agents run in isolated containers with read-only workspace access and no network. The gateway handles all API authentication externally — agents do not need direct access to keys. See [Clawdbot docs](https://github.com/wanikua/ai-court-skill) for advanced sandbox options.

## Troubleshooting

- **@everyone doesn't trigger agents** — enable Message Content Intent + Server Members Intent in Discord Developer Portal
- **Agent drops messages** — set `"groupPolicy": "open"` on each Discord account entry
- **Model config errors** — only `"primary"` key under `agents.defaults.model`

## Adding More Agents

1. Add agent to `agents.list` with unique `id` and `identity.theme`
2. Create Discord bot, enable intents
3. Add account in `channels.discord.accounts` with `"groupPolicy": "open"`
4. Add binding, invite bot, restart gateway
