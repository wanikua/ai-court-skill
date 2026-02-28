---
name: ai-court
description: "Deploy a multi-agent AI team on Discord using Clawdbot, inspired by the Ming Dynasty Six Ministries. Use when setting up, configuring, scaling, or troubleshooting a multi-bot Discord workspace with specialized agents (coding, finance, marketing, DevOps, legal, etc.)."
homepage: https://github.com/wanikua/ai-court-skill
metadata: {"clawdbot":{"emoji":"🏛️","requires":{"bins":["clawdbot"]},"install":[{"id":"node","kind":"node","package":"clawdbot","bins":["clawdbot"],"label":"Install Clawdbot"}]}}
---

# AI 朝廷 — Multi-Agent Discord Workspace

Deploy a team of specialized AI agents on Discord. Each agent is an independent bot with its own expertise, identity, and model.

## Quick Start

Run the setup script on a fresh Ubuntu server (Oracle Cloud ARM recommended):

```bash
bash scripts/setup.sh
```

Then fill in API keys and Discord bot tokens in `~/.clawdbot/clawdbot.json`.

## Architecture

```
用户 @兵部 写个登录API
       ↓
Discord → Clawdbot Gateway → Agent (Claude Opus)
                                ↓
                         读取 SOUL.md / IDENTITY.md
                                ↓
                           执行任务 → 回复
```

- **司礼监** (main) — 调度中枢，Sonnet 快速响应
- **兵部** — 软件工程、架构（Opus）
- **户部** — 财务、成本（Opus）
- **礼部** — 营销、内容（Sonnet）
- **工部** — DevOps、运维（Sonnet）
- **吏部** — 项目管理（Sonnet）
- **刑部** — 法务合规（Sonnet）

Extend with more agents as needed (都察院、翰林院、太医院...).

## Config Template

Full config template: [references/clawdbot-template.json](references/clawdbot-template.json)

Key points:
- Each Discord account **MUST** have `"groupPolicy": "open"` explicitly — it does NOT inherit from the global setting
- `identity.theme` defines the agent's persona and speaking style
- `bindings` maps each agent to its Discord bot account

## Workspace Files

The setup script creates these in the workspace directory:

| File | Purpose |
|---|---|
| `SOUL.md` | Core behavior rules (concise, report promptly, think before act) |
| `IDENTITY.md` | Org structure and model tiers |
| `USER.md` | Info about the human owner |
| `AGENTS.md` | Group chat rules, memory protocol, heartbeat behavior |

## Sandbox Configuration

By default sandbox is off. To enable sandboxed execution for non-main agents:

```json
"sandbox": {
  "mode": "all",
  "workspaceAccess": "rw",
  "docker": {
    "network": "bridge",
    "env": { "ANTHROPIC_API_KEY": "sk-..." }
  }
}
```

- `workspaceAccess: "rw"` — mount workspace (including skills folder) read-write
- `docker.network: "bridge"` — allow network access (default is `"none"`, breaks most skills)
- `docker.env` — pass API keys into the container (sandbox does NOT inherit host env vars)

## Troubleshooting

### @everyone doesn't trigger agents
Each bot needs **Message Content Intent** + **Server Members Intent** enabled in Discord Developer Portal, and the bot role needs **View Channels** permission in the server.

### Agent can't write files
Either set `sandbox.mode: "off"`, or configure `workspaceAccess`, `docker.network`, and `docker.env` as shown above.

### Agent drops all group messages silently
Each Discord account entry must have `"groupPolicy": "open"` set explicitly. The global `groupPolicy` is NOT inherited by individual accounts — they default to `"allowlist"`.

### Model config errors
Only `"primary"` key is supported under `agents.defaults.model`. No `tools`/`coding` sub-keys.

## Adding More Agents

1. Add agent to `agents.list` with unique `id` and `identity.theme`
2. Create a Discord bot at [discord.com/developers](https://discord.com/developers/applications)
3. Enable **Message Content Intent** + **Server Members Intent**
4. Add account entry in `channels.discord.accounts` with token and `"groupPolicy": "open"`
5. Add binding in `bindings` array
6. Invite bot to server, restart gateway
