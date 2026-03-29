# 小红书文案 - Cloud Skill（最终版）

---

## 把 AI 变成团队？3分钟搞定

之前发的"AI朝廷"很多人问能不能直接用。

可以了。整个系统做成了 Cloud Skill，一键安装。

---

## 三种部署方式

| 方式 | 命令 | 适合场景 |
|------|------|----------|
| ☁️ 服务器 | `clawdhub install ai-court` | 24h 待命 |
| 🖥️ 本地 | `clawdhub install ai-court --local` | 临时使用 |
| 🏠 家用服务器 | 同上 | Mac mini/树莓派 |

服务器推荐 Oracle Cloud ARM（4核24G，终身免费）。

---

## 安装步骤

### 1. 安装 Skill
```bash
clawdhub install ai-court
```

### 2. 配置 Discord Bot
需要先在 Discord 开发者平台创建一个 Bot：
1. 访问 discord.com/developers → 创建应用 → 添加 Bot
2. 开启 **Message Content Intent**
3. 复制 Bot Token
4. 把 Bot 邀请到你的服务器

### 3. 填入配置
编辑 `~/.clawdbot/clawdbot.json`，填入：
- Anthropic API Key
- Discord Bot Token

### 4. 启动
```bash
systemctl --user start clawdbot-gateway
```

---

## 怎么用

直接在 Discord 里发消息，@对应部门即可：

- `@工程部 写个登录 API` → 自动写代码 + 提交 GitHub
- `@财务部 分析本月开支` → 自动账单分析
- `@市场部 写条文案` → 自动生成内容
- `@运维部 部署服务` → 自动执行部署

---

## 两个版本

- 🏛️ **AI 朝廷** - 明朝六部制（兵部/户部/礼部/工部/吏部/刑部）
- 🏢 **Become CEO** - 现代公司制（Engineering/Finance/Marketing/DevOps/Legal/Management）

---

## 支持模型

Claude / OpenAI / Qwen / Gemini / MiniMax

可在配置文件中切换。

---

## 成本

- 服务器：Oracle Cloud 免费，或使用本地/家用设备
- Clawdbot：开源免费
- API：按各平台标准收费

---

## 传送门

- GitHub：github.com/wanikua/ai-court-skill
- 完整教程：github.com/wanikua/boluobobo-ai-court-tutorial

---

## ⚠️ 免责条款

1. AI 生成内容仅供参考，请自行审核后使用
2. 代码自动执行前建议 review，确认无风险后再合并
3. API 密钥请妥善保管，不要提交到公开仓库
4. 免费服务器有一定限额，超出后可能产生费用，请留意账单
5. 本产品按"原样"提供，不承担任何直接或间接责任

---

有问题评论区问。

#AI #Clawdbot #自动化 #效率工具
