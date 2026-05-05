# The Listening Desk · 听说提升计划 — 设计文档

> **工作流程**：先在这里修改设计意图，然后让 Claude 根据这里的描述改代码。

---

## 启动命令

```bash
# 本地运行（推荐，避免 CORS 问题）
cd "/Users/Celia/Desktop/courses/vibe coding/listening"
python3 -m http.server 8080
# 然后打开 http://localhost:8080

# 语法检查（提取 JS 部分，node 检查）
node --input-type=commonjs < <(sed -n '1640,2701p' index.html)

# 推送到 GitHub Pages
git add index.html data.js && git commit -m "描述" && git push origin main
# Pages 地址：https://xcai2.github.io/listening-desk/
```

---

## 文件结构

```
listening/
├── index.html     # 全部前端逻辑（HTML + CSS + JS，单文件）
├── data.js        # 所有预置数据：材料库、每日计划、场景对话、纠错模式
├── .env           # API Keys（不推送到 GitHub）
└── DESIGN.md      # 本文件（功能设计稿）
```

**数据存储**：用户数据存在 `localStorage`（key 前缀 `listeningdesk:`）  
**API 读取**：运行时从 `.env` 读取 key（静态页面需手动粘贴，或未来接入后端）

---

## 功能板块总览

| # | Tab | 中文名 | 状态 |
|---|-----|--------|------|
| 01 | Today | 每日计划 | ✅ 稳定 |
| 02 | Library | 材料库 | ✅ 稳定 |
| 03 | Shadowing | 跟读练习 | ✅ TTS 可用 |
| 04 | Chunks | 词块笔记本 | ✅ 双视图 |
| 05 | Add Material | 添加材料 | ✅ 稳定 |
| 06 | Reflection | 语音互动 | 🚧 开发中 |

---

## 01 · Today — 每日计划

**设计意图**：每天打开就知道今天做什么，像一份任务清单。

- 顶部 masthead 显示：日期 / 词块总数 / 日记条数 / 连续天数
- 每个 Block 卡片：时长（分钟）、步骤列表、"输出"说明
- 点击卡片左上角 ✓ 按钮标记完成，当天跨日自动归档到历史
- 连续打卡计算 streak（含昨天）

**当前 Block 列表**（在 `data.js` → `DAILY_PLAN` 修改）：
1. 精听一段（20 min）
2. Shadowing（15 min）
3. 词块复习（10 min）
4. 语音互动（15 min）

**待调整**：
- [ ] 可自定义每日计划顺序

---

## 02 · Library — 材料库

**设计意图**：精选真实英语材料，按行业分类，每条附来源链接 + 词块。

**当前预置材料**（在 `data.js` → `SEED_MATERIALS` 修改）：

| ID | 公司/节目 | 类别 | 难度 |
|----|-----------|------|------|
| msft-q3-2026 | Microsoft Q3 FY2026 Earnings | hyperscaler | Hard |
| googl-q1-2026 | Alphabet Q1 2026 Earnings | hyperscaler | Medium-Hard |
| amzn-q1-2026 | Amazon Q1 2026 Earnings | hyperscaler | Hard |
| meta-q1-2026 | Meta Q1 2026 Earnings | hyperscaler | Medium |
| _(更多待添加)_ | | | |

**Modal 内容**：
- 为什么要听这个（中文说明）
- 来源链接列表（VIDEO / PODCAST / WEBCAST / TRANSCRIPT 标签）
- 词块表：phrase → 中文意思 → example sentence，每行有 🔊 按钮

**API 可优化点**：
- 🤖 **自动补充词块**：粘贴一段转录文字，用 GPT/Claude 提取高价值短语 → 自动填入材料词块

**待调整**：
- [ ] 每个材料加"完成"标记
- [ ] 支持搜索词块（跨材料）

---

## 03 · Shadowing — 跟读练习

**设计意图**：随机抽一个词块，朗读 → 跟读 → 用自己的话造句。

**当前流程**：
1. 随机显示一个 chunk（phrase + 中文意思 + example）
2. 🔊 Listen 按钮 → TTS 朗读 example sentence（语速 0.82）
3. 🔀 New 按钮 → 换一个词块
4. 用户自己跟读（无录音）

**API 可优化点**：
- 🤖 **AI 造句反馈**：用户说出自己的句子，AI 判断是否自然，给出改进建议
- 🤖 **发音评分**：接入 Web Speech API 转文字 + GPT 对比原句给分

**待调整**：
- [ ] 加录音按钮，录完后 AI 对比原句反馈

---

## 04 · Chunks — 词块笔记本

**设计意图**：所有词块的集中展示，可以浏览、复习、朗读。

**双视图**：
- **全部 Chunks**（默认）：展示所有预置 + 用户添加的词块（卡片网格，按材料来源标注）
- **📅 我的添加**：只显示用户手动添加的词块，按添加日期分组

**每张卡片**：phrase / 中文意思 / example / 🔊 朗读按钮 / 来源标签

**API 可优化点**：
- 🤖 **间隔复习**：AI 根据上次复习时间决定今天推送哪些词块（Spaced Repetition）
- 🤖 **造句检测**：输入框造句，AI 判断用法是否准确

