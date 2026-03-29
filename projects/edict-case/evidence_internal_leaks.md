# 🔍 cft0808/edict 仓库内部泄露证据清单

> **兵部调查报告**  
> 调查日期：2026-03-06  
> 调查对象：`cft0808/edict` (GitHub Public Repo)  
> 方法：GitHub API 逐文件内容提取与关键词搜索

---

## 一、核心发现摘要

| 泄露类别 | 严重性 | 涉及文件数 | 泄露条目数 |
|----------|--------|-----------|-----------|
| macOS 本地用户名 (bingsen) | 🔴 高 | 6+ 文件 | 30+ 条 |
| 完整 session 文件路径 | 🔴 高 | 1 文件 | 7 条 |
| OpenClaw Gateway UUID | 🟡 中 | 1 文件 | 1 条 |
| 真实人名 (褚凤天) | 🔴 高 | 2 文件 | 2 条 |
| API 费用明细 | 🟡 中 | 1 文件 | 完整账单 |
| 内部项目名 (junjichu-v2) | 🟡 中 | 1 文件 | 4 条 |
| "A计划" 营销策略全文 | 🔴 高 | 1 文件 | 完整记录 |
| 飞书集成信息 | 🟡 中 | 1 文件 | 4 条 |
| 公众号底稿与发布矛盾 | 🟡 中 | 1 文件 | 3 处 |

---

## 二、逐项证据

### 2.1 用户名泄露 (`bingsen`)

**来源文件：** `docker/demo_data/live_status.json`

所有路径均以 `/Users/bingsen/` 开头，暴露 macOS 本地用户名为 `bingsen`。

#### 2.1.1 本地项目路径

| # | 泄露路径 | 推断含义 |
|---|----------|---------|
| 1 | `/Users/bingsen/clawd/junjichu-v2/dashboard.html` | 本地开发目录，**项目原名 junjichu-v2**（军机处 v2），不是 edict |
| 2 | `/Users/bingsen/clawd/junjichu-v2/data/live_status.json` | 本地 live data 路径 |
| 3 | `/Users/bingsen/clawd/junjichu-v2/docs/三省六部-OpenClaw实施指南-实装版-v1.md` | 内部实施指南 |
| 4 | `/Users/bingsen/.openclaw/workspace-shangshu/` | 尚书省工作区 |

> **关键发现：** 项目在本地叫 `junjichu-v2`（军机处 v2），而不是对外宣称的 `edict`。这说明项目经历了改名，而 demo 数据没有清洗。

#### 2.1.2 Session 文件路径（7条完整暴露）

| # | 泄露路径 | Agent |
|---|----------|-------|
| 1 | `/Users/bingsen/.openclaw/agents/zhongshu/sessions/af6ad7f2-...jsonl` | 中书省 |
| 2 | `/Users/bingsen/.openclaw/agents/shangshu/sessions/8be927fe-...jsonl` | 尚书省 |
| 3 | `/Users/bingsen/.openclaw/agents/gongbu/sessions/77f5e08c-...jsonl` | 工部 |
| 4 | `/Users/bingsen/.openclaw/agents/libu/sessions/2f31143a-...jsonl` | 礼部 |
| 5 | `/Users/bingsen/.openclaw/agents/bingbu/sessions/53af4339-...jsonl` | 兵部 |
| 6 | `/Users/bingsen/.openclaw/agents/main/sessions/de50c4d8-...jsonl` | Main Agent |
| 7 | `/Users/bingsen/.openclaw/agents/mc-gateway-2f631e27-.../sessions/7df8432c-...jsonl` | MC Gateway |

> 每条路径包含完整 UUID session ID，可用于推断 OpenClaw runtime 内部结构。

---

### 2.2 Agent Config 路径泄露

**来源文件：** `docker/demo_data/agent_config.json`

暴露 **8 个 workspace 路径** + **10 个 SKILL.md 路径**：

#### Workspace 路径（8条）
```
/Users/bingsen/.openclaw/workspace-zhongshu
/Users/bingsen/.openclaw/workspace-menxia
/Users/bingsen/.openclaw/workspace-shangshu
/Users/bingsen/.openclaw/workspace-hubu
/Users/bingsen/.openclaw/workspace-libu
/Users/bingsen/.openclaw/workspace-bingbu
/Users/bingsen/.openclaw/workspace-xingbu
/Users/bingsen/.openclaw/workspace-gongbu
```

