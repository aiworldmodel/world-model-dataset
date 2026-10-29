# 2026-10-29 证据优先清理与来源审查

审查基线：提交 `f4311224621fe9ae2d35529d042b40580b8dd9f2` 的 391 条记录。本文取代同日 `dataset-audit-2026-10-29` 初筛中的临时结论；初筛文件保留作历史记录。

## 结论

原目录已出现收录范围扩大、资源类型混计和来源错配。本次按原项目的五项严格标准重新逐条判断，主目录仅展示有具体来源依据的资源。

| 处理 | 条数 | 含义 |
| --- | ---: | --- |
| 保留 | 266 | 有来源级依据，进入主目录 |
| 待核验 | 79 | 身份、时序结构或来源尚未解决，暂不进入主目录 |
| 越界归档 | 38 | 当前发布资源/协议不能满足严格条件 |
| 重复合并 | 8 | 归入已有身份，不单独计数 |
| 合计 | 391 | 每个原始 ID 均有且只有一个处理结果 |

保留项分为：122 数据集、44 评测集、81 生成环境/工具、13 聚合集合/注册表、6 派生数据/子集。266 是资源条目数，不能解释为 266 个独立采集且互不重叠的数据集。

## 审查方法与边界

- 逐条检查来源；对可访问的论文、官方项目页和仓库说明实际阅读，疑点进一步查数据结构、环境接口或版本关系。无法读取或仍不足以判断的来源保留未决状态。网络状态不作为收录证明。
- 保留项中 162 条以论文为主要依据，104 条以发布文档为主要依据。每条写明 C1–C5 条件、来源、位置、日期及具体理由。
- 本轮完成的是全部 391 条的来源审查与处置，不是全部 391 条审核通过。79 条未决项明确留在待核验队列。
- 未下载全部数据、未检验样本完整性、未运行全部生成器，也未逐项验证许可权限和下载资格。原有规模、机构、模态及许可等元数据除列出的修正外，不应视为本轮全部独立复核通过。
- 普通视频、静态资产、通用问答和模型标题不构成入选证据；相机/人体轨迹可满足 C3，但不得声称它们包含机器人电机动作或动态物体真实因果。
- 跟踪、插值和空间轨迹可用于预测研究，但需要重新规定因果划分，原生评测指标不能直接作为世界模型预测指标。

完整决策：[JSON](evidence-review-2026-10-29.json) · [CSV](evidence-review-2026-10-29.csv)。JSON 保存所有原始链接、访问结果、标题、时间及内容摘要哈希；正文全文缓存未公开。

## 已实施修正

- 主目录移出 125 条；原始记录原样保存在 [archived-records](archived-records/)，可根据新证据恢复。
- 移除或纠正 22 处错配/身份不明的链接。例如 Isaac Lab、BridgeData V2、LIBERO、RH20T 的旧论文链接指向无关研究。保留项改用已读取的官方说明作为依据，不猜测新的论文编号。
- DreamDojo 限定为 GR-1 后训练与评测数据；Kimodo 限定为 BONES-SEED 评测资源；WMBench 不再把 12,980 小时训练混合数据写成公开评测规模。
- Adroit 限定为已核实的交互环境；Lyft 改为 Motion Prediction Dataset；OmniEmbodied 按当前仓库使用 OmniEAR 名称。
- 官网和双语 README 展示资源类型、入选理由和来源；取消无量表星级；不再宣称全部开放下载。
- 构建强制检查证据字段、来源链接、类型、归档冲突及 ID/别名重复。机械检查不能代替人工来源判断。

## 重复项处理

| 原条目 | 归入 | 原因 |
| --- | --- | --- |
| primo-r1 | maniparena | The currently linked paper identifies ManipArena, not a distinct PRIMO-R1 dataset; merge this record into maniparena. |
| bridge-data | bridge-data-v2 | This record points to the same BridgeData V2 release and has an unrelated paper citation; preserve the earlier version under bridge-data-v2. |
| ego4d-forecasting | ego4d | Forecasting is a parent Ego4D task, not a separate acquisition; the supplied paper link is also unrelated bubbly-flow simulation. |
| ego4d-v2 | ego4d | A version of the same Ego4D parent corpus with the same paper/homepage; preserve version information on the parent record. |
| habitat-matterport-3d | hm3d | Same HM3D corpus and paper as hm3d; retain one canonical identity, with asset eligibility adjudicated separately. |
| physion2 | physion | This record is named Physion and cites the identical 2021 paper; no distinct release is substantiated by this record. Merge into physion. |
| epic-kitchens-55 | epic-kitchens-100 | EPIC-KITCHENS-100 extends and reannotates the same parent corpus; preserve 55-hour version history in the canonical record. |
| virtual-kitti | virtual-kitti-2 | Virtual KITTI 2 is the updated release of the same cloned sequence family; preserve original-version history on the canonical record. |

