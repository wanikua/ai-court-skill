# 户部调查报告：GitHub 用户 cft0808 人物调查

**调查员：** 户部  
**调查日期：** 2026-03-06  
**调查对象：** GitHub 用户 `cft0808`  
**关联案件：** edict 仓库涉嫌抄袭 boluobobo-ai-court-tutorial 案  

---

## 一、用户基础信息

| 字段 | 值 |
|------|-----|
| **GitHub ID** | 41196455 |
| **用户名** | cft0808 |
| **注册日期** | 2018-07-13 |
| **最后活跃** | 2026-03-01 |
| **公开仓库** | 11 个 |
| **Followers** | 18 |
| **Following** | 1（仅关注 ymatrix-data） |
| **真实姓名** | 未公开 |
| **公司** | 未公开 |
| **邮箱（git commit）** | **cft0808@163.com** ⚠️ |
| **公众号** | cft0808（微信公众号「朕的邸报」） |
| **所属组织** | 无 |
| **个人简介** | 无 |

### 身份推断线索

1. **`cft0808`** — 用户名格式为"名字缩写 + 日期"，推测姓名缩写为 CFT，生日或纪念日 08/08
2. **邮箱 `cft0808@163.com`** — 163 邮箱，中国用户
3. **仓库 `zzz` 描述为 "code in Sany"** — **三一重工（Sany）** ，推测此人可能曾在三一重工工作（2022年3月创建）
4. **仓库 `chuft_alien` 描述为 "cft本地学习"** — 进一步确认 `cft` 为其姓名缩写
5. **Chinese-alpaca-lora fork 描述** — 提到华中师范大学，但这只是原项目描述
6. **LLM/AI 相关仓库较多** — 2023 年起关注 LLM（ChatGLM3、Chinese-alpaca-lora、llm_related），2025 年关注深度学习（CV）和电池建模（PyBaMM）
7. **公众号名称 `cft0808`** — 与 GitHub 用户名完全一致，运营微信公众号「朕的邸报」

---

## 二、完整仓库清单

| # | 仓库名 | 类型 | 描述 | 创建时间 | Stars |
|---|--------|------|------|----------|-------|
| 1 | **edict** | 原创 | 🏛️ 三省六部制 · OpenClaw Multi-Agent | 2026-02-23 | **2992** ⚠️ |
| 2 | xxx | 原创 | code in | 2022-03-02 | 0 |
| 3 | yyy | 原创 | work | 2022-03-02 | 0 |
| 4 | zzz | 原创 | code in Sany | 2022-03-02 | 0 |
| 5 | chuft_alien | 原创 | cft本地学习 | 2023-08-01 | 0 |
| 6 | Chinese-alpaca-lora | Fork | 骆驼 LLaMA | 2023-03-29 | 1 |
| 7 | Qbot | Fork | AI 量化交易 | 2023-08-01 | 0 |
| 8 | ChatGLM3 | Fork | 开源双语对话模型 | 2023-11-19 | 0 |
| 9 | llm_related | Fork | 大模型相关知识 | 2025-02-09 | 0 |
| 10 | CV | Fork | 深度学习笔记 | 2025-04-14 | 0 |
| 11 | PyBaMM | Fork | 电池建模 | 2025-06-16 | 0 |

### 仓库分析要点

- **edict 之前没有任何有实质内容的原创项目**（xxx/yyy/zzz 均为空仓库，chuft_alien 也无内容）
- 这意味着 cft0808 在 edict 之前**没有公开的多 Agent 系统开发经验**
- edict 是此人**唯一一个有实际代码的原创项目**，却一出手就是 26 个文件、2595 行代码的完整系统
- edict 获得 **2992 stars、229 forks**，与此人其他仓库（总共 1 star）形成极度反差

---

## 三、edict 仓库深度分析

### 3.1 创建与改名时间线

| 事件 | 时间 (UTC) |
|------|------------|
| boluobobo-ai-court-tutorial 创建 | 2026-02-22 17:17 |
| **edict 仓库创建** | **2026-02-23 14:35** |
| 初始 commit（26 文件，2595 行） | 2026-02-23 14:34 |
| 83 分钟内连续 10 个 commit | 2026-02-23 14:34 ~ 15:58 |
| **项目改名**：`openclaw-sansheng-liubu` → `edict` | **2026-02-24 14:29** |
| 加入吏部（libu_hr） | 2026-02-27 |
| 添加公众号入口「朕的邸报」 | 2026-03-05 14:52 |

### 3.2 改名 commit 证据

Commit `c6cf88b`（2026-02-24）的完整 message：

