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

## ⚠️ 免责声明

本项目按"原样"提供，不承担任何直接或间接责任。

**使用前请注意：**

1. **AI 生成内容仅供参考**
   - AI 生成的代码、文案、建议等可能存在错误或不准确之处
   - 使用前请自行审核，确认无风险后再实际应用

2. **代码安全**
   - 自动生成的代码建议在合并前进行 code review
   - 涉及财务、安全敏感的操作请务必人工复核

3. **API 密钥安全**
   - 请妥善保管您的 API 密钥
   - 不要将包含密钥的配置文件提交到公开仓库

4. **服务器费用**
   - 免费服务器（Oracle Cloud 等）有一定使用限额
   - 超出限额后可能产生费用，请留意账单

5. **数据备份**
   - 建议定期备份您的工作区和数据
   - 本项目不提供任何数据保证

---

## License

MIT
