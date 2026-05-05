# The Listening Desk · 听说提升计划 — 设计文档

> **工作流程**：先在这里修改设计意图，然后让 Claude 根据这里的描述改代码。

---

## 启动命令

```bash
# 本地运行（推荐，避免 CORS 问题）
cd "/Users/Celia/Desktop/courses/vibe coding/listening"
python3 -m http.server 3000
# 然后打开 http://localhost:3000
# 如果报 Address already in use，换端口：python3 -m http.server 3001

# 语法检查（提取 JS 部分，node 检查）
start=$(grep -n "^<script>$" index.html | tail -1 | cut -d: -f1)
close=$(grep -n "^</script>" index.html | tail -1 | cut -d: -f1)
sed -n "$((start+1)),$((close-1))p" index.html | node --input-type=commonjs 2>&1 | head -5

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
├── config.js      # API Keys（不推送 GitHub，由 .env 手动同步）
├── .env           # API Keys 原始文件（不推送 GitHub）
└── DESIGN.md      # 本文件（功能设计稿）
```

**数据存储**：用户数据存在 `localStorage`（key 前缀 `listeningdesk:`）  
**API 读取**：`config.js` 在启动时注入 `window.__CONFIG__`，浏览器读取

---

## 功能板块总览

| # | Tab | 中文名 | 状态 |
|---|-----|--------|------|
| 01 | Today | 每日计划 | ✅ 稳定 |
| 02 | Library | 材料库 | ✅ 稳定 |
| 03 | Shadowing | 跟读练习 | ✅ OpenAI TTS |
| 04 | Chunks | 词块笔记本 | ✅ OpenAI TTS |
| 05 | Add Material | 添加材料 | ✅ AI 提取词块 |
| 06 | Reflection | 语音互动 | ✅ AI 对话 + 声音 |

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

**Modal 内容**：
- 为什么要听这个（中文说明）
- 来源链接列表（VIDEO / PODCAST / WEBCAST / TRANSCRIPT 标签）
- 词块表：phrase → 中文意思 → example sentence，每行有 🔊 按钮

---

## 03 · Shadowing — 跟读练习

**设计意图**：随机抽一个词块，听 → 跟读 → 造句。

**当前流程**：
1. 随机显示一个 chunk（phrase + 中文意思 + example）
2. 🔊 Listen 按钮 → 朗读 example sentence
3. 🔀 New 按钮 → 换一个词块
4. 用户跟读（无录音）

**待调整**：
- [ ] 加录音按钮，录完后 AI 对比原句反馈

---

## 04 · Chunks — 词块笔记本

**设计意图**：所有词块的集中展示，可以浏览、复习、朗读。

**双视图**：
- **全部 Chunks**（默认）：所有预置 + 用户添加的词块（卡片网格）
- **📅 我的添加**：只显示用户手动添加的词块，按日期分组

**每张卡片**：phrase / 中文意思 / example / 🔊 朗读按钮 / 来源标签

---

## 05 · Add Material — 添加材料

**当前功能**：
- 填写 Title / Category / URL 添加新材料
- 直接添加单条词块
- AI 提取词块：粘贴转录文字 → AI 一键提取 → 导入 Notebook

---

## 06 · Reflection — 语音互动

### TTS 语音方案

> **核心原则：全部 Listen 按钮优先使用 OpenAI TTS（更像真人），无 key 时降级到浏览器 TTS**

| 方案 | 触发条件 | 声音特征 |
|------|---------|---------|
| OpenAI TTS-1-HD · `nova` | 有 OpenAI key | 清晰、年轻、美式女声，类似 YouTube vlogger |
| 浏览器 Web Speech API | 无 OpenAI key | 合成感较强，作为 fallback |

**voice 选择理由**：`nova` 语调自然、清晰，接近 @SydneySerena 等生活类 YouTuber 的说话风格，适合商务英语听力练习。备选：`shimmer`（温暖感）、`alloy`（中性）。

**待调整**：
- [ ] 在 UI 里加 voice 切换器（nova / shimmer / alloy / onyx）

---

### Sub-tab A：复盘今天

**流程**：
1. 用户录音（Web Speech API 转文字）或直接打字，用英语复盘今天
2. 点击"Check English"，AI 分析语法 + 自然度 + 好的表达
3. AI 错误自动存入纠错表
4. 可保存到"历史记录"