#### Skill 路径（10条）
```
/Users/bingsen/.openclaw/workspace-zhongshu/skills/planning/SKILL.md
/Users/bingsen/.openclaw/workspace-menxia/skills/review/SKILL.md
/Users/bingsen/.openclaw/workspace-shangshu/skills/dispatch/SKILL.md
/Users/bingsen/.openclaw/workspace-shangshu/skills/kanban-local/SKILL.md
/Users/bingsen/.openclaw/workspace-shangshu/skills/organization-governance/SKILL.md
/Users/bingsen/.openclaw/workspace-hubu/skills/data-analysis/SKILL.md
/Users/bingsen/.openclaw/workspace-libu/skills/doc-writer/SKILL.md
/Users/bingsen/.openclaw/workspace-bingbu/skills/coding/SKILL.md
/Users/bingsen/.openclaw/workspace-xingbu/skills/security-review/SKILL.md
/Users/bingsen/.openclaw/workspace-gongbu/skills/ops/SKILL.md
```

---

### 2.3 真实人名泄露 (褚凤天)

**来源文件：**
1. `docker/demo_data/live_status.json` — 2处
2. `dashboard/dashboard.html` — 1处（注释中）

```json
// live_status.json 中：
{"id": "OC-zhongshu-af6ad7f2", "title": "褚凤天 会话", ...}
{"id": "OC-main-de50c4d8", "title": "褚凤天 会话", ...}
```

```javascript
// dashboard.html 中（注释）：
// "褚凤天 会话" → ok, keep
```

> **推断：** `褚凤天` 是 `cft0808` 的真实姓名（cft = 褚凤天缩写），GitHub 用户名与之吻合。

---

### 2.4 "A计划" 营销策略完整暴露

**来源文件：** `docker/demo_data/live_status.json`

**任务 `JJC-20260224-014`** 的标题和流转日志完整暴露了内部营销策略：

```
标题: A计划：三省六部 GitHub 爆款项目打造
验收条件 (ac): GitHub Stars 显著增长，进入 Trending，Hacker News 上榜
```

**完整流转日志暴露的策略细节：**

| 时间 | 动作 | 内容 |
|------|------|------|
| 14:03 | 皇上下旨 | "执行A计划——三省六部 GitHub 爆款项目打造，30天行动计划" |
| 14:04 | 中书省 | "⚡ 皇上钦命：门下省disabled，直接转尚书省执行" |
| 14:07 | 中书省 | "✅ GitHub Topics(13个)已添加 ✅ README竞品对比表已push" |
| 14:10 | 尚书省回奏 | "Week1回奏：礼部README已推送(87f0313)，工部Dockerfile本地就绪，兵部截图已生成" |

> **关键暴露：**
> - "A计划"是一个有预谋的、30天周期的 GitHub 刷星计划
> - 目标包括 GitHub Trending 和 Hacker News
> - "门下省disabled"说明审核流程被绕过——这恰恰与项目宣传的核心卖点（门下省审核机制）相矛盾
> - 竞品对比表、截图、GIF 都是同一时间批量生成的营销物料

---

### 2.5 旧项目名泄露 (openclaw-sansheng-liubu / junjichu-v2)

**来源文件：** `docker/demo_data/live_status.json`

```
任务 JJC-20260223-011:
  title: "三省六部制开源 GitHub 项目"
  output: "https://github.com/cft0808/openclaw-sansheng-liubu"
  remark: "✅ 回奏：https://github.com/cft0808/openclaw-sansheng-liubu 已上线"
```

> **时间线还原：**
> 1. 本地开发名：`junjichu-v2`（军机处 v2）
> 2. 首次 GitHub 发布名：`openclaw-sansheng-liubu`（2026-02-23）
> 3. 当前 GitHub 名：`edict`（同一个仓库，经过了 rename）
>
> GitHub API 确认 `cft0808/edict` 的创建时间是 `2026-02-23T14:35:04Z`，而任务 `JJC-20260223-011` 的流转显示同日 14:51 下旨、15:37 完成——仓库是在35分钟内匆忙创建的。

---

### 2.6 Session 对话内容泄露

**来源文件：** `docker/demo_data/live_status.json`

`activity` 字段包含 Agent 的实际对话片段：

#### 中书省 (OC-zhongshu-af6ad7f2)
```
"Screen Recording 权限未授权。换方案——用 ffmpeg + screencapture 组合录制："
"Screen Recording 权限不足。换方案：用 Playwright 无头浏览器直接录制看板..."
"兵部 GIF 录制进行中，同步准备 Dockerfile："
```
> 暴露了 A计划 GIF 制作的技术细节和遇到的权限问题。

#### MC Gateway (heartbeat 会话)
```
"Check-in failed — BASE_URL is still REPLACE_WITH_BASE_URL. No HEARTBEAT_OK..."
```
> 暴露了 OpenClaw Gateway 的配置问题（BASE_URL 未设置），连续5次失败。说明系统部署存在未完成配置。

#### 尚书省 (OC-shangshu-8be927fe)
```
"📜 奏折 · JJC-20260224-014 Week1 全部完成  A计划——三省六部 GitHub 爆款项目打造，四项任务已全部交付"
```

