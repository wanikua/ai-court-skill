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

安装后复制配置：

```bash
# 明朝内阁制
cd ~/.openclaw && cp -r clawd/skills/ai-court/configs/ming-neige/* .

# 或唐朝三省制
cd ~/.openclaw && cp -r clawd/skills/ai-court/configs/tang-sansheng/* .

# 或现代企业制
cd ~/.openclaw && cp -r clawd/skills/ai-court/configs/modern-ceo/* .
```

配置 API Key 后启动：

```bash
openclaw start
```

## 文档

查看 `references/` 目录中的详细文档。

## 链接

GitHub: https://github.com/wanikua/ai-court-skill
