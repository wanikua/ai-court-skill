# AI Court 基础教程

## 5 分钟快速开始

### 步骤 1：安装（已完成）
```bash
clawdhub install ai-court
```

### 步骤 2：选择制度

**明朝内阁制**（推荐新手）：
```bash
cd ~/.openclaw
cp -r clawd/skills/ai-court/configs/ming-neige/* .
```

**唐朝三省制**：
```bash
cd ~/.openclaw
cp -r clawd/skills/ai-court/configs/tang-sansheng/* .
```

**现代企业制**：
```bash
cd ~/.openclaw
cp -r clawd/skills/ai-court/configs/modern-ceo/* .
```

### 步骤 3：配置 API Key

编辑 `~/.openclaw/openclaw.json`：

```json
{
  "models": {
    "providers": {
      "dashscope": {
        "apiKey": "sk-your-api-key-here"
      }
    }
  }
}
```

**获取 API Key**：
- 阿里 DashScope: https://dashscope.console.aliyun.com/apiKey
- DeepSeek: https://platform.deepseek.com/api_keys
- OpenAI: https://platform.openai.com/api-keys

### 步骤 4：启动

```bash
openclaw start
```

## 常用命令

```bash
# 查看状态
openclaw status

# 查看会话
openclaw sessions

# 停止
openclaw stop
```

## 下一步

- [配置 Discord](./discord-setup.md)
- [自定义 Agent](./customize-agent.md)
- [故障排除](./troubleshooting.md)
