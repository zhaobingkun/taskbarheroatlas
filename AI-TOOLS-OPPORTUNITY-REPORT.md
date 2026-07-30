# AI 工具站选题初筛报告

日期：2026-07-28  
输入文件：`/Users/zhaobingkun/Documents/外链ai .csv`

## 1. 数据结论

- 原始行数：8309
- 唯一 URL：8239
- 唯一 host：8146
- 带联盟或追踪参数的 URL：8039
- 带 `utm_source` 的 URL：7383
- URL 中包含 `toolify` 的数量：7799
- 首页路径加查询参数的数量：7800

判断：这份表不是外链提交清单，而是 AI 工具/AI SaaS 官网清单，主要来自 Toolify 类目录或联盟链接采集。它适合用来做选题研究、竞品池和分类页种子，不适合直接做外链执行。

## 2. 从 URL 可推断的品类分布

说明：CSV 只有 URL，没有标题、描述、价格、流量或功能字段。以下分类基于域名、路径和关键词粗分，必须在正式建站前二次抓取页面标题和描述确认。

| 品类 | 粗分数量 | 判断 |
|---|---:|---|
| General AI tool / unclear | 5516 | 信息不足，需二次抓取 title/description 后再分 |
| Image / design / creative | 591 | 数量大，但竞争也大；适合进一步垂直化 |
| Chatbot / agent / assistant | 443 | 大词过热，不建议做泛 chatbot 目录 |
| Marketing / sales / CRM | 361 | 商业价值高，但 B2B 竞争强 |
| SEO / content writing | 311 | 变现直接，联盟多，但 SERP 和目录竞争很强 |
| Video / audio / voice | 292 | 可做真实测试和长尾教程，机会较好 |
| Coding / developer | 185 | 数量不算最大，但适合做实测 benchmark，差异化最好 |
| Business / productivity / docs | 173 | 可做场景型页面，如 PDF、会议、简历、表格 |
| Education / study | 115 | 长尾明确，适合做学生/教师场景，但要注意准确性和合规 |
| Data / research / search | 66 | 小而专业，适合做研究型工具评测 |
| HR / recruiting | 57 | 商业价值高，但简历/求职竞争重 |
| Legal / finance | 49 | 不建议首选，准确性和信任门槛高 |
| Website / app builder | 46 | 可做细分比较，但数量较少 |
| Ecommerce / product | 34 | 可与图片/文案结合做电商工具垂直站 |

## 3. 不建议做的方向

### 3.1 泛 AI 工具大全

不建议做 `Best AI Tools`、`AI Tools Directory`、`Top AI Websites` 这种泛目录站。

原因：

- 现有大站已经很多，Futurepedia、Toolify、There’s An AI For That、PoweredByAI 等都在做工具目录。
- 泛目录很容易变成“搬运标题 + 简介 + 分类”，没有原创体验，Google 和 AI 搜索都不缺这种 commodity 内容。
- CSV 本身已经证明该生态大量靠目录、联盟和追踪链接传播，新站直接复制这个模式很难有差异化。

### 3.2 泛 chatbot / prompt 站

不建议做大而泛的 `AI chatbot tools`、`ChatGPT alternatives`、`Best AI agents`。

原因：

- 大词更新快，竞争强。
- 很多工具功能重叠，没实测时内容容易空。
- 用户真正有价值的问题通常在具体场景里，例如客服、代码、销售、学习、PDF、视频剪辑。

### 3.3 法律/金融 AI 工具站

不建议作为第一个 AI 站。

原因：

- YMYL 风险高，需要强信任、免责声明、专业审校和更高事实准确性。
- 单纯 SEO 内容不够，需要真实评测、案例和合规边界。

## 4. 推荐可做方向

### 第一推荐：AI Coding Tools Benchmark / AI Developer Tools Guide

定位：专门评测 AI 编程工具、代码助手、CLI agent、代码审查、debug、SQL、前端生成、GitHub workflow 工具。

为什么适合咱们做：

