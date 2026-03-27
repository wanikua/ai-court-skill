# AI Court | 当皇上

**版本**: 1.6.0  
**作者**: 菠萝菠菠  
**描述**: 以明朝内阁制为蓝本，用 OpenClaw 框架构建的多 Agent 协作系统

## 🏛️ 简介

一行命令起王朝，三省六部皆 AI。千里之外调百官，万事不劳御驾亲。

本项目以明朝内阁制为蓝本，用 [OpenClaw](https://github.com/openclaw/openclaw) 框架构建的多 Agent 协作系统。一台服务器 + OpenClaw = 一支 7×24 在线的 AI 朝廷。

## 📋 特性

- **三种制度可选**：明朝内阁制 / 唐朝三省制 / 现代企业制
- **18+ Agent**：内阁/六部/都察院/翰林院等完整架构
- **60+ Skills**：GitHub/Notion/天气/知识库等丰富功能
- **Docker 部署**：一键启动，屏蔽环境差异
- **Web GUI**：可视化管理界面

## 🚀 快速开始

### 方式一：Docker 部署（推荐）

```bash
docker pull boluobobo/ai-court:latest
docker run -d --name ai-court boluobobo/ai-court:latest
```

### 方式二：本地安装

```bash
git clone https://github.com/wanikua/danghuangshang.git
cd danghuangshang
bash scripts/full-install.sh
```

## 📚 文档

- [基础教程](docs/tutorial-basics.md)
- [进阶教程](docs/tutorial-advanced.md)
- [Docker 部署](docs/docker-deployment.md)
- [安全审计](docs/security-audit.md)

## 🔗 链接

- GitHub: https://github.com/wanikua/danghuangshang
- OpenClaw: https://github.com/openclaw/openclaw

## 📄 许可证

MIT License
