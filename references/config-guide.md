# 配置指南

## openclaw.json 结构

```json
{
  "models": {
    "providers": {
      "dashscope": {
        "baseUrl": "https://dashscope.aliyuncs.com/compatible-mode/v1",
        "apiKey": "你的 API Key",
        "api": "openai",
        "models": [
          {
            "id": "qwen-plus",
            "name": "Qwen Plus",
            "input": ["text", "image"],
            "contextWindow": 32000,
            "maxTokens": 8192
          }
        ]
      }
    }
  },
  "agents": {
    "neige": {
      "name": "内阁",
      "model": "dashscope/qwen-plus",
      "systemPrompt": "你是内阁首辅，负责协调各部门工作..."
    }
  }
}
```

## 推荐配置

### 经济型（便宜）
- 模型：`qwen-turbo` 或 `deepseek-chat`
- 成本：~¥0.01/千 tokens

### 平衡型（推荐）
- 模型：`qwen-plus` 或 `deepseek-coder`
- 成本：~¥0.04/千 tokens

### 高性能型
- 模型：`qwen-max` 或 `claude-3-sonnet`
- 成本：~¥0.12/千 tokens

## 环境变量

也可以将敏感信息放在环境变量中：

```bash
export DASHSCOPE_API_KEY="sk-xxx"
export OPENAI_API_KEY="sk-xxx"
```

然后在 `openclaw.json` 中引用：

```json
{
  "models": {
    "providers": {
      "dashscope": {
        "apiKey": "${DASHSCOPE_API_KEY}"
      }
    }
  }
}
```
