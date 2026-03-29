# Edict Commit 深度分析

## 🔥 重大发现

### 1. 项目经历三次改名
**改名链**：`junjichu-v2`（军机处v2）→ `openclaw-sansheng-liubu` → `edict`

证据：
- commit `a6fd9b9` (2/27): `data` 符号链接指向 `/Users/bingsen/clawd/junjichu-v2/data`
- commit `c6cf88b` (2/24): `仓库重命名: openclaw-sansheng-liubu → edict`
- `agents/zhongshu/SOUL.md` 至今仍写着: `项目仓库在 /Users/bingsen/clawd/openclaw-sansheng-liubu/`

### 2. 作者真实 Mac 用户名: bingsen
路径 `/Users/bingsen/` 残留在 6 个文件中（40+ 处）：
- agents/zhongshu/SOUL.md
- agents/taizi/SOUL.md
- docker/demo_data/live_status.json (16处)
- docker/demo_data/agent_config.json (14处)
- tests/test_e2e_kanban.py (4处)
- docs/remote-skills-guide.md (3处)

### 3. 「A计划」= 有组织的爆款打造
live_status.json 第781行内部奏折内容：
> 「A计划——三省六部 GitHub 爆款项目打造，四项任务已全部交付」

commit 中标注了 `feat(A计划)` 和 `feat(A计划-Week1)`，说明有系统化的包装推广计划。

### 4. 公众号底稿藏在不相关 commit 中
`docs/wechat-article.md` (302行) 在 commit `efd36ab` 中加入，
commit message 标题是「添加 Copilot 模型配置 + 旨意看板归档功能」，
完全没提公众号文章。刻意把文案底稿混在功能 commit 里。

### 5. Agent 直接写 commit
commit `87f0313` 的 message 末尾标注了：
> 任务ID: JJC-20260224-014 | 礼部执行

说明 commit 是由 AI Agent（礼部）自动生成和提交的。

### 6. 第一天的不可能速度
2/23 14:34→16:18（103分钟），11个 commit：
- init commit: 26 文件 / 2595 行
- 平均 9.4 分钟一个完整 feature
- 包括 dashboard、Agent 系统、调度引擎、早朝系统

### 7. 《太平年》vs《资治通鉴》
公众号文章说看《太平年》，GitHub 底稿说看《资治通鉴》。
同一个灵感时刻书名都不一样。故事是编的。
