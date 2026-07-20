# Task Bar Hero 项目经验记录

## 2026-07-19：两站首次在线检查

### taskbarhero.wiki

- 定位：数据密集型社区 Wiki、数据库与玩家工具站。
- 首页显示数据已跟进到 `v1.00.17`，有 Gear、Stages、Monsters、Skills、Runes、Builds、Tier Lists、Guides 及多种计算/查询工具。
- SEO 基础项存在：首页 canonical、唯一 H1、meta description、WebSite/Organization 等 JSON-LD、robots.txt 与多份 sitemap。
- 主要问题：抽查首页图片的 `alt` 基本为空；首页入口非常多，信息密度高，需持续关注抓取层级与移动端可用性。

### taskbarhero.org

- 定位：多语言 SEO Wiki 与攻略入口，首页内容解释性更强，导航更克制。
- 覆盖 14 种语言入口，首页有 farming、drop finder、items、skills、stages、beginner guide、updates 等清晰意图页。
- SEO 基础项存在：首页 canonical、robots meta、唯一 H1、meta description、WebSite/VideoGame JSON-LD、robots.txt 与 sitemap。
- 主要问题：首页仍标注 `v1.00.13`，而 `.wiki` 已到 `v1.00.17`，内容与 sitemap 的更新时间也偏旧；抽查首页图片的 `alt` 基本为空。

### 两站策略判断

- `.wiki` 当前在数据新鲜度、数据规模、工具和社区内容方面明显更强。
- `.org` 当前在解释型首页、多语言目录和传统 SEO 内容结构方面更清晰。
- 如果两个域名都由同一团队维护，应避免大面积同质内容互相竞争：建议明确一个主数据库/工具品牌与一个攻略/语言内容品牌，或选择主域后对重复页面做合并、canonical/301 规划。

## 2026-07-19：新站竞争可行性判断

- 结论：有机会超过 `taskbarhero.org`，但不适合复制其首页和通用 Wiki 目录；应以更新速度、可交互工具、实测攻略和细分长尾作为突破口。
- 当前搜索竞争不只来自该域名，还包括 `taskbarhero.wiki`、Mobalytics、PC Gamer、Pro Game Guides、多个独立 Wiki/攻略站。
- `.org` 的明显弱点是版本停在 `v1.00.13`、内容更新偏慢、数据库与工具深度不如 `.wiki`。
- 新站第一阶段建议只做英文，优先完成当前版本中心、farming calculator、drop finder、build planner、save inspector/gear evaluator、按版本标记的实测 builds，以及 20-30 个强问题页。
- 不建议一开始铺十几种机器翻译语言；先让英文主站获得收录、点击与外链，再扩语言目录。
- 判断是否继续投入的窗口：上线后 4-8 周观察索引、impression、长尾排名及工具页自然链接；若只有首页曝光，应检查内容差异化、数据新鲜度和 Hub 内链。

## 2026-07-19：多语言上线策略

- 新站需要预留多语言架构，但首版不应同时上线大量语言。
- 第一阶段只做英文；英文核心工具和 20-30 个主干页面稳定收录后，再根据 Search Console 的国家、语言查询和自然流量决定扩展。
- 第二阶段优先考虑简体中文、日语、韩语；一次只增加一种或一个小批次，避免翻译质量和版本更新失控。
- 所有语言使用子目录，例如 `/zh/`、`/ja/`、`/ko/`；配置双向 hreflang、自引用 canonical、语言切换与本语言 sitemap。
- 数据库名称、数值和版本信息共用结构化数据源；攻略正文必须本地化改写，不能只做逐句机器翻译。

## 2026-07-19：针对 taskbarhero.org 的执行打法

- 不做通用 Wiki 复制站，定位为“当前版本、实测 Build 与玩家工具中心”。
- 竞争顺序：先抢版本词、具体问题词和工具词，再抢英雄/Build 分类词，最后挑战 `task bar hero wiki`、`tbh wiki` 等主词。
- 首版控制在 20-30 个高质量页面，并上线至少 2 个真正可用的工具；优先 Farming Calculator 与 Drop Finder。
- 首页直接提供搜索、当前版本状态、热门 Build、Farm 快捷查询和核心工具，不做只有入口按钮的薄落地页。
- 建立版本数据层：所有 Build、Tier List、数值页标注适用版本、更新时间、数据来源和是否实测；补丁后集中生成“受影响页面”更新清单。
- 站点初期只做英文，但代码和 URL 结构预留 `/zh/`、`/ja/`、`/ko/`。
- 上线前必须具备可抓取 HTML、Hub/子页结构、canonical、OG/Twitter、JSON-LD、robots、sitemap、图片 alt 和基础分析工具。
- 上线后前四周保持每周 3-5 个高价值页面或数据更新，同时在 Reddit、Discord、Steam 社区以回答问题和工具价值获取自然引用，不做垃圾外链。