#### Main Agent (OC-main-de50c4d8)
```
model: gpt-5.3-codex
"回父皇：好了，已打通。😊 刚才您看不到 Pair/Approve 的根因，儿臣已代为走完..."
```
> 暴露了 Main Agent 使用 GPT-5.3 Codex 模型，且对话内容包含 OpenClaw 设备配对的内部操作。

#### Sensitive Session Keys 暴露
```
agent:zhongshu:main
agent:shangshu:main
agent:main:main
agent:mc-gateway-2f631e27-511b-45db-8d59-791c8c2cd4a5:main
```

---

### 2.7 API 使用费用完整暴露

**来源文件：** `docker/demo_data/officials_stats.json`

| Agent | Tokens In | Tokens Out | Cache Read | 费用 USD | 费用 CNY |
|-------|-----------|------------|------------|---------|---------|
| 中书省 | 66 | 2,712 | 1,027,806 | $0.91 | ¥6.58 |
| 尚书省 | 416 | 50,308 | 2,196,943 | $1.93 | ¥13.97 |
| 工部 | 122 | 3,681 | 427,760 | $0.32 | ¥2.34 |
| 礼部 | 42 | 6,566 | 73,286 | $0.21 | ¥1.50 |
| **合计** | **646** | **63,267** | **4,070,904** | **$3.36** | **¥24.39** |

> 暴露了完整的 Token 消耗明细和实际花费。Cache Read 量远超实际 Token，说明大量使用了 prompt caching。

---

### 2.8 飞书 (Feishu) 集成信息泄露

**来源文件：** `docker/demo_data/live_status.json`

```
feishu/direct · 模型 claude-sonnet-4-6     (中书省)
feishu/direct · 模型 gpt-5.3-codex         (Main Agent)  
feishu/- · 模型 claude-sonnet-4-6          (尚书省)
openclaw_runtime_to_feishu_bitable          (同步机制名称)
```

> 暴露了：
> - 系统通过飞书（Feishu/Lark）进行人机交互
> - 数据同步到飞书多维表格（Bitable）
> - 不同 Agent 使用不同的模型版本

---

### 2.9 SOUL.md 中的 clawd 路径硬编码

**来源文件：**
- `agents/zhongshu/SOUL.md` — 硬编码路径
- `agents/taizi/SOUL.md` — 标题过滤示例

#### 中书省 SOUL.md
```markdown
> **项目仓库在 `/Users/bingsen/clawd/openclaw-sansheng-liubu/`**
> 你的工作目录不是 git 仓库！执行 git 命令必须先 cd 到项目目录：
> ```bash
> cd /Users/bingsen/clawd/openclaw-sansheng-liubu && git log --oneline -5
> ```
```

> **严重问题：** 这不只是 demo 数据——这是**正式的 SOUL.md 人格文件**，直接暴露了完整本地路径。而且路径名还是旧的 `openclaw-sansheng-liubu`。

#### 太子 SOUL.md（过滤规则暴露）
```markdown
> **绝对禁止的标题：**
> - ❌ `"全面审查/Users/bingsen/clawd/openclaw-sansheng-liubu/…"` （含文件路径）
```

> 太子的 SOUL.md 中以 `/Users/bingsen/clawd/` 路径为反面示例，再次确认用户名和项目结构。

---

### 2.10 `docs/remote-skills-guide.md` 中的路径泄露

```markdown
- 本地: `file:///Users/bingsen/skills/code_review.md` 或 `/Users/bingsen/skills/code_review.md`
- "localPath": "/Users/bingsen/.openclaw/workspace-zhongshu/skills/code_review/SKILL.md"
```

---

### 2.11 测试文件中的路径泄露

**来源文件：** `tests/test_e2e_kanban.py`

```python
# 测试用例 test_dirty_title_cleaned:
cmd_create('JJC-TEST-E2E-01',
    '全面审查/Users/bingsen/clawd/openclaw-sansheng-liubu/这个项目\nConversation info (xxx)', ...)

# 测试用例 test_pure_path_rejected:
cmd_create('JJC-TEST-E2E-02', '/Users/bingsen/clawd/openclaw-sansheng-liubu/', ...)

