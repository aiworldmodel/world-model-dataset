# WorldModel Data Atlas

[English](./README.md) | [简体中文](./README.zh-CN.md)

_一个以任务为核心、重视证据的世界模型开放数据集目录。_

[![在线目录](https://img.shields.io/badge/浏览-在线目录-2563eb)](https://aiworldmodel.github.io/world-model-dataset/)
[![数据集](https://img.shields.io/badge/数据集-311-16a34a)](#数据集目录)
[![一级任务](https://img.shields.io/badge/一级任务-6-7c3aed)](#分类体系)

[![website](https://github.com/worldopendata/world-model-dataset/blob/main/images/cover.jpg)](https://aiworldmodel.github.io/world-model-dataset)

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

## 目录概览

| 数据集 | 一级任务 | 研究领域 | 数据模态 |
| ---: | ---: | ---: | ---: |
| 311 | 6 | 6 | 45 |

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

[预测与生成式动力学 (34)](#predictive-generative-dynamics) · [动作条件动力学 (41)](#action-conditioned-dynamics) · [决策与智能体轨迹 (78)](#decision-making-agent-trajectories) · [空间与时空世界建模 (60)](#spatial-spatiotemporal-world-modeling) · [物理与因果推理 (28)](#physical-causal-reasoning) · [世界模型评测与诊断 (70)](#world-model-evaluation-diagnostics)

<a id="predictive-generative-dynamics"></a>

### 预测与生成式动力学（34）

- **DenseReward Dataset** · 2026
  为机器人与人类操作视频提供逐帧稠密进度、阶段和失败恢复标注的数据集。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `RGB 视频` · `语言` · `奖励` · `动作标签`
  [主页](https://dense-reward.github.io/) · [代码](https://github.com/dense-reward/DenseReward) · 访问方式：官方项目和已发布基准资源可用

- **Kimodo Motion Data** · 2026
  用于人体与人形机器人动作生成的 700 小时商业友好型光学动作捕捉数据资源。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://research.nvidia.com/labs/sil/projects/kimodo/) · [代码](https://github.com/nv-tlabs/kimodo) · 访问方式：提供官方项目和代码入口

- **Mini Moving Shapes** · 2026
  带离散动作控制和符号状态描述的合成多模态下一状态预测数据集，支持多步想象回放。
  `游戏 / 虚拟环境` · `物理 / 科学` · `RGB 视频` · `文本` · `动作` · `仿真状态`
  [代码](https://github.com/andrew-jeremy/Spectral-World-Models) · 访问方式：数据集随官方仓库提供，并可通过脚本重新生成

- **Procgen Action-Conditioned World Model Dataset** · 2026
  由 Procgen Atari 环境生成的离线帧、动作和终止信号数据，专门用于动作条件下一帧预测与滚动评测。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `游戏状态`
  [代码](https://github.com/Mayavan/world_model) · 访问方式：数据生成代码和回放评测可用

- **Scaling Laws for Motion Corpus** · 2026
  经过视觉、物理质量和安全筛选的大规模人体动作语料，用于研究动作生成的缩放规律。
  `第一人称 / 人类活动` · `轨迹` · `三维状态` · `RGB 视频`
  [主页](https://getcartwheel.com/blog/scaling-laws) · [代码](https://github.com/Cartwhl/scaling-laws-for-motion) · 访问方式：提供官方仓库和技术报告，语料发布条款仍需核验

- **Dopamine-Reward / GRM Dataset** · 2025
  以 BEFORE/AFTER 相对进度监督构建的大规模机器人、人类与仿真操作轨迹数据集。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `多视角 RGB 视频` · `语言` · `奖励` · `轨迹`
  [主页](https://huggingface.co/datasets/tanhuajie2001/Robo-Dopamine-GRM-Dataset) · 访问方式：可通过 Hugging Face 申请访问受限数据集

- **OpenS2V-Nexus** · 2025
  主体到视频生成的五百万规模训练集与细粒度评测集。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2505.20292) · 访问方式：论文入口；发布状态待核验

- **Ego4D** · 2022
  由 Meta AI 联合全球高校采集的大规模第一人称真实生活视频数据集，其短期物体交互预判与长期动作预测任务，为人类行为、手物交互和具身未来预测提供了重要基准。
  `第一人称 / 人类活动` · `RGB 视频` · `音频` · `三维网格` · `视线` · `惯性测量单元`
  [主页](https://ego4d-data.org/) · [论文](https://arxiv.org/abs/2110.07058) · [代码](https://github.com/facebookresearch/Ego4d) · 访问方式：需申请

- **Ego4D Forecasting** · 2022
  第一人称视频短期未来动作预测基准。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签` · `语言`
  [主页](https://ego4d-data.org/) · [论文](https://arxiv.org/abs/2206.01641) · 访问方式：官方挑战赛门户

- **EPIC-KITCHENS-100** · 2022
  大规模第一人称厨房活动数据集，提供连续视频、动作分段、名词与动词标注及多项预测任务，适合研究人类手物交互和下一动作预测。
  `第一人称 / 人类活动` · `RGB 视频` · `音频` · `动作标签` · `语言`
  [主页](https://epic-kitchens.github.io/2021) · [论文](https://arxiv.org/abs/2006.13256) · [代码](https://github.com/epic-kitchens/epic-kitchens-100-annotations) · 访问方式：需申请并同意协议

- **Kubric** · 2022
  用于生成带精确三维、光流、深度和分割标注的视频数据管线。
  `物理 / 科学` · `游戏 / 虚拟环境` · `合成视频` · `深度` · `光流` · `分割标注` · `三维状态`
  [主页](https://kubric.readthedocs.io/) · [论文](https://arxiv.org/abs/2203.03570) · [代码](https://github.com/google-research/kubric) · 访问方式：官方生成工具

- **Atari 100K Dataset** · 2020
  在 Atari 游戏中记录有限交互预算下的帧、动作、奖励和终止信号，用于模型式强化学习。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `奖励` · `游戏状态`
  [代码](https://github.com/mila-iqia/atari-dqn) · 访问方式：官方基准实现和数据加载器可用

- **BDD100K** · 2020
  覆盖多城市、天气与时段的大规模驾驶视频数据集，提供目标检测、车道线、可行驶区域、跟踪等多任务标注，适合研究视觉动态表示和复杂道路分布泛化。
  `自动驾驶` · `RGB 视频` · `二维框` · `分割标注` · `车道线`
  [主页](https://bdd-data.berkeley.edu/) · [论文](https://arxiv.org/abs/1805.04687) · [代码](https://github.com/bdd100k/bdd100k) · 访问方式：需注册

- **Procgen Benchmark** · 2020
  程序生成的视觉强化学习环境集合，提供可控动作、观测和关卡状态轨迹。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/openai/procgen) · [论文](https://arxiv.org/abs/1912.01588) · 访问方式：开源环境

- **Virtual KITTI 2** · 2020
  带有深度、光流、场景流和三维标注的逼真合成驾驶视频数据集。
  `自动驾驶` · `游戏 / 虚拟环境` · `合成视频` · `深度` · `光流` · `三维框` · `分割标注`
  [主页](https://europe.naverlabs.com/proxy-virtual-worlds-vkitti-2/) · [论文](https://arxiv.org/abs/2001.10773) · 访问方式：官方下载

- **AMASS** · 2019
  统一多个动作捕捉数据集的四维人体运动数据库，将不同参数化转换为一致的 SMPL 身体表示，支持长时人体运动预测、生成和交互建模。
  `第一人称 / 人类活动` · `三维状态` · `轨迹` · `智能体位姿`
  [主页](https://amass.is.tue.mpg.de/) · [论文](https://arxiv.org/abs/1904.03278) · 访问方式：官方项目访问；可能需要注册

- **Argoverse 1** · 2019
  面向三维跟踪与运动预测的自动驾驶数据集，结合车辆轨迹、传感器日志和高清地图，为地图条件未来预测建立了重要基准。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `地图` · `轨迹` · `三维框`
  [主页](https://www.argoverse.org/av1.html) · [论文](https://arxiv.org/abs/1911.02620) · [代码](https://github.com/argoverse/argoverse-api) · 访问方式：开放下载

- **D²-City** · 2019
  覆盖多种天气、道路和交通状况的大规模行车视频数据集，提供连续驾驶片段和场景标注，适合研究城市交通时序建模与分布泛化。
  `自动驾驶` · `城市 / 三维场景` · `RGB 视频` · `语义标签` · `轨迹`
  [论文](https://arxiv.org/abs/1904.01975) · 访问方式：论文入口；官方访问方式需核验

- **INTERACTION Dataset** · 2019
  聚焦路口、环岛和汇入等高交互驾驶场景的轨迹数据集，包含多国道路中的车辆与行人运动，适合多智能体预测和交互建模。
  `自动驾驶` · `轨迹` · `地图` · `智能体位姿`
  [论文](https://arxiv.org/abs/1910.03088) · [代码](https://github.com/interaction-dataset/interaction-dataset) · 访问方式：开放下载

- **Kinetics-700** · 2019
  大规模人类动作视频分类数据集，覆盖 700 类日常和体育动作。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签`
  [论文](https://arxiv.org/abs/1907.06987) · 访问方式：官方标注和下载脚本

- **3DPW** · 2018
  真实环境中采集的三维人体姿态与运动视频数据集，包含 SMPL 参数和相机信息。
  `第一人称 / 人类活动` · `RGB 视频` · `智能体位姿` · `相机位姿`
  [主页](https://virtualhumans.mpi-inf.mpg.de/3DPW/) · [论文](https://arxiv.org/abs/1810.04558) · 访问方式：官方下载

- **Charades-Ego** · 2018
  将同一室内活动的第一人称和第三人称视频配对，提供多标签动作和时间区间标注，用于跨视角行为理解与未来状态表示。
  `第一人称 / 人类活动` · `多视角 RGB 视频` · `动作标签`
  [主页](https://prior.allenai.org/projects/charades-ego) · [论文](https://arxiv.org/abs/1804.09626) · 访问方式：开放获取，具体取决于协议要求

- **EPIC-KITCHENS-55** · 2018
  EPIC-KITCHENS 的首个大规模版本，记录参与者在自家厨房中的连续第一人称活动，包含动作分段、动词、名词和叙述标注。
  `第一人称 / 人类活动` · `RGB 视频` · `音频` · `动作标签` · `语言`
  [主页](https://epic-kitchens.github.io/2018) · [论文](https://arxiv.org/abs/1804.02748) · [代码](https://github.com/epic-kitchens/epic-kitchens-55-annotations) · 访问方式：需申请并同意协议

- **Kinetics-600** · 2018
  覆盖 600 类人类动作的大规模视频数据集。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签`
  [论文](https://arxiv.org/abs/1808.01316) · 访问方式：官方标注

- **Something-Something V2** · 2018
  由人类执行日常物体交互构成的大规模短视频数据集，类别强调推动、放置、遮挡等细粒度时间变化，是学习动作结果与时序因果线索的常用资源。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签` · `文本模板`
  [论文](https://arxiv.org/abs/1706.04261) · 访问方式：需注册

- **World Models CarRacing Rollouts** · 2018
  World Models 项目中的 CarRacing 视觉观测、动作和潜变量回放数据。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `奖励` · `仿真状态`
  [代码](https://github.com/ctallec/world-models) · 访问方式：官方仓库提供数据生成和训练流程

- **YouTube-VOS** · 2018
  大规模视频目标分割数据集，提供跨帧目标掩码和长时跟踪场景。
  `第一人称 / 人类活动` · `RGB 视频` · `分割标注` · `物体元数据`
  [主页](https://youtube-vos.org/) · [论文](https://arxiv.org/abs/1809.03327) · 访问方式：官方挑战赛网站

- **DAVIS** · 2016
  高质量视频目标分割与跟踪数据集，提供密集逐帧像素标注。
  `第一人称 / 人类活动` · `RGB 视频` · `分割标注`
  [主页](https://davischallenge.org/) · [论文](https://arxiv.org/abs/1604.00675) · 访问方式：官方数据网站

- **ViZDoom** · 2016
  基于 Doom 的第一人称视觉强化学习环境，提供可控动作和帧序列。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [主页](https://vizdoom.cs.put.poznan.pl/) · [代码](https://github.com/Farama-Foundation/ViZDoom) · [论文](https://arxiv.org/abs/1605.02097) · 访问方式：开源引擎与场景

- **Moving MNIST** · 2015
  将 MNIST 数字在画布中按速度移动并反弹生成的经典视频预测基准，可按需生成确定或随机轨迹，长期用于验证时序表征、外推和不确定未来建模。
  `物理 / 科学` · `合成视频` · `物体状态` · `轨迹`
  [主页](https://www.tensorflow.org/datasets/catalog/moving_mnist) · [论文](https://arxiv.org/abs/1502.04681) · [代码](https://github.com/tensorflow/datasets) · 访问方式：开放生成工具

- **Human3.6M** · 2014
  面向人体姿态与运动建模的大规模多视角数据集，提供同步视频、三维关节、相机参数和动作类别，是人类未来姿态预测的重要历史基准。
  `第一人称 / 人类活动` · `多视角 RGB 视频` · `三维状态` · `动作标签` · `相机位姿`
  [主页](http://vision.imar.ro/human3.6m/description.php) · [论文](https://ieeexplore.ieee.org/document/6682899) · 访问方式：需注册并同意协议

- **UCF101** · 2012
  包含 101 类人类动作的公开视频数据集，提供动作类别和时序片段。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签`
  [主页](https://www.crcv.ucf.edu/data/UCF101.php) · [论文](https://arxiv.org/abs/1212.0402) · 访问方式：官方数据页

- **HMDB51** · 2011
  从电影和公开视频整理的 51 类人类动作视频数据集。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签`
  [主页](https://serre-lab.clps.brown.edu/resource/hmdb-a-large-human-motion-database/) · 访问方式：官方项目页

- **KTH Human Actions** · 2004
  最早被广泛用于视频预测的真实人物动作数据之一，包含固定背景及尺度变化下的六类连续动作，为长期预测和人体运动动态提供轻量基准。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签`
  [主页](https://www.csc.kth.se/cvap/actions/) · 访问方式：开放下载

<a id="action-conditioned-dynamics"></a>

### 动作条件动力学（41）

- **AgiBot World 2026** · 2026
  真实场景多视角机器人操作数据，带步骤、成功帧、错误原因和失败恢复标注。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `机器人状态` · `动作` · `语言` · `奖励`
  [主页](https://agibot-world.com) · [代码](https://huggingface.co/datasets/agibot-world/AgiBotWorld2026) · 访问方式：数据集已在 Hugging Face 和官方网站提供

- **HandEdit** · 2026
  将第一人称人手图像编辑为多种灵巧机器人本体的大规模数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `三维元数据` · `文本`
  [论文](https://arxiv.org/abs/2608.12122) · 访问方式：论文入口；发布状态待核验

- **kine2go** · 2026
  将动物与四足动作捕捉重定向为 Unitree Go2 可执行参考轨迹并生成策略回放的数据集。
  `机器人 / 具身智能` · `轨迹` · `机器人状态` · `动作` · `RGB 视频`
  [主页](https://nomagiclab.github.io/kine2go-pipeline/) · [论文](https://arxiv.org/abs/2606.14433) · [代码](https://github.com/nomagiclab/kine2go-pipeline) · 访问方式：数据产物已在 Hugging Face 提供

- **KungFuAthleteBot Motion Dataset** · 2026
  由武术训练视频提取并重定向到人形机器人的高动态动作数据集，覆盖地面和跳跃动作。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `RGB 视频` · `轨迹` · `机器人状态`
  [主页](https://kungfuathletebot.github.io/) · [论文](https://arxiv.org/abs/2602.13656) · [代码](https://github.com/NPCLEI/KungFuAthleteBot) · 访问方式：可通过 Hugging Face 和官方下载入口访问

- **Open Locomotion Skills Dataset** · 2026
  统一不同形态腿式机器人的运动轨迹、地形元数据和仿真到现实工具的数据集。
  `机器人 / 具身智能` · `轨迹` · `机器人状态` · `动作` · `场景元数据`
  [主页](https://kanishqgandharv219.github.io/open-locomotion-dataset/) · [代码](https://github.com/KanishqGandharv219/open-locomotion-dataset) · 访问方式：统一模式、导入器、校验和基准工具可用

- **REBOOT26 Recovery Trajectories** · 2026
  双臂 WidowX 机器人恢复轨迹集合，覆盖移除、安装和故障恢复任务。
  `机器人 / 具身智能` · `RGB 视频` · `机器人状态` · `动作` · `轨迹`
  [主页](https://huggingface.co/REBOOT26) · 访问方式：恢复数据集已通过 Hugging Face 组织提供

- **Robo-ValueRL** · 2026
  面向真实机器人操作的离线到在线强化学习数据集，包含历史条件价值、逐帧进度和动作质量标签。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `奖励` · `轨迹`
  [主页](https://huggingface.co/datasets/X-Humanoid/Robo-ValueRL) · [代码](https://github.com/Open-X-Humanoid/Robo-ValueRL) · 访问方式：LeRobot 数据集已在 Hugging Face 公开

- **ViTacWorld** · 2026
  面向接触丰富操作的视觉、触觉和动作轨迹数据资源。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `动作` · `机器人状态`
  [论文](https://arxiv.org/abs/2607.22530) · [主页](https://vitacworld.github.io/) · 访问方式：论文入口；发布状态待核验

- **VLA-REPLICA** · 2026
  低成本 SO-101 机器人视觉语言动作复现实验数据集，包含示范、动作状态和场景参考。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [代码](https://github.com/IRVLUTD/VLAReplica) · [主页](https://huggingface.co/datasets/HenryZhang/VLAReplica_SFT_data) · 访问方式：SFT 数据已在 Hugging Face 提供，并有官方代码

- **WildWorld** · 2026
  面向可交互生成式角色扮演世界模型的大规模动作条件游戏数据集，带显式角色状态、相机位姿和深度标注。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `深度` · `相机位姿` · `游戏状态`
  [主页](https://alaya-studio.github.io/wildworld-project/) · [论文](https://arxiv.org/abs/2603.23497) · [代码](https://github.com/AlayaLab/WildWorld) · 访问方式：第一部分已在 Hugging Face 提供，后续部分计划发布

- **BlueROV2 Dynamics Dataset** · 2025
  包含水下机器人动力学数据、训练脚本和学习与物理模型的资源。
  `机器人 / 具身智能` · `物理 / 科学` · `动作` · `机器人状态` · `轨迹`
  [代码](https://github.com/ViktorNfa/bluerov2_dynamics) · 访问方式：官方数据和训练代码可用

- **Open-H-Embodiment** · 2025
  面向医疗机器人通用视觉语言动作模型的社区驱动开放数据计划。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [代码](https://github.com/open-h/open-h-embodiment) · 访问方式：官方项目仓库和贡献入口可用

- **PHUMA** · 2025
  通过物理约束筛选和重定向构建的高质量人形机器人运动数据集。
  `机器人 / 具身智能` · `轨迹` · `机器人状态` · `三维状态`
  [主页](https://davian-robotics.github.io/PHUMA/) · [论文](https://arxiv.org/abs/2510.26236) · [代码](https://github.com/DAVIAN-Robotics/PHUMA) · 访问方式：可通过官方下载脚本和 Hugging Face 获取预构建数据

- **RoboVerse** · 2025
  统一机器人学习仿真平台、任务数据和评测协议的可扩展具身资源。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `机器人状态` · `物体状态` · `轨迹`
  [主页](https://roboverse.wiki/) · [论文](https://arxiv.org/abs/2504.18904) · [代码](https://github.com/RoboVerseOrg/RoboVerse) · 访问方式：平台、任务和基准代码已公开

- **RoVI-Book** · 2025
  聚焦机器人操作和视觉理解的机器人视觉指令数据集。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `语言` · `机器人状态`
  [主页](https://robotic-visual-instruction.github.io/) · [代码](https://github.com/robotic-visual-instruction/RoVI-Book) · 访问方式：官方项目页和仓库可用

- **DrivingDojo** · 2024
  专为交互式驾驶世界模型构建的视频数据集，覆盖完整驾驶操作、多智能体交互和开放世界驾驶知识，并提供动作指令跟随评测。
  `自动驾驶` · `RGB 视频` · `动作` · `语言` · `场景元数据`
  [论文](https://arxiv.org/abs/2410.10738) · [代码](https://github.com/Robertwyq/Drivingdojo) · 访问方式：提供论文和官方项目仓库；数据访问条款待核验

- **Isaac Lab** · 2024
  面向机器人学习的 GPU 物理仿真框架，可生成大规模状态—动作轨迹。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `仿真状态` · `动作` · `奖励`
  [代码](https://github.com/isaac-sim/IsaacLab) · [论文](https://arxiv.org/abs/2309.07137) · 访问方式：开源仓库

- **RetroAct** · 2024
  为生成式交互环境和动作条件世界模型标注的复古游戏环境数据集，含行为、视角、运动轴和控制信息。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `仿真状态` · `相机位姿`
  [主页](https://nsavov.github.io/GenieRedux/) · [代码](https://github.com/insait-institute/GenieRedux) · 访问方式：官方仓库提供环境标注、数据生成、训练和评测代码

- **RoboCasa** · 2024
  面向家庭厨房机器人学习的大规模仿真环境和任务套件，提供多样化场景、物体、语言任务及可生成的视觉动作轨迹。
  `机器人 / 具身智能` · `RGB 视频` · `深度` · `动作` · `机器人状态` · `语言`
  [主页](https://robocasa.ai/) · [论文](https://arxiv.org/abs/2406.02523) · [代码](https://github.com/robocasa/robocasa) · 访问方式：开放生成工具

- **ARMBench** · 2023
  在亚马逊仓库机器人拣放流程中采集的大规模物体中心基准，覆盖操作前、转运中和放置后的图像、视频与元数据，并提供分割、识别和缺陷检测标注。
  `机器人 / 具身智能` · `RGB 视频` · `分割标注` · `物体元数据` · `动作标签`
  [主页](http://armbench.com) · [论文](https://arxiv.org/abs/2303.16382) · [代码](https://github.com/amzn/armbench) · 访问方式：提供官方数据网站和加载代码

- **RH20T** · 2023
  真实机器人双臂操作数据集，包含多视角 RGB-D、力觉和机器人状态。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态`
  [主页](https://rh20t.github.io/) · [论文](https://arxiv.org/abs/2307.00770) · [代码](https://github.com/rh20t/rh20t_api) · 访问方式：官方项目和下载入口

- **TriFinger RL Dataset** · 2023
  TriFinger 真实机器人 Push/Lift 离线强化学习数据，包含多质量策略的状态、动作和奖励。
  `机器人 / 具身智能` · `机器人状态` · `动作` · `奖励` · `RGB 视频` · `轨迹`
  [主页](https://doi.org/10.17617/3.DXZ7TL) · [代码](https://webdav.tuebingen.mpg.de/trifinger-rl/docs/datasets/index.html) · 访问方式：官方 DOI 和数据文档可用

- **H2O** · 2022
  第一人称手-物交互数据集，提供双手和物体的三维姿态。
  `第一人称 / 人类活动` · `RGB 视频` · `深度` · `Hand Pose` · `物体状态`
  [论文](https://arxiv.org/abs/2206.13809) · 访问方式：官方项目页

- **HOI4D** · 2022
  四维人-物交互视频数据集，包含手部、物体和相机运动标注。
  `第一人称 / 人类活动` · `机器人 / 具身智能` · `RGB-D` · `动作标签` · `物体状态` · `智能体位姿`
  [主页](https://hoi4d.github.io/) · [论文](https://arxiv.org/abs/2203.01577) · 访问方式：官方项目和数据

- **ManiSkill** · 2022
  面向机器人操作学习的高效物理仿真基准和可生成轨迹环境。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB-D` · `动作` · `仿真状态` · `物体状态`
  [主页](https://maniskill.ai/) · [论文](https://arxiv.org/abs/2202.04057) · [代码](https://github.com/haosulab/ManiSkill) · 访问方式：官方仿真器和基准

- **MineDojo** · 2022
  围绕 Minecraft 开放世界构建的大规模多模态知识与交互平台，结合玩家视频、文本知识、社区讨论及可实时交互的仿真环境，适合长期探索和开放域智能体研究。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `音频` · `文本` · `游戏状态`
  [主页](https://minedojo.org/) · [论文](https://arxiv.org/abs/2206.01356) · [代码](https://github.com/MineDojo/MineDojo) · 访问方式：开放获取，具体取决于数据来源

- **MyoSuite** · 2022
  肌肉骨骼机器人 MuJoCo 环境，提供高维身体状态、动作和运动轨迹。
  `机器人 / 具身智能` · `物理 / 科学` · `仿真状态` · `动作` · `奖励` · `轨迹`
  [代码](https://github.com/facebookresearch/myosuite) · [论文](https://arxiv.org/abs/2205.13608) · 访问方式：开源基准

- **RT-1 Data** · 2022
  真实机器人多任务语言条件操作轨迹数据，用于训练 Robotics Transformer 策略。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `语言` · `机器人状态`
  [论文](https://arxiv.org/abs/2212.06817) · [代码](https://github.com/google-research/robotics_transformer) · 访问方式：论文和项目入口；访问可能受限

- **DexYCB** · 2021
  手部与 YCB 物体交互的 RGB-D 视频数据集，包含三维手部姿态和物体姿态。
  `第一人称 / 人类活动` · `机器人 / 具身智能` · `RGB-D` · `三维网格` · `智能体位姿` · `物体状态`
  [主页](https://dex-ycb.github.io/) · [论文](https://arxiv.org/abs/2104.04631) · [代码](https://github.com/NVlabs/dex-ycb-toolkit) · 访问方式：官方下载

- **Isaac Gym** · 2021
  GPU 加速物理仿真环境，可生成机器人状态、动作和视觉轨迹。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `仿真状态` · `动作` · `奖励`
  [代码](https://github.com/isaac-sim/IsaacGymEnvs) · [论文](https://arxiv.org/abs/2108.10470) · 访问方式：官方仓库和发行版

- **D4RL** · 2020
  用于离线强化学习的标准化环境数据集，包含状态、动作、奖励和终止信号。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `仿真状态` · `动作` · `奖励` · `轨迹`
  [代码](https://github.com/Farama-Foundation/D4RL) · 访问方式：官方仓库和环境加载器可用

- **InterHand2.6M** · 2020
  大规模双手三维姿态数据集，包含真实和合成的手部交互序列。
  `第一人称 / 人类活动` · `机器人 / 具身智能` · `RGB 视频` · `智能体位姿` · `三维网格`
  [主页](https://mks.ue.tsinghua.edu.cn/InterHand2.6M/) · [论文](https://arxiv.org/abs/2008.09309) · 访问方式：官方项目页

- **RL Unplugged** · 2020
  覆盖 Atari、DeepMind Control 和机器人等环境的离线强化学习轨迹集合。
  `游戏 / 虚拟环境` · `机器人 / 具身智能` · `仿真状态` · `动作` · `奖励` · `轨迹`
  [代码](https://github.com/deepmind/deepmind-research/tree/master/rl_unplugged) · 访问方式：可通过 TensorFlow Datasets 和官方代码访问

- **RoboNet** · 2020
  汇集多所实验室机器人交互视频的跨平台数据集，通过不同机械臂、视角、物体和实验设置提供视觉动力学训练信号，重点考察视频预测与控制的跨机器人泛化。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.robonet.wiki/) · [论文](https://arxiv.org/abs/1910.11215) · [代码](https://github.com/SudeepDasari/RoboNet) · 访问方式：开放下载

- **robosuite Benchmark** · 2020
  模块化机器人操作仿真框架，提供可生成的多任务轨迹、视觉观测和物理状态。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB-D` · `动作` · `仿真状态` · `机器人状态`
  [主页](https://robosuite.ai/) · [论文](https://arxiv.org/abs/2009.08993) · [代码](https://github.com/ARISE-Initiative/robosuite) · 访问方式：官方仿真器和数据

- **OmniPush** · 2019
  真实机器人推动动力学数据集，记录不同物体、桌面环境和推动动作下的 RGB-D 视频及状态变化，用于学习可迁移的视觉动力学。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `物体状态` · `轨迹`
  [论文](https://arxiv.org/abs/1910.00618) · [代码](https://github.com/MIT-Omnipush/video-prediction) · 访问方式：开放项目访问

- **Adroit Demonstrations** · 2018
  灵巧手操作示范轨迹。
  `机器人 / 具身智能` · `仿真状态` · `动作` · `奖励` · `轨迹`
  [代码](https://github.com/Farama-Foundation/Gymnasium-Robotics) · 访问方式：开源环境和离线数据

- **DeepMind Control Suite** · 2018
  连续控制物理环境集合，可生成带状态、动作、奖励和视觉观测的世界模型轨迹。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `仿真状态` · `动作` · `奖励`
  [代码](https://github.com/google-deepmind/dm_control) · 访问方式：开源环境，可复现生成轨迹

- **AI2-THOR** · 2017
  可交互室内场景仿真环境，可生成导航、操作和状态变化轨迹。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB-D` · `动作` · `仿真状态` · `物体状态`
  [主页](https://ai2thor.allenai.org/) · [论文](https://arxiv.org/abs/1712.05474) · [代码](https://github.com/allenai/ai2thor) · 访问方式：官方仿真器

- **CARLA** · 2017
  开放自动驾驶仿真器，可生成多传感器驾驶、交通参与者和控制轨迹。
  `自动驾驶` · `游戏 / 虚拟环境` · `RGB 视频` · `激光雷达` · `毫米波雷达` · `动作` · `仿真状态`
  [主页](https://carla.org/) · [论文](https://arxiv.org/abs/1711.03938) · [代码](https://github.com/carla-simulator/carla) · 访问方式：官方仿真器

- **BAIR Robot Pushing** · 2016
  经典机器人推物视频数据集，记录机械臂在桌面环境中执行随机推动动作的连续图像与控制信号，长期作为动作条件视频预测和随机未来建模的基础基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作`
  [主页](https://www.tensorflow.org/datasets/catalog/bair_robot_pushing_small) · [论文](https://arxiv.org/abs/1605.07157) · [代码](https://github.com/tensorflow/datasets) · 访问方式：开放下载

<a id="decision-making-agent-trajectories"></a>

### 决策与智能体轨迹（78）

- **AbstainEQA** · 2026
  评测具身问答智能体在证据不足时能否正确拒答的轨迹与问答基准。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB 视频` · `问答` · `轨迹` · `相机位姿`
  [代码](https://github.com/gibrantaowu/AbstainEQA) · 访问方式：问答文件和帧提取工具可用，源素材需分别申请访问

- **ACE-Data-0** · 2026
  同步多视角、全身、手部、物体、音频和触觉的家庭交互数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `多视角 RGB 视频` · `音频` · `动作` · `物体状态`
  [论文](https://arxiv.org/abs/2607.28625) · 访问方式：论文入口；发布状态待核验

- **AXIS** · 2026
  社区驱动的浏览器遥操作机器人数据引擎与基准。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `动作` · `机器人状态`
  [论文](https://arxiv.org/abs/2607.21588) · 访问方式：论文入口；发布状态待核验

- **CARLA-Air** · 2026
  在同一 CARLA 世界中统一城市驾驶与多旋翼飞行的空地具身仿真基础设施。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [论文](https://arxiv.org/abs/2603.28032) · [代码](https://github.com/louiszengCN/CarlaAir) · 访问方式：提供官方项目、代码和数据入口：https://huggingface.co/tianlezeng/CarlaAIr-v0.1.7

- **DreamDojo Data** · 2026
  用于通用机器人世界模型预训练的 4.4 万小时第一人称人类视频及机器人后训练数据。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://dreamdojo-world.github.io/) · [论文](https://arxiv.org/abs/2602.06949) · [代码](https://github.com/NVIDIA/DreamDojo) · 访问方式：提供官方项目、代码和数据入口：https://huggingface.co/datasets/nvidia/PhysicalAI-Robotics-GR00T-Teleop-GR1

- **EBiM Benchmark** · 2026
  面向移动双臂操作的具身基准环境，包含任务场景、仿真配置和轨迹采集入口。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `物体状态` · `轨迹`
  [主页](https://ebim-benchmark.github.io/) · [代码](https://github.com/EBiM-Benchmark/benchmark) · 访问方式：官方仓库提供任务环境和入门工具

- **Evo-RL Real-World Dataset** · 2026
  面向 SO-101 和 AgileX PiPER 的开放真实机器人离线强化学习数据集。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://huggingface.co/datasets/MINT-SJTU/RW-RL-Dataset) · [代码](https://github.com/MINT-SJTU/Evo-RL) · 访问方式：提供官方代码和数据入口：https://huggingface.co/datasets/MINT-SJTU/RW-RL-Dataset

- **HiPHI** · 2026
  高精度全身人体运动与物体交互数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `智能体位姿` · `三维网格` · `物体状态`
  [论文](https://arxiv.org/abs/2608.16222) · 访问方式：论文入口；发布状态待核验

- **HUI360** · 2026
  移动机器人采集的 360 度第一人称人机交互预判数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `智能体位姿` · `分割标注`
  [论文](https://arxiv.org/abs/2608.11051) · [主页](https://hucebot.github.io/hui360) · 访问方式：论文入口；发布状态待核验

- **ManipArena Dataset** · 2026
  覆盖推理导向真机操作任务的多视角专家轨迹数据集和评测基准。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://huggingface.co/datasets/ManipArena/maniparena-dataset) · 访问方式：可通过 Hugging Face 受限访问获取数据

- **OmniBehavior** · 2026
  用于长时、跨场景人类行为模拟的真实用户交互轨迹数据集，提供中英文版本。
  `第一人称 / 人类活动` · `动作` · `轨迹` · `文本`
  [主页](https://huggingface.co/datasets/jiawei-ucas/OmniBehavior) · [论文](https://arxiv.org/abs/2604.08362) · [代码](https://github.com/icip-cas/OmniBehavior) · 访问方式：完整中英文数据集已在 Hugging Face 提供

- **RescueBench** · 2026
  基于 Unreal Engine 的开放世界搜救具身智能基准，提供多阶段任务、渐进难度和专家轨迹采集工具。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `语言` · `奖励` · `轨迹`
  [主页](https://github.com/UnrealZoo/RescueBench) · [代码](https://github.com/UnrealZoo/RescueBench) · 访问方式：基准环境和轨迹采集工具可用，数据发布仍在计划中

- **TableVerse-100K** · 2026
  从真实图像重建的十万套可交互桌面环境及操作轨迹。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB-D` · `动作` · `仿真状态`
  [论文](https://arxiv.org/abs/2607.21017) · 访问方式：论文入口；发布状态待核验

- **UniETP** · 2026
  统一 AI2-THOR、VirtualHome、Habitat 和 BEHAVIOR 的具身任务规划与自动任务生成基准。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `场景元数据` · `语言` · `轨迹`
  [代码](https://github.com/woyut/UniETP) · 访问方式：统一环境和任务生成代码可用

- **AirCopBench** · 2025
  面向多无人机协同具身感知与推理的空中机器人基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `轨迹` · `语言`
  [代码](https://github.com/zhajirong/AirCopBench) · 访问方式：官方评测代码和项目资源可用

- **EMMOE** · 2025
  面向开放环境移动操作机器人的综合具身评测基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `物体状态`
  [代码](https://github.com/silence143/EMMOE) · 访问方式：官方基准代码可用

- **FLAME** · 2025
  面向联邦机器人操作学习的大规模仿真演示基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2503.01729) · 访问方式：论文入口；发布状态待核验

- **HINT-Bench** · 2025
  在共享环境中利用激光雷达、骨架和机器人状态轨迹评测早期人类意图预测的基准。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `激光雷达` · `智能体位姿` · `机器人状态` · `轨迹`
  [代码](https://github.com/valerio-bo/HINT-Bench) · 访问方式：基准数据和仿真生成器已公开

- **LabUtopia** · 2025
  科学实验室多物理仿真、程序化场景与分层具身任务基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2505.22634) · 访问方式：论文入口；发布状态待核验

- **MIKASA** · 2025
  机器人记忆强化学习任务基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2502.10550) · 访问方式：论文入口；发布状态待核验

- **MRCD** · 2025
  面向户外移动机器人 ROS2 感知与导航的公开数据集。
  `机器人 / 具身智能` · `RGB 视频` · `激光雷达` · `惯性测量单元 / GPS` · `轨迹`
  [主页](https://sm20598.github.io/MRCD/) · [代码](https://github.com/SM20598/MRCD) · 访问方式：项目页和仓库可用

- **MuBlE / SHOP-VRB2** · 2025
  结合 MuJoCo 与 Blender 的长时物理操作环境和推理基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2503.02834) · 访问方式：论文入口；发布状态待核验

- **NVIDIA Physical AI Autonomous Vehicles Dataset** · 2025
  面向端到端自动驾驶和物理智能研究的大规模、多地区、多传感器驾驶数据集。
  `自动驾驶` · `多视角 RGB 视频` · `激光雷达` · `毫米波雷达` · `GPS / 惯性测量单元` · `轨迹`
  [主页](https://huggingface.co/datasets/nvidia/PhysicalAI-Autonomous-Vehicles) · [代码](https://github.com/NVlabs/physical_ai_av) · 访问方式：接受数据条款后可通过 Hugging Face 访问

- **OceanGym** · 2025
  用于水下具身智能体感知、连续控制导航和决策的高保真海洋仿真环境与数据集。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `轨迹` · `场景元数据`
  [主页](https://oceangpt.github.io/OceanGym/) · [论文](https://arxiv.org/abs/2509.26536) · [代码](https://github.com/OceanGPT/OceanGym) · 访问方式：环境数据和轨迹已在 Hugging Face 提供

- **PartInstruct** · 2025
  具有部件级指令、三维标注和专家演示的精细机器人操作基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2505.21652) · 访问方式：论文入口；发布状态待核验

- **RoboGround Data** · 2025
  带对象和指令多样性的仿真机器人操作数据生成资源。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2504.21530) · 访问方式：论文入口；发布状态待核验

- **SHREC** · 2025
  用于社会性人机对话智能体研究的多模态人机交互视频数据集。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `RGB 视频` · `音频` · `语言` · `轨迹`
  [代码](https://github.com/mitmedialab/SHREC) · 访问方式：官方项目仓库和数据文档可用

- **TPT-Bench** · 2025
  用于长期机器人第一人称目标人物跟踪的规模化数据集与基准。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `RGB 视频` · `轨迹` · `三维标注`
  [代码](https://github.com/MedlarTea/TPT-BENCH-TOOLS) · 访问方式：官方基准工具和项目仓库可用

- **BRMData** · 2024
  面向家庭任务的双臂移动机器人操作数据集，覆盖单臂与双臂、桌面与移动操作、人机互动以及刚性和柔性物体，并提供多视角和深度观测。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `深度` · `动作` · `机器人状态`
  [主页](https://embodiedrobot.github.io/) · [论文](https://arxiv.org/abs/2405.18860) · 访问方式：提供官方项目页和论文；访问条件待核验

- **DROID** · 2024
  大规模真实机器人操作数据集，覆盖多地点、多操作者和多种日常场景，提供同步视觉、动作、语言与机器人状态，适合研究真实世界中的通用操作策略和动作条件世界模型。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://droid-dataset.github.io/) · [论文](https://arxiv.org/abs/2403.12945) · [代码](https://github.com/droid-dataset/droid) · 访问方式：开放下载

- **PARTNR** · 2024
  面向家庭场景人机协作规划与推理的大规模具身基准，通过仿真闭环生成并验证具有空间、时间和异构智能体能力约束的自然语言任务。
  `机器人 / 具身智能` · `语言` · `动作` · `仿真状态` · `物体状态` · `轨迹`
  [论文](https://arxiv.org/abs/2411.00081) · [代码](https://github.com/facebookresearch/partnr-planner) · 访问方式：提供官方基准规划器和任务资源

- **RoboMIND** · 2024
  统一采集平台上的大规模多本体机器人操作数据集，包含成功与失败遥操作轨迹、多视角观测、机器人状态、语言任务描述和对应数字孪生环境。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `动作` · `机器人状态` · `语言` · `深度`
  [主页](https://x-humanoid-robomind.github.io/) · [论文](https://arxiv.org/abs/2412.13877) · [代码](https://github.com/x-humanoid-robomind/x-humanoid-robomind.github.io) · 访问方式：官方项目提供数据和工具入口

- **BridgeData V2** · 2023
  大规模多任务真实机器人操作数据集，覆盖多种厨房和桌面场景。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://rail-berkeley.github.io/bridgedata/) · [论文](https://arxiv.org/abs/2305.08990) · 访问方式：官方项目和下载

- **FurnitureBench** · 2023
  真实与仿真的长时家具装配机器人基准和轨迹数据。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态` · `物体状态`
  [主页](https://clvrai.github.io/furniture-bench/) · [论文](https://arxiv.org/abs/2305.12821) · [代码](https://github.com/clvrai/furniture-bench) · 访问方式：官方基准和代码

- **LIBERO** · 2023
  面向终身学习和语言条件机器人操作的基准，包含多任务示范轨迹、视觉观测、动作和任务描述，用于研究跨任务知识迁移。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://libero-project.github.io/) · [论文](https://arxiv.org/abs/2306.14877) · [代码](https://github.com/Lifelong-Robot-Learning/LIBERO) · 访问方式：开放生成工具

- **MimicGen** · 2023
  通过在仿真环境中重放和组合少量人类示范，自动生成多样化机器人操作轨迹的数据生成框架，支持模仿学习和世界模型训练。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://mimicgen.github.io/) · [论文](https://arxiv.org/abs/2310.17596) · [代码](https://github.com/NVlabs/mimicgen) · 访问方式：开放生成工具

- **Mini-BEHAVIOR** · 2023
  用于具身智能长时决策的程序化三维网格世界基准，实现日常家务任务、对象状态和交互动作，并支持生成大量任务变体及收集人类演示。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `仿真状态` · `物体状态` · `轨迹`
  [论文](https://arxiv.org/abs/2310.01824) · [代码](https://github.com/StanfordVL/mini_behavior) · 访问方式：提供官方环境代码和演示收集工具

- **Open X-Embodiment** · 2023
  由 Google DeepMind 与全球 30 余家研究机构联合构建的跨机器人真实交互数据集合，统一汇集多种机器人形态、任务与操作轨迹，是研究跨实体泛化和通用具身世界模型的重要基础。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://robotics-transformer-x.github.io/) · [论文](https://arxiv.org/abs/2310.08864) · [代码](https://github.com/google-deepmind/open_x_embodiment) · 访问方式：开放获取，具体取决于组成数据集

- **RoboHive** · 2023
  统一真实与仿真机器人学习任务、轨迹和硬件接口的基准框架。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态` · `仿真状态`
  [主页](https://sites.google.com/view/robohive) · [论文](https://arxiv.org/abs/2310.06828) · [代码](https://github.com/vikashplus/robohive) · 访问方式：官方框架

- **UMI** · 2023
  通用移动操作接口与数据集，记录手持相机、末端动作和跨机器人操作轨迹。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://umi-gripper.github.io/) · [论文](https://arxiv.org/abs/2402.10329) · 访问方式：开源项目和论文

- **WebArena** · 2023
  可复现的真实网站交互环境，提供浏览器状态、动作和任务轨迹。
  `游戏 / 虚拟环境` · `RGB 视频` · `文本` · `动作` · `奖励`
  [主页](https://webarena.dev/) · [代码](https://github.com/web-arena-x/webarena) · [论文](https://arxiv.org/abs/2307.13854) · 访问方式：开源基准与部署工具

- **Assembly101** · 2022
  多视角第一人称与第三人称装配动作视频数据集。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签` · `Hand Pose`
  [主页](https://assembly101.github.io/) · [论文](https://arxiv.org/abs/2206.01063) · 访问方式：官方基准

- **BEHAVIOR-1K** · 2022
  包含一千项日常家庭活动的具身智能任务、场景和仿真基准。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `仿真状态` · `语言`
  [主页](https://behavior.stanford.edu/) · [论文](https://arxiv.org/abs/2403.09227) · [代码](https://github.com/StanfordVL/BEHAVIOR-1K) · 访问方式：官方基准

- **BridgeData** · 2022
  跨场景机器人操作演示数据集，记录多样桌面任务的视觉、动作和状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://rail-berkeley.github.io/bridgedata/) · [论文](https://arxiv.org/abs/2203.16897) · 访问方式：论文和项目入口

- **CALVIN** · 2022
  在可控桌面环境中构建的长时程语言条件机器人基准，提供连续交互轨迹和组合任务序列，重点评估智能体能否依据语言完成多个连续操作。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态` · `语言`
  [主页](https://calvin.cs.uni-freiburg.de/) · [论文](https://arxiv.org/abs/2112.03227) · [代码](https://github.com/mees/calvin) · 访问方式：开放下载

- **Ego4D v2** · 2022
  大规模第一人称生活视频数据集，提供手部、物体、动作和自然语言时间标注。
  `第一人称 / 人类活动` · `RGB 视频` · `语言` · `动作标签` · `物体元数据`
  [主页](https://ego4d-data.org/) · [论文](https://arxiv.org/abs/2110.07058) · 访问方式：官方挑战赛门户

- **Language-Table** · 2022
  语言条件桌面机器人操作数据集与环境，包含长时自由形式指令。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `语言` · `机器人状态`
  [论文](https://arxiv.org/abs/2210.06407) · [代码](https://github.com/google-research/language-table) · 访问方式：官方数据和代码

- **MAgent2** · 2022
  大规模多智能体网格世界环境，提供并行动作、观测和群体状态轨迹。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/Farama-Foundation/MAgent2) · [论文](https://arxiv.org/abs/2109.07807) · 访问方式：开源环境

- **ProcTHOR** · 2022
  用于具身智能训练与评测的程序化交互环境框架，可生成任意规模、多样且可定制的虚拟室内场景，官方样本包含 1 万套房屋。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `仿真状态` · `场景元数据`
  [论文](https://arxiv.org/abs/2206.06994) · [代码](https://github.com/allenai/procthor) · 访问方式：提供官方生成器和 ProcTHOR-10K 样本

- **TEACh** · 2022
  对话驱动的具身任务数据集，包含人类指挥者与执行者的语言和动作轨迹。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `语言` · `物体状态`
  [主页](https://teachingalfred.github.io/) · [论文](https://arxiv.org/abs/2110.00534) · [代码](https://github.com/alexa/teach) · 访问方式：官方基准和代码

- **ALFWorld** · 2021
  将文本任务与室内具身环境对齐的交互基准，提供动作、观测和任务状态轨迹。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `文本` · `RGB 视频` · `动作` · `游戏状态`
  [代码](https://github.com/alfworld/alfworld) · [论文](https://arxiv.org/abs/2010.03768) · 访问方式：开源基准

- **nuPlan** · 2021
  面向自动驾驶规划的真实世界数据集与基准，提供多传感器日志、地图、轨迹和规划评测工具，支持闭环驾驶策略研究。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `地图` · `轨迹` · `GPS / 惯性测量单元`
  [主页](https://www.nuscenes.org/nuplan) · [论文](https://arxiv.org/abs/2106.11810) · [代码](https://github.com/motional/nuplan-devkit) · 访问方式：需要注册

- **PettingZoo** · 2021
  标准化多智能体环境集合。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [主页](https://pettingzoo.farama.org/) · [代码](https://github.com/Farama-Foundation/PettingZoo) · [论文](https://arxiv.org/abs/2009.14471) · 访问方式：开源环境库

- **robomimic Datasets** · 2021
  面向模仿学习的机器人操作演示数据集与基准，包含多种任务、示范来源和视觉状态。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态`
  [主页](https://robomimic.github.io/) · [论文](https://arxiv.org/abs/2108.03298) · [代码](https://github.com/ARISE-Initiative/robomimic) · 访问方式：官方基准和下载

- **ThreeDWorld Transport Challenge** · 2021
  基于 ThreeDWorld 物理仿真的视觉任务与运动规划基准，要求双臂智能体在住宅中寻找、抓取并运输物体，同时利用容器等工具提高效率。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `仿真状态` · `物体状态`
  [论文](https://arxiv.org/abs/2103.14025) · [代码](https://github.com/chuangg/tdw-transport-challenge-starter-code) · 访问方式：提供官方论文和入门代码

- **ALFRED** · 2020
  语言指令驱动的室内导航与操作演示数据集和基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `语言` · `物体状态`
  [主页](https://askforalfred.com/) · [论文](https://arxiv.org/abs/1912.01734) · [代码](https://github.com/askforalfred/alfred) · 访问方式：官方数据和基准

- **Diving48** · 2020
  包含 48 类细粒度跳水动作的视频数据集，强调动作阶段和时序差异。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签`
  [论文](https://arxiv.org/abs/1903.11204) · 访问方式：官方项目和标注

- **NetHack Learning Environment** · 2020
  NetHack 长期交互环境。
  `游戏 / 虚拟环境` · `游戏状态` · `动作` · `文本` · `奖励`
  [代码](https://github.com/facebookresearch/nle) · [论文](https://arxiv.org/abs/2006.13760) · 访问方式：开源环境

- **Ravens** · 2020
  具有程序化任务和演示轨迹的桌面机器人操作基准。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `仿真状态`
  [论文](https://arxiv.org/abs/2003.08927) · [代码](https://github.com/google-research/ravens) · 访问方式：官方代码和生成工具

- **RLBench** · 2020
  基于 CoppeliaSim 的大规模机器人操作学习套件，提供大量可程序化任务、示范轨迹和多视角视觉观测，可用于强化学习、模仿学习以及可控世界模型评测。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态` · `语言`
  [主页](https://sites.google.com/view/rlbench) · [论文](https://arxiv.org/abs/1909.12271) · [代码](https://github.com/stepjam/RLBench) · 访问方式：开放生成工具

- **RoboTHOR** · 2020
  面向仿真到真实导航的室内机器人环境和轨迹基准。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `智能体位姿` · `地图`
  [主页](https://ai2thor.allenai.org/robothor/) · [论文](https://arxiv.org/abs/2004.06799) · 访问方式：官方挑战赛和仿真器

- **BabyAI** · 2019
  可生成语言指令、网格环境和专家轨迹的具身学习平台。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `语言` · `仿真状态`
  [论文](https://arxiv.org/abs/1810.08272) · [代码](https://github.com/mila-iqia/babyai) · 访问方式：官方环境和生成器

- **Franka Kitchen** · 2019
  厨房场景中的长时机器人操作环境和人类演示轨迹。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `物体状态`
  [论文](https://arxiv.org/abs/1910.11956) · [代码](https://github.com/Farama-Foundation/D4RL) · 访问方式：官方环境和离线数据

- **Honda Research Institute Driving Dataset** · 2019
  面向驾驶员行为、场景理解和因果解释的真实道路数据集，结合驾驶视频、车辆状态与人类建议，支持研究驾驶决策和可解释世界状态。
  `自动驾驶` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://usa.honda-ri.com/HAD) · [论文](https://arxiv.org/abs/1811.02307) · 访问方式：官方项目页面；访问方式需核验

- **Meta-World** · 2019
  面向多任务和元强化学习的机器人操作基准，提供统一机械臂、可程序化任务和可生成轨迹，用于测试跨任务动力学与策略泛化。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `奖励`
  [主页](https://meta-world.github.io/) · [论文](https://arxiv.org/abs/1910.10897) · [代码](https://github.com/Farama-Foundation/Metaworld) · 访问方式：开放生成工具

- **MineRL** · 2019
  基于 Minecraft 的人类示范与交互数据集，记录长时视频、键鼠动作和游戏状态，最初用于样本高效强化学习竞赛，也适合开放世界动作模型和长程规划研究。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `游戏状态` · `奖励`
  [主页](https://minerl.io/) · [论文](https://arxiv.org/abs/1907.13440) · [代码](https://github.com/minerllabs/minerl) · 访问方式：开放下载

- **MiniWoB++** · 2019
  网页交互环境集合，提供动作、页面状态和任务轨迹用于智能体建模。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `文本` · `奖励`
  [代码](https://github.com/Farama-Foundation/miniwob-plusplus) · [论文](https://arxiv.org/abs/1905.04362) · 访问方式：开源基准

- **OffWorld Gym** · 2019
  用于真实机器人强化学习的开放物理环境与基准，通过统一接口提供传感器观测、动作、奖励和真实交互回合。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `奖励`
  [论文](https://arxiv.org/abs/1910.08639) · [代码](https://github.com/offworld-projects/offworld-gym) · 访问方式：提供官方代码仓库

- **SocNav1** · 2019
  用于学习和评测社交导航约定的数据集，包含人类在共享空间中的位置、朝向、群组和障碍物关系，支持人机交互轨迹预测。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `智能体位姿` · `轨迹` · `地图` · `物体状态`
  [论文](https://arxiv.org/abs/1909.02993) · [代码](https://github.com/gnns4hri/SocNav1) · 访问方式：提供官方代码仓库

- **THÖR** · 2019
  面向人机共享室内空间的人类运动数据集，提供高精度位置、头部朝向、视线、社交群组、障碍物地图和移动机器人传感器数据。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `轨迹` · `视线` · `智能体位姿` · `激光雷达` · `地图`
  [论文](https://arxiv.org/abs/1909.04403) · 访问方式：论文入口；官方访问方式需核验

- **40K Robotic Grasp Demonstrations** · 2018
  包含约四万条自然场景六自由度机器人抓取示范的数据集，记录视觉观测、末端位姿和抓取结果，用于学习从视觉到动作的操作策略。
  `机器人 / 具身智能` · `RGB 视频` · `深度` · `动作` · `机器人状态` · `轨迹`
  [论文](https://arxiv.org/abs/1812.11683) · 访问方式：仅有论文入口；数据访问待核验

- **CoSTAR Block Stacking** · 2018
  面向机器人积木堆叠的示范数据集，包含视觉观测、动作和工作空间约束信息，用于研究从示范中学习可组合的操作技能。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `物体状态`
  [论文](https://arxiv.org/abs/1810.11714) · 访问方式：仅有论文入口；数据访问待核验

- **Gym Retro** · 2018
  经典游戏模拟器环境，提供像素观测、离散动作和完整游戏状态轨迹。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/openai/retro) · [论文](https://arxiv.org/abs/1710.02298) · 访问方式：开源模拟器集成

- **RoboTurk** · 2018
  通过众包远程操作收集的真实机器人示范数据，展示低成本扩展人类操作轨迹的方式，并提供视觉、动作和机器人状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://roboturk.stanford.edu/) · [论文](https://arxiv.org/abs/1811.02790) · 访问方式：开放项目访问

- **TrajNet** · 2018
  面向行人和多智能体轨迹预测的基准，汇集多个真实场景轨迹并统一评测未来位置预测、社会交互和多模态不确定性。
  `第一人称 / 人类活动` · `自动驾驶` · `轨迹` · `智能体位姿` · `地图`
  [论文](https://arxiv.org/abs/1805.07663) · [代码](https://github.com/vita-epfl/trajnetplusplusbaselines) · 访问方式：提供官方基准代码仓库

- **VirtualHome** · 2018
  将家庭活动表示为可执行程序并在三维室内环境中模拟，连接自然语言、动作序列、物体状态和视频，可用于长时任务与因果状态转移研究。
  `游戏 / 虚拟环境` · `机器人 / 具身智能` · `文本` · `动作` · `仿真状态` · `合成视频`
  [主页](http://virtual-home.org/) · [论文](https://arxiv.org/abs/1806.07011) · [代码](https://github.com/xavierpuigf/virtualhome) · 访问方式：开放生成工具

- **PoseTrack** · 2017
  视频中的多人姿态估计与跟踪基准，提供连续人体关键点和轨迹标注。
  `第一人称 / 人类活动` · `RGB 视频` · `智能体位姿` · `动作标签`
  [主页](https://posetrack.net/) · [论文](https://arxiv.org/abs/1611.07727) · 访问方式：官方挑战赛门户

- **NGSIM** · 2006
  美国公路交通管理部门发布的自然驾驶轨迹数据集，记录高速公路和城市道路中车辆的连续位置、速度与车道信息，用于交通行为预测和多智能体建模。
  `自动驾驶` · `轨迹` · `地图` · `智能体位姿`
  [主页](https://ops.fhwa.dot.gov/trafficanalysistools/ngsim.htm) · 访问方式：官方公共数据页面

<a id="spatial-spatiotemporal-world-modeling"></a>

### 空间与时空世界建模（60）

- **AudioWorldSim** · 2026
  用于生成双耳音频世界模型轨迹的开放仿真平台。
  `机器人 / 具身智能` · `物理 / 科学` · `音频` · `智能体位姿` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.21075) · [代码](https://github.com/Luizerko/AudioWorldSim) · 访问方式：论文入口；发布状态待核验

- **EPIC-Bench** · 2026
  面向定位、导航感知和操作感知的细粒度具身视觉掩码定位基准。
  `机器人 / 具身智能` · `RGB 视频` · `分割标注` · `语言`
  [主页](https://epic-bench.github.io/EPIC-Bench/) · [论文](https://arxiv.org/abs/2605.17070) · [代码](https://github.com/rxc205/EPIC-Bench-Eval) · 访问方式：数据集已在 Hugging Face 和 ModelScope 提供

- **ESPIRE** · 2026
  在可程序化生成的模拟物理环境中诊断视觉语言模型具身空间推理能力的基准。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `语言` · `动作` · `物体状态`
  [论文](https://arxiv.org/abs/2603.13033) · [代码](https://github.com/spatigen/espire) · 访问方式：环境生成框架和评测代码可用

- **Orbis-Tabletop** · 2026
  面向机器人仿真、具身智能和视觉研究的高质量桌面尺度三维场景数据集。
  `机器人 / 具身智能` · `城市 / 三维场景` · `三维网格` · `三维元数据` · `物体元数据`
  [代码](https://github.com/IntimeAI/Orbis-Tabletop) · 访问方式：官方仓库提供场景素材和文档入口

- **Sekai2** · 2026
  面向交互式世界模型的真实第一人称长时视频数据集，配有相机轨迹和时间对齐描述。
  `第一人称 / 人类活动` · `RGB 视频` · `相机位姿` · `语言` · `轨迹`
  [主页](https://kangverse.github.io/sekai2-project/) · [论文](https://arxiv.org/abs/2608.09449) · [代码](https://github.com/kangverse/Sekai2-Dataset) · 访问方式：已公布官方数据入口，完整发布尚待完成

- **STONE Dataset** · 2026
  面向非结构化越野导航和三维可通行性预测的环视多模态机器人数据集。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `激光雷达` · `三维标注` · `机器人状态`
  [主页](https://konyul.github.io/STONE-dataset/) · [代码](https://github.com/konyul/STONE) · 访问方式：已公布官方发布计划，下载入口尚待开放

- **TransBiolab** · 2026
  杂乱透明生物医学物体的真实多视角 RGB-D 数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB-D` · `三维框` · `分割标注` · `相机位姿`
  [论文](https://arxiv.org/abs/2607.21071) · [主页](https://dualtransparency.github.io/TransBiolab/) · 访问方式：论文入口；发布状态待核验

- **CU-MULTI** · 2025
  由地面机器人采集的多机器人户外长序列数据集。
  `机器人 / 具身智能` · `RGB 视频` · `激光雷达` · `惯性测量单元 / GPS` · `轨迹`
  [代码](https://github.com/arpg/CU-Multi) · 访问方式：官方仓库和序列文档可用

- **EOC-Bench** · 2025
  系统评测动态第一人称场景中物体中心具身认知能力的数据集。
  `第一人称 / 人类活动` · `机器人 / 具身智能` · `RGB 视频` · `物体状态` · `问答` · `语言`
  [主页](https://circleradon.github.io/EOCBench/) · [论文](https://arxiv.org/abs/2506.05287) · [代码](https://github.com/alibaba-damo-academy/EOCBench) · 访问方式：基准数据集和项目页已公开

- **GrandTour Dataset** · 2025
  在真实复杂环境中采集的腿式机器人多传感器长程轨迹数据集。
  `机器人 / 具身智能` · `RGB 视频` · `激光雷达` · `惯性测量单元 / GPS` · `轨迹` · `机器人状态`
  [主页](https://grand-tour.leggedrobotics.com/dataset) · [论文](https://arxiv.org/abs/2602.18164) · [代码](https://github.com/leggedrobotics/grand_tour_dataset) · 访问方式：提供数据页、Hugging Face 仓库和定位基准

- **i2Nav-Robot** · 2025
  面向室内外多传感器融合导航与建图的大规模机器人数据集。
  `机器人 / 具身智能` · `RGB 视频` · `激光雷达` · `惯性测量单元 / GPS` · `轨迹`
  [代码](https://github.com/i2Nav-WHU/i2Nav-Robot) · 访问方式：官方仓库和基线代码可用

- **iilab Indoor LiDAR SLAM Dataset** · 2025
  用于室内激光雷达 SLAM、定位和三维重建的真实机器人序列数据集工具包。
  `机器人 / 具身智能` · `城市 / 三维场景` · `激光雷达` · `惯性测量单元` · `相机位姿` · `轨迹`
  [主页](https://doi.org/10.25747/VHNJ-WM80) · [代码](https://github.com/JorgeDFR/iilabs3d-toolkit) · 访问方式：提供官方工具包和 DOI 数据入口

- **M3DGR** · 2025
  面向地面机器人的多传感器、多场景大规模 SLAM 数据集。
  `机器人 / 具身智能` · `RGB 视频` · `激光雷达` · `惯性测量单元 / GPS` · `轨迹`
  [代码](https://github.com/sjtuyinjie/M3DGR) · 访问方式：官方数据仓库和基准代码可用

- **MineInsight** · 2025
  面向越野人道排雷机器人的多光谱环境数据集。
  `机器人 / 具身智能` · `RGB 视频` · `激光雷达` · `三维标注` · `场景元数据`
  [代码](https://github.com/mariomlz99/MineInsight) · 访问方式：官方仓库和项目资源可用

- **Multimodal AMR Dataset** · 2025
  工业室内与城市室外自主移动机器人采集的多模态时序数据集。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB 视频` · `激光雷达` · `毫米波雷达` · `深度` · `场景元数据`
  [代码](https://github.com/SEW-Eurodrive-Open-Source/Multimodal_AMR_dataset) · 访问方式：官方文档和仓库可用

- **NextBestPath** · 2025
  用于未知环境高效三维建图和主动探索路径规划的数据与基准。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB 视频` · `深度` · `相机位姿` · `轨迹`
  [主页](https://shiyao-li.github.io/nbp/) · [代码](https://github.com/shiyao-li/NextBestPath) · 访问方式：官方项目页和代码可用

- **OmniWorld** · 2025
  覆盖游戏、城市行走、人机交互和机器人轨迹的多领域多模态四维世界建模数据集。
  `游戏 / 虚拟环境` · `第一人称 / 人类活动` · `机器人 / 具身智能` · `RGB 视频` · `深度` · `相机位姿` · `光流` · `文本`
  [主页](https://yangzhou24.github.io/OmniWorld/) · [论文](https://arxiv.org/abs/2509.12201) · [代码](https://github.com/yangzhou24/OmniWorld) · 访问方式：多个子集已在 Hugging Face 和 ModelScope 提供

- **Open3D-VQA** · 2025
  在开放三维空间中评测多模态模型具身空间推理能力的问答基准。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB 视频` · `三维元数据` · `问答` · `语言`
  [代码](https://github.com/EmbodiedCity/Open3D-VQA.code) · 访问方式：官方代码和基准资源可用

- **RadarRGBD** · 2025
  同步 RGB-D、毫米波雷达点云与原始雷达矩阵的室内外感知数据集。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2505.15860) · [代码](https://github.com/song4399/RadarRGBD) · 访问方式：论文入口；发布状态待核验

- **ROVR Open Dataset** · 2025
  面向自动驾驶、机器人和四维感知的大规模开放三维数据集。
  `自动驾驶` · `城市 / 三维场景` · `RGB 视频` · `三维标注` · `激光雷达` · `相机位姿`
  [主页](https://rovr.network/#/dataset) · [代码](https://github.com/rovr-network/ROVR-Open-Dataset) · 访问方式：官方数据门户可用

- **SLABIM** · 2025
  耦合 SLAM 传感器数据与建筑 BIM 的室内数据集。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2502.16856) · [代码](https://github.com/HKUST-Aerial-Robotics/SLABIM) · 访问方式：论文入口；发布状态待核验

- **SPICE-HL3** · 2025
  高纬月面模拟环境中的单光子、惯性、双目和里程计数据集。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2506.22956) · 访问方式：论文入口；发布状态待核验

- **STRIDE** · 2025
  将全景道路图像组织为观测、状态和动作节点的时空自主数据集。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2506.11302) · [主页](https://huggingface.co/datasets/Tera-AI/STRIDE) · 访问方式：论文入口；发布状态待核验

- **UrbanVideo-Bench** · 2025
  利用城市空间连续第一人称视频评测回忆、感知、推理和导航能力的具身基准。
  `第一人称 / 人类活动` · `城市 / 三维场景` · `RGB 视频` · `语言` · `轨迹` · `问答`
  [主页](https://huggingface.co/datasets/EmbodiedCity/UrbanVideo-Bench) · [代码](https://github.com/EmbodiedCity/UrbanVideo-Bench.code) · 访问方式：数据集和生成代码已公开

- **Ego-Exo4D** · 2024
  同步采集第一人称与第三人称视角的人类技能数据集，覆盖体育、音乐、烹饪等活动，并提供三维、语言和相机信息，支持跨视角世界状态理解与技能学习。
  `第一人称 / 人类活动` · `多视角 RGB 视频` · `音频` · `语言` · `相机位姿` · `三维标注`
  [主页](https://ego-exo4d-data.org/) · [论文](https://arxiv.org/abs/2311.18259) · [代码](https://github.com/facebookresearch/Ego4d) · 访问方式：需申请

- **Argoverse 2** · 2023
  面向自动驾驶感知、运动预测和地图理解的多任务数据集合，包含传感器序列、丰富高清地图及大量运动场景，强调复杂城市中的长尾行为与轨迹预测。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `地图` · `轨迹` · `三维框`
  [主页](https://www.argoverse.org/av2.html) · [论文](https://arxiv.org/abs/2301.00493) · [代码](https://github.com/argoverse/av2-api) · 访问方式：开放下载

- **EmbodiedScan** · 2023
  面向具身智能整体三维场景理解的多模态第一人称数据集与基准，结合大规模 RGB-D 视图、语言提示、三维框和稠密语义占据标注。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB-D` · `语言` · `三维框` · `语义标签` · `相机位姿`
  [论文](https://arxiv.org/abs/2312.16170) · [代码](https://github.com/OpenRobotLab/EmbodiedScan) · 访问方式：提供官方代码、标注和基准资源

- **Objaverse** · 2023
  大规模三维物体资产集合，支持开放世界三维理解与生成。
  `城市 / 三维场景` · `游戏 / 虚拟环境` · `三维网格` · `物体元数据` · `文本`
  [主页](https://objaverse.allenai.org/) · [论文](https://arxiv.org/abs/2212.08051) · 访问方式：官方数据工具

- **Robo360** · 2023
  面向三维物理世界建模的全视角机器人操作数据集，以密集多视角记录不同材料和光学性质物体的操作过程，支持动态神经场与多视角策略研究。
  `机器人 / 具身智能` · `物理 / 科学` · `多视角 RGB 视频` · `相机位姿` · `动作` · `物体元数据`
  [主页](https://robo360dataset.github.io/) · [论文](https://arxiv.org/abs/2312.06686) · [代码](https://github.com/robo360dataset/robo360dataset.github.io) · 访问方式：提供官方项目仓库和论文入口；数据条款待核验

- **ScanNet++** · 2023
  高保真室内三维扫描数据集，包含神经渲染和密集语义标注。
  `城市 / 三维场景` · `RGB-D` · `三维网格` · `语义标签` · `相机位姿`
  [主页](https://scannetpp.ml/) · [论文](https://arxiv.org/abs/2308.11417) · 访问方式：官方项目页

- **MOVi** · 2022
  使用 Kubric 生成的多对象视频系列，提供精确实例分割、深度、光流和三维属性，覆盖不同复杂度设置，适合对象发现、跟踪与可解释动态建模。
  `物理 / 科学` · `合成视频` · `深度` · `光流` · `分割标注` · `三维状态`
  [论文](https://arxiv.org/abs/2203.12602) · [代码](https://github.com/google-research/kubric) · 访问方式：开放下载

- **ARKitScenes** · 2021
  室内移动设备 RGB-D 扫描与三维重建数据集。
  `城市 / 三维场景` · `RGB-D` · `三维网格` · `相机位姿`
  [主页](https://github.com/apple/ARKitScenes) · [论文](https://arxiv.org/abs/2111.08853) · 访问方式：官方下载

- **Habitat-Matterport 3D** · 2021
  面向具身导航与室内模拟的高质量三维场景数据，结合 Habitat 平台可生成视觉、深度、语义和智能体轨迹，用于空间记忆、导航规划与交互式世界建模。
  `机器人 / 具身智能` · `城市 / 三维场景` · `三维网格` · `RGB-D` · `语义标签` · `智能体位姿`
  [主页](https://aihabitat.org/datasets/hm3d/) · [论文](https://arxiv.org/abs/2109.08238) · [代码](https://github.com/facebookresearch/habitat-sim) · 访问方式：需申请

- **Habitat-Matterport 3D (HM3D)** · 2021
  高质量真实室内三维场景集合，用于具身导航和交互仿真。
  `机器人 / 具身智能` · `城市 / 三维场景` · `三维网格` · `RGB 视频` · `地图`
  [主页](https://aihabitat.org/datasets/hm3d/) · [论文](https://arxiv.org/abs/2109.08238) · 访问方式：官方 Habitat 下载

- **Audi Autonomous Driving Dataset** · 2020
  奥迪公开的自动驾驶多传感器数据集，包含相机、激光雷达、语义标注和车辆状态。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `语义标签` · `GPS / 惯性测量单元`
  [论文](https://arxiv.org/abs/2004.06320) · 访问方式：官方下载门户

- **HOPE Object Pose Dataset** · 2020
  面向家庭物体六维姿态估计的 RGB-D 数据集，包含杂乱场景和真实物体模型。
  `机器人 / 具身智能` · `RGB-D` · `三维网格` · `相机位姿`
  [论文](https://arxiv.org/abs/2003.09111) · 访问方式：官方项目页和代码

- **KITTI-360** · 2020
  面向长期城市驾驶的多模态三维数据集，提供全景图像、激光雷达、轨迹和三维场景标注。
  `自动驾驶` · `城市 / 三维场景` · `激光雷达` · `RGB 视频` · `三维框` · `地图` · `GPS / 惯性测量单元`
  [主页](https://www.cvlibs.net/datasets/kitti-360/) · [论文](https://arxiv.org/abs/2012.06268) · 访问方式：官方基准下载

- **PandaSet** · 2020
  面向自动驾驶研究的多传感器数据集，提供相机、激光雷达、GPS/IMU 和三维标注，覆盖城市道路中的车辆、行人和交通场景。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `GPS / 惯性测量单元` · `三维框` · `地图`
  [论文](https://arxiv.org/abs/2102.02684) · [代码](https://github.com/scaleapi/pandaset-devkit) · 访问方式：开放下载

- **BLVD** · 2019
  面向自动驾驶的大规模 5D 语义数据集，结合视频、三维目标、轨迹、地图和时间信息，支持动态交通场景理解与未来状态建模。
  `自动驾驶` · `城市 / 三维场景` · `RGB 视频` · `三维框` · `轨迹` · `地图` · `语义标签`
  [论文](https://arxiv.org/abs/1903.06405) · [代码](https://github.com/VCCIV/BLVD) · 访问方式：提供官方代码仓库

- **Habitat-Lab** · 2019
  具身导航与操作仿真平台。
  `机器人 / 具身智能` · `RGB 视频` · `深度` · `智能体位姿` · `动作`
  [主页](https://aihabitat.org/) · [代码](https://github.com/facebookresearch/habitat-lab) · [论文](https://arxiv.org/abs/1904.01201) · 访问方式：开源模拟器

- **iGibson** · 2019
  室内具身智能仿真平台，提供视觉、触觉、动作和物理状态轨迹。
  `机器人 / 具身智能` · `RGB 视频` · `深度` · `仿真状态` · `动作`
  [主页](https://svl.stanford.edu/igibson/) · [代码](https://github.com/StanfordVL/iGibson) · [论文](https://arxiv.org/abs/1810.03993) · 访问方式：开源模拟器与资源

- **Lyft Level 5 Dataset** · 2019
  自动驾驶多传感器数据集，包含激光雷达、相机、地图和轨迹标注。
  `自动驾驶` · `激光雷达` · `RGB 视频` · `地图` · `轨迹` · `GPS / 惯性测量单元`
  [论文](https://arxiv.org/abs/2006.14480) · 访问方式：官方下载门户

- **nuScenes** · 2019
  覆盖波士顿与新加坡城市道路的多传感器自动驾驶数据集，提供同步环视相机、LiDAR、RADAR、定位和三维标注，适合多视角时空建模、占用预测与驾驶世界模型研究。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `毫米波雷达` · `惯性测量单元 / GPS` · `三维框`
  [主页](https://www.nuscenes.org/) · [论文](https://arxiv.org/abs/1903.11027) · [代码](https://github.com/nutonomy/nuscenes-devkit) · 访问方式：需注册

- **Oxford Radar RobotCar Dataset** · 2019
  长期重复采集的雷达、激光雷达和相机驾驶数据集，用于鲁棒定位与动态环境建模。
  `自动驾驶` · `毫米波雷达` · `激光雷达` · `RGB 视频` · `GPS / 惯性测量单元`
  [主页](https://oxford-robotics-institute.github.io/radar-robotcar-dataset/) · [论文](https://arxiv.org/abs/1909.01384) · 访问方式：官方下载

- **Replica** · 2019
  由高质量真实室内重建组成的三维场景数据集，提供纹理网格、语义和高保真渲染资产，常用于具身导航与神经场景表示。
  `机器人 / 具身智能` · `城市 / 三维场景` · `三维网格` · `语义标签` · `相机位姿`
  [论文](https://arxiv.org/abs/1906.05797) · [代码](https://github.com/facebookresearch/Replica-Dataset) · 访问方式：开放下载，需同意协议

- **SoundSpaces** · 2019
  面向三维环境音频-视觉导航的仿真数据集和环境，将空间音频、视觉观测、动作和位置状态结合起来，支持具身智能体的多模态世界建模。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB 视频` · `音频` · `动作` · `仿真状态` · `地图`
  [论文](https://arxiv.org/abs/1912.11474) · [代码](https://github.com/facebookresearch/sound-spaces) · 访问方式：官方项目访问；可能需要注册

- **Waymo Open Dataset** · 2019
  高质量自动驾驶多传感器数据集，覆盖摄像头、LiDAR、地图、三维检测和运动预测场景，能够支持动态占用、未来轨迹以及闭环驾驶世界表示研究。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `地图` · `三维框` · `轨迹`
  [主页](https://waymo.com/open/) · [论文](https://arxiv.org/abs/1912.04838) · [代码](https://github.com/waymo-research/waymo-open-dataset) · 访问方式：需注册

- **ApolloScape** · 2018
  面向自动驾驶的多任务数据集，提供街景视频、立体图像、深度、三维车辆和高精地图等信息，支持城市时空场景建模。
  `自动驾驶` · `城市 / 三维场景` · `RGB 视频` · `深度` · `地图` · `三维框` · `语义标签`
  [主页](https://apolloscape.auto/) · [论文](https://arxiv.org/abs/1803.06184) · [代码](https://github.com/ApolloScapeAuto/dataset-api) · 访问方式：需要注册

- **Gibson Environment Dataset** · 2018
  由真实空间扫描构建的可导航三维环境集合，配合 Gibson 模拟器生成 RGB、深度、语义和智能体轨迹，面向具身感知与导航。
  `机器人 / 具身智能` · `城市 / 三维场景` · `三维网格` · `RGB-D` · `智能体位姿` · `语义标签`
  [主页](http://gibsonenv.stanford.edu/database/) · [论文](https://arxiv.org/abs/1808.10654) · [代码](https://github.com/StanfordVL/GibsonEnv) · 访问方式：需申请并同意协议

- **DDD17** · 2017
  面向端到端驾驶研究的事件相机数据集，记录真实道路中的异步视觉事件、驾驶状态和控制相关信息，用于动态场景理解与驾驶行为建模。
  `自动驾驶` · `Event Camera` · `GPS / 惯性测量单元` · `动作` · `轨迹`
  [论文](https://arxiv.org/abs/1711.01458) · 访问方式：论文入口；数据访问需核验

- **Matterport3D** · 2017
  面向室内场景理解和具身导航的建筑级 RGB-D 全景数据集，提供精细网格、相机位姿、语义及区域标注。
  `城市 / 三维场景` · `机器人 / 具身智能` · `RGB-D` · `三维网格` · `相机位姿` · `语义标签`
  [主页](https://niessner.github.io/Matterport/) · [论文](https://arxiv.org/abs/1709.06158) · [代码](https://github.com/niessner/Matterport) · 访问方式：需申请并同意协议

- **MPI-INF-3DHP** · 2017
  室内外三维人体姿态视频数据集，包含多视角和绿幕合成序列。
  `第一人称 / 人类活动` · `RGB 视频` · `智能体位姿` · `相机位姿`
  [主页](https://vcai.mpi-inf.mpg.de/3dhp-dataset/) · [论文](https://arxiv.org/abs/1611.09813) · 访问方式：官方项目页

- **ScanNet** · 2017
  由手持 RGB-D 设备采集的大规模室内扫描序列，提供相机位姿、重建网格、语义和实例标注，是室内三维世界表示与导航的重要数据源。
  `城市 / 三维场景` · `机器人 / 具身智能` · `RGB-D` · `相机位姿` · `三维网格` · `语义标签`
  [主页](http://www.scan-net.org/) · [论文](https://arxiv.org/abs/1702.04405) · [代码](https://github.com/ScanNet/ScanNet) · 访问方式：需同意协议

- **Cityscapes** · 2016
  覆盖欧洲城市街景的驾驶图像与短时序数据集，提供精细像素语义、实例及深度相关信息，广泛用于未来语义预测和城市视觉世界建模。
  `自动驾驶` · `城市 / 三维场景` · `RGB 视频` · `语义标签` · `分割标注` · `深度`
  [主页](https://www.cityscapes-dataset.com/) · [论文](https://openaccess.thecvf.com/content_cvpr_2016/html/Cordts_The_Cityscapes_Dataset_CVPR_2016_paper.html) · [代码](https://github.com/mcordts/cityscapesScripts) · 访问方式：需注册

- **DeepMind Lab** · 2016
  第一人称 3D 导航与交互环境，提供视觉观测、动作和游戏状态轨迹。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/google-deepmind/lab) · [论文](https://arxiv.org/abs/1612.03801) · 访问方式：开源环境

- **Oxford RobotCar** · 2016
  同一路线跨越一年多次重复采集的自动驾驶数据集，包含相机、激光雷达、雷达和定位信号，特别适合长期环境变化和世界状态鲁棒性研究。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `毫米波雷达` · `GPS / 惯性测量单元`
  [主页](https://robotcar-dataset.robots.ox.ac.uk/) · [论文](https://arxiv.org/abs/1610.08265) · [代码](https://github.com/ori-mrg/robotcar-dataset-sdk) · 访问方式：开放下载

- **SYNTHIA** · 2016
  面向城市场景理解的合成驾驶数据集，通过虚拟城市生成多季节、多天气和多视角图像序列，并提供像素级语义及深度真值。
  `自动驾驶` · `城市 / 三维场景` · `合成视频` · `深度` · `语义标签` · `相机位姿`
  [主页](https://synthia-dataset.net/) · [论文](https://openaccess.thecvf.com/content_cvpr_2016/html/Ros_The_SYNTHIA_Dataset_CVPR_2016_paper.html) · 访问方式：需申请并同意协议

- **Virtual KITTI** · 2016
  与 KITTI 真实序列对应的合成驾驶视频数据，提供深度、光流、实例、语义和相机真值，可用于可控条件下的场景动态及域迁移实验。
  `自动驾驶` · `合成视频` · `深度` · `光流` · `分割标注` · `相机位姿`
  [主页](https://europe.naverlabs.com/research/computer-vision/proxy-virtual-worlds-vkitti-1/) · [论文](https://arxiv.org/abs/1605.06457) · 访问方式：开放下载

- **YCB-Video** · 2016
  包含 21 个 YCB 物体视频序列及逐帧六维姿态标注，用于机器人视觉与操作。
  `机器人 / 具身智能` · `RGB-D` · `三维网格` · `相机位姿`
  [主页](https://rse-lab.cs.washington.edu/projects/posecnn/) · [论文](https://arxiv.org/abs/1711.00199) · 访问方式：提供官方下载

- **KITTI** · 2012
  自动驾驶领域最经典的多传感器数据集之一，提供双目相机、LiDAR、GPS/IMU 和多类评测任务，适合建立深度、场景流、里程计与三维动态建模的可比基线。
  `自动驾驶` · `双目 RGB` · `激光雷达` · `GPS / 惯性测量单元` · `三维框`
  [主页](https://www.cvlibs.net/datasets/kitti/) · [论文](https://www.cvlibs.net/publications/Geiger2013IJRR.pdf) · [代码](https://github.com/utiasSTARS/pykitti) · 访问方式：开放下载

<a id="physical-causal-reasoning"></a>

### 物理与因果推理（28）

- **CG-World** · 2026
  显式记录状态、事件、关系和反事实分支的大规模计算机图形世界状态数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `合成视频` · `三维状态` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2607.26452) · 访问方式：论文入口；发布状态待核验

- **GAUGE** · 2026
  以真实测量轨迹和物理属性为依据，评测物理引擎与视频世界模型物理保真度的基准。
  `物理 / 科学` · `机器人 / 具身智能` · `RGB 视频` · `轨迹` · `物体状态` · `三维元数据`
  [主页](https://internrobotics.github.io/GAUGE/) · [论文](https://arxiv.org/abs/2608.05948) · [代码](https://github.com/InternRobotics/GAUGE) · 访问方式：基准数据集已在 Hugging Face 提供

- **KinDER** · 2026
  面向机器人学习与规划的物理推理基准，提供任务环境、示范数据和模型资源。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `动作` · `物体状态` · `轨迹`
  [主页](https://huggingface.co/datasets/kinder-bench/kinder-datasets) · [代码](https://github.com/Princeton-Robot-Planning-and-Learning/kindergarden) · 访问方式：示范数据已在 Hugging Face 提供

- **PhyCheck** · 2026
  面向视频模型物理规律理解的细粒度证据问答数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `问答` · `文本`
  [论文](https://arxiv.org/abs/2608.02150) · 访问方式：论文入口；发布状态待核验

- **PhyGround** · 2026
  通过文本、首帧和生成视频评测生成式世界模型物理合理性的基准。
  `物理 / 科学` · `RGB 视频` · `文本` · `物体状态`
  [主页](https://phyground.github.io/) · [论文](https://arxiv.org/abs/2605.10806) · [代码](https://github.com/NU-World-Model-Embodied-AI/PhyGround) · 访问方式：提示和首帧图像已在 Hugging Face 提供

- **PhysEditWorld** · 2026
  通过在相同场景、初态和动作序列下改变重力参数生成的物理规则可编辑世界模型数据集。
  `游戏 / 虚拟环境` · `物理 / 科学` · `RGB 视频` · `动作` · `游戏状态` · `相机位姿`
  [主页](https://yizhiqianbi.github.io/physeditworld/) · [论文](https://arxiv.org/abs/2606.26694) · [代码](https://github.com/yizhiqianbi/physeditworld) · 访问方式：ModelScope 提供公开数据入口

- **RigidBench** · 2026
  具有精确仿真状态的刚体物理视频生成基准。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `深度` · `三维状态`
  [论文](https://arxiv.org/abs/2608.15555) · 访问方式：论文入口；发布状态待核验

- **VisTouch** · 2026
  机器人滑动接触场景下同步采集视觉、触觉力和接触音频的大规模多模态数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `音频` · `机器人状态` · `动作`
  [代码](https://github.com/liangnjupt/VisTouch) · 访问方式：官方仓库提供元数据、加载器、基准和下载说明

- **CausalVQA** · 2025
  面向现实视频反事实、假设、预判与规划的物理因果问答基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2506.09943) · 访问方式：论文入口；发布状态待核验

- **GRIP Dataset** · 2025
  面向可变形与刚体耦合抓取的通用机器人增量势接触仿真数据集。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `动作` · `物体状态` · `三维状态`
  [主页](https://bell0o.github.io/GRIP/) · [代码](https://github.com/BeLl0o/GRIP_Dataset) · 访问方式：项目页和官方仓库可用

- **OmniEmbodied / EAR-Bench** · 2025
  评测智能体对物理交互、工具使用和多智能体协调推理能力的文本具身场景基准。
  `机器人 / 具身智能` · `文本` · `动作` · `物体状态` · `轨迹`
  [主页](https://zju-real.github.io/OmniEmbodied/) · [论文](https://arxiv.org/abs/2508.05614) · [代码](https://github.com/ZJU-REAL/OmniEmbodied) · 访问方式：仓库提供基准数据，Hugging Face 提供专家轨迹

- **PokeFlex** · 2024
  面向可变形物体机器人操作的真实世界试验数据集，通过机器人戳动采集完整 360 度三维网格形变及对应力和力矩。
  `机器人 / 具身智能` · `物理 / 科学` · `三维网格` · `动作` · `机器人状态` · `多视角 RGB 视频`
  [主页](https://pokeflex-dataset.github.io/) · [论文](https://arxiv.org/abs/2409.17124) · [代码](https://github.com/pokeflex-dataset/reconstruction) · 访问方式：提供官方项目页和重建代码

- **Melting Pot** · 2022
  多智能体社会交互环境套件。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/google-deepmind/meltingpot) · [论文](https://arxiv.org/abs/2211.13746) · 访问方式：开源基准

- **Physion** · 2021
  用于直觉物理学习和评测的合成视频数据集，通过碰撞、支撑、包含和形变等场景测试模型能否预测物体间接触及后续动态。
  `物理 / 科学` · `合成视频` · `深度` · `分割标注` · `物体状态`
  [主页](https://physion-benchmark.github.io/) · [论文](https://arxiv.org/abs/2106.08261) · [代码](https://github.com/cogtoolslab/physics-benchmarking-neurips2021) · 访问方式：开放下载

- **Physion** · 2021
  通过物理仿真视频和问答评测视觉物理推理的数据集。
  `物理 / 科学` · `游戏 / 虚拟环境` · `RGB 视频` · `问答` · `仿真状态`
  [论文](https://arxiv.org/abs/2106.08261) · 访问方式：官方基准代码和数据

- **CATER** · 2020
  由可组合物体运动生成的合成视频数据集，强调时空关系、动作组合和被遮挡目标的定位，适合研究对象中心的动态表示及长期状态追踪。
  `物理 / 科学` · `合成视频` · `物体状态` · `动作标签` · `三维元数据`
  [主页](https://rohitgirdhar.github.io/CATER/) · [论文](https://arxiv.org/abs/1910.04744) · [代码](https://github.com/rohitgirdhar/CATER) · 访问方式：开放下载

- **CausalWorld** · 2020
  用于因果结构和泛化研究的可干预机器人操作仿真环境。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `动作` · `仿真状态` · `物体状态`
  [主页](https://sites.google.com/view/causal-world) · [论文](https://arxiv.org/abs/2010.04296) · [代码](https://github.com/rr-learning/CausalWorld) · 访问方式：官方环境

- **EGAD!** · 2020
  面向机器人抓取训练与可复现评测的程序化物体数据集，包含 2000 余个覆盖不同几何复杂度和抓取难度的生成物体，以及 49 个可三维打印的评测物体。
  `机器人 / 具身智能` · `物理 / 科学` · `三维网格` · `物体元数据`
  [主页](https://dougsm.github.io/egad/) · [论文](https://arxiv.org/abs/2003.01314) · [代码](https://github.com/dougsm/egad) · 访问方式：官方项目提供数据下载和生成代码

- **GraspNet-1Billion** · 2020
  大规模杂乱场景六维抓取基准，提供 RGB-D 场景、物体模型和十亿级抓取标注。
  `机器人 / 具身智能` · `RGB-D` · `三维网格` · `动作标签`
  [主页](https://graspnet.net/) · [论文](https://arxiv.org/abs/1912.13470) · [代码](https://github.com/graspnet/graspnet-baseline) · 访问方式：官方基准下载

- **ContactDB** · 2019
  人手与物体接触区域和力方向数据集，支持触觉与视觉交互建模。
  `机器人 / 具身智能` · `物理 / 科学` · `三维网格` · `物体状态` · `智能体位姿`
  [主页](https://contactdb.cc.gatech.edu/) · [论文](https://arxiv.org/abs/1904.03796) · 访问方式：官方项目页

- **PHYRE** · 2019
  二维物理推理基准，要求智能体通过放置物体完成目标，并在大量模板化关卡中测试跨任务泛化、试错效率和因果干预能力。
  `物理 / 科学` · `游戏 / 虚拟环境` · `仿真状态` · `动作` · `合成视频`
  [主页](https://phyre.ai/) · [论文](https://arxiv.org/abs/1908.05656) · [代码](https://github.com/facebookresearch/phyre) · 访问方式：开放生成工具

- **BlockPuzzle** · 2018
  基于 MuJoCo 和 OpenAI Gym 的物理推理任务框架，通过积木拼图和稀疏奖励环境研究智能体对物理规则的学习、课程训练和跨任务迁移。
  `机器人 / 具身智能` · `物理 / 科学` · `仿真状态` · `动作` · `奖励` · `物体状态`
  [论文](https://arxiv.org/abs/1812.00091) · 访问方式：论文入口；环境访问待核验

- **IntPhys** · 2018
  面向视觉直觉物理评测的合成数据集，通过可能与不可能的场景测试物体恒存、遮挡和支撑关系，避免模型只依赖单帧外观线索。
  `物理 / 科学` · `合成视频` · `深度` · `分割标注` · `场景元数据`
  [主页](https://intphys.cognitive-ml.fr/) · [论文](https://arxiv.org/abs/1803.07616) · [代码](https://github.com/rronan/IntPhys) · 访问方式：开放下载

- **ShapeStacks** · 2018
  通过程序化堆叠不同形状物体生成的合成数据和工具，重点研究稳定性、支撑关系及从图像推断三维物理结构。
  `物理 / 科学` · `合成视频` · `三维状态` · `物体元数据` · `仿真状态`
  [论文](https://arxiv.org/abs/1804.08018) · [代码](https://github.com/ogroth/shapestacks) · 访问方式：开放生成工具

- **TextWorld** · 2018
  文本交互式世界生成器，提供语言观测、动作和隐藏状态转移。
  `游戏 / 虚拟环境` · `文本` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/microsoft/TextWorld) · [论文](https://arxiv.org/abs/1806.11532) · 访问方式：开源生成器与游戏

- **MIT Planar Pushing Dataset** · 2016
  高精度平面推动实验数据集，系统记录不同物体、接触位置、推动方向和摩擦条件下的动作与物体运动，用于学习接触动力学。
  `机器人 / 具身智能` · `物理 / 科学` · `动作` · `物体状态` · `轨迹` · `机器人状态`
  [论文](https://arxiv.org/abs/1604.04038) · [代码](https://github.com/mcubelab/pdproc) · 访问方式：提供官方处理代码仓库

- **Physical Prediction Dataset** · 2016
  用于视频物理预测的合成碰撞和运动序列数据集。
  `物理 / 科学` · `RGB 视频` · `仿真状态`
  [论文](https://arxiv.org/abs/1608.04239) · 访问方式：仅论文入口；数据访问待核验

- **Physics 101** · 2016
  通过真实视频记录物体在斜面上的运动，并提供材料、质量、角度和运动信息，用于从视觉估计物理属性及预测动力学。
  `物理 / 科学` · `RGB 视频` · `物体元数据` · `轨迹`
  [主页](https://phys101.csail.mit.edu/) · [论文](https://arxiv.org/abs/1511.07439) · 访问方式：开放项目访问

<a id="world-model-evaluation-diagnostics"></a>

### 世界模型评测与诊断（70）

- **4DSynth** · 2026
  面向动态具身仿真的可控程序化四维世界合成资源。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.26947) · 访问方式：论文入口；数据访问待核验

- **CaliBench** · 2026
  检验视频世界模型随机物理结果校准程度的可解释基准。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.16829) · 访问方式：论文入口；发布状态待核验

- **CamWorldQA** · 2026
  相机控制世界视频生成的人工感知质量评测集。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `相机位姿`
  [论文](https://arxiv.org/abs/2608.18710) · 访问方式：论文入口；发布状态待核验

- **Complex-Scene Multi-Person Motion Forecasting** · 2026
  复杂场景多人运动轨迹预测数据与基准。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.27039) · 访问方式：论文入口；数据访问待核验

- **DrivingGen** · 2026
  从视觉质量和机器人轨迹物理合理性两方面评测自动驾驶生成式视频世界模型的基准。
  `自动驾驶` · `RGB 视频` · `轨迹`
  [主页](https://drivinggen-bench.github.io/) · [论文](https://arxiv.org/abs/2601.01528) · [代码](https://github.com/youngzhou1999/DrivingGen) · 访问方式：数据集已在 Hugging Face 提供

- **EgoSafetyBench** · 2026
  评测具身视觉语言模型能否根据第一人称视频在运行时识别危险并提供安全防护的诊断基准。
  `第一人称 / 人类活动` · `机器人 / 具身智能` · `RGB 视频` · `语言` · `动作标签`
  [论文](https://arxiv.org/abs/2607.00218) · [代码](https://github.com/AIM-Intelligence/EgoSafetyBench) · 访问方式：数据集已在 Hugging Face 提供

- **Embodied Scene Rearrangement Planning** · 2026
  具身场景重排规划任务、环境状态和评测基准。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.27371) · [主页](https://pie-lab.cn/ESRP/) · 访问方式：提供官方项目和论文入口

- **Game2World** · 2026
  游戏界面去除和世界模型训练的成对视频、野外片段及 UI 资产数据集。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.24680) · [主页](https://github.com/Dongping-Chen/Game2World) · 访问方式：提供官方项目和论文入口

- **GeoCon-Bench** · 2026
  评测生成视频跨帧几何一致性的场景数据与指标基准。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.09594) · 访问方式：论文入口；数据访问待核验

- **GigaBrain Challenge 2026 World Models Track Dataset** · 2026
  用于轨迹条件视频生成和闭环 VLA 交互评测的多任务、多视角视频与状态轨迹数据。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `轨迹` · `机器人状态` · `深度`
  [主页](https://gigaai-research.github.io/GigaBrain-Challenge-2026/guide/world-model.html) · [代码](https://github.com/open-gigaai/CVPR-2026-Workshop-WM-Track) · 访问方式：数据集和排行榜已在 Hugging Face 提供

- **GigaWorld-1 / WMBench** · 2026
  面向机器人策略评测的世界模型基准，覆盖闭环控制、分布外回放和多源长时数据。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `轨迹` · `奖励`
  [代码](https://github.com/Yvonne-OH/Giga-World-1-projectpage) · 访问方式：官方仓库包含闭环和 OOD 回放产物，完整数据访问待核验

- **H2R-Bench** · 2026
  评测人类操作视频向机器人操作视频跨本体生成的基准。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `动作标签` · `物体状态`
  [论文](https://arxiv.org/abs/2608.13049) · 访问方式：论文入口；发布状态待核验

- **HarnessEval-W** · 2026
  带证据推理树的视觉世界模型动态评测案例集。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `文本` · `问答`
  [论文](https://arxiv.org/abs/2608.16859) · 访问方式：论文入口；发布状态待核验

- **MILO HOI Benchmark** · 2026
  人-物交互三维重建数据与评测资源。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.27407) · [主页](https://ac5113.github.io/MILO) · 访问方式：提供官方项目和论文入口

- **Natural-Input Failure Discovery Benchmark** · 2026
  用于发现世界模型自然输入灾难性失效的可复现测试案例。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.22421) · 访问方式：论文入口；数据访问待核验

- **PAWBench** · 2026
  评测概率分布与世界动态对齐程度的世界模型基准。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.27345) · 访问方式：论文入口；数据访问待核验

- **PersonaShot** · 2026
  面向多镜头人物叙事连续性的千段视频和 16 项指标基准。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.16717) · 访问方式：论文入口；数据访问待核验

- **PhAIL** · 2026
  Franka FR3 真机 VLA 评测数据，包含多视角视频、遥测、动作结果和安全停止回放。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `机器人状态` · `动作` · `奖励` · `轨迹`
  [主页](https://phail.ai/releases/v1.0) · [论文](https://arxiv.org/abs/2605.29710) · 访问方式：官方发布包含视频、遥测和结果

- **PlayWorld** · 2026
  由智能体玩家完成长时目标的交互式世界模型评测基准。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `动作` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.13552) · [代码](https://github.com/kxding/PlayWorld) · 访问方式：论文入口；发布状态待核验

- **PRIMO-R1 Process Reasoning Dataset** · 2026
  面向机器人过程进度推理的 SFT、RL 和基准数据，包含失败检测与进度链式标注。
  `机器人 / 具身智能` · `RGB 视频` · `语言` · `奖励` · `动作标签`
  [主页](https://huggingface.co/datasets/LeonOverload/primo-bench-json) · [论文](https://arxiv.org/abs/2603.28545) · 访问方式：基准 JSON 和模型/数据集合已在 Hugging Face 提供

- **R2M-Bench** · 2026
  评测交互式视频世界模型重访记忆和相对一致性的基准。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.27328) · 访问方式：论文入口；数据访问待核验

- **RoboDojo RealEval** · 2026
  面向真机机器人任务的远程评测基准，提供任务配置、仿真环境和结果产物。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `场景元数据`
  [主页](https://robodojo-benchmark.com/) · [代码](https://github.com/RoboDojo-Benchmark/RoboDojo) · 访问方式：官方网页和仓库可用；完整真机回放仍待核验

- **RoboReward** · 2026
  面向机器人任务进度与成功判断的真实回放数据集和奖励模型基准。
  `机器人 / 具身智能` · `RGB 视频` · `语言` · `奖励` · `轨迹`
  [主页](https://huggingface.co/datasets/teetone/RoboReward) · [代码](https://crfm.stanford.edu/helm/robo-reward-bench/) · 访问方式：数据集已在 Hugging Face 提供，基准可通过 HELM 访问

- **RoboStressBench** · 2026
  评测视觉语言模型在具身场景物理视觉扰动下鲁棒性的诊断数据集与基准。
  `机器人 / 具身智能` · `RGB 视频` · `语言` · `场景元数据`
  [主页](https://yuevii.github.io/robostressbench-page/) · [论文](https://arxiv.org/abs/2606.00828) · [代码](https://github.com/YUEVII/RoboStressBench) · 访问方式：提供官方 Hugging Face 数据入口和评测代码

- **RoboVista** · 2026
  由机器人专家标注、覆盖真实机器人决策点的视觉问答基准。
  `机器人 / 具身智能` · `RGB 视频` · `问答` · `语言`
  [主页](https://berkeleyautomation.github.io/robovista/) · [代码](https://github.com/ehehee/robovista) · 访问方式：数据集、浏览器和排行榜均已公开

- **Sci-VBench** · 2026
  跨科学领域评测知识与因果推理视频生成的专家标注基准。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `文本`
  [论文](https://arxiv.org/abs/2608.09873) · 访问方式：论文入口；发布状态待核验

- **SemComp-Data** · 2026
  面向视频语义任务完成评测的六领域参考图像、指令和结果视频数据。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `文本`
  [论文](https://arxiv.org/abs/2608.17426) · 访问方式：论文入口；发布状态待核验

- **SpatialCrafter Benchmark** · 2026
  从单图生成可探索三维代理世界的评测资源。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.27073) · [主页](https://fangchuan.github.io/SpatialCrafter/) · 访问方式：提供官方项目和论文入口

- **ST-BiBench** · 2026
  系统评测多模态模型在双臂具身任务中多流时空协调能力的分层基准。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `动作` · `机器人状态` · `语言`
  [论文](https://arxiv.org/abs/2602.08392) · [代码](https://github.com/stbibench/ST-BiBench) · 访问方式：评测代码和基准素材已提供

- **SurgWMBench** · 2026
  外科器械短时运动规划与连续 rollout 稳定性评测基准。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.08070) · 访问方式：论文入口；数据访问待核验

- **Teaching Monster Challenge** · 2026
  面向学习者画像适配的教学视频生成基准及人工判断集。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.08852) · 访问方式：论文入口；数据访问待核验

- **TrapVLA Benchmark** · 2026
  可配置视觉语言动作模型失效模式的机器人评测集。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.26578) · [主页](https://john-liua.github.io/TrapVLA/) · 访问方式：提供官方项目和论文入口

- **VBVR-Pro** · 2026
  包含 300 个程序化可验证视觉推理任务的数据与评测套件。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.26105) · 访问方式：论文入口；数据访问待核验

- **VGI-Bench** · 2026
  评测视频生成模型视觉推理能力的 27 项任务基准。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `文本` · `问答`
  [论文](https://arxiv.org/abs/2608.19583) · 访问方式：论文入口；发布状态待核验

- **VideoArgus-Bench** · 2026
  统一视频生成与编辑评测的冻结 rubric 数据集。
  `机器人 / 具身智能` · `RGB 视频` · `文本` · `仿真状态`
  [论文](https://arxiv.org/abs/2608.05485) · [主页](https://zzzmyyzeng.github.io/VideoArgus) · 访问方式：提供官方项目和论文入口

- **ViewBench** · 2026
  用于评测相机条件长时视频世界模型视角一致性和闭环回访一致性的数据集与诊断基准。
  `游戏 / 虚拟环境` · `RGB 视频` · `深度` · `相机位姿`
  [主页](https://huggingface.co/datasets/JEdward/viewbench-dataset) · [论文](https://arxiv.org/abs/2602.07854) · [代码](https://github.com/jedward225/viewbench-dataset) · 访问方式：训练划分已在 Hugging Face 和 ModelScope 提供

- **VLAC-Cut Benchmark** · 2026
  对机器人回放视频进行非单调进度估计和失败恢复分段的过程级轨迹基准。
  `机器人 / 具身智能` · `RGB 视频` · `语言` · `奖励` · `动作`
  [主页](https://huggingface.co/datasets/InternRobotics/VLAC-Cut-Benchmark) · [代码](https://github.com/InternRobotics/VLAC-Cut) · 访问方式：基准和完整数据已在 Hugging Face 提供

- **WBench** · 2026
  评测交互式视频世界模型多轮动作响应、视觉质量和长期一致性的综合基准。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `文本`
  [主页](https://huggingface.co/datasets/meituan-longcat/WBench) · [代码](https://github.com/meituan-longcat/WBench) · 访问方式：数据集已在 Hugging Face 提供

- **WorldArena** · 2026
  评测动作条件机器人世界模型和数据引擎能力的公开排行榜与基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://huggingface.co/spaces/WorldArena/WorldArena) · [论文](https://arxiv.org/abs/2607.29302) · [代码](https://github.com/boundless-large-model/boundless-world-model) · 访问方式：提供官方项目和代码入口

- **WorldMark** · 2026
  覆盖多视角和多领域动作序列的交互式视频世界模型统一评测套件。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `相机位姿`
  [主页](https://alayalab.github.io/WorldMark/) · [论文](https://arxiv.org/abs/2604.21686) · [代码](https://github.com/AlayaLab/WorldMark) · 访问方式：官方提示、动作序列和评测代码可用

- **WRBench** · 2026
  诊断相机运动过程中视频世界模型是否保持持久世界状态的相机可控生成基准。
  `游戏 / 虚拟环境` · `RGB 视频` · `相机位姿` · `文本`
  [主页](https://jinplu.github.io/WRBench/) · [论文](https://arxiv.org/abs/2606.20545) · [代码](https://github.com/JinPLu/WRBench) · 访问方式：Hugging Face 提供数据、评测产物和排行榜

- **BEAR** · 2025
  评测多模态模型原子级具身能力的基准。
  `机器人 / 具身智能` · `RGB 视频` · `语言` · `动作`
  [代码](https://github.com/yqi19/BEAR-official) · 访问方式：官方仓库和基准资源可用

- **DriveAction** · 2025
  基于真实驾驶操作标注的人类式驾驶决策问答基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2506.05667) · 访问方式：论文入口；发布状态待核验

- **EmbodiedBench** · 2025
  跨导航、操作、ALFRED 和 Habitat 环境评测多模态模型作为具身智能体能力的综合基准。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `语言` · `轨迹`
  [主页](https://embodiedbench.github.io/) · [论文](https://arxiv.org/abs/2502.09560) · [代码](https://github.com/EmbodiedBench/EmbodiedBench) · 访问方式：基准数据和生成轨迹已在 Hugging Face 提供

- **ENACT** · 2025
  从第一人称交互评测具身认知的前向与逆向世界建模基准，提供问答、回放和 HDF5 数据。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `RGB 视频` · `动作` · `物体状态` · `轨迹`
  [主页](https://huggingface.co/datasets/MLL-Lab/ENACT) · [代码](https://github.com/mll-lab-nu/ENACT) · 访问方式：ENACT 问答、HDF5、回放和分段数据可用

- **EXPRESS-Bench** · 2025
  评测具身问答智能体在连续视觉观察中记忆、定位和推理能力的基准。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB 视频` · `问答` · `语言` · `轨迹`
  [主页](https://hcplab-sysu.github.io/EXPRESS-Bench/) · [代码](https://github.com/HCPLab-SYSU/EXPRESS-Bench) · 访问方式：官方项目页和基准代码可用

- **Guardian FailCoT / RoboFail** · 2025
  机器人失败推理与 OOD 失败评测数据，包含规划失败、执行失败和子任务标注。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `语言` · `物体状态` · `动作标签`
  [主页](https://huggingface.co/datasets/paulpacaud/Guardian-FailCoT-OOD-datasets) · 访问方式：失败数据集已在 Hugging Face 提供

- **ManipBench** · 2025
  评测视觉语言模型低层机器人操作推理的基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2505.09698) · [主页](https://manipbench.github.io/) · 访问方式：论文入口；发布状态待核验

- **MMR** · 2025
  多目标、多粒度对象及部件推理分割数据集。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2503.13881) · 访问方式：论文入口；发布状态待核验

- **ORAD-3D** · 2025
  面向越野自动驾驶的多天气、多地形三维数据集，并包含越野世界模型和轨迹规划基准。
  `自动驾驶` · `RGB 视频` · `三维标注` · `轨迹` · `GPS / 惯性测量单元`
  [主页](https://modelscope.cn/datasets/Georgehhhh/ORAD-3D) · [论文](https://arxiv.org/abs/2510.16500) · [代码](https://github.com/chaytonmin/ORAD-3D-Dataset-For-Off-Road-AD) · 访问方式：已在 ModelScope 和百度云公开发布

- **Robo2VLM-1** · 2025
  从真实机器人轨迹生成的空间、目标和交互推理问答数据集。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2505.15517) · 访问方式：论文入口；发布状态待核验

- **RoboArena** · 2025
  分布式真机策略评测数据集，包含成功与失败回放、偏好反馈和动作状态日志。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `奖励` · `轨迹`
  [主页](https://robo-arena.github.io/) · [代码](https://huggingface.co/datasets/RoboArena/DataDump_07-17-2026) · 访问方式：评测回放和反馈已在 Hugging Face 提供

- **SimWorld Benchmark** · 2025
  仿真条件自动驾驶场景生成数据与评测基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2503.13952) · 访问方式：论文入口；发布状态待核验

- **STU** · 2025
  自动驾驶道路异常的相机与稠密三维激光雷达分割数据集。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2505.02148) · 访问方式：论文入口；发布状态待核验

- **WorldGym** · 2025
  使用动作条件世界模型进行真实机器人策略安全评测的环境。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `场景元数据`
  [论文](https://arxiv.org/abs/2506.00613) · 访问方式：论文入口；发布状态待核验

- **WoWBench** · 2025
  用于评测物理一致性和因果推理的机器人交互世界模型基准样本。
  `机器人 / 具身智能` · `物理 / 科学` · `RGB 视频` · `动作` · `机器人状态` · `文本`
  [主页](https://huggingface.co/datasets/WoW-world-model/WoW-1-Benchmark-Samples) · [代码](https://github.com/wow-world-model/wow-world-model) · 访问方式：WoW 基准样本已在 Hugging Face 公开

- **AeroVerse** · 2024
  面向无人机具身世界模型的综合基准套件，论文描述了真实与仿真的预训练数据、五类指令微调数据以及覆盖感知、推理、导航、规划和动作的评测。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB 视频` · `文本` · `智能体位姿` · `动作` · `问答`
  [论文](https://arxiv.org/abs/2408.15511) · 访问方式：仅有论文入口；数据发布和访问状态待核验

- **MMWorld** · 2024
  用于多学科、多维度视频世界理解评测的人工标注与合成数据集，覆盖解释、反事实思考和未来预测等能力。
  `物理 / 科学` · `第一人称 / 人类活动` · `RGB 视频` · `问答` · `文本`
  [主页](https://mmworld-bench.github.io/) · [论文](https://arxiv.org/abs/2406.08407) · [代码](https://github.com/UCSB-AI/MMWorld) · 访问方式：提供官方基准仓库和项目页

- **Perception Test** · 2023
  面向多模态模型的真实视频感知、记忆、物理和抽象推理评测集。
  `第一人称 / 人类活动` · `物理 / 科学` · `RGB 视频` · `音频` · `问答`
  [主页](https://github.com/deepmind/perception_test) · [论文](https://arxiv.org/abs/2305.13786) · 访问方式：官方基准

- **SceneReplica** · 2023
  用于复现真实机器人抓取与放置实验的标准化场景基准，提供 YCB 物体场景、RGB-D 元数据、抓取数据和仿真到真实环境的搭建工具。
  `机器人 / 具身智能` · `RGB-D` · `三维元数据` · `物体状态` · `动作`
  [主页](https://irvlutd.github.io/SceneReplica/) · [论文](https://arxiv.org/abs/2306.15620) · [代码](https://github.com/IRVLUTD/SceneReplica) · 访问方式：官方仓库提供场景、抓取和模型文件入口

- **SHIFT** · 2022
  覆盖天气、时间和交通变化的离散与连续域迁移合成驾驶数据集。
  `自动驾驶` · `RGB 视频` · `深度` · `光流` · `三维框` · `分割标注`
  [主页](https://www.vis.xyz/shift/) · [论文](https://arxiv.org/abs/2206.08367) · [代码](https://github.com/SysCV/shift-dev) · 访问方式：官方数据和代码

- **TAP-Vid** · 2022
  视频任意点跟踪基准，覆盖真实、运动捕捉和合成视频。
  `第一人称 / 人类活动` · `物理 / 科学` · `RGB 视频` · `轨迹` · `Occlusion Labels`
  [主页](https://deepmind-tapir.github.io/) · [论文](https://arxiv.org/abs/2211.03726) · [代码](https://github.com/google-deepmind/tapnet) · 访问方式：官方基准代码和数据

- **VIMA-Bench** · 2022
  多模态提示驱动的机器人操作任务与程序化评测基准。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `语言` · `物体元数据`
  [主页](https://vimalabs.github.io/) · [论文](https://arxiv.org/abs/2210.03094) · [代码](https://github.com/vimalabs/VIMA) · 访问方式：官方基准代码

- **Crafter** · 2021
  开放世界生存环境。
  `游戏 / 虚拟环境` · `RGB 视频` · `游戏状态` · `动作` · `奖励`
  [代码](https://github.com/danijar/crafter) · [论文](https://arxiv.org/abs/2109.06780) · 访问方式：开源环境

- **MiniHack** · 2021
  基于 NetHack 的可组合环境，用于研究规划、记忆和长期状态演化。
  `游戏 / 虚拟环境` · `游戏状态` · `动作` · `文本` · `奖励`
  [代码](https://github.com/facebookresearch/minihack) · [论文](https://arxiv.org/abs/2109.13202) · 访问方式：开源基准

- **bsuite** · 2020
  用于分析强化学习核心能力的可复现实验环境和轨迹基准。
  `游戏 / 虚拟环境` · `游戏状态` · `动作` · `奖励` · `轨迹`
  [代码](https://github.com/google-deepmind/bsuite) · [论文](https://arxiv.org/abs/1908.03568) · 访问方式：开源基准

- **CLEVRER** · 2020
  面向视频物理与因果推理的合成基准，通过碰撞和运动事件考察描述、解释、预测与反事实推理能力，尤其适合诊断模型是否学习到可组合的物理因果机制。
  `物理 / 科学` · `合成视频` · `物体元数据` · `轨迹` · `逻辑程序` · `问答`
  [主页](https://clevrer.csail.mit.edu/) · [论文](https://arxiv.org/abs/1910.01442) · 访问方式：开放下载

- **BOP Benchmark** · 2018
  统一的六维物体姿态估计基准，整合多个工业和日常物体数据集。
  `机器人 / 具身智能` · `RGB-D` · `三维网格` · `相机位姿`
  [主页](https://bop.felk.cvut.cz/) · [论文](https://arxiv.org/abs/1808.08319) · 访问方式：官方基准门户

- **Moving Symbols** · 2018
  专为评估视频预测模型表征能力设计的参数化合成数据集，通过可控的符号运动和组合变化检验模型是否学习到有语义的时序表示。
  `物理 / 科学` · `合成视频` · `物体状态` · `轨迹`
  [论文](https://arxiv.org/abs/1802.08936) · [代码](https://github.com/rszeto/moving-symbols) · 访问方式：官方代码和生成工具仓库

- **UCF-Crime** · 2018
  长时监控视频异常事件数据集。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签`
  [主页](https://www.crcv.ucf.edu/projects/real-world/) · [论文](https://arxiv.org/abs/1801.04264) · 访问方式：官方项目页

<!-- DATASET_CATALOG_END -->

## 贡献与修正

所有新增建议、资料修正和数据更新都请通过 GitHub Issue 提出。你可以推荐新数据集、报告元数据或链接错误、提出重新分类的建议，并附上相关官方来源。提交 Issue 时，请尽量提供官方链接、访问和许可信息、一级任务，以及中英文简介。

## 致谢

本项目参考了社区维护的世界模型资源，尤其是 [Awesome World Models](https://github.com/knightnemo/Awesome-World-Models)，并将重点放在数据集的发现、比较和选择上。
