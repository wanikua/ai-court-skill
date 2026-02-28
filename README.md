# 🏛️ AI Court Skill for Clawdbot

Multi-agent AI team on Discord, inspired by the Ming Dynasty Six Ministries.

7 specialized agents, each an independent Discord bot — `@兵部` writes code, `@户部` manages finances, `@everyone` triggers all.

## Install

```bash
# One-liner on a fresh Ubuntu server
bash <(curl -fsSL https://raw.githubusercontent.com/wanikua/ai-court-skill/main/ai-court/scripts/setup.sh)
```

Or install as a Clawdbot skill:

```bash
# Clone into your skills directory
git clone https://github.com/wanikua/ai-court-skill.git ~/.clawdbot/skills/ai-court
```

## What You Get

```
ai-court/
├── SKILL.md                          # Skill definition
├── scripts/
│   └── setup.sh                      # One-click server setup
└── references/
    ├── clawdbot-template.json        # Full config template (7 agents)
    ├── SOUL.md                       # Agent behavior rules
    ├── IDENTITY.md                   # Org structure
    ├── USER.md                       # Owner info template
    └── AGENTS.md                     # Group chat & memory protocol
```

## Quick Start

1. Run `setup.sh` (installs Node.js, Clawdbot, initializes workspace)
2. Fill in `~/.clawdbot/clawdbot.json`:
   - Anthropic API Key → [console.anthropic.com](https://console.anthropic.com)
   - Discord Bot Tokens (one per agent) → [discord.com/developers](https://discord.com/developers/applications)
3. Each bot: enable **Message Content Intent** + **Server Members Intent**
4. `systemctl --user start clawdbot-gateway`

## Agents

| Agent | Role | Model |
|---|---|---|
| 司礼监 (main) | Dispatcher, orchestration | Sonnet |
| 兵部 | Software engineering, architecture | Opus |
| 户部 | Finance, cost control | Opus |
| 礼部 | Marketing, content | Sonnet |
| 工部 | DevOps, infrastructure | Sonnet |
| 吏部 | Project management | Sonnet |
| 刑部 | Legal, compliance | Sonnet |

Add more agents by extending `agents.list`, `channels.discord.accounts`, and `bindings`.

## FAQ

**@everyone doesn't trigger agents?**
Enable **Message Content Intent** + **Server Members Intent** in Discord Developer Portal. Bot role needs **View Channels** permission.

**Sandbox permission errors?**
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

**Agents silently drop messages?**
Each account must have `"groupPolicy": "open"` explicitly — it does NOT inherit from global config.

## Links

- [Clawdbot Docs](https://docs.clawd.bot)
- [Tutorial (教程)](https://github.com/wanikua/boluobobo-ai-court-tutorial)
- [Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/)

## License

MIT
