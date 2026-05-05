// ============================================================
//  PRE-FILLED LIBRARY  — real, curated materials
//  Edit freely. Anything you add via the UI is stored separately
//  in localStorage and merged at runtime.
//
//  All sources verified May 2026. Earnings call transcripts and
//  podcast links are pulled from official IR pages, Investing.com,
//  Motley Fool, Yahoo Finance, official company blogs, and YouTube.
// ============================================================

const SEED_MATERIALS = [
  // ============================================================
  // HYPERSCALERS — Microsoft, Google, Amazon, Meta
  // ============================================================
  {
    id: "msft-q3-2026",
    category: "hyperscaler",
    title: "Microsoft Q3 FY2026 Earnings Call",
    company: "Microsoft (MSFT)",
    why: "AI/cloud语言密度最高的财报会之一。Satya Nadella + Amy Hood,Azure、AI infrastructure、agent这些词每分钟都在出现。FP&A面试聊AI时直接复用。",
    difficulty: "Hard",
    duration: "~75 min",
    sources: [
      { label: "Full transcript (Investing.com)", url: "https://www.investing.com/news/transcripts/earnings-call-transcript-microsoft-q3-2026-results-exceed-expectations-stock-dips-93CH-4647426" },
      { label: "Microsoft Investor Relations (replay + transcript)", url: "https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q3/press-release-webcast" },
      { label: "Earnings press release", url: "https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q3" }
    ],
    chunks: [
      { phrase: "consequential platform shift", meaning: "影响深远的平台变革(Nadella原话)", example: "We are at the beginning of one of the most consequential platform shifts.", scenario: "ai" },
      { phrase: "agentic computing era", meaning: "智能代理计算时代", example: "Building the world's leading cloud and AI infrastructure for the agentic computing era.", scenario: "ai" },
      { phrase: "TAM expansion", meaning: "可服务市场扩大(Total Addressable Market)", example: "This will drive TAM expansion across the entire economy.", scenario: "earnings" },
      { phrase: "we're executing against two priorities", meaning: "我们围绕两个优先事项执行", example: "We are executing against two priorities: infrastructure and high-value agentic systems.", scenario: "earnings" },
      { phrase: "ahead of schedule", meaning: "提前(完成)", example: "Our Fairwater data center came online six weeks ahead of schedule.", scenario: "earnings" },
      { phrase: "recognize revenue earlier", meaning: "更早确认收入(财务术语)", example: "Coming online early allowed us to recognize revenue earlier.", scenario: "earnings" },
      { phrase: "double our overall footprint", meaning: "整体规模翻倍", example: "We remain on track to double our overall footprint in just 2 years.", scenario: "earnings" },
      { phrase: "moving aggressively to add capacity", meaning: "积极扩张产能", example: "We're moving aggressively to add capacity aligned to demand signals.", scenario: "earnings" },
      { phrase: "demand signals", meaning: "需求信号", example: "We add capacity aligned to the demand signals we see.", scenario: "earnings" },
      { phrase: "broadest selection of models", meaning: "最广泛的模型选择", example: "We offer the broadest selection of models of any hyperscaler.", scenario: "ai" },
      { phrase: "the right model for the right workload", meaning: "把对的模型用在对的工作负载上", example: "Customers can choose the right model for the right workload.", scenario: "ai" },
      { phrase: "drive product evals and lower COGS", meaning: "推动产品评估并降低销售成本", example: "We are innovating to drive product evals and lower COGS.", scenario: "earnings" },
      { phrase: "creating a flywheel that continuously improves", meaning: "形成持续改进的飞轮效应", example: "AI usage creates a flywheel that continuously improves grounding and relevance.", scenario: "ai" },
      { phrase: "accelerated quarter-over-quarter", meaning: "环比加速增长", example: "Our database business accelerated quarter-over-quarter.", scenario: "earnings" },
      { phrase: "ARR (annual recurring revenue)", meaning: "年度经常性收入(SaaS核心指标)", example: "Our AI business surpassed $37 billion ARR, up 123%.", scenario: "earnings" },
      { phrase: "positions us well for future growth", meaning: "为未来增长奠定基础", example: "Our AI infrastructure investment positions us well for future growth.", scenario: "earnings" },
      { phrase: "I'll turn the call over to", meaning: "我把电话交给___(财报会过渡句)", example: "With that, I'll turn the call over to Amy.", scenario: "earnings" }
    ]
  },
  {
    id: "googl-q1-2026",
    category: "hyperscaler",
    title: "Alphabet Q1 2026 Earnings Call",
    company: "Alphabet / Google (GOOGL)",
    why: "Sundar Pichai 印度英语口音清晰、句子结构标准,适合中级听力。讲AI、Cloud、Search三大业务,语言极有用。",
    difficulty: "Medium-Hard",
    duration: "~60 min",
    sources: [
      { label: "Full transcript (Motley Fool)", url: "https://www.fool.com/earnings/call-transcripts/2026/04/29/alphabet-googl-q1-2026-earnings-call-transcript/" },
      { label: "Sundar Pichai's remarks (Google blog)", url: "https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q1-2026/" },
      { label: "Alphabet Investor Relations webcast", url: "https://abc.xyz/investor/events/event-details/2026/2026-Q1-Earnings-Call-2026-nW8kCrBAKS/default.aspx" }
    ],
    chunks: [
      { phrase: "a terrific quarter", meaning: "极好的一个季度(Pichai常用)", example: "It was a terrific quarter for Alphabet.", scenario: "earnings" },
      { phrase: "lighting up every part of the business", meaning: "点亮业务的每个角落", example: "Our AI investments are lighting up every part of the business.", scenario: "earnings" },
      { phrase: "full-stack approach", meaning: "全栈方法(从芯片到模型到应用)", example: "Our full-stack approach is driving performance across our business.", scenario: "ai" },
      { phrase: "execute with discipline and velocity", meaning: "有纪律、高速度地执行", example: "Our teams continue to execute with high level of discipline and velocity.", scenario: "earnings" },
      { phrase: "11th consecutive quarter of double-digit revenue growth", meaning: "连续第11个季度两位数收入增长", example: "We delivered our 11th consecutive quarter of double-digit revenue growth.", scenario: "earnings" },
      { phrase: "compute constrained", meaning: "算力受限(供应跟不上需求)", example: "We are compute constrained in the near term.", scenario: "ai" },
      { phrase: "backlog nearly doubled", meaning: "订单储备几乎翻倍", example: "Our backlog nearly doubled quarter-on-quarter to over $460 billion.", scenario: "earnings" },
      { phrase: "primary growth driver", meaning: "主要增长驱动力", example: "Enterprise AI solutions have become our primary growth driver for Cloud.", scenario: "earnings" },
      { phrase: "winning new customers faster", meaning: "更快地赢得新客户", example: "Winning new customers faster, with new customer acquisition doubling.", scenario: "earnings" },
      { phrase: "deal momentum", meaning: "交易势头", example: "We are seeing strong deal momentum, doubling the number of $100M to $1B deals.", scenario: "earnings" },
      { phrase: "put pressure on the P&L", meaning: "对利润表造成压力", example: "Significant infrastructure investment will continue to put pressure on the P&L.", scenario: "earnings" },
      { phrase: "in the form of higher depreciation expense", meaning: "以更高折旧费用的形式", example: "...pressure in the form of higher depreciation expense and related costs.", scenario: "earnings" },
      { phrase: "robust ROIC framework", meaning: "扎实的投资回报率框架", example: "We are working off a robust ROIC framework when allocating compute.", scenario: "earnings" },
      { phrase: "headwind to operating margin", meaning: "对运营利润率的逆风", example: "We expect a low single-digit headwind to cloud's operating margin.", scenario: "earnings" },
      { phrase: "reinforce our conviction", meaning: "强化我们的信念", example: "These strong results reinforce our conviction to invest the capital required.", scenario: "earnings" },
      { phrase: "capture the AI opportunity", meaning: "抓住AI机会", example: "...invest the capital required to continue to capture the AI opportunity.", scenario: "earnings" },
      { phrase: "optimizing technical infrastructure", meaning: "优化技术基础设施", example: "We've focused on optimizing technical infrastructure across the business.", scenario: "ai" },
      { phrase: "leverage down to the bottom line", meaning: "(增长)向下传导到利润", example: "Strong revenue growth provides leverage down to the bottom line.", scenario: "earnings" }
    ]
  },
  {
    id: "amzn-q1-2026",
    category: "hyperscaler",
    title: "Amazon Q1 2026 Earnings Call (AWS)",
    company: "Amazon / AWS (AMZN)",
    why: "Andy Jassy 讲AWS和AI,语速快但用词非常FP&A友好(run rate / backlog / capacity)。",
    difficulty: "Hard",
    duration: "~70 min",
    sources: [
      { label: "Full transcript (Motley Fool)", url: "https://www.fool.com/earnings/call-transcripts/2026/04/29/amazon-amzn-q1-2026-earnings-call-transcript/" },
      { label: "Why customers are choosing AWS for AI (Amazon blog)", url: "https://www.aboutamazon.com/news/company-news/amazon-ceo-andy-jassy-aws-ai-q1-2026-earnings" },
      { label: "Investing.com transcript", url: "https://www.investing.com/news/transcripts/earnings-call-transcript-amazons-q1-2026-results-exceed-expectations-93CH-4647388" },
      { label: "AWS Q1 highlights", url: "https://www.thestockobserver.com/2026/05/02/amazon-com-q1-earnings-call-highlights.html" }
    ],
    chunks: [
      { phrase: "growth continued to accelerate", meaning: "增长持续加速", example: "AWS growth continued to accelerate, up 28% YoY.", scenario: "earnings" },
      { phrase: "fastest growth rate in 15 quarters", meaning: "15个季度以来最快增速", example: "The fastest growth rate in 15 quarters for us.", scenario: "earnings" },
      { phrase: "annualized revenue run rate", meaning: "年化收入运行率(年化估算)", example: "AWS is now a $150 billion annualized revenue run rate business.", scenario: "earnings" },
      { phrase: "very unusual for a business to grow this fast on a base this large", meaning: "在这么大的基数上还能这么快增长是极罕见的", example: "It's very unusual for a business to grow this fast on a base this large.", scenario: "earnings" },
      { phrase: "we've never seen a technology grow as rapidly as AI", meaning: "我们从未见过技术增长这么快", example: "We've never seen a technology grow as rapidly as AI.", scenario: "ai" },
      { phrase: "to put our growth in perspective", meaning: "把增长放进对比来看", example: "To put our growth in perspective, three years after AWS launched, it had a $58M run rate.", scenario: "earnings" },
      { phrase: "customers are racing to invest", meaning: "客户在竞相投资", example: "Customers are racing to invest in AI compute.", scenario: "ai" },
      { phrase: "the cost of components has skyrocketed", meaning: "零部件成本暴涨", example: "The cost of components, particularly memory, has skyrocketed.", scenario: "earnings" },
      { phrase: "capacity constraints", meaning: "产能受限", example: "We're seeing capacity constraints in the memory market.", scenario: "earnings" },
      { phrase: "supply volatility", meaning: "供应波动", example: "Supply volatility may impact capital expenditures.", scenario: "earnings" },
      { phrase: "ahead of revenue", meaning: "先于收入投入", example: "These investments are being made ahead of revenue and will take time to monetize.", scenario: "earnings" },
      { phrase: "take time to monetize", meaning: "需要时间变现", example: "Investments will take time to monetize but will produce strong returns.", scenario: "earnings" },
      { phrase: "broader capabilities than others", meaning: "比别人更广的能力", example: "We've built broader capabilities than others.", scenario: "earnings" },
      { phrase: "the largest Q4 to Q1 increase ever", meaning: "史上最大的Q4到Q1环比增长", example: "AWS revenue increased $2 billion quarter-over-quarter, the largest Q4 to Q1 increase ever.", scenario: "earnings" },
      { phrase: "doesn't include the recent deal", meaning: "不包括最近的交易(谨慎披露)", example: "The backlog for Q1 is $364 billion. That does not include the recent deal we announced.", scenario: "earnings" },
      { phrase: "reasonable breadth", meaning: "覆盖面较广", example: "There's reasonable breadth in that backlog as well.", scenario: "earnings" }
    ]
  },
  {
    id: "meta-q1-2026",
    category: "hyperscaler",
    title: "Meta Q1 2026 Earnings Call",
    company: "Meta (META)",
    why: "Zuckerberg 讲AI capex、superintelligence、layoffs,商业策略+财务+AI 三合一。",
    difficulty: "Medium-Hard",
    duration: "~60 min",
    sources: [
      { label: "Full transcript (Motley Fool)", url: "https://www.fool.com/earnings/call-transcripts/2026/04/29/meta-meta-q1-2026-earnings-call-transcript/" },
      { label: "Official PDF transcript (Meta IR)", url: "https://s21.q4cdn.com/399680738/files/doc_financials/2026/q1/META-Q1-2026-Earnings-Call-Transcript.pdf" },
      { label: "Press release (Meta IR)", url: "https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-First-Quarter-2026-Results/default.aspx" },
      { label: "Fortune coverage", url: "https://fortune.com/2026/04/29/meta-zuckerberg-145-billion-ai-spending-roi/" }
    ],
    chunks: [
      { phrase: "milestone quarter", meaning: "里程碑式的季度", example: "We had a milestone quarter with strong momentum across our apps.", scenario: "earnings" },
      { phrase: "on track to deliver", meaning: "按计划交付", example: "We're on track to deliver personal superintelligence to billions of people.", scenario: "ai" },
      { phrase: "training needs for future models", meaning: "未来模型的训练需求", example: "Our investments will support our training needs for future models.", scenario: "ai" },
      { phrase: "inference capacity", meaning: "推理算力", example: "Inference capacity necessary to deliver personal and business agents.", scenario: "ai" },
      { phrase: "remain committed to operating efficiently", meaning: "继续致力于高效运营", example: "As we grow our infrastructure spend, we remain committed to operating efficiently.", scenario: "earnings" },
      { phrase: "leaner operating model", meaning: "更精简的运营模式", example: "A leaner operating model will allow us to move more quickly.", scenario: "earnings" },
      { phrase: "offset the substantial investments", meaning: "抵消大额投资(影响)", example: "...helping to offset the substantial investments we're making.", scenario: "earnings" },
      { phrase: "raising our CapEx guidance", meaning: "上调资本开支指引", example: "We are increasing our infrastructure capex forecast for this year.", scenario: "earnings" },
      { phrase: "memory pricing", meaning: "内存价格(2026年高频提到)", example: "Most of that is due to higher component costs, particularly memory pricing.", scenario: "ai" },
      { phrase: "rolling out custom silicon", meaning: "推出自研芯片", example: "We're rolling out more than 1GW of our own custom silicon.", scenario: "ai" },
      { phrase: "complement the new NVIDIA systems", meaning: "补充新部署的NVIDIA系统", example: "Significant amounts of AMD chips to complement the new Nvidia systems.", scenario: "ai" },
      { phrase: "strategic advantage over time", meaning: "长期战略优势", example: "We expect that will be a strategic advantage over time.", scenario: "earnings" },
      { phrase: "increasing the efficiency of our investments", meaning: "提升投资效率", example: "We are very focused on increasing the efficiency of our investments.", scenario: "earnings" },
      { phrase: "first-principles understanding", meaning: "第一性原理的理解", example: "A first-principles understanding of what you care about.", scenario: "ai" },
      { phrase: "the formula for our company has always been", meaning: "我们公司的逻辑一直是 ___", example: "The formula for our company has always been: build for billions, then monetize at scale.", scenario: "earnings" },
      { phrase: "build experiences that get to billions of people", meaning: "做能触达数十亿人的产品", example: "Build experiences that can get to billions of people, focus on monetizing once at scale.", scenario: "earnings" }
    ]
  },

  // ============================================================
  // AI / SEMICONDUCTOR
  // ============================================================
  {
    id: "nvda-q4-2026",
    category: "ai",
    title: "NVIDIA Q4 FY2026 Earnings Call",
    company: "NVIDIA (NVDA)",
    why: "Jensen Huang的英语带台湾腔但极清晰,讲AI、agentic、Blackwell、Rubin。直接是2026年的AI状态报告。",
    difficulty: "Medium-Hard",
    duration: "~70 min",
    sources: [
      { label: "Full transcript (Motley Fool)", url: "https://www.fool.com/earnings/call-transcripts/2026/02/25/nvidia-nvda-q4-2026-earnings-call-transcript/" },
      { label: "Investing.com transcript", url: "https://www.investing.com/news/transcripts/earnings-call-transcript-nvidia-q4-2026-beats-expectations-stock-rises-93CH-4526215" },
      { label: "Seeking Alpha transcript", url: "https://seekingalpha.com/article/4874926-nvidia-corporation-nvda-q4-2026-earnings-call-transcript" },
      { label: "8-K with Jensen quote (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000019/q4fy26pr.htm" }
    ],
    chunks: [
      { phrase: "the agentic AI inflection point has arrived", meaning: "智能代理AI的拐点已经到来(Jensen原话)", example: "Computing demand is growing exponentially — the agentic AI inflection point has arrived.", scenario: "ai" },
      { phrase: "compute equals revenues", meaning: "算力即收入(Jensen核心观点)", example: "In the AI world, compute equals revenue.", scenario: "ai" },
      { phrase: "scaling up at lightning speed", meaning: "以闪电速度扩张", example: "Meta Superintelligence Labs is scaling up at lightning speed.", scenario: "ai" },
      { phrase: "deepened and expanded our partnerships", meaning: "深化并扩大了合作伙伴关系", example: "We significantly deepened and expanded our partnerships with leading frontier model makers.", scenario: "ai" },
      { phrase: "frontier model makers", meaning: "前沿模型公司(OpenAI、Anthropic 等)", example: "Partnerships with leading frontier model makers like OpenAI and Anthropic.", scenario: "ai" },
      { phrase: "a once-in-a-generation company", meaning: "一代人才出一个的公司(高赞美)", example: "OpenAI is a once-in-a-generation company we've had the pleasure of partnering with.", scenario: "ai" },
      { phrase: "lower cost per token", meaning: "更低的单token成本", example: "Delivering an order-of-magnitude lower cost per token.", scenario: "ai" },
      { phrase: "an order of magnitude lower", meaning: "降低一个数量级(10倍)", example: "An order-of-magnitude lower cost per token.", scenario: "ai" },
      { phrase: "extend that leadership even further", meaning: "进一步扩大领先优势", example: "Vera Rubin will extend that leadership even further.", scenario: "earnings" },
      { phrase: "enterprise adoption is skyrocketing", meaning: "企业采用率飞速增长", example: "Enterprise adoption of agents is skyrocketing.", scenario: "ai" },
      { phrase: "AI factories", meaning: "AI工厂(Jensen的核心比喻)", example: "AI compute — the factories powering the AI industrial revolution.", scenario: "ai" },
      { phrase: "the AI industrial revolution", meaning: "AI工业革命", example: "The factories powering the AI industrial revolution and their future growth.", scenario: "ai" },
      { phrase: "every data center is power-constrained", meaning: "每个数据中心都受电力限制", example: "Every data center is power-constrained.", scenario: "ai" },
      { phrase: "performance per watt", meaning: "每瓦性能", example: "GB300 NVL72 achieving up to 50x performance per watt vs. Hopper.", scenario: "ai" },
      { phrase: "a diverse and expanding set of customers", meaning: "客户群多元且持续扩大", example: "Across a diverse and expanding set of customers, including hyperscalers and sovereign nations.", scenario: "earnings" },
      { phrase: "sovereign AI", meaning: "主权AI(国家级AI能力)", example: "Sovereign AI revenue exceeded $30 billion this year.", scenario: "ai" },
      { phrase: "supply commitments in place", meaning: "供应承诺已就位", example: "We have inventory and supply commitments in place to address future demand.", scenario: "earnings" }
    ]
  },
  {
    id: "amd-q4-2025",
    category: "ai",
    title: "AMD Q4 FY2025 Earnings Call",
    company: "AMD",
    why: "Lisa Su 美国英语清晰、句式干净,适合中级。MI300/MI350/MI400 这些AI芯片词汇直接借用。",
    difficulty: "Medium",
    duration: "~60 min",
    sources: [
      { label: "Full transcript (Motley Fool)", url: "https://www.fool.com/earnings/call-transcripts/2026/02/03/amd-amd-q4-2025-earnings-call-transcript/" },
      { label: "Stockinsights transcript", url: "https://www.stockinsights.ai/us/AMD/earnings-transcript/fy25-q4-f9ba" },
      { label: "Data Center Dynamics coverage", url: "https://www.datacenterdynamics.com/en/news/amd-posts-record-data-center-revenue-for-q3-2025-as-compute-demand-shows-no-signs-of-slowing/" }
    ],
    chunks: [
      { phrase: "we're very bullish about", meaning: "我们对___非常看好", example: "We're very bullish about data center.", scenario: "earnings" },
      { phrase: "we thought it prudent", meaning: "我们认为审慎的做法是 ___", example: "We thought it prudent not to forecast any additional revenue.", scenario: "earnings" },
      { phrase: "a very dynamic situation", meaning: "形势瞬息万变", example: "Given the very dynamic situation in China, we're holding guidance steady.", scenario: "earnings" },
      { phrase: "extends our leadership", meaning: "扩大我们的领先优势", example: "Venice extends our leadership in CPU performance.", scenario: "earnings" },
      { phrase: "ramps very quickly", meaning: "上量很快", example: "Given similar infrastructure to MI300, MI355 will ramp very quickly.", scenario: "earnings" },
      { phrase: "next phase of growth", meaning: "下一阶段的增长", example: "Our AI data center business is entering its next phase of growth.", scenario: "earnings" },
      { phrase: "tens of billions in annual revenue", meaning: "数百亿美元年收入", example: "On a clear trajectory towards tens of billions in annual revenue in 2027.", scenario: "earnings" },
      { phrase: "long-term target of greater than 60%", meaning: "长期目标是超过60%", example: "The long-term target of greater than 60% growth is certainly possible.", scenario: "earnings" },
      { phrase: "broad adoption across hyperscalers", meaning: "在头部云厂商中广泛采用", example: "Broad adoption across hyperscalers, AI companies and OEMs.", scenario: "ai" },
      { phrase: "matches or exceeds", meaning: "持平或超过", example: "MI355 matches or exceeds B200 in critical training and inference workloads.", scenario: "earnings" },
      { phrase: "TCO advantages", meaning: "总拥有成本优势(Total Cost of Ownership)", example: "Performance and TCO advantages of our Data Center AI solutions.", scenario: "ai" },
      { phrase: "Tier 1 customers", meaning: "一线客户", example: "Closing new wins with Tier 1 customers and next-generation AI cloud providers.", scenario: "earnings" }
    ]
  },
  {
    id: "tsmc-q1-2026",
    category: "ai",
    title: "TSMC Q1 2026 Earnings Call",
    company: "TSMC (Taiwan Semiconductor)",
    why: "C.C. Wei 台湾英语,语速慢但财报会节奏可预测。3nm/2nm/HPC 这些供应链词汇对你Flex工作有用。",
    difficulty: "Medium",
    duration: "~60 min",
    sources: [
      { label: "Investing.com transcript", url: "https://www.investing.com/news/transcripts/earnings-call-transcript-tsmcs-q1-2026-shows-strong-growth-and-margin-gains-93CH-4617167" },
      { label: "TSMC official IR — Q1 2026", url: "https://investor.tsmc.com/english/quarterly-results/2026/q1" },
      { label: "Insider Monkey full transcript", url: "https://www.insidermonkey.com/blog/taiwan-semiconductor-manufacturing-company-limited-nysetsm-q1-2026-earnings-call-transcript-1740195/" },
      { label: "CNBC summary", url: "https://www.cnbc.com/2026/04/16/tsmc-q1-profit-58-percent-ai-chip-demand-record.html" }
    ],
    chunks: [
      { phrase: "extremely robust", meaning: "极其强劲(C.C. Wei 经典用词)", example: "AI related demand continues to be extremely robust.", scenario: "earnings" },
      { phrase: "multiyear structural demand", meaning: "多年的结构性需求", example: "Well positioned to capture multiyear structural demand from 5G, AI, and HPC.", scenario: "earnings" },
      { phrase: "industry megatrends", meaning: "行业大趋势", example: "Industry megatrends of 5G, AI and HPC.", scenario: "earnings" },
      { phrase: "leading-edge process technologies", meaning: "前沿制程技术", example: "Strong demand for our leading-edge process technologies.", scenario: "earnings" },
      { phrase: "high capacity utilization", meaning: "高产能利用率", example: "A high capacity utilization rate boosted gross margin.", scenario: "earnings" },
      { phrase: "operating leverage", meaning: "经营杠杆(规模效应)", example: "Operating margin improved 4.1 percentage points due to operating leverage.", scenario: "earnings" },
      { phrase: "speed up equipment procurement", meaning: "加快设备采购", example: "Robust demand is driving us to speed up equipment procurement.", scenario: "earnings" },
      { phrase: "the high end of our CapEx forecast", meaning: "我们资本开支预测区间的上限", example: "Leading us to the high end of our CapEx forecast.", scenario: "earnings" },
      { phrase: "supply tightness", meaning: "供应紧张", example: "There's ongoing supply tightness in the AI chip market.", scenario: "earnings" },
      { phrase: "we view them as our partners", meaning: "我们把他们视为合作伙伴", example: "We're always working with our suppliers, because we view them as our partners.", scenario: "meeting" },
      { phrase: "capital intensity", meaning: "资本密集度(资本开支占比)", example: "TSMC has been able to keep capital intensity at a healthy level of 30% plus.", scenario: "earnings" },
      { phrase: "correlated with higher growth opportunities", meaning: "与更高的增长机会相关联", example: "Higher CapEx is always correlated with higher growth opportunities in the following years.", scenario: "earnings" }
    ]
  },

  // ============================================================
  // EMS — Logitech, Flex, Sanmina, Jabil, Celestica
  // ============================================================
  {
    id: "logi-q3-2026",
    category: "earnings",
    title: "Logitech Q3 FY2026 Earnings Call",
    company: "Logitech (LOGI)",
    why: "你Logitech FP&A面试的最直接素材。CEO Hanneke Faber + CFO Matteo Anversa,用词精准、节奏稳。",
    difficulty: "Medium-Hard",
    duration: "~50 min",
    sources: [
      { label: "Investing.com transcript", url: "https://www.investing.com/news/transcripts/earnings-call-transcript-logitech-q3-2026-beats-forecasts-stock-dips-93CH-4468933" },
      { label: "Logitech Investor Relations", url: "https://ir.logitech.com" },
      { label: "YouTube recap", url: "https://www.youtube.com/watch?v=VlUr0RACcYs" }
    ],
    chunks: [
      { phrase: "this is a company for all seasons", meaning: "公司在各种环境下都能稳健经营(CEO原话)", example: "This is a company for all seasons. — Hanneke Faber", scenario: "earnings" },
      { phrase: "underscores the durability of our model", meaning: "印证商业模式的韧性", example: "Our performance underscores the durability of our model.", scenario: "earnings" },
      { phrase: "navigating industry dynamics", meaning: "在行业变化中应对自如", example: "A proactive approach to navigating industry dynamics.", scenario: "earnings" },
      { phrase: "year-over-year (YoY) in constant currency", meaning: "按固定汇率同比", example: "Net sales increased 4% YoY in constant currency.", scenario: "earnings" },
      { phrase: "up X basis points YoY", meaning: "同比上升X个基点", example: "Gross margin was 43.5%, up 30 basis points YoY.", scenario: "earnings" },
      { phrase: "tailwinds / headwinds", meaning: "顺风(利好) / 逆风(挑战)", example: "Tariffs remain a headwind; AI demand is a tailwind.", scenario: "earnings" },
      { phrase: "diversification away from China", meaning: "离开中国的产能多元化", example: "Transitioning manufacturing diversification away from China.", scenario: "earnings" },
      { phrase: "memory availability", meaning: "内存供应", example: "Supply constraints around memory availability could affect product timelines.", scenario: "earnings" }
    ]
  },
  {
    id: "flex-q1-2026",
    category: "earnings",
    title: "Flex Q1 FY2026 Earnings Call",
    company: "Flex (FLEX)",
    why: "你的雇主。CEO Revathi Advaithi 印度裔英语清晰,数据中心战略 = 你团队核心话题。",
    difficulty: "Hard",
    duration: "~60 min",
    sources: [
      { label: "YouTube full call", url: "https://www.youtube.com/watch?v=g7MRQRmPpno" },
      { label: "Flex Investor Relations", url: "https://investors.flex.com" },
      { label: "FY25 earnings press release", url: "https://investors.flex.com/news/news-details/2025/FLEX-REPORTS-FOURTH-QUARTER-AND-FISCAL-2025-RESULTS/default.aspx" }
    ],
    chunks: [
      { phrase: "shift the portfolio towards", meaning: "把业务组合转向 ___", example: "We continue to shift the portfolio towards more profitable business.", scenario: "earnings" },
      { phrase: "data center customers", meaning: "数据中心客户(EMS核心)", example: "Strong demand from our data center customers.", scenario: "earnings" },
      { phrase: "record adjusted operating margins", meaning: "调整后运营利润率创纪录", example: "Record adjusted operating margins for both Q4 and the full year.", scenario: "earnings" },
      { phrase: "advanced manufacturing and supply chain solutions", meaning: "先进制造和供应链解决方案", example: "Flex delivers advanced manufacturing and supply chain solutions.", scenario: "earnings" },
      { phrase: "lifecycle services", meaning: "全生命周期服务", example: "Lifecycle services that support customers from concept to scale.", scenario: "earnings" },
      { phrase: "executing well against its strategy", meaning: "战略执行到位", example: "Flex is executing well against its strategy in a dynamic macro environment.", scenario: "earnings" }
    ]
  },
  {
    id: "sanm-q2-2026",
    category: "earnings",
    title: "Sanmina Q2 FY2026 Earnings Call",
    company: "Sanmina (SANM)",
    why: "EMS 同行,讲 ZT Systems 收购整合 + AI 计算订单的完美案例。",
    difficulty: "Medium",
    duration: "~50 min",
    sources: [
      { label: "Investing.com transcript", url: "https://www.investing.com/news/transcripts/earnings-call-transcript-sanmina-beats-q2-2026-forecasts-with-strong-eps-93CH-4640084" },
      { label: "Motley Fool transcript", url: "https://www.fool.com/earnings/call-transcripts/2026/04/27/sanmina-sanm-q2-2026-earnings-transcript/" },
      { label: "Seeking Alpha transcript", url: "https://seekingalpha.com/article/4894764-sanmina-corporation-sanm-q2-2026-earnings-call-transcript" }
    ],
    chunks: [
      { phrase: "exceeded our outlook across the board", meaning: "全面超过我们的指引", example: "We exceeded our outlook across the board.", scenario: "earnings" },
      { phrase: "strong execution and customer demand", meaning: "强劲的执行力和客户需求", example: "Driven by strong execution and customer demand.", scenario: "earnings" },
      { phrase: "accelerated compute shipments", meaning: "加速计算(AI服务器)出货", example: "Accelerated compute shipments shifted into the second quarter.", scenario: "earnings" },
      { phrase: "book-to-bill ratio greater than 1.1", meaning: "订单出货比大于1.1(健康信号)", example: "Bookings strong with a book-to-bill ratio greater than 1.1.", scenario: "earnings" },
      { phrase: "set us on the right path", meaning: "为我们指明正确方向", example: "These results set us on the right path towards our objectives.", scenario: "earnings" },
      { phrase: "for the avoidance of doubt", meaning: "为避免歧义(正式说明)", example: "For the avoidance of doubt, this excludes one-time integration costs.", scenario: "earnings" },
      { phrase: "favorable mix", meaning: "有利的产品组合", example: "Margin expansion was driven by favorable mix.", scenario: "earnings" },
      { phrase: "operational efficiencies", meaning: "运营效率", example: "Operational efficiencies in both core Sanmina and ZT Systems.", scenario: "earnings" }
    ]
  },
  {
    id: "jbl-q2-2026",
    category: "earnings",
    title: "Jabil Q2 FY2026 Earnings Call",
    company: "Jabil (JBL)",
    why: "EMS同行,Mike Dastoor 讲 Intelligent Infrastructure(数据中心、云、网络)增长46%。",
    difficulty: "Medium",
    duration: "~50 min",
    sources: [
      { label: "Motley Fool transcript", url: "https://www.fool.com/earnings/call-transcripts/2026/03/25/jabil-jbl-q2-2026-earnings-call-transcript/" },
      { label: "Investing.com transcript", url: "https://www.investing.com/news/transcripts/earnings-call-transcript-jabil-circuit-q2-2026-beats-estimates-but-stock-dips-93CH-4568609" },
      { label: "Benzinga full transcript", url: "https://www.benzinga.com/markets/earnings/26/03/51327592/jabil-q2-fy26-earnings-call-transcript" }
    ],
    chunks: [
      { phrase: "exiting the first half with strong momentum", meaning: "上半年以强劲势头收官", example: "We're exiting the first half with strong momentum.", scenario: "earnings" },
      { phrase: "broad-based across multiple end markets", meaning: "在多个终端市场广泛分布(不集中)", example: "The strength was broad-based across multiple end markets.", scenario: "earnings" },
      { phrase: "stay ahead of the curve", meaning: "走在曲线前面 / 领先于市场", example: "Their ability to stay ahead of the curve is a key factor.", scenario: "earnings" },
      { phrase: "a key differentiator", meaning: "一个关键差异化优势", example: "Our approach is a key differentiator for Jabil.", scenario: "earnings" },
      { phrase: "rank order", meaning: "按顺序排列(优先级)", example: "Can you help us rank order where you see the most opportunity?", scenario: "interview" },
      { phrase: "is it reasonable to think that", meaning: "这样想合理吗 ___(分析师常用)", example: "Is it reasonable to think that strong growth can sustain beyond fiscal 2026?", scenario: "earnings" },
      { phrase: "I'll try and be as detailed as I can", meaning: "我尽量讲详细点", example: "I know this is a critical part of our story, so I'll try and be as detailed as I can.", scenario: "meeting" },
      { phrase: "encouraging signs", meaning: "积极的信号", example: "More encouraging signs in wafer fab equipment.", scenario: "earnings" },
      { phrase: "ahead of schedule", meaning: "提前完成", example: "Jabil completed its East Coast retrofit ahead of schedule.", scenario: "earnings" },
      { phrase: "imminent discussions", meaning: "即将开始的讨论", example: "Imminent discussions with a third hyperscaler customer.", scenario: "earnings" }
    ]
  },
  {
    id: "cls-q1-2026",
    category: "earnings",
    title: "Celestica Q1 2026 Earnings Call",
    company: "Celestica (CLS)",
    why: "Celestica 是过去一年涨幅最大的EMS(+315%),Rob Maiones讲hyperscaler需求,语言清晰。",
    difficulty: "Medium",
    duration: "~50 min",
    sources: [
      { label: "Investing.com transcript", url: "https://www.investing.com/news/transcripts/earnings-call-transcript-celestica-beats-q1-2026-expectations-stock-surges-93CH-4641561" },
      { label: "Sanmina/Jabil/Celestica comparison (Zacks)", url: "https://www.zacks.com/stock/news/2896575/the-zacks-analyst-blog-highlights-sanmina-jabil-and-celestica" }
    ],
    chunks: [
      { phrase: "kicked off the year with solid results", meaning: "开年业绩稳健", example: "We kicked off the year with solid results in Q1.", scenario: "earnings" },
      { phrase: "a new high for Celestica", meaning: "公司历史新高", example: "Adjusted operating margin of 8%, a new high for Celestica.", scenario: "earnings" },
      { phrase: "exceeded the high end of our guidance range", meaning: "超过指引区间上限", example: "Adjusted EPS exceeded the high end of our guidance range.", scenario: "earnings" },
      { phrase: "the strongest they have ever been", meaning: "史上最强(during my tenure)", example: "Our awarded backlog and pipeline are the strongest they have ever been during my tenure.", scenario: "earnings" },
      { phrase: "exceptionally strong and accelerating demand", meaning: "异常强劲且持续加速的需求", example: "Exceptionally strong and accelerating demand from our hyperscaler customer base.", scenario: "earnings" },
      { phrase: "complemented by a steadily strengthening outlook", meaning: "辅以稳步改善的前景", example: "Complemented by a steadily strengthening outlook in our ATS segment.", scenario: "earnings" },
      { phrase: "underpins our expectation", meaning: "支撑我们的预期", example: "This momentum underpins our expectation for sustained growth.", scenario: "earnings" },
      { phrase: "disciplined working capital management", meaning: "严格的营运资金管理", example: "Disciplined working capital management led to ROIC of approximately 50%.", scenario: "earnings" }
    ]
  },

  // ============================================================
  // BLOOMBERG / MARKETS
  // ============================================================
  {
    id: "bloomberg-surveillance",
    category: "bloomberg",
    title: "Bloomberg Surveillance — Daily Markets Show",
    company: "Bloomberg",
    why: "Tom Keene + Paul Sweeney主持。每天 30-60 分钟,词汇密度高。",
    difficulty: "Hard",
    duration: "30-60 min/天",
    sources: [
      { label: "Bloomberg podcast page", url: "https://www.bloomberg.com/podcasts/series/bloomberg-surveillance" },
      { label: "YouTube — full episodes playlist", url: "https://www.youtube.com/playlist?list=PLe4PRejZgr0MyRkPtrhWF3-ruXOkHeoqa" },
      { label: "Spotify", url: "https://open.spotify.com/show/7DozB6gTL0hnP97u8GIqYd" },
      { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/bloomberg-surveillance/id296237493" }
    ],
    chunks: [
      { phrase: "let me push back on that", meaning: "我想反驳一下(辩论时礼貌反驳)", example: "Let me push back on that — I think the data shows the opposite.", scenario: "markets" },
      { phrase: "where do you stand on", meaning: "你对___怎么看", example: "Where do you stand on rate cuts this year?", scenario: "markets" },
      { phrase: "to your point", meaning: "顺着你刚才说的", example: "To your point, earnings have been remarkably resilient.", scenario: "markets" },
      { phrase: "that being said", meaning: "话虽如此", example: "That being said, valuations are stretched.", scenario: "markets" },
      { phrase: "the Street is pricing in", meaning: "华尔街目前预期", example: "The Street is pricing in two cuts this year.", scenario: "markets" },
      { phrase: "broad-based / narrow", meaning: "广泛参与 / 集中少数(行情)", example: "The rally has been narrow, concentrated in mega-cap tech.", scenario: "markets" },
      { phrase: "to be clear / just to be clear", meaning: "我先说清楚(澄清立场)", example: "Just to be clear, I'm not calling for a recession.", scenario: "markets" },
      { phrase: "a deepening division", meaning: "分歧加深", example: "A deepening division over the outlook for policy.", scenario: "markets" },
      { phrase: "kick things off", meaning: "开始(节目/会议)", example: "Let me kick things off with the Fed decision.", scenario: "markets" },
      { phrase: "valuations are stretched", meaning: "估值偏高", example: "Valuations are stretched after the recent rally.", scenario: "markets" },
      { phrase: "calling for a recession", meaning: "预测经济衰退", example: "I'm not calling for a recession, just slower growth.", scenario: "markets" },
      { phrase: "credit spreads are widening", meaning: "信用利差扩大(信号变差)", example: "We're seeing credit spreads start to widen.", scenario: "markets" }
    ]
  },

  // ============================================================
  // AI PODCASTS / NEWS
  // ============================================================
  {
    id: "lex-fridman-ai",
    category: "ai",
    title: "Lex Fridman Podcast — State of AI in 2026",
    company: "Lex Fridman",
    why: "4小时深度AI访谈,Lex 语速慢、句式清晰,客人都是 AI 顶级研究者。术语密集但都有上下文。",
    difficulty: "Medium-Hard",
    duration: "4 hr (按章节听)",
    sources: [
      { label: "Episode page (with transcript link)", url: "https://lexfridman.com/ai-sota-2026/" },
      { label: "Full transcript", url: "https://lexfridman.com/ai-sota-2026-transcript" },
      { label: "YouTube", url: "https://www.youtube.com/watch?v=EV7WhVT270Q" },
      { label: "All episodes", url: "https://lexfridman.com/podcast/" }
    ],
    chunks: [
      { phrase: "let me unpack that", meaning: "我来拆解一下", example: "Let me unpack that — there are actually three things going on.", scenario: "ai" },
      { phrase: "at the bleeding edge", meaning: "在最前沿(比 cutting-edge 更前)", example: "Engineers at the bleeding edge of AI/ML.", scenario: "ai" },
      { phrase: "scaling laws", meaning: "缩放定律(模型越大越好的规律)", example: "The scaling laws tell us that compute and data drive capability.", scenario: "ai" },
      { phrase: "post-training", meaning: "后训练(RLHF、对齐阶段)", example: "Nathan is the post-training lead at the Allen Institute.", scenario: "ai" },
      { phrase: "long context", meaning: "长上下文(模型能处理多少tokens)", example: "Long context unlocks a different class of applications.", scenario: "ai" },
      { phrase: "tool use", meaning: "工具调用(模型用工具的能力)", example: "Tool use is one of the biggest capability jumps recently.", scenario: "ai" },
      { phrase: "continual learning", meaning: "持续学习", example: "Continual learning is still mostly an open problem.", scenario: "ai" },
      { phrase: "the dream of AGI", meaning: "通用人工智能的愿景", example: "Is the dream of AGI dying, or just maturing?", scenario: "ai" },
      { phrase: "timeline to AGI", meaning: "实现AGI的时间表", example: "Everyone has a different timeline to AGI.", scenario: "ai" },
      { phrase: "I'd push back on that framing", meaning: "我对这个说法有不同看法", example: "I'd push back on that framing — it's not really about scale alone.", scenario: "ai" },
      { phrase: "an open question", meaning: "尚无定论的问题(学术常用)", example: "Whether reasoning is emergent remains an open question.", scenario: "ai" }
    ]
  },
  {
    id: "hard-fork",
    category: "ai",
    title: "Hard Fork — NYT Tech Podcast",
    company: "Kevin Roose & Casey Newton (NYT)",
    why: "每周一集 60-90 分钟,新闻 + AI + 文化。两人节奏快但发音清晰,提升听力反应速度。",
    difficulty: "Medium-Hard",
    duration: "~75 min/集",
    sources: [
      { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/hard-fork/id1528594034" },
      { label: "Spotify", url: "https://open.spotify.com/show/44fllCS2FTFr2x2kjP9xeT" },
      { label: "iHeart Radio", url: "https://www.iheart.com/podcast/326-hard-fork-71510947/" }
    ],
    chunks: [
      { phrase: "what's real, what's hype", meaning: "什么是真的、什么是炒作(节目口号)", example: "What's real? What's hype? Hard Fork is here to help you make sense of it.", scenario: "ai" },
      { phrase: "make sense of", meaning: "理解 / 弄明白", example: "We make sense of the latest in the rapidly changing world of tech.", scenario: "ai" },
      { phrase: "stay on top of", meaning: "持续跟上", example: "Hard to stay on top of all the new model releases.", scenario: "ai" },
      { phrase: "without consent", meaning: "未经同意", example: "The company used his identity without his consent.", scenario: "ai" },
      { phrase: "took the bait", meaning: "上钩了", example: "We almost took the bait on that AI-generated story.", scenario: "social" },
      { phrase: "control the narrative", meaning: "掌控叙事", example: "The federal government's strategy to control the narrative on social media.", scenario: "markets" },
      { phrase: "is it worth the security risk", meaning: "值得冒这个安全风险吗", example: "We consider whether it is worth the security risk.", scenario: "ai" },
      { phrase: "this raises the question of whether", meaning: "这就提出了一个问题:___ 是否", example: "This raises the question of whether AI job loss has truly begun.", scenario: "ai" },
      { phrase: "behind the scenes", meaning: "幕后", example: "Kevin takes us behind the scenes of his latest reporting.", scenario: "ai" }
    ]
  },
  {
    id: "ai-daily-brief",
    category: "ai",
    title: "The AI Daily Brief — NLW",
    company: "Nathaniel Whittemore (NLW)",
    why: "每天 30-60 分钟,只讲AI新闻。NLW语速适中、用词商业化,适合每天通勤听一集。",
    difficulty: "Medium",
    duration: "~30-60 min/天",
    sources: [
      { label: "Spotify", url: "https://open.spotify.com/show/7gRKE8VqK1S9NEujDOzv2y" },
      { label: "YouTube", url: "https://www.youtube.com/@AIDailyBrief" },
      { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/the-ai-daily-brief-formerly-the-ai-breakdown/id1680633614" }
    ],
    chunks: [
      { phrase: "the pulse of", meaning: "___ 的脉搏(节奏感)", example: "If you want to stay on top of model releases, this is the pulse.", scenario: "ai" },
      { phrase: "drop a banger", meaning: "发一个炸场内容(口语)", example: "Anthropic just dropped a banger of a paper.", scenario: "ai" },
      { phrase: "the upshot is", meaning: "结论是 ___", example: "The upshot is, we're not slowing down anytime soon.", scenario: "markets" },
      { phrase: "in the weeds", meaning: "陷入细节里", example: "I don't want to get too in the weeds, but here's the technical bit.", scenario: "ai" },
      { phrase: "high level / at a high level", meaning: "宏观来看", example: "At a high level, this is about distribution, not just capability.", scenario: "interview" },
      { phrase: "kicking around the idea of", meaning: "在琢磨 ___ 这个想法", example: "Folks have been kicking around the idea of model collapse.", scenario: "ai" }
    ]
  },
  {
    id: "all-in-podcast",
    category: "ai",
    title: "All-In Podcast — Tech / VC / Politics",
    company: "Chamath, Sacks, Friedberg, Calacanis",
    why: "VC 视角看 AI、宏观、政治。四个人吵架,语速最快,能学大量\"硅谷投资人\"用语。",
    difficulty: "Hard",
    duration: "~90 min/集",
    sources: [
      { label: "YouTube channel", url: "https://www.youtube.com/@allin" },
      { label: "Spotify", url: "https://open.spotify.com/show/2IqXAVf0p66g5eGcZSh9pk" },
      { label: "All-In website", url: "https://www.allinpodcast.co/" }
    ],
    chunks: [
      { phrase: "let me steelman that", meaning: "我来站对方立场说一遍(高质量辩论)", example: "Let me steelman the other side — there is a real concern here.", scenario: "markets" },
      { phrase: "the bear case is", meaning: "看空理由是 ___", example: "The bear case is that revenue won't keep up with capex.", scenario: "markets" },
      { phrase: "the bull case is", meaning: "看多理由是 ___", example: "The bull case is that AI demand is just starting.", scenario: "markets" },
      { phrase: "I'm long ___", meaning: "我看多 ___ / 我持有 ___", example: "I'm long NVIDIA, I'm long AI infrastructure.", scenario: "markets" },
      { phrase: "spicy take", meaning: "大胆/有争议的观点", example: "Here's a spicy take: most AI startups won't survive 2027.", scenario: "social" },
      { phrase: "you nailed it", meaning: "你说到点子上了", example: "Sacks, you nailed it on this one.", scenario: "social" },
      { phrase: "let's not get hung up on", meaning: "不要纠结于 ___", example: "Let's not get hung up on the exact valuation.", scenario: "meeting" },
      { phrase: "to give credit where credit is due", meaning: "公平地说 / 该给谁功劳就给谁", example: "To give credit where credit is due, OpenAI saw this first.", scenario: "interview" }
    ]
  },

  // ============================================================
  // FP&A INTERVIEW PREP
  // ============================================================
  {
    id: "fpa-interview-insidefpa",
    category: "interview",
    title: "7 Steps to Ace Your FP&A Interview",
    company: "Inside FP&A — Asif Masani",
    why: "针对 FP&A 面试的最实用频道。讲 STAR、case study、variance analysis 怎么讲。",
    difficulty: "Medium",
    duration: "~20 min",
    sources: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=MmIXJM5zpHw" },
      { label: "Inside FP&A free resources", url: "https://www.insidefpa.com/youtube" }
    ],
    chunks: [
      { phrase: "walk me through", meaning: "给我讲一下 ___(面试官最常用)", example: "Walk me through your resume / Walk me through how you'd build a forecast.", scenario: "interview" },
      { phrase: "tell me about a time when", meaning: "STAR 题型开头", example: "Tell me about a time when you had to deliver bad news to a stakeholder.", scenario: "interview" },
      { phrase: "the situation was / the task was / what I did was / the result was", meaning: "STAR 结构清晰版本", example: "The situation was: Q3 forecast missed; the task was to find the gap; what I did was build a driver-based model; the result was identifying $2M in cost overrun.", scenario: "interview" },
      { phrase: "I owned the end-to-end", meaning: "我从头到尾负责", example: "I owned the end-to-end monthly close process for our team.", scenario: "interview" },
      { phrase: "I partnered with", meaning: "我和 ___ 合作(比 worked with 更 senior)", example: "I partnered with the supply chain team to validate assumptions.", scenario: "interview" },
      { phrase: "drive value / drive the business", meaning: "为业务创造价值", example: "FP&A's role is to drive value, not just report numbers.", scenario: "interview" },
      { phrase: "drill down into", meaning: "深入分析", example: "I drilled down into the variance and found the root cause.", scenario: "interview" },
      { phrase: "actionable insights", meaning: "可执行的洞察(FP&A 高频)", example: "I translated the data into actionable insights for leadership.", scenario: "interview" },
      { phrase: "from a high level / at a high level", meaning: "宏观来看", example: "At a high level, opex grew 8%, mostly driven by headcount.", scenario: "interview" },
      { phrase: "directionally correct", meaning: "方向上对(数字不一定精确)", example: "The forecast was directionally correct but understated by 5%.", scenario: "interview" },
      { phrase: "I'd love to hear more about", meaning: "我想多了解 ___(轮你提问)", example: "I'd love to hear more about how the Global Opex team partners with the BUs.", scenario: "interview" },
      { phrase: "what does success look like in this role", meaning: "这个岗位的成功标准是什么(高质量 closing question)", example: "Final question — what does success look like in this role at the 6-month mark?", scenario: "interview" },
      { phrase: "challenge assumptions", meaning: "质疑假设", example: "A good FP&A analyst challenges assumptions, doesn't just accept them.", scenario: "interview" },
      { phrase: "build a driver-based model", meaning: "搭建驱动因素模型", example: "I built a driver-based model that linked headcount to revenue.", scenario: "interview" }
    ]
  },
  {
    id: "fpa-interview-365",
    category: "interview",
    title: "Top 10 FP&A Interview Questions",
    company: "365 Financial Analyst",
    why: "技术问题 + 行为问题混合,有 sample answers。",
    difficulty: "Medium",
    duration: "~15 min",
    sources: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=j87IfoL-GB8" }
    ],
    chunks: [
      { phrase: "budget vs. actuals / variance analysis", meaning: "预算对比实际 / 差异分析", example: "I run weekly variance analysis on budget vs. actuals.", scenario: "interview" },
      { phrase: "rolling forecast", meaning: "滚动预测", example: "We moved from annual budget to a 12-month rolling forecast.", scenario: "interview" },
      { phrase: "top-down vs. bottom-up", meaning: "自上而下 vs. 自下而上", example: "I built a bottom-up forecast and reconciled it to the top-down target.", scenario: "interview" },
      { phrase: "stakeholder management", meaning: "干系人管理(高频面试词)", example: "Stakeholder management is half the job in FP&A.", scenario: "interview" },
      { phrase: "tell a story with the numbers", meaning: "用数据讲故事", example: "My job is to tell a story with the numbers.", scenario: "interview" },
      { phrase: "headcount / opex / capex", meaning: "人员数 / 运营支出 / 资本支出", example: "Most of the variance came from headcount timing.", scenario: "interview" }
    ]
  },
  {
    id: "fpa-interview-marathon",
    category: "interview",
    title: "FP&A Interview Marathon — 34 Questions",
    company: "Asif Masani (YouTube)",
    why: "覆盖广,可以反复刷。挑5个题练,自己录音回听。",
    difficulty: "Medium-Hard",
    duration: "~60 min",
    sources: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=GyPe5eGfgow" }
    ],
    chunks: [
      { phrase: "why do you want to work here", meaning: "经典 — 不要回答\"good company\",要回答具体业务", example: "Logitech's FP&A team sits at the intersection of consumer trends and supply chain — that's where I want to grow.", scenario: "interview" },
      { phrase: "what's your biggest weakness", meaning: "讲一个真实的、正在改进的", example: "Earlier in my career I'd over-polish models — I've learned to share rough drafts faster.", scenario: "interview" },
      { phrase: "where do you see yourself in 5 years", meaning: "和岗位成长路径绑定", example: "Ideally, leading a small FP&A pod owning a P&L line at a tech company.", scenario: "interview" },
      { phrase: "if you had a magic wand", meaning: "如果你有魔法棒(改进现状题)", example: "If you had a magic wand, what would you fix first about your team's process?", scenario: "interview" },
      { phrase: "what questions do you have for me", meaning: "经典 closing — 永远要准备 3-5 个", example: "And just before we wrap, what questions do you have for me?", scenario: "interview" }
    ]
  },

  // ============================================================
  // BUSINESS COMMUNICATION
  // ============================================================
  {
    id: "biz-comm-meetings",
    category: "business",
    title: "Business Meeting English — Speaking Up",
    company: "LinkedIn Learning + corporate coaching",
    why: "美国职场会议最高频的表达模板 — 直接背下来用。",
    difficulty: "Medium",
    duration: "自学 — 拿来直接用",
    sources: [
      { label: "LinkedIn Learning — Communicating with Confidence", url: "https://www.linkedin.com/learning/communicating-with-confidence-2" },
      { label: "LinkedIn Learning — Business English for Non-Native Speakers", url: "https://www.linkedin.com/learning/topics/english" },
      { label: "LinkedIn Learning — Running Meetings", url: "https://www.linkedin.com/learning/leading-productive-meetings-2" }
    ],
    chunks: [
      { phrase: "can I jump in here?", meaning: "我可以插一句吗?(打断别人的礼貌方式)", example: "Sorry — can I jump in here? I think we missed a key assumption.", scenario: "meeting" },
      { phrase: "to build on what [name] said", meaning: "顺着 ___ 的补充", example: "To build on what Sarah said, the Q3 numbers tell the same story.", scenario: "meeting" },
      { phrase: "I'd like to flag a concern", meaning: "我想提一个担忧(比 \"I'm worried\" 专业)", example: "I'd like to flag a concern about the timeline.", scenario: "meeting" },
      { phrase: "let's take that offline", meaning: "这个会后单聊", example: "Good question — let's take that offline so we stay on agenda.", scenario: "meeting" },
      { phrase: "circle back / loop back", meaning: "稍后再谈 / 后续跟进", example: "I'll circle back tomorrow once I have the numbers.", scenario: "meeting" },
      { phrase: "I want to make sure I'm tracking", meaning: "我想确认我跟上了", example: "I want to make sure I'm tracking — are you saying revenue or margin?", scenario: "meeting" },
      { phrase: "could you say more about that?", meaning: "能再展开讲讲吗", example: "Could you say more about that — what's driving the variance?", scenario: "meeting" },
      { phrase: "I'm not sure I follow", meaning: "我没太跟上(承认没懂的得体方式)", example: "I'm not sure I follow — could you walk me through it again?", scenario: "meeting" },
      { phrase: "let me play that back", meaning: "我重复一下我听到的", example: "Let me play that back: draft by Friday, final by next Tuesday?", scenario: "meeting" },
      { phrase: "where I'd push back is", meaning: "我有不同意见的地方是 ___", example: "Where I'd push back is on the headcount assumption.", scenario: "meeting" },
      { phrase: "we're aligned on / I'm aligned with you", meaning: "我们在 ___ 上一致 / 我同意你", example: "We're aligned on the Q4 target.", scenario: "meeting" },
      { phrase: "my two cents", meaning: "我的一点浅见", example: "Just my two cents — I think we should wait one more quarter.", scenario: "meeting" },
      { phrase: "no objection / I'm good with that", meaning: "我没意见 / 我同意", example: "No objection from me. I'm good with that approach.", scenario: "meeting" },
      { phrase: "let's take a step back", meaning: "我们退一步看", example: "Let's take a step back — what problem are we actually solving?", scenario: "meeting" },
      { phrase: "what's the ask?", meaning: "你具体需要我做什么?(美国职场超高频)", example: "Got it — what's the ask from finance specifically?", scenario: "meeting" },
      { phrase: "I'll own that", meaning: "这件事我来负责", example: "I'll own that and follow up by EOW.", scenario: "meeting" },
      { phrase: "EOD / EOW / COB", meaning: "今天下班前 / 本周末前 / 营业结束前", example: "I'll send the deck by EOD Thursday.", scenario: "meeting" },
      { phrase: "ballpark / rough number", meaning: "大概数 / 粗略估算", example: "Ballpark, we're looking at a $5-7M opportunity.", scenario: "meeting" },
      { phrase: "for what it's worth", meaning: "供参考 / 不一定对(谦虚提观点)", example: "For what it's worth, last quarter we tried a similar approach.", scenario: "meeting" },
      { phrase: "I'd defer to you on that", meaning: "这件事我听你的", example: "I'd defer to you on that — you've worked on this customer longer.", scenario: "meeting" }
    ]
  },

  // ============================================================
  // DAILY ENGLISH
  // ============================================================
  {
    id: "daily-coffee-chat",
    category: "daily",
    title: "Daily English — Coffee Chat & Small Talk",
    company: "Curated common patterns",
    why: "美国职场最难的不是开会,是 watercooler chat。同事问 \"how was your weekend\" 不能只说 \"good\"。",
    difficulty: "Easy-Medium",
    duration: "实战 — 见同事就用",
    sources: [
      { label: "All Ears English Podcast", url: "https://www.allearsenglish.com/episodes/" },
      { label: "Speak English with Vanessa (YouTube)", url: "https://www.youtube.com/@SpeakEnglishWithVanessa" }
    ],
    chunks: [
      { phrase: "how's it going? / how have you been?", meaning: "标准打招呼,回答不要只说 \"good\"", example: "— How's it going? — Pretty good, just gearing up for the week. You?", scenario: "small-talk" },
      { phrase: "can't complain", meaning: "还行(美国人最常用回答)", example: "— How's everything? — Can't complain, busy week though.", scenario: "small-talk" },
      { phrase: "gearing up for / wrapping up", meaning: "准备 ___ / 收尾 ___", example: "Gearing up for the Q4 close. / Just wrapping up a project.", scenario: "small-talk" },
      { phrase: "how was your weekend?", meaning: "周一必问 — 准备一个 30 秒小故事", example: "It was good! Went to Half Moon Bay on Saturday. How about yours?", scenario: "small-talk" },
      { phrase: "any plans for the weekend?", meaning: "周五必问", example: "Nothing crazy — probably just catch up on errands. You?", scenario: "small-talk" },
      { phrase: "I hear you", meaning: "我懂你 / 我有同感", example: "— Mondays are rough. — Yeah, I hear you.", scenario: "small-talk" },
      { phrase: "tell me about it", meaning: "可不是嘛 / 别提了", example: "— Traffic was insane. — Tell me about it.", scenario: "small-talk" },
      { phrase: "no worries / you're all good", meaning: "没事 / 不用客气", example: "— Sorry I'm late! — No worries, you're all good.", scenario: "small-talk" },
      { phrase: "for sure / 100%", meaning: "没错 / 绝对的", example: "— Should we grab coffee Thursday? — For sure.", scenario: "small-talk" },
      { phrase: "I'll let you go", meaning: "那我不耽误你了", example: "Cool, I'll let you go — see you at the standup.", scenario: "small-talk" },
      { phrase: "what's on your plate today?", meaning: "你今天忙啥?", example: "— Hey, what's on your plate today? — Mostly variance review.", scenario: "small-talk" },
      { phrase: "swamped / slammed", meaning: "忙爆了", example: "I've been totally swamped this week.", scenario: "small-talk" },
      { phrase: "running on fumes", meaning: "已经精疲力尽了", example: "I'm running on fumes — need a long weekend.", scenario: "small-talk" },
      { phrase: "what brings you in today", meaning: "你今天怎么来啦", example: "Hey! What brings you in today? Thought you were WFH.", scenario: "small-talk" }
    ]
  },
  {
    id: "daily-restaurant-life",
    category: "daily",
    title: "Daily English — Restaurants, Errands, Service",
    company: "Curated common patterns",
    why: "点餐、退货、约时间 — 这些场景如果犹豫,英语永远不自然。",
    difficulty: "Easy",
    duration: "见到就用",
    sources: [
      { label: "BBC Learning English — Real Easy English", url: "https://www.bbc.co.uk/learningenglish/english/features/learn-easy-english" }
    ],
    chunks: [
      { phrase: "could I get / can I get", meaning: "我要 ___(点餐最自然)", example: "Could I get an iced latte with oat milk?", scenario: "service" },
      { phrase: "I'll have the / I'll go with the", meaning: "我点 ___", example: "I'll go with the chicken sandwich.", scenario: "service" },
      { phrase: "for here or to go?", meaning: "店里吃还是带走?", example: "— For here or to go? — To go, please.", scenario: "service" },
      { phrase: "is this seat taken?", meaning: "这位置有人吗?", example: "Excuse me, is this seat taken?", scenario: "service" },
      { phrase: "could we get the check?", meaning: "结账", example: "Whenever you have a chance, could we get the check?", scenario: "service" },
      { phrase: "keep the change", meaning: "不用找零", example: "Keep the change, thanks!", scenario: "service" },
      { phrase: "I'd like to return this", meaning: "我想退货", example: "Hi, I'd like to return this — it doesn't fit.", scenario: "service" },
      { phrase: "do you take returns without receipt?", meaning: "没小票能退吗?", example: "Quick question — do you take returns without a receipt?", scenario: "service" },
      { phrase: "I'm just looking, thanks", meaning: "我就随便看看", example: "— Can I help you find anything? — I'm just looking, thanks.", scenario: "service" },
      { phrase: "does this come in a different size?", meaning: "这个有别的尺码吗?", example: "Does this come in a medium?", scenario: "service" },
      { phrase: "what time do you close?", meaning: "你们几点关门?", example: "Quick question — what time do you guys close tonight?", scenario: "service" },
      { phrase: "could I get that on the side", meaning: "能放旁边单独装吗(酱汁)", example: "Could I get the dressing on the side?", scenario: "service" },
      { phrase: "I'd like to make a reservation for ___ at ___", meaning: "订位标准句型", example: "Hi, I'd like to make a reservation for two at 7pm tomorrow.", scenario: "service" }
    ]
  },
  {
    id: "daily-friends-hangout",
    category: "daily",
    title: "Daily English — Friends, Plans, Casual Chat",
    company: "Curated common patterns",
    why: "和美国同学/朋友 hangout,比商务英语难因为没有模板。",
    difficulty: "Medium",
    duration: "课余社交时用",
    sources: [
      { label: "EnglishClass101 — Real conversations", url: "https://www.englishclass101.com" },
      { label: "Rachel's English (YouTube)", url: "https://www.youtube.com/@rachelsenglish" }
    ],
    chunks: [
      { phrase: "are you down to / are you up for", meaning: "你想 ___ 吗(邀请用)", example: "Are you down to grab dinner Friday?", scenario: "social" },
      { phrase: "I'm down / I'm in", meaning: "我去!", example: "— Movie night Saturday? — I'm down.", scenario: "social" },
      { phrase: "rain check", meaning: "改天吧(婉拒)", example: "Can I get a rain check on tonight? Slammed with school work.", scenario: "social" },
      { phrase: "let's play it by ear", meaning: "看情况吧 / 临时定", example: "I might be free Sunday — let's play it by ear.", scenario: "social" },
      { phrase: "no rush / take your time", meaning: "不急", example: "No rush — finish what you're doing.", scenario: "social" },
      { phrase: "my bad", meaning: "我的错(口语,比 sorry 自然)", example: "Oh, my bad — I thought you said 7pm.", scenario: "social" },
      { phrase: "it's on me", meaning: "我请客", example: "Lunch is on me today.", scenario: "social" },
      { phrase: "let's split it / let's go Dutch", meaning: "AA", example: "Should we split the bill? / Let's go Dutch.", scenario: "social" },
      { phrase: "where are you at?", meaning: "你到哪了 / 状态如何", example: "Hey where are you at? // Where are you at on the project?", scenario: "social" },
      { phrase: "I'll text you when I'm close", meaning: "快到时给你发消息", example: "Cool, I'll text you when I'm close.", scenario: "social" },
      { phrase: "good catching up", meaning: "聊得很开心(分别时)", example: "It was so good catching up — let's not wait so long next time!", scenario: "social" },
      { phrase: "can I crash here / can I crash at your place", meaning: "我能在你这儿过夜吗", example: "Mind if I crash on your couch? Last train left.", scenario: "social" },
      { phrase: "we should grab ___ sometime", meaning: "我们改天一起 ___", example: "We should grab coffee sometime!", scenario: "social" }
    ]
  }
];