# 测试用例 test_flow_remark_cleaned:
cmd_flow('JJC-TEST-E2E-04', '太子', '中书省', '旨意传达：审查/Users/bingsen/clawd/xxx项目 Conversation blah')
```

> 测试用例的 fixture 数据直接使用了真实路径。虽然这些是"需要被过滤的脏数据"示例，但路径本身是真实的。

---

### 2.12 公众号文章底稿 vs 公开内容矛盾

**来源文件：** `docs/wechat-article.md`

| 项目 | 底稿内容 | 矛盾/问题 |
|------|---------|-----------|
| 灵感来源 | "我在翻《**资治通鉴**》的时候突然想到" (第25行) | 公众号实际发布版改为《太平年》，可能是因为《资治通鉴》中并无三省六部制详细论述（三省六部制记载主要在《新唐书》《旧唐书》） |
| 历史年数自相矛盾 | 第29行写"**1300** 年前"，第51行写"**1400** 年实践检验" | 同一篇文章两个数字，差了100年 |
| 唐朝运转年数 | "唐朝能运转 **289** 年" | 唐朝618-907年共289年✓，但三省六部制非唐创（隋代已有雏形），"唐太宗设计"的说法并不准确 |
| 门下省禁用 | A计划任务中"门下省disabled，直接执行" | 底稿核心卖点恰恰是"门下省审核不可跳过"，但实际运营中第一时间就 disable 了 |

---

### 2.13 OpenClaw Gateway UUID 泄露

**来源文件：** `docker/demo_data/live_status.json`

```
mc-gateway-2f631e27-511b-45db-8d59-791c8c2cd4a5
```

> 完整的 Mission Control Gateway 实例 UUID，可用于识别特定部署实例。

---

### 2.14 内部本地服务地址泄露

**来源文件：** `docker/demo_data/live_status.json`

```
http://127.0.0.1:7891 → 🌅 早朝简报
http://127.0.0.1:7891 → 👥 官员总览
```

---

### 2.15 GitHub Traffic 数据

**状态：** 403 Forbidden — 需要 push 权限才能访问。无法获取。

---

## 三、clawd 路径出现汇总

`clawd` 是 Clawdbot 的 workspace 目录名。以下文件中出现了 `clawd` 路径：

| # | 文件 | 出现形式 |
|---|------|---------|
| 1 | `agents/zhongshu/SOUL.md` | `/Users/bingsen/clawd/openclaw-sansheng-liubu/` |
| 2 | `agents/taizi/SOUL.md` | `/Users/bingsen/clawd/openclaw-sansheng-liubu/` (反面示例) |
| 3 | `docker/demo_data/live_status.json` | `/Users/bingsen/clawd/junjichu-v2/...` (3条) |
| 4 | `tests/test_e2e_kanban.py` | `/Users/bingsen/clawd/openclaw-sansheng-liubu/` (3条) |

> **分析：** `clawd` 出现在所有关键文件中，说明此项目是在 Clawdbot 管理的 workspace 中开发的。`/Users/bingsen/clawd/` = 用户 bingsen 的 Clawdbot workspace。

---

## 四、信息关联分析

### 4.1 身份还原

| 数据点 | 值 | 来源 |
|--------|-----|------|
| GitHub 用户名 | `cft0808` | 仓库 URL |
| macOS 用户名 | `bingsen` | 多处路径 |
| 真实姓名 | 褚凤天 | live_status.json + dashboard.html |
| 姓名缩写对应 | cft = 褚凤天 | 推断确认 |
| 公众号 | cft0808 | docs/wechat.md |
| 通信平台 | 飞书 (Feishu) | session metadata |
| 开发环境 | macOS + Clawdbot | 路径结构 |
| 使用工具 | OpenClaw | 全文 |

### 4.2 项目演变时间线

```
本地开发阶段: junjichu-v2 (军机处 v2)
     ↓ 2026-02-23 14:35 创建 GitHub 仓库
首次发布: openclaw-sansheng-liubu  
     ↓ 某日 rename
当前名称: edict
     ↓ 2026-02-24 发起 A计划
营销阶段: 30天刷星计划（目标 Trending + HN）
```

### 4.3 "自吹自擂"矛盾点

| 公开宣传 | 内部实际 |
|---------|---------|
| "门下省审核不可跳过，这是架构级强制约束" | A计划中"门下省disabled，直接执行" |
| 灵感来自"翻《资治通鉴》时突然想到" | 底稿和公众号在灵感来源书名上不一致 |
| "1400年实践检验的系统" | 同文又写"1300年前设计" |
| 宣称独创架构设计 | 本地项目名 `junjichu-v2` 暗示存在 v1 前身项目 |

---

## 五、建议

1. **demo 数据应全部替换**：当前 `docker/demo_data/` 中的文件是直接从生产环境导出的真实数据，未做任何脱敏处理
2. **SOUL.md 需清理硬编码路径**：中书省和太子的 SOUL.md 含有完整本地路径
3. **测试用例需使用虚构路径**：`test_e2e_kanban.py` 中不应使用真实用户名
4. **docs/remote-skills-guide.md 需脱敏**：示例代码中含真实路径
5. **live_status.json 的 session activity 是最大泄露源**：包含了完整的 Agent 对话片段和内部操作记录

---

*报告完毕。兵部调查员。*
