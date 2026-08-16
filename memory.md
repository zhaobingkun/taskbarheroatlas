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

## 2026-07-21：首份 Google Search Console 搜索表现信号

- 用户提供的 GSC「过去 3 个月 / 网页搜索」导出实际仅有 2026-07-19 一天的 7 次展示、0 次点击；站点仍处于极早期，不能据此判断 CTR、国家分布或稳定排名趋势。
- 最强的可行动信号是 `/calculators/chest-timer/`：查询 `task bar hero chest cooldown` 获 3 次展示、平均排名 8.33；页面自身同样是 3 次展示、平均排名 8.33。说明 Google 已把工具页与胸箱冷却意图关联。
- 首页获得 3 次展示、平均排名 15；`/runes/` 获 2 次展示、平均排名 17。另有 `task bar hero`（平均 15）、`runes task bar hero`（25）与 `task bar hero wiki`（26）的早期测试信号。
- 现阶段不应根据 7 次展示改写页面或加关键词；Chest Timer 已明确不把 30/60 分钟预设说成官方冷却，继续保留该真实性边界。下一步应观察至少 14 天或达到约 50-100 次展示后，再用 GSC 查询词决定加厚页面；优先顺序为 Chest Timer、Runes/Rune Tree、Beginner Guide/Skills。
- Query、Page、Country 各维度汇总略有不一致属于 GSC 低量数据的隐私阈值/四舍五入和不同维度聚合现象，不应强行相加比较。
- 用户报告 GA4 已有约 89 名访问用户。GA4 的浏览器事件可来自直接访问、分享链接、测试或推荐流量，不能视为 Google 自然搜索收录证明；应在 GA4 的 Traffic acquisition 用 `Session source / medium` 区分 `(direct) / (none)`、`google / organic` 与 referral。
- 已删除 CSS 内部字体 `@import`，在每个页面 head 加 Google Fonts 预连接和异步字体 stylesheet（保留 noscript 回退）；保留原字体与视觉风格。
- 首页目录链接提高为 28px 最小高度并留出间距；数据库 eyebrow 对比色调深；首页品牌链接 accessible name 现在以可见的 `TBHATLAS` 开头。
- `PERFORMANCE-OPTIMIZATION.md` 记录了 P0/P1 已完成项和两项待用户决策：GA4 延迟加载会漏记极短跳出访问；Cloudflare Insights beacon 的缓存告警只能通过关闭对应第三方分析解决。
- 第二次 PSI 复测提升到桌面 Performance 97、移动 72、其余三项均为 100。为继续解决移动端 FCP/LCP，首页已内联首屏关键 CSS，并将完整 `styles.css` 改为异步加载，消除首页渲染关键 CSS 请求链。
- 新增 768px（约 22 KB）与 960px（约 36 KB）Hero WebP，通过 `srcset`、`sizes` 和响应式 preload 让手机不再下载 124 KB 的桌面图；本地首页与 768px 图片 HTTP 均返回 200。
- 浏览器控制插件无法访问本机 `127.0.0.1:4173`，但本机 `curl` 验收成功；这是浏览器插件与本地服务的访问隔离，不是页面错误。

## 2026-07-21：图片性能补漏

- 线上首页 HTML 已确认包含响应式 Hero WebP、图片 preload 与异步 `styles.css`，说明 Vercel 生产环境已吃到上一轮首页性能提交。
- PSI API 本轮长时间未返回，已停止后台 `curl` 请求；不能把本轮 PSI 分数作为已复测结论。
- 发现 `sidebar.js` 仍会在部分子页注入旧 PNG 横幅，已改为对应 WebP，避免子页下载 1.6–2.1 MB 原图。
- `/calculators/chest-timer/`、`/drop-rates/`、`/tier-list/` 的 `og:image` 已从旧 `rune-hero.png` 改为现有 WebP 分享图；静态检查确认代码中不再引用旧大 PNG，favicon PNG 除外。
- GA4 延迟加载和 Cloudflare Insights 关闭仍属于统计取舍项；未在未确认前改动。

## 2026-07-22：社区推广素材包

- 新增 `OUTREACH-KIT.md`：为 Steam Community、Discord、r/TBHTaskBarHero、r/TaskBarHeroes 准备 Chest Timer 和 Rune guide 的透明披露式分享文案、对应 UTM 链接格式、节奏、规则边界与回复模板。
- 推广以真实玩家价值和直接相关的问答为前提，不购买外链、不批量复制帖子、不假称官方；优先推广已有早期 GSC 信号的 Chest Timer，再根据反馈推广 Rune guide。