> **rename: 项目正式更名为 Edict**
> - 仓库重命名: openclaw-sansheng-liubu → edict
> - README.md/README_EN.md: 标题+描述更新为 Edict
> - Docker 镜像: cft0808/sansheng-demo → cft0808/edict
> - 所有链接/引用统一更新

**关键发现**：原名 `openclaw-sansheng-liubu`（OpenClaw 三省六部）直接暴露了灵感来源——与我方项目使用完全相同的关键词组合。

### 3.3 初始 commit 异常分析

Commit `5b46f67`（2026-02-23 14:34:55Z）：
- **一次性提交 26 个文件**
- 作者邮箱：`cft0808@163.com`
- 文件包括：完整 README(329行)、README_EN(111行)、8 个 Agent SOUL.md、install.sh(218行)、Dashboard(881行)、5 个 Python 脚本、CONTRIBUTING.md、LICENSE、Issue 模板
- **这不是逐步开发的痕迹，是参考现有项目后批量搭建的特征**

### 3.4 Contributors

edict 仓库**仅有 1 个 contributor**：cft0808 本人（71 次 commit）。没有任何协作者参与。

### 3.5 edict 仓库中包含 "bingsen" 的文件

通过 GitHub Code Search 发现以下文件包含 `bingsen`（病森/冰森）关键词：

| 文件路径 | 仓库 |
|----------|------|
| docs/remote-skills-guide.md | cft0808/edict |
| agents/zhongshu/SOUL.md | cft0808/edict |
| docker/demo_data/agent_config.json | cft0808/edict |
| docker/demo_data/live_status.json | cft0808/edict |
| agents/taizi/SOUL.md | cft0808/edict |
| tests/test_e2e_kanban.py | cft0808/edict |

⚠️ **"bingsen" 出现在 edict 的 Agent 配置和 SOUL 文件中**——这需要进一步确认是否为我方原始项目中的标识残留。

---

## 四、Issue #55 维权记录

### 4.1 我方提交的 Issue

- **标题**：⚠️ 抄袭/未注明来源 — 核心概念源自 boluobobo-ai-court-tutorial，请立即注明出处
- **提交者**：wanikua（我方）
- **时间**：2026-03-05 16:17:25 UTC
- **状态**：Open（截至调查时未关闭）
- **评论数**：8 条

### 4.2 社区反应

| 用户 | 立场 | 内容摘要 |
|------|------|----------|
| wanikua | 原告 | 提交了完整证据链（时间线、11 项架构一致、Agent ID、Prompt 句式、量化相似度、改名证据、公众号矛盾） |
| wanikua | 原告 | 补充证据：时间线铁证 + 流量数据 |
| imborntowin | 支持原告 | "支持" |
| xylinq | 中立偏被告 | "想法是不被专利/著作权保护的" |
| wanikua | 回应 | "MIT不保护所有权，但保护署名权"；"诉求仅是承认灵感来源" |
| BenalexCheung | 支持原告 | 分享自己被抄袭经历，建议加防盗水印 |
| BlackBird-BB | 围观 | "蹲个后续" |
| wanikua | 补充 | 公众号文章与仓库底稿"灵感来源"自相矛盾的证据 |

### 4.3 cft0808 本人回应

**截至调查时，cft0808 在 Issue #55 中未做任何回应。**

对比其在其他 Issue 中的活跃回复（如 #2 "哈哈哈哈哈"、#3 "ok 我这几天看一下"、#5 "🥲🥲🥲我明天看下"），Issue #55 的沉默本身具有暗示性。

---

## 五、公众号「朕的邸报」矛盾证据

### 5.1 仓库中的 wechat-article.md

文件 `docs/wechat-article.md` 中的灵感来源叙述：

> "然后有一天，我在翻**《资治通鉴》**的时候突然想到——三省六部制。"

### 5.2 公众号已发布文章

根据 Issue #55 中提供的截图证据，微信公众号版本写的是：

> "然后有一天，我在看**《太平年》**的时候突然想到——三省六部制"

### 5.3 矛盾分析

**同一个人、同一个项目、同一个"灵感时刻"——两个版本连看的是哪本书都对不上。**

这强烈暗示所谓的"灵感来源"叙事是事后编造的。如果真有一个明确的灵感时刻，不可能连触发灵感的书名都记错。

---

## 六、活动模式分析

### 6.1 GitHub Events 时间线

cft0808 的**全部**公开事件（截至调查时）都集中在 edict 仓库：

| 日期 | 活动 |
|------|------|
| 2026-02-23 | 创建 edict，初始 commit + 密集推送 |
| 2026-02-24 | 大量推送，含改名 commit |
| 2026-02-26 | 密集推送（当天 15+ 个 push event） |
| 2026-02-27 | 密集推送（当天 15+ 个 push event） |
| 2026-03-01 | 继续推送 + 回复 Issue（#2, #3, #5） |
| 2026-03-02 | 推送 + 修复 |
| 2026-03-05 | 修复 P0 issues + 添加公众号入口 |