- 技术实测可以形成真实信息增量，不只是 AI 改写。
- 可以做可重复 benchmark：同一个 bug、同一个 repo、同一个 prompt、同一个评分表。
- 页面可拆很多：
  - `/tools/cursor/`
  - `/tools/github-copilot/`
  - `/tools/codeium/`
  - `/best/ai-coding-tools-for-python/`
  - `/best/ai-code-review-tools/`
  - `/compare/cursor-vs-copilot/`
  - `/benchmarks/react-bug-fix/`
  - `/benchmarks/sql-query-generation/`
- 比泛 AI 工具目录更容易建立“经验”和“证据”。

首版可以做：

- 首页：AI coding tools tested with real developer tasks
- Hub：Best AI coding tools
- Hub：Benchmarks
- Hub：Comparisons
- Hub：Use cases
- 10 个工具页
- 6 个对比页
- 5 个 benchmark 任务页
- 5 个场景页

结论：这是当前最建议做的方向。

### 第二推荐：AI Video / Audio Tools for Creators

定位：面向 YouTube Shorts、TikTok、播客、字幕、配音、转录、剪辑的 AI 工具评测站。

为什么可做：

- CSV 里该类工具不少。
- 用户搜索意图非常具体：
  - `best AI subtitle generator for YouTube`
  - `AI dubbing tools for creators`
  - `video to blog AI`
  - `AI podcast transcript tools`
- 可以做真实样本测试：同一段音频/视频，比较字幕准确率、导出格式、价格、水印、语言支持。
- 图片/视频证据天然适合 GEO/AI 搜索摘取。

风险：

- 需要准备测试素材。
- 部分工具收费，实测成本比 coding tools 更高。

适合域名定位：`AIVideoToolBench`、`CreatorAITools`、`SubtitleToolGuide` 一类。

### 第三推荐：AI SEO / Content Writing Tools for Small Sites

定位：只评测 SEO 写作、内容简报、关键词、文章生成、内链、改写、人类化检测等工具。

优势：

- 变现直接，联盟项目多。
- CSV 里这类工具明显存在：Jasper、Writesonic、SurferSEO、Rytr、NeuronWriter、SEOWriting 等。
- 和咱们现在做 SEO 站的经验相关，能写出真实工作流。

风险：

- 竞争非常强。
- 如果只写“best AI writing tools”，很容易被大站压住。
- 必须切窄，比如：
  - `AI SEO tools for programmatic SEO`
  - `AI writing tools for affiliate sites`
  - `AI content brief tools`
  - `SurferSEO alternatives for small blogs`

结论：能做，但必须垂直，不要做泛写作工具大全。

### 第四推荐：AI Study Tools / Teacher Tools

定位：学生、教师、课程、测验、笔记、作业辅助、学习计划工具。

优势：

- 长尾清晰，工具数量足够。
- 页面可以拆为学生端和教师端：
  - AI quiz generators
  - AI study note tools
  - AI lesson plan generators
  - AI homework helpers
  - AI flashcard tools
- 可以做模板、示例、准确性测试。

风险：

- 涉及学生和作业，必须强调合规使用，不鼓励作弊。
- 教育政策和地区差异需要谨慎。

结论：可做，但不如 coding/video 方向直接。

### 第五推荐：AI Product Photo / Ecommerce Listing Tools

定位：给 Etsy、Amazon、Shopify 卖家用的 AI 商品图、listing 文案、背景替换、SEO 描述工具。

优势：

- 商业意图强。
- 可以融合 Image / Ecommerce / Copywriting 三类工具。
- 页面长尾很清楚：
  - AI product photo tools for Etsy
  - AI background remover for Shopify
  - AI Amazon listing generator
  - AI product description tools

风险：

- 电商工具竞争强。
- 图片生成质量需要真实样例对比。

结论：如果目标是联盟/商业变现，这个方向可以作为第二批候选。

## 5. 最建议的建站选择

如果只选一个，我建议做：

> AI Coding Tools Benchmark / AI Developer Tools Guide

不是因为 CSV 里 coding 数量最多，而是因为这个方向最容易做出“别人没有的内容”。