## 2026-07-22：Steam Guide 草稿与账户限制

- Steam 的 Guide 编辑 URL 在未登录/受限状态会落到通用创意工坊浏览页；官方规则也说明受限账户不能创建公开 Steam Guides，解除后仍需遵守游戏社区的拥有/游玩和频率限制。
- 已新增 `STEAM-GUIDE-BEGINNER-DRAFT.md`：一篇独立的“先找当前卡点、再做单变量测试”的英文新手路线草稿，避免把站内页面原样复制到 Steam。文末仅保留一个可选的 Chest Timer 链接并明确它不是官方冷却数据。

## 2026-07-24：Google 索引与域名规范化复查

- `site:taskbarheroatlas.com` 已出现首页结果，Google 搜索结果标注抓取时间为前一天；因此站点并非完全未收录。GSC 的 Page Indexing / URL Inspection 报告可能仍有延迟，或用户检查的是另一个 URL 版本。
- 线上首页、`robots.txt` 与 `sitemap.xml` 都返回 HTTP 200；robots 允许抓取，sitemap 使用 apex URL。
- 发现需要修复的规范化问题：`https://www.taskbarheroatlas.com/` 和裸域首页都返回 200，而全站 canonical 和 sitemap 指向裸域 `https://taskbarheroatlas.com/`。应在 Vercel Settings -> Domains 显式把 `www.taskbarheroatlas.com` 301 Redirect to `taskbarheroatlas.com`（或反向统一到 www 并同步全站 canonical/sitemap），不能继续让两个版本同时返回 200。

## 2026-07-27：本地交付状态复查

- 当前工作区已有 `OUTREACH-KIT.md` 和 `STEAM-GUIDE-BEGINNER-DRAFT.md` 两份本地草稿；内容已包含披露、规则边界、UTM 链接、发布节奏、回复模板、Steam Guide 正文和最终发布检查表。
- 这些内容只是本地交付草稿，尚未发布到 Steam、Reddit、Discord 或其他外部平台；发布前仍需用户登录对应账号并确认社区规则、Steam 账号权限、当前官方版本和封面图。
- Git 状态仍有未提交改动：`memory.md`、`OUTREACH-KIT.md`、`STEAM-GUIDE-BEGINNER-DRAFT.md`。

## 2026-07-27：是否需要更新的复查结论

- 需要更新。官方 Steam Community 当前已显示 `Hotfix Update - ver 1.01.02`（Jul 23），而线上 `taskbarheroatlas.com` 首页和 `/updates/` 仍标注 `v1.00.28`、Last checked Jul 20, 2026。
- 官方页还出现 7 月 25 日起服务器不稳定和物品消失的恢复公告；这属于高优先级玩家风险信息，应在 `/updates/` 和相关安全/market/guide 页面中说明，不应继续只停留在 `v1.00.28` 存档修复语境。
- 此前记录的 `www.taskbarheroatlas.com` 与裸域同时 200 的规范化问题，当前线上复查显示 `www` 已重定向到裸域；这项不再是待修复重点。
- 同步需要改：全站版本标签、首页版本文案、`/updates/` patch desk、Steam Guide 草稿中的 checked version/date、以及任何提到 `v1.00.28` 作为当前版本的页面或推广素材。

## 2026-07-27：v1.01.02 内容更新完成

- 已将站内当前版本展示从 `v1.00.28` 同步为 `v1.01.02`，覆盖首页、共享侧栏、核心页面 patch chip、可见检查日期、meta description 与 Article `dateModified`。
- 已重写 `/updates/`：当前版本标记为 `v1.01.02`，补入 `v1.01.00` 高等级物品交易恢复/平衡更新语境，以及 7 月 25 日后服务器不稳定和物品消失公告的玩家风险提示；继续明确不从 hotfix 推导 Rune、掉率、EXP 路线或永久 build 排名。
- 已更新 `/market/`：不再把高等级物品交易只写成未来计划，改为按 `v1.01.00` 官方更新标题处理；仍要求价格、流动性和物品状态带时间戳与来源。
- 已更新 `/gear/`、`/guides/gear-guide/`、`/drops/gear/`：增加物品消失/服务器风险后的库存状态确认提醒，避免玩家在不稳定窗口证据上交易、分解或定价。
- 已更新 `STEAM-GUIDE-BEGINNER-DRAFT.md` 的检查版本与日期为 `v1.01.02` / July 27, 2026。
- 顺手补齐 `404.html` 的 meta description 与 canonical，避免 noindex 失效页在基础 SEO 检查中缺项。
- 静态验证：32 个 HTML 文件均保持单一 H1、title、description、canonical 基础项；关键页面 `index.html`、`updates/index.html`、`market/index.html`、`runes/index.html`、`rune-tree/index.html`、`guides/exp-farm/index.html` 均保留 JSON-LD；站内无旧 `Tracking v1.00.28` 或旧可见 `CHECKED JUL 20/22` 残留。
- 本地提交已创建；推送 GitHub 时两次连接 `github.com:443` 超时，因此 Vercel 自动部署尚未触发。网络恢复后执行 `git push` 即可发布该提交。

