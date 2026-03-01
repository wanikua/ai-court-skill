# AI Court — Clawdbot Skill

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
   - Your LLM provider, API key, and model IDs
   - Discord Bot Tokens (one per agent) — [discord.com/developers](https://discord.com/developers/applications)
3. For each bot, flip on **Message Content Intent** + **Server Members Intent**
4. `systemctl --user start clawdbot-gateway` — done

## The Team

| Agent | Job | Model tier |
|---|---|---|
| 司礼监 (main) | Dispatcher — routes tasks | Fast |
| 兵部 | Engineering — code, architecture | Strong |
| 户部 | Finance — budgets, cost analysis | Strong |
| 礼部 | Marketing — content, branding | Fast |
| 工部 | DevOps — servers, CI/CD, infra | Fast |
| 吏部 | Management — projects, coordination | Fast |
| 刑部 | Legal — compliance, contracts | Fast |

Want more? Add agents to `agents.list`, `channels.discord.accounts`, and `bindings`.

## Common Gotchas

**@everyone does nothing?**
Check Discord Developer Portal — each bot needs **Message Content Intent** + **Server Members Intent** on. Bot role needs **View Channels**.

**Messages silently disappear?**
Every account needs `"groupPolicy": "open"` set individually. The global one doesn't cascade down.

## Links

- [Clawdbot Docs](https://docs.clawd.bot)
- [English version (Become CEO)](https://github.com/wanikua/become-ceo)
- [完整教程](https://github.com/wanikua/boluobobo-ai-court-tutorial)

## 免责声明

本项目按"原样"提供，不承担任何直接或间接责任。

1. **AI 生成内容仅供参考** — 使用前请自行审核
2. **代码安全** — AI 生成的代码建议合并前进行 review
3. **API 密钥安全** — 不要将含密钥的配置文件提交到公开仓库
4. **数据备份** — 建议定期备份您的工作区

## License

MIT