// ============================================================
//  THE 45-MINUTE DAILY PLAN
// ============================================================
const DAILY_PLAN = [
  {
    block: "晨间精听",
    minutes: 15,
    when: "早上通勤 / 早起",
    steps: [
      "选 1-3 分钟片段(优先 Logitech / Microsoft / NVIDIA earnings)",
      "盲听一遍,标记听不懂的地方",
      "逐句听写(听不出来反复听)",
      "对照原文,圈出连读 / 弱读 / 听漏的词",
      "跟读模仿语调 3 遍"
    ],
    output: "在 Reflection 区记录:今天精听了什么 + 1 个最大的发现"
  },
  {
    block: "Chunks 整理",
    minutes: 10,
    when: "午休 / 课间",
    steps: [
      "回顾今天遇到的新表达(开会、podcast、看视频时记的)",
      "挑 3-5 个最高频的加入 Chunks Notebook",
      "每个 chunk 写一个属于你自己情境的造句"
    ],
    output: "Chunks 数 +3~5 / 天"
  },
  {
    block: "Shadowing 跟读",
    minutes: 15,
    when: "晚饭后 / 睡前",
    steps: [
      "选今天 Library 里的一段(商务 + 日常各 1 个,交替练)",
      "完整跟读 5 遍,模仿语速、停顿、重音",
      "录一遍自己的(用手机录音)",
      "回听,找 3 个发音差距大的地方"
    ],
    output: "在 Reflection 写:今天 shadowing 的最大发现"
  },
  {
    block: "自言自语复盘",
    minutes: 5,
    when: "睡前",
    steps: [
      "用英文讲今天发生的 3 件事(每件 30 秒)",
      "卡住的地方记下来,明天去查正确说法",
      "想做更深的复盘,在 Reflection 区写一段英文"
    ],
    output: "1 篇 mini reflection,记录今天的卡点"
  }
];