## 2026-07-27：Google 索引状态诊断

- `site:taskbarheroatlas.com` 当前能看到首页结果，但 URL 显示为 `https://www.taskbarheroatlas.com/`，搜索缓存内容仍是 `v1.00.28`，抓取时间显示约 4 天前；因此不是完全未索引，而是首页已入库、子页尚未明显放出，且 Google 尚未看到本地 `v1.01.02` 提交。
- 当前本地 `main` 仍比 `origin/main` ahead 1，因为 GitHub 推送超时，线上 Vercel 仍停留在 7 月 21-23 日左右的旧部署；这会导致 GSC/Google 看到的页面与本地改动不一致。
- 线上 robots.txt 允许抓取，sitemap.xml 可列出 30 个主要 URL，`www` 当前会 308 跳到裸域，这些不是主要阻塞点。
- sitemap 当前没有 `<lastmod>`，且 Google 官方说明会忽略 `priority`/`changefreq`；后续应给重点 URL 补真实 `lastmod`，特别是首页、updates、market、runes、rune-tree、chest-timer 和 exp-farm。
- 现阶段更可能的原因：新域名和新站时间太短、外部引用少、子页内容大量是版本边界/方法论而非实测数据、Google 需要先评估内容质量与 canonical；不是因为使用 AI 生成内容本身被禁止。

## 2026-07-27：sitemap lastmod 补强

- 已给 `sitemap.xml` 的 30 个公开 URL 全部补入 `<lastmod>2026-07-27</lastmod>`，对应本轮全站版本、检查日期和重点内容更新。
- 本地脚本验证：`<url>`、`<loc>`、`<lastmod>2026-07-27</lastmod>` 数量均为 30。
- 推送上线后应在 GSC 重新提交 sitemap，并优先请求首页、`/updates/`、`/market/`、`/runes/`、`/rune-tree/`、`/calculators/chest-timer/`、`/guides/exp-farm/` 抓取。

## 2026-07-27：GitHub 推送与线上部署确认

- 本地提交 `456f528` 已成功推送到 GitHub `main`，之前的 `main...origin/main [ahead 1]` 状态已清除。
- 生产站 `https://taskbarheroatlas.com/` 返回 HTTP 200，`Last-Modified: Mon, 27 Jul 2026 10:17:48 GMT`，`x-vercel-cache: MISS`，说明 Vercel 已开始服务新部署。
- `https://taskbarheroatlas.com/updates/` 返回 HTTP 200，`Last-Modified: Mon, 27 Jul 2026 10:18:11 GMT`；`https://www.taskbarheroatlas.com/` 仍 308 跳转到裸域。
- 当前本机对裸域 GET/sitemap 内容读取有间歇 DNS 失败，不能据此判定线上正文为空；应以浏览器、Vercel 部署详情或稍后 `curl` 复查正文内容。

## 2026-07-28：GSC 覆盖状态解释与 favicon 404

- 用户收到 GSC 新原因：备用网页（有适当的规范标记）、网页会自动重定向、被 `noindex` 标记排除、未找到 404。
- 本地验证：sitemap 的 30 个 URL 都有对应 HTML 文件，canonical 均自指到 sitemap URL，且 sitemap URL 中没有 `noindex`。
- `noindex` 仅存在于 `privacy/index.html` 和 `404.html`，属于低价值/错误页的预期排除，不应作为主页面索引问题处理。
- `www` 到裸域的 308，以及可能的 HTTP 到 HTTPS、无尾斜杠到尾斜杠，都属于预期重定向；GSC 会把被重定向的 URL 列为“网页会自动重定向”，这不是错误。
- 线上 `https://taskbarheroatlas.com/favicon.ico` 返回 404；已新增根目录 `favicon.ico` 兜底，避免浏览器和 Google 默认探测 favicon 时产生无意义 404。
- 后续仍需用户在 GSC 的每个原因里看“示例网址”：如果示例是 `www`、`/privacy/`、`/404.html`、`/favicon.ico` 或旧错误 URL，通常无需紧急处理；如果示例是 sitemap 中的主内容页，再逐条诊断。

