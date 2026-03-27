---
name: ai-court
description: "以明朝内阁制为蓝本的多 Agent 协作系统 - 一键部署你的 AI 朝廷"
---

# AI Court | 当皇上

一行命令起王朝，三省六部皆 AI。

## 安装

```bash
clawdhub install ai-court
```

## 使用

### 1. 选择制度

```bash
# 明朝内阁制（推荐）
cd ~/.openclaw && cp -r clawd/skills/ai-court/configs/ming-neige/* .

# 或唐朝三省制
cd ~/.openclaw && cp -r clawd/skills/ai-court/configs/tang-sansheng/* .

# 或现代企业制
cd ~/.openclaw && cp -r clawd/skills/ai-court/configs/modern-ceo/* .
```

### 2. 配置 API Key

编辑 `~/.openclaw/openclaw.json`：

```json
{
  "models": {
    "providers": {
      "dashscope": {
        "apiKey": "sk-your-api-key"
      }
    }
  }
}
```

**获取 API Key**:
- 阿里 DashScope: https://dashscope.console.aliyun.com/apiKey
- DeepSeek: https://platform.deepseek.com/api_keys

### 3. 配置 Discord（可选）

编辑 `~/.openclaw/openclaw.json` 中的 `discord.accounts`：

```json
{
  "discord": {
    "accounts": {
      "silijian": {
        "token": "YOUR_BOT_TOKEN"
      }
    }
  }
}
```

**详细教程**: `references/discord-setup.md`

### 4. 验证安装

```bash
bash clawd/skills/ai-court/scripts/doctor.sh
```

### 5. 启动

```bash
openclaw start
```

## 文档

- `references/tutorial-basics.md` - 基础教程
- `references/discord-setup.md` - Discord 配置
- `references/config-guide.md` - 配置指南
- `references/troubleshooting.md` - 故障排除

## 链接

GitHub: https://github.com/wanikua/ai-court-skill
