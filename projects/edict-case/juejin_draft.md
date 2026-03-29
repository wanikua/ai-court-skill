# 我的开源项目被人参考后用 AI 重写，拿了 2500 star，我该怎么办？

> 这不是一篇情绪输出，而是一份带完整证据链的技术分析。

---

## 事情经过

2 月 22 日，我在 GitHub 发布了一个开源项目 [boluobobo-ai-court-tutorial](https://github.com/wanikua/boluobobo-ai-court-tutorial)，核心创意是 **用中国古代三省六部制作为 AI 多 Agent 协作的隐喻框架** —— 把 AI Agent 比作古代朝廷的六部，各司其职，用户扮演「皇上」下旨，Agent 接旨执行。

我在小红书写了推广帖（[链接](https://www.xiaohongshu.com/discovery/item/6998638f000000000d0092fe?source=webshare&xhsshare=pc_web&xsec_token=AB_ow3QZT1mG6YOfslMKHumgqbFc0YKFt-cMXPPkQxhhs=&xsec_source=pc_share)），反响不错。

**21 小时后**，另一个项目 [cft0808/edict](https://github.com/cft0808/edict) 出现了。

同样的三省六部隐喻，同样的六部命名和职能映射，同样的竞品对比对象，同样的底层平台。只是实现层面用 AI 重新生成了一遍代码。

这个项目现在有 **2500+ star**，我的只有 36。

---

## 证据链

### 1. 时间线

| | 我的项目 | Edict |
|---|---|---|
| **仓库创建** | 2026-02-22 17:17 UTC | 2026-02-23 14:35 UTC |
| **首个 commit** | 2026-02-22 17:18 UTC | 2026-02-23 14:34 UTC |
| **时间差** | — | **晚 21 小时** |

2/23 当天（Edict 创建日），我的仓库 GitHub Traffic：
- 页面浏览 249 次，独立访客 39 人
- **克隆 149 次**

在我的项目获得大量关注的同一天，对方仓库创建。

### 2. 架构设计完全一致

这不是代码层面的复制，是**整套概念设计的复制**：

| 设计决策 | 我的项目 | Edict |
|----------|---------|-------|
| 整体隐喻 | 三省六部制 × AI 团队 | 三省六部制 × AI 团队 |
| 用户角色 | 皇上 | 皇上 |
| 流转链路 | 皇上→中书→门下→尚书→六部→回奏 | 完全相同 |
| 兵部 | 编码 / 软件工程 | 编码 / 工程实现 |
| 户部 | 财务 / 数据 | 数据 / 成本预算 |
| 礼部 | 营销 / 文档 | 文档 / 规范 |
| 工部 | 运维 / DevOps | CI/CD / 基础设施 |
| 刑部 | 法务 / 合规 | 安全审计 / 合规 |
| 竞品对比 | CrewAI / MetaGPT / AutoGen | CrewAI / MetaGPT / AutoGen |
| 部署方式 | install.sh 一键部署 | install.sh 一键部署 |
| 底层平台 | OpenClaw | OpenClaw |

全世界有无数种方式设计 multi-agent 系统 —— 军队编制、公司组织、足球队、乐队……偏偏在 21 小时内，两个项目选择了完全相同的历史隐喻，相同的部门命名，相同的职能映射，相同的竞品对比对象。

### 3. Agent ID 拼音命名 5/5 一致

| Agent ID | 我的 | Edict |
|----------|------|-------|
| `bingbu` | ✅ | ✅ |
| `hubu` | ✅ | ✅ |
| `libu` | ✅ | ✅ |
| `gongbu` | ✅ | ✅ |
| `xingbu` | ✅ | ✅ |

不是英文翻译（WarMinistry / Finance），而是拼音 —— 一模一样的拼音方案。

### 4. Prompt 句式相同

我的 identity.theme：
```
"你是兵部尚书，专精软件工程、系统架构、代码审查。回答用中文，直接给方案。"
"你是户部尚书，专精财务分析、成本管控、电商运营。回答用中文，数据驱动。"
```

对方 SOUL.md：
```
"你是兵部，负责编写代码、实现算法、执行工程任务。"
"你是户部，负责数据处理、资源生成、成本预算类任务。"
```

同一个模式：角色认定 + 职能列表。

### 5. 量化相似度

| 维度 | 相似度 |
|------|--------|
| README 整体 | 52.4% |
| **架构描述段落** | **95.1%** |
| 部门职责描述 | 59.2% |
| 关键概念词共现率 | 72%（18 词中 13 词共现）|

### 6. 初始 commit 的异常

Edict 的第一个 commit 一次性提交了 **26 个文件、2595 行代码** —— 完整的 README、8 个 Agent 人格文件、install.sh、Dashboard 系统、5 个 Python 脚本、CONTRIBUTING.md、LICENSE、Issue 模板。

同一天 83 分钟内 10 个 commit，平均 8.3 分钟一个完整 feature。这不是从零迭代的节奏，是参考现有项目后用 AI 快速生成的节奏。

### 7. 仓库改名暴露来源

对方初始 commit 中的仓库名是 `openclaw-sansheng-liubu`（OpenClaw 三省六部），2/24 才改名 `Edict`。原名直接点明了灵感来源。

### 8. 持续跟踪参考

我的项目从第一天就有「吏部」（Agent ID: `libu2`）。对方 2/27 才加入 `libu_hr`（吏部）—— 说明不只是看了一眼，是持续在参考。

---

## 我做了什么

我在对方仓库提了 [Issue #55](https://github.com/cft0808/edict/issues/55)，诉求很简单：

**在 README 里加一行：**

> Inspired by [boluobobo-ai-court-tutorial](https://github.com/wanikua/boluobobo-ai-court-tutorial) by @wanikua

我认可对方在实现层面做了大量扩展 —— 三省审批链、实时看板、Docker 支持、前端重构、早朝简报系统。这些有独立价值。

但核心创意 —— 「三省六部制 × AI Multi-Agent」这套概念框架 —— 源自我先发布的项目。注明出处不过分吧？

---

## 写这篇文章的原因

不是要搞对方。如果他当时发 Issue 问一句「我想参考你的设计做个扩展版」，我会说「好啊，欢迎」。

问题在于：看了代码 → 用 AI 重写 → 拿了 2500 star → 全程不提一句。

这在开源社区是不是太常见了？特别是 AI 时代，「参考设计 + AI 重新实现」变得越来越容易。代码查重工具查不出来，因为每一行确实是重新生成的。但架构、概念、设计决策——这些才是真正有价值的原创部分。

想听听大家怎么看。

---

*证据完整版：[GitHub Issue #55](https://github.com/cft0808/edict/issues/55)*