## 2026-07-19：首页主关键词决策

- 英文首页主关键词确定为 `Task Bar Hero`，同时自然覆盖 `TBH: Task Bar Hero`、`Task Bar Hero wiki`、`Task Bar Hero guide`、`Task Bar Hero tools`。
- 首页承担游戏实体与全站总 Hub，不单独再建立一个与首页争夺 `Task Bar Hero` 的通用介绍页。
- `wiki`、`tier list`、`builds`、`farming` 等搜索意图分别由对应 Hub/工具页承接，首页通过摘要和内链给予支持。
- 首页建议 title：`Task Bar Hero Wiki, Builds & Tools | [Brand]`；H1：`Task Bar Hero Wiki, Builds & Tools`。最终品牌和域名确定后再校准字符长度。
- 首页首屏需直接说明网站解决什么问题，并展示当前版本、站内搜索、Farming Calculator、Drop Finder 与热门 Build，正文自然使用主词，禁止机械堆砌。

## 2026-07-19：站内优化方法合并

- 已将 `/Users/zhaobingkun/doc/SEO-SITE-PLAYBOOK.md` 与补充的站内优化经验合并为本项目执行依据。
- 页面建立前先判断搜索意图：内容、工具、服务、商品或导航；页面类型必须与意图一致，不能用普通文章承接明显的工具需求。
- `keywords` meta 默认不写；重点维护唯一且自然的 title、description、H1、首屏直接答案和正文语义结构。
- 每页只允许一个 H1；正文使用 H2/H3、p 和带描述性 alt 的大图组织。工具页同样需要可抓取的解释、使用方法、结果说明、限制和 FAQ。
- 首页执行“分门别类罗列”：H1 承接 `Task Bar Hero`，H2 承接 Builds、Farming、Database、Guides、Updates 等一级主题，代表性 H3/卡片链接到具体页面；不把全部长尾硬塞到首页。
- 内链形成主题树：首页链接一级 Hub；Hub 链接子分类/详情页；详情页用自然锚文本回链 Hub；所有关键页通过导航、面包屑或正文路径回到首页。
- 所有重要内容必须 SSR/SSG 进入原始 HTML；交互工具可以客户端增强，但初始说明、默认结果或可索引数据不得依赖 JS 才出现。
- 统一规范 URL：确定裸域或 www、HTTPS、尾斜杠策略，并用绝对 canonical、自跳 canonical、301 重定向消除重复 URL。

## 2026-07-19：关键词验证资料与页面分组

- 新增候选词：`taskbar hero rune tree`、`calculator`、`drop rates`、`codes`、`runes`、`chest timer`、`exp farm`、`market`、`pets`、`tier list`。第三方 KD 仅用于相对排序，上线后以 GSC 数据校准。
- 页面结构不机械照搬“五六个合页”：`/runes/` 作为 Hub，Rune Tree/Planner 和 Drop Rates 根据意图拆分；`/calculators/` 作为 Hub，Chest Timer 使用独立 URL；EXP Farm 可将攻略和计算模块合并。
- Codes 页面发布前必须验证官方是否存在兑换码；若没有，真实说明“当前无官方 codes”并标注核验日期，绝不编造。
- Market 页面只有在可靠数据源、更新时间和异常说明齐全时才承诺实时行情。
- Tier List 放在首版后半段制作，但应尽早建立 URL；内容必须标明版本、适用阶段、评判维度和实测/社区依据。
- 首页向 Runes、Calculators、Drop Rates、Farming、Market、Pets、Tier List 等支柱页分配内链；内链不能替代外链。

## 2026-07-19：SEO 手册内容边界

- `/Users/zhaobingkun/doc/SEO-SITE-PLAYBOOK.md` 只保存跨项目可复用的方法，不加入 Task Bar Hero 的具体关键词、KD、竞品或页面规划。
- Task Bar Hero 的分析资料只记录在本项目 `memory.md` 中。

