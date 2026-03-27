# Discord 配置指南

## 📋 前提条件

- ✅ 已安装 OpenClaw
- ✅ 已安装 AI Court Skill
- ✅ 有 Discord 账号

## 步骤 1：创建 Discord Bot

### 1.1 访问 Discord Developer Portal

打开 https://discord.com/developers/applications

### 1.2 创建新应用

1. 点击右上角 "New Application"
2. 输入应用名称（如 "AI Court - 司礼监"）
3. 点击 "Create"

### 1.3 创建 Bot

1. 在左侧菜单点击 "Bot"
2. 点击 "Add Bot"
3. 点击 "Yes, do it!"

### 1.4 获取 Bot Token

1. 在 Bot 页面，点击 "Reset Token"（或 "View Token"）
2. 复制 Token（**只此一次，保存好！**）
3. 格式：`your-bot-token-here`

### 1.5 配置 Bot 权限

1. 在 Bot 页面，找到 "Privileged Gateway Intents"
2. 启用以下权限：
   - ✅ MESSAGE CONTENT INTENT
   - ✅ SERVER MEMBERS INTENT

## 步骤 2：邀请 Bot 到服务器

### 2.1 生成邀请链接

1. 在左侧菜单点击 "OAuth2" → "URL Generator"
2. 选择 scopes：
   - ✅ `bot`
3. 选择 Bot Permissions：
   - ✅ Send Messages
   - ✅ Read Messages/View Channels
   - ✅ Read Message History
   - ✅ Embed Links
   - ✅ Attach Files
   - ✅ Use Slash Commands

### 2.2 邀请 Bot

1. 复制生成的 URL
2. 在浏览器打开
3. 选择要添加的服务器
4. 点击 "Authorize"

## 步骤 3：配置 AI Court

### 3.1 编辑 openclaw.json

```bash
nano ~/.openclaw/openclaw.json
```

### 3.2 填写 Bot Token

找到 `discord` → `accounts` 部分：

```json
"discord": {
  "accounts": {
    "silijian": {
      "name": "司礼监",
      "token": "YOUR_BOT_TOKEN_HERE",  // ← 粘贴你的 Bot Token
      "groupPolicy": "open"
    }
  }
}
```

### 3.3 获取服务器和频道 ID

1. 在 Discord 中启用开发者模式：
   - 用户设置 → 高级 → 开发者模式

2. 右键点击服务器 → "Copy Server ID"

3. 右键点击频道 → "Copy Channel ID"

### 3.4 配置允许列表（可选）

```json
"discord": {
  "allowGroups": ["你的服务器 ID"],
  "allowChannels": ["频道 ID 1", "频道 ID 2"]
}
```

## 步骤 4：测试

### 4.1 重启 OpenClaw

```bash
openclaw restart
```

### 4.2 查看日志

```bash
openclaw logs
```

### 4.3 测试 Bot

在 Discord 中：
- @提及 Bot
- 发送消息看是否响应

## ❓ 常见问题

### Bot 不响应

1. 检查 Token 是否正确
2. 检查 Bot 是否在线
3. 检查日志：`openclaw logs`

### Bot 被踢出服务器

1. 重新生成邀请链接
2. 确保权限正确

### Token 失效

1. 在 Discord Developer Portal 重置 Token
2. 更新 openclaw.json
3. 重启 OpenClaw

## 🔗 相关链接

- Discord Developer Portal: https://discord.com/developers/applications
- Discord Bot 文档：https://discord.com/developers/docs/intro
