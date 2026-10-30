# Evidence-first inclusion policy / 证据优先收录规则

本项目服务于世界状态演化、预测与交互建模。领域标签、视频形式、论文标题中的 “world model”，均不能单独证明收录资格。主目录只展示完成来源级审查的资源；这是文献与发布说明审查，不表示已下载全部数据、验证全部样本或独立复现论文。

The catalog supports world-state evolution, prediction and interaction modeling. Domain labels, video content or a world-model title alone are insufficient. Inclusion reflects a documented primary-source review, not complete data downloads, sample validation or independent replication.

## Inclusion criteria / 入选条件

Every entry must document at least one criterion, with a source URL, source title, location, concrete explanation and review date:

| Code | Required evidence / 必需证据 |
| --- | --- |
| C1 | Observable state evolution over time, with a documented temporal modeling/prediction use or state annotations. 可识别的时序状态演化，并有明确的时序建模、预测用途或状态标注。 |
| C2 | Actions or controls aligned to observations/state transitions, or an executable environment that exposes them. 与状态转移对齐的动作或控制，或可生成这些交互的环境。 |
| C3 | Ordered trajectories with observations or state variables usable for future-state prediction. 有序轨迹及其观测或状态变量，可用于未来状态预测。 |
| C4 | Physical outcomes, interventions, or factual/counterfactual rollouts with identifiable inputs and targets. 输入和目标明确的物理结果、干预或事实/反事实回放。 |
| C5 | A defined protocol specifically evaluating world models, including state persistence, action response or rollout consistency. 专门评测世界模型状态保持、动作响应、回放一致性等能力的明确协议。 |

Actions are not mandatory for every resource. Camera/egomotion and human-motion trajectories can qualify under C3; they must not be presented as object dynamics or robot motor commands. Tracking/interpolation benchmarks may expose useful trajectories, but forecasting requires a causal train/target split; their native scores are not forecasting scores.

并非所有资源都必须包含动作。相机运动和人体运动轨迹可满足 C3，但不能写成物体动力学或机器人电机控制。跟踪、插值数据若用于预测，必须另行划分历史与未来，其原生指标不能直接当作预测指标。

## Exclusions and uncertainty / 越界与不确定性

- Exclude standalone static assets, ordinary image perception/classification/segmentation, generic VQA and model-only releases without a distinct qualifying data or generation path.
- Exclude duplicates and unsupported aliases; retain canonical versions and record the relationship. A parent collection and a derived subset must identify their overlap.
- Hold unresolved identity, unavailable evidence and unverified temporal schemas in the pending queue. A failed request does not prove that the resource is unavailable or out of scope.
- A paper can establish reported relevance. It cannot by itself establish current access, license permission or complete release of a training mixture.
- Data, code and source-asset licenses may differ. Access/license fields are publisher information requiring verification for the intended use.

独立静态资产、普通感知/分类/分割、通用问答、没有独立数据或生成路径的模型不进入主目录。证据不足暂存待核验；网络失败不等于资源不存在。论文中的训练规模不能自动成为公开数据规模。

## Resource types and counting / 类型与计数

The catalog year identifies the original resource publication or documented release, not the date of every later conversion, update or supporting prediction paper. Where the original date is unspecified, record a dated public registry entry in `yearBasis`. A pre-2026 publication does not establish that every currently available file existed before 2026.

目录年份采用原始资源发表或有记录的发布年份，不代表后续转换、更新或支持其预测用途的论文年份。原始年份不明时，在 `yearBasis` 中记录有日期的公开注册记录。2026 年前发表不等于当前全部文件都在当时发布。

| Stored value | Meaning / 含义 |
| --- | --- |
| `dataset` | An identifiable recorded or generated data release / 可识别的数据发布 |
| `benchmark` | An evaluation dataset or protocol with a qualifying data path / 有合格数据路径的评测资源 |
| `generator` | An executable environment or generation toolkit / 可执行环境或生成工具 |
| `aggregate` | A collection, registry or framework containing other resources / 聚合集合、注册表或框架 |
| `derived` | An annotated, transformed or selected subset of another resource / 标注、转换或筛选的派生数据 |

The headline counts catalog resources, not independent acquired corpora. Type labels do not prove disjointness. Do not sum hours, frames or episodes across overlapping collections. No star ranking is assigned.

首页统计的是资源条目，不是互不重叠的独立数据集。类型划分不保证样本独立；禁止跨聚合集合和派生集合直接相加小时数、帧数、回合数。不提供无量表依据的星级排名。

## Maintenance / 维护流程

1. Check active IDs, aliases and `audit/archived-records/` before adding a candidate.
2. Read the original paper, official data page or official repository. Confirm identity before interpreting evidence. Write a concrete scope statement; “useful for world models” is insufficient.
3. Record `resourceType` and `evidence` in `data/datasets/<id>.json`; add known `relatedResources` and aliases. Choose a task only after the evidence gate passes.
4. Preserve uncertain release/access details. Keep model-training mixtures separate from actually released subsets.
5. For pending/excluded/merged entries, preserve the original record and decision in `audit/`. Restoration requires new source evidence, a revised decision and removal from the archive; do not count both copies.
6. Run `npm run check`, inspect generated README/site changes, then publish. HTTP link checks establish reachability only; they do not replace manual source review.

The build rejects missing evidence, unsupported criteria/types, detached evidence links and duplicate identities/aliases. These checks enforce documentation requirements, not the truth of a scientific judgment.

构建检查只能强制审查记录完整，不能自动判定科学证据是否成立。未来新增仍须逐源人工判断。

## Review history / 审查记录

- [2026-10-30 all-361 field and website audit / 全部 361 条字段与网站检查](audit/full-review-361-2026-10-30.md)
- [Field-level results and corrections / 逐字段结果及修订 JSON](audit/full-review-361-2026-10-30.json) · [CSV](audit/full-review-361-2026-10-30.csv) · [URL retrieval results / 链接结果](audit/full-links-2026-10-30.json)

- [2026-10-30 pre-2026 expansion and complete catalog checks / 历史资源补录及全目录复查](audit/pre2026-review-2026-10-30.md)
- [Current decisions / 当前逐条决策 JSON](audit/pre2026-review-2026-10-30.json) · [CSV](audit/pre2026-review-2026-10-30.csv)

- [2026-10-29 full-catalog source review / 全量来源审查](audit/evidence-review-2026-10-29.md)
- [Machine-readable decisions / 逐条决策 JSON](audit/evidence-review-2026-10-29.json)
- [Spreadsheet-compatible decisions / 逐条决策 CSV](audit/evidence-review-2026-10-29.csv)