**在 edict 之前，cft0808 在 GitHub 上几乎没有公开活动。** edict 是其第一个有实质代码的项目。

### 6.2 开发节奏异常

- **创建日（2/23）**：83 分钟内 10 个 commit，平均 8.3 分钟一个完整 feature
- **2/26-2/27**：两天内 30+ 个 push event
- 这种密集的开发节奏与"参考现有项目快速搭建"的行为模式高度一致

---

## 七、关联人物 / 社交网络

### 7.1 Followers（18 人）

piedro, cs4745, dutao1992, onepisYa, DavidCRushBlyat, gamegg, EdwardWason, chen-spring, best-seller, warma16, JasonSloan, CaptainRkbin, ChillSniper, Gan1quan, Xdluomingxian, mazixuan69, YukiNcn, CCS99

### 7.2 Following（1 人）

- **ymatrix-data** — 一家数据库公司组织

### 7.3 Starred 仓库

cft0808/edict（自己的）, UFund-Me/Qbot, AccumulateMore/CV, ollama/ollama, open-webui/open-webui, Chinese-alpaca-lora, CodePhiliaX/Chat2DB, apache/xerces-c, LC1332/Luotuo-QA, LC1332/Luotuo-Chinese-LLM

**注意：starred 列表中没有 wanikua 的项目** — 但这不代表未访问过（star 可以取消，clone 不需要 star）。

---

## 八、其他仓库抄袭行为检查

### 8.1 Fork 仓库

cft0808 的 Fork 仓库（ChatGLM3、Chinese-alpaca-lora、Qbot、llm_related、CV、PyBaMM）均为标准 Fork，**未发现改名冒充原创的行为**。

### 8.2 原创仓库

- `xxx` / `yyy` / `zzz`：2022 年创建的空仓库
- `chuft_alien`：2023 年创建的空仓库
- **edict**：唯一有实质内容的原创仓库，即本案涉嫌抄袭的项目

---

## 九、证据强度总结

| 证据 | 强度 | 说明 |
|------|------|------|
| 时间线（晚 21 小时） | ⭐⭐⭐⭐⭐ | 铁证 |
| 原名 `openclaw-sansheng-liubu` | ⭐⭐⭐⭐⭐ | 直接暴露灵感来源 |
| 11 项架构设计一致 | ⭐⭐⭐⭐⭐ | 概率极低的巧合 |
| Agent ID 拼音方案 5/5 一致 | ⭐⭐⭐⭐ | 特征性强 |
| 初始 commit 26 文件批量提交 | ⭐⭐⭐⭐ | 非正常开发模式 |
| 公众号灵感来源叙述矛盾 | ⭐⭐⭐⭐ | 编造叙事的间接证据 |
| 无历史原创项目经验 | ⭐⭐⭐ | 能力来源存疑 |
| edict 中存在 "bingsen" 关键词 | ⭐⭐⭐ | 需进一步确认含义 |
| Issue #55 中保持沉默 | ⭐⭐ | 间接证据 |

---

## 十、人物画像

基于调查结果，cft0808 的画像如下：

- **中国大陆用户**，使用 163 邮箱
- **姓名缩写 CFT**，可能与 08/08 日期有关
- **疑似三一重工员工或前员工**（zzz 仓库 "code in Sany"，2022年）
- **AI/LLM 学习者**，2023 年开始关注 LLM，2025 年学习深度学习和电池建模
- **首次做有影响力的开源项目**，edict 是其唯一有实质代码的公开项目
- **运营微信公众号「cft0808」**（朕的邸报），用于推广 edict
- **在被指控抄袭后保持沉默**，未在 Issue #55 做任何回应

---

## 十一、调查结论

1. **cft0808 的 edict 项目高度可能参考了 wanikua 的 boluobobo-ai-court-tutorial**，证据链完整
2. **原仓库名 `openclaw-sansheng-liubu` 是最直接的证据**——证明项目最初就以我方项目的核心概念命名
3. **公众号灵感来源叙述前后矛盾**，暗示"独立原创"叙事是事后编造
4. **此人无其他抄袭前科**（其他仓库均为标准 Fork），但 edict 案件证据确凿
5. **edict 仓库中存在 "bingsen" 关键词**，出现在多个 Agent 配置文件中，建议进一步核实其含义和来源

---

*调查结束。以上所有数据均来自 GitHub 公开 API，调查时间 2026-03-06 05:00 UTC。*