**AI 模型选择器**：Claude Sonnet / GPT-4o / Gemini 2.5 Flash，从 `config.js` 自动读取 key

---

### Sub-tab B：场景练习

**两种模式**：
- 📋 剧本练习：按预设台词逐句揭示，适合初学
- 🤖 AI 对话：AI 扮演对方角色自由对话，Enter 发送，支持 🎙 语音输入

**语音输入**：在 AI 对话模式中，除文字输入框外，提供 🎙 语音按钮，点击录音 → 自动填入输入框 → 自动发送

**当前预置场景** 共 18 个（在 `data.js` → `SPEAKING_SCENARIOS` 修改）：

| ID | 场景 | 类别 | 深度 |
|----|------|------|------|
| beauty-foundation | 美妆柜台买粉底液 | daily | 基础 |
| beauty-lipstick | 美妆柜台买口红 | daily | 基础 |
| coffee-run | Starbucks偶遇同事（聊天/八卦） | small-talk | 基础 |
| office-monday | 周一早上茶水间闲聊 | small-talk | 基础 |
| after-work-drinks | 项目收尾后 Happy Hour | small-talk | 中级 |
| netflix-chat | 午餐时间推荐剧集 | small-talk | 基础 |
| gym-chat | 健身房和同事搭话 | small-talk | 基础 |
| airport-delay | 机场航班延误处理 | daily | 中级 |
| pmo-interview | PMO职位面试（行为题） | interview | 深入 |
| fpa-interview | FP&A财务分析师面试 | interview | 深入 |
| salary-negotiation | 薪资谈判（offer阶段） | interview | 深入 |
| performance-review | 年度绩效面谈 | interview | 深入 |
| hyperscaler-meeting | Hyperscaler AI基础设施讨论 | business | 深入 |
| ems-briefing | EMS供应链季度汇报 | business | 深入 |
| budget-review | Q3财务汇报向CFO | business | 深入 |
| vendor-negotiation | 供应商年度合同谈判 | business | 深入 |
| presentation-qa | 会议汇报后Q&A追问 | business | 深入 |
| ai-semiconductor | AI半导体行业趋势对话 | ai | 深入 |

**新增场景的风格参考**：
- Small talk 类：语言风格参考 YouTube 生活 vlogger（@SydneySerena 等）——自然填充词（honestly, literally, I mean）、热情的语调、真实口语节奏
- 商务类：注重 STAR 答题框架、财务术语精准、数据支撑

**待调整**：
- [ ] 增加 doctor/hospital 场景
- [ ] 增加更多 interview 场景（战略咨询、产品经理）

---

### Sub-tab C：历史记录

显示所有保存过的复盘条目，按日期倒序。

---

### Sub-tab D：纠错表

- 顶部：AI Check My English 时自动存入的个人错误（可清空）
- 下方：常见中式英语纠错预置表

---

## API 使用规划

| 功能 | 当前模型 | 备注 |
|------|---------|------|
| 全局 Listen 按钮（TTS） | OpenAI TTS-1-HD · nova | 降级到浏览器 TTS |
| 复盘今天 AI 反馈 | Claude Sonnet / GPT-4o / Gemini | 三模型可切换 |
| 场景练习 AI 对话 | 同上 | 多轮对话，支持语音输入 |
| 词块自动提取 | 同上 | 粘贴转录 → 一键提取 |

### Key 管理

- `config.js` 本地存放，**不推送 GitHub**（`.gitignore` 已排除）
- 更新 key：直接编辑 `.env`，再同步到 `config.js`
- 无 key 时降级：TTS → 浏览器朗读，AI → 本地纠错匹配

---

## 设计原则

- **单文件优先**：所有逻辑在 `index.html`，数据在 `data.js`，不引入构建工具
- **localStorage 是唯一持久化**：用户数据只在本机，无后端
- **中英双语设计**：UI 中文标签 + 英文内容，帮助语境沉浸
- **API 可选降级**：没有 key 时核心功能不报错，有 key 时体验升级
- **声音真实优先**：OpenAI nova > 浏览器 TTS，让听感更接近真实人声