**待调整**：
- [ ] 加筛选器（按 category：earnings / ai / interview 等）
- [ ] 加"已掌握"标记，掌握的词块沉底

---

## 05 · Add Material — 添加材料

**设计意图**：用户自己添加新材料和词块到库里。

**当前功能**：
- 填写 Title / Category / URL 添加新材料
- 直接添加单条词块（phrase + 中文 + example）

**API 可优化点**：
- 🤖 **粘贴转录文字自动提取词块**：输入一段文字，AI 返回 5-10 个高价值商务短语，一键导入

**待调整**：
- [ ] 粘贴 + AI 提取词块的入口

---

## 06 · Reflection — 语音互动

**设计意图**：每天的语音输出练习，有 AI 反馈，是最核心的"开口"环节。

### Sub-tab A：复盘今天

**流程**：
1. 参考栏显示今天学过的词块（自动拉取 Today 完成的 Block 内词块）
2. 用户录音（Web Speech API 转文字）或直接打字，用英语复盘今天
3. 点击"Check English"，AI 分析：
   - 语法错误 → 给出正确写法
   - 是否用上了今天的词块
   - 总体自然度评分（1-5）
4. AI 反馈显示在下方，可保存到"历史记录"

**当前 API 接入**：
- 调用 Claude API（`claude-sonnet-4-6`）
- API key 从页面内 input 框手动粘贴（临时方案）
- 目标：改为从 `.env` 自动加载（需要后端或 Vite 构建）

**待调整**：
- [ ] 多模型支持：可切换 Claude / GPT / Gemini
- [ ] AI prompt 可自定义（调整反馈风格：严格 / 鼓励）
- [ ] 每次 AI 反馈自动追加到历史记录，不需要手动保存

---

### Sub-tab B：场景练习

**设计意图**：给出一个中文场景，用户逐句说英语，AI（或揭示按钮）对比标准答案。

**当前预置场景**（在 `data.js` → `SPEAKING_SCENARIOS` 修改）：

| ID | 场景 | 类别 |
|----|------|------|
| beauty-foundation | 买粉底液（美妆日常） | daily |
| beauty-lipstick | 买口红（美妆日常） | daily |
| pmo-interview | PMO 职位面试 | interview |
| hyperscaler-meeting | Hyperscaler 项目会议 | meeting |
| ems-briefing | EMS 供应商简报 | meeting |
| ai-semiconductor | AI 芯片行业对话 | ai |

**每个场景结构**：
- 场景描述（中文）
- 若干轮对话：每轮给出中文提示，用户说英语，点"揭示"看标准英语

**API 可优化点**：
- 🤖 **实时 AI 对话**：不用预设台词，AI 扮演对方角色，真实对话练习（最高优先级）
- 🤖 **用户答句评分**：录音或打字后，AI 对比标准答案给改进建议

**新增场景待添加**：
- [ ] 更多面试场景（FP&A、项目管理、战略汇报）
- [ ] 更多日常场景（咖啡店、机场、医院）

---

### Sub-tab C：历史记录

显示所有保存过的复盘条目，按日期倒序。  
每条显示：日期 / 原文 / AI 反馈摘要

**待调整**：
- [ ] 支持搜索历史
- [ ] 导出为 txt/csv

---

### Sub-tab D：纠错表

从历史记录中提取 AI 标记过的错误，汇总展示。  
格式：错误原句 → 正确写法 → AI 解释

**待调整**：
- [ ] 目前为空，需要 AI 在 checkEnglish 时把错误单独存一份到 `listeningdesk:mistakes`

---

## API 使用规划

### 当前接入（Reflection → 复盘今天）
- **模型**：`claude-sonnet-4-6`（Anthropic）
- **调用方式**：浏览器直接 fetch `https://api.anthropic.com/v1/messages`
- **Header**：`anthropic-dangerous-direct-browser-access: true`
- **Key 来源**：页面内 input（临时），目标换成 `.env`

### 计划接入的 API

| 功能 | 推荐模型 | 原因 |
|------|---------|------|
| 复盘今天 AI 反馈 | Claude Sonnet / GPT-4o | 语言理解准确 |
| 场景练习实时对话 | GPT-4o / Gemini 1.5 Flash | 对话响应快 |
| 词块自动提取 | Claude Haiku / GPT-3.5 | 便宜，批量处理 |
| 间隔复习调度 | 本地算法（无需 API） | — |
| 发音评分 | Azure Speech / Google STT | 专业 ASR |

### Key 管理

静态 HTML 页面无法安全隐藏 Key，现阶段方案：
- `.env` 文件本地存放，**不推送到 GitHub**（已加 `.gitignore`）
- 页面加载时，用户手动粘贴 Key（存 localStorage，不出 session）
- 未来若接入后端（Node/Python），从 `.env` 服务端读取，Key 不暴露

---

## 设计原则

- **单文件优先**：所有逻辑在 `index.html`，数据在 `data.js`，不引入构建工具
- **localStorage 是唯一持久化**：用户数据只在本机，无后端
- **中英双语设计**：UI 中文标签 + 英文内容，帮助语境沉浸
- **API 可选**：没有 API key 时功能降级但不报错
