# Reddit 推广文案

---

## r/selfhosted

**Title:** I replaced my entire productivity stack with 7 self-hosted AI agents on Discord

**Body:**

Been running this for a few weeks and figured r/selfhosted would appreciate the setup.

**The idea:** One bash script on a free Oracle Cloud server → 7 AI agents show up in my Discord server, each specialized for a different domain (engineering, finance, marketing, devops, legal, management, plus a "chief of staff" that coordinates).

**Why it's cool from a selfhosted perspective:**

- Runs entirely on YOUR server. No SaaS, no third-party storing your data.
- Works on any free-tier VPS — Oracle Cloud's always-free ARM instance handles it fine
- All data stays in your workspace — agent memory is just files on disk, not some proprietary vector DB
- Notion integration for auto-archiving (optional — you control the token)
- Total cost: free server + ~$15-30/month for LLM API calls

**What these agents actually do:**

- `@Engineering` — writes code, pushes to GitHub, reviews PRs
- `@Finance` — tracks API spend, generates cost reports
- `@DevOps` — monitors services, handles deployments
- `@Marketing` — drafts content, manages social media
- The other 3 handle legal, project management, and cross-team coordination

Everything runs through Discord, so I manage it from my phone while walking around. Cron tasks handle the repetitive stuff (daily standups, monitoring, reports) while I sleep.

60+ built-in skills — GitHub, browser automation, cron, TTS, and more. MIT licensed.

Setup: `bash <(curl -fsSL https://raw.githubusercontent.com/wanikua/become-ceo/main/setup.sh)`

GitHub: https://github.com/wanikua/become-ceo

Happy to answer questions about the architecture or share my server resource usage.

---

## r/artificial

**Title:** Multi-agent orchestration without writing code — 7 specialized AI agents that collaborate through Discord

**Body:**

I've been experimenting with multi-agent systems and wanted to share what I landed on after trying AutoGPT, CrewAI, and MetaGPT.

**The problem with most multi-agent frameworks:** You end up writing a ton of Python glue code to define agent roles, tool access, and communication patterns. Then you need a custom UI or CLI to interact with them.

**My approach:** Use Discord as the communication layer and config files (not code) to define each agent.

The setup gives you 7 agents:
- **Engineering** — code generation, PR review, GitHub integration
- **Finance** — cost tracking, budget analysis  
- **Marketing** — content creation, social media
- **DevOps** — infrastructure monitoring, deployments
- **Legal** — compliance reviews, contract drafts
- **Management** — project tracking, standup coordination
- **Chief of Staff** — routes tasks between agents, handles escalation

**What I found interesting about this architecture:**

1. **Independent memory per agent.** Each agent has its own workspace and persistent files. Engineering remembers your codebase structure. Finance remembers last month's spend. No shared context pollution.

2. **Natural language delegation.** You say "@Engineering build the auth API" and it spawns a thread, does the work, and reports back. No DAGs, no workflow definitions.

3. **Tool isolation.** Each agent gets access to only the tools it needs. Engineering gets GitHub. Finance gets cost APIs. Marketing gets browser automation.

4. **Always-on via cron.** Agents can run scheduled tasks autonomously — daily reports, monitoring checks, auto-archiving to Notion.

One bash command to set up. Free server. ~$15-30/month in API costs with smart model routing.

GitHub (MIT): https://github.com/wanikua/become-ceo

Curious what this community thinks about config-driven vs. code-driven multi-agent orchestration.

---

## r/ClaudeAI (or r/ChatGPT)

**Title:** I set up 7 AI agents as my "executive team" on Discord — here's what a typical day looks like

**Body:**

I know "AI agent" demos are everywhere, but I wanted to share what it actually looks like when you use them daily — not a demo, but real workflow.

**The setup:** 7 specialized AI agents on Discord — Engineering, Finance, Marketing, DevOps, Legal, Management, and a Chief of Staff. Each one has persistent memory, real tool access (GitHub, Notion, browser, cron), and runs 24/7 on a free cloud server.

**A typical Tuesday:**

🕘 **9:00 AM** — I open Discord on my phone. The standup channel already has reports from each agent about what happened overnight (automated via cron).

🕙 **10:00 AM** — I type `@Engineering add rate limiting to the /api/users endpoint` → Engineering opens a thread, writes the code, pushes a branch, and opens a PR.

🕚 **11:00 AM** — `@Finance weekly cost report` → Finance generates a breakdown of API spend by agent, flags that DevOps used 40% more tokens than usual (was debugging a monitoring issue).

🕐 **1:00 PM** — `@Marketing draft a blog post about our new feature` → Marketing writes a draft, pushes it to a content channel for review.

🕓 **4:00 PM** — `@everyone what's the status on the auth migration?` → Each agent reports their piece. Engineering has the code ready. DevOps has the deployment plan. Legal flagged a GDPR consideration.

🕕 **6:00 PM** — I close my laptop. Overnight, DevOps runs health checks every 2 hours, Marketing auto-schedules tomorrow's social posts, Finance archives today's spend to Notion.

**The honest trade-offs:**
- It's not magic. Complex tasks sometimes need 2-3 rounds of clarification.
- API costs vary. Heavy coding days can hit $5-8. Light days are $1-2.
- You need to "manage" them like real reports — set clear expectations, review output.

One command to set up. Free server + ~$15-30/month API. MIT licensed.

GitHub: https://github.com/wanikua/become-ceo

---

## r/sideproject

**Title:** I built a one-command setup that gives you 7 AI agents as your "company" on Discord

**Body:**

I'm a solo dev and was spending too much time context-switching between coding, tracking costs, writing content, and managing deployments.

So I built **Become CEO** — one bash command on a free server, and 5 minutes later you have 7 AI agents in your Discord:

| Agent | What it does |
|-------|-------------|
| Engineering | Writes code, reviews PRs, pushes to GitHub |
| Finance | Tracks spending, generates cost reports |
| Marketing | Writes content, manages social presence |
| DevOps | Monitors services, handles deployments |
| Legal | Reviews compliance, drafts policies |
| Management | Tracks projects, runs standups |
| Chief of Staff | Coordinates everyone, handles escalation |

You just @mention them in Discord like coworkers. They have persistent memory (Engineering remembers your codebase, Finance remembers last month's budget), real tool access (GitHub, Notion, browser, cron), and run 24/7.

**As a solo dev, the parts I love most:**
- Automated daily standups that force me to stay organized
- Finance tracking my API spend without me thinking about it
- DevOps running health checks at 3 AM
- Being able to manage everything from Discord on my phone

**Cost:** Free Oracle Cloud server + ~$15-30/month API calls. Smart model routing keeps it cheap.

**Stack:** Built on the Clawdbot open-source framework. Zero code to set up — it's all config files. MIT licensed.

GitHub: https://github.com/wanikua/become-ceo

Would love feedback from other solo devs. What agents would you add?

---

## 发布注意事项

- Reddit 用户讨厌明显的 self-promo，务必以分享经验的角度写
- 每个 subreddit 间隔至少 1-2 天发，不要同一天全发
- 先积攒一些 karma（在相关 subreddit 真诚评论），再发帖
- 准备好回答负面反馈（"这跟 X 有什么区别？""这不就是套壳？"）
- 发帖后主动在评论区互动，回答每个问题