## 2026-07-28：博客评论外链 CSV 初筛

- 用户提供 `/Users/zhaobingkun/Documents/外链-博客.csv`，共 308 条 URL、308 个不同域名，只有一列 `url`；约 260 条是 `/post/` 页面。
- 样例和粗分类显示绝大多数是教育、机构、金融、宗教、生活方式、企业博客等杂项页面，和 Task Bar Hero / 游戏工具主题不相关；关键词粗筛只有约 5 条可能和 gaming 有弱相关。
- 结论：不应自动批量发布博客评论外链。该做法容易被视为评论垃圾、低相关外链或链接操纵；最多只能把少量高度相关页面作为人工、透明、实质性评论候选。
- 可合规继续做：从列表中筛出 gaming/工具/社区相关页面，逐个检查是否允许评论、是否相关、是否 nofollow/ugc，再准备少量非模板化评论草稿；优先推广 Chest Timer 或 Rune guide，而不是首页硬广。

## 2026-07-28：AI 外链 CSV 初筛

- 用户提供 `/Users/zhaobingkun/Documents/外链ai .csv`，共 8309 行、8239 个唯一 URL、8146 个唯一 host，只有一列 `url`。
- 该列表主要是 AI 工具官网/落地页清单，不是评论页或投稿页清单：8039 个 URL 带联盟或追踪参数，7383 个带 `utm_source`，7799 个 URL 含 `toolify`，7800 个是首页路径加查询参数。
- 顶级域以 `.com`、`.ai`、`.io`、`.app` 为主；样例包含 Genspark、Jasper、Writesonic、SurferSEO、Rytr 等 AI/SEO 工具官网或联盟跳转。
- 结论：这份 CSV 不适合作为 Task Bar Hero 外链执行清单，也不能自动发布外链；它更适合做 AI 工具站的竞品/目录数据源、替代品页面选题或商业词研究。
- 如后续要做 AI 站外链，应另找可明确提交的目录页、产品发布页或社区规则允许的相关讨论页，并人工透明提交；不要用该表批量请求/评论/注册。

## 2026-07-28：AI 工具站选题初筛

- 已基于 `/Users/zhaobingkun/Documents/外链ai .csv` 生成本地报告 `AI-TOOLS-OPPORTUNITY-REPORT.md`，将 8239 个唯一 URL 粗分为 Image/Design、Chatbot/Agent、Marketing/Sales、SEO/Content、Video/Audio、Coding/Developer、Education、Data/Research 等方向。
- 不建议做泛 `AI tools directory`：Futurepedia、Toolify 等目录站已经成熟，CSV 本身也显示大量 Toolify 来源和联盟追踪链接，新站直接做工具大全容易变成低差异化目录。
- 最推荐方向：`AI Coding Tools Benchmark / AI Developer Tools Guide`。原因不是数量最大，而是可通过真实 repo、真实 bug、同一 prompt、同一评分表做可重复 benchmark，形成原创经验与证据。
- 第二梯队方向：AI Video/Audio tools for creators、AI SEO/Content tools for small sites、AI Study/Teacher tools、AI Product Photo/Ecommerce tools。每个方向都必须窄化到具体使用场景，不做泛目录。
- 下一步如继续：先二次抓取/人工核验 coding 工具的 title、description、pricing、affiliate 状态，再规划 20-30 页静态 MVP，包括 tools、benchmarks、comparisons、use-cases 四类页面。

## 2026-07-28：AI 导航站可行性判断

- 可以用 `/Users/zhaobingkun/Documents/外链ai .csv` 做 AI 导航站的数据种子，但不能把 8239 个 URL 直接批量生成 8239 个可索引详情页；这会变成低原创、低验证的工具目录，收录和质量风险都高。
- 首版应先清洗 URL：按 host 去重，去掉 `utm_source`、`via`、`fpr`、`ref`、`aff` 等追踪/联盟参数，使用官方干净 URL 作为出站链接。
- 推荐发布策略：300-800 个精选工具列表、100-300 个已补齐信息的详情页、10-14 个分类 Hub、20-40 个集合/对比页；信息不足的工具先留在后台数据表，不建索引页。
- 导航站要有差异化：人工精选、明确分类、价格/免费层/登录要求/更新时间、方法论页、Submit Tool 页、实测或使用场景；后续用 benchmark 和 comparison 页面获取真正 SEO 增量。
- 已把 AI 导航站方案补入 `AI-TOOLS-OPPORTUNITY-REPORT.md`。

