# GSC Performance Review

日期：2026-07-30  
数据目录：`/Users/zhaobingkun/Downloads/taskbarheroatlas.com-Performance-on-Search-2026-07-30/`  
过滤器：网页搜索，过去 24 小时

## 1. 总体判断

站点不是“完全没有网页被索引或曝光”。过去 24 小时已有搜索展示和点击：

- 国家/地区维度合计：2 次点击、175 次展示、CTR 1.14%、平均排名 23 左右
- 设备维度合计：2 次点击、175 次展示
- 页面维度导出合计：2 次点击、181 次展示
- 查询维度导出合计：2 次点击、76 次展示

查询维度小于页面/国家/设备维度，属于 GSC 在低量数据下隐藏部分查询或按维度聚合口径不同的常见现象，不应强行相加。

## 2. 最有价值的查询信号

| 查询 | 点击 | 展示 | CTR | 平均排名 | 判断 |
|---|---:|---:|---:|---:|---|
| `task bar hero builds` | 1 | 1 | 100% | 1 | 极小样本，但 build 意图已能打到首页位 |
| `task bar hero build` | 1 | 2 | 50% | 19.5 | 有点击，说明 build 页标题/需求有吸引力 |
| `tbh rune tree` | 0 | 6 | 0% | 5.83 | 最强待优化机会，排名已接近首页上半区 |
| `taskbar hero calculator` | 0 | 3 | 0% | 10 | Calculator Hub 有机会，需加厚工具入口 |
| `task bar hero drop rates` | 0 | 2 | 0% | 7.5 | Drop Rates 已进入较好位置，需提高 CTR 和内容可信度 |
| `taskbar hero wiki` | 0 | 2 | 0% | 10.5 | 首页/Hub 已被识别为 wiki 类结果 |
| `taskbar hero steam market` | 0 | 1 | 0% | 3 | Market 长尾有机会，但必须保持事实边界 |
| `task bar hero code/codes` | 0 | 2 | 0% | 4-5 | Codes 页有机会，必须持续核验，不编造 code |

## 3. 页面表现

| 页面 | 点击 | 展示 | 平均排名 | 判断 |
|---|---:|---:|---:|---|
| `/rune-tree/` | 0 | 17 | 20.41 | 曝光最高之一，但平均位置被多查询拉低；`tbh rune tree` 查询本身表现较好 |
| `/drop-rates/` | 0 | 16 | 14.12 | 已有稳定信号，应优先加厚 |
| `/runes/` | 0 | 16 | 29 | 主题相关但排名弱，需和 rune-tree/子页分工更清晰 |
| `/tier-list/farming/` | 0 | 13 | 30.92 | 有曝光但排名弱，需要更具体的 farming tier 内容 |
| `www /stages/` | 0 | 12 | 22.33 | 当前 www 已 308 到裸域，属于残留/重定向信号 |
| `/codes/` | 0 | 11 | 8.91 | 排名最好的一批，适合保持新鲜度 |
| `/calculators/` | 0 | 11 | 18 | 有工具类信号，需承接 calculator/calc/farming calculator |
| `/stages/` | 0 | 10 | 17.8 | stage/difficulty 方向有早期机会 |
| `/updates/` | 0 | 9 | 14.89 | 版本更新页开始被识别 |
| `/builds/` | 2 | 8 | 24 | 唯一带点击的页面，值得优先加厚 |

## 4. 国家和设备

国家展示分散，说明站点有国际搜索需求，但样本还太小，不能直接决定多语言上线顺序。

曝光较多的国家/地区：

- 泰国：18 展示
- 印度尼西亚：17 展示
- 越南：11 展示
- 土耳其：10 展示，1 点击
- 美国：10 展示
- 巴西：9 展示，1 点击，平均排名 8.44
- 西班牙：9 展示
- 英国/法国/菲律宾/巴基斯坦各 7 展示

设备：

- 桌面：2 点击、166 展示、CTR 1.2%、平均排名 23.47
- 移动：0 点击、9 展示、平均排名 20.44

当前流量几乎全在桌面端。不能据此放弃移动优化，但短期内容优先级高于移动专项优化。

## 5. 技术状态复查

