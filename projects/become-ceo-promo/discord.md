# Discord 社区推广文案

---

## Clawdbot 官方 Discord

**频道建议：** #showcase 或 #projects

---

Hey everyone! 👋

I built something on top of Clawdbot that I think this community would find interesting.

**Become CEO** — a one-command setup that deploys 7 specialized AI agents to your Discord server:

- 🔧 **Engineering** — code generation, GitHub PRs, code review
- 💰 **Finance** — API cost tracking, budget reports
- 📢 **Marketing** — content drafting, social media management
- 🔩 **DevOps** — monitoring, deployments, incident response
- ⚖️ **Legal** — compliance, policy drafting
- 👔 **Management** — project tracking, standup coordination
- 🤖 **Chief of Staff** — cross-agent delegation, task routing

Each agent has its own SOUL.md, persistent memory, tool access, and cron schedule. The Chief of Staff can delegate tasks to other agents automatically.

**It's basically a "batteries-included" Clawdbot multi-agent template** — instead of setting up one bot, you get 7 pre-configured ones with inter-agent communication.

Setup: `bash <(curl -fsSL https://raw.githubusercontent.com/wanikua/become-ceo/main/setup.sh)`

Runs on free-tier servers. ~$15-30/month API costs. MIT licensed.

🔗 **GitHub:** <https://github.com/wanikua/become-ceo>

Some things I'd love feedback on:
- The agent personality configs (SOUL.md files) — how to make each agent more distinct
- Inter-agent delegation patterns — any edge cases you've hit with multi-bot setups?
- Skill recommendations from ClawdHub that would complement the existing 60+

Thanks for building Clawdbot — none of this would exist without it! 🙌

---

## AI/LLM 通用社区

**适用于：** AI Discord servers, LLM communities, indie hacker Discords

---

Just shipped an open-source project: **7 AI agents that work as your executive team on Discord**

The idea is simple — instead of one chatbot, you get a full team:

```
@Engineering → writes code, pushes to GitHub
@Finance    → tracks your spend, generates reports
@DevOps     → monitors servers at 3 AM
@Marketing  → drafts content, manages social
@Legal      → reviews compliance
@Management → runs standups, tracks projects
@CoS        → coordinates everyone
```

**Why Discord as the interface?**
- Works on phone, tablet, desktop
- Threads for task isolation
- Voice channels for real-time interaction
- Push notifications = you're always reachable
- No custom UI to build

**Setup:** One bash command on any Linux server. 5 minutes. Free server (Oracle Cloud free tier). ~$15-30/month in LLM API calls.

Each agent has independent persistent memory and 60+ built-in tools (GitHub, Notion, browser automation, cron jobs, TTS, and more).

MIT licensed: <https://github.com/wanikua/become-ceo>

Happy to answer any questions about the multi-agent architecture or share specific workflow examples!

---

## 短版（适合在别人的讨论中回复推荐）

当有人问 "how to set up multi-agent system" 或 "best AI productivity setup" 时：

```
If you're looking for a ready-to-use multi-agent setup, check out Become CEO — it's a one-command deployment of 7 AI agents on Discord (engineering, finance, devops, etc). Each has its own memory and tool access. Runs on free servers, ~$15-30/month API costs. MIT licensed: github.com/wanikua/become-ceo
```

---

## 发布注意事项

- **Clawdbot Discord：** 强调是基于 Clawdbot 构建的，表达感谢
- **AI 社区：** 强调技术架构和实际使用体验
- **避免：** 在不相关的频道发推广、连续在多个服务器刷屏
- **最佳实践：** 先在社区里正常聊天一段时间，建立存在感后再分享项目
- **配图：** 准备 2-3 张 Discord 截图展示实际对话效果
