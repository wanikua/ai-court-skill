# TOOLS.md

## Quadrants 集成
- API: `https://quadrants.ch/api/service`（POST，X-API-Key 认证）
- Service Key: `f21657b9317f3873ad14cc6e21ad88f5f0bf3c73c3d9cbb7ac7e95c8aa9f26a9`
- User ID: `user_34psr55Rx8XQRJyF1G8Yovnaj15`（王Sir Clerk ID）
- 默认项目: `proj_1761970830791_fhgaxrmo9`（Welcome 项目）
- Webhook: `https://quadrants.ch/api/webhooks/clawdbot`
- Vercel Token: `vcp_5UuP4HgLszKmYB3q8aCF61yRblV0JOj7aZlmmwyCmb2aIk3kW117EQo6`
- Vercel Project ID: `prj_7RNcsAca0siUSfo1mpFdQ5xzqclL`

## 服务器
- VPS: Oracle Cloud (144.24.247.79)
- Tailscale: 100.125.166.54 (vibe-server)
- GitHub: wanikua (gh CLI)

## 微信推送 (Server酱)
- API: `POST https://sctapi.ftqq.com/{KEY}.send` body: `{title, desp(markdown)}`
- Key 1: `SCT315313TT7HVouZgizpiw6HOw8UMmxjh`
- Key 2: `SCT315318Tlyujb9ZmhX7o9OcOacNdq80S`
- Key 3: `SCT315319TcDQkpH2n5aN78vVVwAYtohWB`
- 3个Key全推，覆盖多人
- 来源：光启哨兵项目 `.env`

## 模型
- 司礼监：Claude Sonnet 4.5 (日常对话)
- 执行层：Claude Opus 4.6 via coding-agent skill (编码分析执行)

## Notion 史记式架构（新制）
- Token: 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
- 父页面：30b90cde-52d4-8050-9beb-f5a56e7790（🏯 菠萝王朝）

### 📜 本纪（时间线）
| 数据库 | ID | URL |
|--------|-----|-----|
| 📅 起居注（日报） | `30f90cde-52d4-81da-a6a0-f9a03c21046d` | https://www.notion.so/30f90cde52d481daa6a0f9a03c21046d |
| 📊 朔望录（周报） | `30f90cde-52d4-81da-9051-ead97427257d` | https://www.notion.so/30f90cde52d481da9051ead97427257d |
| 🌙 编年纪（月报） | `30f90cde-52d4-8158-9ca3-c559207d6200` | https://www.notion.so/30f90cde52d481589ca3c559207d6200 |
| 🎯 大事记 | `30f90cde-52d4-8111-9ec9-d79f3f266083` | https://www.notion.so/30f90cde52d481119ec9d79f3f266083 |

### 📋 表（数据看板）
| 数据库 | ID | URL |
|--------|-----|-----|
| 💰 食货表（财务） | `30f90cde-52d4-8168-8c62-c3c06a27e980` | https://www.notion.so/30f90cde52d481688c62c3c06a27e980 |
| 📱 舆情表（社媒） | `30f90cde-52d4-8197-9148-f2401a6cf4a7` | https://www.notion.so/30f90cde52d481979148f2401a6cf4a7 |
| 👥 臣工表（人脉） | `30f90cde-52d4-8161-a893-f22e7ba94312` | https://www.notion.so/30f90cde52d48161a893f22e7ba94312 |
| 🔧 器用表（工具） | `30f90cde-52d4-8171-9111-df8f682cb144` | https://www.notion.so/30f90cde52d481719111df8f682cb144 |

### 📖 志（知识库）
| 数据库/页面 | ID | URL |
|-------------|-----|-----|
| 🖥️ 天工志（技术） | `30f90cde-52d4-8103-8c91-dd744c4efea6` | https://www.notion.so/30f90cde52d481038c91dd744c4efea6 |
| 📢 宣化志（运营） | `30f90cde-52d4-8141-a01d-ee72927d56d9` | https://www.notion.so/30f90cde52d48141a01dee72927d56d9 |
| 📚 经籍志（学业） | `30f90cde-52d4-811e-9676-d9385f7ae9cb` | https://www.notion.so/30f90cde52d4811e9676d9385f7ae9cb |
| 🔖 典章志（SOP） | `30f90cde-52d4-81de-907e-fe7ffa01f434` | https://www.notion.so/30f90cde52d481de907efe7ffa01f434 |

### 📝 列传（项目档案）
| 数据库 | ID | URL |
|--------|-----|-----|
| 🗂️ 列传总录 | `30f90cde-52d4-81ad-a478-ff334ae89b13` | https://www.notion.so/30f90cde52d481ada478ff334ae89b13 |

### 预置项目（11个）
pingdoudou, ItsNotAI, Loop, quadrants, cigartales, likuanwang.com, veno-ventures, 菠言菠语, b2ctools, upfrontzero, cs461

---

## Notion 旧制（归档）
- 旧日报 DB: `30b90cde-52d4-8108-aef7-f3e8ccf3bab2`（已迁移4条→起居注）
- 旧周报 DB: `30b90cde-52d4-8172-a688-da78dd9a726a`（空）
- 旧月报 DB: `30b90cde-52d4-813c-80fe-e5ebdf1d7df8`（空）
- 旧小红书 DB: `0d7dc20d-1e3e-4442-931e-25c4f4f8bfd0`（空）

### 奏报流程
- 日报：简报 -> Notion 日报 DB + Discord 日报频道
- 周报：详细 -> Notion 周报 DB + Discord 周报频道发链接
- 月报：详细 -> Notion 月报 DB + Discord 月报频道发链接
- 同时存档 memory/weekly/ 和 memory/monthly/

## Notion 小红书帖子管理
- 数据库 ID: 0d7dc20d-1e3e-4442-931e-25c4f4f8bfd0
- 数据库 URL: https://www.notion.so/0d7dc20d1e3e4442931e25c4f4f8bfd0
- 父页面：30b90cde-52d4-8050-9beb-f5a56b6e7790（菠萝王朝奏报合集）

### 字段配置
| 字段名 | 类型 | 说明 |
|--------|------|------|
| 标题 | Title | 帖子标题 |
| 状态 | Select | 草稿/待发布/已发布/已归档 |
| 发布时间 | Date | 计划/实际发布时间 |
| 内容类型 | Select | 引流/教程/案例/互动 |
| 阅读数 | Number | 笔记阅读量 |
| 点赞数 | Number | 点赞数量 |
| 收藏数 | Number | 收藏数量 |
| 评论数 | Number | 评论数量 |
| 转化数 | Number | 实际搭建人数 |
| 文案链接 | URL | 文案存放链接 |
| 配图 | Files | 帖子配图文件 |
| 备注 | Text | 额外备注信息 |

### 视图说明
- 看板视图：按状态分组（需手动在 Notion UI 创建）
- 日历视图：按发布时间（需手动在 Notion UI 创建）
- 表格视图：默认视图，数据总览

> 注：Notion API 不支持直接创建视图，需在 Notion 界面手动添加看板/日历视图

## Discord
- 服务器：菠萝王朝 (1473582732259889174)
- Bot ID: 1473581780278837279

## GitHub 项目
- 兵部：pindoudou / ItsNotAI 全系 / Loop / quadrants 全系
- 户部：b2ctools / upfrontzero
- 礼部：cigartales / likuanwang.com
- 吏部：veno-ventures
- 学部：cs461 / EvolveFlow / heapoverflow