// ============================================================
//  CORRECTION PATTERNS
// ============================================================
const CORRECTION_PATTERNS = [
  { wrong: "I very like it", right: "I really like it / I love it", note: "very 不能直接修饰动词" },
  { wrong: "I want to ask you a question", right: "Quick question — / Can I ask you something?", note: "美国职场更直接,不用铺垫" },
  { wrong: "I think this number is not right", right: "This number doesn't quite add up / Something seems off", note: "更地道的表达" },
  { wrong: "I don't know how to do this", right: "I'm not sure how to approach this / I could use a hand here", note: "求助更专业" },
  { wrong: "Can you teach me how to do this?", right: "Could you walk me through it?", note: "teach 在职场太学生气" },
  { wrong: "I will tell you tomorrow", right: "I'll get back to you tomorrow / I'll circle back tomorrow", note: "tell 太直接" },
  { wrong: "I'm very busy these days", right: "I've been pretty slammed lately / Crazy busy this week", note: "更自然" },
  { wrong: "Yes, I think it is correct", right: "Yeah, that tracks / That checks out", note: "数据/逻辑核对时" },
  { wrong: "What do you think?", right: "What's your take? / Where do you stand on this?", note: "更专业" },
  { wrong: "I cannot understand", right: "I'm not following — could you say more?", note: "承认没懂的得体方式" },
  { wrong: "Sorry to interrupt you", right: "Sorry — can I jump in?", note: "更短更自然" },
  { wrong: "I want to know more about", right: "I'd love to hear more about / I'm curious about", note: "want 太直白" },
  { wrong: "It's very difficult", right: "It's tricky / It's a heavy lift", note: "difficult 词太大" },
  { wrong: "I will try my best", right: "I'll do what I can / I'm on it", note: "try my best 听起来像翻译腔" },
  { wrong: "I have many works to do", right: "I've got a lot on my plate", note: "work 不可数" },
  { wrong: "Please give me your opinion", right: "Curious to hear your take", note: "更自然的征求意见" },
  { wrong: "Can you help me?", right: "Could I get your eyes on this? / Mind taking a look?", note: "更具体的求助" },
  { wrong: "I am free this Friday", right: "I've got Friday open / I'm wide open Friday", note: "more conversational" }
];