## 2026-07-30：GSC 过去 24 小时表现复查

- 用户提供 GSC 导出目录 `/Users/zhaobingkun/Downloads/taskbarheroatlas.com-Performance-on-Search-2026-07-30/`，过滤器显示为网页搜索、过去 24 小时。
- 站点不是完全无曝光：国家/设备维度合计为 2 次点击、175 次展示；页面维度为 2 次点击、181 次展示；查询维度为 2 次点击、76 次展示。查询维度较小应视为 GSC 低量数据隐藏/聚合差异，不能强行相加。
- 唯一有点击的页面是 `/builds/`，对应查询 `task bar hero build` 与 `task bar hero builds`；build 意图应列为最高优先级加厚方向。
- 最强未点击机会是 `tbh rune tree`：6 展示、平均排名 5.83；应加厚 `/rune-tree/`，自然覆盖 `TBH Rune Tree`、`rune map`、`full rune tree`、`all runes`，并明确 `/runes/` 与 `/rune-tree/` 的意图分工。
- `/drop-rates/` 有 16 展示、平均排名 14.12，且 `task bar hero drop rates` 查询平均排名 7.5；应补 Chest drops、gear drops、stage drops、样本记录模板和官方/未验证边界。
- `/codes/` 有 11 展示、平均排名 8.91，`task bar hero code/codes` 排名 4-7；需要保持官方核验日期和直接答案，绝不能编造兑换码。
- `/calculators/`、`/stages/`、`/updates/` 已有早期曝光，应作为 P1 加厚方向；`www` 页面仍在 GSC 出现，但线上复查 `www` 已 308 到裸域，裸域页面 200，sitemap 只列裸域，当前不是主阻塞。
- 已生成本地报告 `GSC-PERFORMANCE-2026-07-30.md`。执行顺序建议：`/builds/` → `/rune-tree/` + `/runes/` → `/drop-rates/` → `/codes/` → `/calculators/` → `/stages/`。

## 2026-07-30：GSC 过去 28 天表现复查

- 用户随后提供 28 天 GSC 导出目录 `/Users/zhaobingkun/Downloads/taskbarheroatlas.com-Performance-on-Search-2026-07-30 (1)/`，过滤器为网页搜索、过去 28 天；图表实际从 2026-07-19 开始有有效展示。
- 页面维度：24 点击、865 展示、CTR 2.77%、加权平均排名约 17.82；国家/设备维度：24 点击、791 展示、CTR 3.03%；查询维度：12 点击、324 展示、CTR 3.70%，低于页面维度属于 GSC 隐藏查询/聚合差异。
- 日期趋势从 7 月 19 日 7 展示增至 7 月 27 日 158 展示，说明 Google 正在扩大查询和页面覆盖；平均排名变低主要是更多低位长尾加入，不代表站点失败。
- 页面优先级从 24 小时报告调整为：`/drop-rates/` 第一（5 点击、113 展示）、`/builds/` 第二（5 点击、33 展示、CTR 15.15%）、`/codes/` 第三（4 点击、79 展示、平均排名 5.85）、`/runes/` + `/rune-tree/` 第四（`/runes/` 129 展示但 0 点击，是最大 CTR 漏斗）。
- 高价值查询：`tbh rune tree` 9 展示、排名 7.22 但 0 点击；`tbh drop rate` 9 展示、排名 10；`task bar hero build` 7 展示、2 点击、排名 5.43；`taskbar hero redeem code` 5 展示、排名 4；`task bar hero chest cooldown` 4 展示、排名 8.5。
- 国家信号：巴西 8 点击/57 展示，越南 3 点击/120 展示，印尼 2 点击/84 展示，阿根廷 2 点击/12 展示；多语言有潜在方向，但当前仍不建议立即上线，应先加厚英文页，后续若持续验证再考虑葡语、越南语、印尼语、土耳其语或西语。
- `www` URL 在 28 天页面报告中仍有 9 个，但当前线上已复查为 `www` 308 到裸域、裸域 200、sitemap 只列裸域；不要把它列为 P0 技术问题。
- 已生成本地报告 `GSC-PERFORMANCE-2026-07-30-28D.md`。下一步建议：加厚 `/drop-rates/` → `/builds/` → `/codes/` → `/runes/` + `/rune-tree/` → `/calculators/chest-timer/` → `/guides/stage-progression/` + `/stages/`，并同步 sitemap lastmod。