## 2026-07-19：窗口期与上线时限

- SERP 已出现 Mobalytics 等高权重媒体的泛页面占位，预计专业媒体或 Fandom 深入后关键词难度会快速上升。
- 项目目标：核心页面不能拖到 2-3 个月后才开始做；应在 14 天内完成可上线 MVP，30 天内完成第一轮 6 个支柱方向，随后用剩余窗口获取排名和迭代。
- 首发顺序：Homepage → Runes/Rune Tree → Calculators/Chest Timer → Drop Rates/Drop Finder → EXP Farming → Market/Pets → Tier List。
- 其中 Market 受数据源约束，Codes 受真实性验证约束；不应为了赶时间发布虚假、空壳或过期页面。
- 2-3 个月是冲排名与积累引用的窗口，不是开发周期。

## 2026-07-19：1-2 天首版交付边界

- 当前工作区只有 `agents.md` 和 `memory.md`，尚无网站代码与游戏数据。
- 在域名/品牌、部署目标和基础数据可用的前提下，可在 1-2 天完成并上线英文 SEO MVP。
- MVP 包括：首页、核心导航与 Hub、6 个关键词承接页的可索引骨架、至少 1 个真实可用工具、基础数据库数据页、响应式设计、robots、sitemap、canonical、OG/Twitter、JSON-LD、404、隐私页和基础分析接入位。
- 不能在 1-2 天内保证：Google 收录或排名、完整实时市场数据、全部掉率真实性、成熟社区 Build 系统、完整多语言、经过长期实测的 Tier List。
- 若原始游戏数据缺失，首版应优先发布能核验的内容与工具，不用猜测数据填满页面。

## 2026-07-19：首版实施启动

- 已创建首版静态网站，项目同步位置：`/Users/zhaobingkun/dev/taskbarhero`。
- 当前品牌为 Task Bar Hero Atlas（界面缩写 `TBH Atlas`），规范域名确定为 `https://taskbarheroatlas.com/`；canonical、sitemap、OG URL 与结构化数据均已切换到正式域名。
- 首版已完成：首页、原创像素风首屏图、核心导航、关键词承接模块、Rune Tree 交互、Chest Timer、站内快速查询、基础 SEO 元数据、JSON-LD、robots、sitemap、About/免责声明。
- 已本地验证原始 HTML 中存在标题、唯一 H1、H2、正文、内链与结构化数据；首屏图片加载正常；搜索、计时器和符文选择交互正常。
- 原创视觉由图像生成工具产出，保存为 `assets/rune-hero.png`，未使用现成游戏人物或 UI 资产。

## 2026-07-19：首批可索引页面已完成

- 已建立并互链 6 个首批承接页：`/runes/`、`/rune-tree/`、`/calculators/chest-timer/`、`/drop-rates/`、`/guides/exp-farm/`、`/tier-list/`。
- 每页均具备唯一 title、description、canonical、OG、单一 H1、首屏答案、语义化正文、相关页内链与 Article/WebApplication JSON-LD；所有核心正文在静态 HTML 中，不依赖 JavaScript 才可抓取。
- Chest Timer 是首版实际可用的本地浏览器计时器。30/60 分钟是个人预设，不代表官方胸箱冷却时间；关闭页面后不会持久保存或推送通知。
- Drop Rates、Tier List、Rune Tree 和 EXP Farm 页面已明确数据边界：未有当前版本可核验证据时不发布虚构数值、万能路线或静态“最强”结论。后续添加数据必须同时标明版本、来源、更新日期和证据状态。
- `sitemap.xml` 与 `robots.txt` 已更新到正式域名并包含这 6 个 URL；新增站点 favicon。首页快速查询已改为直接链接到对应 URL，而不是只在首页滚动。
- 本地 HTTP 检查确认 `/runes/` 与 `/calculators/chest-timer/` 返回 200；还应在正式部署后复查 HTTPS、裸域/WWW 301、Search Console、sitemap 提交与站点统计代码。

## 2026-07-19：30 页英文首发骨架完成

