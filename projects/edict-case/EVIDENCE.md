# ⚖️ Edict 抄袭维权案 — 完整证据

## 案情概要

公众号「朕的邸报」(微信ID: cft0808) 运营的开源项目 **Edict** (github.com/cft0808/edict) 
核心概念抄袭王Sir原创项目 **boluobobo-ai-court-tutorial**，未注明任何来源。

- 对方: 2486 ⭐ / 190 forks
- 我方: 36 ⭐ / 5 forks

---

## 一、时间线铁证

| 指标 | 我方 (boluobobo-ai-court-tutorial) | 对方 (edict) |
|------|-----------------------------------|-------------|
| 仓库创建 | 2026-02-22 17:17:44 UTC | 2026-02-23 14:35:04 UTC |
| 首次commit | 2026-02-22 17:18:51 UTC | 2026-02-23 14:34:55 UTC |
| 时间差 | — | **晚 21 小时 17 分钟** |

我方 2/23 当天 GitHub Traffic: 页面浏览 249 次，独立访客 39 人，克隆 149 次。
对方恰好在这一天创建仓库。

---

## 二、首个 Commit 即完整项目（异常信号）

对方 init commit `5b46f67` 一次性提交:
- **26 个文件，2595 行代码**（0 删除）
- 完整 README (329行) + README_EN (111行)
- 8 个 SOUL.md 人格文件
- install.sh 一键部署脚本
- Dashboard 看板系统
- 竞品对比表格 (CrewAI/MetaGPT/AutoGen)

正常开发不会第一个 commit 就是完整项目。这是参考现有项目后集中搭建的明显痕迹。

---

## 三、核心设计高度一致（逐项对比）

### 3.1 SOUL.md 人格文件结构
- 我方: 每个 Agent 目录下有 SOUL.md 定义角色人格
- 对方: agents/bingbu/SOUL.md, agents/gongbu/SOUL.md... 完全相同结构

### 3.2 install.sh 一键部署
- 我方: bash 脚本、彩色输出 (RED/GREEN/YELLOW/BLUE)、分步骤 [1/8] [2/8]
- 对方: bash 脚本、相同颜色变量名、分步骤安装

### 3.3 竞品对比表格
- 我方: README 中与 CrewAI / MetaGPT / AutoGen 做表格对比
- 对方: README 中完全相同的三个竞品对比，表格结构相似

### 3.4 中国古代官制隐喻
- 我方: 用六部(兵部/户部/礼部/工部/吏部/刑部)命名 AI Agent
- 对方: 完全相同的六部命名，加上三省(中书省/门下省/尚书省)

### 3.5 技术栈
- 我方: 基于 Clawdbot 生态
- 对方: 基于 OpenClaw (Clawdbot 的另一个名称/分支)

---

## 四、对方的差异化工作（客观记录）

对方确实在核心概念之上做了实质性扩展:
- 三省审批链 (中书省 → 门下省 → 尚书省)
- 太子分拣角色
- Python 实时看板 Dashboard (非 Node.js)
- 飞书集成
- Docker 部署支持
- 68 个 commits 的持续开发
- 2486 stars 的社区增长

**但这些扩展不改变核心创意来源于我方的事实。**

---

## 五、对方公众号推广（商业化行为）

- 公众号名称: 朕的邸报
- 微信ID: cft0808
- 行为: 发布推广文章宣传 Edict 项目，从未提及创意来源

这进一步证明对方有意隐瞒参考来源，将他人创意据为己有进行商业化推广。

---

## 六、维权行动记录

| 日期 | 行动 | 状态 |
|------|------|------|
| 2026-03-05 | 在对方仓库提交 Issue #55 | ✅ 已完成 |
| 2026-03-05 | 在我方 README 添加原创性声明 | ✅ 已完成 |
| 2026-03-05 | 创建 Notion 证据归档页面 | ✅ 已完成 |
| 2026-03-05 | 创建本地证据文档 | ✅ 已完成 |
| TODO | 截图存档对方 README/SOUL.md/install.sh | 待做 |
| TODO | 存档对方公众号推广文章 | 待做 |
| TODO | 联系对方要求注明来源 | 待做 |
| TODO | 如不回应，升级维权手段 | 待做 |

---

## 七、关键链接

- 我方仓库: https://github.com/wanikua/boluobobo-ai-court-tutorial
- 对方仓库: https://github.com/cft0808/edict
- Issue #55: https://github.com/cft0808/edict/issues/55
- Notion 归档: https://www.notion.so/Edict-31a90cde52d48110a166ef1445b448c1

---

## 八、关键证据截图待补

- [ ] 对方 README 截图 (含竞品对比表)
- [ ] 对方 SOUL.md 截图
- [ ] 对方 install.sh 截图
- [ ] 对方 init commit 截图 (26文件/2595行)
- [ ] 对方公众号文章截图
- [ ] 我方 GitHub Traffic 截图 (2/23 访问量)
- [ ] 双方时间线对比截图