## 2026-07-30：按 GSC 28 天信号加厚 P0 页面

- 用户确认暂不做多语言，并要求按 GSC 28 天建议更新。已本地更新 6 个英文页面，未推送上线：`/drop-rates/`、`/builds/`、`/codes/`、`/runes/`、`/rune-tree/`、`/calculators/chest-timer/`。
- `/drop-rates/` 改为首屏直接回答当前无官方通用掉率表，新增 chest drops、gear drops、stage drops、sample log、sample size、drop source vs drop rate 等内容，承接 `tbh drop rate`、`taskbar hero drop rate`、`chest drop rate`、`chest cooldown` 查询，同时继续不编造百分比。
- `/builds/` 改为 farming / boss / survival / beginner build 框架，覆盖 `task bar hero build`、`tbh build`、`best build`、class-specific build 等意图；继续要求 patch、activity、assumptions 和 repeatable result，不发布未验证“最强 build”。
- `/codes/` 加强 `codes`、`redeem code`、`gift code`、`TBH codes` 语义，首屏明确截至 2026-07-30 未找到 verified active codes、redeem method 或 gift codes；保留官方来源检查和反 code generator 安全提示。
- `/runes/` 重新定位为 Rune Guide Hub，承接 Task Bar Hero runes、best runes、clear-speed、boss-damage、survival 等意图；`/rune-tree/` 重新定位为 TBH Rune Tree / full rune tree / rune map / rune planner 页面，避免两个页面争同一意图。
- `/calculators/chest-timer/` 加强 chest cooldown vs personal timer 的区别，明确 30/60 min 是个人提醒预设，不是官方冷却数据。
- `sitemap.xml` 已把上述 6 个 URL 的 `<lastmod>` 更新为 `2026-07-30`。静态验证：6 个改动页面 title、description、canonical、单一 H1、JSON-LD、站内链接目标均通过；全站 32 个 HTML 基础 SEO 检查通过，0 个失败。

## 2026-07-30：GSC 页面更新发布确认

- 已将按 GSC 28 天信号加厚的页面更新提交为 `82a7410 Update SEO pages from GSC signals` 并推送到 GitHub `main`；首次 `git push` 遇到 GitHub `Empty reply from server`，提升权限重试后成功。
- 线上复查：`https://taskbarheroatlas.com/drop-rates/` 与 `https://taskbarheroatlas.com/builds/` 均返回 HTTP 200，`Last-Modified: Thu, 30 Jul 2026 04:31:55 GMT`，页面源码已显示新 title 和 2026-07-30 更新内容。
- 线上 `https://taskbarheroatlas.com/sitemap.xml` 返回 HTTP 200，复查内容已包含 6 个改动 URL 的 `<lastmod>2026-07-30</lastmod>`：`/runes/`、`/rune-tree/`、`/calculators/chest-timer/`、`/drop-rates/`、`/builds/`、`/codes/`。
- 发布后建议在 GSC 重新提交 sitemap，并优先请求抓取 `/drop-rates/`、`/builds/`、`/codes/`、`/runes/`、`/rune-tree/`、`/calculators/chest-timer/`。

## 2026-08-02：v1.01.04 全站同步与官方范围校正

- 已直接复查官方 Steam Community 全部新闻页；截至 2026-08-02，最新可见版本公告为 7 月 31 日发布的 `Hotfix Update - ver 1.01.04`。
- `v1.01.04` 公告本身只有两项修复：特定情况下服务器物品验证结果窗口无法关闭，以及部分物品无法移动、合成等操作。7 月 30 日的物品恢复/热修复公告包含邮箱、宝箱、恢复显示、Slayer 技能等更广范围内容，两次公告不能混写。
- 已把全站当前版本标签、核心页面检查日期、相关 JSON-LD `dateModified`、Steam Guide 草稿和 `sitemap.xml` 同步到 `v1.01.04` / `2026-08-02`；历史 `v1.01.00` 交易更新仍保留为历史语境。
- `/updates/` 已分开说明 7 月 31 日 `v1.01.04` 与 7 月 30 日恢复热修复，移除未在当前官方新闻流中确认的 `v1.01.03` 和 `Memorial Coin` 表述，不从稳定性修复推导 Rune、掉率、EXP 路线或永久 build 排名。
- 修复既有重复 title：`/guides/gear-guide/` 改为 `Task Bar Hero Gear Upgrade Guide | TBH Atlas`，与 `/gear/` 的数据库型 Gear Guide 区分。
- 静态验证通过：32 个 HTML 文件均有唯一 title、唯一 meta description、canonical、单一 H1；JSON-LD 可解析；站内链接目标存在；`sitemap.xml` 30 个 URL 可解析；`git diff --check` 和版本/日期残留检查通过。
- 已创建提交 `1403e0e Sync site with Task Bar Hero v1.01.04`、`994b4ca Record v1.01.04 deployment push` 并成功推送到 GitHub `origin/main`；线上 `/updates/` 返回 HTTP 200，源码含 `v1.01.04`，线上 `sitemap.xml` 含 `2026-08-02`。