- 站点现有 30 个可索引 HTML 页面（含首页）。新增 23 页覆盖 Tools、Guides、Builds、Database 四个 Hub，以及 Stages、Skills、Gear、Pets、Market、Codes、Updates、Beginner Guide、Gold Farm、Gear Guide、Stage Progression、Beginner Build、三类 Rune 意图、两类 Drops 意图和两类 Tier List 意图。
- URL 按搜索意图拆分：Hub 承接集合词，子页承接明确问题；每页保持唯一 title、description、canonical、单一 H1、首屏答案、JSON-LD 和自然回链。
- `market`、`codes`、`drop`、`tier` 等高风险内容页以数据验证说明和方法作为当前真实内容，不包含虚构实时价格、兑换码、掉率或最终排名；获得官方/可验证数据后在原 URL 迭代。
- sitemap 已列出 30 个规范 URL。首版页面关系覆盖首页 → Hub → 长尾页，并通过 related links 回到相邻意图页。
- 自动静态检查结果：30 个页面均有 title、H1、canonical、JSON-LD 和 OG title；正式部署前仍须做一次线上逐 URL HTTP、移动端、HTTPS 重定向与 Search Console 验证。

## 2026-07-19：首页信息架构改版

- 用户反馈首页内容入口不够直接，已改为桌面端左侧常驻 Atlas Index、右侧内容流布局；移动端自动折叠为分组索引，不牺牲可用性。
- 左栏按 Start Here、Database、Tools & Routes、Community Notes 分类，直接链接 30 页首发结构中的核心资源。
- 右侧新增 Atlas at a glance：展示 30 页覆盖、6 个核心 desk、可用本地工具、当前追踪版本，以及 Runes/Farming/Build/Reference 四类快速目录；保留原有 Hero、搜索、工具、Build、数据库与指南内容。
- 设计参考 taskbarhero.wiki 的“低跳转、资料系统直达”信息架构，不复制其素材、文案或具体数据。

## 2026-07-19：全站持久左侧导航

- 首页之外的 29 个页面通过共享 `sidebar.js` 注入同一套 Atlas Index，并将页面正文置于右侧内容区；首页保留原生侧栏，脚本检测到后不重复创建。
- 左栏使用 sticky 定位，桌面端在页面切换后保持可访问；移动端切换为分组导航。当前栏目及其子路径会高亮。
- 导航属于交互增强，不承载 SEO 核心正文；各页的 H1、正文、canonical 与内链仍保留在原始静态 HTML。

## 2026-07-19：首页原创插画增强

- 为提升资料站的视觉密度，新增两张原创像素幻想插画：`assets/rune-atlas-tree.png`（首页主视觉和 OG 分享图）与 `assets/atlas-role-roster.png`（Build 区 Field Roster 横幅）。
- 画面均为独立生成的泛幻想角色与符文主题，不使用或复刻竞品截图、官方角色、游戏 UI、Logo 或文字；图片使用描述性 alt。

## 2026-07-19：全站情境配图

- 新增 `assets/atlas-farm-expedition.png`（Farming、Stages、Tools、Guides）和 `assets/atlas-loot-cache.png`（Drops、Gear、Market、Codes、Pets）。
- `sidebar.js` 根据子页 URL 在页面 Hero 下插入带 alt 的主题横幅：Rune/Reference、Build/Tier、Loot/Item、Farming/Progression 四类，覆盖首页以外的 29 页；首页保留自身主视觉与角色横幅。
- 配图是 UI 增强，所有原始静态正文仍独立可抓取；后续若需要图片搜索流量，应在高价值页面补充静态图和独立图片 sitemap。

## 2026-07-19：上线前生产基础文件

- 新增 `404.html`（noindex 的自定义失效路由页）、`privacy/index.html`（noindex 隐私页）和 `_headers`（安全响应头与图片缓存策略）。30 个首发页页脚均增加 Privacy 链接。
- 新增 `site-config.js` 与 `analytics.js`。默认不收集统计；仅在 canonical HTTPS 主域且填入合法 GA4 `G-...` Measurement ID 时加载 Google Analytics。所有本地预览保持无统计。
- 新增 `DEPLOYMENT.md`，记录域名连接、HTTPS、www → apex 301、GA4、Search Console 与上线验收。HTTPS/裸域跳转必须在最终托管平台或 DNS 配置，不能由静态 HTML 自身完成。

## 2026-07-19：域名核验与建议

