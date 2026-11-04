# 2026-11-04 严格补录与目录检查 / Evidence-first expansion

截止日期：**2026-11-04**。本轮新增 **52** 条、凭新增证据恢复 **7** 条，目录由 **361 → 420** 条。现有 **343** 条年份早于 2026，**77** 条为 2026。统计的是资源条目，包含基准、生成环境、聚合集合和派生数据，不代表 420 个互不重叠的独立采集数据集。

本轮以逐源证据为准，不设新增数量目标。覆盖官方机器人与人体动作发布、离线控制、驾驶预测、物理/天气动力学及世界模型专门评测。直接检索 arXiv、官方项目页面、数据卡和 GitHub API；搜索结果仅用于发现，不能代替原始证据。查询地址、返回题名清单、来源摘要校验值、入口检查及当前决策均见 [JSON](expansion-2026-11-04.json)，逐条决策见 [CSV](expansion-2026-11-04.csv)。

**这是有边界的补录，不能据此声称“截至今天全网已收齐”。** 未处理的外部渠道仍保留在 [TODO](../DATASET_RESEARCH_TODO.md)；未知候选持续发现。

## 收录口径与关键修订

- 恢复：AgiBot World 2026、RoboArena、RoboReward、Robo-ValueRL、VLA-REPLICA、ESPIRE、REBOOT26，均有新的卡片、元数据或实际控制路径证据；原记录保存在本轮 JSON 的 restorations 中及 Git 历史。
- RoboArena 按明确标注的 2026-07-17 数据快照收录，不能借 2025 年论文将快照回溯为旧数据。
- Daimon-Infinity 仅写当前卡片明确发布的首批 1,000 小时，不把 TacClaw 论文的 10,000 小时汇总当作完整公开规模。
- AgiBot Alpha/Beta、Physics-IQ 版本、OpenDV Mini、Bench2Drive 分割以及多视角电竞数据明确区分，不重复累计。
- REBOOT26 只确认三个具名任务的实际 meta/info.json；数据卡模板不能替代任务元数据，不为整个账号或整体规模背书。
- PDEGym 仅收时变方程数据；NeoRL 仅收物理控制；Apple-π 以状态/轨迹预测子协议入选；普通静态感知或问答不单独计入。
- 每条至少保留一个已确认入口。本轮 61 个新增入口均返回 HTTP 200；卡片中其他链接未自动全部搬入目录。

## 新增与恢复清单

