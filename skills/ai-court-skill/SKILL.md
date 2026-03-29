# AI 朝廷 · 多 Agent 协作技能

> 以明朝内阁制为蓝本，用 OpenClaw 框架构建的多 Agent 协作系统。
> 一台服务器 + OpenClaw = 一支 7×24 在线的 AI 朝廷。

## 📦 技能信息

- **名称**: AI 朝廷 (AI Court)
- **版本**: 1.0.0
- **作者**: 菠萝王朝团队
- **License**: MIT
- **描述**: 三省六部制多 Agent 协作系统，支持明朝/唐朝/现代三种制度

## 🏛️ 制度说明

### 明朝内阁制（9 Bot）

| Bot | 职责 | 推荐度 |
|-----|------|--------|
| 司礼监 | 调度中心 | ⭐⭐⭐ 必需 |
| 内阁 | Prompt 优化 | ⭐⭐⭐ 必需 |
| 都察院 | 代码审查 | ⭐⭐ 推荐 |
| 兵部 | 编码开发 | ⭐⭐ 推荐 |
| 户部 | 财务分析 | ⭐ 可选 |
| 礼部 | 品牌营销 | ⭐ 可选 |
| 工部 | 运维部署 | ⭐⭐ 推荐 |
| 吏部 | 项目管理 | ⭐ 可选 |
| 刑部 | 法务合规 | ⭐ 可选 |

### 唐朝三省制（11 Bot）

| Bot | 职责 | 推荐度 |
|-----|------|--------|
| 中书省 | 起草诏令 | ⭐⭐⭐ 必需 |
| 门下省 | 审核封驳 | ⭐⭐⭐ 必需 |
| 尚书省 | 派发执行 | ⭐⭐⭐ 必需 |
| 御史台 | 监察审计 | ⭐⭐ 推荐 |
| 史官 | 记录朝政 | ⭐ 可选 |
| 六部 | 执行部门 | ⭐⭐ 复用 |

### 现代企业制（9 Bot）

| Bot | 职责 | 推荐度 |
|-----|------|--------|
| CEO | 决策调度 | ⭐⭐⭐ 必需 |
| Board | 战略审议 | ⭐⭐ 推荐 |
| QA | 质量审查 | ⭐⭐ 推荐 |
| CTO | 技术执行 | ⭐⭐⭐ 必需 |
| CFO | 财务分析 | ⭐ 可选 |
| CMO | 品牌营销 | ⭐ 可选 |
| COO | 运营部署 | ⭐⭐ 推荐 |
| CLO | 法务合规 | ⭐ 可选 |
| CoS | 项目协调 | ⭐ 可选 |

## 📋 配置说明

### 灵活配置模板

本技能提供多种配置模板，用户可按需选择：

| 模板 | Bot 数量 | 适用场景 |
|------|---------|---------|
| **1 Bot** | 1 | 个人/快速部署 |
| **3 Bot** | 3 | 小团队⭐推荐 |
| **5 Bot** | 5 | 中型团队 |
| **9/11 Bot** | 9-11 | 大型团队 |

### 配置文件结构

```
configs/
├── feishu-ming/       # 飞书 - 明朝
│   ├── openclaw-1bot.json
│   ├── openclaw-3bot.json
│   ├── openclaw-5bot.json
│   └── openclaw-9bot.json
├── feishu-tang/       # 飞书 - 唐朝
│   ├── openclaw-1bot.json
│   ├── openclaw-3bot.json
│   └── openclaw-11bot.json
├── feishu-modern/     # 飞书 - 现代
│   ├── openclaw-1bot.json
│   ├── openclaw-3bot.json
│   └── openclaw-9bot.json
├── ming-neige/        # Discord - 明朝
├── tang-sansheng/     # Discord - 唐朝
└── modern-ceo/        # Discord - 现代
```

## 🚀 安装指南

### 方式 1: 通过 clawdhub 安装（推荐）

```bash
# 安装技能
clawdhub install ai-court-skill

# 选择配置模板
cp configs/feishu-ming/openclaw-3bot.json ~/.openclaw/openclaw.json
```

### 方式 2: 手动安装

```bash
# 克隆仓库
git clone https://github.com/wanikua/ai-court-skill.git

# 复制配置
cp ai-court-skill/configs/feishu-ming/openclaw-3bot.json ~/.openclaw/openclaw.json

# 编辑配置，填入你的 Bot 凭证
nano ~/.openclaw/openclaw.json

# 重启 Gateway
openclaw gateway restart
```

## ⚙️ 配置说明

### 飞书 Bot 配置

编辑 `openclaw.json`，填入你的飞书应用凭证：

```json
{
  "channels": {
    "feishu": {
      "enabled": true,
      "accounts": {
        "silijian": {
          "appId": "cli_xxx",
          "appSecret": "xxx"
        }
      }
    }
  }
}
```

### 环境变量（推荐）

使用环境变量管理敏感信息：

```bash
export FEISHU_SILIJIAN_APP_ID="cli_xxx"
export FEISHU_SILIJIAN_APP_SECRET="xxx"
```

配置中引用：

```json
{
  "channels": {
    "feishu": {
      "accounts": {
        "silijian": {
          "appId": "${FEISHU_SILIJIAN_APP_ID}",
          "appSecret": "${FEISHU_SILIJIAN_APP_SECRET}"
        }
      }
    }
  }
}
```

## 📖 文档

- [飞书配置指南](./docs/feishu-setup-simple.md)
- [灵活配置指南](./docs/feishu-flexible-setup.md)
- [Docker 部署](https://github.com/wanikua/danghuangshang/blob/main/docs/docker-deployment.md)

## 🔗 相关项目

- **danghuangshang**: 生产部署实例 - https://github.com/wanikua/danghuangshang
- **OpenClaw**: 底层框架 - https://github.com/openclaw/openclaw
- **Become CEO**: 现代企业版 - https://github.com/wanikua/become-ceo

## 📝 License

MIT License - 详见 [LICENSE](../LICENSE)