- `https://www.taskbarheroatlas.com/stages/` 当前返回 HTTP 308，跳转到 `https://taskbarheroatlas.com/stages/`
- `https://taskbarheroatlas.com/stages/` 当前返回 HTTP 200
- 线上 sitemap 只列裸域 `https://taskbarheroatlas.com/...`
- sitemap 中 30 个 URL 均已有 `<lastmod>2026-07-27</lastmod>`

结论：`www` URL 出现在 GSC 页面报告中不是当前主要问题。继续保持裸域 canonical 和 www → apex 重定向即可。

## 6. 下一步更新优先级

### P0：Builds 页面

原因：唯一有点击的页面是 `/builds/`，查询 `task bar hero builds` 和 `task bar hero build` 已经触发点击。

建议：

- 加一个首屏直接答案：当前版本应该如何判断 build，而不是宣称固定最强。
- 补 3 个可验证 build 框架：farming、boss、survival。
- 给每个框架加适用阶段、核心属性、测试方法、失败信号。
- 强内链到 `/guides/beginner-build/`、`/tier-list/farming/`、`/runes/`。

### P0：Rune Tree / Runes 集群

原因：`tbh rune tree` 6 展示、平均排名 5.83，是目前最强的未点击机会。

建议：

- 在 `/rune-tree/` 的 title、H1 附近自然加入 `TBH Rune Tree`。
- 增加 `Rune map`、`full rune tree`、`all runes` 的 FAQ 或小节。
- 让 `/runes/` 明确承担 Rune guide Hub，`/rune-tree/` 承担 map/planner 意图，避免两个页面互相稀释。

### P0：Drop Rates 页面

原因：`task bar hero drop rates` 平均排名 7.5，`tbh drop rate/drop rates/drop info/chest drop rate` 都出现。

建议：

- 首屏直接回答：当前是否有官方掉率；哪些数据已验证，哪些不能编造。
- 增加 Chest drops、gear drops、stage drops 三个索引块。
- 添加“如何记录掉落样本”的表格模板，提升原创价值。

### P1：Codes 页面

原因：`task bar hero code/codes` 排名 4-7，`/codes/` 页面平均排名 8.91。

建议：

- 每次官方核验后更新 checked date。
- 首屏明确：截至某日期是否有官方可兑换 code。
- FAQ 覆盖 `Task Bar Hero codes`、`where to redeem codes`、`are there active codes`。
- 不要编造 code；真实性比点击更重要。

### P1：Calculators Hub

原因：`taskbar hero calculator` 平均排名 10，`taskbar hero calc` 和 `taskbar hero farming calculator` 也出现。

建议：

- `/calculators/` 加强“当前可用工具”和“计划中的 calculator”说明。
- 增加 farming calculator 的可索引介绍块，即使实际工具后续再完善。
- 强内链到 chest timer、drop rates、exp farm。

### P1：Stages / Difficulty

原因：`taskbar hero stage`、`tbh stages`、`tbh difficulty` 出现。

建议：

- `/stages/` 增加 difficulty 解释、stage progression 判断表、farm vs push 决策表。
- 和 `/guides/stage-progression/` 分工：Stages 做数据库/结构，guide 做路线方法。

## 7. 多语言判断

这份 GSC 过去 24 小时数据显示搜索国家很分散，且巴西、土耳其、东南亚已经有曝光/点击。但样本太小，不能据此立刻做多语言。

对 Task Bar Hero Atlas：

- 暂不建议立即上线多语言。
- 先继续英文页面加厚，等 28 天维度达到更稳定数据后再判断。
- 如果后续要做，优先考虑葡语或土耳其语/东南亚语言需要更多证据；不要只凭一天数据决定。

对未来 AI 导航站：

- 可以预留多语言结构。
- 首版仍建议英文先跑通，第二阶段再加中文。

## 8. 结论

站点已经开始进入 Google 搜索表现报告，不是没有索引价值。当前最应该做的是围绕已有 GSC 信号加厚页面，而不是继续盲目铺新页或做外链。

执行顺序建议：

1. `/builds/`
2. `/rune-tree/` + `/runes/`
3. `/drop-rates/`
4. `/codes/`
5. `/calculators/`
6. `/stages/`

