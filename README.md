# 🏛️ AI Court — Clawdbot Skill

Run a whole AI team on Discord. 7 bots, each with its own brain and job title, modeled after the Ming Dynasty cabinet.

`@兵部` writes your code. `@户部` watches your budget. `@everyone` wakes them all up.

## Install

```bash
# Fresh Ubuntu server? One line:
bash <(curl -fsSL https://raw.githubusercontent.com/wanikua/ai-court-skill/main/ai-court/scripts/setup.sh)
```

Already have Clawdbot?

```bash
# 从 ClawdHub 安装（推荐）：
clawdhub install ai-court

# 或直接 clone：
git clone https://github.com/wanikua/ai-court-skill.git ~/.clawdbot/skills/ai-court
```

## What's Inside

```
ai-court/
├── SKILL.md                          # Skill definition
├── scripts/
│   └── setup.sh                      # One-click server setup
└── references/
    ├── clawdbot-template.json        # Full 7-agent config, ready to fill in
    ├── SOUL.md                       # How agents behave
    ├── IDENTITY.md                   # Org chart
    ├── USER.md                       # About you (fill this in)
    └── AGENTS.md                     # Group chat + memory rules
```

## Get It Running

1. Run `setup.sh` — handles Node.js, Chromium, Clawdbot, workspace, everything
2. Open `~/.clawdbot/clawdbot.json`, fill in:
   - Anthropic API Key → [console.anthropic.com](https://console.anthropic.com)
   - Discord Bot Tokens (one per agent) → [discord.com/developers](https://discord.com/developers/applications)
3. For each bot, flip on **Message Content Intent** + **Server Members Intent**
4. `systemctl --user start clawdbot-gateway` — done

## The Team

| Agent | Job | Model |
|---|---|---|
| 司礼监 (main) | Dispatcher — routes tasks to the right agent | Sonnet |
| 兵部 | Engineering — code, architecture, deploys | Opus |
| 户部 | Finance — budgets, cost analysis | Opus |
| 礼部 | Marketing — content, branding, social | Sonnet |
| 工部 | DevOps — servers, CI/CD, infra | Sonnet |
| 吏部 | Management — projects, hiring, coordination | Sonnet |
| 刑部 | Legal — compliance, contracts, IP | Sonnet |

Want more? Add agents to `agents.list`, `channels.discord.accounts`, and `bindings`.

## Common Gotchas

**@everyone does nothing?**
Check Discord Developer Portal — each bot needs **Message Content Intent** + **Server Members Intent** on. Bot role needs **View Channels**.

**Agents can't write files (sandbox)?**
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

**Messages silently disappear?**
Every account needs `"groupPolicy": "open"` set individually. The global one doesn't cascade down — this trips up everyone.

## Links

- [Clawdbot Docs](https://docs.clawd.bot)
- [English version (Become CEO)](https://github.com/wanikua/become-ceo)
- [完整教程](https://github.com/wanikua/boluobobo-ai-court-tutorial)
- [Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/)

## License

MIT
