# 故障排除

## 常见问题

### 1. `openclaw: command not found`

**解决**：安装 OpenClaw
```bash
npm install -g openclaw@latest
```

### 2. API Key 错误

**症状**：启动后报错 "Invalid API Key"

**解决**：
1. 检查 `openclaw.json` 中的 API Key 是否正确
2. 确认 API Key 有足够余额
3. 检查网络连接

### 3. Agent 不响应

**症状**：发送消息后没有回复

**解决**：
```bash
# 查看日志
openclaw logs

# 重启
openclaw restart

# 检查配置
openclaw doctor
```

### 4. 配置加载失败

**症状**：启动时报配置错误

**解决**：
```bash
# 验证 JSON 格式
cat ~/.openclaw/openclaw.json | python3 -m json.tool

# 重新复制配置
cd ~/.openclaw
cp -r clawd/skills/ai-court/configs/ming-neige/* .
```

## 获取帮助

- GitHub Issues: https://github.com/wanikua/ai-court-skill/issues
- 文档：`cat ~/.openclaw/clawd/skills/ai-court/references/*.md`
