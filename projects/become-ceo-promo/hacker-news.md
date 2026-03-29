# Hacker News — Show HN

## 提交信息

**Title:** Show HN: Become CEO – 7 AI agents on Discord that run your company 24/7

**URL:** https://github.com/wanikua/become-ceo

---

## HN 首评 (First Comment)

发帖后立即在评论区补充背景：

---

Hey HN, maker here.

I got tired of context-switching between ChatGPT tabs, Notion, GitHub, and Slack. So I built a setup where 7 specialized AI agents live in Discord as my "executive team" — Engineering, Finance, Marketing, DevOps, Legal, Management, and a Chief of Staff that coordinates them all.

**How it works:**
- One bash command on any free-tier Linux server (Oracle, GCP, etc.)
- 5 minutes later, 7 bots show up in your Discord server
- Each agent has persistent memory, its own workspace, and real tool access (GitHub, Notion, browser automation, cron jobs)
- You @mention them like coworkers: "@Engineering build me a JWT auth API" → it opens a thread, writes code, pushes to GitHub
- Cron tasks run 24/7 — daily standups, cost reports, monitoring alerts happen while you sleep

**What makes this different from AutoGPT/CrewAI/etc:**
- Zero code. It's a config file, not a framework. You don't write Python orchestration.
- Discord as the interface means it works on phone, tablet, desktop — and you get voice control for free.
- Each agent has independent persistent memory. Engineering remembers your codebase. Finance remembers your budget history.
- 60+ built-in skills (not "plugins you have to build yourself")

**Cost:** Free server + ~$15-30/month in API calls. Smart model routing sends heavy tasks to capable models and quick tasks to fast ones, so you're not burning tokens on "yes, done."

Built on the Clawdbot open-source framework. The whole thing is MIT licensed.

Would love feedback on the architecture — especially the inter-agent delegation system. Happy to answer questions.

---

## 发布时机建议

- **最佳时间:** 美东时间 周二/周三 上午 8:00-10:00 (UTC 12:00-14:00)
- **避免:** 周末、美国假日
- HN 用户喜欢：能跑的 demo、技术细节、诚实的 trade-off 讨论
- 准备好回答：安全性、成本细节、跟 Devin/OpenHands 的区别