其中 HM3D 本身为静态资产，规范身份仍保留在归档中，不因合并而重新进入主目录。Physion2 的处理针对本仓库原条目（名称、2021 论文与 Physion 相同），不否认其他来源可能存在真正的后续版本。

## 越界归档

判定理由为英文审查说明，便于对照来源。待核验不代表资源不存在，也不代表永久排除。

| 原条目 | 判定依据 | 原记录 |
| --- | --- | --- |
| AbstainEQA | Released labels evaluate answerability and abstention over episode histories. The documented protocol does not target future-state prediction or world-model dynamics. [来源](https://raw.githubusercontent.com/gibrantaowu/AbstainEQA/HEAD/README.md) | [abstain-eqa](archived-records/abstain-eqa.json) |
| Complex-Scene Multi-Person Motion Forecasting | The cited paper introduces the OCSD prediction model and evaluates existing HiK and HOI-M3 data; it does not establish a separate dataset. [来源](https://arxiv.org/abs/2608.27039) | [multi-person-motion-forecasting](archived-records/multi-person-motion-forecasting.json) |
| EgoSafetyBench | The described protocol detects present hazards and misleading text in videos; it does not establish future-state prediction or a dedicated world-model protocol. [来源](https://arxiv.org/abs/2607.00218) | [egosafetybench](archived-records/egosafetybench.json) |
| EPIC-Bench | The paper specifies image-text-mask tuples for visual grounding, without temporal transitions or future-state targets. [来源](https://arxiv.org/abs/2605.17070) | [epic-bench](archived-records/epic-bench.json) |
| HandEdit | Static human-to-robot image-editing pairs do not encode temporal interaction outcomes. [来源](https://arxiv.org/abs/2608.12122) | [handedit](archived-records/handedit.json) |
| MILO HOI Benchmark | MILO is a single-image human-object reconstruction method evaluated on existing benchmarks, not an independently introduced trajectory dataset. [来源](https://arxiv.org/abs/2608.27407) | [milo-hoi](archived-records/milo-hoi.json) |
| Natural-Input Failure Discovery Benchmark | BasinLens is a failure-search method evaluated across existing benchmarks; the source does not establish the claimed separate reusable case dataset. [来源](https://arxiv.org/abs/2608.22421) | [basinlens-cases](archived-records/basinlens-cases.json) |
| Orbis-Tabletop | Existing record only substantiates tabletop scene assets; no verified temporal transition data or runnable rollout path. [来源](https://github.com/IntimeAI/Orbis-Tabletop) | [orbis-tabletop](archived-records/orbis-tabletop.json) |
| RoboStressBench | Evaluates visual recognition/reasoning under material, viewpoint, lighting and geometry stresses; no temporal transitions or dedicated world-model protocol established. [来源](https://arxiv.org/abs/2606.00828) | [robostressbench](archived-records/robostressbench.json) |
| RoboVista | Existing description establishes decision-point VQA, not action outcomes or future-state evaluation; restoration needs direct temporal evidence. [来源](https://berkeleyautomation.github.io/robovista/) | [robovista](archived-records/robovista.json) |
| Teaching Monster Challenge | The benchmark evaluates pedagogical video quality and learner adaptation, not world-state evolution. [来源](https://arxiv.org/abs/2608.08852) | [teaching-monster](archived-records/teaching-monster.json) |
| TransBiolab | Calibrated multi-view scans target segmentation, depth and static 6D pose; no object-state transitions or predictive protocol established. [来源](https://arxiv.org/abs/2607.21071) | [transbiolab](archived-records/transbiolab.json) |
| VideoArgus-Bench | Generic video generation/editing quality and instruction adherence do not establish dedicated world-model dynamics evaluation. [来源](https://arxiv.org/abs/2608.05485) | [videoargus-bench](archived-records/videoargus-bench.json) |
| AirCopBench | Official README describes multi-view images and VQA under perception degradation; no temporal state transitions or predictive protocol established. [来源](https://github.com/zhajirong/AirCopBench) | [aircopbench](archived-records/aircopbench.json) |
| DriveAction | Scenario QA predicts discrete driving decisions; action labels without resulting temporal state transitions do not meet the scope. [来源](https://arxiv.org/abs/2506.05667) | [driveaction](archived-records/driveaction.json) |
| MMR | Object/part reasoning segmentation does not establish temporal transitions or future-state prediction. [来源](https://arxiv.org/abs/2503.13881) | [mmr-reasoning](archived-records/mmr-reasoning.json) |
| Open3D-VQA | Official README describes single-image spatial-relation QA, not temporal evolution or action consequences. [来源](https://github.com/EmbodiedCity/Open3D-VQA.code) | [open3d-vqa](archived-records/open3d-vqa.json) |
| OpenS2V-Nexus | Subject identity, naturalness and prompt relevance evaluation do not establish a world-state prediction or physical dynamics protocol. [来源](https://arxiv.org/abs/2505.20292) | [opens2v-nexus](archived-records/opens2v-nexus.json) |
| Robo2VLM-1 | Robot trajectories are converted into phase images and multiple-choice spatial/goal questions; upstream trajectories do not make the derived static QA a new dynamics dataset. [来源](https://arxiv.org/abs/2505.15517) | [robo2vlm-1](archived-records/robo2vlm-1.json) |
| SHREC | Social-error and competency video annotations do not establish future world-state prediction or causal rollout evaluation. [来源](https://github.com/mitmedialab/SHREC) | [shrec](archived-records/shrec.json) |
| WorldGym | The cited source introduces a learned simulator method; no separate reusable dataset release is established by the supplied entry. [来源](https://arxiv.org/abs/2506.00613) | [worldgym](archived-records/worldgym.json) |
| EmbodiedScan | The release and benchmark target static scene-level perception, boxes, occupancy and grounding; multiple views alone do not establish dynamics. [来源](https://arxiv.org/abs/2312.16170) | [embodiedscan](archived-records/embodiedscan.json) |
| Objaverse | Object meshes, captions and optional animations do not establish a standardized dynamics/interaction dataset or a qualifying prediction protocol. [来源](https://arxiv.org/abs/2212.08051) | [objaverse](archived-records/objaverse.json) |
| SceneReplica | Replicable pick-and-place scene definitions and success evaluation do not establish a released transition dataset or trajectory generator. [来源](https://arxiv.org/abs/2306.15620) | [scenereplica](archived-records/scenereplica.json) |
| Habitat-Matterport 3D (HM3D) | The standalone release consists of textured static building meshes. Habitat is the interactive generation path; assets are dependencies, not separate transition datasets. [来源](https://arxiv.org/abs/2109.08238) | [hm3d](archived-records/hm3d.json) |
| EGAD! | Generated object shapes and grasp difficulty labels do not encode action-result trajectories. [来源](https://arxiv.org/abs/2003.01314) | [egad](archived-records/egad.json) |
| GraspNet-1Billion | RGB-D scenes and analytic grasp-pose success labels are static affordance data, not executed action-result trajectories. [来源](https://arxiv.org/abs/1912.13470) | [graspnet-1billion](archived-records/graspnet-1billion.json) |
| HOPE Object Pose Dataset | Current record is static pose perception and has an unrelated PDE paper link; no qualifying temporal evidence. [来源](https://arxiv.org/abs/2003.09111) | [hope-object-pose](archived-records/hope-object-pose.json) |
| ContactDB | The record describes static contact maps, not transition trajectories; its supplied paper also resolves to unrelated enclosing-ball geometry. [来源](https://arxiv.org/abs/1904.03796) | [contactdb](archived-records/contactdb.json) |
| Kinetics-700 | Source establishes an action-classification extension; no direct predictive protocol or temporal state supervision is supplied by this record. [来源](https://arxiv.org/abs/1907.06987) | [kinetics-700](archived-records/kinetics-700.json) |
| Replica | Standalone static scene meshes/textures are simulation dependencies, not state-transition data; the interactive generator belongs under Habitat/SoundSpaces. [来源](https://arxiv.org/abs/1906.05797) | [replica](archived-records/replica.json) |
| SocNav1 | The documented target is social acceptability of a robot at a particular position, not state-transition or future-trajectory supervision. [来源](https://arxiv.org/abs/1909.02993) | [socnav1](archived-records/socnav1.json) |
| BOP Benchmark | Single-RGB-D-image 6D object pose evaluation does not meet temporal or world-model-specific criteria. [来源](https://arxiv.org/abs/1808.08319) | [bop](archived-records/bop.json) |
| Charades-Ego | Activity classification/localization/captioning and paired viewpoints do not establish a direct prediction or physical-transition protocol. [来源](https://arxiv.org/abs/1804.09626) | [charades-ego](archived-records/charades-ego.json) |
| UCF-Crime | Weakly supervised anomaly detection/localization does not establish future-state targets; video content alone is insufficient. [来源](https://arxiv.org/abs/1801.04264) | [ucf-crime](archived-records/ucf-crime.json) |
| YouTube-VOS | Native task is video-object segmentation; no forecasting/counterfactual protocol is established by the current record. [来源](https://arxiv.org/abs/1809.03327) | [youtube-vos](archived-records/youtube-vos.json) |
| Matterport3D | Static panoramic scene capture and reconstruction are simulation dependencies, not independently recorded state transitions. [来源](https://arxiv.org/abs/1709.06158) | [matterport3d](archived-records/matterport3d.json) |
| UCF101 | The supplied primary paper establishes action classification only. Video clips alone do not establish a world-model transition, forecasting or physical-rollout protocol. [来源](https://arxiv.org/abs/1212.0402) | [ucf101](archived-records/ucf101.json) |

## 待核验队列

判定理由为英文审查说明，便于对照来源。待核验不代表资源不存在，也不代表永久排除。

| 原条目 | 判定依据 | 原记录 |
| --- | --- | --- |
| AgiBot World 2026 | Homepage is a JavaScript shell and the dataset card could not be read; version-specific content is not verified. [来源](https://agibot-world.com) | [agibot-world-2026](archived-records/agibot-world-2026.json) |
| ESPIRE | Execution is mentioned, but sequential state/action observations or an exportable rollout path need confirmation before main-catalog inclusion. [来源](https://github.com/spatigen/espire) | [espire](archived-records/espire.json) |
| GeoCon-Bench | The source measures cross-frame geometry as a video-quality proxy; direct world-model evaluation scope and predictive targets need clarification. [来源](https://arxiv.org/abs/2608.09594) | [geocon-bench](archived-records/geocon-bench.json) |
| PersonaShot | Narrative and cinematic continuity are evaluated; identify a dedicated future-state or world-model protocol before main-catalog inclusion. [来源](https://arxiv.org/abs/2608.16717) | [personashot](archived-records/personashot.json) |
| PhyCheck | Physical-law video QA is documented, but predictive/counterfactual targets or dedicated world-model evaluation are not established by the abstract. [来源](https://arxiv.org/abs/2608.02150) | [phycheck](archived-records/phycheck.json) |
| REBOOT26 Recovery Trajectories | No readable primary release source retrieved. [来源](https://huggingface.co/REBOOT26) | [reboot26](archived-records/reboot26.json) |
| Robo-ValueRL | Dataset card retrieval failed; temporal schema and release identity remain unverified. [来源](https://huggingface.co/datasets/X-Humanoid/Robo-ValueRL) | [robo-valuerl](archived-records/robo-valuerl.json) |
| RoboReward | Dataset card retrieval failed; temporal schema and release identity remain unverified. [来源](https://huggingface.co/datasets/teetone/RoboReward) | [roboreward](archived-records/roboreward.json) |
| Scaling Laws for Motion Corpus | Commercial research blog describes internal motion training data; no identifiable public dataset or reproducible generation release established. [来源](https://getcartwheel.com/blog/scaling-laws) | [scaling-laws-motion](archived-records/scaling-laws-motion.json) |
| Sci-VBench | Broad scientific video generation includes nonphysical domains; an explicitly bounded dynamics/causal prediction subset needs verification. [来源](https://arxiv.org/abs/2608.09873) | [sci-vbench](archived-records/sci-vbench.json) |
| SpatialCrafter Benchmark | The paper identifies 115K explorable scenes, but static scene reconstruction alone does not establish released transitions or a runnable trajectory generator. [来源](https://arxiv.org/abs/2608.27073) | [spatialcrafter-benchmark](archived-records/spatialcrafter-benchmark.json) |
| STONE Dataset | Synchronized sensors and trajectory-guided traversability labeling are described; released ordered pose/observation trajectories need schema confirmation. [来源](https://konyul.github.io/STONE-dataset/) | [stone-dataset](archived-records/stone-dataset.json) |
| VBVR-Pro | Procedural visual reasoning tasks are described; identify which released tasks evaluate state evolution rather than static visual problem solving. [来源](https://arxiv.org/abs/2608.26105) | [vbvr-pro](archived-records/vbvr-pro.json) |
| VGI-Bench | The abstract demands valid evolving processes, but the specific physical/predictive protocol and data fields need review. [来源](https://arxiv.org/abs/2608.19583) | [vgi-bench](archived-records/vgi-bench.json) |
| ViTacWorld | A world-model method trained on existing tactile data is not itself a dataset; a distinct released trajectory corpus or generation path needs confirmation. [来源](https://arxiv.org/abs/2607.22530) | [vitacworld](archived-records/vitacworld.json) |
| VLA-REPLICA | Robot control setup is documented; verify that the named SFT release exposes aligned temporal trajectories. [来源](https://github.com/IRVLUTD/VLAReplica) | [vla-replica](archived-records/vla-replica.json) |
| WorldArena | The linked paper now identifies BWM, a simulator method; it does not substantiate the catalog identity WorldArena. [来源](https://arxiv.org/abs/2607.29302) | [worldarena](archived-records/worldarena.json) |
| BEAR | Embodied skill QA alone is insufficient; inspect released tasks for explicit transition prediction. [来源](https://github.com/yqi19/BEAR-official) | [bear-benchmark](archived-records/bear-benchmark.json) |
| Dopamine-Reward / GRM Dataset | No readable dataset card retrieved; temporal schema remains unverified. [来源](https://huggingface.co/datasets/tanhuajie2001/Robo-Dopamine-GRM-Dataset) | [dopamine-reward-grm](archived-records/dopamine-reward-grm.json) |
| EMMOE | Installation alone does not verify an identifiable trajectory-generation or released data path. [来源](https://github.com/silence143/EMMOE) | [emmoe](archived-records/emmoe.json) |
| Guardian FailCoT / RoboFail | No readable primary release source retrieved. [来源](https://huggingface.co/datasets/paulpacaud/Guardian-FailCoT-OOD-datasets) | [guardian-failcot-robofail](archived-records/guardian-failcot-robofail.json) |
| ManipBench | Low-level manipulation reasoning is documented, but action-result transitions or predictive targets are not established by the abstract. [来源](https://arxiv.org/abs/2505.09698) | [manipbench](archived-records/manipbench.json) |
| MineInsight | Newly read README exposes ROS2 sequences and ground-truth sections; inspect whether these provide qualifying trajectories before restoring the excluded record. [来源](https://github.com/mariomlz99/MineInsight) | [mineinsight](archived-records/mineinsight.json) |
| Multimodal AMR Dataset | Perception keyframes have up to three preceding frames, but ordered scene dynamics or a prediction protocol need verification; synchronization alone is insufficient. [来源](https://github.com/SEW-Eurodrive-Open-Source/Multimodal_AMR_dataset) | [multimodal-amr](archived-records/multimodal-amr.json) |
| NextBestPath | NextBestPath is the method; AiMDoom is the introduced benchmark. Confirm interactive rollout generation and correct the resource identity. [来源](https://shiyao-li.github.io/nbp/) | [nextbestpath](archived-records/nextbestpath.json) |
| NVIDIA Physical AI Autonomous Vehicles Dataset | Official dataset identity and gated license are confirmed; inspect temporal sensor and ego-state schema. [来源](https://github.com/NVlabs/physical_ai_av) | [nvidia-physical-ai-av](archived-records/nvidia-physical-ai-av.json) |
| RadarRGBD | The paper establishes multi-sensor perception and depth estimation; temporal dynamics or prediction targets are not yet substantiated. [来源](https://arxiv.org/abs/2505.15860) | [radarrgbd](archived-records/radarrgbd.json) |
| RoboArena | No readable primary release source retrieved. [来源](https://robo-arena.github.io/) | [roboarena](archived-records/roboarena.json) |
| RoboGround Data | The abstract identifies simulated data but does not distinguish grounding masks from action-aligned demonstrations; inspect the release schema. [来源](https://arxiv.org/abs/2504.21530) | [robo-ground-data](archived-records/robo-ground-data.json) |
| RoVI-Book | The method outputs action sequences, but verify whether the named released data consists of trajectories or static visual instructions. [来源](https://robotic-visual-instruction.github.io/) | [rovi-book](archived-records/rovi-book.json) |
| ROVR Open Dataset | Official README primarily describes depth/detection/segmentation; ordered sequence and pose availability are unverified. [来源](https://github.com/rovr-network/ROVR-Open-Dataset) | [rovr-open-dataset](archived-records/rovr-open-dataset.json) |
| SimWorld Benchmark | Simulator-conditioned image/scene generation needs verification of temporal trajectories or dedicated predictive evaluation. [来源](https://arxiv.org/abs/2503.13952) | [simworld-benchmark](archived-records/simworld-benchmark.json) |
| STU | The paper mentions sequential data despite a segmentation objective; inspect whether released sequences support dynamics before reinstating. [来源](https://arxiv.org/abs/2505.02148) | [stu](archived-records/stu.json) |
| TPT-Bench | ROS bags and long-term tracking are documented; inspect timestamped pose/person trajectories and avoid equating tracking with forecasting. [来源](https://github.com/MedlarTea/TPT-BENCH-TOOLS) | [tpt-bench](archived-records/tpt-bench.json) |
| UrbanVideo-Bench | Continuous-video navigation QA alone does not prove future-state prediction; inspect task definitions and released trajectories. [来源](https://github.com/EmbodiedCity/UrbanVideo-Bench.code) | [urbanvideo-bench](archived-records/urbanvideo-bench.json) |
| WoWBench | The repository introduction describes a model and its training data size; verify the separately named released benchmark samples/protocol. [来源](https://github.com/wow-world-model/wow-world-model) | [wowbench](archived-records/wowbench.json) |
| AeroVerse | Image-text and image-text-pose corpora alone are insufficient; inspect the world-model tasks and temporal structure. [来源](https://arxiv.org/abs/2408.15511) | [aeroverse](archived-records/aeroverse.json) |
| BRMData | Robot manipulation dataset identity confirmed; inspect action-aligned demonstration fields beyond the abstract introduction. [来源](https://arxiv.org/abs/2405.18860) | [brmdata](archived-records/brmdata.json) |
| ARMBench | Pick-and-place videos exist, but inspect whether released ordered outcomes meet the rule beyond object-centric perception labels. [来源](https://arxiv.org/abs/2303.16382) | [armbench](archived-records/armbench.json) |
| Austin MUTEX | No readable first-party TFDS source retrieved yet. [来源](https://www.tensorflow.org/datasets/catalog/utaustin_mutex) | [austin-mutex](archived-records/austin-mutex.json) |
| ScanNet++ | RGB-D scans and static scene reconstruction are documented; sequential pose/observation prediction scope needs explicit evidence. [来源](https://arxiv.org/abs/2308.11417) | [scannetpp](archived-records/scannetpp.json) |
| Assembly101 | The cited paper concerns electronic properties of cuprates; official assembly data must provide the correct citation and temporal evidence. [来源](https://arxiv.org/abs/2206.01063) | [assembly101](archived-records/assembly101.json) |
| Austin BUDS | No readable first-party TFDS source retrieved yet. [来源](https://www.tensorflow.org/datasets/catalog/austin_buds_dataset_converted_externally_to_rlds) | [austin-buds](archived-records/austin-buds.json) |
| Austin SAILOR | No readable first-party TFDS source retrieved yet. [来源](https://www.tensorflow.org/datasets/catalog/austin_sailor_dataset_converted_externally_to_rlds) | [austin-sailor](archived-records/austin-sailor.json) |
| H2O | The paper link concerns vector cross products; verify the human-hand-object sequence release through its official homepage. [来源](https://arxiv.org/abs/2206.13809) | [h2o](archived-records/h2o.json) |
| RT-1 Data | Inspect the actual released RT-1 trajectory dataset; training-data claims alone do not verify access or schema. [来源](https://arxiv.org/abs/2212.06817) | [robotics-transformer-rt1](archived-records/robotics-transformer-rt1.json) |
| SCAND | No readable primary source retrieved yet. [来源](https://people.cs.gmu.edu/~xiao/Research/SCAND/SCAND.html) | [scand](archived-records/scand.json) |
| SHIFT | Continuous domain shift does not itself mean world dynamics; inspect sequential observation/pose/object-state availability. [来源](https://arxiv.org/abs/2206.08367) | [shift](archived-records/shift.json) |
| VIOLA Robot Demonstrations | Verify the released robot demonstrations rather than treating the imitation-learning method as the data source. [来源](https://arxiv.org/abs/2210.11339) | [viola](archived-records/viola.json) |
| AIST++ | No readable primary source retrieved yet. [来源](https://google.github.io/aistplusplus_dataset/) | [aist-plus-plus](archived-records/aist-plus-plus.json) |
| ARKitScenes | Paper link resolves to NNSynth controller synthesis; official RGB-D sequence/pose availability must be checked separately. [来源](https://arxiv.org/abs/2111.08853) | [arkitscenes](archived-records/arkitscenes.json) |
| DexYCB | Static pose-estimation tasks do not alone qualify; verify ordered hand-object motion sequences in the actual release. [来源](https://arxiv.org/abs/2104.04631) | [dexycb](archived-records/dexycb.json) |
| Atari 100K Dataset | A 100K interaction budget is not itself a fixed dataset; the linked repository was unreadable and a distinct release is not established. [来源](https://github.com/mila-iqia/atari-dqn) | [atari-100k](archived-records/atari-100k.json) |
| CrowdBot Dataset | The paper link resolves to unrelated PTSD Twitter analysis; verify official robot/crowd trajectory data. [来源](https://arxiv.org/abs/2003.07433) | [crowdbot](archived-records/crowdbot.json) |
| Diving48 | The paper link is unrelated wildfire surveillance; official action-classification data needs a separate predictive-use justification. [来源](https://arxiv.org/abs/1903.11204) | [diving48](archived-records/diving48.json) |
| DoTA | Inspect released temporal agent/anomaly tracks and forecasting scope; anomaly classification alone does not qualify. | [dota-traffic-anomaly](archived-records/dota-traffic-anomaly.json) |
| InterHand2.6M | Single-frame pose-estimation annotations alone are insufficient; inspect the sequential release and timestamps before retaining motion use. [来源](https://arxiv.org/abs/2008.09309) | [interhand2m6m](archived-records/interhand2m6m.json) |
| RoboTHOR | Inspect the interactive observation/action API beyond the general sim-to-real motivation. [来源](https://arxiv.org/abs/2004.06799) | [robothor](archived-records/robothor.json) |
| DADA-2000 | Attention prediction is not future world-state prediction; inspect explicit accident anticipation targets before retaining. | [dada-2000](archived-records/dada-2000.json) |
| DPI-Net Particle Rollouts | Inspect executable particle-rollout generation commands and saved states, rather than the dynamics model alone. [来源](https://github.com/YunzhuLi/DPI-Net) | [dpi-net-rollouts](archived-records/dpi-net-rollouts.json) |
| Honda Research Institute Driving Dataset | The paper identifies HDD while the record links HAD and claims human-advice annotations. Untrimmed behavior-detection clips alone do not resolve the resource identity or establish the claimed state/control alignment. [来源](https://arxiv.org/abs/1811.02307) | [honda-had](archived-records/honda-had.json) |
| Oxford Radar RobotCar Dataset | The paper link is unrelated algebra; verify official synchronized radar/vehicle trajectory recordings. [来源](https://arxiv.org/abs/1909.01384) | [oxford-radar-robotcar](archived-records/oxford-radar-robotcar.json) |
| 40K Robotic Grasp Demonstrations | Successful grasp configurations are documented; verify full execution trajectories and resulting object states before retaining. [来源](https://arxiv.org/abs/1812.11683) | [robotic-grasp-40k](archived-records/robotic-grasp-40k.json) |
| Kinetics-600 | The supplied paper is unrelated image restoration; the action-classification collection needs a traceable predictive protocol for retention. [来源](https://arxiv.org/abs/1808.01316) | [kinetics-600](archived-records/kinetics-600.json) |
| Something-Something V2 | The linked paper describes video-prediction tasks but class labels are often used for recognition; verify the v2 temporal/predictive scope. [来源](https://arxiv.org/abs/1706.04261) | [something-something-v2](archived-records/something-something-v2.json) |
| World Models CarRacing Rollouts | No readable primary source retrieved yet. [来源](https://github.com/ctallec/world-models) | [world-models-carracing](archived-records/world-models-carracing.json) |
| MPI-INF-3DHP | Pose estimation alone does not qualify; inspect released continuous motion-capture sequences and temporal indexing. [来源](https://arxiv.org/abs/1611.09813) | [mpi-inf-3dhp](archived-records/mpi-inf-3dhp.json) |
| PyBullet | The paper link is unrelated optimization complexity; verify the physical simulation/control API from official sources. [来源](https://arxiv.org/abs/1705.04895) | [pybullet](archived-records/pybullet.json) |
| Cityscapes | Stereo videos exist, but verify the sequence/ego-motion or explicit prediction scope rather than rely on segmentation frames. [来源](https://www.cityscapes-dataset.com/) | [cityscapes](archived-records/cityscapes.json) |
| DAVIS | The paper link is unrelated gauge-field theory; verify official resource identity and a predictive protocol beyond segmentation. [来源](https://arxiv.org/abs/1604.00675) | [davis](archived-records/davis.json) |
| MiniGrid | The linked paper is plasma-accelerator research; verify the gridworld control interface on official sources. [来源](https://arxiv.org/abs/2010.02567) | [minigrid](archived-records/minigrid.json) |
| Oxford RobotCar | The paper link is unrelated gauge theory; verify official repeated driving sequences and pose measurements. [来源](https://arxiv.org/abs/1610.08265) | [oxford-robotcar](archived-records/oxford-robotcar.json) |
| Physical Prediction Dataset | The paper link describes classical confined particles, not the claimed video benchmark; establish resource identity from an official source. [来源](https://arxiv.org/abs/1608.04239) | [physical-prediction](archived-records/physical-prediction.json) |
| SYNTHIA | Static snapshots and video streams are mixed; verify a temporally indexed dynamic subset rather than include segmentation data generally. [来源](https://synthia-dataset.net/) | [synthia](archived-records/synthia.json) |
| YCB-Video | Per-frame object poses in camera videos do not prove object dynamics; inspect whether ordered camera/pose trajectories or prediction protocols satisfy the narrow scope. [来源](https://arxiv.org/abs/1711.00199) | [ycb-video](archived-records/ycb-video.json) |
| Moving MNIST | Inspect the moving-digit generation/prediction description beyond the model introduction. [来源](https://arxiv.org/abs/1502.04681) | [moving-mnist](archived-records/moving-mnist.json) |
| HMDB51 | No readable primary source retrieved; classification data alone does not establish direct evidence. [来源](https://serre-lab.clps.brown.edu/resource/hmdb-a-large-human-motion-database/) | [hmdb51](archived-records/hmdb51.json) |
| NGSIM | Inspect actual vehicle-trajectory fields and data availability beyond the program overview. [来源](https://ops.fhwa.dot.gov/trafficanalysistools/ngsim.htm) | [ngsim](archived-records/ngsim.json) |
| KTH Human Actions | No readable original source retrieved; verify the motion-prediction protocol rather than rely on action-class labels. [来源](https://www.csc.kth.se/cvap/actions/) | [kth-action](archived-records/kth-action.json) |

## 后续恢复规则

逐项解决身份和证据缺口；只在读取到时序字段、动作转移、物理结果或专门评测协议后恢复。每次恢复更新日期、理由和来源，保留旧决策记录。参见 [CATALOG_POLICY.md](../CATALOG_POLICY.md)。

## 验证记录

- 原始 391 个 ID 与保留/归档状态一一对应；125 份归档 JSON 与基线逐字段一致。
- 266 条活跃记录均通过证据字段检查；目录构建和前端语法检查通过，证据准入回归测试通过。
- 浏览器验证资源类型筛选、名称搜索、中英文切换和重置；发布状态以 Git 提交与线上实际数据为准。
