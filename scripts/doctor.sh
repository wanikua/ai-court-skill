#!/bin/bash
# AI Court - 安装验证脚本

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo ""
echo -e "${BLUE}🏛️ AI Court - 安装验证${NC}"
echo "================================"
echo ""

# 检查 OpenClaw
if command -v openclaw &>/dev/null; then
    echo -e "  ${GREEN}✓${NC} OpenClaw 已安装：$(openclaw --version)"
else
    echo -e "  ${RED}✗${NC} OpenClaw 未安装"
    echo "    安装：npm install -g openclaw@latest"
    exit 1
fi

# 检查配置目录
if [ -d "$HOME/.openclaw" ]; then
    echo -e "  ${GREEN}✓${NC} 配置目录存在：$HOME/.openclaw"
else
    echo -e "  ${RED}✗${NC} 配置目录不存在"
    echo "    运行：clawdhub install ai-court"
    exit 1
fi

# 检查 openclaw.json
if [ -f "$HOME/.openclaw/openclaw.json" ]; then
    echo -e "  ${GREEN}✓${NC} openclaw.json 存在"
    
    # 检查 API Key
    if grep -q "YOUR_LLM_API_KEY\|YOUR_API_KEY" "$HOME/.openclaw/openclaw.json" 2>/dev/null; then
        echo -e "  ${YELLOW}⚠${NC} API Key 未配置"
        echo "    编辑：nano $HOME/.openclaw/openclaw.json"
    else
        echo -e "  ${GREEN}✓${NC} API Key 已配置"
    fi
    
    # 检查 Discord Token
    if grep -q "YOUR_BOT_TOKEN\|YOUR_SILIJIAN_BOT_TOKEN" "$HOME/.openclaw/openclaw.json" 2>/dev/null; then
        echo -e "  ${YELLOW}⚠${NC} Discord Token 未配置"
        echo "    教程：cat ~/clawd/skills/ai-court/references/discord-setup.md"
    else
        echo -e "  ${GREEN}✓${NC} Discord Token 已配置"
    fi
else
    echo -e "  ${RED}✗${NC} openclaw.json 不存在"
    echo "    运行：cd ~/.openclaw && cp -r clawd/skills/ai-court/configs/ming-neige/* ."
    exit 1
fi

# 检查 AI Court Skill
if [ -d "$HOME/.openclaw/clawd/skills/ai-court" ]; then
    echo -e "  ${GREEN}✓${NC} AI Court Skill 已安装"
else
    echo -e "  ${YELLOW}⚠${NC} AI Court Skill 未安装"
    echo "    运行：clawdhub install ai-court"
fi

# 检查 Gateway 状态
if openclaw status &>/dev/null; then
    echo -e "  ${GREEN}✓${NC} OpenClaw Gateway 运行中"
else
    echo -e "  ${YELLOW}⚠${NC} OpenClaw Gateway 未运行"
    echo "    启动：openclaw start"
fi

echo ""
echo "================================"
echo -e "${GREEN}✅ 验证完成！${NC}"
echo "================================"
echo ""