## 2026-08-02：每日官方更新自动化

- 已在 Codex App 创建并启用项目级自动化 `task-bar-hero-daily-official-update`，按 Asia/Shanghai 本地时间每天 09:00 运行。
- 自动化先读取 `agents.md` / `memory.md` 并检查工作区；发现未提交改动时跳过，避免覆盖手工工作。
- 有新的官方 Steam 公告时，自动核对事实、更新 `/updates/`，必要时创建独立 SEO 页面，更新 sitemap 和受影响页面，然后运行静态 SEO/链接验证，通过后执行 commit 与 `git push origin main`。
- 没有新公告时不修改、不提交、不推送；验证失败或推送失败时保留现场并报告，不 force push、不 reset、不删除用户文件。
- “自动发布”依赖现有 GitHub `main` 到托管平台的自动部署链路；自动化本身负责生成页面、提交和 push。

## 2026-08-08：官方补偿邮件最终重发公告

- 官方 Steam Community 全部新闻页最新可见公告为 `Server Outage Compensation Mail: Second (Final) Resend Completed`，页面显示 Aug 6；公告确认针对符合条件且未正确收到补偿邮件的玩家，第二次也是最终一次重发已完成，审核依据为 Aug 1 前提交的相关报告，并明确不再提供额外重发或单独补偿发放。
- 该公告是服务/补偿状态通知，不是版本更新；当前官方版本仍为 `v1.01.04`。本次不从公告推导 Rune 数值、掉率、Build、EXP 路线、排名或新奖励数值，也不改动受影响页面的当前版本标签。
- 已更新 `/updates/` 的官方状态表、补偿公告解释、FAQ、检查日期、JSON-LD `dateModified` 和官方新闻链接；同步更新首页 patch desk 摘要，并将首页与 `/updates/` 的 sitemap `lastmod` 更新为 `2026-08-08`。没有新建独立 SEO 页面：该服务通知适合归档在已有公告 Hub，单独页面会造成薄内容和重复意图。
- 静态验证通过：32 个 HTML 文件均有 title、meta description、canonical、单一 H1；JSON-LD 可解析；站内链接目标存在；`sitemap.xml` 可解析；`git diff --check` 通过。

## 2026-08-12：v1.01.05 官方更新同步

- 官方 Steam Community 全部新闻页最新可见公告为 `[1.01.05] Bug Fixes`，页面显示 Aug 11；公告明确游戏已更新到 `v1.01.05`。
- 公告事实包括：Hunter Frost Bolt 偶发冻结全部怪物、Finger of Death 动画显示、特定账号邮箱领取错发宝箱、开宝箱崩溃、每 24 小时备份存档且最多保留 30 天、宝箱自动开启计时器、Cube 配方记忆、Multistrike 错误应用，以及死亡英雄 Resistance 惩罚显示等问题修复。
- 本次将全站当前版本标签、页面检查日期、相关 JSON-LD `dateModified` 和 `sitemap.xml` 同步到 `v1.01.05` / `2026-08-12`；`v1.01.04` 与 Aug 6 最终补偿重发仍保留为历史语境。
- `/updates/` 改为直接承接 `Task Bar Hero v1.01.05 patch notes`，加入官方事实、玩家影响、事实边界、更新后检查建议、FAQ 和官方 Steam 新闻源；没有创建独立新页，因为现有 Updates Hub 已有明确版本搜索价值。
- 不从 bug fix 或存档备份推导 Rune 数值、掉率、Build 强弱、EXP 路线、排名、奖励数值或恢复保证。
- 待运行验证：全站 HTML title/meta/canonical/单一 H1/JSON-LD、站内链接、sitemap XML、`git diff --check`；验证通过后再提交并推送。