核心打法：

- 不做泛目录。
- 用真实任务测试工具。
- 每个工具页都包含测试环境、prompt、结果、失败点、价格、适合/不适合人群。
- 每个对比页都用同一组任务评分。
- 首批页面控制在 20-30 页，先保证质量和可抓取结构，再扩工具库。

## 6. 首版页面树建议

```text
/
/tools/
/benchmarks/
/comparisons/
/use-cases/
/pricing/

/tools/cursor/
/tools/github-copilot/
/tools/codeium/
/tools/tabnine/
/tools/replit-ai/
/tools/amazon-q-developer/
/tools/sourcegraph-cody/
/tools/aider/
/tools/continue-dev/
/tools/code-review-tools/

/benchmarks/react-bug-fix/
/benchmarks/python-refactor/
/benchmarks/sql-query-generation/
/benchmarks/unit-test-generation/
/benchmarks/readme-to-app/

/comparisons/cursor-vs-copilot/
/comparisons/cursor-vs-replit-ai/
/comparisons/copilot-vs-codeium/
/comparisons/aider-vs-continue/
/comparisons/best-free-ai-coding-tools/

/use-cases/ai-tools-for-python/
/use-cases/ai-tools-for-react/
/use-cases/ai-code-review/
/use-cases/ai-debugging-tools/
/use-cases/ai-terminal-agents/
```

## 7. 下一步建议

1. 不急着注册域名。
2. 先从 CSV 里二次抓取 AI coding 相关工具的标题、description、pricing、affiliate 页面。
3. 同时人工补充当前主流 coding 工具，因为 CSV 里不一定完整。
4. 做一个 20-30 页静态 MVP。
5. 每页必须有实测证据，而不是“AI 工具简介搬运”。

## 8. 参考来源

- Futurepedia 首页显示其已覆盖 AI 工具、课程、分类和教程生态，并公开称拥有 4,000+ curated tools，说明泛 AI 工具目录竞争已经很成熟：`https://www.futurepedia.io/`
- Toolify 首页本身就是 AI tools directory，并带 Submit、Advertise、Guest Posts / Link Insert、Top AI By Monthly、Top AI By Categories 等入口，说明这类目录已经高度商业化：`https://www.toolify.ai/`
- Google Search Central 对 AI 内容的核心口径是看内容质量和原创有用性，而不是只看是否 AI 生成；但用自动化内容主要操纵排名属于 spam policy 风险：`https://developers.google.com/search/blog/2023/02/google-search-and-ai-content`

## 9. 如果用这份文件做 AI 导航站

可以做，但首版不应直接把 8239 个 URL 生成 8239 个可索引详情页。

### 可做形态

- 首页：AI tools navigation with curated categories
- 分类页：Writing、Image、Video、Coding、SEO、Marketing、Education、Productivity、Ecommerce、Research
- 工具列表页：支持搜索、分类、价格、是否免费、是否需要登录、是否实测
- 工具详情页：只给已清洗、已补充信息、已人工确认的工具建索引页
- 比较页：`tool-a-vs-tool-b`、`best-ai-tools-for-x`
- 集合页：`free-ai-video-tools`、`ai-coding-tools-for-vscode`、`ai-seo-tools-for-small-sites`

### 首版数据策略

- 从 8239 个 URL 中先清洗出唯一 host，去掉 `utm_source`、`via`、`fpr`、`ref`、`aff` 等追踪参数。
- 首版只发布 300-800 个精选工具列表，详情页控制在 100-300 个以内。
- 剩余 URL 保留在后台数据表，不立即生成可索引页。
- 每个工具至少补齐：名称、官网、分类、短描述、价格模型、核心用途、是否登录、是否有免费层、更新时间、来源 URL。
- 未验证工具只放列表，不做详情页；信息不足页面默认不收录。

### SEO 风险

- 如果只是“工具名 + AI 简介 + 出站链接”，容易被视为低原创目录页。
- 如果批量用 AI 给 8000 个工具生成简介，且没有人工筛选、测试或补充价值，存在 scaled content abuse 风险。
- 导航站要能长期活下来，必须有人工精选、真实测试、更新记录、对比表、使用场景和去重规则。