- WHOIS 核验：`taskbarhero.com` 由 Tesseract Studio 持有；`taskbarheroguide.com` 与 `tbhtools.com` 已被注册；`runedesk.com` 已被注册。
- 核验时可用的候选：`taskbarhero.gg`、`runedesk.gg`、`tbhatlas.com`、`tbhatlas.gg`（注册前仍需在注册商再次确认实时状态）。
- 推荐主域名：`tbhatlas.com`。理由：`.com`、短、可独立建立品牌、不像官方、便于未来扩展；首页和 title 仍直接承接 `Task Bar Hero` 主关键词。
- 若要更强的游戏识别度并接受更像粉丝站的定位，可注册 `taskbarhero.gg` 作为辅助防守域或主域；全站须明确“independent fan guide / not affiliated”且不要使用官方身份表述。
- 不建议选择已被注册者的近似 `.com` 变体；不要为了域名堆叠 `wiki`、`guide`、`tools` 等后缀来模仿竞争者。

## 2026-07-19：taskbarsuperhero.com 评估

- WHOIS 查询时显示 `taskbarsuperhero.com` 尚未注册，但不推荐作为主域名。
- 原因：`Taskbar Superhero` 与游戏正式名称 `Task Bar Hero` 不是同一个短语；多出的 `super` 会降低品牌词匹配和口头传播准确性，也容易使用户误以为是另一款游戏。
- 可以在价格低时作为防守域名注册并 301 到主站，但不应作为 SEO、品牌或 canonical 主域。

## 2026-07-19：task-bar-hero.net 与 .org 评估

- WHOIS 查询时显示 `task-bar-hero.net` 与 `task-bar-hero.org` 均未注册。
- 不推荐 `.org` 作为主站：与既有竞品 `taskbarhero.org` 过于接近，容易混淆、显得像官方或仿站，也会使品牌区分和未来风险变差。
- `.net` 相对可接受，但连字符降低口头传播与输入便利；精确匹配域名不是排名捷径，首页内容、数据质量、更新速度与链接结构更重要。
- 若必须在二者中选择，选 `task-bar-hero.net`，并明确显示 independent fan guide / not affiliated；更推荐仍以 `tbhatlas.com` 为主域名，将这类精确匹配域作为防守 301。

## 2026-07-19：taskbarheroatlas.com 评估

- WHOIS 查询时显示 `taskbarheroatlas.com` 未注册。
- 这是当前最平衡的候选：保留完整 `Task Bar Hero` 可读性，`.com` 有长期品牌价值，`Atlas` 说明资料/工具定位并与官方域名区分。
- 弱点是长度较 `tbhatlas.com` 更长，但无连字符、可直接理解；在当前单游戏站阶段，这一可读性优先级高于极致短域名。
- 若注册，建议采用品牌名 `Task Bar Hero Atlas` 或页面中更克制的 `TBH Atlas`，并全站使用“Independent fan guide and tools. Not affiliated with the developer.”免责声明。
- 精确词出现在域名里不是排名保证；域名选择后仍需依靠标题、H1、工具价值、更新速度、内链和真实引用获得排名。

## 2026-07-19：Vercel 首次部署与域名诊断

- GitHub 的 Vercel 回调已确认 `main` 的提交 `6e3f717` 构建并部署成功；最新生产部署地址为 `https://taskbarheroatlas-qxuc23oe8-zhaobingkuns-projects-b2b82dc8.vercel.app`。
- 自定义域 `https://taskbarheroatlas.com/` 返回 Vercel `NOT_FOUND`，且响应包含 `x-vercel-error: NOT_FOUND`。这说明 DNS 已到达 Vercel，但该域尚未被正确分配到当前 Vercel 项目的生产部署；不是 GitHub 仓库公开性、代码构建或重新部署失败。
- 处理顺序：在当前 Vercel 项目的 Settings → Domains 中确认 apex 域状态为 Valid Configuration 且归属 Production；如域名仍绑定在旧项目，先在旧项目解除，再添加到当前项目。用最新 `.vercel.app` 部署地址验证页面正常后，再复测 apex 域和 `www → apex` 跳转。
- 随后用户反馈默认别名 `taskbarheroatlas.vercel.app` 也不可访问。应在 Vercel 项目中同步确认 Settings → Git 的 Production Branch 为 `main`，在最新部署中使用 Promote to Production（若出现该操作），并检查 Settings → Deployment Protection 没有对 Production 启用 Vercel Authentication。若三者均正确仍不可访问，需以浏览器错误页和 Domains 截图排除项目别名/访问限制配置。
- 根因已由 Vercel Build and Deployment 截图确认：Framework 为 Other 且 Output Directory 未覆盖时，Vercel 的默认规则是“若 `public/` 存在则发布 `public/`”。仓库的 `public/` 仅有 `assets/rune-hero.png`，但真正的 `index.html` 和所有页面在根目录。因此构建成功却没有可服务首页。修复：在 Output Directory 打开 Override，填写 `.`，保存并重新部署；保持 Root Directory 为 `./`，不要移动或删除现有页面。
- 修复后公网验收通过：`https://taskbarheroatlas.com/`、`/runes/`、`/robots.txt` 和 `/sitemap.xml` 均返回 HTTP 200。下一步为在 Google Search Console 添加域名资源、验证 DNS、提交 sitemap，并用 URL Inspection 请求首页与核心 Hub 的抓取。

