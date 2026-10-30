# WorldModel Data Atlas

[English](./README.md) | [简体中文](./README.zh-CN.md)

_一个以证据为先的世界模型数据资源目录。_

[![在线目录](https://img.shields.io/badge/浏览-在线目录-2563eb)](https://aiworldmodel.github.io/world-model-dataset/)
[![资源](https://img.shields.io/badge/资源-361-16a34a)](#数据集目录)
[![一级任务](https://img.shields.io/badge/一级任务-6-7c3aed)](#分类体系)

[![website](images/cover.jpg)](https://aiworldmodel.github.io/world-model-dataset)

[浏览网站](https://aiworldmodel.github.io/world-model-dataset/) · [查看数据集](#数据集目录) · [参与贡献](#贡献与修正)

---

## 项目简介

WorldModel Data Atlas 希望帮助研究者回答一个实际问题：

> 我应该使用哪个数据集来训练或评测自己关心的世界模型能力？

与按论文时间堆叠链接的列表不同，本目录按照数据集主要支持的世界模型能力进行组织，并通过领域、模态、结构、来源、访问方式和许可信息提供补充背景，避免同一数据集在多个章节重复出现。

GitHub README 是便于浏览、搜索和社区协作的数据目录；[交互式网站](https://aiworldmodel.github.io/world-model-dataset/)进一步提供搜索、筛选、中英文切换和详细比较。

## 项目特点

- **以任务为核心** — 从希望训练或评测的能力出发查找数据
- **面向科研的元数据** — 比较模态、规模、结构、来源、访问方式和许可条件
- **中英文支持** — 使用英文或中文 README，并可在网站中切换语言
- **经过整理的资源链接** — 提供官方主页、论文和代码仓库入口
- **重视证据的说明** — 同时指出数据集的价值和重要限制
- **可复现的维护方式** — 使用同一份数据生成网站和两个 README 目录

本项目是经过整理的研究资源，而不是数据集排行榜。网站中的详细适用建议比单一综合评分更有参考价值。

## 入选证据

每条资源均有带日期的原始来源审查，明确支持时序状态演化、对齐的控制信号、预测轨迹、物理/反事实结果或专门的世界模型评测协议。静态资产、通用感知/问答、仅模型发布和证据未决候选不进入主目录。详见[收录规则](CATALOG_POLICY.md)和[最新目录审查报告](audit/full-review-361-2026-10-30.md)。

来源审查不代表已完成数据下载、样本完整性或许可权限验证。仅论文证据单独标注。访问条件各异，不宣称全部开放下载；聚合集合和派生数据可能重叠。逐条详细审查理由保留英文，便于对照原始来源。

## 目录概览

| 已审查资源 | 一级任务 | 研究领域 | 数据模态 |
| ---: | ---: | ---: | ---: |
| 361 | 6 | 6 | 46 |

数据集: 204 · 评测集: 48 · 生成环境 / 工具: 86 · 聚合集合 / 注册表: 13 · 派生数据 / 子集: 10

上述为资源条目数，不代表独立采集的数据集数量。生成环境需自行生成数据，评测集与聚合集合不能直接相加为总数据规模。

## 分类体系

每个数据集只能有一个一级任务，其他用途和跨维度属性通过标签表达。

| 维度 | 回答的问题 | 示例 |
| --- | --- | --- |
| **一级任务** | 主要训练或评测什么能力？ | 未来预测、动作条件动力学、决策 |
| **领域** | 数据来自什么类型的世界？ | 机器人、自动驾驶、游戏、物理 |
| **模态** | 数据提供哪些信号？ | 视频、动作、机器人状态、激光雷达、语言 |
| **结构** | 样本如何组织？ | 时序序列、轨迹、交互回合 |
| **来源** | 数据如何产生？ | 真实世界、仿真、遥操作、合成生成 |

六类一级任务包括：

1. **预测与生成式动力学** — 未来观测或状态预测、视频预测和长时生成
2. **动作条件动力学** — 学习世界如何响应智能体的动作
3. **决策与智能体轨迹** — 规划、控制、模仿学习、离线强化学习和智能体行为
4. **空间与时空世界建模** — 三维/四维重建、占据预测、场景流和动态空间表征
5. **物理与因果推理** — 物理属性、相互作用、干预和反事实推理
6. **世界模型评测与诊断** — 主要用于衡量模型能力和分析失效模式的数据集

判定原则是：如果只能保留一种用途，数据集对世界模型研究最独特、最不可替代的用途就是它的一级任务。

## 数据集目录

数据集按照一级任务分组，各组内按年份倒排。README 展示便于发现和快速判断的信息；网站进一步提供规模、机构、许可说明、次级任务、数据结构、来源和编辑评价。

<!-- DATASET_CATALOG_START -->

[预测与生成式动力学 (43)](#predictive-generative-dynamics) · [动作条件动力学 (104)](#action-conditioned-dynamics) · [决策与智能体轨迹 (76)](#decision-making-agent-trajectories) · [空间与时空世界建模 (70)](#spatial-spatiotemporal-world-modeling) · [物理与因果推理 (28)](#physical-causal-reasoning) · [世界模型评测与诊断 (40)](#world-model-evaluation-diagnostics)

<a id="predictive-generative-dynamics"></a>

### 预测与生成式动力学（43）

- **DenseReward Dataset** · 2026 · 数据集
  通过仿真合成成功、碰撞、漏抓、掉落和恢复轨迹，提供逐时刻操作状态与稠密奖励标注。
  `机器人 / 具身智能` · `RGB 视频` · `语言` · `奖励` · `动作标签`
  [主页](https://dense-reward.github.io/) · [代码](https://github.com/dense-reward/DenseReward) · 访问方式：项目宣布发布数据；当前文件访问尚未验证
  入选依据 C1（英文审查说明）：The project describes 27K simulated success/failure episodes with current and historical observations and per-timestep execution-state supervision. [审查来源](https://dense-reward.github.io/) · 2026-10-29

- **Game2World** · 2026 · 数据集
  游戏界面去除和世界模型训练的成对视频、野外片段及 UI 资产数据集。
  `游戏 / 虚拟环境` · `RGB 视频`
  [论文](https://arxiv.org/abs/2608.24680) · [主页](https://github.com/Dongping-Chen/Game2World) · 访问方式：提供官方项目和论文入口
  入选依据 C1（英文审查说明）：Official release identifies paired gameplay training videos with clean temporal references for world-model pretraining; the UI-removal benchmark is not a transition-accuracy evaluation. [审查来源](https://github.com/Dongping-Chen/Game2World) · 2026-10-29

- **Kimodo Motion Generation Benchmark (BONES-SEED)** · 2026 · 评测集
  基于 BONES-SEED 的动作生成测试用例、评测代码与时序文本标注，不代表 Kimodo 的完整 700 小时训练数据。
  `第一人称 / 人类活动` · `三维状态` · `语言` · `轨迹`
  [主页](https://research.nvidia.com/labs/sil/projects/kimodo/) · [代码](https://github.com/nv-tlabs/kimodo) · 访问方式：官方评测与标注入口；未实测下载
  入选依据 C3（英文审查说明）：Retain the released BONES-SEED-based motion-generation benchmark and temporal annotations; the full 700-hour commercial training corpus is not the released dataset. [审查来源](https://github.com/nv-tlabs/kimodo) · 2026-10-29

- **Mini Moving Shapes** · 2026 · 生成环境 / 工具
  带离散动作控制和符号状态描述的合成多模态下一状态预测数据集，支持多步想象回放。
  `游戏 / 虚拟环境` · `物理 / 科学` · `灰度视频` · `文本` · `动作` · `仿真状态`
  [代码](https://github.com/andrew-jeremy/Spectral-World-Models) · 访问方式：数据集随官方仓库提供，并可通过脚本重新生成
  入选依据 C2（英文审查说明）：Bundled data.py generates moving shapes with discrete controls and next-image/text targets for multi-step rollout evaluation. [审查来源](https://github.com/andrew-jeremy/Spectral-World-Models) · 2026-10-29

- **Procgen Action-Conditioned World Model Dataset** · 2026 · 生成环境 / 工具
  由 Procgen Atari 环境生成的离线帧、动作和终止信号数据，专门用于动作条件下一帧预测与滚动评测。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `游戏状态`
  [代码](https://github.com/Mayavan/world_model) · 访问方式：数据生成代码和回放评测可用
  入选依据 C2（英文审查说明）：README supplies a CoinRun random-policy dataset-generation command and action-conditioned next-frame/multi-step evaluation. Community generator derived from Procgen. [审查来源](https://github.com/Mayavan/world_model) · 2026-10-29

- **TACO** · 2024 · 数据集
  面向双手工具-动作-物体理解的真实人手-物体交互数据集，包含第三人称与第一人称视角、精确手物体 3D 网格和动作标签，用于动作识别、运动预测与协同抓取合成。
  `第一人称 / 人类活动` · `机器人 / 具身智能` · `多视角 RGB 视频` · `三维网格` · `动作标签` · `智能体位姿` · `物体元数据`
  [主页](https://taco2024.github.io/) · [论文](https://arxiv.org/abs/2401.08399) · [代码](https://github.com/leolyliu/TACO-Instructions) · 访问方式：官方项目页提供 Dataset V1、预发布数据、论文和代码链接
  入选依据 C3（英文审查说明）：2.5K human-object motion sequences pair ego/third-person views with precise time-varying hand-object 3D meshes. [审查来源](https://arxiv.org/abs/2401.08399) · 2026-10-29

- **The Well** · 2024 · 聚合集合 / 注册表
  来自多种科学领域的时空物理仿真集合，提供统一格式和用于代理模型训练的时间窗口接口。
  `物理 / 科学` · `仿真状态`
  [主页](https://polymathic-ai.org/the_well/) · [代码](https://github.com/PolymathicAI/the_well) · 访问方式：官方下载工具及 Hugging Face 流式访问
  入选依据 C1（英文审查说明）：The official release collects numerical time-evolving physical simulations across 16 component datasets. Count the collection once, not all samples as independent sources. [审查来源](https://polymathic-ai.org/the_well/) · 2026-10-29

- **LagrangeBench** · 2023 · 评测集
  面向拉格朗日流体动力学的粒子轨迹集合，覆盖二维和三维流动、涡旋、腔体及溃坝场景。
  `物理 / 科学` · `仿真状态` · `轨迹`
  [代码](https://github.com/tumaer/lagrangebench) · [论文](https://arxiv.org/abs/2309.16342) · 访问方式：官方 Zenodo 数据包及自动下载、加载器
  入选依据 C1（英文审查说明）：SPH fluid-particle datasets and temporal coarse-graining evaluate learned time-evolution surrogates. [审查来源](https://arxiv.org/abs/2309.16342) · 2026-10-29

- **BEAT** · 2022 · 数据集
  语音和文本对齐的三维身体、手势与面部表情序列，包含情绪和语义相关性标注。
  `第一人称 / 人类活动` · `智能体位姿` · `音频` · `文本` · `动作标签`
  [主页](https://pantomatrix.github.io/BEAT/) · [论文](https://arxiv.org/abs/2203.05297) · 访问方式：官方项目及数据发布仓库
  入选依据 C3（英文审查说明）：Conversational motion capture is time-aligned with audio and frame-level semantic/emotional annotations; human motion, not robot action commands. [审查来源](https://arxiv.org/abs/2203.05297) · 2026-10-29

- **Ego4D** · 2022 · 数据集
  由 Meta AI 联合全球高校采集的大规模第一人称真实生活视频数据集，其短期物体交互预判与长期动作预测任务，为人类行为、手物交互和具身未来预测提供了重要基准。
  `第一人称 / 人类活动` · `RGB 视频` · `音频` · `三维网格` · `视线` · `惯性测量单元`
  [主页](https://ego4d-data.org/) · [论文](https://arxiv.org/abs/2110.07058) · [代码](https://github.com/facebookresearch/Ego4d) · 访问方式：需申请
  入选依据 C1（英文审查说明）：The parent corpus explicitly includes future-activity forecasting and interaction-state tasks. Merge v2 and forecasting aliases rather than count them separately. [审查来源](https://arxiv.org/abs/2110.07058) · 2026-10-29

- **HumanML3D** · 2022 · 派生数据 / 子集
  基于 AMASS 与 HumanAct12 的三维人体运动和文本描述数据，提供标准预处理与运动表示。
  `第一人称 / 人类活动` · `智能体位姿` · `轨迹` · `语言`
  [代码](https://github.com/EricGuo5513/HumanML3D) · 访问方式：官方重建脚本；需另行获取原始数据和人体模型
  入选依据 C3（英文审查说明）：Text annotations pair with 20-fps 3D motion clips derived from AMASS/HumanAct12; not independent motion acquisition. [审查来源](https://github.com/EricGuo5513/HumanML3D) · 2026-10-29

- **Kubric** · 2022 · 生成环境 / 工具
  用于生成带精确三维、光流、深度和分割标注的视频数据管线。
  `物理 / 科学` · `游戏 / 虚拟环境` · `合成视频` · `深度` · `光流` · `分割标注` · `三维状态`
  [主页](https://kubric.readthedocs.io/) · [论文](https://arxiv.org/abs/2203.03570) · [代码](https://github.com/google-research/kubric) · 访问方式：官方生成工具
  入选依据 C4（英文审查说明）：Official pipeline simulates multi-object physical interactions and renders annotated videos; MOVi is a generated output family. [审查来源](https://github.com/google-research/kubric) · 2026-10-29

- **PDEArena** · 2022 · 生成环境 / 工具
  面向 PDE 代理建模的时序数据与生成工具，包含 Navier-Stokes 和浅水方程的演化轨迹。
  `物理 / 科学` · `仿真状态`
  [主页](https://pdearena.github.io/pdearena/data/) · [代码](https://github.com/pdearena/pdearena) · 访问方式：官方数据生成文档和加载器
  入选依据 C1（英文审查说明）：Official documentation gives executable Navier-Stokes trajectory generation commands and split definitions. [审查来源](https://pdearena.github.io/pdearena/data/) · 2026-10-29

- **PDEBench** · 2022 · 评测集
  多种偏微分方程的时序数值解，提供初始条件、边界条件和参数变化下的物理场演化数据。
  `物理 / 科学` · `仿真状态`
  [代码](https://github.com/pdebench/PDEBench) · [论文](https://arxiv.org/abs/2210.07182) · 访问方式：官方 DaRUS 数据集及生成、下载脚本
  入选依据 C1（英文审查说明）：Time-dependent PDE simulation data and code define future physical-state prediction benchmarks. [审查来源](https://arxiv.org/abs/2210.07182) · 2026-10-29

- **V-D4RL** · 2022 · 评测集
  面向视觉离线强化学习的像素轨迹数据与评测基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `奖励` · `仿真状态`
  [代码](https://github.com/conglu1997/v-d4rl) · [论文](https://arxiv.org/abs/2206.04779) · 访问方式：公开 Google Drive 数据与开源加载器
  入选依据 C2（英文审查说明）：Offline continuous-control tasks pair visual observations with action interactions and test changing dynamics; derived from control-suite environments. [审查来源](https://arxiv.org/abs/2206.04779) · 2026-10-29

- **BABEL** · 2021 · 派生数据 / 子集
  为 AMASS 连续运动捕捉序列增加动作语义和起止时间标注，描述动作之间的时间结构。
  `第一人称 / 人类活动` · `智能体位姿` · `轨迹` · `语言` · `动作标签`
  [主页](https://babel.is.tue.mpg.de/data.html) · 访问方式：官方标注下载；运动数据需另从 AMASS 获取
  入选依据 C3（英文审查说明）：Frame/sequence annotations index underlying motion sequences; AMASS motion must be obtained separately and must not be counted as new acquisition. [审查来源](https://babel.is.tue.mpg.de/data.html) · 2026-10-29

- **BDD100K** · 2020 · 数据集
  覆盖多城市、天气与时段的大规模驾驶视频数据集，提供目标检测、车道线、可行驶区域、跟踪等多任务标注，适合研究视觉动态表示和复杂道路分布泛化。
  `自动驾驶` · `RGB 视频` · `二维框` · `分割标注` · `车道线`
  [主页](https://bdd-data.berkeley.edu/) · [论文](https://arxiv.org/abs/1805.04687) · [代码](https://github.com/bdd100k/bdd100k) · 访问方式：需注册
  入选依据 C3（英文审查说明）：Official toolkit explicitly links driving videos to GPS/IMU trajectory information; the retained scope is sequential driving recordings, not isolated perception images. [审查来源](https://github.com/bdd100k/bdd100k) · 2026-10-29

- **EPIC-KITCHENS-100** · 2020 · 数据集
  大规模第一人称厨房活动数据集，提供连续视频、动作分段、名词与动词标注及多项预测任务，适合研究人类手物交互和下一动作预测。
  `第一人称 / 人类活动` · `RGB 视频` · `音频` · `动作标签` · `语言`
  [主页](https://epic-kitchens.github.io/2021) · [论文](https://arxiv.org/abs/2006.13256) · [代码](https://github.com/epic-kitchens/epic-kitchens-100-annotations) · 访问方式：需申请并同意协议
  入选依据 C1（英文审查说明）：Long unscripted action sequences include an explicit action-anticipation challenge; includes and extends EPIC-KITCHENS-55. [审查来源](https://arxiv.org/abs/2006.13256) · 2026-10-29

- **GRAB** · 2020 · 数据集
  全身与日常物体交互的连续三维运动数据，包含身体、手部、面部、物体位姿及逐时刻接触信息。
  `第一人称 / 人类活动` · `机器人 / 具身智能` · `智能体位姿` · `物体状态` · `三维网格` · `轨迹`
  [主页](https://grab.is.tue.mpg.de/) · 访问方式：官方下载需注册并接受许可协议
  入选依据 C3（英文审查说明）：Whole-body grasping provides full human/object pose sequences and contact during interactions, not merely static grasps. [审查来源](https://grab.is.tue.mpg.de/) · 2026-10-29

- **Griddly** · 2020 · 生成环境 / 工具
  可配置二维游戏与物理环境生成器。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/Bam4d/Griddly) · 访问方式：开源引擎
  入选依据 C2（英文审查说明）：Official grid-world engine exposes step-wise action histories and configurable interactions between objects. [审查来源](https://github.com/Bam4d/Griddly) · 2026-10-29

- **LAFAN1** · 2020 · 数据集
  高质量 BVH 人体运动捕捉序列，用于运动过渡、插帧和长时运动生成。
  `第一人称 / 人类活动` · `智能体位姿` · `轨迹`
  [代码](https://github.com/ubisoft/ubisoft-laforge-animation-dataset) · 访问方式：官方 Git LFS 数据包及运动过渡评估代码
  入选依据 C3（英文审查说明）：Official motion-capture sequence release and motion-transition benchmarking support temporal pose modeling; interpolation differs from causal forecasting. [审查来源](https://github.com/ubisoft/ubisoft-laforge-animation-dataset) · 2026-10-29

- **Learning to Simulate / GNS Datasets** · 2020 · 数据集
  多材料粒子物理仿真轨迹，提供粒子类型、连续位置和全局上下文，用于下一步及长时 rollout 预测。
  `物理 / 科学` · `仿真状态` · `轨迹`
  [代码](https://github.com/google-deepmind/deepmind-research/tree/master/learning_to_simulate) · [论文](https://arxiv.org/abs/2002.09405) · 访问方式：官方 Google Cloud TFRecord 数据和下载脚本
  入选依据 C4（英文审查说明）：Official learning_to_simulate release includes downloadable particle-dynamics datasets and explicit test trajectory rollout evaluation. [审查来源](https://github.com/google-deepmind/deepmind-research/tree/master/learning_to_simulate) · 2026-10-29

- **MeshGraphNets Simulation Datasets** · 2020 · 数据集
  包含布料、变形固体和流体的网格仿真数据，提供节点状态、网格结构及训练验证测试划分。
  `物理 / 科学` · `仿真状态` · `三维网格` · `轨迹`
  [主页](https://sites.google.com/view/meshgraphnets/home) · [代码](https://github.com/google-deepmind/deepmind-research/tree/master/meshgraphnets) · [论文](https://arxiv.org/abs/2010.03409) · 访问方式：DeepMind Research 官方数据下载器和元数据
  入选依据 C4（英文审查说明）：Official release contains physical mesh simulation datasets, loaders, rollout evaluation and trajectory plotting for cloth and fluid systems. [审查来源](https://github.com/google-deepmind/deepmind-research/tree/master/meshgraphnets) · 2026-10-29

- **Procgen Benchmark** · 2020 · 生成环境 / 工具
  程序生成的视觉强化学习环境集合，提供可控动作、观测和关卡状态轨迹。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/openai/procgen) · [论文](https://arxiv.org/abs/1912.01588) · 访问方式：开源环境
  入选依据 C2（英文审查说明）：Sixteen procedurally generated game environments supply controlled interaction episodes; distinguish the base environments from derived rollout generators. [审查来源](https://arxiv.org/abs/1912.01588) · 2026-10-29

- **TrajNet++** · 2020 · 评测集
  面向行人轨迹预测的统一基准和数据格式，整合多个人群轨迹数据源，用于比较社会交互建模和多未来预测方法。
  `第一人称 / 人类活动` · `城市 / 三维场景` · `轨迹` · `智能体位姿` · `物体元数据`
  [主页](https://github.com/vita-epfl/trajnetplusplusbaselines) · 访问方式：官方 GitHub 资源提供基准工具和数据准备流程
  入选依据 C3（英文审查说明）：Official interaction-centric pedestrian trajectories and a defined future-trajectory forecasting protocol provide direct evidence; underlying source datasets overlap other motion collections. [审查来源](https://github.com/vita-epfl/trajnetplusplusbaselines) · 2026-10-29

- **Virtual KITTI 2** · 2020 · 数据集
  带有深度、光流、场景流和三维标注的逼真合成驾驶视频数据集。
  `自动驾驶` · `游戏 / 虚拟环境` · `合成视频` · `深度` · `光流` · `三维框` · `分割标注`
  [主页](https://europe.naverlabs.com/proxy-virtual-worlds-vkitti-2/) · [论文](https://arxiv.org/abs/2001.10773) · 访问方式：官方下载
  入选依据 C3（英文审查说明）：Cloned driving sequences provide camera poses, vehicle locations and scene flow over time; updated release overlaps Virtual KITTI. [审查来源](https://arxiv.org/abs/2001.10773) · 2026-10-29

- **AMASS** · 2019 · 聚合集合 / 注册表
  统一多个动作捕捉数据集的四维人体运动数据库，将不同参数化转换为一致的 SMPL 身体表示，支持长时人体运动预测、生成和交互建模。
  `第一人称 / 人类活动` · `三维状态` · `轨迹` · `智能体位姿`
  [主页](https://amass.is.tue.mpg.de/) · [论文](https://arxiv.org/abs/1904.03278) · 访问方式：官方项目访问；可能需要注册
  入选依据 C3（英文审查说明）：Unifies motion-capture sequences into a common parameterized human-body representation; source and derived motion datasets overlap. [审查来源](https://arxiv.org/abs/1904.03278) · 2026-10-29

- **Argoverse 1** · 2019 · 数据集
  面向三维跟踪与运动预测的自动驾驶数据集，结合车辆轨迹、传感器日志和高清地图，为地图条件未来预测建立了重要基准。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `地图` · `轨迹` · `三维框`
  [主页](https://www.argoverse.org/av1.html) · [论文](https://arxiv.org/abs/1911.02620) · [代码](https://github.com/argoverse/argoverse-api) · 访问方式：开放下载
  入选依据 C3（英文审查说明）：Tracked agent trajectories with rich maps include a dedicated five-second motion-forecasting dataset and 3D tracking sequences. [审查来源](https://arxiv.org/abs/1911.02620) · 2026-10-29

- **D²-City** · 2019 · 数据集
  覆盖多种天气、道路和交通状况的大规模行车视频数据集，提供连续驾驶片段和场景标注，适合研究城市交通时序建模与分布泛化。
  `自动驾驶` · `城市 / 三维场景` · `RGB 视频` · `语义标签` · `轨迹`
  [论文](https://arxiv.org/abs/1904.01975) · 访问方式：论文入口；官方访问方式需核验
  入选依据 C3（英文审查说明）：Per-frame object tracking annotations across 1,000 driving videos expose road-user motion; single-keyframe detection subsets are not the inclusion basis. [审查来源](https://arxiv.org/abs/1904.01975) · 2026-10-29

- **inD** · 2019 · 数据集
  使用无人机在德国城市路口采集的自然道路参与者轨迹数据集，覆盖车辆、自行车和行人，面向城市交互行为预测和场景化安全验证。
  `自动驾驶` · `城市 / 三维场景` · `轨迹` · `物体元数据` · `智能体位姿` · `场景元数据`
  [主页](https://levelxdata.com/ind-dataset/) · [论文](https://arxiv.org/abs/1911.07602) · 访问方式：官方 leveLXData/inD 申请页面；访问需同意数据集条款
  入选依据 C3（英文审查说明）：Naturalistic urban road-user trajectories are explicitly designed for motion prediction and scenario validation. [审查来源](https://arxiv.org/abs/1911.07602) · 2026-10-29

- **INTERACTION Dataset** · 2019 · 数据集
  聚焦路口、环岛和汇入等高交互驾驶场景的轨迹数据集，包含多国道路中的车辆与行人运动，适合多智能体预测和交互建模。
  `自动驾驶` · `轨迹` · `地图` · `智能体位姿`
  [论文](https://arxiv.org/abs/1910.03088) · [代码](https://github.com/interaction-dataset/interaction-dataset) · 访问方式：开放下载
  入选依据 C3（英文审查说明）：International interactive-driving motion trajectories with semantic maps support prediction, planning and behavior generation. [审查来源](https://arxiv.org/abs/1910.03088) · 2026-10-29

- **PREVENTION Dataset** · 2019 · 数据集
  面向周围车辆意图与轨迹预测的真实自动驾驶数据集，包含前后彩色视频、LiDAR、长短距雷达、RTK DGNSS、IMU、车道变化标注、检测和车辆轨迹。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `毫米波雷达` · `GPS / 惯性测量单元` · `轨迹`
  [主页](https://prevention-dataset.uah.es/) · [论文](https://doi.org/10.1109/ITSC.2019.8917433) · 访问方式：官方网站提供原始数据、处理后数据、工具和标注
  入选依据 C3（英文审查说明）：Official release includes a trajectory-prediction challenge and frame-indexed vehicle annotations with calibrated raw recordings. [审查来源](https://prevention-dataset.uah.es/) · 2026-10-29

- **3DPW** · 2018 · 数据集
  真实环境中采集的三维人体姿态与运动视频数据集，包含 SMPL 参数和相机信息。
  `第一人称 / 人类活动` · `RGB 视频` · `智能体位姿` · `相机位姿`
  [主页](https://virtualhumans.mpi-inf.mpg.de/3DPW/) · 访问方式：官方下载
  入选依据 C3（英文审查说明）：Official page provides per-frame camera poses and explicitly links a future human-trajectory and skeleton forecasting protocol. [审查来源](https://virtualhumans.mpi-inf.mpg.de/3DPW/) · 2026-10-29

- **highD** · 2018 · 数据集
  使用无人机在德国高速公路上采集的自然驾驶车辆轨迹数据集，提供车辆位置、速度、加速度、车道、车型、尺寸和机动行为等高精度轨迹信息。
  `自动驾驶` · `轨迹` · `物体元数据` · `智能体位姿` · `场景元数据`
  [主页](https://levelxdata.com/highd-dataset/) · [论文](https://arxiv.org/abs/1810.05642) · 访问方式：官方 leveLXData/highD 申请页面；访问需同意数据集条款
  入选依据 C3（英文审查说明）：Drone-recorded naturalistic highway vehicle trajectories explicitly support scenario reconstruction and motion modeling. [审查来源](https://arxiv.org/abs/1810.05642) · 2026-10-29

- **Kinetics-600 (Video Prediction Use)** · 2018 · 数据集
  动作视频在 Video Diffusion Models 中用于以 5 帧为条件预测后续 11 帧。
  `第一人称 / 人类活动` · `RGB 视频`
  [论文](https://arxiv.org/pdf/2204.03458) · 访问方式：论文描述该资源；完整下载未测试
  入选依据 C1（英文审查说明）：A published forward-prediction protocol conditions on five frames and predicts the next eleven. This justifies the prediction use of the video corpus, not treating action-category labels as motor commands. [审查来源](https://arxiv.org/pdf/2204.03458) · 2026-10-30

- **KIT Motion-Language** · 2016 · 聚合集合 / 注册表
  提供连续关节运动与自然语言描述的多模态集合，保留原始动作来源元数据。
  `第一人称 / 人类活动` · `智能体位姿` · `轨迹` · `语言`
  [主页](https://motion-annotation.humanoids.kit.edu/dataset/) · [论文](https://arxiv.org/abs/1607.03827) · 访问方式：官方数据包及 MMM/C3D 解析示例
  入选依据 C3（英文审查说明）：Human motion-capture sequences from multiple collections are unified and language-annotated; overlap underlying mocap/AMASS resources. [审查来源](https://arxiv.org/abs/1607.03827) · 2026-10-29

- **Stanford Drone Dataset** · 2016 · 数据集
  从斯坦福校园上空采集的多智能体鸟瞰视频数据集，标注行人、自行车、滑板、车辆、公交车和高尔夫车轨迹，用于目标跟踪、社会导航和未来轨迹预测。
  `第一人称 / 人类活动` · `城市 / 三维场景` · `RGB 视频` · `轨迹` · `二维框` · `动作标签` · `物体元数据`
  [主页](https://cvgl.stanford.edu/projects/uav_data/) · [论文](https://arxiv.org/abs/1601.00998) · 访问方式：官方项目页提供 Stanford Campus Dataset 下载入口
  入选依据 C3（英文审查说明）：Drone-observed road users and pedestrians are explicitly evaluated through future-trajectory prediction in crowded scenes. [审查来源](https://arxiv.org/abs/1601.00998) · 2026-10-29

- **SYNTHIA-Seqs** · 2016 · 数据集
  多视角合成驾驶序列包含运动行人/骑行者与对齐深度，面向时空建模。
  `自动驾驶` · `合成视频` · `深度` · `轨迹`
  [论文](https://openaccess.thecvf.com/content_cvpr_2016/papers/Ros_The_SYNTHIA_Dataset_CVPR_2016_paper.pdf) · 访问方式：论文描述该资源；完整下载未测试
  入选依据 C1（英文审查说明）：SYNTHIA-Seqs provides four approximately 50,000-frame sequences with moving pedestrians/cyclists, aligned views and depth, explicitly intended for spatiotemporal modeling. The independent random-image subset is outside this entry's scope. [审查来源](https://openaccess.thecvf.com/content_cvpr_2016/papers/Ros_The_SYNTHIA_Dataset_CVPR_2016_paper.pdf) · 2026-10-30

- **ViZDoom** · 2016 · 生成环境 / 工具
  基于 Doom 的第一人称视觉强化学习环境，提供可控动作和帧序列。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [主页](https://vizdoom.cs.put.poznan.pl/) · [代码](https://github.com/Farama-Foundation/ViZDoom) · [论文](https://arxiv.org/abs/1605.02097) · 访问方式：开源引擎与场景
  入选依据 C2（英文审查说明）：Customizable first-person Doom scenarios expose visual observations to bots executing actions; environment generator, not a fixed corpus. [审查来源](https://arxiv.org/abs/1605.02097) · 2026-10-29

- **Moving MNIST** · 2015 · 数据集
  移动数字未来帧预测数据，公开测试序列各含 20 帧。
  `物理 / 科学` · `合成视频`
  [主页](https://www.tensorflow.org/datasets/catalog/moving_mnist) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C1（英文审查说明）：The released test split contains 10,000 ordered 20-frame digit-motion videos. Official documentation identifies the video-representation/prediction paper and distinguishes generated training sequences. [审查来源](https://www.tensorflow.org/datasets/catalog/moving_mnist) · 2026-10-30

- **Human3.6M** · 2014 · 数据集
  面向人体姿态与运动建模的大规模多视角数据集，提供同步视频、三维关节、相机参数和动作类别，是人类未来姿态预测的重要历史基准。
  `第一人称 / 人类活动` · `多视角 RGB 视频` · `三维状态` · `动作标签` · `相机位姿`
  [主页](http://vision.imar.ro/human3.6m/description.php) · [论文](https://ieeexplore.ieee.org/document/6682899) · 访问方式：需注册并同意协议
  入选依据 C3（英文审查说明）：Synchronized 50Hz multiview video and accurate 3D joint positions/angles expose human motion trajectories. [审查来源](http://vision.imar.ro/human3.6m/description.php) · 2026-10-29

- **UCF101 (Video Prediction Use)** · 2012 · 数据集
  原始动作视频在后续连续视频流模型论文中被明确用于未来视频预测。
  `第一人称 / 人类活动` · `RGB 视频`
  [论文](https://arxiv.org/abs/2412.05633) · 访问方式：论文描述该资源；完整下载未测试
  入选依据 C1（英文审查说明）：The paper explicitly evaluates future-video prediction on UCF101. This later predictive protocol supplies evidence absent from the original classification paper; no action/state-control labels are claimed. [审查来源](https://arxiv.org/abs/2412.05633) · 2026-10-30

- **KTH (Video Prediction Use)** · 2004 · 数据集
  人物动作视频具有 PredRNN 官方未来帧预测训练与评测路径。
  `第一人称 / 人类活动` · `RGB 视频`
  [代码](https://raw.githubusercontent.com/thuml/predrnn-pytorch/master/README.md) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C1（英文审查说明）：The prediction authors release KTH data-loading/training scripts and evaluate generated future frames. Inclusion is restricted to the video-prediction use, not the original action-classification task. [审查来源](https://raw.githubusercontent.com/thuml/predrnn-pytorch/master/README.md) · 2026-10-30

<a id="action-conditioned-dynamics"></a>

### 动作条件动力学（104）

- **kine2go** · 2026 · 数据集
  将动物与四足动作捕捉重定向为 Unitree Go2 可执行参考轨迹并生成策略回放的数据集。
  `机器人 / 具身智能` · `轨迹` · `机器人状态` · `动作` · `RGB 视频`
  [主页](https://nomagiclab.github.io/kine2go-pipeline/) · [论文](https://arxiv.org/abs/2606.14433) · [代码](https://github.com/nomagiclab/kine2go-pipeline) · 访问方式：数据产物已在 Hugging Face 提供
  入选依据 C2（英文审查说明）：The dataset contains Go2-compatible kinematic trajectories with corresponding motor-level actions, collected from 40 policies. [审查来源](https://arxiv.org/abs/2606.14433) · 2026-10-29

- **KungFuAthleteBot Motion Dataset** · 2026 · 数据集
  由武术训练视频提取并重定向到人形机器人的高动态动作数据集，覆盖地面和跳跃动作。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `RGB 视频` · `轨迹` · `机器人状态`
  [主页](https://kungfuathletebot.github.io/) · [论文](https://arxiv.org/abs/2602.13656) · [代码](https://github.com/NPCLEI/KungFuAthleteBot) · 访问方式：可通过 Hugging Face 和官方下载入口访问
  入选依据 C3（英文审查说明）：The paper explicitly introduces a high-dynamic human motion dataset and trajectory correction for robot motion learning; release access remains unverified. [审查来源](https://arxiv.org/abs/2602.13656) · 2026-10-29

- **Open Locomotion Skills Dataset** · 2026 · 生成环境 / 工具
  统一不同形态腿式机器人的运动轨迹、地形元数据和仿真到现实工具的数据集。
  `机器人 / 具身智能` · `轨迹` · `机器人状态` · `动作` · `场景元数据`
  [主页](https://kanishqgandharv219.github.io/open-locomotion-dataset/) · [代码](https://github.com/KanishqGandharv219/open-locomotion-dataset) · 访问方式：统一模式、导入器、校验和基准工具可用
  入选依据 C2（英文审查说明）：Official toolkit defines locomotion episode/trajectory schemas and a generate_trajectories API; generated and imported hardware data retain separate provenance. [审查来源](https://github.com/KanishqGandharv219/open-locomotion-dataset) · 2026-10-29

- **WildWorld** · 2026 · 数据集
  面向可交互生成式角色扮演世界模型的大规模动作条件游戏数据集，带显式角色状态、相机位姿和深度标注。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `深度` · `相机位姿` · `游戏状态`
  [主页](https://alaya-studio.github.io/wildworld-project/) · [论文](https://arxiv.org/abs/2603.23497) · [代码](https://github.com/AlayaLab/WildWorld) · 访问方式：第一部分已在 Hugging Face 提供，后续部分计划发布
  入选依据 C2（英文审查说明）：Game rollouts expose explicit state with synchronized action labels across more than 108 million frames. [审查来源](https://arxiv.org/abs/2603.23497) · 2026-10-29

- **AiMDoom / NextBestPath Benchmark** · 2025 · 评测集
  主动建图发布包含 AiMDoom 场景、仿真器和可执行规划评测。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `智能体位姿` · `地图`
  [代码](https://raw.githubusercontent.com/shiyao-li/NextBestPath/main/README.md) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C2（英文审查说明）：The release includes an active-mapping simulator, AiMDoom scenes and executable planning/evaluation. The resource is the AiMDoom benchmark and simulator, not the NextBestPath method alone. [审查来源](https://raw.githubusercontent.com/shiyao-li/NextBestPath/main/README.md) · 2026-10-30

- **BlueROV2 Dynamics Dataset** · 2025 · 数据集
  包含水下机器人动力学数据、训练脚本和学习与物理模型的资源。
  `机器人 / 具身智能` · `物理 / 科学` · `动作` · `机器人状态` · `轨迹`
  [代码](https://github.com/ViktorNfa/bluerov2_dynamics) · 访问方式：官方数据和训练代码可用
  入选依据 C2（英文审查说明）：Repository provides recorded/simulated underwater dynamics data and one-step and multi-step prediction evaluation with control-aware models. [审查来源](https://github.com/ViktorNfa/bluerov2_dynamics) · 2026-10-29

- **EMMOE-100 Interactive Benchmark** · 2025 · 评测集
  EMMOE-100 提供任务、高层规划与 Habitat 低层执行流程和成功率评测。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `智能体位姿` · `语言`
  [代码](https://raw.githubusercontent.com/silence143/EMMOE/main/README.md) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C2（英文审查说明）：The release documents EMMOE-100 tasks and runnable high-level planning/low-level Habitat execution with saved results and success metrics. Inclusion covers the interactive benchmark. [审查来源](https://raw.githubusercontent.com/silence143/EMMOE/main/README.md) · 2026-10-30

- **MuJoCo Playground** · 2025 · 生成环境 / 工具
  基于 MuJoCo MJX 的开源机器人学习环境集合，可大规模生成接触丰富的状态、动作和传感器轨迹。
  `机器人 / 具身智能` · `物理 / 科学` · `仿真状态` · `动作` · `奖励` · `RGB 视频`
  [代码](https://github.com/google-deepmind/mujoco_playground) · [论文](https://arxiv.org/abs/2502.08844) · 访问方式：开源环境与训练代码
  入选依据 C2（英文审查说明）：Released physics engine, batch renderer and robot training environments expose controlled state/pixel interactions; not a fixed recorded dataset. [审查来源](https://arxiv.org/abs/2502.08844) · 2026-10-29

- **Open-H-Embodiment** · 2025 · 聚合集合 / 注册表
  面向医疗机器人通用视觉语言动作模型的社区驱动开放数据计划。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [代码](https://github.com/open-h/open-h-embodiment) · 访问方式：官方项目仓库和贡献入口可用
  入选依据 C2（英文审查说明）：Official v1 release pairs healthcare-robot videos and kinematics; v2 uses a versioned LeRobot format. Do not count versions separately. [审查来源](https://github.com/open-h/open-h-embodiment) · 2026-10-29

- **PHUMA** · 2025 · 聚合集合 / 注册表
  通过物理约束筛选和重定向构建的高质量人形机器人运动数据集。
  `机器人 / 具身智能` · `轨迹` · `机器人状态` · `三维状态`
  [主页](https://davian-robotics.github.io/PHUMA/) · [论文](https://arxiv.org/abs/2510.26236) · [代码](https://github.com/DAVIAN-Robotics/PHUMA) · 访问方式：可通过官方下载脚本和 Hugging Face 获取预构建数据
  入选依据 C3（英文审查说明）：Physics-curated and retargeted mocap/video motion produces a 73-hour humanoid trajectory corpus; overlaps source motion collections. [审查来源](https://arxiv.org/abs/2510.26236) · 2026-10-29

- **RoboAI UR5e Demonstrations** · 2025 · 数据集
  程序控制的真实机器人示范包含七维动作、动作归一化/绝对值掩码、RGB 和 15 维机器人状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/robo_ai_u_r5e) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Scripted real-robot demonstrations provide seven-dimensional actions, action-normalization/absolute masks, RGB and 15-dimensional robot state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/robo_ai_u_r5e) · 2026-10-30

- **RoboGround Demonstration Data** · 2025 · 派生数据 / 子集
  基于 RoboCasa 的示范配有图像、机器人状态、逐时动作及语言指令。
  `机器人 / 具身智能` · `合成视频` · `动作` · `机器人状态` · `语言`
  [论文](https://arxiv.org/html/2504.21530v1) · 访问方式：论文描述该资源；完整下载未测试
  入选依据 C2（英文审查说明）：The paper reports 24K RoboCasa-based demonstrations with images, robot state and time-indexed action supervision, paired with 112K instructions. This scope is the demonstration data, not standalone grounding masks. [审查来源](https://arxiv.org/html/2504.21530v1) · 2026-10-30

- **RoboVerse** · 2025 · 生成环境 / 工具
  统一机器人学习仿真平台、任务数据和评测协议的可扩展具身资源。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `机器人状态` · `物体状态` · `轨迹`
  [主页](https://roboverse.wiki/) · [论文](https://arxiv.org/abs/2504.18904) · [代码](https://github.com/RoboVerseOrg/RoboVerse) · 访问方式：平台、任务和基准代码已公开
  入选依据 C2（英文审查说明）：MetaSim exposes simulator initialization, physical stepping and shared interfaces; generated data is evaluated for world-model learning and policy learning. [审查来源](https://arxiv.org/abs/2504.18904) · 2026-10-29

- **BRMData** · 2024 · 数据集
  双臂移动操作 HDF5 数据对齐动作、多视角图像、关节位置/速度/力矩与底座速度。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `动作` · `机器人状态`
  [代码](https://raw.githubusercontent.com/Louis-ZhangLe/BRMData/main/collect_data/collect_data.py) · [主页](https://embodiedrobot.github.io/BRMData.html) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C2（英文审查说明）：The HDF5 writer pairs timesteps with actions and stores multi-view images, 14-joint position/velocity/effort and base velocity. This establishes the action-aligned bimanual trajectory schema. [审查来源](https://raw.githubusercontent.com/Louis-ZhangLe/BRMData/main/collect_data/collect_data.py) · 2026-10-30

- **Conq Hose Manipulation** · 2024 · 数据集
  移动软管操作提供七维动作、三个机载相机视角及 66 维状态。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/conq_hose_manipulation) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Mobile hose manipulation exposes seven-dimensional actions, three onboard camera views and 66-dimensional state. Steps are organized into episodes. The schema gives action/state dimensions without defining every component; do not infer their units. [审查来源](https://www.tensorflow.org/datasets/catalog/conq_hose_manipulation) · 2026-10-30

- **DrivingDojo** · 2024 · 数据集
  专为交互式驾驶世界模型构建的视频数据集，覆盖完整驾驶操作、多智能体交互和开放世界驾驶知识，并提供动作指令跟随评测。
  `自动驾驶` · `RGB 视频` · `动作` · `语言` · `场景元数据`
  [论文](https://arxiv.org/abs/2410.10738) · [代码](https://github.com/Robertwyq/Drivingdojo) · 访问方式：提供论文和官方项目仓库；数据访问条款待核验
  入选依据 C2（英文审查说明）：Dataset explicitly targets interactive driving dynamics and an action-instruction-following benchmark for controlled future prediction. [审查来源](https://arxiv.org/abs/2410.10738) · 2026-10-29

- **Functional Manipulation Benchmark (FMB)** · 2024 · 数据集
  多阶段抓取、重定向与装配示范，提供四视角 RGB-D、机械臂状态、末端力矩和笛卡尔控制动作。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态` · `轨迹`
  [主页](https://functional-manipulation-benchmark.github.io/) · [论文](https://arxiv.org/abs/2401.08553) · 访问方式：官方 NumPy 轨迹包及详细数据格式
  入选依据 C2（英文审查说明）：Official dataset page identifies 22,550 robot trajectories recorded from global and wrist cameras for multi-stage manipulation. [审查来源](https://functional-manipulation-benchmark.github.io/) · 2026-10-29

- **IO-AI RLDS Robot Data** · 2024 · 数据集
  该 RLDS 版本包含七维动作、八维状态、多视角 RGB、深度及相机标定。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/io_ai_tech) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：The RLDS release has seven-dimensional actions, eight-dimensional state, multiple RGB views, depth and camera calibration. Steps are organized into episodes. This entry describes the TFDS RLDS schema; the upstream IO Ultra conversion README describes a different, richer layout. [审查来源](https://www.tensorflow.org/datasets/catalog/io_ai_tech) · 2026-10-30

- **Isaac Lab** · 2024 · 生成环境 / 工具
  面向机器人学习的 GPU 物理仿真框架，可生成大规模状态—动作轨迹。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `仿真状态` · `动作` · `奖励`
  [代码](https://github.com/isaac-sim/IsaacLab) · 访问方式：开源仓库
  入选依据 C2（英文审查说明）：Official framework provides robot sensors and ready-to-train simulated control environments. [审查来源](https://github.com/isaac-sim/IsaacLab) · 2026-10-29

- **Microsoft Bridge-Compatible Trajectories** · 2024 · 数据集
  微软采集的 WidowX 轨迹提供七维动作/状态、多路相机流及每回合模态存在标记。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/bridge_data_msr) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Microsoft-collected WidowX trajectories provide seven-dimensional actions/state, multiple camera streams and per-episode modality-presence flags. Steps are organized into episodes. Collected at Microsoft in a Bridge-compatible format; this is not simply a renamed Berkeley BridgeData download. [审查来源](https://www.tensorflow.org/datasets/catalog/bridge_data_msr) · 2026-10-30

- **Mobile ALOHA Demonstrations** · 2024 · 数据集
  全身遥操作采集的移动双臂操作示范，联合记录视觉、机械臂和移动底盘相关状态与动作。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `动作` · `机器人状态` · `轨迹`
  [主页](https://mobile-aloha.github.io/) · [代码](https://github.com/MarkFzp/mobile-aloha) · 访问方式：官方项目提供示范数据集入口及回放工具
  入选依据 C2（英文审查说明）：Whole-body teleoperation records mobile bimanual demonstrations and the project provides a datasets entry point. [审查来源](https://mobile-aloha.github.io/) · 2026-10-29

- **RetroAct Environment Annotations and Rollout Generator** · 2024 · 生成环境 / 工具
  覆盖 974 个游戏环境的标注与回放生成工具，用于动作条件世界模型；不把环境数量当作已下载轨迹数量。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `仿真状态` · `相机位姿`
  [主页](https://nsavov.github.io/GenieRedux/) · [代码](https://github.com/insait-institute/GenieRedux) · 访问方式：官方仓库提供环境标注、数据生成、训练和评测代码
  入选依据 C2（英文审查说明）：RetroAct annotates 974 game environments and the repository gives executable action-aligned dataset-generation commands. Environment annotations are not 974 independent trajectory datasets. [审查来源](https://github.com/insait-institute/GenieRedux) · 2026-10-29

- **RoboCasa** · 2024 · 生成环境 / 工具
  面向家庭厨房机器人学习的大规模仿真环境和任务套件，提供多样化场景、物体、语言任务及可生成的视觉动作轨迹。
  `机器人 / 具身智能` · `RGB 视频` · `深度` · `动作` · `机器人状态` · `语言`
  [主页](https://robocasa.ai/) · [论文](https://arxiv.org/abs/2406.02523) · [代码](https://github.com/robocasa/robocasa) · 访问方式：开放生成工具
  入选依据 C2（英文审查说明）：Interactive kitchen simulation provides human demonstrations for controlled manipulation tasks; generation platform, with associated recorded demonstrations. [审查来源](https://arxiv.org/abs/2406.02523) · 2026-10-29

- **ALOHA / ACT Simulation Demonstrations** · 2023 · 数据集
  ACT 官方公开的双臂仿真示范，涵盖方块转移和双臂插入，提供脚本及人类演示和录制工具。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `轨迹`
  [代码](https://github.com/tonyzhaozh/act) · [主页](https://tonyzhaozh.github.io/aloha/) · 访问方式：官方仿真示范包及 record_sim_episodes.py
  入选依据 C2（英文审查说明）：README links scripted/human demonstrations for two controlled simulated tasks and identifies episode training and joint/EE-control environments. [审查来源](https://github.com/tonyzhaozh/act) · 2026-10-29

- **ASU Tabletop Manipulation** · 2023 · 数据集
  桌面操作提供七维 action/action_delta 数组、RGB、关节状态及末端/物体位姿。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `物体状态`
  [主页](https://www.tensorflow.org/datasets/catalog/asu_table_top_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Tabletop manipulation contains seven-dimensional action/action_delta arrays, RGB, joint states and end-effector/object poses. Steps are organized into episodes. The official seven-dimensional action description lists inconsistent components; verify the mapping before use. [审查来源](https://www.tensorflow.org/datasets/catalog/asu_table_top_converted_externally_to_rlds) · 2026-10-30

- **Berkeley AUTOLAB UR5** · 2023 · 数据集
  UR5 操作回合包含逐步平移/旋转/夹爪动作、外部及手部图像、深度和 15 维状态。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/berkeley_autolab_ur5) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：UR5 manipulation episodes provide stepwise translation/rotation/gripper actions, external and hand images, depth and 15-dimensional state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/berkeley_autolab_ur5) · 2026-10-30

- **Berkeley Cable Routing** · 2023 · 数据集
  线缆布线回合，包含平移/旋转动作、四路相机和七维机器人状态。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/berkeley_cable_routing) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Cable-routing episodes align translation/rotation actions, four camera views and seven-dimensional robot state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/berkeley_cable_routing) · 2026-10-30

- **Berkeley Fanuc Manipulation** · 2023 · 数据集
  操作回合包含六维位姿增量动作、外部/腕部图像、末端位姿及关节状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/berkeley_fanuc_manipulation) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Manipulation episodes contain six-dimensional pose-delta actions, external/wrist images, end-effector pose and joint states. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/berkeley_fanuc_manipulation) · 2026-10-30

- **Berkeley RPT Demonstrations** · 2023 · 数据集
  抓放回合提供七个关节增量指令与夹爪指令、腕部图像和关节位置。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/berkeley_rpt_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Pick/place episodes expose seven joint-delta commands plus a gripper command, wrist images and joint positions. Steps are organized into episodes. Robot naming differs between the overview and joint-field description; the displayed scope follows the numeric schema. [审查来源](https://www.tensorflow.org/datasets/catalog/berkeley_rpt_converted_externally_to_rlds) · 2026-10-30

- **CLVR Jaco Play** · 2023 · 数据集
  桌面抓放回合，将平移和夹爪动作与相机图像、末端位姿/速度及关节状态对齐。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/jaco_play) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Tabletop pick/place episodes align translation/gripper actions with camera images, end-effector pose/velocity and joint state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/jaco_play) · 2026-10-30

- **CMU Franka Exploration** · 2023 · 数据集
  厨房探索回合提供 RGB、八维动作及额外的结构化可供性/控制动作。
  `机器人 / 具身智能` · `RGB 视频` · `动作`
  [主页](https://www.tensorflow.org/datasets/catalog/cmu_franka_exploration_dataset_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Kitchen exploration episodes contain RGB, eight-dimensional actions and an additional structured affordance/control action. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/cmu_franka_exploration_dataset_converted_externally_to_rlds) · 2026-10-30

- **CMU IAMLab Pickup and Insert** · 2023 · 数据集
  抓取与插入回合包含八维位姿/夹爪动作、双相机及 20 维关节/力状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/iamlab_cmu_pickup_insert_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Picking/insertion episodes contain eight-dimensional pose/gripper actions, two cameras and a 20-dimensional joint/force state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/iamlab_cmu_pickup_insert_converted_externally_to_rlds) · 2026-10-30

- **CMU PlayFusion Demonstrations** · 2023 · 数据集
  厨房交互回合包含九维动作、RGB 及八维关节/夹爪状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/cmu_play_fusion) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Kitchen play episodes contain nine-dimensional actions, RGB and eight-dimensional joint/gripper state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/cmu_play_fusion) · 2026-10-30

- **CMU Stretch Kitchen** · 2023 · 数据集
  厨房交互回合提供八维末端/夹爪/终止动作、RGB 及四维状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/cmu_stretch) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Kitchen interaction episodes provide eight-dimensional end-effector/gripper/termination actions, RGB and four-dimensional state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/cmu_stretch) · 2026-10-30

- **Columbia Push-T Real** · 2023 · 数据集
  真实 UR5 推送回合将末端平移/旋转/夹爪动作与外部/腕部图像及平面末端位置对应。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/columbia_cairlab_pusht_real) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Real UR5 pushing episodes pair end-effector translation/rotation/gripper actions with external/wrist images and planar end-effector position. Steps are organized into episodes. Real UR5 recordings are distinct from the separately cataloged simulated Push-T archive. [审查来源](https://www.tensorflow.org/datasets/catalog/columbia_cairlab_pusht_real) · 2026-10-30

- **D3Fields Robot Demonstrations** · 2023 · 数据集
  桌面与餐具操作提供三维位移动作、四视角 RGB-D 及 4×4 末端变换矩阵。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/uiuc_d3field) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Desk/utensil manipulation provides 3D displacement actions, four RGB-D camera views and 4-by-4 end-effector transforms. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/uiuc_d3field) · 2026-10-30

- **DLR SARA Grid Clamp** · 2023 · 数据集
  网格夹具放置回合提供七维动作、RGB 和 12 维位姿/力旋量观测。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/dlr_sara_grid_clamp_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Grid-clamp placement episodes provide seven-dimensional actions, RGB and 12-dimensional pose/wrench observations. Steps are organized into episodes. The seven-dimensional action description documents only six pose components; verify the last component. [审查来源](https://www.tensorflow.org/datasets/catalog/dlr_sara_grid_clamp_converted_externally_to_rlds) · 2026-10-30

- **DLR SARA Pouring** · 2023 · 数据集
  瓶向杯中倾倒的回合包含七维动作、RGB 与六维末端状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/dlr_sara_pour_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Bottle-to-mug pouring episodes contain seven-dimensional actions, RGB and six-dimensional end-effector state. Steps are organized into episodes. The action array has seven components but only six are described; the remaining component is unverified. [审查来源](https://www.tensorflow.org/datasets/catalog/dlr_sara_pour_converted_externally_to_rlds) · 2026-10-30

- **ETH Agent Affordances** · 2023 · 数据集
  烤箱开启轨迹包含六维末端速度、物体点云及带门开启角的状态。
  `机器人 / 具身智能` · `三维状态` · `动作` · `机器人状态` · `物体状态`
  [主页](https://www.tensorflow.org/datasets/catalog/eth_agent_affordances) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Oven-opening trajectories contain six-dimensional end-effector velocities, object point clouds and state including the door angle. Steps are organized into episodes. The image field is explicitly zero-filled; the object point cloud describes the episode initial state. [审查来源](https://www.tensorflow.org/datasets/catalog/eth_agent_affordances) · 2026-10-30

- **FluidLab** · 2023 · 生成环境 / 工具
  复杂流体操作的可微仿真基准，支持记录交互目标、保存优化控制轨迹并回放多材料动力学。
  `机器人 / 具身智能` · `物理 / 科学` · `动作` · `仿真状态` · `RGB 视频`
  [主页](https://fluidlab2023.github.io/) · [代码](https://github.com/zhouxian/FluidLab) · 访问方式：官方生成、轨迹保存和回放命令
  入选依据 C2（英文审查说明）：Differentiable multi-material simulation defines controlled fluid-manipulation tasks and physical evolution; generation environment, not a fixed dataset. [审查来源](https://fluidlab2023.github.io/) · 2026-10-29

- **Homes of New York (Dobb-E)** · 2023 · 数据集
  使用手持 Stick 采集的家庭操作示范，包含 RGB-D 视频、六维夹爪位姿及开合角度标注。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `RGB-D` · `动作` · `智能体位姿` · `轨迹`
  [主页](https://dobb-e.com/) · [论文](https://arxiv.org/abs/2311.16098) · 访问方式：官方 RGB/动作及 RGB-D/动作数据包
  入选依据 C2（英文审查说明）：The Stick records household manipulation demonstrations in 22 homes for policy transfer. Human handheld demonstrations, not robot-collected motor controls. [审查来源](https://arxiv.org/abs/2311.16098) · 2026-10-29

- **Imperial Sawyer Wrist Camera** · 2023 · 数据集
  桌面任务回合将八维运动/夹爪/终止动作与腕部图像及二值夹爪状态对齐。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/imperialcollege_sawyer_wrist_cam) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Tabletop episodes align eight-dimensional motion/gripper/termination actions with wrist images and binary gripper state. Steps are organized into episodes. The main-image and wrist-image fields represent the same view. [审查来源](https://www.tensorflow.org/datasets/catalog/imperialcollege_sawyer_wrist_cam) · 2026-10-30

- **KAIST Nonprehensile Manipulation** · 2023 · 数据集
  非抓取操作回合提供 20 维位姿/刚度/阻尼动作、RGB、局部点云和 21 维状态。
  `机器人 / 具身智能` · `RGB 视频` · `三维状态` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/kaist_nonprehensile_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Nonprehensile episodes expose 20-dimensional pose/stiffness/damping actions, RGB, partial point clouds and 21-dimensional state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/kaist_nonprehensile_converted_externally_to_rlds) · 2026-10-30

- **MimicPlay Robot Demonstrations** · 2023 · 数据集
  机器人部分包含七维动作、两路前方视角与一路腕部视角、末端位姿及关节位置/速度。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/mimic_play) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：The robot portion contains seven-dimensional actions, two front views and a wrist view, end-effector pose and joint positions/velocities. Steps are organized into episodes. Scope is the action-bearing robot portion; human-play videos are not automatically robot motor-command trajectories. [审查来源](https://www.tensorflow.org/datasets/catalog/mimic_play) · 2026-10-30

- **Minari Offline RL Datasets** · 2023 · 聚合集合 / 注册表
  标准化离线强化学习数据集库，提供带观测、动作、奖励和终止信号的完整回合。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `仿真状态` · `动作` · `奖励` · `轨迹`
  [主页](https://minari.farama.org/) · [代码](https://github.com/Farama-Foundation/Minari) · 访问方式：开放数据注册表与加载器
  入选依据 C2（英文审查说明）：Offline-RL dataset registry provides episode sampling, trajectory filtering and generation; it includes migrated D4RL components and is not an independent corpus. [审查来源](https://minari.farama.org/) · 2026-10-29

- **Minigrid** · 2023 · 生成环境 / 工具
  网格环境提供离散动作、任务条件观测以及导航和物体状态变化。
  `游戏 / 虚拟环境` · `游戏状态` · `动作` · `奖励`
  [代码](https://raw.githubusercontent.com/Farama-Foundation/Minigrid/main/README.md) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C2（英文审查说明）：Gymnasium environments provide discrete actions, mission-conditioned observations and state-changing navigation/object tasks. BabyAI is a related derived suite, not disjoint data. [审查来源](https://raw.githubusercontent.com/Farama-Foundation/Minigrid/main/README.md) · 2026-10-30

- **MUTEX Robot Demonstrations** · 2023 · 数据集
  带多模态任务描述的操作回合，包含逐步动作、双视角图像及机器人状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://www.tensorflow.org/datasets/catalog/utaustin_mutex) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C2（英文审查说明）：1,500 episodes expose step-level actions, RGB/wrist images and 24-dimensional robot state. Modal task descriptions are not motor commands. [审查来源](https://www.tensorflow.org/datasets/catalog/utaustin_mutex) · 2026-10-30

- **NYU ROT Demonstrations** · 2023 · 数据集
  短时桌面任务回合包含七维末端/夹爪动作、RGB 和七维状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/nyu_rot_dataset_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Short-horizon tabletop episodes provide seven-dimensional end-effector/gripper actions, RGB and seven-dimensional state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/nyu_rot_dataset_converted_externally_to_rlds) · 2026-10-30

- **PLEX Robosuite Demonstrations** · 2023 · 数据集
  六类操作任务的仿真示范提供七维动作、双视角渲染图像及 32 维状态。
  `机器人 / 具身智能` · `合成视频` · `动作` · `仿真状态`
  [主页](https://www.tensorflow.org/datasets/catalog/plex_robosuite) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Simulation demonstrations expose seven-dimensional actions, two rendered views and 32-dimensional state for six manipulation tasks. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/plex_robosuite) · 2026-10-30

- **Push-T Demonstrations** · 2023 · 数据集
  Diffusion Policy 发布的平面 T 形物体推送示范，包含连续观测、状态和推动动作。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `物体状态` · `轨迹`
  [代码](https://github.com/real-stanford/diffusion_policy) · [论文](https://arxiv.org/abs/2303.04137) · 访问方式：官方训练数据包和回放缓冲区加载器
  入选依据 C2（英文审查说明）：Official Diffusion Policy repository links Push-T training data, demonstration collection and task-specific rollout evaluation. [审查来源](https://github.com/real-stanford/diffusion_policy) · 2026-10-29

- **Race Against the Machine** · 2023 · 数据集
  自主和人类驾驶竞速飞行数据，记录控制输入、惯性测量、图像和运动捕捉状态。
  `机器人 / 具身智能` · `RGB 视频` · `惯性测量单元` · `动作` · `机器人状态` · `轨迹`
  [代码](https://github.com/tii-racing/drone-racing-dataset) · [论文](https://arxiv.org/abs/2311.02667) · 访问方式：官方下载脚本及飞行数据格式文档
  入选依据 C2（英文审查说明）：High-speed flight recordings pair visual/inertial/mocap streams with commands and control inputs. [审查来源](https://arxiv.org/abs/2311.02667) · 2026-10-29

- **RH20T** · 2023 · 数据集
  真实机器人双臂操作数据集，包含多视角 RGB-D、力觉和机器人状态。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态`
  [主页](https://rh20t.github.io/) · [代码](https://github.com/rh20t/rh20t_api) · 访问方式：官方项目和下载入口
  入选依据 C2（英文审查说明）：Official release describes 110K+ manipulation sequences with synchronized visual, force, audio and action signals. [审查来源](https://rh20t.github.io/) · 2026-10-29

- **RoboCook** · 2023 · 数据集
  真实工具操作弹塑性物体的粒子轨迹，记录不同工具作用下面团几何随时间的变化。
  `机器人 / 具身智能` · `物体状态` · `动作` · `轨迹`
  [代码](https://github.com/hshi74/robocook) · [论文](https://arxiv.org/abs/2306.14447) · 访问方式：官方仓库提供数据和轨迹处理说明
  入选依据 C2（英文审查说明）：Official release provides tool-specific dynamics trajectories as per-frame HDF5 files and before/after object point clouds; distinguish real dynamics data from model-synthesized planning data. [审查来源](https://github.com/hshi74/robocook) · 2026-10-29

- **SayTap Locomotion Rollouts** · 2023 · 数据集
  A1 运动回合包含 12 个关节位置指令、30 维本体状态、期望速度及足部接触模式。
  `机器人 / 具身智能` · `动作` · `机器人状态` · `轨迹`
  [主页](https://www.tensorflow.org/datasets/catalog/utokyo_saytap_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：A1 locomotion episodes contain 12 joint-position commands, 30-dimensional proprioception, desired velocity and foot-contact patterns. Steps are organized into episodes. RGB fields are dummy placeholders, not recorded images. [审查来源](https://www.tensorflow.org/datasets/catalog/utokyo_saytap_converted_externally_to_rlds) · 2026-10-30

- **SPOC Simulation Trajectories** · 2023 · 数据集
  导航/操作回合包含动作、双相机视角、智能体位置、物体状态标记及任务成功元数据。
  `机器人 / 具身智能` · `合成视频` · `动作` · `智能体位姿` · `物体状态`
  [主页](https://www.tensorflow.org/datasets/catalog/spoc_robot) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Navigation/manipulation episodes provide actions, two camera views, agent location, object state indicators and task-success metadata. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/spoc_robot) · 2026-10-30

- **Stanford HYDRA Demonstrations** · 2023 · 数据集
  长时操作回合提供七维动作、双视角图像、27 维状态及航点/密集控制标记。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/stanford_hydra_dataset_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Long-horizon episodes provide seven-dimensional actions, two camera views, 27-dimensional state and waypoint/dense-mode indicators. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/stanford_hydra_dataset_converted_externally_to_rlds) · 2026-10-30

- **TOTO Scooping and Pouring** · 2023 · 数据集
  舀取与倾倒回合包含末端和夹爪动作、RGB 观测及七个关节的位置。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/toto) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Scooping/pouring episodes contain end-effector and gripper actions, RGB observations and seven joint positions. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/toto) · 2026-10-30

- **TriFinger RL Dataset** · 2023 · 数据集
  TriFinger 真实机器人 Push/Lift 离线强化学习数据，包含多质量策略的状态、动作和奖励。
  `机器人 / 具身智能` · `机器人状态` · `动作` · `奖励` · `RGB 视频` · `轨迹`
  [主页](https://doi.org/10.17617/3.DXZ7TL) · [代码](https://webdav.tuebingen.mpg.de/trifinger-rl/docs/datasets/index.html) · 访问方式：官方 DOI 和数据文档可用
  入选依据 C2（英文审查说明）：Official documentation explicitly provides real/simulated robot transitions for Push and Lift, with varying behavior policies and optional camera images, for dynamics learning and offline RL. [审查来源](https://webdav.tuebingen.mpg.de/trifinger-rl/docs/datasets/index.html) · 2026-10-29

- **UCSD Kitchen Demonstrations** · 2023 · 数据集
  厨房操作将八维动作与 RGB 及 21 维关节位置/速度/力矩状态对齐。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/ucsd_kitchen_dataset_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Kitchen manipulation aligns eight-dimensional actions with RGB and 21-dimensional joint position/velocity/torque state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/ucsd_kitchen_dataset_converted_externally_to_rlds) · 2026-10-30

- **UCSD Pick and Place** · 2023 · 数据集
  含干扰物的抓放回合提供夹爪速度/力矩动作、RGB、七维状态及回合成功元数据。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/ucsd_pick_and_place_dataset_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Distractor-rich pick/place episodes expose gripper velocity/torque actions, RGB, seven-dimensional state and episode-success metadata. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/ucsd_pick_and_place_dataset_converted_externally_to_rlds) · 2026-10-30

- **UT Austin SIRIUS** · 2023 · 数据集
  操作回合将七维动作与图像、关节/位姿状态以及示范、人工干预、自主执行标签对齐。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/austin_sirius_dataset_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Manipulation episodes align seven-dimensional actions with images, joint/pose states and labels for demonstrations, interventions and autonomous execution. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/austin_sirius_dataset_converted_externally_to_rlds) · 2026-10-30

- **UTokyo PR2 Fridge Opening** · 2023 · 数据集
  冰箱门开启回合将八维动作与 RGB 和七维末端/夹爪状态对齐。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/utokyo_pr2_opening_fridge_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Fridge-door opening episodes pair eight-dimensional actions with RGB and seven-dimensional end-effector/gripper state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/utokyo_pr2_opening_fridge_converted_externally_to_rlds) · 2026-10-30

- **UTokyo PR2 Tabletop** · 2023 · 数据集
  桌面操作将八维末端/夹爪/终止动作与 RGB 和七维状态对齐。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/utokyo_pr2_tabletop_manipulation_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Tabletop manipulation pairs eight-dimensional end-effector/gripper/termination actions with RGB and seven-dimensional state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/utokyo_pr2_tabletop_manipulation_converted_externally_to_rlds) · 2026-10-30

- **UTokyo xArm Bimanual** · 2023 · 数据集
  双臂折毛巾回合包含 14 维动作、RGB 和左右末端各六维位姿。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/utokyo_xarm_bimanual_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Bimanual towel-folding episodes contain 14-dimensional actions, RGB and separate six-dimensional left/right end-effector poses. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/utokyo_xarm_bimanual_converted_externally_to_rlds) · 2026-10-30

- **UTokyo xArm Pick and Place** · 2023 · 数据集
  抓放回合将七维指令与三路相机、末端位姿及关节位置/速度/加速度对应。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/utokyo_xarm_pick_and_place_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Pick/place episodes pair seven-dimensional commands with three camera views, end-effector pose and joint position/velocity/acceleration. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/utokyo_xarm_pick_and_place_converted_externally_to_rlds) · 2026-10-30

- **Berkeley MVP Demonstrations** · 2022 · 数据集
  六类操作任务提供八维关节/夹爪动作、腕部图像以及关节与末端观测。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/berkeley_mvp_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Six manipulation tasks expose eight-dimensional joint/gripper actions, wrist images and joint/end-effector observations. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/berkeley_mvp_converted_externally_to_rlds) · 2026-10-30

- **BUDS Robot Demonstrations** · 2022 · 数据集
  分层机器人操作示范，逐步提供末端/夹爪动作、相机图像与机器人状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/austin_buds_dataset_converted_externally_to_rlds) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C2（英文审查说明）：50 episodes contain step-aligned end-effector delta/gripper actions, RGB and wrist images, and robot state. [审查来源](https://www.tensorflow.org/datasets/catalog/austin_buds_dataset_converted_externally_to_rlds) · 2026-10-30

- **DiffSkill Environments** · 2022 · 生成环境 / 工具
  工具操作可塑物体的三个仿真任务，提供初始和目标配置下载及随机交互脚本以生成转换轨迹。
  `机器人 / 具身智能` · `物理 / 科学` · `动作` · `仿真状态` · `物体状态`
  [代码](https://github.com/Xingyu-Lin/DiffSkill) · [论文](https://arxiv.org/abs/2203.17275) · 访问方式：官方配置包和环境 rollout 脚本
  入选依据 C2（英文审查说明）：Differentiable-physics tool manipulation produces demonstration trajectories paired with RGB-D observations; derived from simulator tasks, not the policy alone. [审查来源](https://arxiv.org/abs/2203.17275) · 2026-10-29

- **ExORL** · 2022 · 数据集
  通过无监督探索收集的 DeepMind Control Suite 离线状态动作轨迹。
  `机器人 / 具身智能` · `仿真状态` · `动作` · `奖励` · `轨迹`
  [代码](https://github.com/denisyarats/exorl) · [论文](https://arxiv.org/abs/2201.13425) · 访问方式：下载脚本与开源加载器
  入选依据 C2（英文审查说明）：Unsupervised exploratory interactions are collected and relabeled for offline-RL downstream tasks; controlled transition data. [审查来源](https://arxiv.org/abs/2201.13425) · 2026-10-29

- **HOI4D** · 2022 · 数据集
  四维人-物交互视频数据集，包含手部、物体和相机运动标注。
  `第一人称 / 人类活动` · `机器人 / 具身智能` · `RGB-D` · `动作标签` · `物体状态` · `智能体位姿`
  [主页](https://hoi4d.github.io/) · [论文](https://arxiv.org/abs/2203.01577) · 访问方式：官方项目和数据
  入选依据 C3（英文审查说明）：RGB-D interaction sequences include frame-wise hand and object poses and motion segmentation, directly exposing temporal object evolution. [审查来源](https://arxiv.org/abs/2203.01577) · 2026-10-29

- **ManiSkill** · 2022 · 生成环境 / 工具
  面向机器人操作学习的高效物理仿真基准和可生成轨迹环境。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB-D` · `动作` · `仿真状态` · `物体状态`
  [主页](https://maniskill.ai/) · [代码](https://github.com/haosulab/ManiSkill) · 访问方式：官方仿真器和基准
  入选依据 C2（英文审查说明）：Official SAPIEN robot simulator and manipulation-learning task framework generates controlled observations and state changes. [审查来源](https://github.com/haosulab/ManiSkill) · 2026-10-29

- **MaskViT Sawyer Rollouts** · 2022 · 数据集
  推送与抓取回合提供五维动作、图像、末端位姿及关节/速度/夹爪状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/stanford_mask_vit_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Pushing/picking episodes provide five-dimensional actions, images, end-effector pose and joint/velocity/gripper state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/stanford_mask_vit_converted_externally_to_rlds) · 2026-10-30

- **MineDojo** · 2022 · 生成环境 / 工具
  基于 Minecraft 的交互式仿真套件，提供探索、采集、制作等任务及逐步动作与观测。此条目收录生成环境；附带网络视频与知识库不作为已对齐动作轨迹的规模。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `游戏状态`
  [主页](https://minedojo.org/) · [代码](https://github.com/MineDojo/MineDojo) · 访问方式：开放获取，具体取决于数据来源
  入选依据 C2（英文审查说明）：Official environment exposes multimodal observations and compound actions for step-based Minecraft interaction. Scope is the simulator, not its static wiki assets. [审查来源](https://github.com/MineDojo/MineDojo) · 2026-10-29

- **MyoSuite** · 2022 · 生成环境 / 工具
  肌肉骨骼机器人 MuJoCo 环境，提供高维身体状态、动作和运动轨迹。
  `机器人 / 具身智能` · `物理 / 科学` · `仿真状态` · `动作` · `奖励` · `轨迹`
  [代码](https://github.com/facebookresearch/myosuite) · 访问方式：开源基准
  入选依据 C2（英文审查说明）：Official MuJoCo environment documents step(action), per-step observations and muscle-control tasks. [审查来源](https://github.com/facebookresearch/myosuite) · 2026-10-29

- **NYU Franka Play** · 2022 · 数据集
  厨房交互数据包含 15 维速度/位姿/夹爪/终止动作、双视角 RGB-D 和 13 维状态。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/nyu_franka_play_dataset_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Kitchen play contains 15-dimensional velocity/pose/gripper/termination actions, two RGB-D views and 13-dimensional state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/nyu_franka_play_dataset_converted_externally_to_rlds) · 2026-10-30

- **RT-1 Public RLDS (fractal20220817_data)** · 2022 · 数据集
  RT-1 公开回合包含图像、末端/底座控制以及回合边界。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/fractal20220817_data) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C2（英文审查说明）：The public RLDS release contains 87,212 episodes with image observations, end-effector/base commands and episode boundaries. This is not the paper's entire training-data total. [审查来源](https://www.tensorflow.org/datasets/catalog/fractal20220817_data) · 2026-10-30

- **SAILOR Robot Demonstrations** · 2022 · 数据集
  机器人桌面示范，包含七维动作、图像以及末端和夹爪状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/austin_sailor_dataset_converted_externally_to_rlds) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C2（英文审查说明）：240 episodes align seven-dimensional actions with camera observations and end-effector/gripper states. [审查来源](https://www.tensorflow.org/datasets/catalog/austin_sailor_dataset_converted_externally_to_rlds) · 2026-10-30

- **SCAND** · 2022 · 数据集
  Spot 和 Jackal 遥操作导航轨迹配有摇杆指令、里程计及视觉/惯性/激光雷达观测。
  `机器人 / 具身智能` · `RGB 视频` · `激光雷达` · `动作` · `机器人状态` · `轨迹`
  [论文](https://arxiv.org/abs/2203.15041) · 访问方式：论文描述该资源；完整下载未测试
  入选依据 C2（英文审查说明）：The paper reports 138 teleoperated navigation trajectories with joystick commands, odometry, visual/inertial observations and 3D LiDAR on Spot and Jackal. [审查来源](https://arxiv.org/abs/2203.15041) · 2026-10-30

- **TACO Play** · 2022 · 数据集
  Franka 厨房交互回合，包含七维绝对/相对动作、双视角 RGB-D 和 15 维机器人观测。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/taco_play) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Franka kitchen play with seven-dimensional absolute/relative actions, two RGB-D views and 15-dimensional robot observations. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/taco_play) · 2026-10-30

- **Tokyo U LSMO Trajectories** · 2022 · 数据集
  抓放运动规划轨迹包含七维末端/夹爪指令、RGB 与 13 维状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/tokyo_u_lsmo_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Pick/place motion-planning trajectories contain seven-dimensional end-effector/gripper commands, RGB and 13-dimensional state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/tokyo_u_lsmo_converted_externally_to_rlds) · 2026-10-30

- **USC Cloth Simulation Demonstrations** · 2022 · 数据集
  布料仿真回合将夹取器位置/启用指令与图像、折叠奖励对齐。
  `机器人 / 具身智能` · `合成视频` · `动作` · `奖励`
  [主页](https://www.tensorflow.org/datasets/catalog/usc_cloth_sim_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Simulated cloth episodes align picker position/activation commands with images and cloth-folding rewards. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/usc_cloth_sim_converted_externally_to_rlds) · 2026-10-30

- **VIOLA Robot Demonstrations** · 2022 · 数据集
  厨房任务的操作示范，包含平移、旋转、夹爪动作以及双视角观测。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/viola) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C2（英文审查说明）：135 training and 15 test episodes align translation, rotation and gripper actions with two camera streams and robot state. [审查来源](https://www.tensorflow.org/datasets/catalog/viola) · 2026-10-30

- **BC-Z Robot Demonstrations** · 2021 · 数据集
  遥操作数据提供未来末端/夹爪残差目标、当前位姿与图像观测。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/bc_z) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Teleoperated manipulation exposes residual future end-effector/gripper targets, current pose and image observations. Steps are organized into episodes. Future action targets require a causal history/target split; do not feed future supervision into model inputs. [审查来源](https://www.tensorflow.org/datasets/catalog/bc_z) · 2026-10-30

- **Brax** · 2021 · 生成环境 / 工具
  基于 JAX 的可微分刚体物理引擎和强化学习环境，可并行生成状态、动作与奖励轨迹。
  `机器人 / 具身智能` · `物理 / 科学` · `仿真状态` · `动作` · `奖励` · `RGB 视频`
  [代码](https://github.com/google/brax) · [论文](https://arxiv.org/abs/2106.13281) · 访问方式：开源引擎与环境
  入选依据 C2（英文审查说明）：Open-source rigid-body simulation supplies controlled Gym-like environments and executable training notebooks. [审查来源](https://arxiv.org/abs/2106.13281) · 2026-10-29

- **Isaac Gym** · 2021 · 生成环境 / 工具
  GPU 加速物理仿真环境，可生成机器人状态、动作和视觉轨迹。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `仿真状态` · `动作` · `奖励`
  [代码](https://github.com/isaac-sim/IsaacGymEnvs) · [论文](https://arxiv.org/abs/2108.10470) · 访问方式：官方仓库和发行版
  入选依据 C2（英文审查说明）：GPU physics buffers directly exchange state/control tensors with robot policies; downloadable simulation platform. [审查来源](https://arxiv.org/abs/2108.10470) · 2026-10-29

- **NYU Door Opening (VINN)** · 2021 · 数据集
  门与柜体开启回合，包含末端平移/旋转、夹爪动作及对应 RGB 观测。
  `机器人 / 具身智能` · `RGB 视频` · `动作`
  [主页](https://www.tensorflow.org/datasets/catalog/nyu_door_opening_surprising_effectiveness) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Door/cabinet opening episodes contain end-effector translation/rotation and gripper actions paired with RGB observations. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/nyu_door_opening_surprising_effectiveness) · 2026-10-30

- **PlasticineLab** · 2021 · 生成环境 / 工具
  可微软体操作基准，通过操纵器动作改变弹塑性材料，并提供控制序列优化和结果保存接口。
  `物理 / 科学` · `机器人 / 具身智能` · `动作` · `仿真状态` · `物体状态`
  [主页](https://plasticinelab.csail.mit.edu/) · [代码](https://github.com/hzaskywalker/PlasticineLab) · 访问方式：官方仿真器及动作序列优化命令；需本地生成 rollout
  入选依据 C2（英文审查说明）：Differentiable soft-body physics lets manipulators deform objects toward goals, generating controlled state transitions. [审查来源](https://plasticinelab.csail.mit.edu/) · 2026-10-29

- **Atari Replay Dataset** · 2020 · 数据集
  DQN 训练过程保存的大规模 Atari 回放，包含帧、动作、奖励和终止信号。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `奖励` · `游戏状态`
  [代码](https://github.com/google/dopamine/tree/master/dopamine/labs/offline_rl) · [论文](https://arxiv.org/abs/1907.04543) · 访问方式：通过 Dopamine 工具访问公开回放数据
  入选依据 C2（英文审查说明）：The released DQN replay corpus contains logged interaction experience across 60 Atari games. [审查来源](https://arxiv.org/abs/1907.04543) · 2026-10-29

- **D4RL** · 2020 · 聚合集合 / 注册表
  用于离线强化学习的标准化环境数据集，包含状态、动作、奖励和终止信号。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `仿真状态` · `动作` · `奖励` · `轨迹`
  [代码](https://github.com/Farama-Foundation/D4RL) · 访问方式：官方仓库和环境加载器可用
  入选依据 C2（英文审查说明）：Offline-RL benchmark aggregates standardized trajectory datasets; current releases migrated to Minari and include Kitchen/Adroit subsets. [审查来源](https://github.com/Farama-Foundation/D4RL) · 2026-10-29

- **DLR EDAN Shared Control** · 2020 · 数据集
  辅助货架抓取回合提供七维动作/状态数组以及 RGB 观测。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/dlr_edan_shared_control_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Assistive shelf-picking episodes provide seven-dimensional action/state arrays and RGB observations. Steps are organized into episodes. The documented action/state shapes have seven components but the description names only six pose coordinates. [审查来源](https://www.tensorflow.org/datasets/catalog/dlr_edan_shared_control_converted_externally_to_rlds) · 2026-10-30

- **RL Unplugged** · 2020 · 聚合集合 / 注册表
  覆盖 Atari、DeepMind Control 和机器人等环境的离线强化学习轨迹集合。
  `游戏 / 虚拟环境` · `机器人 / 具身智能` · `仿真状态` · `动作` · `奖励` · `轨迹`
  [代码](https://github.com/deepmind/deepmind-research/tree/master/rl_unplugged) · 访问方式：可通过 TensorFlow Datasets 和官方代码访问
  入选依据 C2（英文审查说明）：Unified offline-RL suite provides logged interactions with high-dimensional actions and visual observations; component datasets are not independent of the collection. [审查来源](https://github.com/deepmind/deepmind-research/tree/master/rl_unplugged) · 2026-10-29

- **RoboNet** · 2020 · 数据集
  汇集多所实验室机器人交互视频的跨平台数据集，通过不同机械臂、视角、物体和实验设置提供视觉动力学训练信号，重点考察视频预测与控制的跨机器人泛化。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.robonet.wiki/) · [论文](https://arxiv.org/abs/1910.11215) · [代码](https://github.com/SudeepDasari/RoboNet) · 访问方式：开放下载
  入选依据 C2（英文审查说明）：Official dataset loader includes supervised inverse-model and forward video-prediction training over robot experience; data downloads are documented. [审查来源](https://github.com/SudeepDasari/RoboNet) · 2026-10-29

- **robosuite Benchmark** · 2020 · 生成环境 / 工具
  模块化机器人操作仿真框架，提供可生成的多任务轨迹、视觉观测和物理状态。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB-D` · `动作` · `仿真状态` · `机器人状态`
  [主页](https://robosuite.ai/) · [代码](https://github.com/ARISE-Initiative/robosuite) · 访问方式：官方仿真器和数据
  入选依据 C2（英文审查说明）：Official simulator supports robot controllers, demonstration collection and replay utilities in standardized physical manipulation environments. [审查来源](https://github.com/ARISE-Initiative/robosuite) · 2026-10-29

- **RoboTHOR** · 2020 · 生成环境 / 工具
  LoCoBot 仿真接口提供移动/转向动作、RGB/深度观测及智能体位姿。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `智能体位姿`
  [主页](https://ai2thor.allenai.org/robothor/documentation/) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C2（英文审查说明）：The LoCoBot controller exposes move/rotate actions, RGB/depth observations and agent poses in named environments. It is part of AI2-THOR, so counts do not imply independent corpora. [审查来源](https://ai2thor.allenai.org/robothor/documentation/) · 2026-10-30

- **SoftGym** · 2020 · 生成环境 / 工具
  布料、绳索和液体操作的仿真基准，通过 Gym 接口和随机动作示例生成动作条件观测与状态转换。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `深度` · `动作` · `仿真状态`
  [代码](https://github.com/Xingyu-Lin/softgym) · [论文](https://arxiv.org/abs/2011.07215) · 访问方式：官方仿真器和 rollout 示例；需本地生成数据
  入选依据 C2（英文审查说明）：Open-source deformable-object manipulation environments expose a Gym control interface and physical state evolution. [审查来源](https://arxiv.org/abs/2011.07215) · 2026-10-29

- **OmniPush** · 2019 · 数据集
  真实机器人推动动力学数据集，记录不同物体、桌面环境和推动动作下的 RGB-D 视频及状态变化，用于学习可迁移的视觉动力学。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `物体状态` · `轨迹`
  [论文](https://arxiv.org/abs/1910.00618) · [代码](https://github.com/MIT-Omnipush/video-prediction) · 访问方式：开放项目访问
  入选依据 C2（英文审查说明）：Controlled planar pushes are recorded with RGB-D and precise object tracking across systematically varied objects. [审查来源](https://arxiv.org/abs/1910.00618) · 2026-10-29

- **Stanford Kuka Vision and Touch** · 2019 · 数据集
  插销任务提供四维位置/夹爪动作、RGB-D、关节/位姿观测及末端力历史。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/stanford_kuka_multimodal_dataset_converted_externally_to_rlds) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Peg insertion provides four-dimensional position/gripper actions, RGB-D, joint/pose observations and end-effector force histories. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/stanford_kuka_multimodal_dataset_converted_externally_to_rlds) · 2026-10-30

- **Adroit Arm Environments** · 2018 · 生成环境 / 工具
  Gymnasium-Robotics 提供的灵巧手与手臂交互环境，可生成状态、动作及后续观测。
  `机器人 / 具身智能` · `仿真状态` · `动作` · `奖励` · `轨迹`
  [代码](https://github.com/Farama-Foundation/Gymnasium-Robotics) · 访问方式：维护中的仿真环境；历史示范数据属于 D4RL/Minari
  入选依据 C2（英文审查说明）：Official maintained Gymnasium-Robotics release explicitly lists Adroit Arm environments and a state/action stepping interface. Scope is the simulator; legacy D4RL demonstrations are not newly collected data. [审查来源](https://github.com/Farama-Foundation/Gymnasium-Robotics) · 2026-10-29

- **DeepMind Control Suite** · 2018 · 生成环境 / 工具
  连续控制物理环境集合，可生成带状态、动作、奖励和视觉观测的世界模型轨迹。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `仿真状态` · `动作` · `奖励`
  [代码](https://github.com/google-deepmind/dm_control) · 访问方式：开源环境，可复现生成轨迹
  入选依据 C2（英文审查说明）：Official MuJoCo-based control environments expose physics simulation and reusable task construction for action-conditioned rollouts. [审查来源](https://github.com/google-deepmind/dm_control) · 2026-10-29

- **QT-Opt Kuka RLDS** · 2018 · 数据集
  抓取回合将底座、末端及夹爪动作与 RGB、末端位姿和夹爪观测对应。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.tensorflow.org/datasets/catalog/kuka) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：Grasping episodes pair base/end-effector/gripper actions with RGB, end-effector pose and gripper observations. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [审查来源](https://www.tensorflow.org/datasets/catalog/kuka) · 2026-10-30

- **World Models CarRacing Rollout Generator (ctallec)** · 2018 · 生成环境 / 工具
  PyTorch 实现提供随机 CarRacing 回合生成及动作条件下一潜变量预测流程。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `仿真状态`
  [代码](https://raw.githubusercontent.com/ctallec/world-models/master/README.md) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C2（英文审查说明）：The implementation documents random CarRacing rollout generation and next-latent prediction from past observations/actions. These are implementation-generated rollouts, not an official fixed corpus from the original paper. [审查来源](https://raw.githubusercontent.com/ctallec/world-models/master/README.md) · 2026-10-30

- **AI2-THOR** · 2017 · 生成环境 / 工具
  可交互室内场景仿真环境，可生成导航、操作和状态变化轨迹。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB-D` · `动作` · `仿真状态` · `物体状态`
  [主页](https://ai2thor.allenai.org/) · [论文](https://arxiv.org/abs/1712.05474) · [代码](https://github.com/allenai/ai2thor) · 访问方式：官方仿真器
  入选依据 C2（英文审查说明）：Agents navigate and interact with objects in executable 3D scenes, enabling action-conditioned observation/state transitions. [审查来源](https://arxiv.org/abs/1712.05474) · 2026-10-29

- **CARLA** · 2017 · 生成环境 / 工具
  开放自动驾驶仿真器，可生成多传感器驾驶、交通参与者和控制轨迹。
  `自动驾驶` · `游戏 / 虚拟环境` · `RGB 视频` · `激光雷达` · `毫米波雷达` · `动作` · `仿真状态`
  [主页](https://carla.org/) · [论文](https://arxiv.org/abs/1711.03938) · [代码](https://github.com/carla-simulator/carla) · 访问方式：官方仿真器
  入选依据 C2（英文审查说明）：Open urban driving simulator exposes vehicle interaction, configurable sensors and controlled environmental conditions. [审查来源](https://arxiv.org/abs/1711.03938) · 2026-10-29

- **BAIR Robot Pushing** · 2016 · 数据集
  经典机器人推物视频数据集，记录机械臂在桌面环境中执行随机推动动作的连续图像与控制信号，长期作为动作条件视频预测和随机未来建模的基础基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作`
  [主页](https://www.tensorflow.org/datasets/catalog/bair_robot_pushing_small) · [论文](https://arxiv.org/abs/1605.07157) · [代码](https://github.com/tensorflow/datasets) · 访问方式：开放下载
  入选依据 C2（英文审查说明）：The paper introduces 59K real robot pushing interactions for action-conditioned future-video prediction. [审查来源](https://arxiv.org/abs/1605.07157) · 2026-10-29

<a id="decision-making-agent-trajectories"></a>

### 决策与智能体轨迹（76）

- **ACE-Data-0** · 2026 · 数据集
  同步多视角、全身、手部、物体、音频和触觉的家庭交互数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `多视角 RGB 视频` · `音频` · `动作` · `物体状态`
  [论文](https://arxiv.org/abs/2607.28625) · 访问方式：论文入口；发布状态待核验
  入选依据 C3（英文审查说明）：Synchronized human interactions include articulated motion and object 6-DoF trajectories across 75,000 episodes. Paper evidence; data access not tested. [审查来源](https://arxiv.org/abs/2607.28625) · 2026-10-29

- **AXIS** · 2026 · 数据集
  社区驱动的浏览器遥操作机器人数据引擎与基准。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `动作` · `机器人状态`
  [论文](https://arxiv.org/abs/2607.21588) · 访问方式：论文入口；发布状态待核验
  入选依据 C2（英文审查说明）：Browser teleoperation produces 50K+ robot demonstration trajectories across 207 tasks. Paper evidence; release files not inspected. [审查来源](https://arxiv.org/abs/2607.21588) · 2026-10-29

- **CARLA-Air** · 2026 · 生成环境 / 工具
  在同一 CARLA 世界中统一城市驾驶与多旋翼飞行的空地具身仿真基础设施。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [论文](https://arxiv.org/abs/2603.28032) · [代码](https://github.com/louiszengCN/CarlaAir) · 访问方式：提供官方项目、代码和数据入口：https://huggingface.co/tianlezeng/CarlaAIr-v0.1.7
  入选依据 C2（英文审查说明）：A shared physics tick synchronizes control and up to 18 sensor modalities; the paper identifies released simulator binaries and source. [审查来源](https://arxiv.org/abs/2603.28032) · 2026-10-29

- **DreamDojo GR-1 Data** · 2026 · 派生数据 / 子集
  DreamDojo 官方发布的 GR-1 机器人后训练与评测数据；不代表完整的 4.4 万小时人类视频训练集合。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://dreamdojo-world.github.io/) · [论文](https://arxiv.org/abs/2602.06949) · [代码](https://github.com/NVIDIA/DreamDojo) · 访问方式：官方说明已发布 GR-1 数据；未实测下载
  入选依据 C2（英文审查说明）：Official release explicitly provides GR-1 post-training datasets and evaluation sets. Retention covers those releases, not an assumption that the full 44K-hour human training mixture is downloadable. [审查来源](https://github.com/NVIDIA/DreamDojo) · 2026-10-29

- **EBiM Benchmark** · 2026 · 生成环境 / 工具
  面向移动双臂操作的具身基准环境，包含任务场景、仿真配置和轨迹采集入口。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `物体状态` · `轨迹`
  [主页](https://ebim-benchmark.github.io/) · [代码](https://github.com/EBiM-Benchmark/benchmark) · 访问方式：开发预览版任务环境；正式评分以比赛规则为准
  入选依据 C2（英文审查说明）：README provides mobile dual-arm teleoperation task environments and launch commands. Developer preview, not a fixed released demonstration corpus. [审查来源](https://github.com/EBiM-Benchmark/benchmark) · 2026-10-29

- **Evo-RL Real-World Dataset** · 2026 · 数据集
  面向 SO-101 和 AgileX PiPER 的开放真实机器人离线强化学习数据集。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://huggingface.co/datasets/MINT-SJTU/RW-RL-Dataset) · [代码](https://github.com/MINT-SJTU/Evo-RL) · 访问方式：提供官方代码和数据入口：https://huggingface.co/datasets/MINT-SJTU/RW-RL-Dataset
  入选依据 C2（英文审查说明）：Official README documents real-robot offline RL data collection, released datasets, and closed-loop rollouts on SO101 and PiPER. [审查来源](https://github.com/MINT-SJTU/Evo-RL) · 2026-10-29

- **HiPHI** · 2026 · 数据集
  高精度全身人体运动与物体交互数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `智能体位姿` · `三维网格` · `物体状态`
  [论文](https://arxiv.org/abs/2608.16222) · 访问方式：论文入口；发布状态待核验
  入选依据 C3（英文审查说明）：Optical motion capture supplies whole-body motion and mesh-level object trajectories. Paper evidence; access not tested. [审查来源](https://arxiv.org/abs/2608.16222) · 2026-10-29

- **HUI360** · 2026 · 数据集
  移动机器人采集的 360 度第一人称人机交互预判数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `智能体位姿` · `分割标注`
  [论文](https://arxiv.org/abs/2608.11051) · [主页](https://hucebot.github.io/hui360) · 访问方式：论文入口；发布状态待核验
  入选依据 C3（英文审查说明）：Robot-view tracking and interaction annotations support an explicit human-robot interaction anticipation benchmark. Raw images are request-only. [审查来源](https://arxiv.org/abs/2608.11051) · 2026-10-29

- **ManipArena Dataset** · 2026 · 数据集
  覆盖推理导向真机操作任务的多视角专家轨迹数据集和评测基准。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://huggingface.co/datasets/ManipArena/maniparena-dataset) · [论文](https://arxiv.org/abs/2603.28545) · 访问方式：可通过 Hugging Face 受限访问获取数据
  入选依据 C2（英文审查说明）：The current paper identifies ManipArena: expert trajectories, low-level motor signals, frame observations and paired real-to-sim environments. Consolidates the misnamed PRIMO-R1 record. [审查来源](https://arxiv.org/abs/2603.28545) · 2026-10-29

- **OmniBehavior** · 2026 · 评测集
  用于长时、跨场景人类行为模拟的真实用户交互轨迹数据集，提供中英文版本。
  `第一人称 / 人类活动` · `动作` · `轨迹` · `文本`
  [主页](https://huggingface.co/datasets/jiawei-ucas/OmniBehavior) · [论文](https://arxiv.org/abs/2604.08362) · [代码](https://github.com/icip-cas/OmniBehavior) · 访问方式：完整中英文数据集已在 Hugging Face 提供
  入选依据 C3（英文审查说明）：Real long-horizon cross-scenario human behavior traces are used for an explicit predictive simulation benchmark; behavioral events are not physical motor controls. [审查来源](https://arxiv.org/abs/2604.08362) · 2026-10-29

- **RescueBench** · 2026 · 生成环境 / 工具
  基于 Unreal Engine 的开放世界搜救具身智能基准，提供多阶段任务、渐进难度和专家轨迹采集工具。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `语言` · `奖励` · `轨迹`
  [主页](https://github.com/UnrealZoo/RescueBench) · [代码](https://github.com/UnrealZoo/RescueBench) · 访问方式：基准环境和轨迹采集工具可用，数据发布仍在计划中
  入选依据 C2（英文审查说明）：Gym-like interface exposes first-person observations, navigation/interaction actions and rewards; README explicitly provides expert-trajectory collection tools. [审查来源](https://github.com/UnrealZoo/RescueBench) · 2026-10-29

- **TableVerse-100K** · 2026 · 数据集
  从真实图像重建的十万套可交互桌面环境及操作轨迹。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB-D` · `动作` · `仿真状态`
  [论文](https://arxiv.org/abs/2607.21017) · 访问方式：论文入口；发布状态待核验
  入选依据 C2（英文审查说明）：Simulation-ready tabletop environments are explicitly paired with task-conditioned interactive pick-and-place trajectories. [审查来源](https://arxiv.org/abs/2607.21017) · 2026-10-29

- **UniETP** · 2026 · 生成环境 / 工具
  统一 AI2-THOR、VirtualHome、Habitat 和 BEHAVIOR 的具身任务规划与自动任务生成基准。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `场景元数据` · `语言` · `轨迹`
  [代码](https://github.com/woyut/UniETP) · 访问方式：统一环境和任务生成代码可用
  入选依据 C2（英文审查说明）：Unified interfaces expose observations, actions and scene graphs across four simulators with grounded task generation. Not an independent recorded corpus. [审查来源](https://github.com/woyut/UniETP) · 2026-10-29

- **FLAME** · 2025 · 数据集
  面向联邦机器人操作学习的大规模仿真演示基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2503.01729) · 访问方式：论文入口；发布状态待核验
  入选依据 C2（英文审查说明）：The benchmark explicitly releases over 160K expert manipulation demonstrations across simulated environments for policy learning. [审查来源](https://arxiv.org/abs/2503.01729) · 2026-10-29

- **HINT-Bench** · 2025 · 生成环境 / 工具
  在共享环境中利用激光雷达、骨架和机器人状态轨迹评测早期人类意图预测的基准。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `激光雷达` · `智能体位姿` · `机器人状态` · `轨迹`
  [代码](https://github.com/valerio-bo/HINT-Bench) · 访问方式：基准数据和仿真生成器已公开
  入选依据 C3（英文审查说明）：README identifies per-episode robot/human states, skeletons and trajectories with data-collection scripts. The intent labels alone are not the inclusion evidence. [审查来源](https://github.com/valerio-bo/HINT-Bench) · 2026-10-29

- **LabUtopia** · 2025 · 生成环境 / 工具
  科学实验室多物理仿真、程序化场景与分层具身任务基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2505.22634) · 访问方式：论文入口；发布状态待核验
  入选依据 C2（英文审查说明）：LabSim provides physical/chemical interactions and a task suite spanning atomic actions to long-horizon mobile manipulation. [审查来源](https://arxiv.org/abs/2505.22634) · 2026-10-29

- **MIKASA** · 2025 · 生成环境 / 工具
  机器人记忆强化学习任务基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2502.10550) · 访问方式：论文入口；发布状态待核验
  入选依据 C2（英文审查说明）：Installable MIKASA-Robo defines memory-intensive interactive manipulation tasks under partial observability. A simulator benchmark, not a fixed corpus. [审查来源](https://arxiv.org/abs/2502.10550) · 2026-10-29

- **MRCD** · 2025 · 数据集
  面向户外移动机器人 ROS2 感知与导航的公开数据集。
  `机器人 / 具身智能` · `RGB 视频` · `激光雷达` · `惯性测量单元 / GPS` · `轨迹`
  [主页](https://sm20598.github.io/MRCD/) · [代码](https://github.com/SM20598/MRCD) · 访问方式：项目页和仓库可用
  入选依据 C3（英文审查说明）：ROS2 robot recordings contain stereo/depth streams, LiDAR, IMU, odometry and GPS/ground truth across temporal sequences. [审查来源](https://sm20598.github.io/MRCD/) · 2026-10-29

- **MuBlE / SHOP-VRB2** · 2025 · 生成环境 / 工具
  结合 MuJoCo 与 Blender 的长时物理操作环境和推理基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2503.02834) · 访问方式：论文入口；发布状态待核验
  入选依据 C2（英文审查说明）：MuJoCo/Blender environment generates aligned visual-action and control-physics loops for physical multi-step tasks. [审查来源](https://arxiv.org/abs/2503.02834) · 2026-10-29

- **OceanGym** · 2025 · 生成环境 / 工具
  用于水下具身智能体感知、连续控制导航和决策的高保真海洋仿真环境与数据集。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `轨迹` · `场景元数据`
  [主页](https://oceangpt.github.io/OceanGym/) · [论文](https://arxiv.org/abs/2509.26536) · [代码](https://github.com/OceanGPT/OceanGym) · 访问方式：环境数据和轨迹已在 Hugging Face 提供
  入选依据 C2（英文审查说明）：Underwater tasks expose optical/sonar observations and sequential exploration/interaction in simulated currents; retain as environment benchmark. [审查来源](https://arxiv.org/abs/2509.26536) · 2026-10-29

- **PartInstruct** · 2025 · 数据集
  具有部件级指令、三维标注和专家演示的精细机器人操作基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2505.21652) · 访问方式：论文入口；发布状态待核验
  入选依据 C2（英文审查说明）：More than 10K simulated expert demonstrations pair manipulation instructions with object/part state information. [审查来源](https://arxiv.org/abs/2505.21652) · 2026-10-29

- **DROID** · 2024 · 数据集
  大规模真实机器人操作数据集，覆盖多地点、多操作者和多种日常场景，提供同步视觉、动作、语言与机器人状态，适合研究真实世界中的通用操作策略和动作条件世界模型。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://droid-dataset.github.io/) · [论文](https://arxiv.org/abs/2403.12945) · [代码](https://github.com/droid-dataset/droid) · 访问方式：开放下载
  入选依据 C2（英文审查说明）：Official dataset quickstart iterates per-step robot observations; the release documents teleoperated manipulation demonstration collection. [审查来源](https://droid-dataset.github.io/) · 2026-10-29

- **PARTNR** · 2024 · 生成环境 / 工具
  面向家庭场景人机协作规划与推理的大规模具身基准，通过仿真闭环生成并验证具有空间、时间和异构智能体能力约束的自然语言任务。
  `机器人 / 具身智能` · `语言` · `动作` · `仿真状态` · `物体状态` · `轨迹`
  [论文](https://arxiv.org/abs/2411.00081) · [代码](https://github.com/facebookresearch/partnr-planner) · 访问方式：提供官方基准规划器和任务资源
  入选依据 C2（英文审查说明）：Simulator-grounded household collaboration tasks execute agents under temporal/spatial constraints; task specifications are not recorded trajectories. [审查来源](https://arxiv.org/abs/2411.00081) · 2026-10-29

- **RoboMIND** · 2024 · 数据集
  统一采集平台上的大规模多本体机器人操作数据集，包含成功与失败遥操作轨迹、多视角观测、机器人状态、语言任务描述和对应数字孪生环境。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `动作` · `机器人状态` · `语言` · `深度`
  [主页](https://x-humanoid-robomind.github.io/) · [论文](https://arxiv.org/abs/2412.13877) · [代码](https://github.com/x-humanoid-robomind/x-humanoid-robomind.github.io) · 访问方式：官方项目提供数据和工具入口
  入选依据 C2（英文审查说明）：Teleoperated trajectories include multi-view observations and proprioceptive state, including explicitly collected failure demonstrations. [审查来源](https://arxiv.org/abs/2412.13877) · 2026-10-29

- **UMI** · 2024 · 数据集
  通用移动操作接口与数据集，记录手持相机、末端动作和跨机器人操作轨迹。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://umi-gripper.github.io/) · [论文](https://arxiv.org/abs/2402.10329) · 访问方式：开源项目和论文
  入选依据 C2（英文审查说明）：Handheld gripper demonstrations and relative-trajectory action representations support policy transfer; not directly measured robot torques. [审查来源](https://arxiv.org/abs/2402.10329) · 2026-10-29

- **BridgeData V2** · 2023 · 数据集
  大规模多任务真实机器人操作数据集，覆盖多种厨房和桌面场景。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://rail-berkeley.github.io/bridgedata/) · 访问方式：官方项目和下载
  入选依据 C2（英文审查说明）：Official release provides robot trajectories, scripted rollouts and initial/final states with language annotations. Consolidate the older BridgeData record and remove unrelated paper links. [审查来源](https://rail-berkeley.github.io/bridgedata/) · 2026-10-29

- **FurnitureBench** · 2023 · 数据集
  真实与仿真的长时家具装配机器人基准和轨迹数据。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态` · `物体状态`
  [主页](https://clvrai.github.io/furniture-bench/) · [论文](https://arxiv.org/abs/2305.12821) · [代码](https://github.com/clvrai/furniture-bench) · 访问方式：官方基准和代码
  入选依据 C2（英文审查说明）：Furniture assembly benchmark explicitly provides 5,000+ pre-collected demonstrations and a reproducible robot environment. [审查来源](https://arxiv.org/abs/2305.12821) · 2026-10-29

- **JRDB-Traj** · 2023 · 评测集
  基于 JRDB 的机器人视角人群轨迹预测基准，从原始图像和点云预测相对机器人的未来行人位置。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `RGB 视频` · `激光雷达` · `轨迹`
  [主页](https://jrdb.erc.monash.edu/benchmark/) · [论文](https://arxiv.org/abs/2311.02736) · 访问方式：JRDB 下载需登录账号；提供轨迹预测开发工具
  入选依据 C3（英文审查说明）：Robot-view sensory sequences and agent locations support an explicit future-position forecasting protocol. [审查来源](https://arxiv.org/abs/2311.02736) · 2026-10-29

- **Jumanji** · 2023 · 生成环境 / 工具
  基于 JAX 的组合优化与强化学习环境套件，提供可批处理的状态、动作和奖励轨迹。
  `游戏 / 虚拟环境` · `游戏状态` · `动作` · `奖励` · `轨迹`
  [代码](https://github.com/instadeepai/jumanji) · [论文](https://arxiv.org/abs/2306.09884) · 访问方式：开源基准套件
  入选依据 C2（英文审查说明）：Scalable configurable RL environments expose controlled transitions and initial-state distributions; simulator suite, not recorded data. [审查来源](https://arxiv.org/abs/2306.09884) · 2026-10-29

- **LIBERO** · 2023 · 数据集
  面向终身学习和语言条件机器人操作的基准，包含多任务示范轨迹、视觉观测、动作和任务描述，用于研究跨任务知识迁移。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://libero-project.github.io/) · [代码](https://github.com/Lifelong-Robot-Learning/LIBERO) · 访问方式：开放生成工具
  入选依据 C2（英文审查说明）：Official repository supplies teleoperation demonstrations for four manipulation task suites and an explicit download script. [审查来源](https://github.com/Lifelong-Robot-Learning/LIBERO) · 2026-10-29

- **MimicGen** · 2023 · 生成环境 / 工具
  通过在仿真环境中重放和组合少量人类示范，自动生成多样化机器人操作轨迹的数据生成框架，支持模仿学习和世界模型训练。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://mimicgen.github.io/) · [论文](https://arxiv.org/abs/2310.17596) · [代码](https://github.com/NVlabs/mimicgen) · 访问方式：开放生成工具
  入选依据 C2（英文审查说明）：Adapts source human demonstrations into over 50K robot trajectories across tasks, configurations and embodiments; generated demonstrations are derived data. [审查来源](https://arxiv.org/abs/2310.17596) · 2026-10-29

- **Mini-BEHAVIOR** · 2023 · 生成环境 / 工具
  用于具身智能长时决策的程序化三维网格世界基准，实现日常家务任务、对象状态和交互动作，并支持生成大量任务变体及收集人类演示。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `仿真状态` · `物体状态` · `轨迹`
  [论文](https://arxiv.org/abs/2310.01824) · [代码](https://github.com/StanfordVL/mini_behavior) · 访问方式：提供官方环境代码和演示收集工具
  入选依据 C2（英文审查说明）：Gridworld household tasks preserve symbolic state transitions and include starter code for data collection. [审查来源](https://arxiv.org/abs/2310.01824) · 2026-10-29

- **Open X-Embodiment** · 2023 · 聚合集合 / 注册表
  由 Google DeepMind 与全球 30 余家研究机构联合构建的跨机器人真实交互数据集合，统一汇集多种机器人形态、任务与操作轨迹，是研究跨实体泛化和通用具身世界模型的重要基础。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://robotics-transformer-x.github.io/) · [论文](https://arxiv.org/abs/2310.08864) · [代码](https://github.com/google-deepmind/open_x_embodiment) · 访问方式：开放获取，具体取决于组成数据集
  入选依据 C2（英文审查说明）：Standardized robot learning datasets pool trajectories from multiple embodiments; constituent datasets overlap other catalog records. [审查来源](https://arxiv.org/abs/2310.08864) · 2026-10-29

- **RoboHive** · 2023 · 生成环境 / 工具
  统一真实与仿真机器人学习任务、轨迹和硬件接口的基准框架。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态` · `仿真状态`
  [主页](https://sites.google.com/view/robohive) · [论文](https://arxiv.org/abs/2310.06828) · [代码](https://github.com/vikashplus/robohive) · 访问方式：官方框架
  入选依据 C2（英文审查说明）：Unified physically simulated robot tasks and expert demonstrations support controlled interactions across embodiments. [审查来源](https://arxiv.org/abs/2310.06828) · 2026-10-29

- **RoboSet** · 2023 · 数据集
  真实家庭桌面操作数据集，覆盖厨房等日常活动中的多技能、多任务演示，包含四视角图像、语言定义任务、遥操作和动觉回放轨迹。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `动作` · `机器人状态` · `语言` · `轨迹`
  [主页](https://robopen.github.io/roboset/) · [论文](https://arxiv.org/abs/2309.01918) · [代码](https://github.com/robopen/roboagent) · 访问方式：官方 RoboSet 页面提供可下载轨迹；代码仓库引用了备用 Hugging Face 镜像
  入选依据 C2（英文审查说明）：Official RoboAgent repository explicitly trains on released RoboSet HDF5 teleoperation demonstrations and links their download channel. [审查来源](https://github.com/robopen/roboagent) · 2026-10-29

- **WebArena** · 2023 · 生成环境 / 工具
  可复现的真实网站交互环境，提供浏览器状态、动作和任务轨迹。
  `游戏 / 虚拟环境` · `RGB 视频` · `文本` · `动作` · `奖励`
  [主页](https://webarena.dev/) · [代码](https://github.com/web-arena-x/webarena) · [论文](https://arxiv.org/abs/2307.13854) · 访问方式：开源基准与部署工具
  入选依据 C2（英文审查说明）：Self-hosted functional websites define long-horizon agent actions and resulting environment changes; digital-state environment, not physical robot data. [审查来源](https://arxiv.org/abs/2307.13854) · 2026-10-29

- **BEHAVIOR-1K** · 2022 · 生成环境 / 工具
  包含一千项日常家庭活动的具身智能任务、场景和仿真基准。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `仿真状态` · `语言`
  [主页](https://behavior.stanford.edu/) · [论文](https://arxiv.org/abs/2403.09227) · [代码](https://github.com/StanfordVL/BEHAVIOR-1K) · 访问方式：官方基准
  入选依据 C2（英文审查说明）：OmniGibson supplies controlled rigid/deformable/liquid physics for long-horizon household activities; task and simulation suite. [审查来源](https://arxiv.org/abs/2403.09227) · 2026-10-29

- **CALVIN** · 2022 · 数据集
  在可控桌面环境中构建的长时程语言条件机器人基准，提供连续交互轨迹和组合任务序列，重点评估智能体能否依据语言完成多个连续操作。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态` · `语言`
  [主页](https://calvin.cs.uni-freiburg.de/) · [论文](https://arxiv.org/abs/2112.03227) · [代码](https://github.com/mees/calvin) · 访问方式：开放下载
  入选依据 C2（英文审查说明）：Simulated long-horizon manipulation benchmark combines onboard observations, action sequences and language instructions. [审查来源](https://arxiv.org/abs/2112.03227) · 2026-10-29

- **exiD** · 2022 · 数据集
  使用无人机在德国高速公路入口、出口和交织区采集的自然车辆轨迹数据集，补充了 highD 缺少的匝道并线、驶出和复杂交织行为。
  `自动驾驶` · `轨迹` · `物体元数据` · `智能体位姿` · `场景元数据`
  [主页](https://levelxdata.com/exid-dataset/) · 访问方式：官方 leveLXData/exiD 申请页面；访问需同意数据集条款
  入选依据 C3（英文审查说明）：Official release provides naturalistic road-user trajectories, maps and maneuver annotations for merging/on-ramp/off-ramp scenarios. [审查来源](https://levelxdata.com/exid-dataset/) · 2026-10-29

- **Language-Table** · 2022 · 数据集
  语言条件桌面机器人操作数据集与环境，包含长时自由形式指令。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `语言` · `机器人状态`
  [论文](https://arxiv.org/abs/2210.06407) · [代码](https://github.com/google-research/language-table) · 访问方式：官方数据和代码
  入选依据 C2（英文审查说明）：Released language-labeled visuomotor trajectories explicitly pair manipulation behavior with real-time instructions. [审查来源](https://arxiv.org/abs/2210.06407) · 2026-10-29

- **MAgent2** · 2022 · 生成环境 / 工具
  大规模多智能体网格世界环境，提供并行动作、观测和群体状态轨迹。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/Farama-Foundation/MAgent2) · 访问方式：开源环境
  入选依据 C2（英文审查说明）：Official maintained PettingZoo environment library simulates interacting pixel agents in configurable grid-world tasks. [审查来源](https://github.com/Farama-Foundation/MAgent2) · 2026-10-29

- **MoCapAct** · 2022 · 数据集
  面向仿真人形控制的动作捕捉到动作数据集，发布可跟踪 CMU MoCap 片段的专家策略及其带噪声 rollout，包含本体观测、动作和奖励。
  `机器人 / 具身智能` · `物理 / 科学` · `三维状态` · `动作` · `奖励` · `仿真状态` · `轨迹`
  [主页](https://microsoft.github.io/MoCapAct/) · [论文](https://arxiv.org/abs/2208.07363) · [代码](https://github.com/microsoft/MoCapAct) · 访问方式：官方项目页、GitHub 代码和 Hugging Face 数据集合可用
  入选依据 C2（英文审查说明）：Official release explicitly provides expert HDF5 rollouts containing proprioceptive observations and actions, with small and large dataset downloads. [审查来源](https://microsoft.github.io/MoCapAct/) · 2026-10-29

- **ProcTHOR** · 2022 · 生成环境 / 工具
  用于具身智能训练与评测的程序化交互环境框架，可生成任意规模、多样且可定制的虚拟室内场景，官方样本包含 1 万套房屋。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `仿真状态` · `场景元数据`
  [论文](https://arxiv.org/abs/2206.06994) · [代码](https://github.com/allenai/procthor) · 访问方式：提供官方生成器和 ProcTHOR-10K 样本
  入选依据 C2（英文审查说明）：Procedural generation yields interactive environments for navigation, rearrangement and manipulation, with an identified simulator data path. [审查来源](https://arxiv.org/abs/2206.06994) · 2026-10-29

- **SinD** · 2022 · 数据集
  信号交叉口无人机轨迹数据，包含异构交通参与者的连续位置、运动学、地图和信号灯信息。
  `自动驾驶` · `轨迹` · `智能体位姿` · `地图` · `场景元数据`
  [代码](https://github.com/SOTIF-AVLab/SinD) · [论文](https://arxiv.org/abs/2209.02297) · 访问方式：公开示例；完整数据需用教育邮箱申请
  入选依据 C3（英文审查说明）：Drone-recorded signalized-intersection road-user trajectories explicitly support behavior modeling and motion prediction. [审查来源](https://arxiv.org/abs/2209.02297) · 2026-10-29

- **TEACh** · 2022 · 数据集
  对话驱动的具身任务数据集，包含人类指挥者与执行者的语言和动作轨迹。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `语言` · `物体状态`
  [主页](https://teachingalfred.github.io/) · [论文](https://arxiv.org/abs/2110.00534) · [代码](https://github.com/alexa/teach) · 访问方式：官方基准和代码
  入选依据 C2（英文审查说明）：Recorded dialogues accompany a follower navigating and manipulating household environments, establishing interaction episodes rather than text-only conversations. [审查来源](https://arxiv.org/abs/2110.00534) · 2026-10-29

- **ALFWorld** · 2021 · 生成环境 / 工具
  将文本任务与室内具身环境对齐的交互基准，提供动作、观测和任务状态轨迹。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `文本` · `RGB 视频` · `动作` · `游戏状态`
  [代码](https://github.com/alfworld/alfworld) · [论文](https://arxiv.org/abs/2010.03768) · 访问方式：开源基准
  入选依据 C2（英文审查说明）：TextWorld actions are aligned to executable ALFRED visual-environment goals, providing interactive state transitions. [审查来源](https://arxiv.org/abs/2010.03768) · 2026-10-29

- **nuPlan** · 2021 · 评测集
  面向自动驾驶规划的真实世界数据集与基准，提供多传感器日志、地图、轨迹和规划评测工具，支持闭环驾驶策略研究。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `地图` · `轨迹` · `GPS / 惯性测量单元`
  [主页](https://www.nuscenes.org/nuplan) · [论文](https://arxiv.org/abs/2106.11810) · [代码](https://github.com/motional/nuplan-devkit) · 访问方式：需要注册
  入选依据 C3（英文审查说明）：Human-driving trajectories and a closed-loop simulator support long-horizon motion planning and resulting state evolution. [审查来源](https://arxiv.org/abs/2106.11810) · 2026-10-29

- **PettingZoo** · 2021 · 聚合集合 / 注册表
  标准化多智能体环境集合。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [主页](https://pettingzoo.farama.org/) · [代码](https://github.com/Farama-Foundation/PettingZoo) · [论文](https://arxiv.org/abs/2009.14471) · 访问方式：开源环境库
  入选依据 C2（英文审查说明）：Multi-agent environment API bundles interactive transition-generating environments. Framework/collection; component environments may overlap other records. [审查来源](https://arxiv.org/abs/2009.14471) · 2026-10-29

- **robomimic Datasets** · 2021 · 数据集
  面向模仿学习的机器人操作演示数据集与基准，包含多种任务、示范来源和视觉状态。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态`
  [主页](https://robomimic.github.io/) · [论文](https://arxiv.org/abs/2108.03298) · [代码](https://github.com/ARISE-Initiative/robomimic) · 访问方式：官方基准和下载
  入选依据 C2（英文审查说明）：Offline human demonstration datasets span simulated and real multi-stage manipulation tasks with differing demonstration quality. [审查来源](https://arxiv.org/abs/2108.03298) · 2026-10-29

- **ThreeDWorld Transport Challenge** · 2021 · 生成环境 / 工具
  基于 ThreeDWorld 物理仿真的视觉任务与运动规划基准，要求双臂智能体在住宅中寻找、抓取并运输物体，同时利用容器等工具提高效率。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `仿真状态` · `物体状态`
  [论文](https://arxiv.org/abs/2103.14025) · [代码](https://github.com/chuangg/tdw-transport-challenge-starter-code) · 访问方式：提供官方论文和入门代码
  入选依据 C2（英文审查说明）：Agents plan and execute action sequences that change object states under physical constraints in ThreeDWorld. [审查来源](https://arxiv.org/abs/2103.14025) · 2026-10-29

- **ALFRED** · 2020 · 数据集
  语言指令驱动的室内导航与操作演示数据集和基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `语言` · `物体状态`
  [主页](https://askforalfred.com/) · [论文](https://arxiv.org/abs/1912.01734) · [代码](https://github.com/askforalfred/alfred) · 访问方式：官方数据和基准
  入选依据 C2（英文审查说明）：Expert demonstrations pair egocentric observations and action sequences with non-reversible household state changes. [审查来源](https://arxiv.org/abs/1912.01734) · 2026-10-29

- **Lyft Level 5 Motion Prediction Dataset** · 2020 · 数据集
  以 25 秒场景组织的交通参与者位置与运动轨迹，配有语义地图，用于运动预测、规划与仿真。
  `自动驾驶` · `轨迹` · `地图`
  [论文](https://arxiv.org/abs/2006.14480) · 访问方式：论文注明数据渠道；当前访问未实测
  入选依据 C3（英文审查说明）：The cited motion-prediction release contains 25-second scenes with positions/motions of traffic participants and maps; distinguish it from Lyft perception-only releases. [审查来源](https://arxiv.org/abs/2006.14480) · 2026-10-29

- **NetHack Learning Environment** · 2020 · 生成环境 / 工具
  NetHack 长期交互环境。
  `游戏 / 虚拟环境` · `游戏状态` · `动作` · `文本` · `奖励`
  [代码](https://github.com/facebookresearch/nle) · [论文](https://arxiv.org/abs/2006.13760) · 访问方式：开源环境
  入选依据 C2（英文审查说明）：Procedurally generated stochastic game environments and task suite expose actions and persistent game-state evolution. [审查来源](https://arxiv.org/abs/2006.13760) · 2026-10-29

- **openDD** · 2020 · 数据集
  面向自动驾驶研究的无人机交通轨迹数据集，覆盖德国环岛和交叉路口中车辆、骑行者与行人的自然交互行为。
  `自动驾驶` · `城市 / 三维场景` · `轨迹` · `物体元数据` · `智能体位姿` · `场景元数据`
  [论文](https://arxiv.org/abs/2007.08463) · 访问方式：论文和项目资源描述该数据集；数据访问方式需进一步核查
  入选依据 C3（英文审查说明）：Accurately tracked road-user trajectories and roundabout maps explicitly support traffic-scene prediction. [审查来源](https://arxiv.org/abs/2007.08463) · 2026-10-29

- **Ravens** · 2020 · 生成环境 / 工具
  具有程序化任务和演示轨迹的桌面机器人操作基准。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `仿真状态`
  [代码](https://github.com/google-research/ravens) · 访问方式：官方代码和生成工具
  入选依据 C2（英文审查说明）：Official release documents MDP transitions with RGB-D observations and primitive robot actions, and downloadable generated train/test data. [审查来源](https://github.com/google-research/ravens) · 2026-10-29

- **RLBench** · 2020 · 生成环境 / 工具
  基于 CoppeliaSim 的大规模机器人操作学习套件，提供大量可程序化任务、示范轨迹和多视角视觉观测，可用于强化学习、模仿学习以及可控世界模型评测。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态` · `语言`
  [主页](https://sites.google.com/view/rlbench) · [论文](https://arxiv.org/abs/1909.12271) · [代码](https://github.com/stepjam/RLBench) · 访问方式：开放生成工具
  入选依据 C2（英文审查说明）：Manipulation tasks expose visual/proprioceptive observations and unlimited motion-planned demonstrations with a documented generator. [审查来源](https://arxiv.org/abs/1909.12271) · 2026-10-29

- **rounD** · 2020 · 数据集
  使用无人机在德国环岛采集的自然道路参与者轨迹数据集，面向无信号、高交互交通场景中的车辆、行人和骑行者行为建模。
  `自动驾驶` · `城市 / 三维场景` · `轨迹` · `物体元数据` · `智能体位姿` · `场景元数据`
  [主页](https://levelxdata.com/round-dataset/) · [论文](https://ieeexplore.ieee.org/document/9294728) · 访问方式：官方 leveLXData/rounD 申请页面；访问需同意数据集条款
  入选依据 C3（英文审查说明）：Official release supplies naturalistic road-user trajectories and roundabout map geometry, with parsing and visualization tools. [审查来源](https://levelxdata.com/round-dataset/) · 2026-10-29

- **BabyAI** · 2019 · 生成环境 / 工具
  可生成语言指令、网格环境和专家轨迹的具身学习平台。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `语言` · `仿真状态`
  [论文](https://arxiv.org/abs/1810.08272) · [代码](https://github.com/mila-iqia/babyai) · 访问方式：官方环境和生成器
  入选依据 C2（英文审查说明）：Interactive instruction-following levels and a heuristic expert produce executable action sequences in an extensible environment suite. [审查来源](https://arxiv.org/abs/1810.08272) · 2026-10-29

- **Franka Kitchen** · 2019 · 派生数据 / 子集
  厨房场景中的长时机器人操作环境和人类演示轨迹。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `物体状态`
  [论文](https://arxiv.org/abs/1910.11956) · [代码](https://github.com/Farama-Foundation/D4RL) · 访问方式：官方环境和离线数据
  入选依据 C2（英文审查说明）：D4RL supplies fixed offline datasets with observations, actions and next_observations for its task environments. Franka Kitchen is a constituent task family, not independent of D4RL. [审查来源](https://github.com/Farama-Foundation/D4RL) · 2026-10-29

- **Meta-World** · 2019 · 生成环境 / 工具
  面向多任务和元强化学习的机器人操作基准，提供统一机械臂、可程序化任务和可生成轨迹，用于测试跨任务动力学与策略泛化。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `奖励`
  [主页](https://meta-world.github.io/) · [论文](https://arxiv.org/abs/1910.10897) · [代码](https://github.com/Farama-Foundation/Metaworld) · 访问方式：开放生成工具
  入选依据 C2（英文审查说明）：Official robot-task interface explicitly demonstrates reset observations followed by action-conditioned next observations via env.step(action). [审查来源](https://github.com/Farama-Foundation/Metaworld) · 2026-10-29

- **MineRL** · 2019 · 数据集
  基于 Minecraft 的人类示范与交互数据集，记录长时视频、键鼠动作和游戏状态，最初用于样本高效强化学习竞赛，也适合开放世界动作模型和长程规划研究。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `游戏状态` · `奖励`
  [主页](https://minerl.io/) · [论文](https://arxiv.org/abs/1907.13440) · [代码](https://github.com/minerllabs/minerl) · 访问方式：开放下载
  入选依据 C2（英文审查说明）：Human Minecraft demonstrations are paired with a simulator for interactive learning; retain observation/action trajectories, not ancillary media. [审查来源](https://arxiv.org/abs/1907.13440) · 2026-10-29

- **MiniWoB++** · 2019 · 生成环境 / 工具
  网页交互环境集合，提供动作、页面状态和任务轨迹用于智能体建模。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `文本` · `奖励`
  [代码](https://github.com/Farama-Foundation/miniwob-plusplus) · 访问方式：开源基准
  入选依据 C2（英文审查说明）：Official browser-task environment documents configurable actions and resulting observations from env.step(action). [审查来源](https://github.com/Farama-Foundation/miniwob-plusplus) · 2026-10-29

- **Neural MMO** · 2019 · 生成环境 / 工具
  支持大量智能体持续交互的程序生成大型多人在线环境，记录个体动作、局部观测和群体状态演化。
  `游戏 / 虚拟环境` · `游戏状态` · `动作` · `奖励` · `RGB 视频`
  [主页](https://neuralmmo.github.io/) · [代码](https://github.com/NeuralMMO/neural-mmo) · [论文](https://arxiv.org/abs/1903.00784) · 访问方式：开源环境
  入选依据 C2（英文审查说明）：Persistent multi-agent worlds require combat/navigation actions that alter shared state over time. [审查来源](https://arxiv.org/abs/1903.00784) · 2026-10-29

- **OffWorld Gym** · 2019 · 生成环境 / 工具
  用于真实机器人强化学习的开放物理环境与基准，通过统一接口提供传感器观测、动作、奖励和真实交互回合。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `奖励`
  [论文](https://arxiv.org/abs/1910.08639) · [代码](https://github.com/offworld-projects/offworld-gym) · 访问方式：提供官方代码仓库
  入选依据 C2（英文审查说明）：Real robots expose remotely accessible RL interaction environments; service availability is separate from paper-level relevance evidence. [审查来源](https://arxiv.org/abs/1910.08639) · 2026-10-29

- **OpenSpiel** · 2019 · 聚合集合 / 注册表
  博弈与多智能体决策环境集合。
  `游戏 / 虚拟环境` · `游戏状态` · `动作` · `奖励` · `轨迹`
  [代码](https://github.com/google-deepmind/open_spiel) · [论文](https://arxiv.org/abs/1908.09453) · 访问方式：开源框架
  入选依据 C2（英文审查说明）：Sequential game environments provide state transitions and actions; one-shot games are outside the retained temporal scope. [审查来源](https://arxiv.org/abs/1908.09453) · 2026-10-29

- **Overcooked-AI** · 2019 · 生成环境 / 工具
  合作烹饪多智能体环境。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/HumanCompatibleAI/overcooked_ai) · [论文](https://arxiv.org/abs/1910.05789) · 访问方式：开源环境
  入选依据 C2（英文审查说明）：The released cooperative game environment exposes multi-agent interaction and long-horizon task state; simulator rather than a fixed corpus. [审查来源](https://arxiv.org/abs/1910.05789) · 2026-10-29

- **RoboTurk Real-Robot Demonstrations** · 2019 · 数据集
  真实机器人折布与叠碗回合，包含逐步平移、旋转、夹爪动作和正面 RGB 观测。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `语言`
  [主页](https://www.tensorflow.org/datasets/catalog/roboturk) · 访问方式：官方 RLDS 结构及存储入口；完整下载未测试
  入选依据 C2（英文审查说明）：The public RLDS version aligns translation/rotation/gripper actions with front RGB in 1,995 episodes. The cited 2019 real-robot release is distinct from the 2018 platform paper. [审查来源](https://www.tensorflow.org/datasets/catalog/roboturk) · 2026-10-30

- **THÖR** · 2019 · 数据集
  面向人机共享室内空间的人类运动数据集，提供高精度位置、头部朝向、视线、社交群组、障碍物地图和移动机器人传感器数据。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `轨迹` · `视线` · `智能体位姿` · `激光雷达` · `地图`
  [论文](https://arxiv.org/abs/1909.04403) · 访问方式：论文入口；官方访问方式需核验
  入选依据 C3（英文审查说明）：Human motion trajectories include accurate position, orientation, gaze, grouping, goals and nearby robot observations. [审查来源](https://arxiv.org/abs/1909.04403) · 2026-10-29

- **CoSTAR Block Stacking** · 2018 · 数据集
  面向机器人积木堆叠的示范数据集，包含视觉观测、动作和工作空间约束信息，用于研究从示范中学习可组合的操作技能。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `物体状态`
  [论文](https://arxiv.org/abs/1810.11714) · 访问方式：仅有论文入口；数据访问待核验
  入选依据 C2（英文审查说明）：Robot block-stacking attempts explicitly include dynamic scenes and real time-series interaction data. [审查来源](https://arxiv.org/abs/1810.11714) · 2026-10-29

- **Gym Retro** · 2018 · 生成环境 / 工具
  经典游戏模拟器环境，提供像素观测、离散动作和完整游戏状态轨迹。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/openai/retro) · 访问方式：Gym 环境代码；多数游戏 ROM 需另行获取
  入选依据 C2（英文审查说明）：Official Gym game environments expose emulator state, rewards, episode conditions and saved initial states. Most game ROMs must be obtained separately; remove the Rainbow citation. [审查来源](https://github.com/openai/retro) · 2026-10-29

- **TrajNet** · 2018 · 聚合集合 / 注册表
  面向行人和多智能体轨迹预测的基准，汇集多个真实场景轨迹并统一评测未来位置预测、社会交互和多模态不确定性。
  `第一人称 / 人类活动` · `自动驾驶` · `轨迹` · `智能体位姿` · `地图`
  [论文](https://arxiv.org/abs/1805.07663) · 访问方式：论文级依据；原版基准的访问未核验
  入选依据 C3（英文审查说明）：The original TrajNet paper identifies a repository of existing trajectory datasets and future-path prediction evaluation. It is distinct from TrajNet++. [审查来源](https://arxiv.org/abs/1805.07663) · 2026-10-29

- **VirtualHome** · 2018 · 生成环境 / 工具
  将家庭活动表示为可执行程序并在三维室内环境中模拟，连接自然语言、动作序列、物体状态和视频，可用于长时任务与因果状态转移研究。
  `游戏 / 虚拟环境` · `机器人 / 具身智能` · `文本` · `动作` · `仿真状态` · `合成视频`
  [主页](http://virtual-home.org/) · [论文](https://arxiv.org/abs/1806.07011) · [代码](https://github.com/xavierpuigf/virtualhome) · 访问方式：开放生成工具
  入选依据 C2（英文审查说明）：Executable action programs drive agents through Unity household interactions, explicitly generating state-changing activity sequences. [审查来源](https://arxiv.org/abs/1806.07011) · 2026-10-29

- **JAAD** · 2017 · 数据集
  面向自动驾驶中行人与驾驶员联合注意和过街行为预测的视频数据集，包含短视频片段、逐帧行人框、遮挡标签、行为标签、交通上下文和车辆行为标注。
  `自动驾驶` · `第一人称 / 人类活动` · `RGB 视频` · `二维框` · `动作标签` · `语义标签` · `轨迹`
  [主页](https://data.nvision2.eecs.yorku.ca/JAAD_dataset/) · [论文](https://openaccess.thecvf.com/content_ICCV_2017_workshops/w3/html/Rasouli_Are_They_Going_ICCV_2017_paper.html) · [代码](https://github.com/ykotseruba/JAAD) · 访问方式：官方数据集页面和 GitHub 标注公开可用
  入选依据 C3（英文审查说明）：Official paper establishes pedestrian intention prediction using temporal behavioral and contextual annotations; retain crossing-prediction scope. [审查来源](https://openaccess.thecvf.com/content_ICCV_2017_workshops/w3/html/Rasouli_Are_They_Going_ICCV_2017_paper.html) · 2026-10-29

- **L-CAS 3DOF Pedestrian Trajectories** · 2017 · 数据集
  由机器人搭载 LiDAR 在室内公共空间提取的行人三自由度轨迹，提供位置与朝向预测评测。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `轨迹` · `智能体位姿` · `激光雷达`
  [主页](https://lcas.lincoln.ac.uk/wp/3dof-pedestrian-trajectory-dataset/) · 访问方式：官方轨迹及原始 LiDAR 下载链接
  入选依据 C3（英文审查说明）：Official release explicitly extracts 935 world-frame pedestrian trajectories from time-ordered LiDAR recordings. [审查来源](https://lcas.lincoln.ac.uk/wp/3dof-pedestrian-trajectory-dataset/) · 2026-10-29

- **PoseTrack** · 2017 · 评测集
  视频中的多人姿态估计与跟踪基准，提供连续人体关键点和轨迹标注。
  `第一人称 / 人类活动` · `RGB 视频` · `智能体位姿` · `动作标签`
  [主页](https://posetrack.net/) · [论文](https://arxiv.org/abs/1611.07727) · 访问方式：官方挑战赛门户
  入选依据 C3（英文审查说明）：Person associations over time define body-joint trajectories in videos; native tracking can use future frames, so forecasting requires separate causal splits. [审查来源](https://arxiv.org/abs/1611.07727) · 2026-10-29

- **ATC Pedestrian Tracking Dataset** · 2013 · 数据集
  在大阪 ATC 购物中心采集的大规模行人轨迹数据集，通过环境传感器长期跟踪真实人群移动，适合研究室内社会导航和人群流演化。
  `第一人称 / 人类活动` · `城市 / 三维场景` · `轨迹` · `智能体位姿`
  [主页](https://dil.atr.jp/crest2010_HRI/ATC_dataset/) · 访问方式：官方 ATC 数据集页面提供数据访问说明
  入选依据 C3（英文审查说明）：Official release contains complete time-varying person tracks from a sensor network over 92 days. [审查来源](https://dil.atr.jp/crest2010_HRI/ATC_dataset/) · 2026-10-29

<a id="spatial-spatiotemporal-world-modeling"></a>

### 空间与时空世界建模（70）

- **AudioWorldSim** · 2026 · 生成环境 / 工具
  用于生成双耳音频世界模型轨迹的开放仿真平台。
  `机器人 / 具身智能` · `物理 / 科学` · `音频` · `智能体位姿` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.21075) · [代码](https://github.com/Luizerko/AudioWorldSim) · 访问方式：提供生成代码；因源资产许可不分发预生成数据
  入选依据 C2（英文审查说明）：Agent navigation generates aligned binaural observations. README explicitly withholds pre-generated data because source scene licenses restrict redistribution. [审查来源](https://github.com/Luizerko/AudioWorldSim) · 2026-10-29

- **Sekai2** · 2026 · 数据集
  面向交互式世界模型的真实第一人称长时视频数据集，配有相机轨迹和时间对齐描述。
  `第一人称 / 人类活动` · `RGB 视频` · `相机位姿` · `语言` · `轨迹`
  [主页](https://kangverse.github.io/sekai2-project/) · [论文](https://arxiv.org/abs/2608.09449) · [代码](https://github.com/kangverse/Sekai2-Dataset) · 访问方式：已公布官方数据入口，完整发布尚待完成
  入选依据 C3（英文审查说明）：Released long video clips have camera trajectories, temporally grounded dynamics annotations and revisits for persistent-state modeling. [审查来源](https://arxiv.org/abs/2608.09449) · 2026-10-29

- **CU-MULTI** · 2025 · 数据集
  由地面机器人采集的多机器人户外长序列数据集。
  `机器人 / 具身智能` · `RGB 视频` · `激光雷达` · `惯性测量单元 / GPS` · `轨迹`
  [代码](https://github.com/arpg/CU-Multi) · 访问方式：官方仓库和序列文档可用
  入选依据 C3（英文审查说明）：ROS2 recordings pair RGB/depth/LiDAR with timestamped ground-truth path and odometry; use ordered observation/pose sequences, not static maps. [审查来源](https://github.com/arpg/CU-Multi) · 2026-10-29

- **EOC-Bench** · 2025 · 评测集
  系统评测动态第一人称场景中物体中心具身认知能力的数据集。
  `第一人称 / 人类活动` · `机器人 / 具身智能` · `RGB 视频` · `物体状态` · `问答` · `语言`
  [主页](https://circleradon.github.io/EOCBench/) · [论文](https://arxiv.org/abs/2506.05287) · [代码](https://github.com/alibaba-damo-academy/EOCBench) · 访问方式：基准数据集和项目页已公开
  入选依据 C1（英文审查说明）：Future-object questions and temporal accuracy metrics evaluate changes caused by egocentric interactions; retain the predictive track rather than all generic QA. [审查来源](https://arxiv.org/abs/2506.05287) · 2026-10-29

- **GrandTour Dataset** · 2025 · 数据集
  在真实复杂环境中采集的腿式机器人多传感器长程轨迹数据集。
  `机器人 / 具身智能` · `RGB 视频` · `激光雷达` · `惯性测量单元 / GPS` · `轨迹` · `机器人状态`
  [主页](https://grand-tour.leggedrobotics.com/dataset) · [论文](https://arxiv.org/abs/2602.18164) · [代码](https://github.com/leggedrobotics/grand_tour_dataset) · 访问方式：提供数据页、Hugging Face 仓库和定位基准
  入选依据 C3（英文审查说明）：Time-synchronized sensors and proprioception are paired with high-precision ground-truth robot trajectories. [审查来源](https://arxiv.org/abs/2602.18164) · 2026-10-29

- **i2Nav-Robot** · 2025 · 数据集
  面向室内外多传感器融合导航与建图的大规模机器人数据集。
  `机器人 / 具身智能` · `RGB 视频` · `激光雷达` · `惯性测量单元 / GPS` · `轨迹`
  [代码](https://github.com/i2Nav-WHU/i2Nav-Robot) · 访问方式：官方仓库和基线代码可用
  入选依据 C3（英文审查说明）：Ten synchronized robot sequences include accurate ground-truth pose and velocity over recorded trajectories. [审查来源](https://github.com/i2Nav-WHU/i2Nav-Robot) · 2026-10-29

- **iilab Indoor LiDAR SLAM Dataset** · 2025 · 数据集
  用于室内激光雷达 SLAM、定位和三维重建的真实机器人序列数据集工具包。
  `机器人 / 具身智能` · `城市 / 三维场景` · `激光雷达` · `惯性测量单元` · `相机位姿` · `轨迹`
  [主页](https://doi.org/10.25747/VHNJ-WM80) · [代码](https://github.com/JorgeDFR/iilabs3d-toolkit) · 访问方式：提供官方工具包和 DOI 数据入口
  入选依据 C3（英文审查说明）：Official data repository describes synchronized LiDAR, IMU and wheel odometry with motion-capture ground truth and timestamp correction; retain ordered sensor/pose sequences. [审查来源](https://doi.org/10.25747/VHNJ-WM80) · 2026-10-29

- **M3DGR** · 2025 · 数据集
  面向地面机器人的多传感器、多场景大规模 SLAM 数据集。
  `机器人 / 具身智能` · `RGB 视频` · `激光雷达` · `惯性测量单元 / GPS` · `轨迹`
  [代码](https://github.com/sjtuyinjie/M3DGR) · 访问方式：官方数据仓库和基准代码可用
  入选依据 C3（英文审查说明）：Official multi-sensor SLAM release documents TUM-format trajectories, recording time and trajectory tracking metrics; retain ordered sensor/pose data. [审查来源](https://github.com/sjtuyinjie/M3DGR) · 2026-10-29

- **MineInsight (Robot Sequences)** · 2025 · 数据集
  机器人 ROS2 录制包含传感器观测和动态 /tf 变换。
  `机器人 / 具身智能` · `RGB 视频` · `激光雷达` · `相机位姿` · `轨迹`
  [代码](https://raw.githubusercontent.com/mariomlz99/MineInsight/main/README.md) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：The release documents ROS2 sequences and dynamic /tf transforms in addition to sensor observations. First release was June 2025; current documentation also covers a 2026 update. Inclusion concerns robot/sensor motion, not moving landmine dynamics. [审查来源](https://raw.githubusercontent.com/mariomlz99/MineInsight/main/README.md) · 2026-10-30

- **NVIDIA PhysicalAI Autonomous Vehicles** · 2025 · 数据集
  发布者确认传感器片段包含相对时间戳及对齐的历史/未来自运动。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `轨迹` · `相机位姿`
  [主页](https://huggingface.co/datasets/nvidia/PhysicalAI-Autonomous-Vehicles/discussions/4) · [代码](https://github.com/NVlabs/physical_ai_av) · 访问方式：发布者门控数据；需接受访问条款
  入选依据 C3（英文审查说明）：The publisher confirms 20-second sensor clips with relative timestamps and aligned egomotion including history and future. Sensor streams are asynchronous; data access requires accepting the publisher's conditions. [审查来源](https://huggingface.co/datasets/nvidia/PhysicalAI-Autonomous-Vehicles/discussions/4) · 2026-10-30

- **OmniWorld** · 2025 · 聚合集合 / 注册表
  覆盖游戏、城市行走、人机交互和机器人轨迹的多领域多模态四维世界建模数据集。
  `游戏 / 虚拟环境` · `第一人称 / 人类活动` · `机器人 / 具身智能` · `RGB 视频` · `深度` · `相机位姿` · `光流` · `文本`
  [主页](https://yangzhou24.github.io/OmniWorld/) · [论文](https://arxiv.org/abs/2509.12201) · [代码](https://github.com/yangzhou24/OmniWorld) · 访问方式：多个子集已在 Hugging Face 和 ModelScope 提供
  入选依据 C1（英文审查说明）：OmniWorld-Game and curated public datasets explicitly support future prediction and dynamic 4D modeling; aggregate data overlap must remain explicit. [审查来源](https://arxiv.org/abs/2509.12201) · 2026-10-29

- **Oxford Spires Dataset** · 2025 · 数据集
  牛津多地点的连续多传感器扫描，提供相机、LiDAR、IMU、参考地图与核心序列的轨迹真值。
  `机器人 / 具身智能` · `城市 / 三维场景` · `多视角 RGB 视频` · `激光雷达` · `惯性测量单元` · `相机位姿`
  [主页](https://dynamic.robots.ox.ac.uk/datasets/oxford-spires/) · 访问方式：官方 Google Drive 与 Hugging Face 资源
  入选依据 C3（英文审查说明）：Core recording sequences explicitly include centimetre-accurate ground-truth LiDAR trajectories aligned with image recordings. [审查来源](https://dynamic.robots.ox.ac.uk/datasets/oxford-spires/) · 2026-10-29

- **SLABIM** · 2025 · 数据集
  耦合 SLAM 传感器数据与建筑 BIM 的室内数据集。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2502.16856) · [代码](https://github.com/HKUST-Aerial-Robotics/SLABIM) · 访问方式：论文入口；发布状态待核验
  入选依据 C3（英文审查说明）：Timestamped multi-session SLAM sensor recordings accompany building models; retain ordered sensing sequences, not BIM assets as dynamics data. [审查来源](https://arxiv.org/abs/2502.16856) · 2026-10-29

- **SPICE-HL3** · 2025 · 数据集
  高纬月面模拟环境中的单光子、惯性、双目和里程计数据集。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2506.22956) · 访问方式：论文入口；发布状态待核验
  入选依据 C3（英文审查说明）：Robot images, inertial measurements and wheel odometry are recorded along seven trajectories under varied lunar-like illumination. [审查来源](https://arxiv.org/abs/2506.22956) · 2026-10-29

- **STRIDE** · 2025 · 数据集
  将全景道路图像组织为观测、状态和动作节点的时空自主数据集。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2506.11302) · [主页](https://huggingface.co/datasets/Tera-AI/STRIDE) · 访问方式：论文入口；发布状态待核验
  入选依据 C2（英文审查说明）：Road imagery is organized into connected observation, state and movement-action nodes for controlled spatiotemporal world modeling. [审查来源](https://arxiv.org/abs/2506.11302) · 2026-10-29

- **STU (Sequential Sensor and Pose Data)** · 2025 · 数据集
  连续激光雷达/相机录制配有由 KISS-ICP 估计并按 KITTI 格式导出的车辆位姿。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `相机位姿` · `轨迹`
  [论文](https://arxiv.org/html/2505.02148v1) · 访问方式：论文描述该资源；完整下载未测试
  入选依据 C3（英文审查说明）：The paper documents sequential LiDAR/camera recordings and per-scan vehicle poses estimated by KISS-ICP and exported in KITTI format. Inclusion is limited to sequential egomotion data; these estimated poses are not independent ground truth. [审查来源](https://arxiv.org/html/2505.02148v1) · 2026-10-30

- **TPT-Bench (Egomotion Sequences)** · 2025 · 数据集
  时间戳图像和对应 ROS 包包含可提取的 ZED 里程计路径。
  `机器人 / 具身智能` · `RGB 视频` · `相机位姿` · `轨迹`
  [代码](https://raw.githubusercontent.com/MedlarTea/TPT-BENCH-TOOLS/main/README.md) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：Timestamped images and per-sequence ROS bags include an explicitly extractable ZED odometry path. This supports robot egomotion sequences; native target-person tracking scores do not measure forecasting. [审查来源](https://raw.githubusercontent.com/MedlarTea/TPT-BENCH-TOOLS/main/README.md) · 2026-10-30

- **Ego-Exo4D** · 2024 · 数据集
  同步采集第一人称与第三人称视角的人类技能数据集，覆盖体育、音乐、烹饪等活动，并提供三维、语言和相机信息，支持跨视角世界状态理解与技能学习。
  `第一人称 / 人类活动` · `多视角 RGB 视频` · `音频` · `语言` · `相机位姿` · `三维标注`
  [主页](https://ego-exo4d-data.org/) · [论文](https://arxiv.org/abs/2311.18259) · [代码](https://github.com/facebookresearch/Ego4d) · 访问方式：需申请
  入选依据 C3（英文审查说明）：Synchronized long-form ego/exocentric recordings include camera poses and IMU. Retain temporal motion/pose tracks; activity classification alone is not the criterion. [审查来源](https://arxiv.org/abs/2311.18259) · 2026-10-29

- **Argoverse 2** · 2023 · 数据集
  面向自动驾驶感知、运动预测和地图理解的多任务数据集合，包含传感器序列、丰富高清地图及大量运动场景，强调复杂城市中的长尾行为与轨迹预测。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `地图` · `轨迹` · `三维框`
  [主页](https://www.argoverse.org/av2.html) · [论文](https://arxiv.org/abs/2301.00493) · [代码](https://github.com/argoverse/av2-api) · 访问方式：开放下载
  入选依据 C3（英文审查说明）：Explicit motion-forecasting scenarios and sequential LiDAR with poses support future-agent and point-cloud prediction. [审查来源](https://arxiv.org/abs/2301.00493) · 2026-10-29

- **GNM SACSoN Navigation** · 2023 · 数据集
  办公室导航轨迹包含位置/朝向目标、RGB 和观测到的平面位置/朝向。
  `机器人 / 具身智能` · `RGB 视频` · `智能体位姿` · `轨迹`
  [主页](https://www.tensorflow.org/datasets/catalog/berkeley_gnm_sac_son) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C3（英文审查说明）：Office navigation trajectories pair position/yaw targets with RGB and observed planar position/yaw. Steps are organized into episodes. Targets are navigation waypoints, not wheel/motor commands. [审查来源](https://www.tensorflow.org/datasets/catalog/berkeley_gnm_sac_son) · 2026-10-30

- **Robo360** · 2023 · 数据集
  面向三维物理世界建模的全视角机器人操作数据集，以密集多视角记录不同材料和光学性质物体的操作过程，支持动态神经场与多视角策略研究。
  `机器人 / 具身智能` · `物理 / 科学` · `多视角 RGB 视频` · `相机位姿` · `动作` · `物体元数据`
  [主页](https://robo360dataset.github.io/) · [论文](https://arxiv.org/abs/2312.06686) · [代码](https://github.com/robo360dataset/robo360dataset.github.io) · 访问方式：提供官方项目仓库和论文入口；数据条款待核验
  入选依据 C1（英文审查说明）：Dense-view robot manipulation recordings are explicitly used for dynamic neural representations and multi-view policy learning. [审查来源](https://arxiv.org/abs/2312.06686) · 2026-10-29

- **ScanNet++ (iPhone Sequences)** · 2023 · 数据集
  官方工具从 iPhone 视频提取编号帧并与相机位姿匹配。
  `城市 / 三维场景` · `RGB 视频` · `相机位姿` · `轨迹`
  [代码](https://raw.githubusercontent.com/scannetpp/scannetpp/main/iphone/prepare_iphone_data.py) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：The official loader extracts numbered frames from iPhone videos and matches sorted frame indices to camera poses. Inclusion covers observation/egomotion sequences in static scenes, not object dynamics. [审查来源](https://raw.githubusercontent.com/scannetpp/scannetpp/main/iphone/prepare_iphone_data.py) · 2026-10-30

- **Assembly101 (Temporal Recordings and Poses)** · 2022 · 数据集
  装配/拆卸录制包含同步视角、逐时二维/三维手部关键点及动作预判任务。
  `第一人称 / 人类活动` · `多视角 RGB 视频` · `三维状态` · `动作标签` · `轨迹`
  [代码](https://raw.githubusercontent.com/assembly-101/assembly101-download-scripts/main/README.md) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：Assembly recordings include synchronized views and time-indexed 2D/3D hand poses at 60 fps. The native protocol includes action anticipation; hand trajectories also permit separately specified motion forecasting. [审查来源](https://raw.githubusercontent.com/assembly-101/assembly101-download-scripts/main/README.md) · 2026-10-30

- **MOVi** · 2022 · 派生数据 / 子集
  使用 Kubric 生成的多对象视频系列，提供精确实例分割、深度、光流和三维属性，覆盖不同复杂度设置，适合对象发现、跟踪与可解释动态建模。
  `物理 / 科学` · `合成视频` · `深度` · `光流` · `分割标注` · `三维状态`
  [代码](https://github.com/google-research/kubric) · 访问方式：开放下载
  入选依据 C4（英文审查说明）：The Kubric release identifies generated multi-object video challenges and downloadable data produced by its physical simulation pipeline. MOVi is a derived family, not an independent collection. [审查来源](https://github.com/google-research/kubric) · 2026-10-29

- **NTU VIRAL** · 2022 · 数据集
  无人机视觉、惯性、LiDAR 和 UWB 测距序列，配有地面跟踪位置真值。
  `机器人 / 具身智能` · `双目 RGB` · `激光雷达` · `惯性测量单元` · `轨迹`
  [主页](https://ntu-aris.github.io/ntu_viral_dataset/) · 访问方式：官方数据下载及 CSV 真值
  入选依据 C3（英文审查说明）：Official release supplies flight sequences with synchronized cameras, lidar, IMU/UWB and ground truth. [审查来源](https://ntu-aris.github.io/ntu_viral_dataset/) · 2026-10-29

- **SHIFT (Temporal Sequences)** · 2022 · 数据集
  10 fps 合成驾驶视频提供序列/帧索引、物体轨迹标识及传感器位姿工具。
  `自动驾驶` · `合成视频` · `三维框` · `相机位姿` · `轨迹`
  [代码](https://raw.githubusercontent.com/SysCV/shift-dev/main/README.md) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：The release provides 10 fps videos, sequence/frame indexing, object track IDs and sensor-pose tools. Tracking sequences can support forecasting under an explicit history/future split. [审查来源](https://raw.githubusercontent.com/SysCV/shift-dev/main/README.md) · 2026-10-30

- **AIST++** · 2021 · 数据集
  配乐舞蹈序列，包含逐帧三维关键点和已标定的多视角图像。
  `第一人称 / 人类活动` · `多视角 RGB 视频` · `三维状态` · `音频` · `轨迹`
  [主页](https://google.github.io/aistplusplus_dataset/) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：The release documents 1,408 dance motion sequences, per-frame 3D keypoints, music and calibrated camera views. Forecasting needs a history/future split. [审查来源](https://google.github.io/aistplusplus_dataset/) · 2026-10-30

- **ARKitScenes (Raw Sequences)** · 2021 · 数据集
  原始 RGB-D 采集包含带时间戳的相机旋转和平移轨迹。
  `城市 / 三维场景` · `RGB-D` · `相机位姿` · `轨迹`
  [代码](https://raw.githubusercontent.com/apple-aiml-research/ARKitScenes/main/DATA.md) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：Raw captures include RGB-D/video and camera trajectories whose rows contain timestamp, rotation and translation. Inclusion covers egomotion and observation sequences, not moving-object dynamics. [审查来源](https://raw.githubusercontent.com/apple-aiml-research/ARKitScenes/main/DATA.md) · 2026-10-30

- **CrowdBot** · 2021 · 数据集
  拥挤环境 ROS 录制包含 RGB-D、激光雷达、机器人位姿/速度及行人轨迹。
  `机器人 / 具身智能` · `RGB-D` · `激光雷达` · `机器人状态` · `轨迹`
  [主页](https://www.epfl.ch/labs/lasa/crowdbot-dataset/) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：ROS bag recordings pair onboard RGB-D/LiDAR with robot pose, velocity, controller state and pedestrian tracks. The release citation is December 2021, correcting the former 2020 entry. [审查来源](https://www.epfl.ch/labs/lasa/crowdbot-dataset/) · 2026-10-30

- **DexYCB** · 2021 · 数据集
  官方工具可加载完整手—物体运动序列，包含逐帧图像、手部关节及物体几何。
  `第一人称 / 人类活动` · `RGB 视频` · `三维状态` · `物体状态` · `轨迹`
  [代码](https://raw.githubusercontent.com/NVlabs/dex-ycb-toolkit/master/README.md) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：The official toolkit loads full captured hand/object motion sequences and renders per-frame RGB, hand joints and object geometry; it lists 1,000 sequences. Pose-estimation scores are not forecasting metrics. [审查来源](https://raw.githubusercontent.com/NVlabs/dex-ycb-toolkit/master/README.md) · 2026-10-30

- **DSEC** · 2021 · 数据集
  真实驾驶的双目事件与彩色图像序列，提供同步传感器数据、视差及后续发布的光流真值。
  `自动驾驶` · `事件相机` · `双目 RGB` · `激光雷达` · `GPS / 惯性测量单元` · `光流`
  [主页](https://dsec.ifi.uzh.ch/) · [论文](https://arxiv.org/abs/2103.06011) · 访问方式：官方传感器数据下载及光流、视差基准
  入选依据 C3（英文审查说明）：Driving recordings synchronize stereo frames/events with LiDAR and RTK GPS, enabling ordered observation/ego-trajectory modeling. [审查来源](https://arxiv.org/abs/2103.06011) · 2026-10-29

- **GNM RECON Navigation** · 2021 · 数据集
  室外导航回合包含 RGB、平面位置/朝向和未来航点目标。
  `机器人 / 具身智能` · `RGB 视频` · `智能体位姿` · `轨迹`
  [主页](https://www.tensorflow.org/datasets/catalog/berkeley_gnm_recon) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C3（英文审查说明）：Outdoor navigation episodes expose RGB, planar position/yaw and future waypoint targets. Steps are organized into episodes. Targets are navigation waypoints, not wheel/motor commands. [审查来源](https://www.tensorflow.org/datasets/catalog/berkeley_gnm_recon) · 2026-10-30

- **H2O: Two Hands Manipulating Objects** · 2021 · 数据集
  同步多视角 RGB-D 交互序列包含逐帧手部、物体与相机位姿。
  `第一人称 / 人类活动` · `RGB-D` · `三维状态` · `物体状态` · `相机位姿`
  [主页](https://taeinkwon.com/projects/h2o/) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：Synchronized RGB-D interaction sequences have per-frame 3D hand, 6D object and camera poses. Temporal smoothing is documented; forecasting requires a separate causal split. [审查来源](https://taeinkwon.com/projects/h2o/) · 2026-10-30

- **Hilti SLAM Challenge Dataset** · 2021 · 数据集
  建筑及办公环境的手持多传感器序列，提供时间同步的视觉、LiDAR、IMU 与稀疏高精度位姿真值。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB 视频` · `激光雷达` · `惯性测量单元` · `相机位姿`
  [代码](https://github.com/Hilti-Research/hilti-slam-challenge-2021) · [论文](https://arxiv.org/abs/2109.11316) · 访问方式：官方仓库提供数据和真值下载入口
  入选依据 C3（英文审查说明）：Indoor/outdoor robot sensor sequences have accurate ground-truth references; retain temporal observation/pose modeling, not static construction perception. [审查来源](https://arxiv.org/abs/2109.11316) · 2026-10-29

- **KITTI-360** · 2021 · 数据集
  面向长期城市驾驶的多模态三维数据集，提供全景图像、激光雷达、轨迹和三维场景标注。
  `自动驾驶` · `城市 / 三维场景` · `激光雷达` · `RGB 视频` · `三维框` · `地图` · `GPS / 惯性测量单元`
  [主页](https://www.cvlibs.net/datasets/kitti-360/) · 访问方式：官方基准下载
  入选依据 C3（英文审查说明）：Official release supplies ordered driving frames with accurate geolocation, consistent instance IDs and released image/LiDAR timestamps. [审查来源](https://www.cvlibs.net/datasets/kitti-360/) · 2026-10-29

- **TUM-VIE** · 2021 · 数据集
  同步双目事件、灰度图像和惯性数据的手持及头戴序列，配有起止段运动捕捉真值。
  `机器人 / 具身智能` · `事件相机` · `双目灰度` · `惯性测量单元` · `相机位姿`
  [主页](https://cvg.cit.tum.de/data/datasets/visual-inertial-event-dataset) · [论文](https://arxiv.org/abs/2108.07329) · 访问方式：官方序列下载及可视化脚本
  入选依据 C3（英文审查说明）：Hardware-synchronized event/frame/IMU streams record handheld and head-mounted motion trajectories; future prediction requires a causal sequence split. [审查来源](https://arxiv.org/abs/2108.07329) · 2026-10-29

- **Audi Autonomous Driving Dataset** · 2020 · 数据集
  奥迪公开的自动驾驶多传感器数据集，包含相机、激光雷达、语义标注和车辆状态。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `语义标签` · `GPS / 惯性测量单元`
  [论文](https://arxiv.org/abs/2004.06320) · 访问方式：官方下载门户
  入选依据 C3（英文审查说明）：Retain the 392,556 sequential unannotated sensor frames with vehicle-bus data; non-sequential segmentation images alone do not qualify. [审查来源](https://arxiv.org/abs/2004.06320) · 2026-10-29

- **DoTA (Tracks and FOL Features)** · 2020 · 数据集
  交通异常视频之外，还发布物体边界框轨迹及用于未来物体定位的光流特征。
  `自动驾驶` · `RGB 视频` · `二维框` · `光流` · `轨迹`
  [代码](https://raw.githubusercontent.com/MoonBlvd/Detection-of-Traffic-Anomaly/master/README.md) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：The release includes object bounding-box tracks and optical-flow features used for future-object-localization models, plus ordered frames and anomaly intervals. The tracks support prediction; anomaly labels alone would not. [审查来源](https://raw.githubusercontent.com/MoonBlvd/Detection-of-Traffic-Anomaly/master/README.md) · 2026-10-30

- **InterHand2.6M** · 2020 · 数据集
  图像序列与三维手部关节、MANO 参数及帧索引关联，另有 30 fps 版本。
  `第一人称 / 人类活动` · `多视角 RGB 视频` · `三维状态` · `轨迹`
  [主页](https://mks0601.github.io/InterHand2.6M/) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：Sequence names and frame indices link images to 3D hand joints and MANO parameters; a 30 fps release supports temporal research. Some captures have missing frames, requiring explicit timing checks. [审查来源](https://mks0601.github.io/InterHand2.6M/) · 2026-10-30

- **Newer College Dataset** · 2020 · 数据集
  牛津学院区域的手持多传感器序列，结合 LiDAR、视觉、IMU 与厘米级轨迹真值。
  `机器人 / 具身智能` · `城市 / 三维场景` · `双目 RGB` · `激光雷达` · `惯性测量单元` · `相机位姿`
  [主页](https://ori-drs.github.io/newer-college-dataset/) · 访问方式：官方项目提供序列下载入口
  入选依据 C3（英文审查说明）：Hand-carried stereo/LiDAR/IMU recordings include challenging motion sequences and precise ground truth; static map alone is not the inclusion basis. [审查来源](https://ori-drs.github.io/newer-college-dataset/) · 2026-10-29

- **PandaSet** · 2020 · 数据集
  面向自动驾驶研究的多传感器数据集，提供相机、激光雷达、GPS/IMU 和三维标注，覆盖城市道路中的车辆、行人和交通场景。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `GPS / 惯性测量单元` · `三维框` · `分割标注`
  [代码](https://github.com/scaleapi/pandaset-devkit) · [论文](https://arxiv.org/abs/2112.12610) · 访问方式：原下载网页已不可靠；尚未确认当前发布方下载入口
  入选依据 C3（英文审查说明）：Official devkit exposes sequences of sensor measurements and per-frame poses; retain sequential recordings. [审查来源](https://github.com/scaleapi/pandaset-devkit) · 2026-10-29

- **pNEUMA** · 2020 · 数据集
  使用多架无人机在雅典市中心采集的大规模城市交通轨迹数据集，提供车辆、行人和其他道路参与者在拥挤城市路网中的连续运动。
  `自动驾驶` · `城市 / 三维场景` · `轨迹` · `智能体位姿` · `物体元数据` · `场景元数据`
  [主页](https://open-traffic.epfl.ch/) · 访问方式：官方 Open Traffic 平台提供数据访问入口
  入选依据 C3（英文审查说明）：Drone recordings yield naturalistic urban vehicle trajectories across many intersections. [审查来源](https://open-traffic.epfl.ch/) · 2026-10-29

- **TartanAir** · 2020 · 数据集
  多种仿真场景中的连续相机轨迹，提供同步图像、深度、光流和位姿真值。
  `机器人 / 具身智能` · `城市 / 三维场景` · `双目 RGB` · `深度` · `光流` · `相机位姿` · `激光雷达`
  [主页](https://theairlab.org/tartanair-dataset/) · [论文](https://arxiv.org/abs/2003.14338) · 访问方式：官方项目提供数据访问说明
  入选依据 C3（英文审查说明）：Simulation trajectory sampling provides ordered stereo/depth/flow observations and camera poses amid moving objects and changing conditions. [审查来源](https://arxiv.org/abs/2003.14338) · 2026-10-29

- **BLVD** · 2019 · 数据集
  面向自动驾驶的大规模 5D 语义数据集，结合视频、三维目标、轨迹、地图和时间信息，支持动态交通场景理解与未来状态建模。
  `自动驾驶` · `城市 / 三维场景` · `RGB 视频` · `三维框` · `轨迹` · `地图` · `语义标签`
  [论文](https://arxiv.org/abs/1903.06405) · [代码](https://github.com/VCCIV/BLVD) · 访问方式：提供官方代码仓库
  入选依据 C3（英文审查说明）：The benchmark explicitly targets temporal object tracking, interactive events and intention prediction, beyond static detection. [审查来源](https://arxiv.org/abs/1903.06405) · 2026-10-29

- **Habitat-Lab** · 2019 · 生成环境 / 工具
  具身导航与操作仿真平台。
  `机器人 / 具身智能` · `RGB 视频` · `深度` · `智能体位姿` · `动作`
  [主页](https://aihabitat.org/) · [代码](https://github.com/facebookresearch/habitat-lab) · [论文](https://arxiv.org/abs/1904.01201) · 访问方式：开源模拟器
  入选依据 C2（英文审查说明）：Configurable embodied agents and sensors interact in a 3D simulator through task APIs; HM3D/MP3D/Replica are asset dependencies. [审查来源](https://arxiv.org/abs/1904.01201) · 2026-10-29

- **HRI Advice Dataset (HAD)** · 2019 · 派生数据 / 子集
  HDD 派生驾驶视频包含 CAN 总线信号及自然语言驾驶建议。
  `自动驾驶` · `RGB 视频` · `机器人状态` · `语言` · `轨迹`
  [主页](https://usa.honda-ri.com/HAD) · 访问方式：使用大学邮箱申请
  入选依据 C3（英文审查说明）：The publisher identifies 30 hours of HDD-derived driving videos with CAN-bus signals and language advice. Advice is not a low-level driving command; access requires a university request for non-commercial use. [审查来源](https://usa.honda-ri.com/HAD) · 2026-10-30

- **iGibson** · 2019 · 生成环境 / 工具
  室内具身智能仿真平台，提供视觉、触觉、动作和物理状态轨迹。
  `机器人 / 具身智能` · `RGB 视频` · `深度` · `仿真状态` · `动作`
  [主页](https://svl.stanford.edu/igibson/) · [代码](https://github.com/StanfordVL/iGibson) · 访问方式：开源模拟器与资源
  入选依据 C4（英文审查说明）：Official simulator couples visual observations with physical interactions and explicit object states including temperature, wetness and slicing. [审查来源](https://svl.stanford.edu/igibson/) · 2026-10-29

- **nuScenes** · 2019 · 数据集
  覆盖波士顿与新加坡城市道路的多传感器自动驾驶数据集，提供同步环视相机、LiDAR、RADAR、定位和三维标注，适合多视角时空建模、占用预测与驾驶世界模型研究。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `毫米波雷达` · `惯性测量单元 / GPS` · `三维框`
  [主页](https://www.nuscenes.org/) · [论文](https://arxiv.org/abs/1903.11027) · [代码](https://github.com/nutonomy/nuscenes-devkit) · 访问方式：需注册
  入选依据 C3（英文审查说明）：Twenty-second driving scenes combine synchronized sensors and temporally tracked 3D agents. Retain sequence/trajectory use, not isolated detection images. [审查来源](https://arxiv.org/abs/1903.11027) · 2026-10-29

- **Oxford Radar RobotCar** · 2019 · 数据集
  RobotCar 雷达扩展包含驾驶雷达、激光雷达及优化后的雷达里程计。
  `自动驾驶` · `毫米波雷达` · `激光雷达` · `相机位姿` · `轨迹`
  [主页](https://oxford-robotics-institute.github.io/radar-robotcar-dataset/) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：The radar extension provides 280 km of driving with radar, LiDAR and optimized radar odometry. It shares the RobotCar platform and is not a disjoint parent collection. [审查来源](https://oxford-robotics-institute.github.io/radar-robotcar-dataset/) · 2026-10-30

- **SoundSpaces** · 2019 · 生成环境 / 工具
  面向三维环境音频-视觉导航的仿真数据集和环境，将空间音频、视觉观测、动作和位置状态结合起来，支持具身智能体的多模态世界建模。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB 视频` · `音频` · `动作` · `仿真状态` · `地图`
  [论文](https://arxiv.org/abs/1912.11474) · [代码](https://github.com/facebookresearch/sound-spaces) · 访问方式：官方项目访问；可能需要注册
  入选依据 C2（英文审查说明）：Audio-visual navigation uses egocentric observations generated by agent motion in acoustically simulated scenes; source scenes are dependencies. [审查来源](https://arxiv.org/abs/1912.11474) · 2026-10-29

- **UZH-FPV Drone Racing Dataset** · 2019 · 数据集
  专家操控竞速无人机的激烈运动序列，提供相机、事件、IMU 和激光跟踪运动真值。
  `机器人 / 具身智能` · `RGB 视频` · `事件相机` · `惯性测量单元` · `相机位姿` · `轨迹`
  [主页](https://fpv.ifi.uzh.ch/) · 访问方式：官方序列下载；基准测试真值不公开
  入选依据 C3（英文审查说明）：Aggressive flight sequences provide visual-inertial measurements and 6DoF ground-truth trajectories. [审查来源](https://fpv.ifi.uzh.ch/) · 2026-10-29

- **Waymo Open Dataset** · 2019 · 数据集
  高质量自动驾驶多传感器数据集，覆盖摄像头、LiDAR、地图、三维检测和运动预测场景，能够支持动态占用、未来轨迹以及闭环驾驶世界表示研究。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `地图` · `三维框` · `轨迹`
  [主页](https://waymo.com/open/) · [论文](https://arxiv.org/abs/1912.04838) · [代码](https://github.com/waymo-research/waymo-open-dataset) · 访问方式：需注册
  入选依据 C3（英文审查说明）：Synchronized 20-second driving sequences expose time-indexed observations and road-agent annotations. Static detection labels alone are not the basis. [审查来源](https://arxiv.org/abs/1912.04838) · 2026-10-29

- **ApolloScape** · 2018 · 数据集
  面向自动驾驶的多任务数据集，提供街景视频、立体图像、深度、三维车辆和高精地图等信息，支持城市时空场景建模。
  `自动驾驶` · `城市 / 三维场景` · `RGB 视频` · `深度` · `地图` · `三维框` · `语义标签`
  [主页](https://apolloscape.auto/) · [论文](https://arxiv.org/abs/1803.06184) · [代码](https://github.com/ApolloScapeAuto/dataset-api) · 访问方式：需要注册
  入选依据 C3（英文审查说明）：Driving videos include accurate per-frame location; retain sequential observation/pose or trajectory subsets, not isolated perception annotations. [审查来源](https://arxiv.org/abs/1803.06184) · 2026-10-29

- **comma2k19** · 2018 · 数据集
  comma.ai 发布的真实高速通勤驾驶数据集，包含道路前视视频、GPS/GNSS、IMU、CAN 总线、车辆速度、转向角和全局相机位姿，适合研究低成本传感器下的驾驶状态估计与时序地图构建。
  `自动驾驶` · `RGB 视频` · `GPS / 惯性测量单元` · `动作` · `相机位姿` · `轨迹`
  [主页](https://github.com/commaai/comma2k19) · [论文](https://arxiv.org/abs/1812.05752) · 访问方式：公开 GitHub 仓库提供数据下载说明和示例片段
  入选依据 C3（英文审查说明）：Minute-long driving sequences include road video, GNSS/IMU/CAN and camera position/orientation estimates. [审查来源](https://arxiv.org/abs/1812.05752) · 2026-10-29

- **Gibson Env** · 2018 · 生成环境 / 工具
  基于真实场景重建的交互式具身仿真环境；本条收录可生成交互的环境，不单独计数静态建筑资产。
  `机器人 / 具身智能` · `城市 / 三维场景` · `三维网格` · `RGB-D` · `智能体位姿` · `语义标签`
  [主页](http://gibsonenv.stanford.edu/database/) · [论文](https://arxiv.org/abs/1808.10654) · [代码](https://github.com/StanfordVL/GibsonEnv) · 访问方式：需申请并同意协议
  入选依据 C2（英文审查说明）：Gibson Env explicitly embeds agents subject to physical and spatial constraints in a released interactive simulator. Scope is Gibson Env, not the static building database alone. [审查来源](https://arxiv.org/abs/1808.10654) · 2026-10-29

- **GNM Cory Hall Navigation** · 2018 · 数据集
  走廊导航轨迹包含 RGB、平面位置/朝向及对应的航点目标。
  `机器人 / 具身智能` · `RGB 视频` · `智能体位姿` · `轨迹`
  [主页](https://www.tensorflow.org/datasets/catalog/berkeley_gnm_cory_hall) · 访问方式：官方 TFDS 结构与 RLDS 存储入口；完整下载未测试
  入选依据 C3（英文审查说明）：Hallway navigation trajectories contain RGB, planar position/yaw and corresponding waypoint targets. Steps are organized into episodes. Targets are navigation waypoints, not wheel/motor commands. [审查来源](https://www.tensorflow.org/datasets/catalog/berkeley_gnm_cory_hall) · 2026-10-30

- **MVSEC** · 2018 · 数据集
  在多种运动平台上采集的双目事件序列，结合图像、IMU 与多数序列的位姿和深度真值。
  `机器人 / 具身智能` · `自动驾驶` · `事件相机` · `双目灰度` · `惯性测量单元` · `深度` · `相机位姿`
  [主页](https://daniilidis-group.github.io/mvsec/) · 访问方式：官方序列下载、校准信息及示例代码
  入选依据 C3（英文审查说明）：Multi-vehicle event/frame streams align with LiDAR/IMU/GPS/mocap ground-truth pose, depth and optical flow. [审查来源](https://daniilidis-group.github.io/mvsec/) · 2026-10-29

- **TUM VI** · 2018 · 数据集
  室内外视觉惯性序列，提供校准后的双目图像、IMU 与部分或完整运动捕捉轨迹。
  `机器人 / 具身智能` · `城市 / 三维场景` · `双目灰度` · `惯性测量单元` · `相机位姿` · `轨迹`
  [主页](https://cvg.cit.tum.de/data/datasets/visual-inertial-dataset) · [论文](https://arxiv.org/abs/1804.06120) · 访问方式：官方原始及校准序列下载
  入选依据 C3（英文审查说明）：Hardware-synchronized images/IMU and motion-capture pose references support ordered visual-inertial trajectory modeling. [审查来源](https://arxiv.org/abs/1804.06120) · 2026-10-29

- **DDD17** · 2017 · 数据集
  面向端到端驾驶研究的事件相机数据集，记录真实道路中的异步视觉事件、驾驶状态和控制相关信息，用于动态场景理解与驾驶行为建模。
  `自动驾驶` · `事件相机` · `GPS / 惯性测量单元` · `动作` · `轨迹`
  [论文](https://arxiv.org/abs/1711.01458) · 访问方式：论文入口；数据访问需核验
  入选依据 C2（英文审查说明）：Paper explicitly describes concurrent image/event streams with vehicle speed, GPS, steering, throttle and brake recordings from on-board diagnostics. [审查来源](https://arxiv.org/abs/1711.01458) · 2026-10-29

- **MPI-INF-3DHP (Motion Sequences)** · 2017 · 数据集
  多相机录制包含持续活动片段和对应的三维人体关节标注。
  `第一人称 / 人类活动` · `多视角 RGB 视频` · `三维状态` · `轨迹`
  [论文](https://arxiv.org/pdf/1611.09813) · 访问方式：论文描述该资源；完整下载未测试
  入选依据 C3（英文审查说明）：Multi-camera recordings cover approximately minute-long activity sets with released 3D joint annotations. Inclusion concerns ordered human motion; single-frame pose estimation is its native evaluation. [审查来源](https://arxiv.org/pdf/1611.09813) · 2026-10-30

- **PennCOSYVIO** · 2017 · 数据集
  室外到室内的手持视觉惯性轨迹，使用标记定位提供传感器位置参考。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB 视频` · `双目 RGB` · `惯性测量单元` · `相机位姿`
  [主页](https://daniilidis-group.github.io/penncosyvio/) · 访问方式：官方下载、校准和基准文档
  入选依据 C3（英文审查说明）：Synchronized video/IMU recordings have an indoor-outdoor sensor trajectory and localized ground-truth positions. [审查来源](https://daniilidis-group.github.io/penncosyvio/) · 2026-10-29

- **ScanNet** · 2017 · 数据集
  由手持 RGB-D 设备采集的大规模室内扫描序列，提供相机位姿、重建网格、语义和实例标注，是室内三维世界表示与导航的重要数据源。
  `城市 / 三维场景` · `机器人 / 具身智能` · `RGB-D` · `相机位姿` · `三维网格` · `语义标签`
  [主页](http://www.scan-net.org/) · [论文](https://arxiv.org/abs/1702.04405) · [代码](https://github.com/ScanNet/ScanNet) · 访问方式：需同意协议
  入选依据 C3（英文审查说明）：RGB-D videos include per-view camera poses, exposing temporal camera-observation trajectories. Retain egomotion sequences, not static reconstructed geometry or object dynamics claims. [审查来源](https://arxiv.org/abs/1702.04405) · 2026-10-29

- **YCB-Video (Camera-Relative Pose Sequences)** · 2017 · 数据集
  92 段 RGB-D 视频提供逐帧物体位姿，物体布局固定而相机移动。
  `城市 / 三维场景` · `RGB-D` · `相机位姿` · `物体状态` · `轨迹`
  [论文](https://arxiv.org/pdf/1711.00199) · 访问方式：论文描述该资源；完整下载未测试
  入选依据 C3（英文审查说明）：The 92 RGB-D videos include per-frame object poses; annotation estimates camera trajectories while object configurations remain fixed. Suitable for camera-relative pose sequences, not evidence of dynamic object interactions. [审查来源](https://arxiv.org/pdf/1711.00199) · 2026-10-30

- **Cityscapes (Temporal and Egomotion Data)** · 2016 · 数据集
  每个标注关键帧附带 30 帧视频上下文、双目视图及车辆里程计。
  `自动驾驶` · `双目 RGB` · `相机位姿` · `轨迹`
  [主页](https://www.cityscapes-dataset.com/dataset-overview/) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：Each annotated image is frame 20 of a 30-frame video snippet; stereo views and vehicle odometry accompany the sequence. Include the temporal/egomotion portion; native segmentation scores are not prediction scores. [审查来源](https://www.cityscapes-dataset.com/dataset-overview/) · 2026-10-30

- **DeepMind Lab** · 2016 · 生成环境 / 工具
  第一人称 3D 导航与交互环境，提供视觉观测、动作和游戏状态轨迹。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/google-deepmind/lab) · [论文](https://arxiv.org/abs/1612.03801) · 访问方式：开源环境
  入选依据 C2（英文审查说明）：First-person game worlds expose a flexible agent/environment API for partially observed sequential tasks. [审查来源](https://arxiv.org/abs/1612.03801) · 2026-10-29

- **EuRoC MAV** · 2016 · 数据集
  微型飞行器采集的视觉惯性序列，包含双目灰度图、同步 IMU 和运动真值。
  `机器人 / 具身智能` · `双目灰度` · `惯性测量单元` · `相机位姿` · `轨迹`
  [主页](https://projects.asl.ethz.ch/datasets/euroc-mav/) · 访问方式：官方 ETH Research Collection 下载入口
  入选依据 C3（英文审查说明）：Stereo images and synchronized IMU are paired with accurate MAV motion ground truth. [审查来源](https://projects.asl.ethz.ch/datasets/euroc-mav/) · 2026-10-29

- **Oxford RobotCar** · 2016 · 数据集
  带时间戳的相机和激光雷达流配有 GPS/INS 位置、速度及姿态信息。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `GPS / 惯性测量单元` · `相机位姿`
  [主页](https://robotcar-dataset.robots.ox.ac.uk/documentation/) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：Timestamped camera/LiDAR streams align with GPS/INS position, velocity and attitude. VO supplies relative poses but is explicitly a reference, not ground truth. [审查来源](https://robotcar-dataset.robots.ox.ac.uk/documentation/) · 2026-10-30

- **KITTI** · 2012 · 数据集
  自动驾驶领域最经典的多传感器数据集之一，提供双目相机、LiDAR、GPS/IMU 和多类评测任务，适合建立深度、场景流、里程计与三维动态建模的可比基线。
  `自动驾驶` · `双目 RGB` · `激光雷达` · `GPS / 惯性测量单元` · `三维框`
  [主页](https://www.cvlibs.net/datasets/kitti/) · [论文](https://www.cvlibs.net/publications/Geiger2013IJRR.pdf) · [代码](https://github.com/utiasSTARS/pykitti) · 访问方式：开放下载
  入选依据 C3（英文审查说明）：Official suite includes raw calibrated driving recordings, GPS localization, visual odometry and 3D tracking. Retain sequential/odometry scope rather than standalone detection images. [审查来源](https://www.cvlibs.net/datasets/kitti/) · 2026-10-29

- **TUM RGB-D** · 2012 · 数据集
  手持和机器人 RGB-D 序列配有运动捕捉轨迹，包含动态人群场景和连续相机运动。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB-D` · `相机位姿` · `轨迹`
  [主页](https://cvg.cit.tum.de/data/datasets/rgbd-dataset) · 访问方式：官方序列下载和轨迹评估工具
  入选依据 C3（英文审查说明）：Official release provides 30 Hz RGB-D images aligned with high-accuracy motion-capture sensor trajectories. [审查来源](https://cvg.cit.tum.de/data/datasets/rgbd-dataset) · 2026-10-29

- **NGSIM Vehicle Trajectories** · 2006 · 数据集
  车辆轨迹以十分之一秒间隔描述交通中的位置变化。
  `自动驾驶` · `轨迹` · `物体状态`
  [主页](https://www.fhwa.dot.gov/publications/research/operations/its/06135/06135.pdf) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C3（英文审查说明）：The FHWA describes vehicle trajectories sampled every tenth of a second. Positions over time support traffic forecasting; the program is not a camera-control dataset. [审查来源](https://www.fhwa.dot.gov/publications/research/operations/its/06135/06135.pdf) · 2026-10-30

<a id="physical-causal-reasoning"></a>

### 物理与因果推理（28）

- **CG-World** · 2026 · 数据集
  显式记录状态、事件、关系和反事实分支的大规模计算机图形世界状态数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `合成视频` · `三维状态` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2607.26452) · 访问方式：论文入口；发布状态待核验
  入选依据 C4（英文审查说明）：Temporally aligned state, action, contact and branch metadata explicitly distinguish factual and counterfactual trajectories. [审查来源](https://arxiv.org/abs/2607.26452) · 2026-10-29

- **GAUGE** · 2026 · 评测集
  以真实测量轨迹和物理属性为依据，评测物理引擎与视频世界模型物理保真度的基准。
  `物理 / 科学` · `机器人 / 具身智能` · `RGB 视频` · `轨迹` · `物体状态` · `三维元数据`
  [主页](https://internrobotics.github.io/GAUGE/) · [论文](https://arxiv.org/abs/2608.05948) · [代码](https://github.com/InternRobotics/GAUGE) · 访问方式：基准数据集已在 Hugging Face 提供
  入选依据 C5（英文审查说明）：Measured physical trajectories and task-specific observables evaluate simulation engines and video world models against controlled real experiments. [审查来源](https://arxiv.org/abs/2608.05948) · 2026-10-29

- **KinDER** · 2026 · 生成环境 / 工具
  面向机器人学习与规划的物理推理基准，提供任务环境、示范数据和模型资源。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `动作` · `物体状态` · `轨迹`
  [主页](https://huggingface.co/datasets/kinder-bench/kinder-datasets) · [代码](https://github.com/Princeton-Robot-Planning-and-Learning/kindergarden) · 访问方式：示范数据已在 Hugging Face 提供
  入选依据 C2（英文审查说明）：README shows action_space sampling, step(action), next observations and object-centric state conversion, with dataset collection support. [审查来源](https://github.com/Princeton-Robot-Planning-and-Learning/kindergarden) · 2026-10-29

- **PhyGround** · 2026 · 评测集
  通过文本、首帧和生成视频评测生成式世界模型物理合理性的基准。
  `物理 / 科学` · `RGB 视频` · `文本` · `物体状态`
  [主页](https://phyground.github.io/) · [论文](https://arxiv.org/abs/2605.10806) · [代码](https://github.com/NU-World-Model-Embodied-AI/PhyGround) · 访问方式：提示和首帧图像已在 Hugging Face 提供
  入选依据 C5（英文审查说明）：Expected physical outcomes and law-specific questions evaluate generative world models across 250 prompts. [审查来源](https://arxiv.org/abs/2605.10806) · 2026-10-29

- **PhysEditWorld** · 2026 · 数据集
  通过在相同场景、初态和动作序列下改变重力参数生成的物理规则可编辑世界模型数据集。
  `游戏 / 虚拟环境` · `物理 / 科学` · `RGB 视频` · `动作` · `游戏状态` · `相机位姿`
  [主页](https://yizhiqianbi.github.io/physeditworld/) · [论文](https://arxiv.org/abs/2606.26694) · [代码](https://github.com/yizhiqianbi/physeditworld) · 访问方式：ModelScope 提供公开数据入口
  入选依据 C4（英文审查说明）：Matched initial states and action traces are replayed under different gravity values with synchronized engine state and observations. [审查来源](https://arxiv.org/abs/2606.26694) · 2026-10-29

- **RigidBench** · 2026 · 评测集
  具有精确仿真状态的刚体物理视频生成基准。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `深度` · `三维状态`
  [论文](https://arxiv.org/abs/2608.15555) · 访问方式：论文入口；发布状态待核验
  入选依据 C1（英文审查说明）：Generated continuations are compared with simulator rollouts from the same initial frame, with per-frame poses, contacts and depth. [审查来源](https://arxiv.org/abs/2608.15555) · 2026-10-29

- **VisTouch** · 2026 · 数据集
  机器人滑动接触场景下同步采集视觉、触觉力和接触音频的大规模多模态数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `音频` · `机器人状态` · `动作`
  [代码](https://github.com/liangnjupt/VisTouch) · 访问方式：官方仓库提供元数据、加载器、基准和下载说明
  入选依据 C1（英文审查说明）：Robot sliding-contact episodes pair video and audio with time-varying tactile-force trajectories; no inferred motor-action labels. [审查来源](https://github.com/liangnjupt/VisTouch) · 2026-10-29

- **CausalVQA** · 2025 · 评测集
  面向现实视频反事实、假设、预判与规划的物理因果问答基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2506.09943) · 访问方式：论文入口；发布状态待核验
  入选依据 C4（英文审查说明）：Counterfactual, hypothetical and anticipation questions explicitly ask for outcomes of actions/events in physical videos; descriptive QA is outside the retained scope. [审查来源](https://arxiv.org/abs/2506.09943) · 2026-10-29

- **GRIP Dataset** · 2025 · 数据集
  面向可变形与刚体耦合抓取的通用机器人增量势接触仿真数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `动作` · `物体状态` · `三维状态`
  [主页](https://bell0o.github.io/GRIP/) · [代码](https://github.com/BeLl0o/GRIP_Dataset) · 访问方式：项目页和官方仓库可用
  入选依据 C4（英文审查说明）：Official HDF5 schema explicitly contains 100-frame grasp trajectories with time-varying joint states, object mesh states, contacts and friction forces. Only currently released subsets count as available. [审查来源](https://github.com/BeLl0o/GRIP_Dataset) · 2026-10-29

- **Guardian OOD (UR5-Fail / RoboFail / RoboVQA)** · 2025 · 派生数据 / 子集
  执行前后的多视角图像配有子任务成功/失败与失败类别标注。
  `机器人 / 具身智能` · `RGB 图像` · `语言` · `奖励`
  [主页](https://huggingface.co/datasets/paulpacaud/Guardian-FailCoT-OOD-datasets) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C4（英文审查说明）：The OOD execution subsets provide start/end subtask images paired with success/failure outcomes: UR5-Fail 140, RoboFail 153 and RoboVQA 357 examples. Separately bundled single-image planning cases are not the qualifying temporal evidence. [审查来源](https://huggingface.co/datasets/paulpacaud/Guardian-FailCoT-OOD-datasets) · 2026-10-30

- **ManipBench (Interaction and Outcome Tasks)** · 2025 · 评测集
  混合评测中的逆动力学、时序操作、布料交互、反事实和仿真任务提供交互结果目标。
  `机器人 / 具身智能` · `RGB 视频` · `问答` · `仿真状态`
  [主页](https://manipbench.github.io/) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C4（英文审查说明）：The benchmark includes inverse dynamics, temporal action sequences, fabric interaction and counterfactual questions, plus executable simulation evaluation. Inclusion is limited to these interaction/outcome tasks. [审查来源](https://manipbench.github.io/) · 2026-10-30

- **OmniEAR / EAR-Bench** · 2025 · 生成环境 / 工具
  评测智能体对物理交互、工具使用和多智能体协调推理能力的文本具身场景基准。
  `机器人 / 具身智能` · `文本` · `动作` · `物体状态` · `轨迹`
  [主页](https://zju-real.github.io/OmniEmbodied/) · [代码](https://github.com/ZJU-REAL/OmniEmbodied) · 访问方式：仓库提供基准数据，Hugging Face 提供专家轨迹
  入选依据 C2（英文审查说明）：OmniEAR/EAR-Bench supplies a structured-state simulator and expert trajectories for physically constrained action execution. Rename to match the official repository; paper title differs across revisions. [审查来源](https://github.com/ZJU-REAL/OmniEmbodied) · 2026-10-29

- **Robo-Dopamine GRM State Pairs** · 2025 · 派生数据 / 子集
  任务指令、起止锚点及多视角前后状态配有相对进度目标。
  `机器人 / 具身智能` · `RGB 图像` · `语言` · `奖励`
  [主页](https://huggingface.co/datasets/tanhuajie2001/Robo-Dopamine-GRM-Dataset) · 访问方式：Hugging Face 门控发布，须接受发布方条件；未下载文件
  入选依据 C4（英文审查说明）：Task instructions, start/end anchors and multi-view BEFORE/AFTER states are paired with relative progress targets. This derived state-pair resource is not a release of full action trajectories. [审查来源](https://huggingface.co/datasets/tanhuajie2001/Robo-Dopamine-GRM-Dataset) · 2026-10-30

- **PokeFlex** · 2024 · 数据集
  面向可变形物体机器人操作的真实世界试验数据集，通过机器人戳动采集完整 360 度三维网格形变及对应力和力矩。
  `机器人 / 具身智能` · `物理 / 科学` · `三维网格` · `动作` · `机器人状态` · `多视角 RGB 视频`
  [主页](https://pokeflex-dataset.github.io/) · [论文](https://arxiv.org/abs/2409.17124) · [代码](https://github.com/pokeflex-dataset/reconstruction) · 访问方式：提供官方项目页和重建代码
  入选依据 C2（英文审查说明）：Robot poking pairs actively deformed 3D meshes with applied forces and torques. [审查来源](https://arxiv.org/abs/2409.17124) · 2026-10-29

- **ARMBench (Activity Defect Subset)** · 2023 · 数据集
  操作缺陷部分包含抓取/转移/放置背景、视频、包装物理失效及首次缺陷帧。
  `机器人 / 具身智能` · `RGB 视频` · `物体状态`
  [论文](https://arxiv.org/pdf/2303.16382) · 访问方式：论文描述该资源；完整下载未测试
  入选依据 C4（英文审查说明）：The activity subset contains pick/transfer/place context, manipulation videos, physical package-failure outcomes and the first observable defect frame. Inclusion covers these outcome sequences, not the standalone segmentation/identification images. [审查来源](https://arxiv.org/pdf/2303.16382) · 2026-10-30

- **Melting Pot 2.0** · 2022 · 生成环境 / 工具
  多智能体社会交互环境套件。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/google-deepmind/meltingpot) · [论文](https://arxiv.org/abs/2211.13746) · 访问方式：开源基准
  入选依据 C2（英文审查说明）：Interactive multi-agent substrates and co-player populations create controlled state-transition scenarios; an environment suite, not a fixed dataset. [审查来源](https://arxiv.org/abs/2211.13746) · 2026-10-29

- **Physion** · 2021 · 评测集
  用于直觉物理学习和评测的合成视频数据集，通过碰撞、支撑、包含和形变等场景测试模型能否预测物体间接触及后续动态。
  `物理 / 科学` · `合成视频` · `深度` · `分割标注` · `物体状态`
  [主页](https://physion-benchmark.github.io/) · [论文](https://arxiv.org/abs/2106.08261) · [代码](https://github.com/cogtoolslab/physics-benchmarking-neurips2021) · 访问方式：开放下载
  入选依据 C1（英文审查说明）：Physics simulations explicitly evaluate how scenes evolve into future states across collisions, rolling, sliding and deformable interactions. [审查来源](https://arxiv.org/abs/2106.08261) · 2026-10-29

- **CATER** · 2020 · 数据集
  由可组合物体运动生成的合成视频数据集，强调时空关系、动作组合和被遮挡目标的定位，适合研究对象中心的动态表示及长期状态追踪。
  `物理 / 科学` · `合成视频` · `物体状态` · `动作标签` · `三维元数据`
  [主页](https://rohitgirdhar.github.io/CATER/) · [论文](https://arxiv.org/abs/1910.04744) · [代码](https://github.com/rohitgirdhar/CATER) · 访问方式：开放下载
  入选依据 C1（英文审查说明）：Controlled synthetic videos require tracking object motion, occlusion and recursive containment through time; an observable scene-state evolution task is explicit. [审查来源](https://rohitgirdhar.github.io/CATER/) · 2026-10-29

- **CausalWorld** · 2020 · 生成环境 / 工具
  用于因果结构和泛化研究的可干预机器人操作仿真环境。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `动作` · `仿真状态` · `物体状态`
  [主页](https://sites.google.com/view/causal-world) · [论文](https://arxiv.org/abs/2010.04296) · [代码](https://github.com/rr-learning/CausalWorld) · 访问方式：官方环境
  入选依据 C4（英文审查说明）：Official simulator provides step(action) and interventions on causal variables such as object mass and size, enabling controlled physical rollouts. [审查来源](https://github.com/rr-learning/CausalWorld) · 2026-10-29

- **DPI-Net Simulation Rollout Generator** · 2019 · 生成环境 / 工具
  官方脚本生成流体、刚体及颗粒交互轨迹，并分别保存真实和预测回放。
  `物理 / 科学` · `仿真状态` · `三维状态` · `轨迹`
  [代码](https://raw.githubusercontent.com/YunzhuLi/DPI-Net/master/README.md) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C4（英文审查说明）：Training scripts generate particle simulation data for FluidFall, BoxBath, FluidShake and RiceGrip; evaluation saves separate ground-truth and predicted rollouts. [审查来源](https://raw.githubusercontent.com/YunzhuLi/DPI-Net/master/README.md) · 2026-10-30

- **PHYRE** · 2019 · 评测集
  二维物理推理基准，要求智能体通过放置物体完成目标，并在大量模板化关卡中测试跨任务泛化、试错效率和因果干预能力。
  `物理 / 科学` · `游戏 / 虚拟环境` · `仿真状态` · `动作` · `合成视频`
  [主页](https://phyre.ai/) · [论文](https://arxiv.org/abs/1908.05656) · [代码](https://github.com/facebookresearch/phyre) · 访问方式：开放生成工具
  入选依据 C4（英文审查说明）：Physical puzzles in a 2D mechanics simulator allow interventions and resulting outcome evaluation. [审查来源](https://arxiv.org/abs/1908.05656) · 2026-10-29

- **BlockPuzzle** · 2018 · 生成环境 / 工具
  基于 MuJoCo 和 OpenAI Gym 的物理推理任务框架，通过积木拼图和稀疏奖励环境研究智能体对物理规则的学习、课程训练和跨任务迁移。
  `机器人 / 具身智能` · `物理 / 科学` · `仿真状态` · `动作` · `奖励` · `物体状态`
  [论文](https://arxiv.org/abs/1812.00091) · 访问方式：论文入口；环境访问待核验
  入选依据 C2（英文审查说明）：MuJoCo/Gym physical-puzzle environments expose actions and resulting state transitions, with curriculum and imitation tasks. [审查来源](https://arxiv.org/abs/1812.00091) · 2026-10-29

- **IntPhys** · 2018 · 评测集
  面向视觉直觉物理评测的合成数据集，通过可能与不可能的场景测试物体恒存、遮挡和支撑关系，避免模型只依赖单帧外观线索。
  `物理 / 科学` · `合成视频` · `深度` · `分割标注` · `场景元数据`
  [主页](https://intphys.cognitive-ml.fr/) · [论文](https://arxiv.org/abs/1803.07616) · [代码](https://github.com/rronan/IntPhys) · 访问方式：开放下载
  入选依据 C1（英文审查说明）：Possible/impossible physical event videos are evaluated using future semantic-mask prediction and physical plausibility. [审查来源](https://arxiv.org/abs/1803.07616) · 2026-10-29

- **ShapeStacks** · 2018 · 评测集
  通过程序化堆叠不同形状物体生成的合成数据和工具，重点研究稳定性、支撑关系及从图像推断三维物理结构。
  `物理 / 科学` · `合成视频` · `三维状态` · `物体元数据` · `仿真状态`
  [论文](https://arxiv.org/abs/1804.08018) · [代码](https://github.com/ogroth/shapestacks) · 访问方式：开放生成工具
  入选依据 C4（英文审查说明）：Initial stack configurations are paired with simulated structural-stability outcomes, supporting physical future-outcome reasoning. Not a dense trajectory dataset. [审查来源](https://arxiv.org/abs/1804.08018) · 2026-10-29

- **TextWorld** · 2018 · 生成环境 / 工具
  文本交互式世界生成器，提供语言观测、动作和隐藏状态转移。
  `游戏 / 虚拟环境` · `文本` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/microsoft/TextWorld) · [论文](https://arxiv.org/abs/1806.11532) · 访问方式：开源生成器与游戏
  入选依据 C2（英文审查说明）：Generated interactive games expose state tracking, actions and rewards through a documented RL environment. [审查来源](https://arxiv.org/abs/1806.11532) · 2026-10-29

- **PyBullet** · 2017 · 生成环境 / 工具
  可执行物理引擎示例通过初始位姿、重力及仿真步进生成物体状态变化。
  `物理 / 科学` · `仿真状态` · `动作` · `物体状态`
  [代码](https://raw.githubusercontent.com/bulletphysics/bullet3/master/examples/pybullet/examples/hello_pybullet.py) · 访问方式：官方文档或实现入口；未进行数据下载测试
  入选依据 C4（英文审查说明）：The executable example sets initial body pose and gravity, advances stepSimulation and exposes body position/orientation. This is a dynamics generator, not a recorded dataset. [审查来源](https://raw.githubusercontent.com/bulletphysics/bullet3/master/examples/pybullet/examples/hello_pybullet.py) · 2026-10-30

- **MIT Planar Pushing Dataset** · 2016 · 数据集
  高精度平面推动实验数据集，系统记录不同物体、接触位置、推动方向和摩擦条件下的动作与物体运动，用于学习接触动力学。
  `机器人 / 具身智能` · `物理 / 科学` · `动作` · `物体状态` · `轨迹` · `机器人状态`
  [论文](https://arxiv.org/abs/1604.04038) · [代码](https://github.com/mcubelab/pdproc) · 访问方式：提供官方处理代码仓库
  入选依据 C2（英文审查说明）：Timestamped pusher/object poses and contact forces record controlled physical pushing experiments. [审查来源](https://arxiv.org/abs/1604.04038) · 2026-10-29

- **Physics 101** · 2016 · 数据集
  通过真实视频记录物体在斜面上的运动，并提供材料、质量、角度和运动信息，用于从视觉估计物理属性及预测动力学。
  `物理 / 科学` · `RGB 视频` · `物体元数据` · `轨迹`
  [主页](https://phys101.csail.mit.edu/) · 访问方式：开放项目访问
  入选依据 C4（英文审查说明）：Official videos depict sliding, collisions, springs and falls; physical-property learning and outcome prediction are explicit. [审查来源](https://phys101.csail.mit.edu/) · 2026-10-29

<a id="world-model-evaluation-diagnostics"></a>

### 世界模型评测与诊断（40）

- **4DSynth** · 2026 · 生成环境 / 工具
  面向动态具身仿真的可控程序化四维世界合成资源。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.26947) · 访问方式：论文入口；数据访问待核验
  入选依据 C4（英文审查说明）：Procedural environments expose animated actors, trajectories and physics-ready state; the paper defines a generated navigation benchmark. Generator, not a downloaded dataset. [审查来源](https://arxiv.org/abs/2608.26947) · 2026-10-29

- **CaliBench** · 2026 · 评测集
  检验视频世界模型随机物理结果校准程度的可解释基准。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.16829) · 访问方式：论文入口；发布状态待核验
  入选依据 C5（英文审查说明）：Video world-model outputs are tested against known physical outcome distributions with a defined calibration protocol. [审查来源](https://arxiv.org/abs/2608.16829) · 2026-10-29

- **CamWorldQA** · 2026 · 评测集
  相机控制世界视频生成的人工感知质量评测集。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `相机位姿`
  [论文](https://arxiv.org/abs/2608.18710) · 访问方式：论文入口；发布状态待核验
  入选依据 C5（英文审查说明）：Camera-controlled generated videos are evaluated for viewpoint consistency, motion coherence and content preservation; perceptual quality is not physical accuracy. [审查来源](https://arxiv.org/abs/2608.18710) · 2026-10-29

- **DrivingGen** · 2026 · 评测集
  从视觉质量和机器人轨迹物理合理性两方面评测自动驾驶生成式视频世界模型的基准。
  `自动驾驶` · `RGB 视频` · `轨迹`
  [主页](https://drivinggen-bench.github.io/) · [论文](https://arxiv.org/abs/2601.01528) · [代码](https://github.com/youngzhou1999/DrivingGen) · 访问方式：数据集已在 Hugging Face 提供
  入选依据 C5（英文审查说明）：Dedicated driving world-model evaluation measures trajectory plausibility, temporal consistency and control conditioning; source clips overlap existing datasets. [审查来源](https://arxiv.org/abs/2601.01528) · 2026-10-29

- **Embodied Scene Rearrangement Planning** · 2026 · 生成环境 / 工具
  具身场景重排规划任务、环境状态和评测基准。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.27371) · [主页](https://pie-lab.cn/ESRP/) · 访问方式：提供官方项目和论文入口
  入选依据 C2（英文审查说明）：OmniGibson scene-rearrangement tasks execute agents from egocentric observations toward target configurations. Scene pairs are task specifications, not recorded rollouts. [审查来源](https://arxiv.org/abs/2608.27371) · 2026-10-29

- **GigaBrain Challenge 2026 World Models Track Dataset** · 2026 · 评测集
  用于轨迹条件视频生成和闭环 VLA 交互评测的多任务、多视角视频与状态轨迹数据。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `轨迹` · `机器人状态` · `深度`
  [主页](https://gigaai-research.github.io/GigaBrain-Challenge-2026/guide/world-model.html) · [代码](https://github.com/open-gigaai/CVPR-2026-Workshop-WM-Track) · 访问方式：数据集和排行榜已在 Hugging Face 提供
  入选依据 C5（英文审查说明）：Official track supplies manipulation trajectories and evaluates generated world-model videos as VLA evaluators. Data access requires an agreement. [审查来源](https://gigaai-research.github.io/GigaBrain-Challenge-2026/guide/world-model.html) · 2026-10-29

- **H2R-Bench** · 2026 · 评测集
  评测人类操作视频向机器人操作视频跨本体生成的基准。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `动作标签` · `物体状态`
  [论文](https://arxiv.org/abs/2608.13049) · 访问方式：论文入口；发布状态待核验
  入选依据 C5（英文审查说明）：World-model video generation is tested against human demonstrations, embodiment constraints, action events and object responses. [审查来源](https://arxiv.org/abs/2608.13049) · 2026-10-29

- **HarnessEval-W** · 2026 · 评测集
  带证据推理树的视觉世界模型动态评测案例集。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `文本` · `问答`
  [论文](https://arxiv.org/abs/2608.16859) · 访问方式：论文入口；发布状态待核验
  入选依据 C5（英文审查说明）：Dedicated world-model evaluation uses 330 cases to diagnose physical, causal and world-state evolution in generated rollouts. [审查来源](https://arxiv.org/abs/2608.16859) · 2026-10-29

- **PAWBench** · 2026 · 评测集
  评测概率分布与世界动态对齐程度的世界模型基准。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.27345) · 访问方式：论文入口；数据访问待核验
  入选依据 C5（英文审查说明）：World-model rollout outcome distributions are evaluated against reference probabilities under matched initial observations and actions. [审查来源](https://arxiv.org/abs/2608.27345) · 2026-10-29

- **PhAIL** · 2026 · 评测集
  Franka FR3 真机 VLA 评测数据，包含多视角视频、遥测、动作结果和安全停止回放。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `机器人状态` · `动作` · `奖励` · `轨迹`
  [主页](https://phail.ai/releases/v1.0) · [论文](https://arxiv.org/abs/2605.29710) · 访问方式：官方发布包含视频、遥测和结果
  入选依据 C1（英文审查说明）：The paper identifies real-robot per-rollout artifacts and time-to-success distributions with teleoperation references. Inspect artifact fields before action-conditioned use. [审查来源](https://arxiv.org/abs/2605.29710) · 2026-10-29

- **PlayWorld** · 2026 · 评测集
  由智能体玩家完成长时目标的交互式世界模型评测基准。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `动作` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.13552) · [代码](https://github.com/kxding/PlayWorld) · 访问方式：论文入口；发布状态待核验
  入选依据 C5（英文审查说明）：Agent players interact with world models across 171 objectives testing persistent state, geometry and out-of-sight evolution. [审查来源](https://arxiv.org/abs/2608.13552) · 2026-10-29

- **R2M-Bench** · 2026 · 评测集
  评测交互式视频世界模型重访记忆和相对一致性的基准。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.27328) · 访问方式：论文入口；数据访问待核验
  入选依据 C5（英文审查说明）：Controlled leave-and-return trajectories evaluate persistent state and revisit memory in action-conditioned video world models. [审查来源](https://arxiv.org/abs/2608.27328) · 2026-10-29

- **RoboDojo RealEval** · 2026 · 生成环境 / 工具
  面向真机机器人任务的远程评测基准，提供任务配置、仿真环境和结果产物。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `场景元数据`
  [主页](https://robodojo-benchmark.com/) · [代码](https://github.com/RoboDojo-Benchmark/RoboDojo) · 访问方式：仅评测用途的仿真发布；不是已发布的训练数据集
  入选依据 C2（英文审查说明）：Official release provides simulator clients, manipulation tasks and result artifacts; it explicitly describes an eval-only release, not a fixed training corpus. [审查来源](https://github.com/RoboDojo-Benchmark/RoboDojo) · 2026-10-29

- **SemComp-Data** · 2026 · 评测集
  面向视频语义任务完成评测的六领域参考图像、指令和结果视频数据。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `文本`
  [论文](https://arxiv.org/abs/2608.17426) · 访问方式：论文入口；发布状态待核验
  入选依据 C1（英文审查说明）：Reference images and instructions are paired with outcome videos for outcome prediction; intermediate physical trajectories are explicitly not required by the protocol. [审查来源](https://arxiv.org/abs/2608.17426) · 2026-10-29

- **ST-BiBench** · 2026 · 生成环境 / 工具
  系统评测多模态模型在双臂具身任务中多流时空协调能力的分层基准。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `动作` · `机器人状态` · `语言`
  [论文](https://arxiv.org/abs/2602.08392) · [代码](https://github.com/stbibench/ST-BiBench) · 访问方式：评测代码和基准素材已提供
  入选依据 C2（英文审查说明）：RoboTwin-based closed-loop benchmark iterates perception and 16D robot actuation with downloadable task assets; generator rather than a fixed transition corpus. [审查来源](https://github.com/stbibench/ST-BiBench) · 2026-10-29

- **SurgWMBench** · 2026 · 评测集
  外科器械短时运动规划与连续 rollout 稳定性评测基准。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.08070) · 访问方式：论文入口；数据访问待核验
  入选依据 C5（英文审查说明）：Historical instrument trajectories and surgical image sequences condition short-horizon motion and future visual-state evaluation. [审查来源](https://arxiv.org/abs/2608.08070) · 2026-10-29

- **TrapVLA Benchmark** · 2026 · 评测集
  可配置视觉语言动作模型失效模式的机器人评测集。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.26578) · [主页](https://john-liua.github.io/TrapVLA/) · 访问方式：提供官方项目和论文入口
  入选依据 C2（英文审查说明）：Trap-LIBERO and Trap-RoboTwin synthesize robot target trajectories with configured failure outcomes; derived from existing simulation suites. [审查来源](https://arxiv.org/abs/2608.26578) · 2026-10-29

- **ViewBench** · 2026 · 评测集
  用于评测相机条件长时视频世界模型视角一致性和闭环回访一致性的数据集与诊断基准。
  `游戏 / 虚拟环境` · `RGB 视频` · `深度` · `相机位姿`
  [主页](https://huggingface.co/datasets/JEdward/viewbench-dataset) · [论文](https://arxiv.org/abs/2602.07854) · [代码](https://github.com/jedward225/viewbench-dataset) · 访问方式：公开训练划分入口；不含保留评测数据
  入选依据 C5（英文审查说明）：Released UE5 videos contain per-frame SE(3) poses and loop trajectories for camera-conditioned world models. The public training split excludes the held-out evaluation set. [审查来源](https://github.com/jedward225/viewbench-dataset) · 2026-10-29

- **VLAC-Cut Benchmark** · 2026 · 评测集
  对机器人回放视频进行非单调进度估计和失败恢复分段的过程级轨迹基准。
  `机器人 / 具身智能` · `RGB 视频` · `语言` · `奖励` · `动作`
  [主页](https://huggingface.co/datasets/InternRobotics/VLAC-Cut-Benchmark) · [代码](https://github.com/InternRobotics/VLAC-Cut) · 访问方式：基准和完整数据已在 Hugging Face 提供
  入选依据 C1（英文审查说明）：Benchmark robot rollout videos carry temporal progress and advancement/regression/recovery segmentation. They are derived rollouts, not a new independent collection. [审查来源](https://github.com/InternRobotics/VLAC-Cut) · 2026-10-29

- **WBench** · 2026 · 评测集
  评测交互式视频世界模型多轮动作响应、视觉质量和长期一致性的综合基准。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `文本`
  [主页](https://huggingface.co/datasets/meituan-longcat/WBench) · [代码](https://github.com/meituan-longcat/WBench) · 访问方式：数据集已在 Hugging Face 提供
  入选依据 C5（英文审查说明）：Official repository defines multi-turn interactive video world-model evaluation across multiple capabilities and control types. [审查来源](https://github.com/meituan-longcat/WBench) · 2026-10-29

- **WMBench (GigaWorld-1)** · 2026 · 评测集
  以真实机器人执行与匹配的模拟回放评测世界模型的动作忠实性、轨迹一致性和闭环策略表现。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `轨迹` · `奖励`
  [主页](https://open-gigaai.github.io/giga-world-1/) · 访问方式：官方评测与数据入口；未实测完整下载
  入选依据 C5（英文审查说明）：Official WMBench protocol pairs teleoperation and real policy executions with simulated rollouts, measuring trajectory fidelity and closed-loop success correlation. Do not count the entire training mixture as released benchmark data. [审查来源](https://open-gigaai.github.io/giga-world-1/) · 2026-10-29

- **WorldMark** · 2026 · 评测集
  覆盖多视角和多领域动作序列的交互式视频世界模型统一评测套件。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `相机位姿`
  [主页](https://alayalab.github.io/WorldMark/) · [论文](https://arxiv.org/abs/2604.21686) · [代码](https://github.com/AlayaLab/WorldMark) · 访问方式：官方提示、动作序列和评测代码可用
  入选依据 C5（英文审查说明）：A common action vocabulary and 500 standardized cases test command following and response dynamics in interactive world models. [审查来源](https://arxiv.org/abs/2604.21686) · 2026-10-29

- **WRBench** · 2026 · 评测集
  诊断相机运动过程中视频世界模型是否保持持久世界状态的相机可控生成基准。
  `游戏 / 虚拟环境` · `RGB 视频` · `相机位姿` · `文本`
  [主页](https://jinplu.github.io/WRBench/) · [论文](https://arxiv.org/abs/2606.20545) · [代码](https://github.com/JinPLu/WRBench) · 访问方式：Hugging Face 提供数据、评测产物和排行榜
  入选依据 C5（英文审查说明）：Camera motion intervenes on observability to test persistent world-state evolution when targets leave and re-enter view. [审查来源](https://arxiv.org/abs/2606.20545) · 2026-10-29

- **EmbodiedBench** · 2025 · 生成环境 / 工具
  跨导航、操作、ALFRED 和 Habitat 环境评测多模态模型作为具身智能体能力的综合基准。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `语言` · `轨迹`
  [主页](https://embodiedbench.github.io/) · [论文](https://arxiv.org/abs/2502.09560) · [代码](https://github.com/EmbodiedBench/EmbodiedBench) · 访问方式：基准数据和生成轨迹已在 Hugging Face 提供
  入选依据 C2（英文审查说明）：Interactive testing tasks execute navigation and manipulation actions in four environments; retain as an environment benchmark, not a fixed dataset. [审查来源](https://arxiv.org/abs/2502.09560) · 2026-10-29

- **ENACT** · 2025 · 评测集
  从第一人称交互评测具身认知的前向与逆向世界建模基准，提供问答、回放和 HDF5 数据。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `RGB 视频` · `动作` · `物体状态` · `轨迹`
  [主页](https://huggingface.co/datasets/MLL-Lab/ENACT) · [代码](https://github.com/mll-lab-nu/ENACT) · 访问方式：ENACT 问答、HDF5、回放和分段数据可用
  入选依据 C5（英文审查说明）：Official protocol explicitly evaluates future-state sequences from actions and inverse action sequences, with download and generation instructions. [审查来源](https://github.com/mll-lab-nu/ENACT) · 2026-10-29

- **EXPRESS-Bench** · 2025 · 评测集
  评测具身问答智能体在连续视觉观察中记忆、定位和推理能力的基准。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB 视频` · `问答` · `语言` · `轨迹`
  [主页](https://hcplab-sysu.github.io/EXPRESS-Bench/) · [代码](https://github.com/HCPLab-SYSU/EXPRESS-Bench) · 访问方式：官方项目页和基准代码可用
  入选依据 C3（英文审查说明）：Official release identifies 777 exploration trajectories, waypoint observations and full episodes; retain trajectory data rather than generic QA alone. [审查来源](https://github.com/HCPLab-SYSU/EXPRESS-Bench) · 2026-10-29

- **ORAD-3D** · 2025 · 评测集
  面向越野自动驾驶的多天气、多地形三维数据集，并包含越野世界模型和轨迹规划基准。
  `自动驾驶` · `RGB 视频` · `三维标注` · `轨迹` · `GPS / 惯性测量单元`
  [主页](https://modelscope.cn/datasets/Georgehhhh/ORAD-3D) · [论文](https://arxiv.org/abs/2510.16500) · [代码](https://github.com/chaytonmin/ORAD-3D-Dataset-For-Off-Road-AD) · 访问方式：已在 ModelScope 和百度云公开发布
  入选依据 C5（英文审查说明）：The paper explicitly defines an off-road world-model evaluation track; retain that track, not static free-space detection as inclusion evidence. [审查来源](https://arxiv.org/abs/2510.16500) · 2026-10-29

- **WoWBench (Released Samples)** · 2025 · 评测集
  初始图像和指令配有参考视频与跟踪关键点，用于物理一致性及未来轨迹评测。
  `机器人 / 具身智能` · `RGB 视频` · `语言` · `轨迹`
  [论文](https://arxiv.org/html/2509.22642v1) · [主页](https://huggingface.co/datasets/WoW-world-model/WoW-1-Benchmark-Samples) · 访问方式：已发布基准样例包；未确认完整评测代码发布
  入选依据 C5（英文审查说明）：WoWBench pairs initial images/instructions with reference videos and tracking keypoints, evaluating future physical consistency and trajectories. The repository releases benchmark samples; a complete evaluation-code release is not confirmed. [审查来源](https://arxiv.org/html/2509.22642v1) · 2026-10-30

- **MMWorld** · 2024 · 评测集
  用于多学科、多维度视频世界理解评测的人工标注与合成数据集，覆盖解释、反事实思考和未来预测等能力。
  `物理 / 科学` · `第一人称 / 人类活动` · `RGB 视频` · `问答` · `文本`
  [主页](https://mmworld-bench.github.io/) · [论文](https://arxiv.org/abs/2406.08407) · [代码](https://github.com/UCSB-AI/MMWorld) · 访问方式：提供官方基准仓库和项目页
  入选依据 C5（英文审查说明）：The source explicitly evaluates world-model reasoning with future-prediction and counterfactual questions; restrict inclusion evidence to those tracks. [审查来源](https://arxiv.org/abs/2406.08407) · 2026-10-29

- **Perception Test** · 2023 · 评测集
  面向多模态模型的真实视频感知、记忆、物理和抽象推理评测集。
  `第一人称 / 人类活动` · `物理 / 科学` · `RGB 视频` · `音频` · `问答`
  [主页](https://github.com/deepmind/perception_test) · [论文](https://arxiv.org/abs/2305.13786) · 访问方式：官方基准
  入选依据 C4（英文审查说明）：The benchmark explicitly includes predictive and counterfactual physical reasoning in designed videos; static tracking/classification tracks alone are not the inclusion basis. [审查来源](https://arxiv.org/abs/2305.13786) · 2026-10-29

- **XLand-MiniGrid** · 2023 · 生成环境 / 工具
  可扩展的程序生成网格世界与任务规则系统，可生成多样的状态、动作和目标条件轨迹。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/corl-team/xland-minigrid) · 访问方式：开源环境与任务生成器
  入选依据 C2（英文审查说明）：Official JAX interface exposes step(action), observation, reward and internal state. [审查来源](https://github.com/corl-team/xland-minigrid) · 2026-10-29

- **TAP-Vid** · 2022 · 评测集
  视频任意点跟踪基准，覆盖真实、运动捕捉和合成视频。
  `第一人称 / 人类活动` · `物理 / 科学` · `RGB 视频` · `轨迹` · `遮挡标注`
  [主页](https://deepmind-tapir.github.io/) · [论文](https://arxiv.org/abs/2211.03726) · [代码](https://github.com/google-deepmind/tapnet) · 访问方式：官方基准代码和数据
  入选依据 C3（英文审查说明）：Video point tracks expose object-surface motion trajectories; use causal train/target splits for prediction, since the native tracking protocol can observe future frames. [审查来源](https://arxiv.org/abs/2211.03726) · 2026-10-29

- **VIMA-Bench** · 2022 · 数据集
  多模态提示驱动的机器人操作任务与程序化评测基准。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `语言` · `物体元数据`
  [主页](https://vimalabs.github.io/) · [论文](https://arxiv.org/abs/2210.03094) · [代码](https://github.com/vimalabs/VIMA) · 访问方式：官方基准代码
  入选依据 C2（英文审查说明）：Procedurally generated manipulation tasks include more than 600K expert trajectories and a defined generalization protocol. [审查来源](https://arxiv.org/abs/2210.03094) · 2026-10-29

- **Crafter** · 2021 · 生成环境 / 工具
  开放世界生存环境。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/danijar/crafter) · [论文](https://arxiv.org/abs/2109.06780) · 访问方式：开源环境
  入选依据 C2（英文审查说明）：Visual survival-game episodes include actions, rewards and persistent crafting/resource state; generator, not a recorded dataset. [审查来源](https://arxiv.org/abs/2109.06780) · 2026-10-29

- **Distracting Control Suite** · 2021 · 生成环境 / 工具
  在连续控制视频中加入背景、颜色和相机变化的视觉动力学鲁棒性基准。
  `机器人 / 具身智能` · `RGB 视频` · `仿真状态` · `动作` · `奖励`
  [代码](https://github.com/google-research/google-research/tree/master/distracting_control) · [论文](https://arxiv.org/abs/2101.02722) · 访问方式：开源基准生成器
  入选依据 C2（英文审查说明）：Extends DM Control interactions with systematic visual distractions; a derived control environment, not an independent recorded collection. [审查来源](https://arxiv.org/abs/2101.02722) · 2026-10-29

- **MiniHack** · 2021 · 生成环境 / 工具
  基于 NetHack 的可组合环境，用于研究规划、记忆和长期状态演化。
  `游戏 / 虚拟环境` · `游戏状态` · `动作` · `文本` · `奖励`
  [代码](https://github.com/facebookresearch/minihack) · [论文](https://arxiv.org/abs/2109.13202) · 访问方式：开源基准
  入选依据 C2（英文审查说明）：NetHack-based customizable interactive environments expose rich action-conditioned game dynamics; derived environment generator. [审查来源](https://arxiv.org/abs/2109.13202) · 2026-10-29

- **ROAD** · 2021 · 派生数据 / 子集
  面向自动驾驶事件理解的道路视频数据集，提供道路智能体、位置、动作和事件级标注，支持从连续驾驶视频中推理交通参与者状态变化。
  `自动驾驶` · `RGB 视频` · `二维框` · `动作标签` · `语义标签` · `轨迹`
  [主页](https://github.com/gurkirt/road-dataset) · 访问方式：官方 GitHub 仓库提供数据资源和代码
  入选依据 C3（英文审查说明）：Official release provides per-frame agent boxes linked through persistent tracks over Oxford RobotCar videos. This is derived annotation data; native detection metrics are not forecasting metrics. [审查来源](https://github.com/gurkirt/road-dataset) · 2026-10-29

- **bsuite** · 2020 · 生成环境 / 工具
  用于分析强化学习核心能力的可复现实验环境和轨迹基准。
  `游戏 / 虚拟环境` · `游戏状态` · `动作` · `奖励` · `轨迹`
  [代码](https://github.com/google-deepmind/bsuite) · [论文](https://arxiv.org/abs/1908.03568) · 访问方式：开源基准
  入选依据 C2（英文审查说明）：Official interface documents observation arrays, discrete action specifications and env.step(action), enabling controlled state-transition collection. [审查来源](https://github.com/google-deepmind/bsuite) · 2026-10-29

- **CLEVRER** · 2020 · 评测集
  面向视频物理与因果推理的合成基准，通过碰撞和运动事件考察描述、解释、预测与反事实推理能力，尤其适合诊断模型是否学习到可组合的物理因果机制。
  `物理 / 科学` · `合成视频` · `物体元数据` · `轨迹` · `逻辑程序` · `问答`
  [主页](https://clevrer.csail.mit.edu/) · [论文](https://arxiv.org/abs/1910.01442) · 访问方式：开放下载
  入选依据 C4（英文审查说明）：Collision videos have explicit future-event prediction and counterfactual questions about physical outcomes. [审查来源](https://arxiv.org/abs/1910.01442) · 2026-10-29

- **Moving Symbols** · 2018 · 生成环境 / 工具
  专为评估视频预测模型表征能力设计的参数化合成数据集，通过可控的符号运动和组合变化检验模型是否学习到有语义的时序表示。
  `物理 / 科学` · `合成视频` · `物体状态` · `轨迹`
  [论文](https://arxiv.org/abs/1802.08936) · [代码](https://github.com/rszeto/moving-symbols) · 访问方式：官方代码和生成工具仓库
  入选依据 C1（英文审查说明）：Parameterized synthetic moving symbols explicitly evaluate video-prediction representations under controlled variation. [审查来源](https://arxiv.org/abs/1802.08936) · 2026-10-29

<!-- DATASET_CATALOG_END -->

## 贡献与修正

所有新增建议、资料修正和数据更新都请通过 GitHub Issue 提出。你可以推荐新数据集、报告元数据或链接错误、提出重新分类的建议，并附上相关官方来源。提交 Issue 时，请尽量提供官方链接、访问和许可信息、一级任务，以及中英文简介。

## 致谢

本项目参考了社区维护的世界模型资源，尤其是 [Awesome World Models](https://github.com/knightnemo/Awesome-World-Models)，并将重点放在数据集的发现、比较和选择上。