| 资源 | 年份 | 类型 | 标准 | 决策 | 原始证据 |
| --- | ---: | --- | --- | --- | --- |
| AgiBot World 2026 (G2) | 2026 | dataset | C2 | 恢复 / restored | [来源 / source](https://huggingface.co/datasets/agibot-world/AgiBotWorld2026) |
| Apple-π / Orchard | 2026 | benchmark | C5 | 新增 / new | [来源 / source](https://github.com/21yrm/Apple-PI) |
| ARC3 Human Think-Aloud | 2026 | dataset | C2 | 新增 / new | [来源 / source](https://huggingface.co/datasets/hellohawaii/ARC3-human-think-aloud) |
| CrashTwin | 2026 | benchmark | C5 | 新增 / new | [来源 / source](https://github.com/phai-lab/CrashTwin) |
| CRONOS (Counterfactual Physical Consistency) | 2026 | benchmark | C4 | 新增 / new | [来源 / source](https://genintel.github.io/CRONOS/) |
| Daimon-Infinity (Released Batch) | 2026 | dataset | C2 | 新增 / new | [来源 / source](https://huggingface.co/datasets/daimonrobotics/Daimon-Infinity) |
| Deform360 | 2026 | dataset | C2 | 新增 / new | [来源 / source](https://github.com/lhy0807/deform360) |
| EmbodiedWorld-200K | 2026 | derived | C3 | 新增 / new | [来源 / source](https://huggingface.co/datasets/Xiaokunfeng2022/EmbodiedWorld-200K) |
| ESPIRE (Interactive Evaluation Environment) | 2026 | generator | C2 | 恢复 / restored | [来源 / source](https://github.com/spatigen/espire-eval/blob/main/src/espire_eval_common/driver.py) |
| Esports World Model Dataset | 2026 | dataset | C2 | 新增 / new | [来源 / source](https://github.com/sc2musa/esports-worldmodel-datasets) |
| FlowBench (Counterfactual Spatial Imagination) | 2026 | benchmark | C4 | 新增 / new | [来源 / source](https://github.com/liuyifan22/FlowBench) |
| OmniPiano | 2026 | generator | C2 | 新增 / new | [来源 / source](https://github.com/SAIL-Research-Lab/omnipiano) |
| Open-AoE | 2026 | dataset | C3 | 新增 / new | [来源 / source](https://github.com/ant-research/Open-AoE) |
| OPIS | 2026 | benchmark | C5 | 新增 / new | [来源 / source](https://huggingface.co/datasets/Kirito-Lab/OPIS-dataset) |
| REBOOT26 (Verified LeRobot Tasks) | 2026 | aggregate | C2 | 恢复 / restored | [来源 / source](https://huggingface.co/REBOOT26) |
| RMBench | 2026 | benchmark | C2 | 新增 / new | [来源 / source](https://github.com/RoboTwin-Platform/RMBench) |
| Robo-ValueRL Dataset | 2026 | dataset | C2 | 恢复 / restored | [来源 / source](https://huggingface.co/datasets/X-Humanoid/Robo-ValueRL) |
| RoboArena Rollout Snapshot (2026-07-17) | 2026 | dataset | C2 | 恢复 / restored | [来源 / source](https://huggingface.co/datasets/RoboArena/DataDump_07-17-2026) |
| RoboReward / RoboRewardBench | 2026 | derived | C4 | 恢复 / restored | [来源 / source](https://huggingface.co/datasets/teetone/RoboReward) |
| VLA-REPLICA SFT Trajectories | 2026 | dataset | C2 | 恢复 / restored | [来源 / source](https://huggingface.co/datasets/HenryZhang/VLAReplica_SFT_data/raw/main/meta/info.json) |
| WorldExam | 2026 | benchmark | C5 | 新增 / new | [来源 / source](https://worldexam.github.io/) |
| WorldOracle | 2026 | benchmark | C5 | 新增 / new | [来源 / source](https://github.com/WorldOracle-benchmark/WorldOracle) |
| WorldReward-Bench | 2026 | benchmark | C5 | 新增 / new | [来源 / source](https://github.com/CodeGoat24/WorldReward) |
| AgiBot World Colosseo (Beta) | 2025 | dataset | C2 | 新增 / new | [来源 / source](https://github.com/OpenDriveLab/Agibot-World) |
| EgoDex | 2025 | dataset | C3 | 新增 / new | [来源 / source](https://github.com/apple-aiml-research/ml-egodex) |
| EWMBench | 2025 | benchmark | C5 | 新增 / new | [来源 / source](https://github.com/AgibotTech/EWMBench) |
| Galaxea Open-World Dataset | 2025 | dataset | C2 | 新增 / new | [来源 / source](https://huggingface.co/datasets/OpenGalaxea/Galaxea-Open-World-Dataset) |
| IntPhys 2 | 2025 | benchmark | C4 | 新增 / new | [来源 / source](https://github.com/facebookresearch/IntPhys2) |
| LoopNav | 2025 | benchmark | C5 | 新增 / new | [来源 / source](https://github.com/Kevin-lkw/LoopNav) |
| Physics-IQ | 2025 | benchmark | C5 | 新增 / new | [来源 / source](https://github.com/google-deepmind/physics-iq-benchmark) |
| WM-ABench (Prediction Protocols) | 2025 | benchmark | C5 | 新增 / new | [来源 / source](https://wm-abench.maitrix.org/) |
| World-in-World | 2025 | benchmark | C5 | 新增 / new | [来源 / source](https://github.com/World-In-World/world-in-world) |
| WorldModelBench | 2025 | benchmark | C5 | 新增 / new | [来源 / source](https://worldmodelbench-team.github.io/) |
| WorldScore | 2025 | benchmark | C5 | 新增 / new | [来源 / source](https://haoyi-duan.github.io/WorldScore/) |
| APEBench | 2024 | generator | C4 | 新增 / new | [来源 / source](https://github.com/tum-pbs/apebench) |
| Bench2Drive | 2024 | benchmark | C2 | 新增 / new | [来源 / source](https://github.com/Thinklab-SJTU/Bench2Drive) |
| D5RL | 2024 | benchmark | C2 | 新增 / new | [来源 / source](https://github.com/d5rlbenchmark/d5rl) |
| HOT3D (Full Tracking Sequences) | 2024 | dataset | C3 | 新增 / new | [来源 / source](https://github.com/facebookresearch/hot3d) |
| NAVSIM | 2024 | benchmark | C3 | 新增 / new | [来源 / source](https://github.com/autonomousvision/navsim) |
| OGBench | 2024 | benchmark | C2 | 新增 / new | [来源 / source](https://github.com/seohongpark/ogbench) |
| OpenDV-YouTube | 2024 | dataset | C1 | 新增 / new | [来源 / source](https://github.com/OpenDriveLab/DriveAGI) |
| PDEGym / Poseidon (Time-Dependent Data) | 2024 | aggregate | C1 | 新增 / new | [来源 / source](https://github.com/camlab-ethz/Poseidon) |
| RoboTwin | 2024 | generator | C2 | 新增 / new | [来源 / source](https://github.com/RoboTwin-Platform/RoboTwin) |
| WorldSimBench | 2024 | benchmark | C5 | 新增 / new | [来源 / source](https://iranqin.github.io/WorldSimBench.github.io/) |
| ARCTIC | 2023 | dataset | C3 | 新增 / new | [来源 / source](https://github.com/zc-alexfan/arctic) |
| DynaBench (Physical Systems) | 2023 | benchmark | C1 | 新增 / new | [来源 / source](https://github.com/badulion/dynabench) |
| Hi4D (Interaction Sequences) | 2023 | dataset | C3 | 新增 / new | [来源 / source](https://github.com/yifeiyin04/Hi4D/blob/main/dataset.md) |
| Inter-X | 2023 | dataset | C3 | 新增 / new | [来源 / source](https://github.com/liangxuy/Inter-X) |
| InterHuman | 2023 | dataset | C3 | 新增 / new | [来源 / source](https://github.com/tr3e/InterGen) |
| OMOMO Interaction Motion Data | 2023 | dataset | C3 | 新增 / new | [来源 / source](https://github.com/lijiaman/omomo_release) |
| Systematic Visual Imagination Benchmark (SVIB) | 2023 | benchmark | C5 | 新增 / new | [来源 / source](https://systematic-visual-imagination.github.io) |
| WeatherBench 2 | 2023 | benchmark | C1 | 新增 / new | [来源 / source](https://github.com/google-research/weatherbench2) |
| BEHAVE (Interaction Sequences) | 2022 | dataset | C3 | 新增 / new | [来源 / source](https://github.com/xiexh20/behave-dataset) |
| GIMO | 2022 | dataset | C3 | 新增 / new | [来源 / source](https://github.com/y-zheng18/GIMO) |
| InterCap | 2022 | dataset | C3 | 新增 / new | [来源 / source](https://intercap.is.tue.mpg.de/) |
| VPT Contractor Demonstrations | 2022 | dataset | C2 | 新增 / new | [来源 / source](https://github.com/openai/Video-Pre-Training) |
| EgoBody | 2021 | dataset | C3 | 新增 / new | [来源 / source](https://github.com/sanweiliti/EgoBody) |
| NeoRL (Physical Control Tasks) | 2021 | benchmark | C2 | 新增 / new | [来源 / source](https://github.com/polixir/NeoRL) |
| SEVIR (Nowcasting Sequences) | 2020 | dataset | C1 | 新增 / new | [来源 / source](https://github.com/MIT-AI-Accelerator/neurips-2020-sevir) |

## 暂缓的新候选

以下为本轮已审阅但尚未解决发布路径或范围问题的新候选；pending 不表示它们不存在，也不表示论文完全无价值。

- **ECHO**: The paper establishes a relevant destination-prediction task, but an independently inspectable release channel was not located in the inspected sources.
- **AceAction-5M**: Action-aligned gameplay is reported; the official repository is currently a landing README and the linked dataset card returned 404. Release contents remain unconfirmed.
- **GameVerse**: Relevant long video/camera trajectories are reported, but the inspected paper did not establish a currently inspectable data channel.
- **GazeAct**: The paper describes synchronized robot/gaze data, but a separate inspectable release path was not confirmed.
- **TouchScale**: The inspected paper promises a future public release; current release contents were not established.
- **LynxScenes**: The abstract explicitly describes the dataset and toolkit as planned for public release.
- **VehDyn**: The paper says the dataset and metrics will be released after acceptance; current release was not verified.
- **NaviAIS**: Official repository says code/configuration/instructions will be released after acceptance; the linked dataset card contains only license front matter.
- **CRONOS (Non-Episodic RL)**: The project describes relevant environments, but its code link is a placeholder. Do not confuse with the accepted CRONOS physical-consistency benchmark.
- **AGI Maze Prediction Datasets**: Relevant transition/state-prediction protocol is reported, but an inspectable generator or data release was not identified in this pass.
- **WorldPrediction**: The paper defines a relevant state/action selection protocol; release files and a primary data channel remain unconfirmed in this pass.
- **AutumnBench / WorldTest**: The paper defines interactive world-model tests; the inspected sources did not establish a released environment/data channel.
- **ACT-Bench**: The inspected paper promises future public availability; no completed release was confirmed in this pass.
- **TriPhysBench**: Scientific measurement QA is described; a released physical-transition or outcome-prediction subset has not been established.
- **ATRNet-LUDO**: The paper says code/data are coming soon; an executable observation-transition environment was not confirmed.

YANAMI 的普通对话/编辑范围、VeriPhy 的 critic-only 发布和 GUILD 的方法介绍未建立独立合格数据路径，留在排除记录。原待核验队列中未解决的项目继续保留原审查日期。当前完整台账：active 420，excluded 44，pending 39，merged 8。

## 验证与边界

`npm run check`（构建、脚本语法和 12 项现有测试）通过；`git diff --check` 通过。

- 全部 420 条执行结构、唯一身份/别名、关联、证据来源绑定、中英文字段、年份和归档分区检查。
- 网站数据和两份 README 由同一来源生成；使用新的缓存版本。
- 原有 361 条继承已有逐源审查，不将结构检查或 HTTP 成功冒充一次新的人工全文复审。前次 [361 条完整字段审查](full-review-361-2026-10-30.md) 与 [入口清理](link-cleanup-2026-10-31.md) 保留历史。
- 未执行完整下载、样本完整性检查、仿真复现或许可权限裁决。访问/许可说明是发布方信息与明确的未核实事项。

English: 52 newly discovered resources and 7 evidence-backed restorations bring the catalog to 420. The review distinguishes source evidence from access, licensing and reproducibility; existing reviews retain their dates. The finite search is not an exhaustive global census. All new entry URLs passed HTTP retrieval, and every active record passed structural consistency checks.