## 2026-07-20：站点图标更新

- 已将 `assets/favicon.svg` 更新为原创的 Task Bar Hero Atlas 图标：深色地图底、金色罗盘符文与青绿色中心点；不使用游戏官方 Logo 或角色资产。
- 全站 32 个 HTML 页面已统一引用此文件，因此无需逐页改动。推送后 Vercel 会自动发布；浏览器可能因 favicon 缓存需硬刷新后才显示新图标。
- 已由该 SVG 源导出 `assets/favicon.png`（512×512、RGBA），并将全站 32 个页面的 favicon 引用切换为 PNG；SVG 源保留，便于后续再导出不同尺寸。
- 本地预览目录为 `/Users/zhaobingkun/dev/taskbarhero`。PNG 已同步至该目录的 `assets/favicon.png`，其 32 个 HTML 页面也已切换为 PNG 引用；本地预览服务将直接使用它。
- 修正了本地预览目录保留旧 SVG 的同步遗漏；`dev/taskbarhero/assets/favicon.svg` 现与源项目 SVG 校验一致，PNG 即由这同一新版 SVG 导出。

## 2026-07-20：GA4 统计启用

- 已配置 GA4 Measurement ID `G-PTMY8DNK37`。`analytics.js` 仅在 `https://taskbarheroatlas.com` 加载 Google tag；本地、预览域名与非 HTTPS 环境不加载。
- 隐私页已同步为实际行为说明。上线后应在 GA4 Realtime 中打开正式首页确认首个访问事件；如果面向要求同意管理的地区投放广告或开展营销，再补充 Cookie Consent 机制与相应隐私披露。

## 2026-07-20：第一轮内容加厚与版本校正

- 官方 Steam Community 核验显示当前热修为 `v1.00.28`（2026-07-14）：修复特定情况下存档冲突导致的存档损坏，以及 Type B 物品无法在背包重新定位的问题。全站遗留的 `v1.00.17` 标签已统一改为 `v1.00.28`。
- 已重写 `/updates/`，加入当前热修摘要、官方/镜像来源、影响边界、检查日期和下一轮待验证专题；不从 Bug Fix 推导未公布的平衡、Rune、掉率或刷图结论。
- 已加厚 `/runes/`、`/rune-tree/` 与 `/guides/exp-farm/`：每页有静态原创配图、版本/证据边界、可重复测试模板、官方来源和 FAQ。原始 HTML 静态检查通过 title、H1、canonical、JSON-LD、带 alt 的图片；4 个页面均有静态 Banner。
- `sidebar.js` 已避免对已有静态 Banner 的页面再注入重复图片。后续新数据必须标记版本、来源、日期和证据类别。

## 2026-07-20：第二轮可验证数据库页

- 已加厚 `/stages/`：官方 Steam 商店页确认游戏有 3 Acts、4 个难度层级；页面只提供可重复的 push/farm 判断方法，不凭该事实推导最佳关卡。
- 已加厚 `/pets/`：官方 DLC 页面确认 Supporter Pack 有 Sword、Butterfly、Dragon，拥有即获得被动、无需装备；没有宣称未核验的具体数值或全局强度排序。
- 已加厚 `/market/`：官方路线图说明市场重开后最高三档物品曾临时限制上架，并计划在完成稳定性检查后于 7 月解除；页面明确这是计划状态，不写成已实施。Trade Ship Pack 的 5 个上架槽位也链接官方 DLC 来源。
- 三页均新增静态原创配图、检查日期、官方来源、FAQ、唯一 canonical/H1/JSON-LD，并通过静态 SEO 检查。

