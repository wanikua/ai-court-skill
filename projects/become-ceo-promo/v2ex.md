# V2EX 推广文案

---

## 帖子（发到 /go/share 或 /go/programmer 节点）

**标题：** 开源：一行命令搭建 7 个 AI Agent 团队，用 Discord 管理你的整个工作流

**正文：**

分享一个周末项目。起因是作为独立开发者，日常要在写代码、看成本、写文案、监控服务器之间不停切换，效率很低。

于是基于 Clawdbot 框架搭了一套多 Agent 系统，核心思路是：**用 Discord 当"公司总部"，7 个 AI Agent 各司其职。**

### 架构

```
Discord Server
├── Engineering — 写代码、PR review、GitHub 集成
├── Finance — API 成本追踪、预算分析
├── Marketing — 内容创作、社媒管理
├── DevOps — 服务监控、自动部署
├── Legal — 合规审查、政策起草
├── Management — 项目管理、晨会组织
└── Chief of Staff — 跨 Agent 协调、任务分配
```

### 技术要点

- **部署：** `bash <(curl -fsSL ...)` 一行命令，5 分钟搞定
- **运行环境：** 任何 Linux 服务器，Oracle Cloud 免费 ARM 实例完全够用
- **Agent 记忆：** 每个 Agent 有独立 workspace 和持久化文件，不是共享上下文
- **工具集成：** 60+ 内置 skill（GitHub、Notion、浏览器自动化、Cron、TTS 等）
- **定时任务：** Cron 驱动的自动晨报、监控告警、Notion 归档
- **成本控制：** 重活用强模型，轻活用快模型，月均 $15-30
- **沙箱：** 可选 Docker 隔离执行

### 跟其他方案的区别

| | ChatGPT/Web UI | AutoGPT/CrewAI | Become CEO |
|---|---|---|---|
| 多 Agent 协作 | ❌ 单一对话 | ⚠️ 需要写 Python | ✅ 配置文件驱动 |
| 独立记忆 | ❌ | ⚠️ 自己搞向量库 | ✅ 文件级持久化 |
| 工具集成 | ⚠️ 有限插件 | ⚠️ 自己写 | ✅ 60+ 内置 |
| 界面 | 浏览器 | CLI | ✅ Discord 全平台 |
| 部署时间 | N/A | 数小时 | ✅ 5 分钟 |

### 使用场景

1. 独立开发者 — 一个人用 AI 团队跑完整工作流
2. 小团队 — 补充人力不足的职能（法务、财务分析）
3. 学习/实验 — 了解多 Agent 系统的实际运作

MIT 协议开源。

GitHub: https://github.com/wanikua/become-ceo

欢迎 star、fork、提 issue。有问题这里回复。

---

## V2EX 发帖注意事项

- **节点选择：** `/go/share`（分享发现）或 `/go/programmer`（程序员）
- **语气：** 技术社区，保持理性克制，不要过度吹嘘
- **避免：** 过多 emoji、营销感太强的语言
- **准备回答：** 
  - "跟 Dify / Coze 有什么区别？" → 强调 self-hosted、Discord 原生、零代码
  - "为什么用 Discord 不用飞书/Slack？" → 全平台、语音免费、Bot API 成熟
  - "安全性怎么样？" → 数据在自己服务器、可选沙箱隔离