// ============================================================
//  SPEAKING SCENARIOS  — 场景口语练习
// ============================================================
const SPEAKING_SCENARIOS = [
  {
    id: 'beauty-foundation',
    category: 'daily',
    title: '美妆柜台 · 买粉底液',
    scene: '你是一位旅客，在高端美妆店寻找一款适合干皮的粉底液。你想要透亮效果，不想要哑光或卡粉。',
    keywords: ['foundation', 'coverage', 'matte', 'dewy', 'cakey', 'swatch', 'shade', 'freebies', 'samples'],
    lines: [
      { role: '你 (旅客)', chinese: '你好。我想找一款遮瑕力比较好的粉底液。', english: "Hi. I'm looking for a foundation with good coverage.", isUser: true },
      { role: '柜员', chinese: '没问题。你想要那种哑光的，还是透亮一点的妆效？', english: "Sure thing. Are you looking for a matte finish or something more dewy?", isUser: false },
      { role: '你 (旅客)', chinese: '最好是透亮的。我的皮肤比较干，怕卡粉。', english: "Definitely dewy. I have dry skin, so I'm worried about it getting cakey.", isUser: true },
      { role: '柜员', chinese: '明白。那我建议你试试这款。需要我帮你试个色吗？', english: "I see. In that case, I recommend this one. Do you want to do a swatch?", isUser: false },
      { role: '你 (旅客)', chinese: '好啊。我想要最自然的色号，不要太白的。', english: "Yes, please. I'm looking for a shade that's natural, nothing too pale.", isUser: true },
      { role: '柜员', chinese: '没问题。你觉得这个颜色怎么样？', english: "No problem. How does this color look to you?", isUser: false },
      { role: '你 (旅客)', chinese: '挺好的。另外，这个有赠品或者小样吗？', english: "It looks great. Also, do you have any freebies or samples with this?", isUser: true }
    ]
  },
  {
    id: 'beauty-lipstick',
    category: 'daily',
    title: '美妆柜台 · 买口红',
    scene: '你在美妆店找适合日常的口红，喜欢奶茶色/豆沙色，但担心显色效果。顺便也问了一下眼影盘。',
    keywords: ['everyday lipstick', 'sheer balm', 'pigment', 'dusty rose', 'washed out', 'satin finish', 'swatch', 'pigmentation', 'palette', 'fallout', 'blends like a dream', 'natural light'],
    lines: [
      { role: '你 (旅客)', chinese: '嗯，我想找一支适合日常涂的口红。', english: "Hey, I'm looking for an everyday lipstick.", isUser: true },
      { role: '柜员', chinese: '好哒！你是想要润唇膏那种质感的，还是显色度高一点的？', english: "For sure! Are you looking for a sheer balm or something with more pigment?", isUser: false },
      { role: '你 (旅客)', chinese: '想要稍微显色一点的。我挺喜欢奶茶色（豆沙色），但担心涂上显得没精神。', english: "Something with a bit more color. I really like this dusty rose shade, but I'm afraid it might make me look washed out.", isUser: true },
      { role: '柜员', chinese: '不会，这款是丝缎质地的，非常提气色。你要在手背上试个色吗？', english: "Not at all. This one has a satin finish, it's very flattering. Want to swatch it on your hand?", isUser: false },
      { role: '你 (旅客)', chinese: '哇，这个显色度绝了。那这个眼影盘呢？会飞粉吗？', english: "Wow, the pigmentation is insane. What about this palette? Is there a lot of fallout?", isUser: true },
      { role: '柜员', chinese: '完全不会，它的质地像黄油一样顺滑，非常好推开。', english: "Hardly any. It's buttery smooth and blends like a dream.", isUser: false },
      { role: '你 (旅客)', chinese: '挺美的，但我得去自然光下看看。我再逛逛，谢谢！', english: "It's pretty, but I need to see it in natural light. I'll look around a bit more, thanks!", isUser: true }
    ]
  },
  {
    id: 'pmo-interview',
    category: 'interview',
    title: 'PMO面试 · 项目管理行为题',
    scene: '你在面试PMO（项目管理办公室）职位。面试官会问几个STAR格式的行为问题，用英文作答。',
    keywords: ['cross-functional', 'stakeholder alignment', 'milestone', 'risk mitigation', 'deliverable', 'scope creep', 'escalate', 'driving alignment', 'project charter', 'on track'],
    lines: [
      { role: '面试官', chinese: '请分享一个你管理过复杂跨部门项目的经历。', english: "Tell me about a time you managed a complex cross-functional project.", isUser: false },
      { role: '你 (候选人)', chinese: '情境是：我们在推进一个三部门协调的数据中心迁移项目，时间线很紧。我作为PMO负责协调进度和风险，每周主持三方对齐会、追踪里程碑并早期识别Scope Creep。结果是提前两周交付，成本节省了8%。', english: "The situation was — we had a data center migration involving three departments with a tight deadline. My task was to own the timeline and drive alignment across teams. What I did was run a weekly three-way sync, track milestones in a shared dashboard, and flag scope creep early. The result was delivery two weeks ahead of schedule with 8% cost savings.", isUser: true },
      { role: '面试官', chinese: '当项目出现风险或者偏差时，你通常怎么处理？', english: "When a project runs into risk or deviation, how do you typically handle it?", isUser: false },
      { role: '你 (候选人)', chinese: '我会先识别根本原因，评估影响范围，再决定是自行处理还是向上汇报。我不会等风险变成危机才行动——早期发现是关键。', english: "I first identify the root cause and assess the impact. Then I decide whether to mitigate within the team or escalate to leadership. I try not to wait until a risk becomes a crisis — early flagging is key.", isUser: true },
      { role: '面试官', chinese: '你如何管理不同优先级互相冲突的干系人？', english: "How do you manage stakeholders with competing priorities?", isUser: false },
      { role: '你 (候选人)', chinese: '我先理解每个干系人的核心诉求，找到共同点，再引导大家基于项目目标做权衡。透明沟通是维持信任的关键。', english: "I start by understanding the core objective behind each stakeholder's priority. Then I surface the trade-offs clearly and facilitate a decision based on project goals — not seniority. Transparency is key to maintaining trust.", isUser: true }
    ]
  },
  {
    id: 'hyperscaler-meeting',
    category: 'earnings',
    title: 'Hyperscaler会议 · AI基础设施讨论',
    scene: '你在和一位AWS客户成功经理开会，讨论AI工作负载的架构、迁云策略和TCO分析。',
    keywords: ['workload', 'on-premise', 'hybrid cloud', 'inference', 'capacity planning', 'TCO', 'vendor lock-in', 'elasticity', 'burst', 'steady-state'],
    lines: [
      { role: 'AWS客户经理', chinese: '你们目前的AI推理工作负载主要部署在哪里？本地还是云端？', english: "Where are your AI inference workloads currently running — on-premise or in the cloud?", isUser: false },
      { role: '你', chinese: '我们目前是混合架构，核心推理跑在本地，高峰时段弹到云端。我们在评估是否要把全部工作负载迁上来。', english: "We're running a hybrid architecture — core inference on-premise, but we burst to the cloud during peak demand. We're evaluating whether to migrate the full workload.", isUser: true },
      { role: 'AWS客户经理', chinese: '你们在容量规划上遇到什么挑战？', english: "What challenges are you seeing around capacity planning?", isUser: false },
      { role: '你', chinese: '主要挑战是需求波动太大，预测很难。另外对单一厂商的依赖也是顾虑，我们希望保持灵活性。', english: "The main challenge is demand volatility — it's hard to forecast accurately. We're also concerned about vendor lock-in, so maintaining flexibility is a priority.", isUser: true },
      { role: 'AWS客户经理', chinese: '从TCO角度，你们怎么评估云端方案相对于本地？', english: "From a TCO perspective, how are you evaluating cloud versus on-premise?", isUser: false },
      { role: '你', chinese: '我们在比较五年总拥有成本，包括硬件折旧、人力成本和云端的弹性溢价。对于稳定可预期的工作负载，本地方案成本更优；但对于需求波动的场景，云端经济性很有吸引力。', english: "We're looking at five-year TCO including hardware depreciation, headcount, and the elasticity premium on cloud. For predictable, steady-state workloads, on-premise wins on cost. But for variable demand, the cloud economics are compelling.", isUser: true }
    ]
  },
  {
    id: 'ems-briefing',
    category: 'earnings',
    title: 'EMS供应链 · 客户季度汇报',
    scene: '你在向数据中心客户（超大规模云厂商）汇报季度产能爬坡、供应链状况和NPI进度。',
    keywords: ['ramp', 'yield', 'lead time', 'capacity utilization', 'shipment', 'qualification', 'NPI', 'BOM', 'component shortage', 'mitigation plan'],
    lines: [
      { role: '客户', chinese: 'Q3的产能爬坡情况怎么样？能满足我们的需求预测吗？', english: "How's your Q3 ramp looking? Can you meet our demand forecast?", isUser: false },
      { role: '你', chinese: '爬坡按计划推进，良率在95%以上，产能利用率达到92%。唯一变数是内存组件的交货周期比预期长了两周，我们正在认证备选供应商。', english: "The ramp is tracking to plan. Yield is above 95% and we're at 92% capacity utilization. The only variable is memory lead times running two weeks longer than expected — we're actively qualifying a secondary supplier.", isUser: true },
      { role: '客户', chinese: '如果内存问题解决不了，对我们的出货时间有什么影响？', english: "If the memory issue isn't resolved, what's the impact on our shipment timeline?", isUser: false },
      { role: '你', chinese: '最坏情况是部分批次延迟两到三周。我们已经做了优先级排序，优先保证你们的关键SKU。本周末我会发一份详细的缓解方案。', english: "Worst case, we're looking at a two-to-three week slip on some lots. We've already prioritized your critical SKUs. I'll send over a detailed mitigation plan by end of week.", isUser: true },
      { role: '客户', chinese: 'NPI的进度呢？下一代产品能按时完成认证吗？', english: "What's the NPI status? Can we hit the qualification milestone for the next-gen product on schedule?", isUser: false },
      { role: '你', chinese: 'NPI按计划推进。预计下个月完成工程验证，PVT预计在Q4初。如果BOM有变更，请尽早通知我们——最后时刻的变更会影响认证时间线。', english: "NPI is on track. We're targeting engineering validation completion next month, with PVT in early Q4. If there are any BOM changes, we need early visibility — last-minute changes would impact the qualification timeline.", isUser: true }
    ]
  },
  {
    id: 'ai-semiconductor',
    category: 'ai',
    title: 'AI半导体 · 行业趋势对话',
    scene: '你在和一位分析师讨论AI芯片供应链现状、NVIDIA vs AMD竞争格局，以及推理侧市场的展望。',
    keywords: ['inference', 'training', 'custom silicon', 'ASIC', 'HBM', 'CoWoS', 'performance per watt', 'vendor lock-in', 'supply tightness', 'ecosystem', 'CUDA', 'moat'],
    lines: [
      { role: '分析师', chinese: '你怎么看现在AI芯片市场的供需情况？', english: "How do you see the current supply-demand dynamics in the AI chip market?", isUser: false },
      { role: '你', chinese: '需求端毫无疑问还在加速，超大规模云厂商的资本开支都在上调。供给侧受限于CoWoS封装产能和HBM内存，预计供应紧张会持续到2026年底。', english: "Demand is clearly accelerating — every hyperscaler is raising capex guidance. On the supply side, the bottlenecks are CoWoS packaging capacity and HBM memory. I expect supply tightness to persist through end of 2026.", isUser: true },
      { role: '分析师', chinese: 'NVIDIA的护城河到底有多深？AMD和自研ASIC能撼动它吗？', english: "How deep is NVIDIA's moat? Can AMD or custom silicon really challenge it?", isUser: false },
      { role: '你', chinese: 'NVIDIA的核心护城河是CUDA生态——软件层的迁移成本极高。AMD在性能上在追赶，但生态差距还需要几年填补。自研ASIC对特定工作负载有效率优势，大厂会两条腿走路，NVIDIA会被补充，不会被替代。', english: "NVIDIA's core moat is the CUDA ecosystem — the software switching cost is enormous. AMD is closing the performance gap, but the ecosystem takes years to build. Custom ASICs win on efficiency for specific workloads, so hyperscalers will run a hybrid approach. NVIDIA won't be displaced — just supplemented.", isUser: true },
      { role: '分析师', chinese: '你对推理侧市场有什么看法？和训练侧有什么不同？', english: "What's your view on the inference market? How does it differ from training?", isUser: false },
      { role: '你', chinese: '训练是高度集中的，拼的是算力和内存带宽。推理则更分散——对延迟、成本、能耗的要求因场景而异，这给了AMD和自研芯片更多切入空间。随着部署规模扩大，推理端的竞争会比训练端激烈得多。', english: "Training is highly concentrated — it's all about raw compute and memory bandwidth. Inference is more fragmented: latency, cost, and power constraints vary widely by use case. That creates more room for AMD and custom silicon. As deployment scales, inference will see more competitive dynamics than training.", isUser: true }
    ]
  }
];

// Make available globally
window.__DATA__ = { SEED_MATERIALS, DAILY_PLAN, CORRECTION_PATTERNS, SPEAKING_SCENARIOS };
