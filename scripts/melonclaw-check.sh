#!/bin/bash
# MelonClaw 开发检查 - 每 5 分钟提醒兵部

MESSAGE="@兵部 MelonClaw 开发进度检查 - 请继续第 3 轮开发任务（测试修复、Docker 配置、文档）"
CHANNEL="1484929657139888309"
LOGFILE="/tmp/melonclaw-check.log"
DISCORD_TOKEN="MTQ3MzU4MTc4MDI3ODgzNzI3OQ.GZ0mhE.8LqJN0R3K2Oq4oM5pX7vY9wZ1aB3cD5eF7gH9i"

# 直接用 Discord API 发送
curl -s -X POST "https://discord.com/api/v10/channels/$CHANNEL/messages" \
  -H "Authorization: Bot $DISCORD_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"content\": \"$MESSAGE\"}" > /dev/null

EXITCODE=$?
echo "[$(date)] Exit: $EXITCODE" >> "$LOGFILE"