## 2026-08-16：多语言阶段判断

- 当前不立即上线多语言；英文主站、版本更新自动化和核心长尾页面仍应优先保持内容质量与更新一致性。
- 7 月 30 日 GSC 曾出现巴西、越南、印尼等国家信号，但样本仍不足以直接决定语言；这些信号只能作为候选方向，不能当作稳定需求证明。
- 后续应先用最新 28 天 GSC 确认某一语言/国家是否持续贡献展示、点击和非英语查询，再一次只增加一种语言；优先验证 `/pt-br/`，其次根据新数据考虑 `/vi/` 或 `/id/`，不预先铺十几种机器翻译语言。
- 多语言启动门槛采用项目内部判断：英文核心页稳定、至少一个语言市场连续出现真实查询/点击、并能持续维护本地化正文；这不是 Google 官方排名阈值。
- 开始翻译时使用独立子目录、双向 hreflang、自引用 canonical、本语言 sitemap 和本地化 FAQ；只有真实翻译页面存在后才发布 hreflang，不创建空语言目录。

## 2026-08-16：GSC 重定向提示复查

- GSC 列出的 `www` 页面、`http://` 首页和裸域变体属于被发现的非规范 URL；线上检查确认 `https://www.taskbarheroatlas.com/<path>/` 返回 308 到 `https://taskbarheroatlas.com/<path>/`，最终页面返回 200。
- `http://taskbarheroatlas.com/` 一跳到 HTTPS 裸域；`http://www.taskbarheroatlas.com/` 当前两跳到 HTTPS 裸域。最终正文 self-canonical 到裸域，robots 允许索引，sitemap 只列裸域 HTTPS URL。
- 这批 `Page with redirect` 不需要逐个修复或加入 sitemap；GSC 应保留它们作为重定向变体，重点观察裸域 HTTPS canonical URL 是否 200、是否被收录。
- 可选优化是把 `http://www` 直接合并为一跳到 `https://taskbarheroatlas.com/`，但这是性能/规范化细节，不是当前 P0 索引故障。

## 2026-08-16：GSC 过去 28 天表现复查

- 用户提供 `/Users/zhaobingkun/Downloads/taskbarheroatlas.com-Performance-on-Search-2026-08-16/` 导出；过滤器为网页搜索、过去 28 天。图表数据实际覆盖 2026-07-18 至 2026-08-13，存在 GSC 各维度聚合/隐私阈值差异，不能把页面、查询、国家和设备总量相加。
- 页面维度为 102 点击、4030 展示、CTR 2.53%；相比 7 月 30 日记录的 24 点击、865 展示，收录与搜索覆盖明显增长，暂不适合做全站大改。
- `/codes/` 是当前最强页面：55 点击、422 展示、CTR 13.03%、平均排名 5.82；应保持直接答案和官方核验，不做大幅改写。
- 最大 CTR 漏斗是 `/rune-tree/`：513 展示、2 点击、CTR 0.39%、平均排名 10.47；查询 `tbh rune tree` 有 206 展示、平均排名 4.83 但 0 点击，优先优化标题、description、首屏答案、Rune Map/Planner 解释和 FAQ，而不是先扩语言。
- 第二优先是 `/runes/`：344 展示、0 点击、平均排名 26.03；需要补更明确的 Rune 分类、已确认/未确认边界和到 Rune Tree/三类用途页的内链。`/drop-rates/`（390 展示、6 点击、平均排名 14.27）与首页（366 展示、5 点击、平均排名 22.49）适合随后做 snippet/首屏 CTR 优化。
- `Vietnam`（26 点击/443 展示）和 `Brazil`（18/218）是主要国家信号，但查询表仅有 2 次非 ASCII 查询展示且 0 点击；这说明目前更像英语搜索用户分布，不能直接据此上线越南语或葡萄牙语。
- 设备上桌面贡献 3508 展示、91 点击，移动端平均排名和 CTR 反而更好；当前重点应是桌面 SERP 标题/摘要和内容意图，不是优先重做移动端。
- GSC 页面表仍包含少量 `www` 重定向变体；决策时以裸域 HTTPS canonical 页面为准。当前只完成分析，没有修改页面代码；建议下一轮按 `/rune-tree/` → `/runes/` → `/drop-rates/` → 首页/Stages 的顺序优化。