### 更稳的差异化

- 不叫泛 `AI Tools Directory`，而叫某个明确定位，例如：
  - `AI Tools Navigator for Builders`
  - `AI Coding & Creator Tools Directory`
  - `AI Tools Bench`
  - `AI Tools for Small Teams`
- 首页和分类页承接导航需求；工具详情页承接长尾查询；benchmark 和 comparison 页面承接真正的 SEO 增量。
- 出站链接默认使用清洗后的官方 URL；如果未来使用联盟链接，需要明确披露，并按链接性质加 `rel="sponsored"` 或 `nofollow`。

### 推荐首版页面量

- 首页：1
- 分类 Hub：10-14
- 工具列表页：10-20
- 精选工具详情页：100-200
- 对比/集合页：20-40
- 说明页：About、Submit Tool、Methodology、Privacy

总量控制在 150-280 个可索引页面，比一上来发布 8239 个薄页面更安全。

## 10. 多语言策略

建议预留多语言架构，但不要首版一次性上线大量语言。

### 判断

AI 导航站适合做多语言，因为 AI 工具、写作、图片、视频、编程、学习和办公工具都有跨语言搜索需求。非英语用户也会搜索本地语言的“AI 写作工具”“AI 视频剪辑工具”“AI 编程工具”“免费 AI 工具”等长尾词。

但多语言不能等于批量机器翻译。把 8239 个工具页翻译成 5-10 种语言，会迅速变成数万薄页面，维护成本和质量风险都很高。

### 推荐阶段

第一阶段：只上英文主站。

- URL 示例：`/tools/`、`/categories/writing/`、`/tools/cursor/`
- 目标：验证索引、GSC impression、哪些分类和工具页有真实搜索信号。
- 页面量：150-280 个可索引页面。

第二阶段：加简体中文。

- URL 示例：`/zh/`、`/zh/categories/writing/`、`/zh/tools/cursor/`
- 原因：用户本人可审校中文质量，中文 AI 工具搜索需求明确，且适合做独立中文导航入口。
- 只翻译首页、分类 Hub、热门集合页和少量重点工具页，不全量翻译所有工具。

第三阶段：根据 GSC 再选择日语、韩语、西语或葡语。

- 日语/韩语适合 AI 工具和生产力工具，但需要更高本地化质量。
- 西语/葡语覆盖面大，但竞争也不弱。
- 不建议一开始同时做 8-14 种语言。

### 技术规则

- 用子目录，不用子域：`/zh/`、`/ja/`、`/ko/`。
- 每个语言页自引用 canonical。
- 对有对应翻译的页面加双向 `hreflang`。
- 加 `x-default` 指向英文首页或语言选择页。
- 不存在高质量翻译的页面不要挂 hreflang；也不要让低质量翻译页索引。
- sitemap 可用 `xhtml:link` 标注语言版本，但不要同时维护 HTML、HTTP Header、sitemap 三套 hreflang，避免出错。

### 内容规则

- 分类名、工具用途、价格模型、更新时间可以共用结构化数据。
- 正文必须本地化改写，不能只是逐句翻译。
- 中文页要围绕中文搜索意图重写标题和开头答案，例如：
  - `免费 AI 写作工具`
  - `AI 视频字幕工具`
  - `AI 编程工具推荐`
  - `适合小团队的 AI 工具`
- 英文页和中文页可以互为同主题版本，但主内容必须真正翻译/本地化；否则 Google 可能把它当重复或低价值页面。

### 推荐结论

多语言要做，但顺序是：

1. 英文 MVP 先上线并拿到 GSC 信号。
2. 第二阶段只加 `/zh/`。
3. 中文只翻译首页、分类 Hub、热门集合页和重点工具页。
4. 等英文和中文都有 impression 后，再决定是否扩 `/ja/`、`/ko/`、`/es/`。

首版工程上必须预留 i18n 字段和 URL 结构，但页面发布上保持克制。
