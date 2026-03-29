# AI 朝廷 · 多 Agent 协作技能

> 以明朝内阁制为蓝本，用 OpenClaw 框架构建的多 Agent 协作系统。

## 🏛️ 简介

**一行命令起王朝，三省六部皆 AI。**

本技能包提供完整的 AI 朝廷配置，支持三种制度：

- **明朝内阁制** - 司礼监/内阁/六部
- **唐朝三省制** - 三省六部/御史台/史官
- **现代企业制** - CEO/Board/CxO

## 📦 安装

```bash
# 通过 clawdhub 安装
clawdhub install ai-court-skill

# 或手动克隆
git clone https://github.com/wanikua/ai-court-skill.git
```

## 🚀 快速开始

### 1. 选择配置模板

```bash
# 明朝 3 Bot（推荐）
cp configs/feishu-ming/openclaw-3bot.json ~/.openclaw/openclaw.json

# 或唐朝 3 Bot
cp configs/feishu-tang/openclaw-3bot.json ~/.openclaw/openclaw.json

# 或现代 3 Bot
cp configs/feishu-modern/openclaw-3bot.json ~/.openclaw/openclaw.json
```

### 2. 配置 Bot 凭证

编辑 `~/.openclaw/openclaw.json`，填入你的飞书应用凭证。

### 3. 重启 Gateway

```bash
openclaw gateway restart
```

## 📋 配置模板

| 制度 | 1 Bot | 3 Bot | 完整版 |
|------|-------|-------|--------|
| 明朝 | ✅ | ✅ | 9 Bot |
| 唐朝 | ✅ | ✅ | 11 Bot |
| 现代 | ✅ | ✅ | 9 Bot |

## 📖 文档

- [飞书配置指南](./docs/feishu-setup-simple.md)
- [灵活配置指南](./docs/feishu-flexible-setup.md)

## 🔗 相关项目

- **danghuangshang**: 生产部署实例 - https://github.com/wanikua/danghuangshang
- **OpenClaw**: 底层框架 - https://github.com/openclaw/openclaw

## 📝 License

MIT License