## 2026-07-20：首页 On-Page SEO 加厚

- 根据首页体检，Title 更新为 `Task Bar Hero Wiki, Builds, Runes & Tools | TBH Atlas`（53 字符）；Description、OG/Twitter 文案与唯一 H1 均强化主词与真实工具意图。
- 首屏 CTA 已从跳转子页改为首页内 `#chest-timer` 与 `#runes` 锚点，直接承接 Chest Timer 和 Rune helper；首页原本已有站内检索、计时器和 Rune 目标选择，体检的“无交互”判断不完整。
- 增加“Task Bar Hero Guide / How to use / Current coverage”静态正文与一个官方 Steam 来源链接。静态检查：唯一 H1、无失效 SearchAction、标题 53 字符、正文约 1297 词，满足 1200–1800 词目标区间。
- 后续体检发现完整词组 `Task Bar Hero` 在首页正文中出现 21 次，按 3 词占位密度约 5.05%。已将非必要正文重复改为自然指代，但保留 H1、Title、Description、首段和 3 个意图型 H2；静态可见正文现为约 1256 词、完整词组 10 次，约 2.39% 占位密度。

## 2026-07-20：第三轮 Beginner、Builds、Codes 内容

- `/beginner-guide/` 已补官方 DLC 获取事实：Priest 为免费职业 DLC，Hunter 与 Slayer 为单独付费职业 DLC；页面不从可获取性推导职业强度或必买结论。
- `/builds/` 已改为 Farming、Boss、Survival 三种活动的可测试框架；任何后续命名 Build 都必须带版本、目标、配置和可重复结果。
- `/codes/` 已核验 Steam 商店、DLC 与 Steam Community 官方来源。截至 2026-07-20，未发现可验证的兑换码或兑换入口；页面明确该结论只是当前核验结果，不声称未来不可能有 code。
- 三页添加静态原创图、FAQ、官方来源、版本与检查日期，并通过 title/H1/canonical/JSON-LD/alt 静态检查；已同步本地预览目录。
- 提交 `d4871f5` 与首页关键词自然化提交 `8105343` 已于本轮成功推送至 GitHub `main`；Vercel 已具备自动部署触发条件，正式站点是否完成切换仍应以 Vercel Deployment 状态或浏览器硬刷新复核。

## 2026-07-20：PSI 性能与无障碍优化

- PSI 报告的主要移动端瓶颈为首页的 `rune-atlas-tree.png`（约 1.9 MB）和 Google Fonts 的 CSS 内部 `@import` 请求链；桌面端还会下载第二张约 1.8 MB 的角色图。
- 已将 4 张 Atlas 原创配图转为 WebP（约 72–132 KB）并替换全站 HTML 引用；首页首屏图保留尺寸与 alt、改为高优先级 preload，非首屏图继续 lazy load。
- 已删除 CSS 内部字体 `@import`，在每个页面 head 加 Google Fonts 预连接和异步字体 stylesheet（保留 noscript 回退）；保留原字体与视觉风格。
- 首页目录链接提高为 28px 最小高度并留出间距；数据库 eyebrow 对比色调深；首页品牌链接 accessible name 现在以可见的 `TBHATLAS` 开头。
- `PERFORMANCE-OPTIMIZATION.md` 记录了 P0/P1 已完成项和两项待用户决策：GA4 延迟加载会漏记极短跳出访问；Cloudflare Insights beacon 的缓存告警只能通过关闭对应第三方分析解决。
- 第二次 PSI 复测提升到桌面 Performance 97、移动 72、其余三项均为 100。为继续解决移动端 FCP/LCP，首页已内联首屏关键 CSS，并将完整 `styles.css` 改为异步加载，消除首页渲染关键 CSS 请求链。
- 新增 768px（约 22 KB）与 960px（约 36 KB）Hero WebP，通过 `srcset`、`sizes` 和响应式 preload 让手机不再下载 124 KB 的桌面图；本地首页与 768px 图片 HTTP 均返回 200。
- 浏览器控制插件无法访问本机 `127.0.0.1:4173`，但本机 `curl` 验收成功；这是浏览器插件与本地服务的访问隔离，不是页面错误。
