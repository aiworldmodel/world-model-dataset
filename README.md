# WorldModel Data Atlas

[English](./README.md) | [简体中文](./README.zh-CN.md)

_An evidence-first catalog of data resources for world-model research._

[![Live catalog](https://img.shields.io/badge/explore-live_catalog-2563eb)](https://aiworldmodel.github.io/world-model-dataset/)
[![Resources](https://img.shields.io/badge/resources-361-16a34a)](#dataset-catalog)
[![Primary tasks](https://img.shields.io/badge/primary_tasks-6-7c3aed)](#taxonomy)

[![website](images/cover.jpg)](https://aiworldmodel.github.io/world-model-dataset)

[Explore the website](https://aiworldmodel.github.io/world-model-dataset/) · [Browse datasets](#dataset-catalog) · [Contribute](#contributing-and-corrections)

---

## Overview

WorldModel Data Atlas helps researchers answer a practical question:

> Which dataset should I use to train or evaluate the world-model capability I care about?

Unlike chronological paper lists, this catalog organizes datasets by the world-model capability they primarily support. Domain, modality, structure, source, access, and licensing metadata provide additional context without duplicating datasets across sections.

The GitHub README is the browsable community catalog. The [interactive website](https://aiworldmodel.github.io/world-model-dataset/) adds search, filtering, bilingual display, and detailed comparisons.

## Why this catalog

- **Task-first organization** — start from the capability you want to train or evaluate
- **Research-oriented metadata** — compare modalities, scale, structure, source, access, and licensing
- **Bilingual content** — use the English or Chinese README and switch languages on the website
- **Curated resource links** — follow official homepages, papers, and code repositories
- **Evidence-aware notes** — understand both useful properties and important limitations
- **Reproducible maintenance** — generate the website and both README catalogs from one data source

This is a curated research resource, not a ranking. Detailed suitability notes on the website are more informative than a single aggregate score.

## Inclusion evidence

Every listed resource has a dated primary-source review establishing temporal state evolution, aligned controls, predictive trajectories, physical/counterfactual outcomes, or a dedicated world-model evaluation protocol. Static assets, generic perception/QA, model-only releases and unresolved candidates stay outside the main catalog. Read the [inclusion policy](CATALOG_POLICY.md) and [latest catalog audit](audit/full-review-361-2026-10-30.md).

Source review does not establish complete downloads, sample integrity or license permission. Paper-level evidence is labeled explicitly. Access conditions vary; not all resources are openly downloadable. Known collections and derived subsets can overlap.

## Catalog snapshot

| Reviewed resources | Primary tasks | Domains | Modalities |
| ---: | ---: | ---: | ---: |
| 361 | 6 | 6 | 46 |

Dataset: 204 · Benchmark: 48 · Generation environment / toolkit: 86 · Collection / registry: 13 · Derived data / subset: 10

These are resource counts, not counts of independent acquired datasets. Generators require data generation; benchmark and aggregate entries must not be summed into a corpus size.

## Taxonomy

Each dataset has exactly one primary task. Secondary uses and cross-cutting properties are represented as tags.

| Dimension | Question it answers | Examples |
| --- | --- | --- |
| **Primary task** | What capability does it mainly train or evaluate? | Prediction, action-conditioned dynamics, decision-making |
| **Domain** | In what kind of world was it collected? | Robotics, driving, games, physics |
| **Modality** | What signals are available? | Video, action, robot state, LiDAR, language |
| **Structure** | How are samples organized? | Temporal sequences, trajectories, interaction episodes |
| **Source** | How was the data produced? | Real-world, simulation, teleoperation, synthetic |

The six primary tasks are:

1. **Predictive & Generative Dynamics** — future observation or state prediction, video prediction, and long-horizon generation
2. **Action-Conditioned Dynamics** — learning how the world changes in response to an action
3. **Decision-Making & Agent Trajectories** — planning, control, imitation learning, offline RL, and agent behavior
4. **Spatial & Spatiotemporal World Modeling** — 3D/4D reconstruction, occupancy, scene flow, and dynamic spatial representations
5. **Physical & Causal Reasoning** — physical properties, interactions, interventions, and counterfactual reasoning
6. **World Model Evaluation & Diagnostics** — datasets primarily designed to measure model capabilities and failure modes

If only one use could be retained, the dataset's most distinctive world-model use becomes its primary task.

## Dataset catalog

Entries are grouped by primary task and sorted by year within each group. The README shows discovery-oriented metadata; the website provides scale, organizations, license notes, secondary tasks, data structure, source, and editorial guidance.

<!-- DATASET_CATALOG_START -->

[Predictive & Generative Dynamics (43)](#predictive-generative-dynamics) · [Action-Conditioned Dynamics (104)](#action-conditioned-dynamics) · [Decision-Making & Agent Trajectories (76)](#decision-making-agent-trajectories) · [Spatial & Spatiotemporal World Modeling (70)](#spatial-spatiotemporal-world-modeling) · [Physical & Causal Reasoning (28)](#physical-causal-reasoning) · [World Model Evaluation & Diagnostics (40)](#world-model-evaluation-diagnostics)

<a id="predictive-generative-dynamics"></a>

### Predictive & Generative Dynamics (43)

- **DenseReward Dataset** · 2026 · Dataset
  Simulated success and failure trajectories provide per-timestep manipulation states and dense reward supervision.
  `Robotics / Embodied AI` · `RGB Video` · `Language` · `Reward` · `Action Labels`
  [Homepage](https://dense-reward.github.io/) · [Code](https://github.com/dense-reward/DenseReward) · Access: Project announces a data release; current file access not verified
  Inclusion evidence C1: The project describes 27K simulated success/failure episodes with current and historical observations and per-timestep execution-state supervision. [Reviewed source](https://dense-reward.github.io/) · 2026-10-29

- **Game2World** · 2026 · Dataset
  A paired-video, in-the-wild clip, and UI-asset dataset for gameplay cleanup and world-model training.
  `Games / Virtual Environments` · `RGB Video`
  [Paper](https://arxiv.org/abs/2608.24680) · [Homepage](https://github.com/Dongping-Chen/Game2World) · Access: Official project and paper entries available
  Inclusion evidence C1: Official release identifies paired gameplay training videos with clean temporal references for world-model pretraining; the UI-removal benchmark is not a transition-accuracy evaluation. [Reviewed source](https://github.com/Dongping-Chen/Game2World) · 2026-10-29

- **Kimodo Motion Generation Benchmark (BONES-SEED)** · 2026 · Benchmark
  Motion-generation test cases, evaluation code and temporal text annotations based on BONES-SEED, distinct from the full 700-hour Kimodo training corpus.
  `Egocentric / Human` · `3D State` · `Language` · `Trajectories`
  [Homepage](https://research.nvidia.com/labs/sil/projects/kimodo/) · [Code](https://github.com/nv-tlabs/kimodo) · Access: Official benchmark and annotation entry points; download not tested
  Inclusion evidence C3: Retain the released BONES-SEED-based motion-generation benchmark and temporal annotations; the full 700-hour commercial training corpus is not the released dataset. [Reviewed source](https://github.com/nv-tlabs/kimodo) · 2026-10-29

- **Mini Moving Shapes** · 2026 · Generation environment / toolkit
  A synthetic multimodal next-state prediction dataset with discrete action controls and symbolic state descriptions for multi-step imagination rollouts.
  `Games / Virtual Environments` · `Physics / Science` · `Grayscale Video` · `Text` · `Action` · `Simulation State`
  [Code](https://github.com/andrew-jeremy/Spectral-World-Models) · Access: Dataset bundled in the official repository and regenerable by script
  Inclusion evidence C2: Bundled data.py generates moving shapes with discrete controls and next-image/text targets for multi-step rollout evaluation. [Reviewed source](https://github.com/andrew-jeremy/Spectral-World-Models) · 2026-10-29

- **Procgen Action-Conditioned World Model Dataset** · 2026 · Generation environment / toolkit
  Offline frames, actions, and termination signals generated from Procgen Atari environments for action-conditioned next-frame prediction and rollout evaluation.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Game State`
  [Code](https://github.com/Mayavan/world_model) · Access: Dataset generation code and rollout evaluation available
  Inclusion evidence C2: README supplies a CoinRun random-policy dataset-generation command and action-conditioned next-frame/multi-step evaluation. Community generator derived from Procgen. [Reviewed source](https://github.com/Mayavan/world_model) · 2026-10-29

- **TACO** · 2024 · Dataset
  A real bimanual tool-action-object interaction dataset with third-person and egocentric views, precise hand-object 3D meshes, and action labels for action recognition, motion forecasting, and cooperative grasp synthesis.
  `Egocentric / Human` · `Robotics / Embodied AI` · `Multi-view RGB Video` · `3D Mesh` · `Action Labels` · `Agent Pose` · `Object Metadata`
  [Homepage](https://taco2024.github.io/) · [Paper](https://arxiv.org/abs/2401.08399) · [Code](https://github.com/leolyliu/TACO-Instructions) · Access: Official project page provides dataset V1, pre-release data, paper, and code links
  Inclusion evidence C3: 2.5K human-object motion sequences pair ego/third-person views with precise time-varying hand-object 3D meshes. [Reviewed source](https://arxiv.org/abs/2401.08399) · 2026-10-29

- **The Well** · 2024 · Collection / registry
  Diverse spatiotemporal physics simulations with a common format and temporal-window interface for surrogate models.
  `Physics / Science` · `Simulation State`
  [Homepage](https://polymathic-ai.org/the_well/) · [Code](https://github.com/PolymathicAI/the_well) · Access: Official downloader and Hugging Face streaming
  Inclusion evidence C1: The official release collects numerical time-evolving physical simulations across 16 component datasets. Count the collection once, not all samples as independent sources. [Reviewed source](https://polymathic-ai.org/the_well/) · 2026-10-29

- **LagrangeBench** · 2023 · Benchmark
  Particle trajectories for Lagrangian fluid dynamics spanning 2D/3D flows, vortices, cavities, and dam breaks.
  `Physics / Science` · `Simulation State` · `Trajectories`
  [Code](https://github.com/tumaer/lagrangebench) · [Paper](https://arxiv.org/abs/2309.16342) · Access: Official Zenodo archives and automatic download/loaders
  Inclusion evidence C1: SPH fluid-particle datasets and temporal coarse-graining evaluate learned time-evolution surrogates. [Reviewed source](https://arxiv.org/abs/2309.16342) · 2026-10-29

- **BEAT** · 2022 · Dataset
  Speech/text-aligned 3D body, gesture, and facial-expression sequences with emotion and semantic-relevance annotations.
  `Egocentric / Human` · `Agent Pose` · `Audio` · `Text` · `Action Labels`
  [Homepage](https://pantomatrix.github.io/BEAT/) · [Paper](https://arxiv.org/abs/2203.05297) · Access: Official project and dataset release repository
  Inclusion evidence C3: Conversational motion capture is time-aligned with audio and frame-level semantic/emotional annotations; human motion, not robot action commands. [Reviewed source](https://arxiv.org/abs/2203.05297) · 2026-10-29

- **Ego4D** · 2022 · Dataset
  A large first-person video dataset of real human activities collected by Meta AI and an international academic consortium, with benchmarks for object interaction anticipation and long-term action forecasting.
  `Egocentric / Human` · `RGB Video` · `Audio` · `3D Mesh` · `Gaze` · `IMU`
  [Homepage](https://ego4d-data.org/) · [Paper](https://arxiv.org/abs/2110.07058) · [Code](https://github.com/facebookresearch/Ego4d) · Access: Application required
  Inclusion evidence C1: The parent corpus explicitly includes future-activity forecasting and interaction-state tasks. Merge v2 and forecasting aliases rather than count them separately. [Reviewed source](https://arxiv.org/abs/2110.07058) · 2026-10-29

- **HumanML3D** · 2022 · Derived data / subset
  Text-paired 3D human motion derived from AMASS and HumanAct12 with standard preprocessing and motion representations.
  `Egocentric / Human` · `Agent Pose` · `Trajectories` · `Language`
  [Code](https://github.com/EricGuo5513/HumanML3D) · Access: Official reconstruction scripts; obtain source data and body models separately
  Inclusion evidence C3: Text annotations pair with 20-fps 3D motion clips derived from AMASS/HumanAct12; not independent motion acquisition. [Reviewed source](https://github.com/EricGuo5513/HumanML3D) · 2026-10-29

- **Kubric** · 2022 · Generation environment / toolkit
  A pipeline for generating videos with exact 3D, optical-flow, depth, and segmentation annotations.
  `Physics / Science` · `Games / Virtual Environments` · `Synthetic Video` · `Depth` · `Optical Flow` · `Segmentation` · `3D State`
  [Homepage](https://kubric.readthedocs.io/) · [Paper](https://arxiv.org/abs/2203.03570) · [Code](https://github.com/google-research/kubric) · Access: Official generation toolkit
  Inclusion evidence C4: Official pipeline simulates multi-object physical interactions and renders annotated videos; MOVi is a generated output family. [Reviewed source](https://github.com/google-research/kubric) · 2026-10-29

- **PDEArena** · 2022 · Generation environment / toolkit
  Temporal PDE datasets and generators for surrogate modeling, including Navier-Stokes and shallow-water trajectories.
  `Physics / Science` · `Simulation State`
  [Homepage](https://pdearena.github.io/pdearena/data/) · [Code](https://github.com/pdearena/pdearena) · Access: Official dataset generation documentation and loaders
  Inclusion evidence C1: Official documentation gives executable Navier-Stokes trajectory generation commands and split definitions. [Reviewed source](https://pdearena.github.io/pdearena/data/) · 2026-10-29

- **PDEBench** · 2022 · Benchmark
  Time-dependent PDE solutions with varying initial conditions, boundaries, and physical parameters.
  `Physics / Science` · `Simulation State`
  [Code](https://github.com/pdebench/PDEBench) · [Paper](https://arxiv.org/abs/2210.07182) · Access: Official DaRUS datasets and generation/download scripts
  Inclusion evidence C1: Time-dependent PDE simulation data and code define future physical-state prediction benchmarks. [Reviewed source](https://arxiv.org/abs/2210.07182) · 2026-10-29

- **V-D4RL** · 2022 · Benchmark
  A pixel-trajectory dataset and benchmark for visual offline reinforcement learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Reward` · `Simulation State`
  [Code](https://github.com/conglu1997/v-d4rl) · [Paper](https://arxiv.org/abs/2206.04779) · Access: Public Google Drive data and open-source loaders
  Inclusion evidence C2: Offline continuous-control tasks pair visual observations with action interactions and test changing dynamics; derived from control-suite environments. [Reviewed source](https://arxiv.org/abs/2206.04779) · 2026-10-29

- **BABEL** · 2021 · Derived data / subset
  Action semantics and start/end annotations for continuous AMASS motion, exposing temporal structure between actions.
  `Egocentric / Human` · `Agent Pose` · `Trajectories` · `Language` · `Action Labels`
  [Homepage](https://babel.is.tue.mpg.de/data.html) · Access: Official annotation download; motion data obtained separately from AMASS
  Inclusion evidence C3: Frame/sequence annotations index underlying motion sequences; AMASS motion must be obtained separately and must not be counted as new acquisition. [Reviewed source](https://babel.is.tue.mpg.de/data.html) · 2026-10-29

- **BDD100K** · 2020 · Dataset
  A large driving-video dataset spanning cities, weather, and time of day, with annotations for detection, lanes, drivable areas, and tracking.
  `Autonomous Driving` · `RGB Video` · `2D Boxes` · `Segmentation` · `Lane Markings`
  [Homepage](https://bdd-data.berkeley.edu/) · [Paper](https://arxiv.org/abs/1805.04687) · [Code](https://github.com/bdd100k/bdd100k) · Access: Registration required
  Inclusion evidence C3: Official toolkit explicitly links driving videos to GPS/IMU trajectory information; the retained scope is sequential driving recordings, not isolated perception images. [Reviewed source](https://github.com/bdd100k/bdd100k) · 2026-10-29

- **EPIC-KITCHENS-100** · 2020 · Dataset
  A large first-person kitchen activity dataset with continuous video, action segments, verb-noun labels, and anticipation benchmarks for hand-object interaction.
  `Egocentric / Human` · `RGB Video` · `Audio` · `Action Labels` · `Language`
  [Homepage](https://epic-kitchens.github.io/2021) · [Paper](https://arxiv.org/abs/2006.13256) · [Code](https://github.com/epic-kitchens/epic-kitchens-100-annotations) · Access: Application / agreement required
  Inclusion evidence C1: Long unscripted action sequences include an explicit action-anticipation challenge; includes and extends EPIC-KITCHENS-55. [Reviewed source](https://arxiv.org/abs/2006.13256) · 2026-10-29

- **GRAB** · 2020 · Dataset
  Continuous 3D whole-body object interactions with body, hand, face, object-pose sequences and temporal contact information.
  `Egocentric / Human` · `Robotics / Embodied AI` · `Agent Pose` · `Object State` · `3D Mesh` · `Trajectories`
  [Homepage](https://grab.is.tue.mpg.de/) · Access: Registration and license acceptance required for official downloads
  Inclusion evidence C3: Whole-body grasping provides full human/object pose sequences and contact during interactions, not merely static grasps. [Reviewed source](https://grab.is.tue.mpg.de/) · 2026-10-29

- **Griddly** · 2020 · Generation environment / toolkit
  A configurable generator of 2D games and physics environments.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/Bam4d/Griddly) · Access: Open-source engine
  Inclusion evidence C2: Official grid-world engine exposes step-wise action histories and configurable interactions between objects. [Reviewed source](https://github.com/Bam4d/Griddly) · 2026-10-29

- **LAFAN1** · 2020 · Dataset
  High-quality BVH motion-capture sequences for transitions, in-betweening, and longer-horizon motion generation.
  `Egocentric / Human` · `Agent Pose` · `Trajectories`
  [Code](https://github.com/ubisoft/ubisoft-laforge-animation-dataset) · Access: Official Git LFS archive and transition evaluation code
  Inclusion evidence C3: Official motion-capture sequence release and motion-transition benchmarking support temporal pose modeling; interpolation differs from causal forecasting. [Reviewed source](https://github.com/ubisoft/ubisoft-laforge-animation-dataset) · 2026-10-29

- **Learning to Simulate / GNS Datasets** · 2020 · Dataset
  Multimaterial particle simulation trajectories with particle types, positions, and global context for next-step and rollout prediction.
  `Physics / Science` · `Simulation State` · `Trajectories`
  [Code](https://github.com/google-deepmind/deepmind-research/tree/master/learning_to_simulate) · [Paper](https://arxiv.org/abs/2002.09405) · Access: Official Google Cloud TFRecords and download script
  Inclusion evidence C4: Official learning_to_simulate release includes downloadable particle-dynamics datasets and explicit test trajectory rollout evaluation. [Reviewed source](https://github.com/google-deepmind/deepmind-research/tree/master/learning_to_simulate) · 2026-10-29

- **MeshGraphNets Simulation Datasets** · 2020 · Dataset
  Mesh simulation data for cloth, deforming solids, and fluids with node states, mesh structure, and train/validation/test splits.
  `Physics / Science` · `Simulation State` · `3D Mesh` · `Trajectories`
  [Homepage](https://sites.google.com/view/meshgraphnets/home) · [Code](https://github.com/google-deepmind/deepmind-research/tree/master/meshgraphnets) · [Paper](https://arxiv.org/abs/2010.03409) · Access: Official dataset downloader and metadata in DeepMind Research
  Inclusion evidence C4: Official release contains physical mesh simulation datasets, loaders, rollout evaluation and trajectory plotting for cloth and fluid systems. [Reviewed source](https://github.com/google-deepmind/deepmind-research/tree/master/meshgraphnets) · 2026-10-29

- **Procgen Benchmark** · 2020 · Generation environment / toolkit
  Procedurally generated visual RL environments with controllable actions, observations, and level-state trajectories.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/openai/procgen) · [Paper](https://arxiv.org/abs/1912.01588) · Access: Open-source environments
  Inclusion evidence C2: Sixteen procedurally generated game environments supply controlled interaction episodes; distinguish the base environments from derived rollout generators. [Reviewed source](https://arxiv.org/abs/1912.01588) · 2026-10-29

- **TrajNet++** · 2020 · Benchmark
  A unified benchmark and data format for pedestrian trajectory forecasting, integrating multiple crowd-trajectory sources to compare social-interaction modeling and multi-future prediction methods.
  `Egocentric / Human` · `Urban / 3D Scene` · `Trajectories` · `Agent Pose` · `Object Metadata`
  [Homepage](https://github.com/vita-epfl/trajnetplusplusbaselines) · Access: Official GitHub resources provide benchmark tooling and dataset preparation
  Inclusion evidence C3: Official interaction-centric pedestrian trajectories and a defined future-trajectory forecasting protocol provide direct evidence; underlying source datasets overlap other motion collections. [Reviewed source](https://github.com/vita-epfl/trajnetplusplusbaselines) · 2026-10-29

- **Virtual KITTI 2** · 2020 · Dataset
  A photorealistic synthetic driving-video dataset with depth, optical flow, scene flow, and 3D annotations.
  `Autonomous Driving` · `Games / Virtual Environments` · `Synthetic Video` · `Depth` · `Optical Flow` · `3D Boxes` · `Segmentation`
  [Homepage](https://europe.naverlabs.com/proxy-virtual-worlds-vkitti-2/) · [Paper](https://arxiv.org/abs/2001.10773) · Access: Official download
  Inclusion evidence C3: Cloned driving sequences provide camera poses, vehicle locations and scene flow over time; updated release overlaps Virtual KITTI. [Reviewed source](https://arxiv.org/abs/2001.10773) · 2026-10-29

- **AMASS** · 2019 · Collection / registry
  A unified 4D human-motion database combining 15 motion-capture datasets in a common SMPL representation for motion prediction, generation, and interaction modeling.
  `Egocentric / Human` · `3D State` · `Trajectories` · `Agent Pose`
  [Homepage](https://amass.is.tue.mpg.de/) · [Paper](https://arxiv.org/abs/1904.03278) · Access: Official project access; registration may be required
  Inclusion evidence C3: Unifies motion-capture sequences into a common parameterized human-body representation; source and derived motion datasets overlap. [Reviewed source](https://arxiv.org/abs/1904.03278) · 2026-10-29

- **Argoverse 1** · 2019 · Dataset
  An autonomous-driving dataset for 3D tracking and motion forecasting, combining trajectories, sensor logs, and HD maps for map-conditioned future prediction.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `Trajectories` · `3D Boxes`
  [Homepage](https://www.argoverse.org/av1.html) · [Paper](https://arxiv.org/abs/1911.02620) · [Code](https://github.com/argoverse/argoverse-api) · Access: Open download
  Inclusion evidence C3: Tracked agent trajectories with rich maps include a dedicated five-second motion-forecasting dataset and 3D tracking sequences. [Reviewed source](https://arxiv.org/abs/1911.02620) · 2026-10-29

- **D²-City** · 2019 · Dataset
  A large-scale dashcam video dataset spanning diverse weather, roads, and traffic conditions for urban driving dynamics and distribution generalization.
  `Autonomous Driving` · `Urban / 3D Scene` · `RGB Video` · `Semantic Labels` · `Trajectories`
  [Paper](https://arxiv.org/abs/1904.01975) · Access: Paper entry; official access requires verification
  Inclusion evidence C3: Per-frame object tracking annotations across 1,000 driving videos expose road-user motion; single-keyframe detection subsets are not the inclusion basis. [Reviewed source](https://arxiv.org/abs/1904.01975) · 2026-10-29

- **inD** · 2019 · Dataset
  A naturalistic road-user trajectory dataset recorded by drones at German urban intersections, covering vehicles, bicyclists, and pedestrians for urban interaction prediction and scenario-based safety validation.
  `Autonomous Driving` · `Urban / 3D Scene` · `Trajectories` · `Object Metadata` · `Agent Pose` · `Scene Metadata`
  [Homepage](https://levelxdata.com/ind-dataset/) · [Paper](https://arxiv.org/abs/1911.07602) · Access: Official leveLXData/inD request page; access requires agreeing to dataset terms
  Inclusion evidence C3: Naturalistic urban road-user trajectories are explicitly designed for motion prediction and scenario validation. [Reviewed source](https://arxiv.org/abs/1911.07602) · 2026-10-29

- **INTERACTION Dataset** · 2019 · Dataset
  A trajectory dataset focused on highly interactive driving scenarios such as intersections, roundabouts, and merging across multiple countries.
  `Autonomous Driving` · `Trajectories` · `Maps` · `Agent Pose`
  [Paper](https://arxiv.org/abs/1910.03088) · [Code](https://github.com/interaction-dataset/interaction-dataset) · Access: Open download
  Inclusion evidence C3: International interactive-driving motion trajectories with semantic maps support prediction, planning and behavior generation. [Reviewed source](https://arxiv.org/abs/1910.03088) · 2026-10-29

- **PREVENTION Dataset** · 2019 · Dataset
  A real autonomous-driving dataset for surrounding-vehicle intention and trajectory prediction, with front/back video, LiDAR, long- and short-range radar, RTK DGNSS, IMU, lane-change labels, detections, and trajectories.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `RADAR` · `GPS / IMU` · `Trajectories`
  [Homepage](https://prevention-dataset.uah.es/) · [Paper](https://doi.org/10.1109/ITSC.2019.8917433) · Access: Official website provides raw data, processed data, tools, and annotations
  Inclusion evidence C3: Official release includes a trajectory-prediction challenge and frame-indexed vehicle annotations with calibrated raw recordings. [Reviewed source](https://prevention-dataset.uah.es/) · 2026-10-29

- **3DPW** · 2018 · Dataset
  A real-world 3D human pose and motion video dataset with SMPL parameters and camera information.
  `Egocentric / Human` · `RGB Video` · `Agent Pose` · `Camera Pose`
  [Homepage](https://virtualhumans.mpi-inf.mpg.de/3DPW/) · Access: Official download
  Inclusion evidence C3: Official page provides per-frame camera poses and explicitly links a future human-trajectory and skeleton forecasting protocol. [Reviewed source](https://virtualhumans.mpi-inf.mpg.de/3DPW/) · 2026-10-29

- **highD** · 2018 · Dataset
  A naturalistic highway vehicle-trajectory dataset recorded by drones over German highways, with high-precision vehicle position, speed, acceleration, lane, class, size, and maneuver information.
  `Autonomous Driving` · `Trajectories` · `Object Metadata` · `Agent Pose` · `Scene Metadata`
  [Homepage](https://levelxdata.com/highd-dataset/) · [Paper](https://arxiv.org/abs/1810.05642) · Access: Official leveLXData/highD request page; access requires agreeing to dataset terms
  Inclusion evidence C3: Drone-recorded naturalistic highway vehicle trajectories explicitly support scenario reconstruction and motion modeling. [Reviewed source](https://arxiv.org/abs/1810.05642) · 2026-10-29

- **Kinetics-600 (Video Prediction Use)** · 2018 · Dataset
  Action videos used by Video Diffusion Models to predict eleven future frames conditioned on five frames.
  `Egocentric / Human` · `RGB Video`
  [Paper](https://arxiv.org/pdf/2204.03458) · Access: Paper documents the resource; complete download not tested
  Inclusion evidence C1: A published forward-prediction protocol conditions on five frames and predicts the next eleven. This justifies the prediction use of the video corpus, not treating action-category labels as motor commands. [Reviewed source](https://arxiv.org/pdf/2204.03458) · 2026-10-30

- **KIT Motion-Language** · 2016 · Collection / registry
  Continuous joint motions paired with natural-language descriptions and original motion-source metadata.
  `Egocentric / Human` · `Agent Pose` · `Trajectories` · `Language`
  [Homepage](https://motion-annotation.humanoids.kit.edu/dataset/) · [Paper](https://arxiv.org/abs/1607.03827) · Access: Official archive downloads and MMM/C3D parsing example
  Inclusion evidence C3: Human motion-capture sequences from multiple collections are unified and language-annotated; overlap underlying mocap/AMASS resources. [Reviewed source](https://arxiv.org/abs/1607.03827) · 2026-10-29

- **Stanford Drone Dataset** · 2016 · Dataset
  A multi-agent bird's-eye-view video dataset recorded over the Stanford campus, annotating pedestrians, bicyclists, skateboarders, cars, buses, and golf carts for tracking, social navigation, and trajectory forecasting.
  `Egocentric / Human` · `Urban / 3D Scene` · `RGB Video` · `Trajectories` · `2D Boxes` · `Action Labels` · `Object Metadata`
  [Homepage](https://cvgl.stanford.edu/projects/uav_data/) · [Paper](https://arxiv.org/abs/1601.00998) · Access: Official project page provides the Stanford Campus Dataset download
  Inclusion evidence C3: Drone-observed road users and pedestrians are explicitly evaluated through future-trajectory prediction in crowded scenes. [Reviewed source](https://arxiv.org/abs/1601.00998) · 2026-10-29

- **SYNTHIA-Seqs** · 2016 · Dataset
  Multi-view synthetic driving sequences contain moving pedestrians/cyclists and aligned depth for spatiotemporal modeling.
  `Autonomous Driving` · `Synthetic Video` · `Depth` · `Trajectories`
  [Paper](https://openaccess.thecvf.com/content_cvpr_2016/papers/Ros_The_SYNTHIA_Dataset_CVPR_2016_paper.pdf) · Access: Paper documents the resource; complete download not tested
  Inclusion evidence C1: SYNTHIA-Seqs provides four approximately 50,000-frame sequences with moving pedestrians/cyclists, aligned views and depth, explicitly intended for spatiotemporal modeling. The independent random-image subset is outside this entry's scope. [Reviewed source](https://openaccess.thecvf.com/content_cvpr_2016/papers/Ros_The_SYNTHIA_Dataset_CVPR_2016_paper.pdf) · 2026-10-30

- **ViZDoom** · 2016 · Generation environment / toolkit
  A Doom-based first-person visual RL environment with controllable actions and frame sequences.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Homepage](https://vizdoom.cs.put.poznan.pl/) · [Code](https://github.com/Farama-Foundation/ViZDoom) · [Paper](https://arxiv.org/abs/1605.02097) · Access: Open-source engine and scenarios
  Inclusion evidence C2: Customizable first-person Doom scenarios expose visual observations to bots executing actions; environment generator, not a fixed corpus. [Reviewed source](https://arxiv.org/abs/1605.02097) · 2026-10-29

- **Moving MNIST** · 2015 · Dataset
  Moving-digit video-prediction data with 20 frames in each released test sequence.
  `Physics / Science` · `Synthetic Video`
  [Homepage](https://www.tensorflow.org/datasets/catalog/moving_mnist) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C1: The released test split contains 10,000 ordered 20-frame digit-motion videos. Official documentation identifies the video-representation/prediction paper and distinguishes generated training sequences. [Reviewed source](https://www.tensorflow.org/datasets/catalog/moving_mnist) · 2026-10-30

- **Human3.6M** · 2014 · Dataset
  A large multi-view human motion dataset with synchronized video, 3D joints, camera parameters, and action labels, foundational for future-pose prediction.
  `Egocentric / Human` · `Multi-view RGB Video` · `3D State` · `Action Labels` · `Camera Pose`
  [Homepage](http://vision.imar.ro/human3.6m/description.php) · [Paper](https://ieeexplore.ieee.org/document/6682899) · Access: Registration / agreement required
  Inclusion evidence C3: Synchronized 50Hz multiview video and accurate 3D joint positions/angles expose human motion trajectories. [Reviewed source](http://vision.imar.ro/human3.6m/description.php) · 2026-10-29

- **UCF101 (Video Prediction Use)** · 2012 · Dataset
  Original action videos are explicitly evaluated for future-video prediction in a later continuous-video-flow paper.
  `Egocentric / Human` · `RGB Video`
  [Paper](https://arxiv.org/abs/2412.05633) · Access: Paper documents the resource; complete download not tested
  Inclusion evidence C1: The paper explicitly evaluates future-video prediction on UCF101. This later predictive protocol supplies evidence absent from the original classification paper; no action/state-control labels are claimed. [Reviewed source](https://arxiv.org/abs/2412.05633) · 2026-10-30

- **KTH (Video Prediction Use)** · 2004 · Dataset
  Human-action videos have an official PredRNN future-frame prediction training/evaluation path.
  `Egocentric / Human` · `RGB Video`
  [Code](https://raw.githubusercontent.com/thuml/predrnn-pytorch/master/README.md) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C1: The prediction authors release KTH data-loading/training scripts and evaluate generated future frames. Inclusion is restricted to the video-prediction use, not the original action-classification task. [Reviewed source](https://raw.githubusercontent.com/thuml/predrnn-pytorch/master/README.md) · 2026-10-30

<a id="action-conditioned-dynamics"></a>

### Action-Conditioned Dynamics (104)

- **kine2go** · 2026 · Dataset
  A dataset retargeting animal and quadruped motion capture into Unitree Go2 reference trajectories and policy rollouts.
  `Robotics / Embodied AI` · `Trajectories` · `Robot State` · `Action` · `RGB Video`
  [Homepage](https://nomagiclab.github.io/kine2go-pipeline/) · [Paper](https://arxiv.org/abs/2606.14433) · [Code](https://github.com/nomagiclab/kine2go-pipeline) · Access: Dataset artifacts available on Hugging Face
  Inclusion evidence C2: The dataset contains Go2-compatible kinematic trajectories with corresponding motor-level actions, collected from 40 policies. [Reviewed source](https://arxiv.org/abs/2606.14433) · 2026-10-29

- **KungFuAthleteBot Motion Dataset** · 2026 · Dataset
  A high-dynamics humanoid motion dataset extracted from martial-arts training videos, with ground and jumping motions retargeted to robots.
  `Robotics / Embodied AI` · `Egocentric / Human` · `RGB Video` · `Trajectories` · `Robot State`
  [Homepage](https://kungfuathletebot.github.io/) · [Paper](https://arxiv.org/abs/2602.13656) · [Code](https://github.com/NPCLEI/KungFuAthleteBot) · Access: Dataset available through Hugging Face and official download links
  Inclusion evidence C3: The paper explicitly introduces a high-dynamic human motion dataset and trajectory correction for robot motion learning; release access remains unverified. [Reviewed source](https://arxiv.org/abs/2602.13656) · 2026-10-29

- **Open Locomotion Skills Dataset** · 2026 · Generation environment / toolkit
  A unified dataset of locomotion trajectories, terrain metadata, and sim-to-real tools across legged robot morphologies.
  `Robotics / Embodied AI` · `Trajectories` · `Robot State` · `Action` · `Scene Metadata`
  [Homepage](https://kanishqgandharv219.github.io/open-locomotion-dataset/) · [Code](https://github.com/KanishqGandharv219/open-locomotion-dataset) · Access: Schema, ingestors, validation, and benchmark tools available
  Inclusion evidence C2: Official toolkit defines locomotion episode/trajectory schemas and a generate_trajectories API; generated and imported hardware data retain separate provenance. [Reviewed source](https://github.com/KanishqGandharv219/open-locomotion-dataset) · 2026-10-29

- **WildWorld** · 2026 · Dataset
  A large-scale action-conditioned game dataset for interactive generative world models, with explicit character state, camera pose, and depth annotations.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Depth` · `Camera Pose` · `Game State`
  [Homepage](https://alaya-studio.github.io/wildworld-project/) · [Paper](https://arxiv.org/abs/2603.23497) · [Code](https://github.com/AlayaLab/WildWorld) · Access: Part 1 available on Hugging Face; later parts are planned
  Inclusion evidence C2: Game rollouts expose explicit state with synchronized action labels across more than 108 million frames. [Reviewed source](https://arxiv.org/abs/2603.23497) · 2026-10-29

- **AiMDoom / NextBestPath Benchmark** · 2025 · Benchmark
  The active-mapping release provides AiMDoom scenes, a simulator and runnable planning evaluation.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Agent Pose` · `Maps`
  [Code](https://raw.githubusercontent.com/shiyao-li/NextBestPath/main/README.md) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C2: The release includes an active-mapping simulator, AiMDoom scenes and executable planning/evaluation. The resource is the AiMDoom benchmark and simulator, not the NextBestPath method alone. [Reviewed source](https://raw.githubusercontent.com/shiyao-li/NextBestPath/main/README.md) · 2026-10-30

- **BlueROV2 Dynamics Dataset** · 2025 · Dataset
  Underwater robot dynamics data with training scripts and learned and physics-based models.
  `Robotics / Embodied AI` · `Physics / Science` · `Action` · `Robot State` · `Trajectories`
  [Code](https://github.com/ViktorNfa/bluerov2_dynamics) · Access: Official datasets and training code available
  Inclusion evidence C2: Repository provides recorded/simulated underwater dynamics data and one-step and multi-step prediction evaluation with control-aware models. [Reviewed source](https://github.com/ViktorNfa/bluerov2_dynamics) · 2026-10-29

- **EMMOE-100 Interactive Benchmark** · 2025 · Benchmark
  EMMOE-100 provides tasks, high-level planning, low-level Habitat execution and success evaluation.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Agent Pose` · `Language`
  [Code](https://raw.githubusercontent.com/silence143/EMMOE/main/README.md) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C2: The release documents EMMOE-100 tasks and runnable high-level planning/low-level Habitat execution with saved results and success metrics. Inclusion covers the interactive benchmark. [Reviewed source](https://raw.githubusercontent.com/silence143/EMMOE/main/README.md) · 2026-10-30

- **MuJoCo Playground** · 2025 · Generation environment / toolkit
  An open-source MuJoCo MJX robot-learning suite for large-scale generation of contact-rich states, actions, and sensor trajectories.
  `Robotics / Embodied AI` · `Physics / Science` · `Simulation State` · `Action` · `Reward` · `RGB Video`
  [Code](https://github.com/google-deepmind/mujoco_playground) · [Paper](https://arxiv.org/abs/2502.08844) · Access: Open-source environments and training code
  Inclusion evidence C2: Released physics engine, batch renderer and robot training environments expose controlled state/pixel interactions; not a fixed recorded dataset. [Reviewed source](https://arxiv.org/abs/2502.08844) · 2026-10-29

- **Open-H-Embodiment** · 2025 · Collection / registry
  A community-driven open dataset initiative for generalist vision-language-action models in healthcare robotics.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Code](https://github.com/open-h/open-h-embodiment) · Access: Official project repository and contribution entry available
  Inclusion evidence C2: Official v1 release pairs healthcare-robot videos and kinematics; v2 uses a versioned LeRobot format. Do not count versions separately. [Reviewed source](https://github.com/open-h/open-h-embodiment) · 2026-10-29

- **PHUMA** · 2025 · Collection / registry
  A high-quality humanoid locomotion dataset constructed through physics-constrained filtering and motion retargeting.
  `Robotics / Embodied AI` · `Trajectories` · `Robot State` · `3D State`
  [Homepage](https://davian-robotics.github.io/PHUMA/) · [Paper](https://arxiv.org/abs/2510.26236) · [Code](https://github.com/DAVIAN-Robotics/PHUMA) · Access: Prebuilt dataset available through official download scripts and Hugging Face
  Inclusion evidence C3: Physics-curated and retargeted mocap/video motion produces a 73-hour humanoid trajectory corpus; overlaps source motion collections. [Reviewed source](https://arxiv.org/abs/2510.26236) · 2026-10-29

- **RoboAI UR5e Demonstrations** · 2025 · Dataset
  Scripted real-robot demonstrations provide seven-dimensional actions, action-normalization/absolute masks, RGB and 15-dimensional robot state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/robo_ai_u_r5e) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Scripted real-robot demonstrations provide seven-dimensional actions, action-normalization/absolute masks, RGB and 15-dimensional robot state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/robo_ai_u_r5e) · 2026-10-30

- **RoboGround Demonstration Data** · 2025 · Derived data / subset
  RoboCasa-based demonstrations pair images, robot state and time-indexed actions with language instructions.
  `Robotics / Embodied AI` · `Synthetic Video` · `Action` · `Robot State` · `Language`
  [Paper](https://arxiv.org/html/2504.21530v1) · Access: Paper documents the resource; complete download not tested
  Inclusion evidence C2: The paper reports 24K RoboCasa-based demonstrations with images, robot state and time-indexed action supervision, paired with 112K instructions. This scope is the demonstration data, not standalone grounding masks. [Reviewed source](https://arxiv.org/html/2504.21530v1) · 2026-10-30

- **RoboVerse** · 2025 · Generation environment / toolkit
  A scalable embodied resource unifying robot-learning simulation, task data, and evaluation protocols.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Robot State` · `Object State` · `Trajectories`
  [Homepage](https://roboverse.wiki/) · [Paper](https://arxiv.org/abs/2504.18904) · [Code](https://github.com/RoboVerseOrg/RoboVerse) · Access: Platform, tasks, and benchmark code publicly available
  Inclusion evidence C2: MetaSim exposes simulator initialization, physical stepping and shared interfaces; generated data is evaluated for world-model learning and policy learning. [Reviewed source](https://arxiv.org/abs/2504.18904) · 2026-10-29

- **BRMData** · 2024 · Dataset
  Bimanual mobile-manipulation HDF5 data align actions, multi-view images, joint position/velocity/effort and base velocity.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State`
  [Code](https://raw.githubusercontent.com/Louis-ZhangLe/BRMData/main/collect_data/collect_data.py) · [Homepage](https://embodiedrobot.github.io/BRMData.html) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C2: The HDF5 writer pairs timesteps with actions and stores multi-view images, 14-joint position/velocity/effort and base velocity. This establishes the action-aligned bimanual trajectory schema. [Reviewed source](https://raw.githubusercontent.com/Louis-ZhangLe/BRMData/main/collect_data/collect_data.py) · 2026-10-30

- **Conq Hose Manipulation** · 2024 · Dataset
  Mobile hose manipulation exposes seven-dimensional actions, three onboard camera views and 66-dimensional state.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/conq_hose_manipulation) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Mobile hose manipulation exposes seven-dimensional actions, three onboard camera views and 66-dimensional state. Steps are organized into episodes. The schema gives action/state dimensions without defining every component; do not infer their units. [Reviewed source](https://www.tensorflow.org/datasets/catalog/conq_hose_manipulation) · 2026-10-30

- **DrivingDojo** · 2024 · Dataset
  A video dataset tailored to interactive driving world models, covering driving maneuvers, multi-agent interplay, open-world knowledge, and an action-instruction-following benchmark.
  `Autonomous Driving` · `RGB Video` · `Action` · `Language` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2410.10738) · [Code](https://github.com/Robertwyq/Drivingdojo) · Access: Paper and official project repository available; dataset access terms require verification
  Inclusion evidence C2: Dataset explicitly targets interactive driving dynamics and an action-instruction-following benchmark for controlled future prediction. [Reviewed source](https://arxiv.org/abs/2410.10738) · 2026-10-29

- **Functional Manipulation Benchmark (FMB)** · 2024 · Dataset
  Multistage grasping, reorientation, and assembly demonstrations with four-view RGB-D, robot state, end-effector force/torque, and Cartesian actions.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Trajectories`
  [Homepage](https://functional-manipulation-benchmark.github.io/) · [Paper](https://arxiv.org/abs/2401.08553) · Access: Official NumPy trajectory archives and detailed data format
  Inclusion evidence C2: Official dataset page identifies 22,550 robot trajectories recorded from global and wrist cameras for multi-stage manipulation. [Reviewed source](https://functional-manipulation-benchmark.github.io/) · 2026-10-29

- **IO-AI RLDS Robot Data** · 2024 · Dataset
  The RLDS release has seven-dimensional actions, eight-dimensional state, multiple RGB views, depth and camera calibration.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/io_ai_tech) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: The RLDS release has seven-dimensional actions, eight-dimensional state, multiple RGB views, depth and camera calibration. Steps are organized into episodes. This entry describes the TFDS RLDS schema; the upstream IO Ultra conversion README describes a different, richer layout. [Reviewed source](https://www.tensorflow.org/datasets/catalog/io_ai_tech) · 2026-10-30

- **Isaac Lab** · 2024 · Generation environment / toolkit
  A GPU physics-simulation framework for robot learning that generates large-scale state-action trajectories.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Simulation State` · `Action` · `Reward`
  [Code](https://github.com/isaac-sim/IsaacLab) · Access: Open-source repository
  Inclusion evidence C2: Official framework provides robot sensors and ready-to-train simulated control environments. [Reviewed source](https://github.com/isaac-sim/IsaacLab) · 2026-10-29

- **Microsoft Bridge-Compatible Trajectories** · 2024 · Dataset
  Microsoft-collected WidowX trajectories provide seven-dimensional actions/state, multiple camera streams and per-episode modality-presence flags.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/bridge_data_msr) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Microsoft-collected WidowX trajectories provide seven-dimensional actions/state, multiple camera streams and per-episode modality-presence flags. Steps are organized into episodes. Collected at Microsoft in a Bridge-compatible format; this is not simply a renamed Berkeley BridgeData download. [Reviewed source](https://www.tensorflow.org/datasets/catalog/bridge_data_msr) · 2026-10-30

- **Mobile ALOHA Demonstrations** · 2024 · Dataset
  Whole-body teleoperated mobile bimanual demonstrations with vision, arm, and mobile-base states/actions.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State` · `Trajectories`
  [Homepage](https://mobile-aloha.github.io/) · [Code](https://github.com/MarkFzp/mobile-aloha) · Access: Official project links to demonstration datasets and replay tools
  Inclusion evidence C2: Whole-body teleoperation records mobile bimanual demonstrations and the project provides a datasets entry point. [Reviewed source](https://mobile-aloha.github.io/) · 2026-10-29

- **RetroAct Environment Annotations and Rollout Generator** · 2024 · Generation environment / toolkit
  Annotations and rollout-generation tools for 974 game environments used in action-conditioned world modeling; environment counts are not recorded-trajectory counts.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Simulation State` · `Camera Pose`
  [Homepage](https://nsavov.github.io/GenieRedux/) · [Code](https://github.com/insait-institute/GenieRedux) · Access: Official repository includes environment annotations, data-generation, training, and evaluation code
  Inclusion evidence C2: RetroAct annotates 974 game environments and the repository gives executable action-aligned dataset-generation commands. Environment annotations are not 974 independent trajectory datasets. [Reviewed source](https://github.com/insait-institute/GenieRedux) · 2026-10-29

- **RoboCasa** · 2024 · Generation environment / toolkit
  A large-scale simulation environment and task suite for household robot learning, with diverse kitchens, objects, language tasks, and generated visual-action trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Depth` · `Action` · `Robot State` · `Language`
  [Homepage](https://robocasa.ai/) · [Paper](https://arxiv.org/abs/2406.02523) · [Code](https://github.com/robocasa/robocasa) · Access: Open generation toolkit
  Inclusion evidence C2: Interactive kitchen simulation provides human demonstrations for controlled manipulation tasks; generation platform, with associated recorded demonstrations. [Reviewed source](https://arxiv.org/abs/2406.02523) · 2026-10-29

- **ALOHA / ACT Simulation Demonstrations** · 2023 · Dataset
  Official ACT bimanual simulation demonstrations for cube transfer and insertion, with scripted/human demos and recording tools.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Trajectories`
  [Code](https://github.com/tonyzhaozh/act) · [Homepage](https://tonyzhaozh.github.io/aloha/) · Access: Official simulated-demo archive and record_sim_episodes.py
  Inclusion evidence C2: README links scripted/human demonstrations for two controlled simulated tasks and identifies episode training and joint/EE-control environments. [Reviewed source](https://github.com/tonyzhaozh/act) · 2026-10-29

- **ASU Tabletop Manipulation** · 2023 · Dataset
  Tabletop manipulation contains seven-dimensional action/action_delta arrays, RGB, joint states and end-effector/object poses.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Object State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/asu_table_top_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Tabletop manipulation contains seven-dimensional action/action_delta arrays, RGB, joint states and end-effector/object poses. Steps are organized into episodes. The official seven-dimensional action description lists inconsistent components; verify the mapping before use. [Reviewed source](https://www.tensorflow.org/datasets/catalog/asu_table_top_converted_externally_to_rlds) · 2026-10-30

- **Berkeley AUTOLAB UR5** · 2023 · Dataset
  UR5 manipulation episodes provide stepwise translation/rotation/gripper actions, external and hand images, depth and 15-dimensional state.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/berkeley_autolab_ur5) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: UR5 manipulation episodes provide stepwise translation/rotation/gripper actions, external and hand images, depth and 15-dimensional state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/berkeley_autolab_ur5) · 2026-10-30

- **Berkeley Cable Routing** · 2023 · Dataset
  Cable-routing episodes align translation/rotation actions, four camera views and seven-dimensional robot state.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/berkeley_cable_routing) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Cable-routing episodes align translation/rotation actions, four camera views and seven-dimensional robot state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/berkeley_cable_routing) · 2026-10-30

- **Berkeley Fanuc Manipulation** · 2023 · Dataset
  Manipulation episodes contain six-dimensional pose-delta actions, external/wrist images, end-effector pose and joint states.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/berkeley_fanuc_manipulation) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Manipulation episodes contain six-dimensional pose-delta actions, external/wrist images, end-effector pose and joint states. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/berkeley_fanuc_manipulation) · 2026-10-30

- **Berkeley RPT Demonstrations** · 2023 · Dataset
  Pick/place episodes expose seven joint-delta commands plus a gripper command, wrist images and joint positions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/berkeley_rpt_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Pick/place episodes expose seven joint-delta commands plus a gripper command, wrist images and joint positions. Steps are organized into episodes. Robot naming differs between the overview and joint-field description; the displayed scope follows the numeric schema. [Reviewed source](https://www.tensorflow.org/datasets/catalog/berkeley_rpt_converted_externally_to_rlds) · 2026-10-30

- **CLVR Jaco Play** · 2023 · Dataset
  Tabletop pick/place episodes align translation/gripper actions with camera images, end-effector pose/velocity and joint state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/jaco_play) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Tabletop pick/place episodes align translation/gripper actions with camera images, end-effector pose/velocity and joint state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/jaco_play) · 2026-10-30

- **CMU Franka Exploration** · 2023 · Dataset
  Kitchen exploration episodes contain RGB, eight-dimensional actions and an additional structured affordance/control action.
  `Robotics / Embodied AI` · `RGB Video` · `Action`
  [Homepage](https://www.tensorflow.org/datasets/catalog/cmu_franka_exploration_dataset_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Kitchen exploration episodes contain RGB, eight-dimensional actions and an additional structured affordance/control action. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/cmu_franka_exploration_dataset_converted_externally_to_rlds) · 2026-10-30

- **CMU IAMLab Pickup and Insert** · 2023 · Dataset
  Picking/insertion episodes contain eight-dimensional pose/gripper actions, two cameras and a 20-dimensional joint/force state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/iamlab_cmu_pickup_insert_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Picking/insertion episodes contain eight-dimensional pose/gripper actions, two cameras and a 20-dimensional joint/force state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/iamlab_cmu_pickup_insert_converted_externally_to_rlds) · 2026-10-30

- **CMU PlayFusion Demonstrations** · 2023 · Dataset
  Kitchen play episodes contain nine-dimensional actions, RGB and eight-dimensional joint/gripper state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/cmu_play_fusion) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Kitchen play episodes contain nine-dimensional actions, RGB and eight-dimensional joint/gripper state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/cmu_play_fusion) · 2026-10-30

- **CMU Stretch Kitchen** · 2023 · Dataset
  Kitchen interaction episodes provide eight-dimensional end-effector/gripper/termination actions, RGB and four-dimensional state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/cmu_stretch) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Kitchen interaction episodes provide eight-dimensional end-effector/gripper/termination actions, RGB and four-dimensional state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/cmu_stretch) · 2026-10-30

- **Columbia Push-T Real** · 2023 · Dataset
  Real UR5 pushing episodes pair end-effector translation/rotation/gripper actions with external/wrist images and planar end-effector position.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/columbia_cairlab_pusht_real) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Real UR5 pushing episodes pair end-effector translation/rotation/gripper actions with external/wrist images and planar end-effector position. Steps are organized into episodes. Real UR5 recordings are distinct from the separately cataloged simulated Push-T archive. [Reviewed source](https://www.tensorflow.org/datasets/catalog/columbia_cairlab_pusht_real) · 2026-10-30

- **D3Fields Robot Demonstrations** · 2023 · Dataset
  Desk/utensil manipulation provides 3D displacement actions, four RGB-D camera views and 4-by-4 end-effector transforms.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/uiuc_d3field) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Desk/utensil manipulation provides 3D displacement actions, four RGB-D camera views and 4-by-4 end-effector transforms. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/uiuc_d3field) · 2026-10-30

- **DLR SARA Grid Clamp** · 2023 · Dataset
  Grid-clamp placement episodes provide seven-dimensional actions, RGB and 12-dimensional pose/wrench observations.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/dlr_sara_grid_clamp_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Grid-clamp placement episodes provide seven-dimensional actions, RGB and 12-dimensional pose/wrench observations. Steps are organized into episodes. The seven-dimensional action description documents only six pose components; verify the last component. [Reviewed source](https://www.tensorflow.org/datasets/catalog/dlr_sara_grid_clamp_converted_externally_to_rlds) · 2026-10-30

- **DLR SARA Pouring** · 2023 · Dataset
  Bottle-to-mug pouring episodes contain seven-dimensional actions, RGB and six-dimensional end-effector state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/dlr_sara_pour_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Bottle-to-mug pouring episodes contain seven-dimensional actions, RGB and six-dimensional end-effector state. Steps are organized into episodes. The action array has seven components but only six are described; the remaining component is unverified. [Reviewed source](https://www.tensorflow.org/datasets/catalog/dlr_sara_pour_converted_externally_to_rlds) · 2026-10-30

- **ETH Agent Affordances** · 2023 · Dataset
  Oven-opening trajectories contain six-dimensional end-effector velocities, object point clouds and state including the door angle.
  `Robotics / Embodied AI` · `3D State` · `Action` · `Robot State` · `Object State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/eth_agent_affordances) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Oven-opening trajectories contain six-dimensional end-effector velocities, object point clouds and state including the door angle. Steps are organized into episodes. The image field is explicitly zero-filled; the object point cloud describes the episode initial state. [Reviewed source](https://www.tensorflow.org/datasets/catalog/eth_agent_affordances) · 2026-10-30

- **FluidLab** · 2023 · Generation environment / toolkit
  Differentiable fluid manipulation benchmarks supporting interaction recording, saved control trajectories, and multi-material dynamics replay.
  `Robotics / Embodied AI` · `Physics / Science` · `Action` · `Simulation State` · `RGB Video`
  [Homepage](https://fluidlab2023.github.io/) · [Code](https://github.com/zhouxian/FluidLab) · Access: Official generation, trajectory saving and replay commands
  Inclusion evidence C2: Differentiable multi-material simulation defines controlled fluid-manipulation tasks and physical evolution; generation environment, not a fixed dataset. [Reviewed source](https://fluidlab2023.github.io/) · 2026-10-29

- **Homes of New York (Dobb-E)** · 2023 · Dataset
  Household demonstrations collected with a handheld Stick, with RGB-D video, 6D gripper poses, and opening-angle annotations.
  `Robotics / Embodied AI` · `Egocentric / Human` · `RGB-D` · `Action` · `Agent Pose` · `Trajectories`
  [Homepage](https://dobb-e.com/) · [Paper](https://arxiv.org/abs/2311.16098) · Access: Official RGB/actions and RGB-D/actions archives
  Inclusion evidence C2: The Stick records household manipulation demonstrations in 22 homes for policy transfer. Human handheld demonstrations, not robot-collected motor controls. [Reviewed source](https://arxiv.org/abs/2311.16098) · 2026-10-29

- **Imperial Sawyer Wrist Camera** · 2023 · Dataset
  Tabletop episodes align eight-dimensional motion/gripper/termination actions with wrist images and binary gripper state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/imperialcollege_sawyer_wrist_cam) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Tabletop episodes align eight-dimensional motion/gripper/termination actions with wrist images and binary gripper state. Steps are organized into episodes. The main-image and wrist-image fields represent the same view. [Reviewed source](https://www.tensorflow.org/datasets/catalog/imperialcollege_sawyer_wrist_cam) · 2026-10-30

- **KAIST Nonprehensile Manipulation** · 2023 · Dataset
  Nonprehensile episodes expose 20-dimensional pose/stiffness/damping actions, RGB, partial point clouds and 21-dimensional state.
  `Robotics / Embodied AI` · `RGB Video` · `3D State` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/kaist_nonprehensile_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Nonprehensile episodes expose 20-dimensional pose/stiffness/damping actions, RGB, partial point clouds and 21-dimensional state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/kaist_nonprehensile_converted_externally_to_rlds) · 2026-10-30

- **MimicPlay Robot Demonstrations** · 2023 · Dataset
  The robot portion contains seven-dimensional actions, two front views and a wrist view, end-effector pose and joint positions/velocities.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/mimic_play) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: The robot portion contains seven-dimensional actions, two front views and a wrist view, end-effector pose and joint positions/velocities. Steps are organized into episodes. Scope is the action-bearing robot portion; human-play videos are not automatically robot motor-command trajectories. [Reviewed source](https://www.tensorflow.org/datasets/catalog/mimic_play) · 2026-10-30

- **Minari Offline RL Datasets** · 2023 · Collection / registry
  A standardized offline-RL dataset library providing complete episodes with observations, actions, rewards, and termination signals.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `Simulation State` · `Action` · `Reward` · `Trajectories`
  [Homepage](https://minari.farama.org/) · [Code](https://github.com/Farama-Foundation/Minari) · Access: Open dataset registry and loaders
  Inclusion evidence C2: Offline-RL dataset registry provides episode sampling, trajectory filtering and generation; it includes migrated D4RL components and is not an independent corpus. [Reviewed source](https://minari.farama.org/) · 2026-10-29

- **Minigrid** · 2023 · Generation environment / toolkit
  Grid environments expose discrete actions, mission-conditioned observations and navigation/object state changes.
  `Games / Virtual Environments` · `Game State` · `Action` · `Reward`
  [Code](https://raw.githubusercontent.com/Farama-Foundation/Minigrid/main/README.md) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C2: Gymnasium environments provide discrete actions, mission-conditioned observations and state-changing navigation/object tasks. BabyAI is a related derived suite, not disjoint data. [Reviewed source](https://raw.githubusercontent.com/Farama-Foundation/Minigrid/main/README.md) · 2026-10-30

- **MUTEX Robot Demonstrations** · 2023 · Dataset
  Manipulation episodes with multimodal task descriptions, stepwise actions, two camera views and robot state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://www.tensorflow.org/datasets/catalog/utaustin_mutex) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C2: 1,500 episodes expose step-level actions, RGB/wrist images and 24-dimensional robot state. Modal task descriptions are not motor commands. [Reviewed source](https://www.tensorflow.org/datasets/catalog/utaustin_mutex) · 2026-10-30

- **NYU ROT Demonstrations** · 2023 · Dataset
  Short-horizon tabletop episodes provide seven-dimensional end-effector/gripper actions, RGB and seven-dimensional state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/nyu_rot_dataset_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Short-horizon tabletop episodes provide seven-dimensional end-effector/gripper actions, RGB and seven-dimensional state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/nyu_rot_dataset_converted_externally_to_rlds) · 2026-10-30

- **PLEX Robosuite Demonstrations** · 2023 · Dataset
  Simulation demonstrations expose seven-dimensional actions, two rendered views and 32-dimensional state for six manipulation tasks.
  `Robotics / Embodied AI` · `Synthetic Video` · `Action` · `Simulation State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/plex_robosuite) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Simulation demonstrations expose seven-dimensional actions, two rendered views and 32-dimensional state for six manipulation tasks. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/plex_robosuite) · 2026-10-30

- **Push-T Demonstrations** · 2023 · Dataset
  Planar T-block pushing demonstrations released with Diffusion Policy, containing sequential observations, states, and pushing actions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Object State` · `Trajectories`
  [Code](https://github.com/real-stanford/diffusion_policy) · [Paper](https://arxiv.org/abs/2303.04137) · Access: Official training archive and replay-buffer loaders
  Inclusion evidence C2: Official Diffusion Policy repository links Push-T training data, demonstration collection and task-specific rollout evaluation. [Reviewed source](https://github.com/real-stanford/diffusion_policy) · 2026-10-29

- **Race Against the Machine** · 2023 · Dataset
  Autonomous and piloted racing flights with control inputs, inertial measurements, images, and motion-capture states.
  `Robotics / Embodied AI` · `RGB Video` · `IMU` · `Action` · `Robot State` · `Trajectories`
  [Code](https://github.com/tii-racing/drone-racing-dataset) · [Paper](https://arxiv.org/abs/2311.02667) · Access: Official downloader scripts and flight format documentation
  Inclusion evidence C2: High-speed flight recordings pair visual/inertial/mocap streams with commands and control inputs. [Reviewed source](https://arxiv.org/abs/2311.02667) · 2026-10-29

- **RH20T** · 2023 · Dataset
  A real-world bimanual manipulation dataset with multiview RGB-D, force sensing, and robot state.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State`
  [Homepage](https://rh20t.github.io/) · [Code](https://github.com/rh20t/rh20t_api) · Access: Official project and download entry
  Inclusion evidence C2: Official release describes 110K+ manipulation sequences with synchronized visual, force, audio and action signals. [Reviewed source](https://rh20t.github.io/) · 2026-10-29

- **RoboCook** · 2023 · Dataset
  Real tool-mediated elastoplastic manipulation trajectories tracking evolving dough geometry.
  `Robotics / Embodied AI` · `Object State` · `Action` · `Trajectories`
  [Code](https://github.com/hshi74/robocook) · [Paper](https://arxiv.org/abs/2306.14447) · Access: Official repository links to data and trajectory-processing instructions
  Inclusion evidence C2: Official release provides tool-specific dynamics trajectories as per-frame HDF5 files and before/after object point clouds; distinguish real dynamics data from model-synthesized planning data. [Reviewed source](https://github.com/hshi74/robocook) · 2026-10-29

- **SayTap Locomotion Rollouts** · 2023 · Dataset
  A1 locomotion episodes contain 12 joint-position commands, 30-dimensional proprioception, desired velocity and foot-contact patterns.
  `Robotics / Embodied AI` · `Action` · `Robot State` · `Trajectories`
  [Homepage](https://www.tensorflow.org/datasets/catalog/utokyo_saytap_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: A1 locomotion episodes contain 12 joint-position commands, 30-dimensional proprioception, desired velocity and foot-contact patterns. Steps are organized into episodes. RGB fields are dummy placeholders, not recorded images. [Reviewed source](https://www.tensorflow.org/datasets/catalog/utokyo_saytap_converted_externally_to_rlds) · 2026-10-30

- **SPOC Simulation Trajectories** · 2023 · Dataset
  Navigation/manipulation episodes provide actions, two camera views, agent location, object state indicators and task-success metadata.
  `Robotics / Embodied AI` · `Synthetic Video` · `Action` · `Agent Pose` · `Object State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/spoc_robot) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Navigation/manipulation episodes provide actions, two camera views, agent location, object state indicators and task-success metadata. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/spoc_robot) · 2026-10-30

- **Stanford HYDRA Demonstrations** · 2023 · Dataset
  Long-horizon episodes provide seven-dimensional actions, two camera views, 27-dimensional state and waypoint/dense-mode indicators.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/stanford_hydra_dataset_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Long-horizon episodes provide seven-dimensional actions, two camera views, 27-dimensional state and waypoint/dense-mode indicators. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/stanford_hydra_dataset_converted_externally_to_rlds) · 2026-10-30

- **TOTO Scooping and Pouring** · 2023 · Dataset
  Scooping/pouring episodes contain end-effector and gripper actions, RGB observations and seven joint positions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/toto) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Scooping/pouring episodes contain end-effector and gripper actions, RGB observations and seven joint positions. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/toto) · 2026-10-30

- **TriFinger RL Dataset** · 2023 · Dataset
  An offline-RL dataset of real TriFinger Push/Lift tasks with states, actions, rewards, and behavior of varying quality.
  `Robotics / Embodied AI` · `Robot State` · `Action` · `Reward` · `RGB Video` · `Trajectories`
  [Homepage](https://doi.org/10.17617/3.DXZ7TL) · [Code](https://webdav.tuebingen.mpg.de/trifinger-rl/docs/datasets/index.html) · Access: Official DOI and dataset documentation available
  Inclusion evidence C2: Official documentation explicitly provides real/simulated robot transitions for Push and Lift, with varying behavior policies and optional camera images, for dynamics learning and offline RL. [Reviewed source](https://webdav.tuebingen.mpg.de/trifinger-rl/docs/datasets/index.html) · 2026-10-29

- **UCSD Kitchen Demonstrations** · 2023 · Dataset
  Kitchen manipulation aligns eight-dimensional actions with RGB and 21-dimensional joint position/velocity/torque state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/ucsd_kitchen_dataset_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Kitchen manipulation aligns eight-dimensional actions with RGB and 21-dimensional joint position/velocity/torque state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/ucsd_kitchen_dataset_converted_externally_to_rlds) · 2026-10-30

- **UCSD Pick and Place** · 2023 · Dataset
  Distractor-rich pick/place episodes expose gripper velocity/torque actions, RGB, seven-dimensional state and episode-success metadata.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/ucsd_pick_and_place_dataset_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Distractor-rich pick/place episodes expose gripper velocity/torque actions, RGB, seven-dimensional state and episode-success metadata. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/ucsd_pick_and_place_dataset_converted_externally_to_rlds) · 2026-10-30

- **UT Austin SIRIUS** · 2023 · Dataset
  Manipulation episodes align seven-dimensional actions with images, joint/pose states and labels for demonstrations, interventions and autonomous execution.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/austin_sirius_dataset_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Manipulation episodes align seven-dimensional actions with images, joint/pose states and labels for demonstrations, interventions and autonomous execution. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/austin_sirius_dataset_converted_externally_to_rlds) · 2026-10-30

- **UTokyo PR2 Fridge Opening** · 2023 · Dataset
  Fridge-door opening episodes pair eight-dimensional actions with RGB and seven-dimensional end-effector/gripper state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/utokyo_pr2_opening_fridge_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Fridge-door opening episodes pair eight-dimensional actions with RGB and seven-dimensional end-effector/gripper state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/utokyo_pr2_opening_fridge_converted_externally_to_rlds) · 2026-10-30

- **UTokyo PR2 Tabletop** · 2023 · Dataset
  Tabletop manipulation pairs eight-dimensional end-effector/gripper/termination actions with RGB and seven-dimensional state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/utokyo_pr2_tabletop_manipulation_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Tabletop manipulation pairs eight-dimensional end-effector/gripper/termination actions with RGB and seven-dimensional state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/utokyo_pr2_tabletop_manipulation_converted_externally_to_rlds) · 2026-10-30

- **UTokyo xArm Bimanual** · 2023 · Dataset
  Bimanual towel-folding episodes contain 14-dimensional actions, RGB and separate six-dimensional left/right end-effector poses.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/utokyo_xarm_bimanual_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Bimanual towel-folding episodes contain 14-dimensional actions, RGB and separate six-dimensional left/right end-effector poses. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/utokyo_xarm_bimanual_converted_externally_to_rlds) · 2026-10-30

- **UTokyo xArm Pick and Place** · 2023 · Dataset
  Pick/place episodes pair seven-dimensional commands with three camera views, end-effector pose and joint position/velocity/acceleration.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/utokyo_xarm_pick_and_place_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Pick/place episodes pair seven-dimensional commands with three camera views, end-effector pose and joint position/velocity/acceleration. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/utokyo_xarm_pick_and_place_converted_externally_to_rlds) · 2026-10-30

- **Berkeley MVP Demonstrations** · 2022 · Dataset
  Six manipulation tasks expose eight-dimensional joint/gripper actions, wrist images and joint/end-effector observations.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/berkeley_mvp_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Six manipulation tasks expose eight-dimensional joint/gripper actions, wrist images and joint/end-effector observations. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/berkeley_mvp_converted_externally_to_rlds) · 2026-10-30

- **BUDS Robot Demonstrations** · 2022 · Dataset
  Robot manipulation demonstrations with step-aligned end-effector/gripper actions, camera images and state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/austin_buds_dataset_converted_externally_to_rlds) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C2: 50 episodes contain step-aligned end-effector delta/gripper actions, RGB and wrist images, and robot state. [Reviewed source](https://www.tensorflow.org/datasets/catalog/austin_buds_dataset_converted_externally_to_rlds) · 2026-10-30

- **DiffSkill Environments** · 2022 · Generation environment / toolkit
  Three tool-mediated plastic-object tasks with downloadable initial/target configurations and random-interaction scripts for generating transitions.
  `Robotics / Embodied AI` · `Physics / Science` · `Action` · `Simulation State` · `Object State`
  [Code](https://github.com/Xingyu-Lin/DiffSkill) · [Paper](https://arxiv.org/abs/2203.17275) · Access: Official configuration archive and environment rollout scripts
  Inclusion evidence C2: Differentiable-physics tool manipulation produces demonstration trajectories paired with RGB-D observations; derived from simulator tasks, not the policy alone. [Reviewed source](https://arxiv.org/abs/2203.17275) · 2026-10-29

- **ExORL** · 2022 · Dataset
  Offline state-action trajectories collected by unsupervised exploration in the DeepMind Control Suite.
  `Robotics / Embodied AI` · `Simulation State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/denisyarats/exorl) · [Paper](https://arxiv.org/abs/2201.13425) · Access: Download script and open-source loaders
  Inclusion evidence C2: Unsupervised exploratory interactions are collected and relabeled for offline-RL downstream tasks; controlled transition data. [Reviewed source](https://arxiv.org/abs/2201.13425) · 2026-10-29

- **HOI4D** · 2022 · Dataset
  A 4D human-object interaction video dataset with hand, object, and camera-motion annotations.
  `Egocentric / Human` · `Robotics / Embodied AI` · `RGB-D` · `Action Labels` · `Object State` · `Agent Pose`
  [Homepage](https://hoi4d.github.io/) · [Paper](https://arxiv.org/abs/2203.01577) · Access: Official project and data
  Inclusion evidence C3: RGB-D interaction sequences include frame-wise hand and object poses and motion segmentation, directly exposing temporal object evolution. [Reviewed source](https://arxiv.org/abs/2203.01577) · 2026-10-29

- **ManiSkill** · 2022 · Generation environment / toolkit
  An efficient physics-simulation benchmark and trajectory-generating environment for robot manipulation learning.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB-D` · `Action` · `Simulation State` · `Object State`
  [Homepage](https://maniskill.ai/) · [Code](https://github.com/haosulab/ManiSkill) · Access: Official simulator and benchmark
  Inclusion evidence C2: Official SAPIEN robot simulator and manipulation-learning task framework generates controlled observations and state changes. [Reviewed source](https://github.com/haosulab/ManiSkill) · 2026-10-29

- **MaskViT Sawyer Rollouts** · 2022 · Dataset
  Pushing/picking episodes provide five-dimensional actions, images, end-effector pose and joint/velocity/gripper state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/stanford_mask_vit_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Pushing/picking episodes provide five-dimensional actions, images, end-effector pose and joint/velocity/gripper state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/stanford_mask_vit_converted_externally_to_rlds) · 2026-10-30

- **MineDojo** · 2022 · Generation environment / toolkit
  An interactive Minecraft simulation suite with exploration, gathering and crafting tasks plus stepwise actions and observations. This entry covers the environment; accompanying web videos and knowledge databases are not counted as aligned action trajectories.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Game State`
  [Homepage](https://minedojo.org/) · [Code](https://github.com/MineDojo/MineDojo) · Access: Open / source-dependent
  Inclusion evidence C2: Official environment exposes multimodal observations and compound actions for step-based Minecraft interaction. Scope is the simulator, not its static wiki assets. [Reviewed source](https://github.com/MineDojo/MineDojo) · 2026-10-29

- **MyoSuite** · 2022 · Generation environment / toolkit
  MuJoCo musculoskeletal environments with high-dimensional body states, actions, and motion trajectories.
  `Robotics / Embodied AI` · `Physics / Science` · `Simulation State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/facebookresearch/myosuite) · Access: Open-source benchmark
  Inclusion evidence C2: Official MuJoCo environment documents step(action), per-step observations and muscle-control tasks. [Reviewed source](https://github.com/facebookresearch/myosuite) · 2026-10-29

- **NYU Franka Play** · 2022 · Dataset
  Kitchen play contains 15-dimensional velocity/pose/gripper/termination actions, two RGB-D views and 13-dimensional state.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/nyu_franka_play_dataset_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Kitchen play contains 15-dimensional velocity/pose/gripper/termination actions, two RGB-D views and 13-dimensional state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/nyu_franka_play_dataset_converted_externally_to_rlds) · 2026-10-30

- **RT-1 Public RLDS (fractal20220817_data)** · 2022 · Dataset
  Public RT-1 episodes include images, end-effector/base control and episode boundaries.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/fractal20220817_data) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C2: The public RLDS release contains 87,212 episodes with image observations, end-effector/base commands and episode boundaries. This is not the paper's entire training-data total. [Reviewed source](https://www.tensorflow.org/datasets/catalog/fractal20220817_data) · 2026-10-30

- **SAILOR Robot Demonstrations** · 2022 · Dataset
  Robot tabletop demonstrations containing seven-dimensional actions, images and end-effector/gripper state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/austin_sailor_dataset_converted_externally_to_rlds) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C2: 240 episodes align seven-dimensional actions with camera observations and end-effector/gripper states. [Reviewed source](https://www.tensorflow.org/datasets/catalog/austin_sailor_dataset_converted_externally_to_rlds) · 2026-10-30

- **SCAND** · 2022 · Dataset
  Teleoperated Spot and Jackal navigation trajectories include joystick commands, odometry and visual/inertial/LiDAR observations.
  `Robotics / Embodied AI` · `RGB Video` · `LiDAR` · `Action` · `Robot State` · `Trajectories`
  [Paper](https://arxiv.org/abs/2203.15041) · Access: Paper documents the resource; complete download not tested
  Inclusion evidence C2: The paper reports 138 teleoperated navigation trajectories with joystick commands, odometry, visual/inertial observations and 3D LiDAR on Spot and Jackal. [Reviewed source](https://arxiv.org/abs/2203.15041) · 2026-10-30

- **TACO Play** · 2022 · Dataset
  Franka kitchen play with seven-dimensional absolute/relative actions, two RGB-D views and 15-dimensional robot observations.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/taco_play) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Franka kitchen play with seven-dimensional absolute/relative actions, two RGB-D views and 15-dimensional robot observations. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/taco_play) · 2026-10-30

- **Tokyo U LSMO Trajectories** · 2022 · Dataset
  Pick/place motion-planning trajectories contain seven-dimensional end-effector/gripper commands, RGB and 13-dimensional state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/tokyo_u_lsmo_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Pick/place motion-planning trajectories contain seven-dimensional end-effector/gripper commands, RGB and 13-dimensional state. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/tokyo_u_lsmo_converted_externally_to_rlds) · 2026-10-30

- **USC Cloth Simulation Demonstrations** · 2022 · Dataset
  Simulated cloth episodes align picker position/activation commands with images and cloth-folding rewards.
  `Robotics / Embodied AI` · `Synthetic Video` · `Action` · `Reward`
  [Homepage](https://www.tensorflow.org/datasets/catalog/usc_cloth_sim_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Simulated cloth episodes align picker position/activation commands with images and cloth-folding rewards. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/usc_cloth_sim_converted_externally_to_rlds) · 2026-10-30

- **VIOLA Robot Demonstrations** · 2022 · Dataset
  Kitchen manipulation demonstrations with translation, rotation, gripper actions and two camera views.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/viola) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C2: 135 training and 15 test episodes align translation, rotation and gripper actions with two camera streams and robot state. [Reviewed source](https://www.tensorflow.org/datasets/catalog/viola) · 2026-10-30

- **BC-Z Robot Demonstrations** · 2021 · Dataset
  Teleoperated manipulation exposes residual future end-effector/gripper targets, current pose and image observations.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/bc_z) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Teleoperated manipulation exposes residual future end-effector/gripper targets, current pose and image observations. Steps are organized into episodes. Future action targets require a causal history/target split; do not feed future supervision into model inputs. [Reviewed source](https://www.tensorflow.org/datasets/catalog/bc_z) · 2026-10-30

- **Brax** · 2021 · Generation environment / toolkit
  A JAX-based differentiable rigid-body physics engine and RL environment for parallel state-action-reward trajectory generation.
  `Robotics / Embodied AI` · `Physics / Science` · `Simulation State` · `Action` · `Reward` · `RGB Video`
  [Code](https://github.com/google/brax) · [Paper](https://arxiv.org/abs/2106.13281) · Access: Open-source engine and environments
  Inclusion evidence C2: Open-source rigid-body simulation supplies controlled Gym-like environments and executable training notebooks. [Reviewed source](https://arxiv.org/abs/2106.13281) · 2026-10-29

- **Isaac Gym** · 2021 · Generation environment / toolkit
  GPU-accelerated physics environments that generate robot states, actions, and visual trajectories.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Simulation State` · `Action` · `Reward`
  [Code](https://github.com/isaac-sim/IsaacGymEnvs) · [Paper](https://arxiv.org/abs/2108.10470) · Access: Official repository and release
  Inclusion evidence C2: GPU physics buffers directly exchange state/control tensors with robot policies; downloadable simulation platform. [Reviewed source](https://arxiv.org/abs/2108.10470) · 2026-10-29

- **NYU Door Opening (VINN)** · 2021 · Dataset
  Door/cabinet opening episodes contain end-effector translation/rotation and gripper actions paired with RGB observations.
  `Robotics / Embodied AI` · `RGB Video` · `Action`
  [Homepage](https://www.tensorflow.org/datasets/catalog/nyu_door_opening_surprising_effectiveness) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Door/cabinet opening episodes contain end-effector translation/rotation and gripper actions paired with RGB observations. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/nyu_door_opening_surprising_effectiveness) · 2026-10-30

- **PlasticineLab** · 2021 · Generation environment / toolkit
  Differentiable soft-body manipulation tasks with actions deforming elastoplastic material and control-optimization/output interfaces.
  `Physics / Science` · `Robotics / Embodied AI` · `Action` · `Simulation State` · `Object State`
  [Homepage](https://plasticinelab.csail.mit.edu/) · [Code](https://github.com/hzaskywalker/PlasticineLab) · Access: Official simulator and action-sequence optimization commands; generate rollouts locally
  Inclusion evidence C2: Differentiable soft-body physics lets manipulators deform objects toward goals, generating controlled state transitions. [Reviewed source](https://plasticinelab.csail.mit.edu/) · 2026-10-29

- **Atari Replay Dataset** · 2020 · Dataset
  Large-scale Atari replay saved during DQN training, containing frames, actions, rewards, and terminal signals.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Reward` · `Game State`
  [Code](https://github.com/google/dopamine/tree/master/dopamine/labs/offline_rl) · [Paper](https://arxiv.org/abs/1907.04543) · Access: Public replay data through Dopamine tooling
  Inclusion evidence C2: The released DQN replay corpus contains logged interaction experience across 60 Atari games. [Reviewed source](https://arxiv.org/abs/1907.04543) · 2026-10-29

- **D4RL** · 2020 · Collection / registry
  A standardized offline-RL dataset suite with states, actions, rewards, and termination signals.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `Simulation State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/Farama-Foundation/D4RL) · Access: Official repository and environment loaders available
  Inclusion evidence C2: Offline-RL benchmark aggregates standardized trajectory datasets; current releases migrated to Minari and include Kitchen/Adroit subsets. [Reviewed source](https://github.com/Farama-Foundation/D4RL) · 2026-10-29

- **DLR EDAN Shared Control** · 2020 · Dataset
  Assistive shelf-picking episodes provide seven-dimensional action/state arrays and RGB observations.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/dlr_edan_shared_control_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Assistive shelf-picking episodes provide seven-dimensional action/state arrays and RGB observations. Steps are organized into episodes. The documented action/state shapes have seven components but the description names only six pose coordinates. [Reviewed source](https://www.tensorflow.org/datasets/catalog/dlr_edan_shared_control_converted_externally_to_rlds) · 2026-10-30

- **RL Unplugged** · 2020 · Collection / registry
  An offline-RL trajectory collection spanning Atari, DeepMind Control, robotics, and other environments.
  `Games / Virtual Environments` · `Robotics / Embodied AI` · `Simulation State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/deepmind/deepmind-research/tree/master/rl_unplugged) · Access: Datasets available through TensorFlow Datasets and official code
  Inclusion evidence C2: Unified offline-RL suite provides logged interactions with high-dimensional actions and visual observations; component datasets are not independent of the collection. [Reviewed source](https://github.com/deepmind/deepmind-research/tree/master/rl_unplugged) · 2026-10-29

- **RoboNet** · 2020 · Dataset
  A cross-platform robot interaction video dataset collected across multiple laboratories, robot arms, viewpoints, and objects for visual dynamics and control generalization.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.robonet.wiki/) · [Paper](https://arxiv.org/abs/1910.11215) · [Code](https://github.com/SudeepDasari/RoboNet) · Access: Open download
  Inclusion evidence C2: Official dataset loader includes supervised inverse-model and forward video-prediction training over robot experience; data downloads are documented. [Reviewed source](https://github.com/SudeepDasari/RoboNet) · 2026-10-29

- **robosuite Benchmark** · 2020 · Generation environment / toolkit
  A modular robot-manipulation simulation framework providing generated multitask trajectories, visual observations, and physical state.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB-D` · `Action` · `Simulation State` · `Robot State`
  [Homepage](https://robosuite.ai/) · [Code](https://github.com/ARISE-Initiative/robosuite) · Access: Official simulator and datasets
  Inclusion evidence C2: Official simulator supports robot controllers, demonstration collection and replay utilities in standardized physical manipulation environments. [Reviewed source](https://github.com/ARISE-Initiative/robosuite) · 2026-10-29

- **RoboTHOR** · 2020 · Generation environment / toolkit
  A LoCoBot simulation interface exposes move/rotate actions, RGB/depth observations and agent poses.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Agent Pose`
  [Homepage](https://ai2thor.allenai.org/robothor/documentation/) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C2: The LoCoBot controller exposes move/rotate actions, RGB/depth observations and agent poses in named environments. It is part of AI2-THOR, so counts do not imply independent corpora. [Reviewed source](https://ai2thor.allenai.org/robothor/documentation/) · 2026-10-30

- **SoftGym** · 2020 · Generation environment / toolkit
  Deformable manipulation benchmarks with Gym interfaces and random-action examples for generating observation and state transitions.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Depth` · `Action` · `Simulation State`
  [Code](https://github.com/Xingyu-Lin/softgym) · [Paper](https://arxiv.org/abs/2011.07215) · Access: Official simulator and rollout examples; data generated locally
  Inclusion evidence C2: Open-source deformable-object manipulation environments expose a Gym control interface and physical state evolution. [Reviewed source](https://arxiv.org/abs/2011.07215) · 2026-10-29

- **OmniPush** · 2019 · Dataset
  A real-robot pushing-dynamics dataset with RGB-D video and state changes across objects, surfaces, and pushing actions for transferable visual dynamics learning.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Object State` · `Trajectory`
  [Paper](https://arxiv.org/abs/1910.00618) · [Code](https://github.com/MIT-Omnipush/video-prediction) · Access: Open project access
  Inclusion evidence C2: Controlled planar pushes are recorded with RGB-D and precise object tracking across systematically varied objects. [Reviewed source](https://arxiv.org/abs/1910.00618) · 2026-10-29

- **Stanford Kuka Vision and Touch** · 2019 · Dataset
  Peg insertion provides four-dimensional position/gripper actions, RGB-D, joint/pose observations and end-effector force histories.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/stanford_kuka_multimodal_dataset_converted_externally_to_rlds) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Peg insertion provides four-dimensional position/gripper actions, RGB-D, joint/pose observations and end-effector force histories. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/stanford_kuka_multimodal_dataset_converted_externally_to_rlds) · 2026-10-30

- **Adroit Arm Environments** · 2018 · Generation environment / toolkit
  Dexterous hand and arm environments in Gymnasium-Robotics, exposing state, action and subsequent observations.
  `Robotics / Embodied AI` · `Simulation State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/Farama-Foundation/Gymnasium-Robotics) · Access: Maintained simulator; legacy demonstrations belong to D4RL/Minari
  Inclusion evidence C2: Official maintained Gymnasium-Robotics release explicitly lists Adroit Arm environments and a state/action stepping interface. Scope is the simulator; legacy D4RL demonstrations are not newly collected data. [Reviewed source](https://github.com/Farama-Foundation/Gymnasium-Robotics) · 2026-10-29

- **DeepMind Control Suite** · 2018 · Generation environment / toolkit
  A suite of continuous-control physics environments that generate trajectories with states, actions, rewards, and visual observations.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Simulation State` · `Action` · `Reward`
  [Code](https://github.com/google-deepmind/dm_control) · Access: Open-source environment and reproducible trajectory generation
  Inclusion evidence C2: Official MuJoCo-based control environments expose physics simulation and reusable task construction for action-conditioned rollouts. [Reviewed source](https://github.com/google-deepmind/dm_control) · 2026-10-29

- **QT-Opt Kuka RLDS** · 2018 · Dataset
  Grasping episodes pair base/end-effector/gripper actions with RGB, end-effector pose and gripper observations.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.tensorflow.org/datasets/catalog/kuka) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C2: Grasping episodes pair base/end-effector/gripper actions with RGB, end-effector pose and gripper observations. Steps are organized into episodes. Action coordinates and sampling conventions follow this release; check them before combining embodiments. [Reviewed source](https://www.tensorflow.org/datasets/catalog/kuka) · 2026-10-30

- **World Models CarRacing Rollout Generator (ctallec)** · 2018 · Generation environment / toolkit
  A PyTorch implementation provides random CarRacing rollouts and action-conditioned next-latent prediction.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Simulation State`
  [Code](https://raw.githubusercontent.com/ctallec/world-models/master/README.md) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C2: The implementation documents random CarRacing rollout generation and next-latent prediction from past observations/actions. These are implementation-generated rollouts, not an official fixed corpus from the original paper. [Reviewed source](https://raw.githubusercontent.com/ctallec/world-models/master/README.md) · 2026-10-30

- **AI2-THOR** · 2017 · Generation environment / toolkit
  An interactive indoor simulator generating navigation, manipulation, and state-change trajectories.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB-D` · `Action` · `Simulation State` · `Object State`
  [Homepage](https://ai2thor.allenai.org/) · [Paper](https://arxiv.org/abs/1712.05474) · [Code](https://github.com/allenai/ai2thor) · Access: Official simulator
  Inclusion evidence C2: Agents navigate and interact with objects in executable 3D scenes, enabling action-conditioned observation/state transitions. [Reviewed source](https://arxiv.org/abs/1712.05474) · 2026-10-29

- **CARLA** · 2017 · Generation environment / toolkit
  An open autonomous-driving simulator generating multisensor driving, traffic-agent, and control trajectories.
  `Autonomous Driving` · `Games / Virtual Environments` · `RGB Video` · `LiDAR` · `RADAR` · `Action` · `Simulation State`
  [Homepage](https://carla.org/) · [Paper](https://arxiv.org/abs/1711.03938) · [Code](https://github.com/carla-simulator/carla) · Access: Official simulator
  Inclusion evidence C2: Open urban driving simulator exposes vehicle interaction, configurable sensors and controlled environmental conditions. [Reviewed source](https://arxiv.org/abs/1711.03938) · 2026-10-29

- **BAIR Robot Pushing** · 2016 · Dataset
  A classic action-conditioned video dataset of a robot pushing objects on a tabletop, widely used for stochastic future prediction and visual dynamics baselines.
  `Robotics / Embodied AI` · `RGB Video` · `Action`
  [Homepage](https://www.tensorflow.org/datasets/catalog/bair_robot_pushing_small) · [Paper](https://arxiv.org/abs/1605.07157) · [Code](https://github.com/tensorflow/datasets) · Access: Open download
  Inclusion evidence C2: The paper introduces 59K real robot pushing interactions for action-conditioned future-video prediction. [Reviewed source](https://arxiv.org/abs/1605.07157) · 2026-10-29

<a id="decision-making-agent-trajectories"></a>

### Decision-Making & Agent Trajectories (76)

- **ACE-Data-0** · 2026 · Dataset
  A synchronized home-interaction dataset with multiview video, body, hands, objects, audio, and touch.
  `Robotics / Embodied AI` · `Physics / Science` · `Multi-view RGB Video` · `Audio` · `Action` · `Object State`
  [Paper](https://arxiv.org/abs/2607.28625) · Access: Paper entry; release status requires verification
  Inclusion evidence C3: Synchronized human interactions include articulated motion and object 6-DoF trajectories across 75,000 episodes. Paper evidence; data access not tested. [Reviewed source](https://arxiv.org/abs/2607.28625) · 2026-10-29

- **AXIS** · 2026 · Dataset
  A community-driven browser-teleoperation robot data engine and benchmark.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action` · `Robot State`
  [Paper](https://arxiv.org/abs/2607.21588) · Access: Paper entry; release status requires verification
  Inclusion evidence C2: Browser teleoperation produces 50K+ robot demonstration trajectories across 207 tasks. Paper evidence; release files not inspected. [Reviewed source](https://arxiv.org/abs/2607.21588) · 2026-10-29

- **CARLA-Air** · 2026 · Generation environment / toolkit
  An air-ground embodied simulation infrastructure unifying urban driving and multirotor flight in one CARLA world.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Paper](https://arxiv.org/abs/2603.28032) · [Code](https://github.com/louiszengCN/CarlaAir) · Access: Official project, code, and data entry available: https://huggingface.co/tianlezeng/CarlaAIr-v0.1.7
  Inclusion evidence C2: A shared physics tick synchronizes control and up to 18 sensor modalities; the paper identifies released simulator binaries and source. [Reviewed source](https://arxiv.org/abs/2603.28032) · 2026-10-29

- **DreamDojo GR-1 Data** · 2026 · Derived data / subset
  GR-1 robot post-training and evaluation data released by DreamDojo; the full 44K-hour human-video training mixture is outside this entry.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://dreamdojo-world.github.io/) · [Paper](https://arxiv.org/abs/2602.06949) · [Code](https://github.com/NVIDIA/DreamDojo) · Access: Official release documents GR-1 data; download not tested
  Inclusion evidence C2: Official release explicitly provides GR-1 post-training datasets and evaluation sets. Retention covers those releases, not an assumption that the full 44K-hour human training mixture is downloadable. [Reviewed source](https://github.com/NVIDIA/DreamDojo) · 2026-10-29

- **EBiM Benchmark** · 2026 · Generation environment / toolkit
  An embodied mobile-bimanual manipulation benchmark with task environments, simulation setups, and trajectory-collection entry points.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Object State` · `Trajectories`
  [Homepage](https://ebim-benchmark.github.io/) · [Code](https://github.com/EBiM-Benchmark/benchmark) · Access: Developer-preview task environments; official scoring follows competition rules
  Inclusion evidence C2: README provides mobile dual-arm teleoperation task environments and launch commands. Developer preview, not a fixed released demonstration corpus. [Reviewed source](https://github.com/EBiM-Benchmark/benchmark) · 2026-10-29

- **Evo-RL Real-World Dataset** · 2026 · Dataset
  An open real-robot offline-RL dataset for SO-101 and AgileX PiPER platforms.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://huggingface.co/datasets/MINT-SJTU/RW-RL-Dataset) · [Code](https://github.com/MINT-SJTU/Evo-RL) · Access: Official code and data entries available: https://huggingface.co/datasets/MINT-SJTU/RW-RL-Dataset
  Inclusion evidence C2: Official README documents real-robot offline RL data collection, released datasets, and closed-loop rollouts on SO101 and PiPER. [Reviewed source](https://github.com/MINT-SJTU/Evo-RL) · 2026-10-29

- **HiPHI** · 2026 · Dataset
  A high-precision whole-body human-motion and object-interaction dataset.
  `Robotics / Embodied AI` · `Physics / Science` · `Agent Pose` · `3D Mesh` · `Object State`
  [Paper](https://arxiv.org/abs/2608.16222) · Access: Paper entry; release status requires verification
  Inclusion evidence C3: Optical motion capture supplies whole-body motion and mesh-level object trajectories. Paper evidence; access not tested. [Reviewed source](https://arxiv.org/abs/2608.16222) · 2026-10-29

- **HUI360** · 2026 · Dataset
  A 360-degree robot-egocentric dataset for anticipating human-robot interactions.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Agent Pose` · `Segmentation`
  [Paper](https://arxiv.org/abs/2608.11051) · [Homepage](https://hucebot.github.io/hui360) · Access: Paper entry; release status requires verification
  Inclusion evidence C3: Robot-view tracking and interaction annotations support an explicit human-robot interaction anticipation benchmark. Raw images are request-only. [Reviewed source](https://arxiv.org/abs/2608.11051) · 2026-10-29

- **ManipArena Dataset** · 2026 · Dataset
  A multiview expert-trajectory dataset and benchmark for reasoning-oriented real-robot manipulation tasks.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://huggingface.co/datasets/ManipArena/maniparena-dataset) · [Paper](https://arxiv.org/abs/2603.28545) · Access: Dataset available through gated Hugging Face access
  Inclusion evidence C2: The current paper identifies ManipArena: expert trajectories, low-level motor signals, frame observations and paired real-to-sim environments. Consolidates the misnamed PRIMO-R1 record. [Reviewed source](https://arxiv.org/abs/2603.28545) · 2026-10-29

- **OmniBehavior** · 2026 · Benchmark
  A real-user interaction-trace dataset for long-horizon, cross-scenario human behavior simulation, released in Chinese and English.
  `Egocentric / Human` · `Action` · `Trajectories` · `Text`
  [Homepage](https://huggingface.co/datasets/jiawei-ucas/OmniBehavior) · [Paper](https://arxiv.org/abs/2604.08362) · [Code](https://github.com/icip-cas/OmniBehavior) · Access: Full bilingual dataset available on Hugging Face
  Inclusion evidence C3: Real long-horizon cross-scenario human behavior traces are used for an explicit predictive simulation benchmark; behavioral events are not physical motor controls. [Reviewed source](https://arxiv.org/abs/2604.08362) · 2026-10-29

- **RescueBench** · 2026 · Generation environment / toolkit
  An Unreal Engine open-world search-and-rescue benchmark with multi-stage tasks, progressive difficulty, and expert-trajectory collection tools.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Language` · `Reward` · `Trajectories`
  [Homepage](https://github.com/UnrealZoo/RescueBench) · [Code](https://github.com/UnrealZoo/RescueBench) · Access: Benchmark environment and trajectory collection tools available; dataset release planned
  Inclusion evidence C2: Gym-like interface exposes first-person observations, navigation/interaction actions and rewards; README explicitly provides expert-trajectory collection tools. [Reviewed source](https://github.com/UnrealZoo/RescueBench) · 2026-10-29

- **TableVerse-100K** · 2026 · Dataset
  One hundred thousand interactive tabletop environments reconstructed from real imagery with manipulation trajectories.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB-D` · `Action` · `Simulation State`
  [Paper](https://arxiv.org/abs/2607.21017) · Access: Paper entry; release status requires verification
  Inclusion evidence C2: Simulation-ready tabletop environments are explicitly paired with task-conditioned interactive pick-and-place trajectories. [Reviewed source](https://arxiv.org/abs/2607.21017) · 2026-10-29

- **UniETP** · 2026 · Generation environment / toolkit
  A unified embodied task-planning benchmark spanning AI2-THOR, VirtualHome, Habitat, and BEHAVIOR with automatic task generation.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Scene Metadata` · `Language` · `Trajectories`
  [Code](https://github.com/woyut/UniETP) · Access: Unified environment and task-generation code available
  Inclusion evidence C2: Unified interfaces expose observations, actions and scene graphs across four simulators with grounded task generation. Not an independent recorded corpus. [Reviewed source](https://github.com/woyut/UniETP) · 2026-10-29

- **FLAME** · 2025 · Dataset
  A large simulated demonstration benchmark for federated robot manipulation learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2503.01729) · Access: Paper entry; release status requires verification
  Inclusion evidence C2: The benchmark explicitly releases over 160K expert manipulation demonstrations across simulated environments for policy learning. [Reviewed source](https://arxiv.org/abs/2503.01729) · 2026-10-29

- **HINT-Bench** · 2025 · Generation environment / toolkit
  A benchmark for early human-intention prediction in shared environments using LiDAR, skeleton, and robot-state trajectories.
  `Robotics / Embodied AI` · `Egocentric / Human` · `LiDAR` · `Agent Pose` · `Robot State` · `Trajectories`
  [Code](https://github.com/valerio-bo/HINT-Bench) · Access: Benchmark data and simulation generator publicly available
  Inclusion evidence C3: README identifies per-episode robot/human states, skeletons and trajectories with data-collection scripts. The intent labels alone are not the inclusion evidence. [Reviewed source](https://github.com/valerio-bo/HINT-Bench) · 2026-10-29

- **LabUtopia** · 2025 · Generation environment / toolkit
  A scientific-lab suite with multiphysics simulation, procedural scenes, and hierarchical embodied tasks.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2505.22634) · Access: Paper entry; release status requires verification
  Inclusion evidence C2: LabSim provides physical/chemical interactions and a task suite spanning atomic actions to long-horizon mobile manipulation. [Reviewed source](https://arxiv.org/abs/2505.22634) · 2026-10-29

- **MIKASA** · 2025 · Generation environment / toolkit
  A memory-intensive reinforcement-learning benchmark for tabletop robotics.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2502.10550) · Access: Paper entry; release status requires verification
  Inclusion evidence C2: Installable MIKASA-Robo defines memory-intensive interactive manipulation tasks under partial observability. A simulator benchmark, not a fixed corpus. [Reviewed source](https://arxiv.org/abs/2502.10550) · 2026-10-29

- **MRCD** · 2025 · Dataset
  An outdoor mobile-robot dataset for ROS2 perception and navigation.
  `Robotics / Embodied AI` · `RGB Video` · `LiDAR` · `IMU / GPS` · `Trajectories`
  [Homepage](https://sm20598.github.io/MRCD/) · [Code](https://github.com/SM20598/MRCD) · Access: Project page and repository available
  Inclusion evidence C3: ROS2 robot recordings contain stereo/depth streams, LiDAR, IMU, odometry and GPS/ground truth across temporal sequences. [Reviewed source](https://sm20598.github.io/MRCD/) · 2026-10-29

- **MuBlE / SHOP-VRB2** · 2025 · Generation environment / toolkit
  A MuJoCo-Blender environment and benchmark for long-horizon physical manipulation reasoning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2503.02834) · Access: Paper entry; release status requires verification
  Inclusion evidence C2: MuJoCo/Blender environment generates aligned visual-action and control-physics loops for physical multi-step tasks. [Reviewed source](https://arxiv.org/abs/2503.02834) · 2026-10-29

- **OceanGym** · 2025 · Generation environment / toolkit
  A high-fidelity underwater simulation environment and dataset for perception, continuous-control navigation, and embodied decision-making.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Trajectories` · `Scene Metadata`
  [Homepage](https://oceangpt.github.io/OceanGym/) · [Paper](https://arxiv.org/abs/2509.26536) · [Code](https://github.com/OceanGPT/OceanGym) · Access: Environment data and trajectories available on Hugging Face
  Inclusion evidence C2: Underwater tasks expose optical/sonar observations and sequential exploration/interaction in simulated currents; retain as environment benchmark. [Reviewed source](https://arxiv.org/abs/2509.26536) · 2026-10-29

- **PartInstruct** · 2025 · Dataset
  A fine-grained robot-manipulation benchmark with part instructions, 3D labels, and expert demonstrations.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2505.21652) · Access: Paper entry; release status requires verification
  Inclusion evidence C2: More than 10K simulated expert demonstrations pair manipulation instructions with object/part state information. [Reviewed source](https://arxiv.org/abs/2505.21652) · 2026-10-29

- **DROID** · 2024 · Dataset
  A large real-world robot manipulation dataset spanning many sites, operators, and everyday scenes, with synchronized vision, actions, language, and robot state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://droid-dataset.github.io/) · [Paper](https://arxiv.org/abs/2403.12945) · [Code](https://github.com/droid-dataset/droid) · Access: Open download
  Inclusion evidence C2: Official dataset quickstart iterates per-step robot observations; the release documents teleoperated manipulation demonstration collection. [Reviewed source](https://droid-dataset.github.io/) · 2026-10-29

- **PARTNR** · 2024 · Generation environment / toolkit
  A large embodied benchmark for planning and reasoning in household human-robot collaboration, with simulation-grounded language tasks containing spatial, temporal, and heterogeneous-agent constraints.
  `Robotics / Embodied AI` · `Language` · `Action` · `Simulation State` · `Object State` · `Trajectory`
  [Paper](https://arxiv.org/abs/2411.00081) · [Code](https://github.com/facebookresearch/partnr-planner) · Access: Official benchmark planner and task resources available
  Inclusion evidence C2: Simulator-grounded household collaboration tasks execute agents under temporal/spatial constraints; task specifications are not recorded trajectories. [Reviewed source](https://arxiv.org/abs/2411.00081) · 2026-10-29

- **RoboMIND** · 2024 · Dataset
  A large unified multi-embodiment manipulation dataset with successful and failed teleoperation trajectories, multiview observations, robot states, language descriptions, and a digital-twin environment.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State` · `Language` · `Depth`
  [Homepage](https://x-humanoid-robomind.github.io/) · [Paper](https://arxiv.org/abs/2412.13877) · [Code](https://github.com/x-humanoid-robomind/x-humanoid-robomind.github.io) · Access: Official project provides dataset and tooling entry points
  Inclusion evidence C2: Teleoperated trajectories include multi-view observations and proprioceptive state, including explicitly collected failure demonstrations. [Reviewed source](https://arxiv.org/abs/2412.13877) · 2026-10-29

- **UMI** · 2024 · Dataset
  A universal mobile-manipulation interface and dataset recording handheld vision, end-effector actions, and cross-robot trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://umi-gripper.github.io/) · [Paper](https://arxiv.org/abs/2402.10329) · Access: Open-source project and paper
  Inclusion evidence C2: Handheld gripper demonstrations and relative-trajectory action representations support policy transfer; not directly measured robot torques. [Reviewed source](https://arxiv.org/abs/2402.10329) · 2026-10-29

- **BridgeData V2** · 2023 · Dataset
  A large real-robot multitask manipulation dataset spanning diverse kitchen and tabletop scenes.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://rail-berkeley.github.io/bridgedata/) · Access: Official project and download
  Inclusion evidence C2: Official release provides robot trajectories, scripted rollouts and initial/final states with language annotations. Consolidate the older BridgeData record and remove unrelated paper links. [Reviewed source](https://rail-berkeley.github.io/bridgedata/) · 2026-10-29

- **FurnitureBench** · 2023 · Dataset
  A real-and-simulated long-horizon furniture assembly robot benchmark with trajectories.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Object State`
  [Homepage](https://clvrai.github.io/furniture-bench/) · [Paper](https://arxiv.org/abs/2305.12821) · [Code](https://github.com/clvrai/furniture-bench) · Access: Official benchmark and code
  Inclusion evidence C2: Furniture assembly benchmark explicitly provides 5,000+ pre-collected demonstrations and a reproducible robot environment. [Reviewed source](https://arxiv.org/abs/2305.12821) · 2026-10-29

- **JRDB-Traj** · 2023 · Benchmark
  JRDB-based egocentric crowd forecasting benchmark predicting future pedestrian positions relative to the robot from images and point clouds.
  `Robotics / Embodied AI` · `Egocentric / Human` · `RGB Video` · `LiDAR` · `Trajectories`
  [Homepage](https://jrdb.erc.monash.edu/benchmark/) · [Paper](https://arxiv.org/abs/2311.02736) · Access: JRDB portal requires an account for downloads; forecasting development kit provided
  Inclusion evidence C3: Robot-view sensory sequences and agent locations support an explicit future-position forecasting protocol. [Reviewed source](https://arxiv.org/abs/2311.02736) · 2026-10-29

- **Jumanji** · 2023 · Generation environment / toolkit
  A JAX-based suite of combinatorial optimization and RL environments with batchable state-action-reward trajectories.
  `Games / Virtual Environments` · `Game State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/instadeepai/jumanji) · [Paper](https://arxiv.org/abs/2306.09884) · Access: Open-source benchmark suite
  Inclusion evidence C2: Scalable configurable RL environments expose controlled transitions and initial-state distributions; simulator suite, not recorded data. [Reviewed source](https://arxiv.org/abs/2306.09884) · 2026-10-29

- **LIBERO** · 2023 · Dataset
  A benchmark for lifelong and language-conditioned robot manipulation with multi-task demonstrations, visual observations, actions, and task descriptions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://libero-project.github.io/) · [Code](https://github.com/Lifelong-Robot-Learning/LIBERO) · Access: Open generation toolkit
  Inclusion evidence C2: Official repository supplies teleoperation demonstrations for four manipulation task suites and an explicit download script. [Reviewed source](https://github.com/Lifelong-Robot-Learning/LIBERO) · 2026-10-29

- **MimicGen** · 2023 · Generation environment / toolkit
  A framework that generates diverse robot manipulation demonstrations by replaying and composing a small number of human demonstrations in simulation.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://mimicgen.github.io/) · [Paper](https://arxiv.org/abs/2310.17596) · [Code](https://github.com/NVlabs/mimicgen) · Access: Open generation toolkit
  Inclusion evidence C2: Adapts source human demonstrations into over 50K robot trajectories across tasks, configurations and embodiments; generated demonstrations are derived data. [Reviewed source](https://arxiv.org/abs/2310.17596) · 2026-10-29

- **Mini-BEHAVIOR** · 2023 · Generation environment / toolkit
  A procedural 3D gridworld benchmark for long-horizon embodied decision-making with household tasks, object states, interaction actions, and human-demonstration collection.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Simulation State` · `Object State` · `Trajectory`
  [Paper](https://arxiv.org/abs/2310.01824) · [Code](https://github.com/StanfordVL/mini_behavior) · Access: Official environment code and demonstration collection tools available
  Inclusion evidence C2: Gridworld household tasks preserve symbolic state transitions and include starter code for data collection. [Reviewed source](https://arxiv.org/abs/2310.01824) · 2026-10-29

- **Open X-Embodiment** · 2023 · Collection / registry
  A large cross-embodiment collection assembled by Google DeepMind and more than 30 research institutions. It unifies real robot interactions across platforms, tasks, and environments for generalist embodied learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://robotics-transformer-x.github.io/) · [Paper](https://arxiv.org/abs/2310.08864) · [Code](https://github.com/google-deepmind/open_x_embodiment) · Access: Open / component-dependent
  Inclusion evidence C2: Standardized robot learning datasets pool trajectories from multiple embodiments; constituent datasets overlap other catalog records. [Reviewed source](https://arxiv.org/abs/2310.08864) · 2026-10-29

- **RoboHive** · 2023 · Generation environment / toolkit
  A unified benchmark framework for real and simulated robot-learning tasks, trajectories, and hardware interfaces.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Simulation State`
  [Homepage](https://sites.google.com/view/robohive) · [Paper](https://arxiv.org/abs/2310.06828) · [Code](https://github.com/vikashplus/robohive) · Access: Official framework
  Inclusion evidence C2: Unified physically simulated robot tasks and expert demonstrations support controlled interactions across embodiments. [Reviewed source](https://arxiv.org/abs/2310.06828) · 2026-10-29

- **RoboSet** · 2023 · Dataset
  A real household tabletop manipulation dataset with multi-skill, multi-task demonstrations across everyday activities, four camera views, language-defined tasks, teleoperation, and kinesthetic playback trajectories.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State` · `Language` · `Trajectories`
  [Homepage](https://robopen.github.io/roboset/) · [Paper](https://arxiv.org/abs/2309.01918) · [Code](https://github.com/robopen/roboagent) · Access: Official RoboSet pages provide downloadable trajectories; alternate Hugging Face mirror is referenced by the code repository
  Inclusion evidence C2: Official RoboAgent repository explicitly trains on released RoboSet HDF5 teleoperation demonstrations and links their download channel. [Reviewed source](https://github.com/robopen/roboagent) · 2026-10-29

- **WebArena** · 2023 · Generation environment / toolkit
  A reproducible real-website interaction environment with browser states, actions, and task trajectories.
  `Games / Virtual Environments` · `RGB Video` · `Text` · `Action` · `Reward`
  [Homepage](https://webarena.dev/) · [Code](https://github.com/web-arena-x/webarena) · [Paper](https://arxiv.org/abs/2307.13854) · Access: Open-source benchmark and deployment
  Inclusion evidence C2: Self-hosted functional websites define long-horizon agent actions and resulting environment changes; digital-state environment, not physical robot data. [Reviewed source](https://arxiv.org/abs/2307.13854) · 2026-10-29

- **BEHAVIOR-1K** · 2022 · Generation environment / toolkit
  An embodied benchmark of 1,000 everyday household activities with tasks, scenes, and simulation.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Simulation State` · `Language`
  [Homepage](https://behavior.stanford.edu/) · [Paper](https://arxiv.org/abs/2403.09227) · [Code](https://github.com/StanfordVL/BEHAVIOR-1K) · Access: Official benchmark
  Inclusion evidence C2: OmniGibson supplies controlled rigid/deformable/liquid physics for long-horizon household activities; task and simulation suite. [Reviewed source](https://arxiv.org/abs/2403.09227) · 2026-10-29

- **CALVIN** · 2022 · Dataset
  A long-horizon language-conditioned robot benchmark in a controlled tabletop environment, with continuous interaction trajectories and compositional task sequences.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Language`
  [Homepage](https://calvin.cs.uni-freiburg.de/) · [Paper](https://arxiv.org/abs/2112.03227) · [Code](https://github.com/mees/calvin) · Access: Open download
  Inclusion evidence C2: Simulated long-horizon manipulation benchmark combines onboard observations, action sequences and language instructions. [Reviewed source](https://arxiv.org/abs/2112.03227) · 2026-10-29

- **exiD** · 2022 · Dataset
  A naturalistic vehicle-trajectory dataset recorded by drones at German highway entries, exits, and weaving sections, complementing highD with merging, exiting, and complex weaving behavior.
  `Autonomous Driving` · `Trajectories` · `Object Metadata` · `Agent Pose` · `Scene Metadata`
  [Homepage](https://levelxdata.com/exid-dataset/) · Access: Official leveLXData/exiD request page; access requires agreeing to dataset terms
  Inclusion evidence C3: Official release provides naturalistic road-user trajectories, maps and maneuver annotations for merging/on-ramp/off-ramp scenarios. [Reviewed source](https://levelxdata.com/exid-dataset/) · 2026-10-29

- **Language-Table** · 2022 · Dataset
  A language-conditioned tabletop robot dataset and environment with long-horizon free-form instructions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Language` · `Robot State`
  [Paper](https://arxiv.org/abs/2210.06407) · [Code](https://github.com/google-research/language-table) · Access: Official dataset and code
  Inclusion evidence C2: Released language-labeled visuomotor trajectories explicitly pair manipulation behavior with real-time instructions. [Reviewed source](https://arxiv.org/abs/2210.06407) · 2026-10-29

- **MAgent2** · 2022 · Generation environment / toolkit
  Large-scale multi-agent grid-world environments with parallel actions, observations, and population-state trajectories.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/Farama-Foundation/MAgent2) · Access: Open-source environment
  Inclusion evidence C2: Official maintained PettingZoo environment library simulates interacting pixel agents in configurable grid-world tasks. [Reviewed source](https://github.com/Farama-Foundation/MAgent2) · 2026-10-29

- **MoCapAct** · 2022 · Dataset
  A simulated humanoid-control dataset that releases expert policies tracking CMU MoCap clips and noisy rollouts with proprioceptive observations, actions, and rewards.
  `Robotics / Embodied AI` · `Physics / Science` · `3D State` · `Action` · `Reward` · `Simulation State` · `Trajectories`
  [Homepage](https://microsoft.github.io/MoCapAct/) · [Paper](https://arxiv.org/abs/2208.07363) · [Code](https://github.com/microsoft/MoCapAct) · Access: Official project page, GitHub code, and Hugging Face dataset collection available
  Inclusion evidence C2: Official release explicitly provides expert HDF5 rollouts containing proprioceptive observations and actions, with small and large dataset downloads. [Reviewed source](https://microsoft.github.io/MoCapAct/) · 2026-10-29

- **ProcTHOR** · 2022 · Generation environment / toolkit
  A procedural framework for generating arbitrarily large, diverse, customizable interactive environments for embodied-agent training and evaluation, with an official 10,000-house sample.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Simulation State` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2206.06994) · [Code](https://github.com/allenai/procthor) · Access: Official generator and ProcTHOR-10K sample available
  Inclusion evidence C2: Procedural generation yields interactive environments for navigation, rearrangement and manipulation, with an identified simulator data path. [Reviewed source](https://arxiv.org/abs/2206.06994) · 2026-10-29

- **SinD** · 2022 · Dataset
  Drone-observed signalized-intersection trajectories with heterogeneous road users, kinematics, maps, and traffic-light context.
  `Autonomous Driving` · `Trajectories` · `Agent Pose` · `Maps` · `Scene Metadata`
  [Code](https://github.com/SOTIF-AVLab/SinD) · [Paper](https://arxiv.org/abs/2209.02297) · Access: Public samples; full data requested with educational email
  Inclusion evidence C3: Drone-recorded signalized-intersection road-user trajectories explicitly support behavior modeling and motion prediction. [Reviewed source](https://arxiv.org/abs/2209.02297) · 2026-10-29

- **TEACh** · 2022 · Dataset
  A dialogue-driven embodied-task dataset with language and action trajectories from human commander-follower interactions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Language` · `Object State`
  [Homepage](https://teachingalfred.github.io/) · [Paper](https://arxiv.org/abs/2110.00534) · [Code](https://github.com/alexa/teach) · Access: Official benchmark and code
  Inclusion evidence C2: Recorded dialogues accompany a follower navigating and manipulating household environments, establishing interaction episodes rather than text-only conversations. [Reviewed source](https://arxiv.org/abs/2110.00534) · 2026-10-29

- **ALFWorld** · 2021 · Generation environment / toolkit
  An interactive benchmark aligning text tasks with indoor embodied environments and task-state trajectories.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `Text` · `RGB Video` · `Action` · `Game State`
  [Code](https://github.com/alfworld/alfworld) · [Paper](https://arxiv.org/abs/2010.03768) · Access: Open-source benchmark
  Inclusion evidence C2: TextWorld actions are aligned to executable ALFRED visual-environment goals, providing interactive state transitions. [Reviewed source](https://arxiv.org/abs/2010.03768) · 2026-10-29

- **nuPlan** · 2021 · Benchmark
  A large-scale real-world planning dataset and benchmark with sensor logs, maps, trajectories, and closed-loop evaluation tools for autonomous driving.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `Trajectories` · `GPS / IMU`
  [Homepage](https://www.nuscenes.org/nuplan) · [Paper](https://arxiv.org/abs/2106.11810) · [Code](https://github.com/motional/nuplan-devkit) · Access: Registration required
  Inclusion evidence C3: Human-driving trajectories and a closed-loop simulator support long-horizon motion planning and resulting state evolution. [Reviewed source](https://arxiv.org/abs/2106.11810) · 2026-10-29

- **PettingZoo** · 2021 · Collection / registry
  A standardized collection of multi-agent environments.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Homepage](https://pettingzoo.farama.org/) · [Code](https://github.com/Farama-Foundation/PettingZoo) · [Paper](https://arxiv.org/abs/2009.14471) · Access: Open-source library
  Inclusion evidence C2: Multi-agent environment API bundles interactive transition-generating environments. Framework/collection; component environments may overlap other records. [Reviewed source](https://arxiv.org/abs/2009.14471) · 2026-10-29

- **robomimic Datasets** · 2021 · Dataset
  Robot manipulation demonstration datasets and benchmarks for imitation learning across tasks, sources, and visual states.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State`
  [Homepage](https://robomimic.github.io/) · [Paper](https://arxiv.org/abs/2108.03298) · [Code](https://github.com/ARISE-Initiative/robomimic) · Access: Official benchmark and download
  Inclusion evidence C2: Offline human demonstration datasets span simulated and real multi-stage manipulation tasks with differing demonstration quality. [Reviewed source](https://arxiv.org/abs/2108.03298) · 2026-10-29

- **ThreeDWorld Transport Challenge** · 2021 · Generation environment / toolkit
  A visually guided task-and-motion planning benchmark in ThreeDWorld where a two-armed agent finds, grasps, and transports household objects under physical constraints.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Simulation State` · `Object State`
  [Paper](https://arxiv.org/abs/2103.14025) · [Code](https://github.com/chuangg/tdw-transport-challenge-starter-code) · Access: Official paper and starter code available
  Inclusion evidence C2: Agents plan and execute action sequences that change object states under physical constraints in ThreeDWorld. [Reviewed source](https://arxiv.org/abs/2103.14025) · 2026-10-29

- **ALFRED** · 2020 · Dataset
  A dataset and benchmark of language-guided indoor navigation and manipulation demonstrations.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Language` · `Object State`
  [Homepage](https://askforalfred.com/) · [Paper](https://arxiv.org/abs/1912.01734) · [Code](https://github.com/askforalfred/alfred) · Access: Official dataset and benchmark
  Inclusion evidence C2: Expert demonstrations pair egocentric observations and action sequences with non-reversible household state changes. [Reviewed source](https://arxiv.org/abs/1912.01734) · 2026-10-29

- **Lyft Level 5 Motion Prediction Dataset** · 2020 · Dataset
  Traffic-agent positions and motions organized into 25-second scenes with semantic maps, for motion prediction, planning and simulation.
  `Autonomous Driving` · `Trajectories` · `Maps`
  [Paper](https://arxiv.org/abs/2006.14480) · Access: Paper identifies a data channel; current access not tested
  Inclusion evidence C3: The cited motion-prediction release contains 25-second scenes with positions/motions of traffic participants and maps; distinguish it from Lyft perception-only releases. [Reviewed source](https://arxiv.org/abs/2006.14480) · 2026-10-29

- **NetHack Learning Environment** · 2020 · Generation environment / toolkit
  A long-horizon NetHack interaction environment.
  `Games / Virtual Environments` · `Game State` · `Action` · `Text` · `Reward`
  [Code](https://github.com/facebookresearch/nle) · [Paper](https://arxiv.org/abs/2006.13760) · Access: Open-source environment
  Inclusion evidence C2: Procedurally generated stochastic game environments and task suite expose actions and persistent game-state evolution. [Reviewed source](https://arxiv.org/abs/2006.13760) · 2026-10-29

- **openDD** · 2020 · Dataset
  A drone-based traffic trajectory dataset for autonomous-driving research, covering natural interactions among vehicles, cyclists, and pedestrians at German roundabouts and intersections.
  `Autonomous Driving` · `Urban / 3D Scene` · `Trajectories` · `Object Metadata` · `Agent Pose` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2007.08463) · Access: Paper and project resources document the dataset; data access requires verification
  Inclusion evidence C3: Accurately tracked road-user trajectories and roundabout maps explicitly support traffic-scene prediction. [Reviewed source](https://arxiv.org/abs/2007.08463) · 2026-10-29

- **Ravens** · 2020 · Generation environment / toolkit
  A tabletop robot manipulation benchmark with procedural tasks and demonstration trajectories.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Simulation State`
  [Code](https://github.com/google-research/ravens) · Access: Official code and generation tools
  Inclusion evidence C2: Official release documents MDP transitions with RGB-D observations and primitive robot actions, and downloadable generated train/test data. [Reviewed source](https://github.com/google-research/ravens) · 2026-10-29

- **RLBench** · 2020 · Generation environment / toolkit
  A programmable robot manipulation suite built on CoppeliaSim, offering many tasks, demonstrations, and multi-view observations for reinforcement learning, imitation, and controllable simulation.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Language`
  [Homepage](https://sites.google.com/view/rlbench) · [Paper](https://arxiv.org/abs/1909.12271) · [Code](https://github.com/stepjam/RLBench) · Access: Open generation toolkit
  Inclusion evidence C2: Manipulation tasks expose visual/proprioceptive observations and unlimited motion-planned demonstrations with a documented generator. [Reviewed source](https://arxiv.org/abs/1909.12271) · 2026-10-29

- **rounD** · 2020 · Dataset
  A naturalistic road-user trajectory dataset recorded by drones at German roundabouts, targeting behavior modeling in unsignalized, highly interactive traffic scenes with vehicles, pedestrians, and cyclists.
  `Autonomous Driving` · `Urban / 3D Scene` · `Trajectories` · `Object Metadata` · `Agent Pose` · `Scene Metadata`
  [Homepage](https://levelxdata.com/round-dataset/) · [Paper](https://ieeexplore.ieee.org/document/9294728) · Access: Official leveLXData/rounD request page; access requires agreeing to dataset terms
  Inclusion evidence C3: Official release supplies naturalistic road-user trajectories and roundabout map geometry, with parsing and visualization tools. [Reviewed source](https://levelxdata.com/round-dataset/) · 2026-10-29

- **BabyAI** · 2019 · Generation environment / toolkit
  An embodied-learning platform generating language instructions, grid environments, and expert trajectories.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Language` · `Simulation State`
  [Paper](https://arxiv.org/abs/1810.08272) · [Code](https://github.com/mila-iqia/babyai) · Access: Official environment and generator
  Inclusion evidence C2: Interactive instruction-following levels and a heuristic expert produce executable action sequences in an extensible environment suite. [Reviewed source](https://arxiv.org/abs/1810.08272) · 2026-10-29

- **Franka Kitchen** · 2019 · Derived data / subset
  A long-horizon kitchen robot manipulation environment with human demonstration trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Object State`
  [Paper](https://arxiv.org/abs/1910.11956) · [Code](https://github.com/Farama-Foundation/D4RL) · Access: Official environment and offline data
  Inclusion evidence C2: D4RL supplies fixed offline datasets with observations, actions and next_observations for its task environments. Franka Kitchen is a constituent task family, not independent of D4RL. [Reviewed source](https://github.com/Farama-Foundation/D4RL) · 2026-10-29

- **Meta-World** · 2019 · Generation environment / toolkit
  A robot manipulation benchmark for multi-task and meta reinforcement learning, with a shared embodiment and programmable tasks for generated trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Reward`
  [Homepage](https://meta-world.github.io/) · [Paper](https://arxiv.org/abs/1910.10897) · [Code](https://github.com/Farama-Foundation/Metaworld) · Access: Open generation toolkit
  Inclusion evidence C2: Official robot-task interface explicitly demonstrates reset observations followed by action-conditioned next observations via env.step(action). [Reviewed source](https://github.com/Farama-Foundation/Metaworld) · 2026-10-29

- **MineRL** · 2019 · Dataset
  A Minecraft dataset of human demonstrations with long videos, keyboard and mouse actions, game state, and rewards for sample-efficient learning and open-world planning.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Game State` · `Reward`
  [Homepage](https://minerl.io/) · [Paper](https://arxiv.org/abs/1907.13440) · [Code](https://github.com/minerllabs/minerl) · Access: Open download
  Inclusion evidence C2: Human Minecraft demonstrations are paired with a simulator for interactive learning; retain observation/action trajectories, not ancillary media. [Reviewed source](https://arxiv.org/abs/1907.13440) · 2026-10-29

- **MiniWoB++** · 2019 · Generation environment / toolkit
  A suite of web-interaction environments providing actions, page states, and task trajectories for agent modeling.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Text` · `Reward`
  [Code](https://github.com/Farama-Foundation/miniwob-plusplus) · Access: Open-source benchmark
  Inclusion evidence C2: Official browser-task environment documents configurable actions and resulting observations from env.step(action). [Reviewed source](https://github.com/Farama-Foundation/miniwob-plusplus) · 2026-10-29

- **Neural MMO** · 2019 · Generation environment / toolkit
  A procedurally generated massively multi-agent environment recording actions, local observations, and population-state evolution.
  `Games / Virtual Environments` · `Game State` · `Action` · `Reward` · `RGB Video`
  [Homepage](https://neuralmmo.github.io/) · [Code](https://github.com/NeuralMMO/neural-mmo) · [Paper](https://arxiv.org/abs/1903.00784) · Access: Open-source environment
  Inclusion evidence C2: Persistent multi-agent worlds require combat/navigation actions that alter shared state over time. [Reviewed source](https://arxiv.org/abs/1903.00784) · 2026-10-29

- **OffWorld Gym** · 2019 · Generation environment / toolkit
  An open physical robotics environment and benchmark for real-world reinforcement learning with sensor observations, actions, rewards, and interaction episodes.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Reward`
  [Paper](https://arxiv.org/abs/1910.08639) · [Code](https://github.com/offworld-projects/offworld-gym) · Access: Official repository available
  Inclusion evidence C2: Real robots expose remotely accessible RL interaction environments; service availability is separate from paper-level relevance evidence. [Reviewed source](https://arxiv.org/abs/1910.08639) · 2026-10-29

- **OpenSpiel** · 2019 · Collection / registry
  A collection of game and multi-agent decision environments.
  `Games / Virtual Environments` · `Game State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/google-deepmind/open_spiel) · [Paper](https://arxiv.org/abs/1908.09453) · Access: Open-source framework
  Inclusion evidence C2: Sequential game environments provide state transitions and actions; one-shot games are outside the retained temporal scope. [Reviewed source](https://arxiv.org/abs/1908.09453) · 2026-10-29

- **Overcooked-AI** · 2019 · Generation environment / toolkit
  A cooperative cooking multi-agent environment.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/HumanCompatibleAI/overcooked_ai) · [Paper](https://arxiv.org/abs/1910.05789) · Access: Open-source environment
  Inclusion evidence C2: The released cooperative game environment exposes multi-agent interaction and long-horizon task state; simulator rather than a fixed corpus. [Reviewed source](https://arxiv.org/abs/1910.05789) · 2026-10-29

- **RoboTurk Real-Robot Demonstrations** · 2019 · Dataset
  Real-robot cloth-folding and bowl-stacking episodes with stepwise translation, rotation, gripper actions and front RGB observations.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Language`
  [Homepage](https://www.tensorflow.org/datasets/catalog/roboturk) · Access: Official RLDS schema and storage reference; complete download not tested
  Inclusion evidence C2: The public RLDS version aligns translation/rotation/gripper actions with front RGB in 1,995 episodes. The cited 2019 real-robot release is distinct from the 2018 platform paper. [Reviewed source](https://www.tensorflow.org/datasets/catalog/roboturk) · 2026-10-30

- **THÖR** · 2019 · Dataset
  A human-motion dataset for shared indoor spaces with accurate trajectories, head orientation, gaze, social groups, obstacle maps, and mobile-robot sensor data.
  `Robotics / Embodied AI` · `Egocentric / Human` · `Trajectories` · `Gaze` · `Agent Pose` · `LiDAR` · `Maps`
  [Paper](https://arxiv.org/abs/1909.04403) · Access: Paper entry; official access requires verification
  Inclusion evidence C3: Human motion trajectories include accurate position, orientation, gaze, grouping, goals and nearby robot observations. [Reviewed source](https://arxiv.org/abs/1909.04403) · 2026-10-29

- **CoSTAR Block Stacking** · 2018 · Dataset
  A robot block-stacking demonstration dataset with visual observations, actions, and workspace constraints for compositional skill learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Object State`
  [Paper](https://arxiv.org/abs/1810.11714) · Access: Paper entry only; data access unverified
  Inclusion evidence C2: Robot block-stacking attempts explicitly include dynamic scenes and real time-series interaction data. [Reviewed source](https://arxiv.org/abs/1810.11714) · 2026-10-29

- **Gym Retro** · 2018 · Generation environment / toolkit
  Classic-game emulator environments with pixel observations, discrete actions, and game-state trajectories.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/openai/retro) · Access: Gym environment code; most game ROMs must be obtained separately
  Inclusion evidence C2: Official Gym game environments expose emulator state, rewards, episode conditions and saved initial states. Most game ROMs must be obtained separately; remove the Rainbow citation. [Reviewed source](https://github.com/openai/retro) · 2026-10-29

- **TrajNet** · 2018 · Collection / registry
  A benchmark for pedestrian and multi-agent trajectory prediction that standardizes future-location forecasting, social interaction, and multimodal uncertainty evaluation.
  `Egocentric / Human` · `Autonomous Driving` · `Trajectories` · `Agent Pose` · `Maps`
  [Paper](https://arxiv.org/abs/1805.07663) · Access: Paper-level evidence; original benchmark access not verified
  Inclusion evidence C3: The original TrajNet paper identifies a repository of existing trajectory datasets and future-path prediction evaluation. It is distinct from TrajNet++. [Reviewed source](https://arxiv.org/abs/1805.07663) · 2026-10-29

- **VirtualHome** · 2018 · Generation environment / toolkit
  Represents household activities as executable programs in 3D homes, linking language, action sequences, object states, and rendered video.
  `Games / Virtual Environments` · `Robotics / Embodied AI` · `Text` · `Action` · `Simulation State` · `Synthetic Video`
  [Homepage](http://virtual-home.org/) · [Paper](https://arxiv.org/abs/1806.07011) · [Code](https://github.com/xavierpuigf/virtualhome) · Access: Open generation toolkit
  Inclusion evidence C2: Executable action programs drive agents through Unity household interactions, explicitly generating state-changing activity sequences. [Reviewed source](https://arxiv.org/abs/1806.07011) · 2026-10-29

- **JAAD** · 2017 · Dataset
  A video dataset for joint attention and pedestrian crossing behavior in autonomous driving, with short clips, frame-level pedestrian boxes, occlusion tags, behavior labels, traffic context, and vehicle-action annotations.
  `Autonomous Driving` · `Egocentric / Human` · `RGB Video` · `2D Boxes` · `Action Labels` · `Semantic Labels` · `Trajectories`
  [Homepage](https://data.nvision2.eecs.yorku.ca/JAAD_dataset/) · [Paper](https://openaccess.thecvf.com/content_ICCV_2017_workshops/w3/html/Rasouli_Are_They_Going_ICCV_2017_paper.html) · [Code](https://github.com/ykotseruba/JAAD) · Access: Official dataset page and GitHub annotations are publicly available
  Inclusion evidence C3: Official paper establishes pedestrian intention prediction using temporal behavioral and contextual annotations; retain crossing-prediction scope. [Reviewed source](https://openaccess.thecvf.com/content_ICCV_2017_workshops/w3/html/Rasouli_Are_They_Going_ICCV_2017_paper.html) · 2026-10-29

- **L-CAS 3DOF Pedestrian Trajectories** · 2017 · Dataset
  Robot-mounted LiDAR pedestrian trajectories in an indoor public space, with 3DOF position/orientation prediction evaluation.
  `Robotics / Embodied AI` · `Egocentric / Human` · `Trajectories` · `Agent Pose` · `LiDAR`
  [Homepage](https://lcas.lincoln.ac.uk/wp/3dof-pedestrian-trajectory-dataset/) · Access: Official trajectory and raw LiDAR download links
  Inclusion evidence C3: Official release explicitly extracts 935 world-frame pedestrian trajectories from time-ordered LiDAR recordings. [Reviewed source](https://lcas.lincoln.ac.uk/wp/3dof-pedestrian-trajectory-dataset/) · 2026-10-29

- **PoseTrack** · 2017 · Benchmark
  A multi-person pose estimation and tracking benchmark with temporally consistent keypoints and tracks in video.
  `Egocentric / Human` · `RGB Video` · `Agent Pose` · `Action Labels`
  [Homepage](https://posetrack.net/) · [Paper](https://arxiv.org/abs/1611.07727) · Access: Official challenge portal
  Inclusion evidence C3: Person associations over time define body-joint trajectories in videos; native tracking can use future frames, so forecasting requires separate causal splits. [Reviewed source](https://arxiv.org/abs/1611.07727) · 2026-10-29

- **ATC Pedestrian Tracking Dataset** · 2013 · Dataset
  A large pedestrian-tracking dataset collected in Osaka's ATC shopping mall, using environmental sensors to track real crowd movement over long periods for indoor social navigation and crowd-flow evolution.
  `Egocentric / Human` · `Urban / 3D Scene` · `Trajectories` · `Agent Pose`
  [Homepage](https://dil.atr.jp/crest2010_HRI/ATC_dataset/) · Access: Official ATC dataset page provides data access information
  Inclusion evidence C3: Official release contains complete time-varying person tracks from a sensor network over 92 days. [Reviewed source](https://dil.atr.jp/crest2010_HRI/ATC_dataset/) · 2026-10-29

<a id="spatial-spatiotemporal-world-modeling"></a>

### Spatial & Spatiotemporal World Modeling (70)

- **AudioWorldSim** · 2026 · Generation environment / toolkit
  An open simulation platform for generating binaural-audio world-model trajectories.
  `Robotics / Embodied AI` · `Physics / Science` · `Audio` · `Agent Pose` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.21075) · [Code](https://github.com/Luizerko/AudioWorldSim) · Access: Generator code available; pre-generated data withheld due to source-asset licenses
  Inclusion evidence C2: Agent navigation generates aligned binaural observations. README explicitly withholds pre-generated data because source scene licenses restrict redistribution. [Reviewed source](https://github.com/Luizerko/AudioWorldSim) · 2026-10-29

- **Sekai2** · 2026 · Dataset
  A real-world long-horizon egocentric video dataset for interactive world models with camera trajectories and temporally grounded captions.
  `Egocentric / Human` · `RGB Video` · `Camera Pose` · `Language` · `Trajectories`
  [Homepage](https://kangverse.github.io/sekai2-project/) · [Paper](https://arxiv.org/abs/2608.09449) · [Code](https://github.com/kangverse/Sekai2-Dataset) · Access: Official dataset page announced; full release pending
  Inclusion evidence C3: Released long video clips have camera trajectories, temporally grounded dynamics annotations and revisits for persistent-state modeling. [Reviewed source](https://arxiv.org/abs/2608.09449) · 2026-10-29

- **CU-MULTI** · 2025 · Dataset
  A multi-robot outdoor dataset with long sequences collected by a ground robot.
  `Robotics / Embodied AI` · `RGB Video` · `LiDAR` · `IMU / GPS` · `Trajectories`
  [Code](https://github.com/arpg/CU-Multi) · Access: Official repository and sequence documentation available
  Inclusion evidence C3: ROS2 recordings pair RGB/depth/LiDAR with timestamped ground-truth path and odometry; use ordered observation/pose sequences, not static maps. [Reviewed source](https://github.com/arpg/CU-Multi) · 2026-10-29

- **EOC-Bench** · 2025 · Benchmark
  A benchmark systematically evaluating object-centric embodied cognition in dynamic egocentric scenarios.
  `Egocentric / Human` · `Robotics / Embodied AI` · `RGB Video` · `Object State` · `QA` · `Language`
  [Homepage](https://circleradon.github.io/EOCBench/) · [Paper](https://arxiv.org/abs/2506.05287) · [Code](https://github.com/alibaba-damo-academy/EOCBench) · Access: Benchmark dataset and project page publicly available
  Inclusion evidence C1: Future-object questions and temporal accuracy metrics evaluate changes caused by egocentric interactions; retain the predictive track rather than all generic QA. [Reviewed source](https://arxiv.org/abs/2506.05287) · 2026-10-29

- **GrandTour Dataset** · 2025 · Dataset
  A multisensor, long-range legged-robot trajectory dataset collected in challenging real-world environments.
  `Robotics / Embodied AI` · `RGB Video` · `LiDAR` · `IMU / GPS` · `Trajectories` · `Robot State`
  [Homepage](https://grand-tour.leggedrobotics.com/dataset) · [Paper](https://arxiv.org/abs/2602.18164) · [Code](https://github.com/leggedrobotics/grand_tour_dataset) · Access: Dataset page, Hugging Face repository, and localization benchmark available
  Inclusion evidence C3: Time-synchronized sensors and proprioception are paired with high-precision ground-truth robot trajectories. [Reviewed source](https://arxiv.org/abs/2602.18164) · 2026-10-29

- **i2Nav-Robot** · 2025 · Dataset
  A large-scale indoor-outdoor robot dataset for multisensor-fusion navigation and mapping.
  `Robotics / Embodied AI` · `RGB Video` · `LiDAR` · `IMU / GPS` · `Trajectories`
  [Code](https://github.com/i2Nav-WHU/i2Nav-Robot) · Access: Official repository and baseline code available
  Inclusion evidence C3: Ten synchronized robot sequences include accurate ground-truth pose and velocity over recorded trajectories. [Reviewed source](https://github.com/i2Nav-WHU/i2Nav-Robot) · 2026-10-29

- **iilab Indoor LiDAR SLAM Dataset** · 2025 · Dataset
  Real-robot indoor LiDAR sequences and toolkit for SLAM, localization, and 3D reconstruction.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `LiDAR` · `IMU` · `Camera Pose` · `Trajectories`
  [Homepage](https://doi.org/10.25747/VHNJ-WM80) · [Code](https://github.com/JorgeDFR/iilabs3d-toolkit) · Access: Official toolkit and DOI-backed dataset entry available
  Inclusion evidence C3: Official data repository describes synchronized LiDAR, IMU and wheel odometry with motion-capture ground truth and timestamp correction; retain ordered sensor/pose sequences. [Reviewed source](https://doi.org/10.25747/VHNJ-WM80) · 2026-10-29

- **M3DGR** · 2025 · Dataset
  A multisensor, multiscenario SLAM dataset for ground robots.
  `Robotics / Embodied AI` · `RGB Video` · `LiDAR` · `IMU / GPS` · `Trajectories`
  [Code](https://github.com/sjtuyinjie/M3DGR) · Access: Official dataset repository and benchmark code available
  Inclusion evidence C3: Official multi-sensor SLAM release documents TUM-format trajectories, recording time and trajectory tracking metrics; retain ordered sensor/pose data. [Reviewed source](https://github.com/sjtuyinjie/M3DGR) · 2026-10-29

- **MineInsight (Robot Sequences)** · 2025 · Dataset
  Robot ROS2 recordings contain sensor observations and dynamic /tf transforms.
  `Robotics / Embodied AI` · `RGB Video` · `LiDAR` · `Camera Pose` · `Trajectories`
  [Code](https://raw.githubusercontent.com/mariomlz99/MineInsight/main/README.md) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: The release documents ROS2 sequences and dynamic /tf transforms in addition to sensor observations. First release was June 2025; current documentation also covers a 2026 update. Inclusion concerns robot/sensor motion, not moving landmine dynamics. [Reviewed source](https://raw.githubusercontent.com/mariomlz99/MineInsight/main/README.md) · 2026-10-30

- **NVIDIA PhysicalAI Autonomous Vehicles** · 2025 · Dataset
  The publisher confirms sensor clips with relative timestamps and aligned historical/future egomotion.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Trajectories` · `Camera Pose`
  [Homepage](https://huggingface.co/datasets/nvidia/PhysicalAI-Autonomous-Vehicles/discussions/4) · [Code](https://github.com/NVlabs/physical_ai_av) · Access: Publisher-gated dataset; terms acceptance required
  Inclusion evidence C3: The publisher confirms 20-second sensor clips with relative timestamps and aligned egomotion including history and future. Sensor streams are asynchronous; data access requires accepting the publisher's conditions. [Reviewed source](https://huggingface.co/datasets/nvidia/PhysicalAI-Autonomous-Vehicles/discussions/4) · 2026-10-30

- **OmniWorld** · 2025 · Collection / registry
  A multi-domain, multimodal dataset for 4D world modeling across games, city walks, human-object interaction, and robot trajectories.
  `Games / Virtual Environments` · `Egocentric / Human` · `Robotics / Embodied AI` · `RGB Video` · `Depth` · `Camera Pose` · `Optical Flow` · `Text`
  [Homepage](https://yangzhou24.github.io/OmniWorld/) · [Paper](https://arxiv.org/abs/2509.12201) · [Code](https://github.com/yangzhou24/OmniWorld) · Access: Multiple subsets available on Hugging Face and ModelScope
  Inclusion evidence C1: OmniWorld-Game and curated public datasets explicitly support future prediction and dynamic 4D modeling; aggregate data overlap must remain explicit. [Reviewed source](https://arxiv.org/abs/2509.12201) · 2026-10-29

- **Oxford Spires Dataset** · 2025 · Dataset
  Multisite Oxford sensor sequences with cameras, LiDAR, IMU, reference maps, and core-sequence trajectory truth.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `Multi-view RGB Video` · `LiDAR` · `IMU` · `Camera Pose`
  [Homepage](https://dynamic.robots.ox.ac.uk/datasets/oxford-spires/) · Access: Official Google Drive and Hugging Face resources
  Inclusion evidence C3: Core recording sequences explicitly include centimetre-accurate ground-truth LiDAR trajectories aligned with image recordings. [Reviewed source](https://dynamic.robots.ox.ac.uk/datasets/oxford-spires/) · 2026-10-29

- **SLABIM** · 2025 · Dataset
  An indoor dataset coupling SLAM sensor data with building information models.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2502.16856) · [Code](https://github.com/HKUST-Aerial-Robotics/SLABIM) · Access: Paper entry; release status requires verification
  Inclusion evidence C3: Timestamped multi-session SLAM sensor recordings accompany building models; retain ordered sensing sequences, not BIM assets as dynamics data. [Reviewed source](https://arxiv.org/abs/2502.16856) · 2026-10-29

- **SPICE-HL3** · 2025 · Dataset
  A single-photon, inertial, stereo, and odometry dataset in simulated high-latitude lunar conditions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2506.22956) · Access: Paper entry; release status requires verification
  Inclusion evidence C3: Robot images, inertial measurements and wheel odometry are recorded along seven trajectories under varied lunar-like illumination. [Reviewed source](https://arxiv.org/abs/2506.22956) · 2026-10-29

- **STRIDE** · 2025 · Dataset
  A spatiotemporal autonomy dataset organizing panoramic road imagery into observation, state, and action nodes.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2506.11302) · [Homepage](https://huggingface.co/datasets/Tera-AI/STRIDE) · Access: Paper entry; release status requires verification
  Inclusion evidence C2: Road imagery is organized into connected observation, state and movement-action nodes for controlled spatiotemporal world modeling. [Reviewed source](https://arxiv.org/abs/2506.11302) · 2026-10-29

- **STU (Sequential Sensor and Pose Data)** · 2025 · Dataset
  Sequential LiDAR/camera recordings include KISS-ICP vehicle-pose estimates exported in KITTI format.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Camera Pose` · `Trajectories`
  [Paper](https://arxiv.org/html/2505.02148v1) · Access: Paper documents the resource; complete download not tested
  Inclusion evidence C3: The paper documents sequential LiDAR/camera recordings and per-scan vehicle poses estimated by KISS-ICP and exported in KITTI format. Inclusion is limited to sequential egomotion data; these estimated poses are not independent ground truth. [Reviewed source](https://arxiv.org/html/2505.02148v1) · 2026-10-30

- **TPT-Bench (Egomotion Sequences)** · 2025 · Dataset
  Timestamped images and ROS bags provide an extractable ZED odometry path.
  `Robotics / Embodied AI` · `RGB Video` · `Camera Pose` · `Trajectories`
  [Code](https://raw.githubusercontent.com/MedlarTea/TPT-BENCH-TOOLS/main/README.md) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: Timestamped images and per-sequence ROS bags include an explicitly extractable ZED odometry path. This supports robot egomotion sequences; native target-person tracking scores do not measure forecasting. [Reviewed source](https://raw.githubusercontent.com/MedlarTea/TPT-BENCH-TOOLS/main/README.md) · 2026-10-30

- **Ego-Exo4D** · 2024 · Dataset
  A synchronized first- and third-person dataset of human skills across sports, music, and cooking, with 3D, language, and camera information.
  `Egocentric / Human` · `Multi-view RGB Video` · `Audio` · `Language` · `Camera Pose` · `3D Annotations`
  [Homepage](https://ego-exo4d-data.org/) · [Paper](https://arxiv.org/abs/2311.18259) · [Code](https://github.com/facebookresearch/Ego4d) · Access: Application required
  Inclusion evidence C3: Synchronized long-form ego/exocentric recordings include camera poses and IMU. Retain temporal motion/pose tracks; activity classification alone is not the criterion. [Reviewed source](https://arxiv.org/abs/2311.18259) · 2026-10-29

- **Argoverse 2** · 2023 · Dataset
  A multimodal autonomous-driving collection for perception, motion forecasting, and map understanding, with sensor logs, HD maps, and diverse urban motion scenarios.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `Trajectories` · `3D Boxes`
  [Homepage](https://www.argoverse.org/av2.html) · [Paper](https://arxiv.org/abs/2301.00493) · [Code](https://github.com/argoverse/av2-api) · Access: Open download
  Inclusion evidence C3: Explicit motion-forecasting scenarios and sequential LiDAR with poses support future-agent and point-cloud prediction. [Reviewed source](https://arxiv.org/abs/2301.00493) · 2026-10-29

- **GNM SACSoN Navigation** · 2023 · Dataset
  Office navigation trajectories pair position/yaw targets with RGB and observed planar position/yaw.
  `Robotics / Embodied AI` · `RGB Video` · `Agent Pose` · `Trajectories`
  [Homepage](https://www.tensorflow.org/datasets/catalog/berkeley_gnm_sac_son) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C3: Office navigation trajectories pair position/yaw targets with RGB and observed planar position/yaw. Steps are organized into episodes. Targets are navigation waypoints, not wheel/motor commands. [Reviewed source](https://www.tensorflow.org/datasets/catalog/berkeley_gnm_sac_son) · 2026-10-30

- **Robo360** · 2023 · Dataset
  An omnispective robotic manipulation dataset with dense multiview coverage and objects spanning varied material and optical properties for 3D physical-world modeling.
  `Robotics / Embodied AI` · `Physics / Science` · `Multi-view RGB Video` · `Camera Pose` · `Action` · `Object Metadata`
  [Homepage](https://robo360dataset.github.io/) · [Paper](https://arxiv.org/abs/2312.06686) · [Code](https://github.com/robo360dataset/robo360dataset.github.io) · Access: Official project repository and paper entry available; dataset terms require verification
  Inclusion evidence C1: Dense-view robot manipulation recordings are explicitly used for dynamic neural representations and multi-view policy learning. [Reviewed source](https://arxiv.org/abs/2312.06686) · 2026-10-29

- **ScanNet++ (iPhone Sequences)** · 2023 · Dataset
  Official tools extract indexed iPhone video frames and match them to camera poses.
  `Urban / 3D Scene` · `RGB Video` · `Camera Pose` · `Trajectories`
  [Code](https://raw.githubusercontent.com/scannetpp/scannetpp/main/iphone/prepare_iphone_data.py) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: The official loader extracts numbered frames from iPhone videos and matches sorted frame indices to camera poses. Inclusion covers observation/egomotion sequences in static scenes, not object dynamics. [Reviewed source](https://raw.githubusercontent.com/scannetpp/scannetpp/main/iphone/prepare_iphone_data.py) · 2026-10-30

- **Assembly101 (Temporal Recordings and Poses)** · 2022 · Dataset
  Assembly/disassembly recordings contain synchronized views, time-indexed hand keypoints and action-anticipation tasks.
  `Egocentric / Human` · `Multi-view RGB Video` · `3D State` · `Action Labels` · `Trajectories`
  [Code](https://raw.githubusercontent.com/assembly-101/assembly101-download-scripts/main/README.md) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: Assembly recordings include synchronized views and time-indexed 2D/3D hand poses at 60 fps. The native protocol includes action anticipation; hand trajectories also permit separately specified motion forecasting. [Reviewed source](https://raw.githubusercontent.com/assembly-101/assembly101-download-scripts/main/README.md) · 2026-10-30

- **MOVi** · 2022 · Derived data / subset
  A family of Kubric-generated multi-object videos with instance masks, depth, optical flow, and 3D attributes for object discovery and interpretable dynamics.
  `Physics / Science` · `Synthetic Video` · `Depth` · `Optical Flow` · `Segmentation` · `3D State`
  [Code](https://github.com/google-research/kubric) · Access: Open download
  Inclusion evidence C4: The Kubric release identifies generated multi-object video challenges and downloadable data produced by its physical simulation pipeline. MOVi is a derived family, not an independent collection. [Reviewed source](https://github.com/google-research/kubric) · 2026-10-29

- **NTU VIRAL** · 2022 · Dataset
  Aerial visual, inertial, LiDAR, and UWB ranging sequences paired with ground-tracked position truth.
  `Robotics / Embodied AI` · `Stereo RGB` · `LiDAR` · `IMU` · `Trajectories`
  [Homepage](https://ntu-aris.github.io/ntu_viral_dataset/) · Access: Official repository downloads and CSV ground truth
  Inclusion evidence C3: Official release supplies flight sequences with synchronized cameras, lidar, IMU/UWB and ground truth. [Reviewed source](https://ntu-aris.github.io/ntu_viral_dataset/) · 2026-10-29

- **SHIFT (Temporal Sequences)** · 2022 · Dataset
  Synthetic driving video at 10 fps provides sequence/frame indices, object track IDs and sensor-pose tools.
  `Autonomous Driving` · `Synthetic Video` · `3D Boxes` · `Camera Pose` · `Trajectories`
  [Code](https://raw.githubusercontent.com/SysCV/shift-dev/main/README.md) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: The release provides 10 fps videos, sequence/frame indexing, object track IDs and sensor-pose tools. Tracking sequences can support forecasting under an explicit history/future split. [Reviewed source](https://raw.githubusercontent.com/SysCV/shift-dev/main/README.md) · 2026-10-30

- **AIST++** · 2021 · Dataset
  Music-aligned dance sequences with per-frame 3D keypoints and calibrated multi-view images.
  `Egocentric / Human` · `Multi-view RGB Video` · `3D State` · `Audio` · `Trajectories`
  [Homepage](https://google.github.io/aistplusplus_dataset/) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: The release documents 1,408 dance motion sequences, per-frame 3D keypoints, music and calibrated camera views. Forecasting needs a history/future split. [Reviewed source](https://google.github.io/aistplusplus_dataset/) · 2026-10-30

- **ARKitScenes (Raw Sequences)** · 2021 · Dataset
  Raw RGB-D captures include timestamped camera rotation and translation trajectories.
  `Urban / 3D Scene` · `RGB-D` · `Camera Pose` · `Trajectories`
  [Code](https://raw.githubusercontent.com/apple-aiml-research/ARKitScenes/main/DATA.md) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: Raw captures include RGB-D/video and camera trajectories whose rows contain timestamp, rotation and translation. Inclusion covers egomotion and observation sequences, not moving-object dynamics. [Reviewed source](https://raw.githubusercontent.com/apple-aiml-research/ARKitScenes/main/DATA.md) · 2026-10-30

- **CrowdBot** · 2021 · Dataset
  Crowded-environment ROS recordings contain RGB-D, LiDAR, robot pose/velocity and pedestrian tracks.
  `Robotics / Embodied AI` · `RGB-D` · `LiDAR` · `Robot State` · `Trajectories`
  [Homepage](https://www.epfl.ch/labs/lasa/crowdbot-dataset/) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: ROS bag recordings pair onboard RGB-D/LiDAR with robot pose, velocity, controller state and pedestrian tracks. The release citation is December 2021, correcting the former 2020 entry. [Reviewed source](https://www.epfl.ch/labs/lasa/crowdbot-dataset/) · 2026-10-30

- **DexYCB** · 2021 · Dataset
  The official loader exposes complete hand-object motion sequences with images, hand joints and object geometry.
  `Egocentric / Human` · `RGB Video` · `3D State` · `Object State` · `Trajectories`
  [Code](https://raw.githubusercontent.com/NVlabs/dex-ycb-toolkit/master/README.md) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: The official toolkit loads full captured hand/object motion sequences and renders per-frame RGB, hand joints and object geometry; it lists 1,000 sequences. Pose-estimation scores are not forecasting metrics. [Reviewed source](https://raw.githubusercontent.com/NVlabs/dex-ycb-toolkit/master/README.md) · 2026-10-30

- **DSEC** · 2021 · Dataset
  Real driving sequences with stereo events and color images, aligned sensors, disparity, and subsequently released optical-flow truth.
  `Autonomous Driving` · `Event Camera` · `Stereo RGB` · `LiDAR` · `GPS / IMU` · `Optical Flow`
  [Homepage](https://dsec.ifi.uzh.ch/) · [Paper](https://arxiv.org/abs/2103.06011) · Access: Official sensor downloads and flow/disparity benchmarks
  Inclusion evidence C3: Driving recordings synchronize stereo frames/events with LiDAR and RTK GPS, enabling ordered observation/ego-trajectory modeling. [Reviewed source](https://arxiv.org/abs/2103.06011) · 2026-10-29

- **GNM RECON Navigation** · 2021 · Dataset
  Outdoor navigation episodes expose RGB, planar position/yaw and future waypoint targets.
  `Robotics / Embodied AI` · `RGB Video` · `Agent Pose` · `Trajectories`
  [Homepage](https://www.tensorflow.org/datasets/catalog/berkeley_gnm_recon) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C3: Outdoor navigation episodes expose RGB, planar position/yaw and future waypoint targets. Steps are organized into episodes. Targets are navigation waypoints, not wheel/motor commands. [Reviewed source](https://www.tensorflow.org/datasets/catalog/berkeley_gnm_recon) · 2026-10-30

- **H2O: Two Hands Manipulating Objects** · 2021 · Dataset
  Synchronized multi-view RGB-D interaction sequences provide hand, object and camera poses.
  `Egocentric / Human` · `RGB-D` · `3D State` · `Object State` · `Camera Pose`
  [Homepage](https://taeinkwon.com/projects/h2o/) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: Synchronized RGB-D interaction sequences have per-frame 3D hand, 6D object and camera poses. Temporal smoothing is documented; forecasting requires a separate causal split. [Reviewed source](https://taeinkwon.com/projects/h2o/) · 2026-10-30

- **Hilti SLAM Challenge Dataset** · 2021 · Dataset
  Handheld construction and office sequences with synchronized vision, LiDAR, IMU, and sparse high-accuracy pose ground truth.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB Video` · `LiDAR` · `IMU` · `Camera Pose`
  [Code](https://github.com/Hilti-Research/hilti-slam-challenge-2021) · [Paper](https://arxiv.org/abs/2109.11316) · Access: Official repository links to datasets and ground truth
  Inclusion evidence C3: Indoor/outdoor robot sensor sequences have accurate ground-truth references; retain temporal observation/pose modeling, not static construction perception. [Reviewed source](https://arxiv.org/abs/2109.11316) · 2026-10-29

- **KITTI-360** · 2021 · Dataset
  A multimodal 3D dataset for long-range urban driving with panoramic images, LiDAR, trajectories, and scene annotations.
  `Autonomous Driving` · `Urban / 3D Scene` · `LiDAR` · `RGB Video` · `3D Boxes` · `Maps` · `GPS / IMU`
  [Homepage](https://www.cvlibs.net/datasets/kitti-360/) · Access: Official benchmark download
  Inclusion evidence C3: Official release supplies ordered driving frames with accurate geolocation, consistent instance IDs and released image/LiDAR timestamps. [Reviewed source](https://www.cvlibs.net/datasets/kitti-360/) · 2026-10-29

- **TUM-VIE** · 2021 · Dataset
  Handheld and head-mounted sequences with synchronized stereo events, grayscale frames, IMU, and start/end motion-capture ground truth.
  `Robotics / Embodied AI` · `Event Camera` · `Stereo Grayscale` · `IMU` · `Camera Pose`
  [Homepage](https://cvg.cit.tum.de/data/datasets/visual-inertial-event-dataset) · [Paper](https://arxiv.org/abs/2108.07329) · Access: Official sequence downloads and visualization script
  Inclusion evidence C3: Hardware-synchronized event/frame/IMU streams record handheld and head-mounted motion trajectories; future prediction requires a causal sequence split. [Reviewed source](https://arxiv.org/abs/2108.07329) · 2026-10-29

- **Audi Autonomous Driving Dataset** · 2020 · Dataset
  Audi's open autonomous-driving multisensor dataset with cameras, LiDAR, semantic labels, and vehicle state.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Semantic Labels` · `GPS / IMU`
  [Paper](https://arxiv.org/abs/2004.06320) · Access: Official download portal
  Inclusion evidence C3: Retain the 392,556 sequential unannotated sensor frames with vehicle-bus data; non-sequential segmentation images alone do not qualify. [Reviewed source](https://arxiv.org/abs/2004.06320) · 2026-10-29

- **DoTA (Tracks and FOL Features)** · 2020 · Dataset
  Beyond traffic-anomaly videos, the release includes object-box tracks and optical-flow features for future object localization.
  `Autonomous Driving` · `RGB Video` · `2D Boxes` · `Optical Flow` · `Trajectories`
  [Code](https://raw.githubusercontent.com/MoonBlvd/Detection-of-Traffic-Anomaly/master/README.md) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: The release includes object bounding-box tracks and optical-flow features used for future-object-localization models, plus ordered frames and anomaly intervals. The tracks support prediction; anomaly labels alone would not. [Reviewed source](https://raw.githubusercontent.com/MoonBlvd/Detection-of-Traffic-Anomaly/master/README.md) · 2026-10-30

- **InterHand2.6M** · 2020 · Dataset
  Image sequences link frame indices to 3D hand joints and MANO parameters, with a separate 30 fps release.
  `Egocentric / Human` · `Multi-view RGB Video` · `3D State` · `Trajectories`
  [Homepage](https://mks0601.github.io/InterHand2.6M/) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: Sequence names and frame indices link images to 3D hand joints and MANO parameters; a 30 fps release supports temporal research. Some captures have missing frames, requiring explicit timing checks. [Reviewed source](https://mks0601.github.io/InterHand2.6M/) · 2026-10-30

- **Newer College Dataset** · 2020 · Dataset
  Handheld Oxford sequences combining LiDAR, vision, IMU, and centimeter-accurate trajectory ground truth.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `Stereo RGB` · `LiDAR` · `IMU` · `Camera Pose`
  [Homepage](https://ori-drs.github.io/newer-college-dataset/) · Access: Official project links to sequence downloads
  Inclusion evidence C3: Hand-carried stereo/LiDAR/IMU recordings include challenging motion sequences and precise ground truth; static map alone is not the inclusion basis. [Reviewed source](https://ori-drs.github.io/newer-college-dataset/) · 2026-10-29

- **PandaSet** · 2020 · Dataset
  A multi-sensor autonomous-driving dataset with cameras, LiDAR, GPS/IMU, and 3D annotations across urban traffic scenes.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `GPS / IMU` · `3D Boxes` · `Segmentation`
  [Code](https://github.com/scaleapi/pandaset-devkit) · [Paper](https://arxiv.org/abs/2112.12610) · Access: Original download pages are no longer reliable; current publisher download route unconfirmed
  Inclusion evidence C3: Official devkit exposes sequences of sensor measurements and per-frame poses; retain sequential recordings. [Reviewed source](https://github.com/scaleapi/pandaset-devkit) · 2026-10-29

- **pNEUMA** · 2020 · Dataset
  A large-scale urban traffic trajectory dataset captured by multiple drones over central Athens, providing continuous movements of vehicles, pedestrians, and other road users in a dense city network.
  `Autonomous Driving` · `Urban / 3D Scene` · `Trajectories` · `Agent Pose` · `Object Metadata` · `Scene Metadata`
  [Homepage](https://open-traffic.epfl.ch/) · Access: Official Open Traffic platform provides dataset access
  Inclusion evidence C3: Drone recordings yield naturalistic urban vehicle trajectories across many intersections. [Reviewed source](https://open-traffic.epfl.ch/) · 2026-10-29

- **TartanAir** · 2020 · Dataset
  Continuous simulated camera trajectories with aligned images, depth, optical flow, and pose ground truth.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `Stereo RGB` · `Depth` · `Optical Flow` · `Camera Pose` · `LiDAR`
  [Homepage](https://theairlab.org/tartanair-dataset/) · [Paper](https://arxiv.org/abs/2003.14338) · Access: Official project provides dataset access instructions
  Inclusion evidence C3: Simulation trajectory sampling provides ordered stereo/depth/flow observations and camera poses amid moving objects and changing conditions. [Reviewed source](https://arxiv.org/abs/2003.14338) · 2026-10-29

- **BLVD** · 2019 · Dataset
  A large-scale 5D semantic autonomous-driving benchmark combining video, 3D objects, trajectories, maps, and time for dynamic traffic-scene modeling.
  `Autonomous Driving` · `Urban / 3D Scene` · `RGB Video` · `3D Boxes` · `Trajectories` · `Maps` · `Semantic Labels`
  [Paper](https://arxiv.org/abs/1903.06405) · [Code](https://github.com/VCCIV/BLVD) · Access: Official repository available
  Inclusion evidence C3: The benchmark explicitly targets temporal object tracking, interactive events and intention prediction, beyond static detection. [Reviewed source](https://arxiv.org/abs/1903.06405) · 2026-10-29

- **Habitat-Lab** · 2019 · Generation environment / toolkit
  An embodied navigation and manipulation simulator.
  `Robotics / Embodied AI` · `RGB Video` · `Depth` · `Agent Pose` · `Action`
  [Homepage](https://aihabitat.org/) · [Code](https://github.com/facebookresearch/habitat-lab) · [Paper](https://arxiv.org/abs/1904.01201) · Access: Open-source simulator
  Inclusion evidence C2: Configurable embodied agents and sensors interact in a 3D simulator through task APIs; HM3D/MP3D/Replica are asset dependencies. [Reviewed source](https://arxiv.org/abs/1904.01201) · 2026-10-29

- **HRI Advice Dataset (HAD)** · 2019 · Derived data / subset
  HDD-derived driving videos contain CAN-bus signals and natural-language driving advice.
  `Autonomous Driving` · `RGB Video` · `Robot State` · `Language` · `Trajectories`
  [Homepage](https://usa.honda-ri.com/HAD) · Access: Request with a university email
  Inclusion evidence C3: The publisher identifies 30 hours of HDD-derived driving videos with CAN-bus signals and language advice. Advice is not a low-level driving command; access requires a university request for non-commercial use. [Reviewed source](https://usa.honda-ri.com/HAD) · 2026-10-30

- **iGibson** · 2019 · Generation environment / toolkit
  An indoor embodied-AI simulation platform providing visual, tactile, action, and physical-state trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Depth` · `Simulation State` · `Action`
  [Homepage](https://svl.stanford.edu/igibson/) · [Code](https://github.com/StanfordVL/iGibson) · Access: Open-source simulator and assets
  Inclusion evidence C4: Official simulator couples visual observations with physical interactions and explicit object states including temperature, wetness and slicing. [Reviewed source](https://svl.stanford.edu/igibson/) · 2026-10-29

- **nuScenes** · 2019 · Dataset
  A multi-sensor autonomous-driving dataset covering urban roads in Boston and Singapore, with synchronized cameras, LiDAR, radar, localization, and 3D annotations for spatiotemporal modeling.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `RADAR` · `IMU / GPS` · `3D Boxes`
  [Homepage](https://www.nuscenes.org/) · [Paper](https://arxiv.org/abs/1903.11027) · [Code](https://github.com/nutonomy/nuscenes-devkit) · Access: Registration required
  Inclusion evidence C3: Twenty-second driving scenes combine synchronized sensors and temporally tracked 3D agents. Retain sequence/trajectory use, not isolated detection images. [Reviewed source](https://arxiv.org/abs/1903.11027) · 2026-10-29

- **Oxford Radar RobotCar** · 2019 · Dataset
  The RobotCar radar extension provides driving radar, LiDAR and optimized radar odometry.
  `Autonomous Driving` · `RADAR` · `LiDAR` · `Camera Pose` · `Trajectories`
  [Homepage](https://oxford-robotics-institute.github.io/radar-robotcar-dataset/) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: The radar extension provides 280 km of driving with radar, LiDAR and optimized radar odometry. It shares the RobotCar platform and is not a disjoint parent collection. [Reviewed source](https://oxford-robotics-institute.github.io/radar-robotcar-dataset/) · 2026-10-30

- **SoundSpaces** · 2019 · Generation environment / toolkit
  A 3D audio-visual navigation environment and dataset combining spatial audio, visual observations, actions, and position state for embodied agents.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB Video` · `Audio` · `Action` · `Simulation State` · `Maps`
  [Paper](https://arxiv.org/abs/1912.11474) · [Code](https://github.com/facebookresearch/sound-spaces) · Access: Official project access; registration may be required
  Inclusion evidence C2: Audio-visual navigation uses egocentric observations generated by agent motion in acoustically simulated scenes; source scenes are dependencies. [Reviewed source](https://arxiv.org/abs/1912.11474) · 2026-10-29

- **UZH-FPV Drone Racing Dataset** · 2019 · Dataset
  Aggressive expert-piloted drone sequences with cameras, events, IMU, and laser-tracked motion truth.
  `Robotics / Embodied AI` · `RGB Video` · `Event Camera` · `IMU` · `Camera Pose` · `Trajectories`
  [Homepage](https://fpv.ifi.uzh.ch/) · Access: Official sequence downloads; benchmark test truth withheld
  Inclusion evidence C3: Aggressive flight sequences provide visual-inertial measurements and 6DoF ground-truth trajectories. [Reviewed source](https://fpv.ifi.uzh.ch/) · 2026-10-29

- **Waymo Open Dataset** · 2019 · Dataset
  A high-quality autonomous-driving collection with cameras, LiDAR, maps, 3D detection labels, and motion scenarios for dynamic occupancy and trajectory prediction.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `3D Boxes` · `Trajectories`
  [Homepage](https://waymo.com/open/) · [Paper](https://arxiv.org/abs/1912.04838) · [Code](https://github.com/waymo-research/waymo-open-dataset) · Access: Registration required
  Inclusion evidence C3: Synchronized 20-second driving sequences expose time-indexed observations and road-agent annotations. Static detection labels alone are not the basis. [Reviewed source](https://arxiv.org/abs/1912.04838) · 2026-10-29

- **ApolloScape** · 2018 · Dataset
  A multi-task autonomous-driving dataset with street-view video, stereo images, depth, 3D vehicles, and high-definition maps for urban spatiotemporal modeling.
  `Autonomous Driving` · `Urban / 3D Scene` · `RGB Video` · `Depth` · `Maps` · `3D Boxes` · `Semantic Labels`
  [Homepage](https://apolloscape.auto/) · [Paper](https://arxiv.org/abs/1803.06184) · [Code](https://github.com/ApolloScapeAuto/dataset-api) · Access: Registration required
  Inclusion evidence C3: Driving videos include accurate per-frame location; retain sequential observation/pose or trajectory subsets, not isolated perception annotations. [Reviewed source](https://arxiv.org/abs/1803.06184) · 2026-10-29

- **comma2k19** · 2018 · Dataset
  A real highway commute driving dataset from comma.ai with road-facing video, GPS/GNSS, IMU, CAN bus data, vehicle speed, steering angle, and global camera poses.
  `Autonomous Driving` · `RGB Video` · `GPS / IMU` · `Action` · `Camera Pose` · `Trajectories`
  [Homepage](https://github.com/commaai/comma2k19) · [Paper](https://arxiv.org/abs/1812.05752) · Access: Public GitHub repository with dataset download instructions and examples
  Inclusion evidence C3: Minute-long driving sequences include road video, GNSS/IMU/CAN and camera position/orientation estimates. [Reviewed source](https://arxiv.org/abs/1812.05752) · 2026-10-29

- **Gibson Env** · 2018 · Generation environment / toolkit
  Interactive embodied simulation built from reconstructed real scenes; this entry covers transition generation rather than a standalone static building asset set.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `3D Mesh` · `RGB-D` · `Agent Pose` · `Semantic Labels`
  [Homepage](http://gibsonenv.stanford.edu/database/) · [Paper](https://arxiv.org/abs/1808.10654) · [Code](https://github.com/StanfordVL/GibsonEnv) · Access: Request / agreement required
  Inclusion evidence C2: Gibson Env explicitly embeds agents subject to physical and spatial constraints in a released interactive simulator. Scope is Gibson Env, not the static building database alone. [Reviewed source](https://arxiv.org/abs/1808.10654) · 2026-10-29

- **GNM Cory Hall Navigation** · 2018 · Dataset
  Hallway navigation trajectories contain RGB, planar position/yaw and corresponding waypoint targets.
  `Robotics / Embodied AI` · `RGB Video` · `Agent Pose` · `Trajectories`
  [Homepage](https://www.tensorflow.org/datasets/catalog/berkeley_gnm_cory_hall) · Access: Official TFDS schema and RLDS storage reference; full download not tested
  Inclusion evidence C3: Hallway navigation trajectories contain RGB, planar position/yaw and corresponding waypoint targets. Steps are organized into episodes. Targets are navigation waypoints, not wheel/motor commands. [Reviewed source](https://www.tensorflow.org/datasets/catalog/berkeley_gnm_cory_hall) · 2026-10-30

- **MVSEC** · 2018 · Dataset
  Stereo event sequences from multiple moving platforms with images, IMU, and pose/depth truth for most sequences.
  `Robotics / Embodied AI` · `Autonomous Driving` · `Event Camera` · `Stereo Grayscale` · `IMU` · `Depth` · `Camera Pose`
  [Homepage](https://daniilidis-group.github.io/mvsec/) · Access: Official sequence downloads, calibration and sample code
  Inclusion evidence C3: Multi-vehicle event/frame streams align with LiDAR/IMU/GPS/mocap ground-truth pose, depth and optical flow. [Reviewed source](https://daniilidis-group.github.io/mvsec/) · 2026-10-29

- **TUM VI** · 2018 · Dataset
  Indoor and outdoor visual-inertial sequences with calibrated stereo images, IMU, and partial or full motion-capture trajectories.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `Stereo Grayscale` · `IMU` · `Camera Pose` · `Trajectories`
  [Homepage](https://cvg.cit.tum.de/data/datasets/visual-inertial-dataset) · [Paper](https://arxiv.org/abs/1804.06120) · Access: Official raw and calibrated sequence downloads
  Inclusion evidence C3: Hardware-synchronized images/IMU and motion-capture pose references support ordered visual-inertial trajectory modeling. [Reviewed source](https://arxiv.org/abs/1804.06120) · 2026-10-29

- **DDD17** · 2017 · Dataset
  An event-camera driving dataset for end-to-end driving research, recording asynchronous visual events and driving-state signals on real roads.
  `Autonomous Driving` · `Event Camera` · `GPS / IMU` · `Action` · `Trajectories`
  [Paper](https://arxiv.org/abs/1711.01458) · Access: Paper entry; data access requires verification
  Inclusion evidence C2: Paper explicitly describes concurrent image/event streams with vehicle speed, GPS, steering, throttle and brake recordings from on-board diagnostics. [Reviewed source](https://arxiv.org/abs/1711.01458) · 2026-10-29

- **MPI-INF-3DHP (Motion Sequences)** · 2017 · Dataset
  Multi-camera activity recordings include temporally ordered 3D human-joint annotations.
  `Egocentric / Human` · `Multi-view RGB Video` · `3D State` · `Trajectories`
  [Paper](https://arxiv.org/pdf/1611.09813) · Access: Paper documents the resource; complete download not tested
  Inclusion evidence C3: Multi-camera recordings cover approximately minute-long activity sets with released 3D joint annotations. Inclusion concerns ordered human motion; single-frame pose estimation is its native evaluation. [Reviewed source](https://arxiv.org/pdf/1611.09813) · 2026-10-30

- **PennCOSYVIO** · 2017 · Dataset
  Handheld visual-inertial trajectories crossing outdoor and indoor spaces with fiducial-marker localization references.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB Video` · `Stereo RGB` · `IMU` · `Camera Pose`
  [Homepage](https://daniilidis-group.github.io/penncosyvio/) · Access: Official downloads, calibration and benchmark documentation
  Inclusion evidence C3: Synchronized video/IMU recordings have an indoor-outdoor sensor trajectory and localized ground-truth positions. [Reviewed source](https://daniilidis-group.github.io/penncosyvio/) · 2026-10-29

- **ScanNet** · 2017 · Dataset
  A large collection of handheld RGB-D indoor scan sequences with camera poses, reconstructed meshes, semantic labels, and instances.
  `Urban / 3D Scene` · `Robotics / Embodied AI` · `RGB-D` · `Camera Pose` · `3D Mesh` · `Semantic Labels`
  [Homepage](http://www.scan-net.org/) · [Paper](https://arxiv.org/abs/1702.04405) · [Code](https://github.com/ScanNet/ScanNet) · Access: Agreement required
  Inclusion evidence C3: RGB-D videos include per-view camera poses, exposing temporal camera-observation trajectories. Retain egomotion sequences, not static reconstructed geometry or object dynamics claims. [Reviewed source](https://arxiv.org/abs/1702.04405) · 2026-10-29

- **YCB-Video (Camera-Relative Pose Sequences)** · 2017 · Dataset
  Ninety-two RGB-D videos provide per-frame object poses with fixed object configurations and a moving camera.
  `Urban / 3D Scene` · `RGB-D` · `Camera Pose` · `Object State` · `Trajectories`
  [Paper](https://arxiv.org/pdf/1711.00199) · Access: Paper documents the resource; complete download not tested
  Inclusion evidence C3: The 92 RGB-D videos include per-frame object poses; annotation estimates camera trajectories while object configurations remain fixed. Suitable for camera-relative pose sequences, not evidence of dynamic object interactions. [Reviewed source](https://arxiv.org/pdf/1711.00199) · 2026-10-30

- **Cityscapes (Temporal and Egomotion Data)** · 2016 · Dataset
  Each annotated keyframe has 30-frame video context, stereo views and vehicle odometry.
  `Autonomous Driving` · `Stereo RGB` · `Camera Pose` · `Trajectories`
  [Homepage](https://www.cityscapes-dataset.com/dataset-overview/) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: Each annotated image is frame 20 of a 30-frame video snippet; stereo views and vehicle odometry accompany the sequence. Include the temporal/egomotion portion; native segmentation scores are not prediction scores. [Reviewed source](https://www.cityscapes-dataset.com/dataset-overview/) · 2026-10-30

- **DeepMind Lab** · 2016 · Generation environment / toolkit
  First-person 3D navigation and interaction environments with visual observations, actions, and game-state trajectories.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/google-deepmind/lab) · [Paper](https://arxiv.org/abs/1612.03801) · Access: Open-source environment
  Inclusion evidence C2: First-person game worlds expose a flexible agent/environment API for partially observed sequential tasks. [Reviewed source](https://arxiv.org/abs/1612.03801) · 2026-10-29

- **EuRoC MAV** · 2016 · Dataset
  Micro-aerial-vehicle sequences with stereo grayscale imagery, synchronized IMU, and motion ground truth.
  `Robotics / Embodied AI` · `Stereo Grayscale` · `IMU` · `Camera Pose` · `Trajectories`
  [Homepage](https://projects.asl.ethz.ch/datasets/euroc-mav/) · Access: Official ETH Research Collection download portal
  Inclusion evidence C3: Stereo images and synchronized IMU are paired with accurate MAV motion ground truth. [Reviewed source](https://projects.asl.ethz.ch/datasets/euroc-mav/) · 2026-10-29

- **Oxford RobotCar** · 2016 · Dataset
  Timestamped camera/LiDAR streams accompany GPS/INS position, velocity and attitude.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `GPS / IMU` · `Camera Pose`
  [Homepage](https://robotcar-dataset.robots.ox.ac.uk/documentation/) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: Timestamped camera/LiDAR streams align with GPS/INS position, velocity and attitude. VO supplies relative poses but is explicitly a reference, not ground truth. [Reviewed source](https://robotcar-dataset.robots.ox.ac.uk/documentation/) · 2026-10-30

- **KITTI** · 2012 · Dataset
  A foundational autonomous-driving dataset with stereo cameras, LiDAR, GPS/IMU, and established benchmarks for depth, scene flow, odometry, and 3D perception.
  `Autonomous Driving` · `Stereo RGB` · `LiDAR` · `GPS / IMU` · `3D Boxes`
  [Homepage](https://www.cvlibs.net/datasets/kitti/) · [Paper](https://www.cvlibs.net/publications/Geiger2013IJRR.pdf) · [Code](https://github.com/utiasSTARS/pykitti) · Access: Open download
  Inclusion evidence C3: Official suite includes raw calibrated driving recordings, GPS localization, visual odometry and 3D tracking. Retain sequential/odometry scope rather than standalone detection images. [Reviewed source](https://www.cvlibs.net/datasets/kitti/) · 2026-10-29

- **TUM RGB-D** · 2012 · Dataset
  Handheld and robot RGB-D sequences with motion-capture trajectories, including dynamic people and continuous camera motion.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB-D` · `Camera Pose` · `Trajectories`
  [Homepage](https://cvg.cit.tum.de/data/datasets/rgbd-dataset) · Access: Official sequence downloads and trajectory evaluation tools
  Inclusion evidence C3: Official release provides 30 Hz RGB-D images aligned with high-accuracy motion-capture sensor trajectories. [Reviewed source](https://cvg.cit.tum.de/data/datasets/rgbd-dataset) · 2026-10-29

- **NGSIM Vehicle Trajectories** · 2006 · Dataset
  Vehicle trajectories describe traffic motion at tenth-of-a-second intervals.
  `Autonomous Driving` · `Trajectories` · `Object State`
  [Homepage](https://www.fhwa.dot.gov/publications/research/operations/its/06135/06135.pdf) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C3: The FHWA describes vehicle trajectories sampled every tenth of a second. Positions over time support traffic forecasting; the program is not a camera-control dataset. [Reviewed source](https://www.fhwa.dot.gov/publications/research/operations/its/06135/06135.pdf) · 2026-10-30

<a id="physical-causal-reasoning"></a>

### Physical & Causal Reasoning (28)

- **CG-World** · 2026 · Dataset
  A large computer-graphics world-state dataset explicitly recording states, events, relations, and counterfactual branches.
  `Robotics / Embodied AI` · `Physics / Science` · `Synthetic Video` · `3D State` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2607.26452) · Access: Paper entry; release status requires verification
  Inclusion evidence C4: Temporally aligned state, action, contact and branch metadata explicitly distinguish factual and counterfactual trajectories. [Reviewed source](https://arxiv.org/abs/2607.26452) · 2026-10-29

- **GAUGE** · 2026 · Benchmark
  A measurement-grounded benchmark evaluating physical fidelity in numerical physics engines and generative video world models.
  `Physics / Science` · `Robotics / Embodied AI` · `RGB Video` · `Trajectories` · `Object State` · `3D Metadata`
  [Homepage](https://internrobotics.github.io/GAUGE/) · [Paper](https://arxiv.org/abs/2608.05948) · [Code](https://github.com/InternRobotics/GAUGE) · Access: Benchmark dataset available on Hugging Face
  Inclusion evidence C5: Measured physical trajectories and task-specific observables evaluate simulation engines and video world models against controlled real experiments. [Reviewed source](https://arxiv.org/abs/2608.05948) · 2026-10-29

- **KinDER** · 2026 · Generation environment / toolkit
  A physical-reasoning benchmark for robot learning and planning with task environments, demonstrations, and model resources.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action` · `Object State` · `Trajectories`
  [Homepage](https://huggingface.co/datasets/kinder-bench/kinder-datasets) · [Code](https://github.com/Princeton-Robot-Planning-and-Learning/kindergarden) · Access: Demonstration datasets available on Hugging Face
  Inclusion evidence C2: README shows action_space sampling, step(action), next observations and object-centric state conversion, with dataset collection support. [Reviewed source](https://github.com/Princeton-Robot-Planning-and-Learning/kindergarden) · 2026-10-29

- **PhyGround** · 2026 · Benchmark
  A benchmark evaluating physical plausibility in generative world models using prompts, first frames, and generated videos.
  `Physics / Science` · `RGB Video` · `Text` · `Object State`
  [Homepage](https://phyground.github.io/) · [Paper](https://arxiv.org/abs/2605.10806) · [Code](https://github.com/NU-World-Model-Embodied-AI/PhyGround) · Access: Prompts and first images available on Hugging Face
  Inclusion evidence C5: Expected physical outcomes and law-specific questions evaluate generative world models across 250 prompts. [Reviewed source](https://arxiv.org/abs/2605.10806) · 2026-10-29

- **PhysEditWorld** · 2026 · Dataset
  A physics-editable world-model dataset generated by varying gravity while holding scenes, initial states, and action sequences fixed.
  `Games / Virtual Environments` · `Physics / Science` · `RGB Video` · `Action` · `Game State` · `Camera Pose`
  [Homepage](https://yizhiqianbi.github.io/physeditworld/) · [Paper](https://arxiv.org/abs/2606.26694) · [Code](https://github.com/yizhiqianbi/physeditworld) · Access: Public dataset entry on ModelScope
  Inclusion evidence C4: Matched initial states and action traces are replayed under different gravity values with synchronized engine state and observations. [Reviewed source](https://arxiv.org/abs/2606.26694) · 2026-10-29

- **RigidBench** · 2026 · Benchmark
  A rigid-body physics video-generation benchmark with exact simulator state.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Depth` · `3D State`
  [Paper](https://arxiv.org/abs/2608.15555) · Access: Paper entry; release status requires verification
  Inclusion evidence C1: Generated continuations are compared with simulator rollouts from the same initial frame, with per-frame poses, contacts and depth. [Reviewed source](https://arxiv.org/abs/2608.15555) · 2026-10-29

- **VisTouch** · 2026 · Dataset
  A large-scale synchronized vision, force-tactile, and contact-audio dataset of robotic sliding interactions.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Audio` · `Robot State` · `Action`
  [Code](https://github.com/liangnjupt/VisTouch) · Access: Official repository provides metadata, loaders, benchmarks, and download instructions
  Inclusion evidence C1: Robot sliding-contact episodes pair video and audio with time-varying tactile-force trajectories; no inferred motor-action labels. [Reviewed source](https://github.com/liangnjupt/VisTouch) · 2026-10-29

- **CausalVQA** · 2025 · Benchmark
  A real-video physical-causal VQA benchmark for counterfactuals, hypotheses, anticipation, and planning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2506.09943) · Access: Paper entry; release status requires verification
  Inclusion evidence C4: Counterfactual, hypothetical and anticipation questions explicitly ask for outcomes of actions/events in physical videos; descriptive QA is outside the retained scope. [Reviewed source](https://arxiv.org/abs/2506.09943) · 2026-10-29

- **GRIP Dataset** · 2025 · Dataset
  A robotic incremental-potential contact simulation dataset for coupled deformable-rigid grasping.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action` · `Object State` · `3D State`
  [Homepage](https://bell0o.github.io/GRIP/) · [Code](https://github.com/BeLl0o/GRIP_Dataset) · Access: Project page and official repository available
  Inclusion evidence C4: Official HDF5 schema explicitly contains 100-frame grasp trajectories with time-varying joint states, object mesh states, contacts and friction forces. Only currently released subsets count as available. [Reviewed source](https://github.com/BeLl0o/GRIP_Dataset) · 2026-10-29

- **Guardian OOD (UR5-Fail / RoboFail / RoboVQA)** · 2025 · Derived data / subset
  Multi-view images before and after execution carry subtask success/failure and failure-category labels.
  `Robotics / Embodied AI` · `RGB Images` · `Language` · `Reward`
  [Homepage](https://huggingface.co/datasets/paulpacaud/Guardian-FailCoT-OOD-datasets) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C4: The OOD execution subsets provide start/end subtask images paired with success/failure outcomes: UR5-Fail 140, RoboFail 153 and RoboVQA 357 examples. Separately bundled single-image planning cases are not the qualifying temporal evidence. [Reviewed source](https://huggingface.co/datasets/paulpacaud/Guardian-FailCoT-OOD-datasets) · 2026-10-30

- **ManipBench (Interaction and Outcome Tasks)** · 2025 · Benchmark
  Interaction portions cover inverse dynamics, temporal actions, fabric interactions, counterfactuals and simulation tasks.
  `Robotics / Embodied AI` · `RGB Video` · `QA` · `Simulation State`
  [Homepage](https://manipbench.github.io/) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C4: The benchmark includes inverse dynamics, temporal action sequences, fabric interaction and counterfactual questions, plus executable simulation evaluation. Inclusion is limited to these interaction/outcome tasks. [Reviewed source](https://manipbench.github.io/) · 2026-10-30

- **OmniEAR / EAR-Bench** · 2025 · Generation environment / toolkit
  A text-based embodied benchmark for reasoning about physical interactions, tool use, and multi-agent coordination.
  `Robotics / Embodied AI` · `Text` · `Action` · `Object State` · `Trajectories`
  [Homepage](https://zju-real.github.io/OmniEmbodied/) · [Code](https://github.com/ZJU-REAL/OmniEmbodied) · Access: Benchmark data in repository and expert trajectories on Hugging Face
  Inclusion evidence C2: OmniEAR/EAR-Bench supplies a structured-state simulator and expert trajectories for physically constrained action execution. Rename to match the official repository; paper title differs across revisions. [Reviewed source](https://github.com/ZJU-REAL/OmniEmbodied) · 2026-10-29

- **Robo-Dopamine GRM State Pairs** · 2025 · Derived data / subset
  Task instructions, start/end anchors and multi-view before/after states carry relative-progress targets.
  `Robotics / Embodied AI` · `RGB Images` · `Language` · `Reward`
  [Homepage](https://huggingface.co/datasets/tanhuajie2001/Robo-Dopamine-GRM-Dataset) · Access: Hugging Face gated release; accepting publisher conditions is required; files not downloaded
  Inclusion evidence C4: Task instructions, start/end anchors and multi-view BEFORE/AFTER states are paired with relative progress targets. This derived state-pair resource is not a release of full action trajectories. [Reviewed source](https://huggingface.co/datasets/tanhuajie2001/Robo-Dopamine-GRM-Dataset) · 2026-10-30

- **PokeFlex** · 2024 · Dataset
  A real-world pilot dataset for deformable-object manipulation, capturing complete 360-degree 3D mesh deformations together with robot-applied forces and torques during poking.
  `Robotics / Embodied AI` · `Physics / Science` · `3D Mesh` · `Action` · `Robot State` · `Multi-view RGB Video`
  [Homepage](https://pokeflex-dataset.github.io/) · [Paper](https://arxiv.org/abs/2409.17124) · [Code](https://github.com/pokeflex-dataset/reconstruction) · Access: Official project page and reconstruction code available
  Inclusion evidence C2: Robot poking pairs actively deformed 3D meshes with applied forces and torques. [Reviewed source](https://arxiv.org/abs/2409.17124) · 2026-10-29

- **ARMBench (Activity Defect Subset)** · 2023 · Dataset
  The activity-defect portion contains pick/transfer/place context, video, physical package failures and first-defect frames.
  `Robotics / Embodied AI` · `RGB Video` · `Object State`
  [Paper](https://arxiv.org/pdf/2303.16382) · Access: Paper documents the resource; complete download not tested
  Inclusion evidence C4: The activity subset contains pick/transfer/place context, manipulation videos, physical package-failure outcomes and the first observable defect frame. Inclusion covers these outcome sequences, not the standalone segmentation/identification images. [Reviewed source](https://arxiv.org/pdf/2303.16382) · 2026-10-30

- **Melting Pot 2.0** · 2022 · Generation environment / toolkit
  A suite of multi-agent social interaction environments.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/google-deepmind/meltingpot) · [Paper](https://arxiv.org/abs/2211.13746) · Access: Open-source benchmark
  Inclusion evidence C2: Interactive multi-agent substrates and co-player populations create controlled state-transition scenarios; an environment suite, not a fixed dataset. [Reviewed source](https://arxiv.org/abs/2211.13746) · 2026-10-29

- **Physion** · 2021 · Benchmark
  A synthetic intuitive-physics dataset covering collisions, support, containment, and deformation, designed to test whether models can predict object contact and dynamics.
  `Physics / Science` · `Synthetic Video` · `Depth` · `Segmentation` · `Object State`
  [Homepage](https://physion-benchmark.github.io/) · [Paper](https://arxiv.org/abs/2106.08261) · [Code](https://github.com/cogtoolslab/physics-benchmarking-neurips2021) · Access: Open download
  Inclusion evidence C1: Physics simulations explicitly evaluate how scenes evolve into future states across collisions, rolling, sliding and deformable interactions. [Reviewed source](https://arxiv.org/abs/2106.08261) · 2026-10-29

- **CATER** · 2020 · Dataset
  A synthetic video dataset with compositional object motions and precise metadata, emphasizing spatiotemporal relations, occlusion, and long-term object tracking.
  `Physics / Science` · `Synthetic Video` · `Object State` · `Action Labels` · `3D Metadata`
  [Homepage](https://rohitgirdhar.github.io/CATER/) · [Paper](https://arxiv.org/abs/1910.04744) · [Code](https://github.com/rohitgirdhar/CATER) · Access: Open download
  Inclusion evidence C1: Controlled synthetic videos require tracking object motion, occlusion and recursive containment through time; an observable scene-state evolution task is explicit. [Reviewed source](https://rohitgirdhar.github.io/CATER/) · 2026-10-29

- **CausalWorld** · 2020 · Generation environment / toolkit
  An intervention-rich robot manipulation simulator for causal structure and generalization research.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action` · `Simulation State` · `Object State`
  [Homepage](https://sites.google.com/view/causal-world) · [Paper](https://arxiv.org/abs/2010.04296) · [Code](https://github.com/rr-learning/CausalWorld) · Access: Official environment
  Inclusion evidence C4: Official simulator provides step(action) and interventions on causal variables such as object mass and size, enabling controlled physical rollouts. [Reviewed source](https://github.com/rr-learning/CausalWorld) · 2026-10-29

- **DPI-Net Simulation Rollout Generator** · 2019 · Generation environment / toolkit
  Official scripts generate fluid, rigid-body and granular interaction trajectories, saving reference and predicted rollouts separately.
  `Physics / Science` · `Simulation State` · `3D State` · `Trajectories`
  [Code](https://raw.githubusercontent.com/YunzhuLi/DPI-Net/master/README.md) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C4: Training scripts generate particle simulation data for FluidFall, BoxBath, FluidShake and RiceGrip; evaluation saves separate ground-truth and predicted rollouts. [Reviewed source](https://raw.githubusercontent.com/YunzhuLi/DPI-Net/master/README.md) · 2026-10-30

- **PHYRE** · 2019 · Benchmark
  A 2D physical reasoning benchmark where agents place objects to achieve goals across generated task templates, testing intervention, trial efficiency, and generalization.
  `Physics / Science` · `Games / Virtual Environments` · `Simulation State` · `Action` · `Synthetic Video`
  [Homepage](https://phyre.ai/) · [Paper](https://arxiv.org/abs/1908.05656) · [Code](https://github.com/facebookresearch/phyre) · Access: Open generation toolkit
  Inclusion evidence C4: Physical puzzles in a 2D mechanics simulator allow interventions and resulting outcome evaluation. [Reviewed source](https://arxiv.org/abs/1908.05656) · 2026-10-29

- **BlockPuzzle** · 2018 · Generation environment / toolkit
  A MuJoCo and OpenAI Gym task framework for physical reasoning, using sparse-reward block puzzles to study rule learning, curriculum training, and transfer across tasks.
  `Robotics / Embodied AI` · `Physics / Science` · `Simulation State` · `Action` · `Reward` · `Object State`
  [Paper](https://arxiv.org/abs/1812.00091) · Access: Paper entry; environment access unverified
  Inclusion evidence C2: MuJoCo/Gym physical-puzzle environments expose actions and resulting state transitions, with curriculum and imitation tasks. [Reviewed source](https://arxiv.org/abs/1812.00091) · 2026-10-29

- **IntPhys** · 2018 · Benchmark
  A synthetic visual-physics benchmark contrasting possible and impossible scenes to test object permanence, occlusion, shape, and support reasoning.
  `Physics / Science` · `Synthetic Video` · `Depth` · `Segmentation` · `Scene Metadata`
  [Homepage](https://intphys.cognitive-ml.fr/) · [Paper](https://arxiv.org/abs/1803.07616) · [Code](https://github.com/rronan/IntPhys) · Access: Open download
  Inclusion evidence C1: Possible/impossible physical event videos are evaluated using future semantic-mask prediction and physical plausibility. [Reviewed source](https://arxiv.org/abs/1803.07616) · 2026-10-29

- **ShapeStacks** · 2018 · Benchmark
  A procedurally generated dataset and toolkit of stacked shapes for reasoning about stability, support relations, and 3D physical structure from images.
  `Physics / Science` · `Synthetic Video` · `3D State` · `Object Metadata` · `Simulation State`
  [Paper](https://arxiv.org/abs/1804.08018) · [Code](https://github.com/ogroth/shapestacks) · Access: Open generation toolkit
  Inclusion evidence C4: Initial stack configurations are paired with simulated structural-stability outcomes, supporting physical future-outcome reasoning. Not a dense trajectory dataset. [Reviewed source](https://arxiv.org/abs/1804.08018) · 2026-10-29

- **TextWorld** · 2018 · Generation environment / toolkit
  A text-based interactive-world generator with language observations, actions, and hidden-state transitions.
  `Games / Virtual Environments` · `Text` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/microsoft/TextWorld) · [Paper](https://arxiv.org/abs/1806.11532) · Access: Open-source generator and games
  Inclusion evidence C2: Generated interactive games expose state tracking, actions and rewards through a documented RL environment. [Reviewed source](https://arxiv.org/abs/1806.11532) · 2026-10-29

- **PyBullet** · 2017 · Generation environment / toolkit
  Executable physics examples generate object-state evolution from initial poses, gravity and simulation steps.
  `Physics / Science` · `Simulation State` · `Action` · `Object State`
  [Code](https://raw.githubusercontent.com/bulletphysics/bullet3/master/examples/pybullet/examples/hello_pybullet.py) · Access: Official documentation or implementation; data download not tested
  Inclusion evidence C4: The executable example sets initial body pose and gravity, advances stepSimulation and exposes body position/orientation. This is a dynamics generator, not a recorded dataset. [Reviewed source](https://raw.githubusercontent.com/bulletphysics/bullet3/master/examples/pybullet/examples/hello_pybullet.py) · 2026-10-30

- **MIT Planar Pushing Dataset** · 2016 · Dataset
  A high-fidelity planar pushing dataset recording actions and object motion across shapes, contacts, pushing directions, and friction conditions.
  `Robotics / Embodied AI` · `Physics / Science` · `Action` · `Object State` · `Trajectory` · `Robot State`
  [Paper](https://arxiv.org/abs/1604.04038) · [Code](https://github.com/mcubelab/pdproc) · Access: Official processing repository available
  Inclusion evidence C2: Timestamped pusher/object poses and contact forces record controlled physical pushing experiments. [Reviewed source](https://arxiv.org/abs/1604.04038) · 2026-10-29

- **Physics 101** · 2016 · Dataset
  A real-video dataset of objects moving on inclined surfaces with material, mass, angle, and motion information for estimating physical properties and dynamics.
  `Physics / Science` · `RGB Video` · `Object Metadata` · `Trajectory`
  [Homepage](https://phys101.csail.mit.edu/) · Access: Open project access
  Inclusion evidence C4: Official videos depict sliding, collisions, springs and falls; physical-property learning and outcome prediction are explicit. [Reviewed source](https://phys101.csail.mit.edu/) · 2026-10-29

<a id="world-model-evaluation-diagnostics"></a>

### World Model Evaluation & Diagnostics (40)

- **4DSynth** · 2026 · Generation environment / toolkit
  A controllable procedural 4D-world synthesis resource for dynamic embodied simulation.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.26947) · Access: Paper entry; data access requires verification
  Inclusion evidence C4: Procedural environments expose animated actors, trajectories and physics-ready state; the paper defines a generated navigation benchmark. Generator, not a downloaded dataset. [Reviewed source](https://arxiv.org/abs/2608.26947) · 2026-10-29

- **CaliBench** · 2026 · Benchmark
  An interpretable benchmark for calibration of stochastic physical outcomes in video world models.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.16829) · Access: Paper entry; release status requires verification
  Inclusion evidence C5: Video world-model outputs are tested against known physical outcome distributions with a defined calibration protocol. [Reviewed source](https://arxiv.org/abs/2608.16829) · 2026-10-29

- **CamWorldQA** · 2026 · Benchmark
  A human-rated perceptual-quality benchmark for camera-controlled world-video generation.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Camera Pose`
  [Paper](https://arxiv.org/abs/2608.18710) · Access: Paper entry; release status requires verification
  Inclusion evidence C5: Camera-controlled generated videos are evaluated for viewpoint consistency, motion coherence and content preservation; perceptual quality is not physical accuracy. [Reviewed source](https://arxiv.org/abs/2608.18710) · 2026-10-29

- **DrivingGen** · 2026 · Benchmark
  A benchmark evaluating generative driving video world models through both visual quality and physical plausibility of vehicle trajectories.
  `Autonomous Driving` · `RGB Video` · `Trajectories`
  [Homepage](https://drivinggen-bench.github.io/) · [Paper](https://arxiv.org/abs/2601.01528) · [Code](https://github.com/youngzhou1999/DrivingGen) · Access: Dataset available on Hugging Face
  Inclusion evidence C5: Dedicated driving world-model evaluation measures trajectory plausibility, temporal consistency and control conditioning; source clips overlap existing datasets. [Reviewed source](https://arxiv.org/abs/2601.01528) · 2026-10-29

- **Embodied Scene Rearrangement Planning** · 2026 · Generation environment / toolkit
  An embodied scene-rearrangement planning benchmark with tasks and environment states.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.27371) · [Homepage](https://pie-lab.cn/ESRP/) · Access: Official project and paper entries available
  Inclusion evidence C2: OmniGibson scene-rearrangement tasks execute agents from egocentric observations toward target configurations. Scene pairs are task specifications, not recorded rollouts. [Reviewed source](https://arxiv.org/abs/2608.27371) · 2026-10-29

- **GigaBrain Challenge 2026 World Models Track Dataset** · 2026 · Benchmark
  Multi-task, multi-view video and state-trajectory data for trajectory-conditioned video generation and closed-loop VLA evaluation.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Trajectories` · `Robot State` · `Depth`
  [Homepage](https://gigaai-research.github.io/GigaBrain-Challenge-2026/guide/world-model.html) · [Code](https://github.com/open-gigaai/CVPR-2026-Workshop-WM-Track) · Access: Dataset and leaderboard available on Hugging Face
  Inclusion evidence C5: Official track supplies manipulation trajectories and evaluates generated world-model videos as VLA evaluators. Data access requires an agreement. [Reviewed source](https://gigaai-research.github.io/GigaBrain-Challenge-2026/guide/world-model.html) · 2026-10-29

- **H2R-Bench** · 2026 · Benchmark
  A benchmark for human-to-robot cross-embodiment manipulation video generation.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action Labels` · `Object State`
  [Paper](https://arxiv.org/abs/2608.13049) · Access: Paper entry; release status requires verification
  Inclusion evidence C5: World-model video generation is tested against human demonstrations, embodiment constraints, action events and object responses. [Reviewed source](https://arxiv.org/abs/2608.13049) · 2026-10-29

- **HarnessEval-W** · 2026 · Benchmark
  An evidence-traceable evaluation suite for visual-world-model dynamics.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Text` · `QA`
  [Paper](https://arxiv.org/abs/2608.16859) · Access: Paper entry; release status requires verification
  Inclusion evidence C5: Dedicated world-model evaluation uses 330 cases to diagnose physical, causal and world-state evolution in generated rollouts. [Reviewed source](https://arxiv.org/abs/2608.16859) · 2026-10-29

- **PAWBench** · 2026 · Benchmark
  A benchmark for probabilistic alignment between generated and real world dynamics.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.27345) · Access: Paper entry; data access requires verification
  Inclusion evidence C5: World-model rollout outcome distributions are evaluated against reference probabilities under matched initial observations and actions. [Reviewed source](https://arxiv.org/abs/2608.27345) · 2026-10-29

- **PhAIL** · 2026 · Benchmark
  A real-world Franka FR3 VLA evaluation dataset with multiview video, telemetry, action outcomes, and safety-stop rollouts.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Robot State` · `Action` · `Reward` · `Trajectories`
  [Homepage](https://phail.ai/releases/v1.0) · [Paper](https://arxiv.org/abs/2605.29710) · Access: Official release with videos, telemetry, and results
  Inclusion evidence C1: The paper identifies real-robot per-rollout artifacts and time-to-success distributions with teleoperation references. Inspect artifact fields before action-conditioned use. [Reviewed source](https://arxiv.org/abs/2605.29710) · 2026-10-29

- **PlayWorld** · 2026 · Benchmark
  An interactive world-model benchmark using agent players to pursue long-horizon objectives.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.13552) · [Code](https://github.com/kxding/PlayWorld) · Access: Paper entry; release status requires verification
  Inclusion evidence C5: Agent players interact with world models across 171 objectives testing persistent state, geometry and out-of-sight evolution. [Reviewed source](https://arxiv.org/abs/2608.13552) · 2026-10-29

- **R2M-Bench** · 2026 · Benchmark
  A benchmark for revisit memory and relative consistency in interactive video world models.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.27328) · Access: Paper entry; data access requires verification
  Inclusion evidence C5: Controlled leave-and-return trajectories evaluate persistent state and revisit memory in action-conditioned video world models. [Reviewed source](https://arxiv.org/abs/2608.27328) · 2026-10-29

- **RoboDojo RealEval** · 2026 · Generation environment / toolkit
  A real-robot evaluation benchmark with task configurations, simulation environments, and result artifacts.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Scene Metadata`
  [Homepage](https://robodojo-benchmark.com/) · [Code](https://github.com/RoboDojo-Benchmark/RoboDojo) · Access: Evaluation-only simulator release; not a released training corpus
  Inclusion evidence C2: Official release provides simulator clients, manipulation tasks and result artifacts; it explicitly describes an eval-only release, not a fixed training corpus. [Reviewed source](https://github.com/RoboDojo-Benchmark/RoboDojo) · 2026-10-29

- **SemComp-Data** · 2026 · Benchmark
  A six-domain dataset of reference images, instructions, and outcome videos for semantic task completion.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Text`
  [Paper](https://arxiv.org/abs/2608.17426) · Access: Paper entry; release status requires verification
  Inclusion evidence C1: Reference images and instructions are paired with outcome videos for outcome prediction; intermediate physical trajectories are explicitly not required by the protocol. [Reviewed source](https://arxiv.org/abs/2608.17426) · 2026-10-29

- **ST-BiBench** · 2026 · Generation environment / toolkit
  A hierarchical benchmark for multi-stream spatiotemporal coordination in bimanual embodied tasks.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State` · `Language`
  [Paper](https://arxiv.org/abs/2602.08392) · [Code](https://github.com/stbibench/ST-BiBench) · Access: Evaluation code and benchmark assets available
  Inclusion evidence C2: RoboTwin-based closed-loop benchmark iterates perception and 16D robot actuation with downloadable task assets; generator rather than a fixed transition corpus. [Reviewed source](https://github.com/stbibench/ST-BiBench) · 2026-10-29

- **SurgWMBench** · 2026 · Benchmark
  A benchmark for short-horizon surgical instrument motion planning and rollout stability.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.08070) · Access: Paper entry; data access requires verification
  Inclusion evidence C5: Historical instrument trajectories and surgical image sequences condition short-horizon motion and future visual-state evaluation. [Reviewed source](https://arxiv.org/abs/2608.08070) · 2026-10-29

- **TrapVLA Benchmark** · 2026 · Benchmark
  A robot benchmark with configurable failure modes for vision-language-action models.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.26578) · [Homepage](https://john-liua.github.io/TrapVLA/) · Access: Official project and paper entries available
  Inclusion evidence C2: Trap-LIBERO and Trap-RoboTwin synthesize robot target trajectories with configured failure outcomes; derived from existing simulation suites. [Reviewed source](https://arxiv.org/abs/2608.26578) · 2026-10-29

- **ViewBench** · 2026 · Benchmark
  A dataset and diagnostic benchmark for view consistency and loop closure in camera-conditioned long-horizon video world models.
  `Games / Virtual Environments` · `RGB Video` · `Depth` · `Camera Pose`
  [Homepage](https://huggingface.co/datasets/JEdward/viewbench-dataset) · [Paper](https://arxiv.org/abs/2602.07854) · [Code](https://github.com/jedward225/viewbench-dataset) · Access: Public training-split entry points; held-out evaluation data not included
  Inclusion evidence C5: Released UE5 videos contain per-frame SE(3) poses and loop trajectories for camera-conditioned world models. The public training split excludes the held-out evaluation set. [Reviewed source](https://github.com/jedward225/viewbench-dataset) · 2026-10-29

- **VLAC-Cut Benchmark** · 2026 · Benchmark
  A process-level robot-rollout benchmark for non-monotonic progress estimation and failure-recovery segmentation.
  `Robotics / Embodied AI` · `RGB Video` · `Language` · `Reward` · `Action`
  [Homepage](https://huggingface.co/datasets/InternRobotics/VLAC-Cut-Benchmark) · [Code](https://github.com/InternRobotics/VLAC-Cut) · Access: Benchmark and full data available on Hugging Face
  Inclusion evidence C1: Benchmark robot rollout videos carry temporal progress and advancement/regression/recovery segmentation. They are derived rollouts, not a new independent collection. [Reviewed source](https://github.com/InternRobotics/VLAC-Cut) · 2026-10-29

- **WBench** · 2026 · Benchmark
  A comprehensive multi-turn benchmark for evaluating action response, visual quality, and long-horizon consistency in interactive video world models.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Text`
  [Homepage](https://huggingface.co/datasets/meituan-longcat/WBench) · [Code](https://github.com/meituan-longcat/WBench) · Access: Dataset available on Hugging Face
  Inclusion evidence C5: Official repository defines multi-turn interactive video world-model evaluation across multiple capabilities and control types. [Reviewed source](https://github.com/meituan-longcat/WBench) · 2026-10-29

- **WMBench (GigaWorld-1)** · 2026 · Benchmark
  A world-model benchmark pairing real robot executions with simulated rollouts to evaluate action fidelity, trajectory consistency and closed-loop policy behavior.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Trajectories` · `Reward`
  [Homepage](https://open-gigaai.github.io/giga-world-1/) · Access: Official benchmark/data entry points; complete download not tested
  Inclusion evidence C5: Official WMBench protocol pairs teleoperation and real policy executions with simulated rollouts, measuring trajectory fidelity and closed-loop success correlation. Do not count the entire training mixture as released benchmark data. [Reviewed source](https://open-gigaai.github.io/giga-world-1/) · 2026-10-29

- **WorldMark** · 2026 · Benchmark
  A unified benchmark suite for interactive video world models across multiple views, domains, and action sequences.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Camera Pose`
  [Homepage](https://alayalab.github.io/WorldMark/) · [Paper](https://arxiv.org/abs/2604.21686) · [Code](https://github.com/AlayaLab/WorldMark) · Access: Official prompts, action sequences, and evaluation code available
  Inclusion evidence C5: A common action vocabulary and 500 standardized cases test command following and response dynamics in interactive world models. [Reviewed source](https://arxiv.org/abs/2604.21686) · 2026-10-29

- **WRBench** · 2026 · Benchmark
  A camera-controlled generation benchmark diagnosing whether video world models maintain persistent world state during camera motion.
  `Games / Virtual Environments` · `RGB Video` · `Camera Pose` · `Text`
  [Homepage](https://jinplu.github.io/WRBench/) · [Paper](https://arxiv.org/abs/2606.20545) · [Code](https://github.com/JinPLu/WRBench) · Access: Datasets, artifacts, and leaderboard available on Hugging Face
  Inclusion evidence C5: Camera motion intervenes on observability to test persistent world-state evolution when targets leave and re-enter view. [Reviewed source](https://arxiv.org/abs/2606.20545) · 2026-10-29

- **EmbodiedBench** · 2025 · Generation environment / toolkit
  A comprehensive benchmark evaluating multimodal models as embodied agents across navigation, manipulation, ALFRED, and Habitat environments.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Language` · `Trajectories`
  [Homepage](https://embodiedbench.github.io/) · [Paper](https://arxiv.org/abs/2502.09560) · [Code](https://github.com/EmbodiedBench/EmbodiedBench) · Access: Benchmark datasets and generated trajectories available on Hugging Face
  Inclusion evidence C2: Interactive testing tasks execute navigation and manipulation actions in four environments; retain as an environment benchmark, not a fixed dataset. [Reviewed source](https://arxiv.org/abs/2502.09560) · 2026-10-29

- **ENACT** · 2025 · Benchmark
  An egocentric-interaction benchmark for forward and inverse world modeling with QA, replay, and HDF5 data.
  `Robotics / Embodied AI` · `Egocentric / Human` · `RGB Video` · `Action` · `Object State` · `Trajectories`
  [Homepage](https://huggingface.co/datasets/MLL-Lab/ENACT) · [Code](https://github.com/mll-lab-nu/ENACT) · Access: ENACT QA, HDF5, replay, and segmented datasets available
  Inclusion evidence C5: Official protocol explicitly evaluates future-state sequences from actions and inverse action sequences, with download and generation instructions. [Reviewed source](https://github.com/mll-lab-nu/ENACT) · 2026-10-29

- **EXPRESS-Bench** · 2025 · Benchmark
  An embodied question-answering benchmark for memory, localization, and reasoning over continuous visual observations.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB Video` · `QA` · `Language` · `Trajectories`
  [Homepage](https://hcplab-sysu.github.io/EXPRESS-Bench/) · [Code](https://github.com/HCPLab-SYSU/EXPRESS-Bench) · Access: Official project page and benchmark code available
  Inclusion evidence C3: Official release identifies 777 exploration trajectories, waypoint observations and full episodes; retain trajectory data rather than generic QA alone. [Reviewed source](https://github.com/HCPLab-SYSU/EXPRESS-Bench) · 2026-10-29

- **ORAD-3D** · 2025 · Benchmark
  A multi-weather, multi-terrain 3D off-road driving dataset with world-model and trajectory-planning benchmarks.
  `Autonomous Driving` · `RGB Video` · `3D Annotations` · `Trajectories` · `GPS / IMU`
  [Homepage](https://modelscope.cn/datasets/Georgehhhh/ORAD-3D) · [Paper](https://arxiv.org/abs/2510.16500) · [Code](https://github.com/chaytonmin/ORAD-3D-Dataset-For-Off-Road-AD) · Access: Public release on ModelScope and Baidu Cloud
  Inclusion evidence C5: The paper explicitly defines an off-road world-model evaluation track; retain that track, not static free-space detection as inclusion evidence. [Reviewed source](https://arxiv.org/abs/2510.16500) · 2026-10-29

- **WoWBench (Released Samples)** · 2025 · Benchmark
  Initial images/instructions pair with reference videos and tracked keypoints for physical-consistency and future-trajectory evaluation.
  `Robotics / Embodied AI` · `RGB Video` · `Language` · `Trajectories`
  [Paper](https://arxiv.org/html/2509.22642v1) · [Homepage](https://huggingface.co/datasets/WoW-world-model/WoW-1-Benchmark-Samples) · Access: Released benchmark sample package; full evaluation-code release unconfirmed
  Inclusion evidence C5: WoWBench pairs initial images/instructions with reference videos and tracking keypoints, evaluating future physical consistency and trajectories. The repository releases benchmark samples; a complete evaluation-code release is not confirmed. [Reviewed source](https://arxiv.org/html/2509.22642v1) · 2026-10-30

- **MMWorld** · 2024 · Benchmark
  A human-annotated and synthetic benchmark for multidisciplinary, multifaceted world understanding in video, including explanation, counterfactual reasoning, and future prediction.
  `Physics / Science` · `Egocentric / Human` · `RGB Video` · `QA` · `Text`
  [Homepage](https://mmworld-bench.github.io/) · [Paper](https://arxiv.org/abs/2406.08407) · [Code](https://github.com/UCSB-AI/MMWorld) · Access: Official benchmark repository and project page available
  Inclusion evidence C5: The source explicitly evaluates world-model reasoning with future-prediction and counterfactual questions; restrict inclusion evidence to those tracks. [Reviewed source](https://arxiv.org/abs/2406.08407) · 2026-10-29

- **Perception Test** · 2023 · Benchmark
  A real-video benchmark for multimodal perception, memory, physics, and abstraction.
  `Egocentric / Human` · `Physics / Science` · `RGB Video` · `Audio` · `QA`
  [Homepage](https://github.com/deepmind/perception_test) · [Paper](https://arxiv.org/abs/2305.13786) · Access: Official benchmark
  Inclusion evidence C4: The benchmark explicitly includes predictive and counterfactual physical reasoning in designed videos; static tracking/classification tracks alone are not the inclusion basis. [Reviewed source](https://arxiv.org/abs/2305.13786) · 2026-10-29

- **XLand-MiniGrid** · 2023 · Generation environment / toolkit
  A scalable procedurally generated grid-world and task-rule system producing diverse state-action and goal-conditioned trajectories.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/corl-team/xland-minigrid) · Access: Open-source environment and task generator
  Inclusion evidence C2: Official JAX interface exposes step(action), observation, reward and internal state. [Reviewed source](https://github.com/corl-team/xland-minigrid) · 2026-10-29

- **TAP-Vid** · 2022 · Benchmark
  A benchmark for tracking arbitrary points through real, motion-capture, and synthetic videos.
  `Egocentric / Human` · `Physics / Science` · `RGB Video` · `Trajectory` · `Occlusion Labels`
  [Homepage](https://deepmind-tapir.github.io/) · [Paper](https://arxiv.org/abs/2211.03726) · [Code](https://github.com/google-deepmind/tapnet) · Access: Official benchmark code and data
  Inclusion evidence C3: Video point tracks expose object-surface motion trajectories; use causal train/target splits for prediction, since the native tracking protocol can observe future frames. [Reviewed source](https://arxiv.org/abs/2211.03726) · 2026-10-29

- **VIMA-Bench** · 2022 · Dataset
  A procedurally generated robot-manipulation benchmark driven by multimodal prompts.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Language` · `Object Metadata`
  [Homepage](https://vimalabs.github.io/) · [Paper](https://arxiv.org/abs/2210.03094) · [Code](https://github.com/vimalabs/VIMA) · Access: Official benchmark code
  Inclusion evidence C2: Procedurally generated manipulation tasks include more than 600K expert trajectories and a defined generalization protocol. [Reviewed source](https://arxiv.org/abs/2210.03094) · 2026-10-29

- **Crafter** · 2021 · Generation environment / toolkit
  An open-world survival environment.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/danijar/crafter) · [Paper](https://arxiv.org/abs/2109.06780) · Access: Open-source environment
  Inclusion evidence C2: Visual survival-game episodes include actions, rewards and persistent crafting/resource state; generator, not a recorded dataset. [Reviewed source](https://arxiv.org/abs/2109.06780) · 2026-10-29

- **Distracting Control Suite** · 2021 · Generation environment / toolkit
  A visual-dynamics robustness benchmark adding background, color, and camera changes to continuous-control videos.
  `Robotics / Embodied AI` · `RGB Video` · `Simulation State` · `Action` · `Reward`
  [Code](https://github.com/google-research/google-research/tree/master/distracting_control) · [Paper](https://arxiv.org/abs/2101.02722) · Access: Open-source benchmark generator
  Inclusion evidence C2: Extends DM Control interactions with systematic visual distractions; a derived control environment, not an independent recorded collection. [Reviewed source](https://arxiv.org/abs/2101.02722) · 2026-10-29

- **MiniHack** · 2021 · Generation environment / toolkit
  Composable NetHack-based environments for planning, memory, and long-horizon state evolution.
  `Games / Virtual Environments` · `Game State` · `Action` · `Text` · `Reward`
  [Code](https://github.com/facebookresearch/minihack) · [Paper](https://arxiv.org/abs/2109.13202) · Access: Open-source benchmark
  Inclusion evidence C2: NetHack-based customizable interactive environments expose rich action-conditioned game dynamics; derived environment generator. [Reviewed source](https://arxiv.org/abs/2109.13202) · 2026-10-29

- **ROAD** · 2021 · Derived data / subset
  A road-video dataset for autonomous-driving event awareness, with agent, location, action, and event-level annotations for reasoning about traffic-participant state changes in continuous driving videos.
  `Autonomous Driving` · `RGB Video` · `2D Boxes` · `Action Labels` · `Semantic Labels` · `Trajectories`
  [Homepage](https://github.com/gurkirt/road-dataset) · Access: Official GitHub repository provides dataset resources and code
  Inclusion evidence C3: Official release provides per-frame agent boxes linked through persistent tracks over Oxford RobotCar videos. This is derived annotation data; native detection metrics are not forecasting metrics. [Reviewed source](https://github.com/gurkirt/road-dataset) · 2026-10-29

- **bsuite** · 2020 · Generation environment / toolkit
  A reproducible suite of reinforcement-learning environments and trajectory benchmarks for core capabilities.
  `Games / Virtual Environments` · `Game State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/google-deepmind/bsuite) · [Paper](https://arxiv.org/abs/1908.03568) · Access: Open-source benchmark
  Inclusion evidence C2: Official interface documents observation arrays, discrete action specifications and env.step(action), enabling controlled state-transition collection. [Reviewed source](https://github.com/google-deepmind/bsuite) · 2026-10-29

- **CLEVRER** · 2020 · Benchmark
  A synthetic benchmark for video-based physical and causal reasoning. Collision scenarios test descriptive, explanatory, predictive, and counterfactual reasoning with structured annotations.
  `Physics / Science` · `Synthetic Video` · `Object Metadata` · `Trajectory` · `Logic Program` · `QA`
  [Homepage](https://clevrer.csail.mit.edu/) · [Paper](https://arxiv.org/abs/1910.01442) · Access: Open download
  Inclusion evidence C4: Collision videos have explicit future-event prediction and counterfactual questions about physical outcomes. [Reviewed source](https://arxiv.org/abs/1910.01442) · 2026-10-29

- **Moving Symbols** · 2018 · Generation environment / toolkit
  A parameterized synthetic dataset designed to evaluate representations learned by video-prediction models through controlled symbol motion and compositional variation.
  `Physics / Science` · `Synthetic Video` · `Object State` · `Trajectory`
  [Paper](https://arxiv.org/abs/1802.08936) · [Code](https://github.com/rszeto/moving-symbols) · Access: Official code and generation repository
  Inclusion evidence C1: Parameterized synthetic moving symbols explicitly evaluate video-prediction representations under controlled variation. [Reviewed source](https://arxiv.org/abs/1802.08936) · 2026-10-29

<!-- DATASET_CATALOG_END -->

## Contributing and corrections

Please use GitHub Issues for all contributions and corrections. You can suggest a new dataset, report inaccurate metadata or broken links, question a classification, or share an update from an official source. When opening an issue, include the relevant official links, access and license information, primary task, and English and Chinese descriptions when available.

## Acknowledgments

The project was inspired by community-maintained world-model resources, especially [Awesome World Models](https://github.com/knightnemo/Awesome-World-Models), while focusing specifically on dataset discovery, comparison, and selection.
