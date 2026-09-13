# WorldModel Data Atlas

[English](./README.md) | [简体中文](./README.zh-CN.md)

_A task-first, evidence-aware catalog of open datasets for world-model research._

[![Live catalog](https://img.shields.io/badge/explore-live_catalog-2563eb)](https://aiworldmodel.github.io/world-model-dataset/)
[![Datasets](https://img.shields.io/badge/datasets-331-16a34a)](#dataset-catalog)
[![Primary tasks](https://img.shields.io/badge/primary_tasks-6-7c3aed)](#taxonomy)

[![website](https://github.com/worldopendata/world-model-dataset/blob/main/images/cover.jpg)](https://aiworldmodel.github.io/world-model-dataset)

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

## Catalog snapshot

| Datasets | Primary tasks | Domains | Modalities |
| ---: | ---: | ---: | ---: |
| 331 | 6 | 6 | 45 |

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

[Predictive & Generative Dynamics (38)](#predictive-generative-dynamics) · [Action-Conditioned Dynamics (47)](#action-conditioned-dynamics) · [Decision-Making & Agent Trajectories (84)](#decision-making-agent-trajectories) · [Spatial & Spatiotemporal World Modeling (62)](#spatial-spatiotemporal-world-modeling) · [Physical & Causal Reasoning (28)](#physical-causal-reasoning) · [World Model Evaluation & Diagnostics (72)](#world-model-evaluation-diagnostics)

<a id="predictive-generative-dynamics"></a>

### Predictive & Generative Dynamics (38)

- **DenseReward Dataset** · 2026
  A robot and human manipulation-video dataset with frame-level dense progress, stage, and failure-recovery annotations.
  `Robotics / Embodied AI` · `Egocentric / Human` · `RGB Video` · `Language` · `Reward` · `Action Labels`
  [Homepage](https://dense-reward.github.io/) · [Code](https://github.com/dense-reward/DenseReward) · Access: Official project and released benchmark resources available

- **Kimodo Motion Data** · 2026
  A 700-hour commercially friendly optical motion-capture resource for human and humanoid motion generation.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://research.nvidia.com/labs/sil/projects/kimodo/) · [Code](https://github.com/nv-tlabs/kimodo) · Access: Official project and code entries available

- **Mini Moving Shapes** · 2026
  A synthetic multimodal next-state prediction dataset with discrete action controls and symbolic state descriptions for multi-step imagination rollouts.
  `Games / Virtual Environments` · `Physics / Science` · `RGB Video` · `Text` · `Action` · `Simulation State`
  [Code](https://github.com/andrew-jeremy/Spectral-World-Models) · Access: Dataset bundled in the official repository and regenerable by script

- **Procgen Action-Conditioned World Model Dataset** · 2026
  Offline frames, actions, and termination signals generated from Procgen Atari environments for action-conditioned next-frame prediction and rollout evaluation.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Game State`
  [Code](https://github.com/Mayavan/world_model) · Access: Dataset generation code and rollout evaluation available

- **Scaling Laws for Motion Corpus** · 2026
  A large human-motion corpus filtered for visual quality, physical validity, and safety to study scaling laws in motion generation.
  `Egocentric / Human` · `Trajectories` · `3D State` · `RGB Video`
  [Homepage](https://getcartwheel.com/blog/scaling-laws) · [Code](https://github.com/Cartwhl/scaling-laws-for-motion) · Access: Official repository and technical report available; corpus release terms require verification

- **Dopamine-Reward / GRM Dataset** · 2025
  A large robot, human, and simulated manipulation-trajectory dataset supervised with BEFORE/AFTER relative progress.
  `Robotics / Embodied AI` · `Egocentric / Human` · `Multi-view RGB Video` · `Language` · `Reward` · `Trajectories`
  [Homepage](https://huggingface.co/datasets/tanhuajie2001/Robo-Dopamine-GRM-Dataset) · Access: Gated dataset available through Hugging Face application

- **OpenS2V-Nexus** · 2025
  A five-million-scale subject-to-video training dataset and fine-grained benchmark.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2505.20292) · Access: Paper entry; release status requires verification

- **TACO** · 2024
  A real bimanual tool-action-object interaction dataset with third-person and egocentric views, precise hand-object 3D meshes, and action labels for action recognition, motion forecasting, and cooperative grasp synthesis.
  `Egocentric / Human` · `Robotics / Embodied AI` · `Multi-view RGB Video` · `3D Mesh` · `Action Labels` · `Agent Pose` · `Object Metadata`
  [Homepage](https://taco2024.github.io/) · [Paper](https://arxiv.org/abs/2401.08399) · [Code](https://github.com/leolyliu/TACO-Instructions) · Access: Official project page provides dataset V1, pre-release data, paper, and code links

- **Ego4D** · 2022
  A large first-person video dataset of real human activities collected by Meta AI and an international academic consortium, with benchmarks for object interaction anticipation and long-term action forecasting.
  `Egocentric / Human` · `RGB Video` · `Audio` · `3D Mesh` · `Gaze` · `IMU`
  [Homepage](https://ego4d-data.org/) · [Paper](https://arxiv.org/abs/2110.07058) · [Code](https://github.com/facebookresearch/Ego4d) · Access: Application required

- **Ego4D Forecasting** · 2022
  An egocentric video benchmark for short-term future action forecasting.
  `Egocentric / Human` · `RGB Video` · `Action Labels` · `Language`
  [Homepage](https://ego4d-data.org/) · [Paper](https://arxiv.org/abs/2206.01641) · Access: Official challenge portal

- **EPIC-KITCHENS-100** · 2022
  A large first-person kitchen activity dataset with continuous video, action segments, verb-noun labels, and anticipation benchmarks for hand-object interaction.
  `Egocentric / Human` · `RGB Video` · `Audio` · `Action Labels` · `Language`
  [Homepage](https://epic-kitchens.github.io/2021) · [Paper](https://arxiv.org/abs/2006.13256) · [Code](https://github.com/epic-kitchens/epic-kitchens-100-annotations) · Access: Application / agreement required

- **Kubric** · 2022
  A pipeline for generating videos with exact 3D, optical-flow, depth, and segmentation annotations.
  `Physics / Science` · `Games / Virtual Environments` · `Synthetic Video` · `Depth` · `Optical Flow` · `Segmentation` · `3D State`
  [Homepage](https://kubric.readthedocs.io/) · [Paper](https://arxiv.org/abs/2203.03570) · [Code](https://github.com/google-research/kubric) · Access: Official generation toolkit

- **V-D4RL** · 2022
  A pixel-trajectory dataset and benchmark for visual offline reinforcement learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Reward` · `Simulation State`
  [Code](https://github.com/conglu1997/v-d4rl) · [Paper](https://arxiv.org/abs/2206.04779) · Access: Public Google Drive data and open-source loaders

- **Atari 100K Dataset** · 2020
  Frames, actions, rewards, and terminal signals from Atari games under a limited interaction budget for model-based RL.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Reward` · `Game State`
  [Code](https://github.com/mila-iqia/atari-dqn) · Access: Official benchmark implementations and data loaders available

- **BDD100K** · 2020
  A large driving-video dataset spanning cities, weather, and time of day, with annotations for detection, lanes, drivable areas, and tracking.
  `Autonomous Driving` · `RGB Video` · `2D Boxes` · `Segmentation` · `Lane Markings`
  [Homepage](https://bdd-data.berkeley.edu/) · [Paper](https://arxiv.org/abs/1805.04687) · [Code](https://github.com/bdd100k/bdd100k) · Access: Registration required

- **Griddly** · 2020
  A configurable generator of 2D games and physics environments.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/Bam4d/Griddly) · [Paper](https://arxiv.org/abs/2011.04683) · Access: Open-source engine

- **Procgen Benchmark** · 2020
  Procedurally generated visual RL environments with controllable actions, observations, and level-state trajectories.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/openai/procgen) · [Paper](https://arxiv.org/abs/1912.01588) · Access: Open-source environments

- **Virtual KITTI 2** · 2020
  A photorealistic synthetic driving-video dataset with depth, optical flow, scene flow, and 3D annotations.
  `Autonomous Driving` · `Games / Virtual Environments` · `Synthetic Video` · `Depth` · `Optical Flow` · `3D Boxes` · `Segmentation`
  [Homepage](https://europe.naverlabs.com/proxy-virtual-worlds-vkitti-2/) · [Paper](https://arxiv.org/abs/2001.10773) · Access: Official download

- **AMASS** · 2019
  A unified 4D human-motion database combining 15 motion-capture datasets in a common SMPL representation for motion prediction, generation, and interaction modeling.
  `Egocentric / Human` · `3D State` · `Trajectories` · `Agent Pose`
  [Homepage](https://amass.is.tue.mpg.de/) · [Paper](https://arxiv.org/abs/1904.03278) · Access: Official project access; registration may be required

- **Argoverse 1** · 2019
  An autonomous-driving dataset for 3D tracking and motion forecasting, combining trajectories, sensor logs, and HD maps for map-conditioned future prediction.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `Trajectories` · `3D Boxes`
  [Homepage](https://www.argoverse.org/av1.html) · [Paper](https://arxiv.org/abs/1911.02620) · [Code](https://github.com/argoverse/argoverse-api) · Access: Open download

- **D²-City** · 2019
  A large-scale dashcam video dataset spanning diverse weather, roads, and traffic conditions for urban driving dynamics and distribution generalization.
  `Autonomous Driving` · `Urban / 3D Scene` · `RGB Video` · `Semantic Labels` · `Trajectories`
  [Paper](https://arxiv.org/abs/1904.01975) · Access: Paper entry; official access requires verification

- **INTERACTION Dataset** · 2019
  A trajectory dataset focused on highly interactive driving scenarios such as intersections, roundabouts, and merging across multiple countries.
  `Autonomous Driving` · `Trajectories` · `Maps` · `Agent Pose`
  [Paper](https://arxiv.org/abs/1910.03088) · [Code](https://github.com/interaction-dataset/interaction-dataset) · Access: Open download

- **Kinetics-700** · 2019
  A large human-action video dataset covering 700 daily and sports action classes.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Paper](https://arxiv.org/abs/1907.06987) · Access: Official annotations and download scripts

- **PREVENTION Dataset** · 2019
  A real autonomous-driving dataset for surrounding-vehicle intention and trajectory prediction, with front/back video, LiDAR, long- and short-range radar, RTK DGNSS, IMU, lane-change labels, detections, and trajectories.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `RADAR` · `GPS / IMU` · `Trajectories`
  [Homepage](https://prevention-dataset.uah.es/) · [Paper](https://doi.org/10.1109/ITSC.2019.8917433) · Access: Official website provides raw data, processed data, tools, and annotations

- **3DPW** · 2018
  A real-world 3D human pose and motion video dataset with SMPL parameters and camera information.
  `Egocentric / Human` · `RGB Video` · `Agent Pose` · `Camera Pose`
  [Homepage](https://virtualhumans.mpi-inf.mpg.de/3DPW/) · [Paper](https://arxiv.org/abs/1810.04558) · Access: Official download

- **Charades-Ego** · 2018
  Pairs first- and third-person videos of the same indoor activities with multi-label temporal actions for cross-view behavior representation.
  `Egocentric / Human` · `Multi-view RGB Video` · `Action Labels`
  [Homepage](https://prior.allenai.org/projects/charades-ego) · [Paper](https://arxiv.org/abs/1804.09626) · Access: Open / agreement-dependent

- **EPIC-KITCHENS-55** · 2018
  The first large EPIC-KITCHENS release, capturing continuous first-person activities in participants' own kitchens with action, verb, noun, and narration labels.
  `Egocentric / Human` · `RGB Video` · `Audio` · `Action Labels` · `Language`
  [Homepage](https://epic-kitchens.github.io/2018) · [Paper](https://arxiv.org/abs/1804.02748) · [Code](https://github.com/epic-kitchens/epic-kitchens-55-annotations) · Access: Application / agreement required

- **Kinetics-600** · 2018
  A large-scale video dataset covering 600 human action classes.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Paper](https://arxiv.org/abs/1808.01316) · Access: Official annotations

- **Something-Something V2** · 2018
  A large collection of short human-object interaction videos whose fine-grained labels depend on temporal changes such as pushing, placing, and occluding.
  `Egocentric / Human` · `RGB Video` · `Action Labels` · `Text Templates`
  [Paper](https://arxiv.org/abs/1706.04261) · Access: Registration required

- **World Models CarRacing Rollouts** · 2018
  CarRacing visual observations, actions, and latent rollouts from the original World Models project.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Reward` · `Simulation State`
  [Code](https://github.com/ctallec/world-models) · Access: Official repository includes data-generation and training pipeline

- **YouTube-VOS** · 2018
  A large video object-segmentation dataset with cross-frame masks and long-term tracking scenes.
  `Egocentric / Human` · `RGB Video` · `Segmentation` · `Object Metadata`
  [Homepage](https://youtube-vos.org/) · [Paper](https://arxiv.org/abs/1809.03327) · Access: Official challenge website

- **DAVIS** · 2016
  A high-quality video object-segmentation and tracking dataset with dense frame-level masks.
  `Egocentric / Human` · `RGB Video` · `Segmentation`
  [Homepage](https://davischallenge.org/) · [Paper](https://arxiv.org/abs/1604.00675) · Access: Official dataset website

- **ViZDoom** · 2016
  A Doom-based first-person visual RL environment with controllable actions and frame sequences.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Homepage](https://vizdoom.cs.put.poznan.pl/) · [Code](https://github.com/Farama-Foundation/ViZDoom) · [Paper](https://arxiv.org/abs/1605.02097) · Access: Open-source engine and scenarios

- **Moving MNIST** · 2015
  A classic video-prediction benchmark generated by moving MNIST digits across a canvas with boundary collisions, widely used for temporal representation and uncertain-future modeling.
  `Physics / Science` · `Synthetic Video` · `Object State` · `Trajectory`
  [Homepage](https://www.tensorflow.org/datasets/catalog/moving_mnist) · [Paper](https://arxiv.org/abs/1502.04681) · [Code](https://github.com/tensorflow/datasets) · Access: Open generation toolkit

- **Human3.6M** · 2014
  A large multi-view human motion dataset with synchronized video, 3D joints, camera parameters, and action labels, foundational for future-pose prediction.
  `Egocentric / Human` · `Multi-view RGB Video` · `3D State` · `Action Labels` · `Camera Pose`
  [Homepage](http://vision.imar.ro/human3.6m/description.php) · [Paper](https://ieeexplore.ieee.org/document/6682899) · Access: Registration / agreement required

- **UCF101** · 2012
  A public video dataset of 101 human action classes with temporal action clips.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Homepage](https://www.crcv.ucf.edu/data/UCF101.php) · [Paper](https://arxiv.org/abs/1212.0402) · Access: Official dataset page

- **HMDB51** · 2011
  A video dataset of 51 human action classes collected from films and public videos.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Homepage](https://serre-lab.clps.brown.edu/resource/hmdb-a-large-human-motion-database/) · Access: Official project page

- **KTH Human Actions** · 2004
  An early real-video benchmark widely reused for video prediction, with six continuous human actions under controlled backgrounds and scale variation.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Homepage](https://www.csc.kth.se/cvap/actions/) · Access: Open download

<a id="action-conditioned-dynamics"></a>

### Action-Conditioned Dynamics (47)

- **AgiBot World 2026** · 2026
  A real-scene multiview robot-manipulation dataset with step, success-frame, error-cause, and recovery annotations.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Robot State` · `Action` · `Language` · `Reward`
  [Homepage](https://agibot-world.com) · [Code](https://huggingface.co/datasets/agibot-world/AgiBotWorld2026) · Access: Dataset available on Hugging Face and official site

- **HandEdit** · 2026
  A large egocentric dataset for editing human hands into dexterous robot embodiments.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `3D Metadata` · `Text`
  [Paper](https://arxiv.org/abs/2608.12122) · Access: Paper entry; release status requires verification

- **kine2go** · 2026
  A dataset retargeting animal and quadruped motion capture into Unitree Go2 reference trajectories and policy rollouts.
  `Robotics / Embodied AI` · `Trajectories` · `Robot State` · `Action` · `RGB Video`
  [Homepage](https://nomagiclab.github.io/kine2go-pipeline/) · [Paper](https://arxiv.org/abs/2606.14433) · [Code](https://github.com/nomagiclab/kine2go-pipeline) · Access: Dataset artifacts available on Hugging Face

- **KungFuAthleteBot Motion Dataset** · 2026
  A high-dynamics humanoid motion dataset extracted from martial-arts training videos, with ground and jumping motions retargeted to robots.
  `Robotics / Embodied AI` · `Egocentric / Human` · `RGB Video` · `Trajectories` · `Robot State`
  [Homepage](https://kungfuathletebot.github.io/) · [Paper](https://arxiv.org/abs/2602.13656) · [Code](https://github.com/NPCLEI/KungFuAthleteBot) · Access: Dataset available through Hugging Face and official download links

- **Open Locomotion Skills Dataset** · 2026
  A unified dataset of locomotion trajectories, terrain metadata, and sim-to-real tools across legged robot morphologies.
  `Robotics / Embodied AI` · `Trajectories` · `Robot State` · `Action` · `Scene Metadata`
  [Homepage](https://kanishqgandharv219.github.io/open-locomotion-dataset/) · [Code](https://github.com/KanishqGandharv219/open-locomotion-dataset) · Access: Schema, ingestors, validation, and benchmark tools available

- **REBOOT26 Recovery Trajectories** · 2026
  Bimanual WidowX robot recovery trajectories covering removal, installation, and fault-recovery tasks.
  `Robotics / Embodied AI` · `RGB Video` · `Robot State` · `Action` · `Trajectories`
  [Homepage](https://huggingface.co/REBOOT26) · Access: Recovery datasets available through Hugging Face organization

- **Robo-ValueRL** · 2026
  An offline-to-online real-robot manipulation dataset with history-conditioned values, frame-level progress, and action-quality labels.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Reward` · `Trajectories`
  [Homepage](https://huggingface.co/datasets/X-Humanoid/Robo-ValueRL) · [Code](https://github.com/Open-X-Humanoid/Robo-ValueRL) · Access: LeRobot dataset publicly available on Hugging Face

- **ViTacWorld** · 2026
  A visuo-tactile-action trajectory resource for contact-rich manipulation.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action` · `Robot State`
  [Paper](https://arxiv.org/abs/2607.22530) · [Homepage](https://vitacworld.github.io/) · Access: Paper entry; release status requires verification

- **VLA-REPLICA** · 2026
  A low-cost SO-101 vision-language-action replication dataset with demonstrations, action-state streams, and reference scenes.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Code](https://github.com/IRVLUTD/VLAReplica) · [Homepage](https://huggingface.co/datasets/HenryZhang/VLAReplica_SFT_data) · Access: SFT data available on Hugging Face with official code

- **WildWorld** · 2026
  A large-scale action-conditioned game dataset for interactive generative world models, with explicit character state, camera pose, and depth annotations.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Depth` · `Camera Pose` · `Game State`
  [Homepage](https://alaya-studio.github.io/wildworld-project/) · [Paper](https://arxiv.org/abs/2603.23497) · [Code](https://github.com/AlayaLab/WildWorld) · Access: Part 1 available on Hugging Face; later parts are planned

- **BlueROV2 Dynamics Dataset** · 2025
  Underwater robot dynamics data with training scripts and learned and physics-based models.
  `Robotics / Embodied AI` · `Physics / Science` · `Action` · `Robot State` · `Trajectories`
  [Code](https://github.com/ViktorNfa/bluerov2_dynamics) · Access: Official datasets and training code available

- **MuJoCo Playground** · 2025
  An open-source MuJoCo MJX robot-learning suite for large-scale generation of contact-rich states, actions, and sensor trajectories.
  `Robotics / Embodied AI` · `Physics / Science` · `Simulation State` · `Action` · `Reward` · `RGB Video`
  [Code](https://github.com/google-deepmind/mujoco_playground) · [Paper](https://arxiv.org/abs/2502.08844) · Access: Open-source environments and training code

- **Open-H-Embodiment** · 2025
  A community-driven open dataset initiative for generalist vision-language-action models in healthcare robotics.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Code](https://github.com/open-h/open-h-embodiment) · Access: Official project repository and contribution entry available

- **PHUMA** · 2025
  A high-quality humanoid locomotion dataset constructed through physics-constrained filtering and motion retargeting.
  `Robotics / Embodied AI` · `Trajectories` · `Robot State` · `3D State`
  [Homepage](https://davian-robotics.github.io/PHUMA/) · [Paper](https://arxiv.org/abs/2510.26236) · [Code](https://github.com/DAVIAN-Robotics/PHUMA) · Access: Prebuilt dataset available through official download scripts and Hugging Face

- **RoboVerse** · 2025
  A scalable embodied resource unifying robot-learning simulation, task data, and evaluation protocols.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Robot State` · `Object State` · `Trajectories`
  [Homepage](https://roboverse.wiki/) · [Paper](https://arxiv.org/abs/2504.18904) · [Code](https://github.com/RoboVerseOrg/RoboVerse) · Access: Platform, tasks, and benchmark code publicly available

- **RoVI-Book** · 2025
  A dataset focused on robotic manipulation and visual understanding for robotic visual instruction.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Language` · `Robot State`
  [Homepage](https://robotic-visual-instruction.github.io/) · [Code](https://github.com/robotic-visual-instruction/RoVI-Book) · Access: Official project page and repository available

- **DrivingDojo** · 2024
  A video dataset tailored to interactive driving world models, covering driving maneuvers, multi-agent interplay, open-world knowledge, and an action-instruction-following benchmark.
  `Autonomous Driving` · `RGB Video` · `Action` · `Language` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2410.10738) · [Code](https://github.com/Robertwyq/Drivingdojo) · Access: Paper and official project repository available; dataset access terms require verification

- **Isaac Lab** · 2024
  A GPU physics-simulation framework for robot learning that generates large-scale state-action trajectories.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Simulation State` · `Action` · `Reward`
  [Code](https://github.com/isaac-sim/IsaacLab) · [Paper](https://arxiv.org/abs/2309.07137) · Access: Open-source repository

- **RetroAct** · 2024
  An annotated retro-game environment dataset for generative interactive environments and action-conditioned world models, with behavior, camera, motion-axis, and control metadata.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Simulation State` · `Camera Pose`
  [Homepage](https://nsavov.github.io/GenieRedux/) · [Code](https://github.com/insait-institute/GenieRedux) · Access: Official repository includes environment annotations, data-generation, training, and evaluation code

- **RoboCasa** · 2024
  A large-scale simulation environment and task suite for household robot learning, with diverse kitchens, objects, language tasks, and generated visual-action trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Depth` · `Action` · `Robot State` · `Language`
  [Homepage](https://robocasa.ai/) · [Paper](https://arxiv.org/abs/2406.02523) · [Code](https://github.com/robocasa/robocasa) · Access: Open generation toolkit

- **ARMBench** · 2023
  A large object-centric benchmark captured during warehouse robotic pick-and-place, with images, videos, and metadata before picking, during transfer, and after placement.
  `Robotics / Embodied AI` · `RGB Video` · `Segmentation` · `Object Metadata` · `Action Labels`
  [Homepage](http://armbench.com) · [Paper](https://arxiv.org/abs/2303.16382) · [Code](https://github.com/amzn/armbench) · Access: Official dataset website and loading code available

- **Minari Offline RL Datasets** · 2023
  A standardized offline-RL dataset library providing complete episodes with observations, actions, rewards, and termination signals.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `Simulation State` · `Action` · `Reward` · `Trajectories`
  [Homepage](https://minari.farama.org/) · [Code](https://github.com/Farama-Foundation/Minari) · Access: Open dataset registry and loaders

- **RH20T** · 2023
  A real-world bimanual manipulation dataset with multiview RGB-D, force sensing, and robot state.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State`
  [Homepage](https://rh20t.github.io/) · [Paper](https://arxiv.org/abs/2307.00770) · [Code](https://github.com/rh20t/rh20t_api) · Access: Official project and download entry

- **TriFinger RL Dataset** · 2023
  An offline-RL dataset of real TriFinger Push/Lift tasks with states, actions, rewards, and behavior of varying quality.
  `Robotics / Embodied AI` · `Robot State` · `Action` · `Reward` · `RGB Video` · `Trajectories`
  [Homepage](https://doi.org/10.17617/3.DXZ7TL) · [Code](https://webdav.tuebingen.mpg.de/trifinger-rl/docs/datasets/index.html) · Access: Official DOI and dataset documentation available

- **ExORL** · 2022
  Offline state-action trajectories collected by unsupervised exploration in the DeepMind Control Suite.
  `Robotics / Embodied AI` · `Simulation State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/denisyarats/exorl) · [Paper](https://arxiv.org/abs/2201.13425) · Access: Download script and open-source loaders

- **H2O** · 2022
  An egocentric hand-object interaction dataset with 3D poses of both hands and objects.
  `Egocentric / Human` · `RGB Video` · `Depth` · `Hand Pose` · `Object State`
  [Paper](https://arxiv.org/abs/2206.13809) · Access: Official project page

- **HOI4D** · 2022
  A 4D human-object interaction video dataset with hand, object, and camera-motion annotations.
  `Egocentric / Human` · `Robotics / Embodied AI` · `RGB-D` · `Action Labels` · `Object State` · `Agent Pose`
  [Homepage](https://hoi4d.github.io/) · [Paper](https://arxiv.org/abs/2203.01577) · Access: Official project and data

- **ManiSkill** · 2022
  An efficient physics-simulation benchmark and trajectory-generating environment for robot manipulation learning.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB-D` · `Action` · `Simulation State` · `Object State`
  [Homepage](https://maniskill.ai/) · [Paper](https://arxiv.org/abs/2202.04057) · [Code](https://github.com/haosulab/ManiSkill) · Access: Official simulator and benchmark

- **MineDojo** · 2022
  A large multimodal knowledge and interaction platform built around Minecraft, combining player videos, text knowledge, community discussions, and a live simulation environment for open-world agents.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Audio` · `Text` · `Game State`
  [Homepage](https://minedojo.org/) · [Paper](https://arxiv.org/abs/2206.01356) · [Code](https://github.com/MineDojo/MineDojo) · Access: Open / source-dependent

- **MyoSuite** · 2022
  MuJoCo musculoskeletal environments with high-dimensional body states, actions, and motion trajectories.
  `Robotics / Embodied AI` · `Physics / Science` · `Simulation State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/facebookresearch/myosuite) · [Paper](https://arxiv.org/abs/2205.13608) · Access: Open-source benchmark

- **RT-1 Data** · 2022
  Real-robot multitask language-conditioned manipulation trajectories used to train the Robotics Transformer.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Language` · `Robot State`
  [Paper](https://arxiv.org/abs/2212.06817) · [Code](https://github.com/google-research/robotics_transformer) · Access: Paper and project entry; access may be restricted

- **Brax** · 2021
  A JAX-based differentiable rigid-body physics engine and RL environment for parallel state-action-reward trajectory generation.
  `Robotics / Embodied AI` · `Physics / Science` · `Simulation State` · `Action` · `Reward` · `RGB Video`
  [Code](https://github.com/google/brax) · [Paper](https://arxiv.org/abs/2106.13281) · Access: Open-source engine and environments

- **DexYCB** · 2021
  An RGB-D video dataset of hand-YCB object interactions with 3D hand and object poses.
  `Egocentric / Human` · `Robotics / Embodied AI` · `RGB-D` · `3D Mesh` · `Agent Pose` · `Object State`
  [Homepage](https://dex-ycb.github.io/) · [Paper](https://arxiv.org/abs/2104.04631) · [Code](https://github.com/NVlabs/dex-ycb-toolkit) · Access: Official download

- **Isaac Gym** · 2021
  GPU-accelerated physics environments that generate robot states, actions, and visual trajectories.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Simulation State` · `Action` · `Reward`
  [Code](https://github.com/isaac-sim/IsaacGymEnvs) · [Paper](https://arxiv.org/abs/2108.10470) · Access: Official repository and release

- **Atari Replay Dataset** · 2020
  Large-scale Atari replay saved during DQN training, containing frames, actions, rewards, and terminal signals.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Reward` · `Game State`
  [Code](https://github.com/google/dopamine/tree/master/dopamine/labs/offline_rl) · [Paper](https://arxiv.org/abs/1907.04543) · Access: Public replay data through Dopamine tooling

- **D4RL** · 2020
  A standardized offline-RL dataset suite with states, actions, rewards, and termination signals.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `Simulation State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/Farama-Foundation/D4RL) · Access: Official repository and environment loaders available

- **InterHand2.6M** · 2020
  A large 3D interacting-hand pose dataset with real and synthetic hand interaction sequences.
  `Egocentric / Human` · `Robotics / Embodied AI` · `RGB Video` · `Agent Pose` · `3D Mesh`
  [Homepage](https://mks.ue.tsinghua.edu.cn/InterHand2.6M/) · [Paper](https://arxiv.org/abs/2008.09309) · Access: Official project page

- **RL Unplugged** · 2020
  An offline-RL trajectory collection spanning Atari, DeepMind Control, robotics, and other environments.
  `Games / Virtual Environments` · `Robotics / Embodied AI` · `Simulation State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/deepmind/deepmind-research/tree/master/rl_unplugged) · Access: Datasets available through TensorFlow Datasets and official code

- **RoboNet** · 2020
  A cross-platform robot interaction video dataset collected across multiple laboratories, robot arms, viewpoints, and objects for visual dynamics and control generalization.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.robonet.wiki/) · [Paper](https://arxiv.org/abs/1910.11215) · [Code](https://github.com/SudeepDasari/RoboNet) · Access: Open download

- **robosuite Benchmark** · 2020
  A modular robot-manipulation simulation framework providing generated multitask trajectories, visual observations, and physical state.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB-D` · `Action` · `Simulation State` · `Robot State`
  [Homepage](https://robosuite.ai/) · [Paper](https://arxiv.org/abs/2009.08993) · [Code](https://github.com/ARISE-Initiative/robosuite) · Access: Official simulator and datasets

- **OmniPush** · 2019
  A real-robot pushing-dynamics dataset with RGB-D video and state changes across objects, surfaces, and pushing actions for transferable visual dynamics learning.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Object State` · `Trajectory`
  [Paper](https://arxiv.org/abs/1910.00618) · [Code](https://github.com/MIT-Omnipush/video-prediction) · Access: Open project access

- **Adroit Demonstrations** · 2018
  Demonstration trajectories for dexterous-hand manipulation.
  `Robotics / Embodied AI` · `Simulation State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/Farama-Foundation/Gymnasium-Robotics) · Access: Open-source environment and offline datasets

- **DeepMind Control Suite** · 2018
  A suite of continuous-control physics environments that generate trajectories with states, actions, rewards, and visual observations.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Simulation State` · `Action` · `Reward`
  [Code](https://github.com/google-deepmind/dm_control) · Access: Open-source environment and reproducible trajectory generation

- **AI2-THOR** · 2017
  An interactive indoor simulator generating navigation, manipulation, and state-change trajectories.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB-D` · `Action` · `Simulation State` · `Object State`
  [Homepage](https://ai2thor.allenai.org/) · [Paper](https://arxiv.org/abs/1712.05474) · [Code](https://github.com/allenai/ai2thor) · Access: Official simulator

- **CARLA** · 2017
  An open autonomous-driving simulator generating multisensor driving, traffic-agent, and control trajectories.
  `Autonomous Driving` · `Games / Virtual Environments` · `RGB Video` · `LiDAR` · `RADAR` · `Action` · `Simulation State`
  [Homepage](https://carla.org/) · [Paper](https://arxiv.org/abs/1711.03938) · [Code](https://github.com/carla-simulator/carla) · Access: Official simulator

- **PyBullet** · 2017
  An open-source rigid-body physics simulation environment.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Simulation State` · `Action` · `Reward`
  [Code](https://github.com/bulletphysics/bullet3) · [Paper](https://arxiv.org/abs/1705.04895) · Access: Open-source simulator

- **BAIR Robot Pushing** · 2016
  A classic action-conditioned video dataset of a robot pushing objects on a tabletop, widely used for stochastic future prediction and visual dynamics baselines.
  `Robotics / Embodied AI` · `RGB Video` · `Action`
  [Homepage](https://www.tensorflow.org/datasets/catalog/bair_robot_pushing_small) · [Paper](https://arxiv.org/abs/1605.07157) · [Code](https://github.com/tensorflow/datasets) · Access: Open download

<a id="decision-making-agent-trajectories"></a>

### Decision-Making & Agent Trajectories (84)

- **AbstainEQA** · 2026
  An embodied question-answering benchmark testing whether agents abstain appropriately when trajectory evidence is insufficient.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB Video` · `QA` · `Trajectories` · `Camera Pose`
  [Code](https://github.com/gibrantaowu/AbstainEQA) · Access: QA files and frame-extraction utilities available; source assets require separate access

- **ACE-Data-0** · 2026
  A synchronized home-interaction dataset with multiview video, body, hands, objects, audio, and touch.
  `Robotics / Embodied AI` · `Physics / Science` · `Multi-view RGB Video` · `Audio` · `Action` · `Object State`
  [Paper](https://arxiv.org/abs/2607.28625) · Access: Paper entry; release status requires verification

- **AXIS** · 2026
  A community-driven browser-teleoperation robot data engine and benchmark.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action` · `Robot State`
  [Paper](https://arxiv.org/abs/2607.21588) · Access: Paper entry; release status requires verification

- **CARLA-Air** · 2026
  An air-ground embodied simulation infrastructure unifying urban driving and multirotor flight in one CARLA world.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Paper](https://arxiv.org/abs/2603.28032) · [Code](https://github.com/louiszengCN/CarlaAir) · Access: Official project, code, and data entry available: https://huggingface.co/tianlezeng/CarlaAIr-v0.1.7

- **DreamDojo Data** · 2026
  A 44K-hour egocentric human-video corpus plus robot post-training data for generalist robot world models.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://dreamdojo-world.github.io/) · [Paper](https://arxiv.org/abs/2602.06949) · [Code](https://github.com/NVIDIA/DreamDojo) · Access: Official project, code, and data entry available: https://huggingface.co/datasets/nvidia/PhysicalAI-Robotics-GR00T-Teleop-GR1

- **EBiM Benchmark** · 2026
  An embodied mobile-bimanual manipulation benchmark with task environments, simulation setups, and trajectory-collection entry points.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Object State` · `Trajectories`
  [Homepage](https://ebim-benchmark.github.io/) · [Code](https://github.com/EBiM-Benchmark/benchmark) · Access: Task environments and starter kits available in official repositories

- **Evo-RL Real-World Dataset** · 2026
  An open real-robot offline-RL dataset for SO-101 and AgileX PiPER platforms.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://huggingface.co/datasets/MINT-SJTU/RW-RL-Dataset) · [Code](https://github.com/MINT-SJTU/Evo-RL) · Access: Official code and data entries available: https://huggingface.co/datasets/MINT-SJTU/RW-RL-Dataset

- **HiPHI** · 2026
  A high-precision whole-body human-motion and object-interaction dataset.
  `Robotics / Embodied AI` · `Physics / Science` · `Agent Pose` · `3D Mesh` · `Object State`
  [Paper](https://arxiv.org/abs/2608.16222) · Access: Paper entry; release status requires verification

- **HUI360** · 2026
  A 360-degree robot-egocentric dataset for anticipating human-robot interactions.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Agent Pose` · `Segmentation`
  [Paper](https://arxiv.org/abs/2608.11051) · [Homepage](https://hucebot.github.io/hui360) · Access: Paper entry; release status requires verification

- **ManipArena Dataset** · 2026
  A multiview expert-trajectory dataset and benchmark for reasoning-oriented real-robot manipulation tasks.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://huggingface.co/datasets/ManipArena/maniparena-dataset) · Access: Dataset available through gated Hugging Face access

- **OmniBehavior** · 2026
  A real-user interaction-trace dataset for long-horizon, cross-scenario human behavior simulation, released in Chinese and English.
  `Egocentric / Human` · `Action` · `Trajectories` · `Text`
  [Homepage](https://huggingface.co/datasets/jiawei-ucas/OmniBehavior) · [Paper](https://arxiv.org/abs/2604.08362) · [Code](https://github.com/icip-cas/OmniBehavior) · Access: Full bilingual dataset available on Hugging Face

- **RescueBench** · 2026
  An Unreal Engine open-world search-and-rescue benchmark with multi-stage tasks, progressive difficulty, and expert-trajectory collection tools.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Language` · `Reward` · `Trajectories`
  [Homepage](https://github.com/UnrealZoo/RescueBench) · [Code](https://github.com/UnrealZoo/RescueBench) · Access: Benchmark environment and trajectory collection tools available; dataset release planned

- **TableVerse-100K** · 2026
  One hundred thousand interactive tabletop environments reconstructed from real imagery with manipulation trajectories.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB-D` · `Action` · `Simulation State`
  [Paper](https://arxiv.org/abs/2607.21017) · Access: Paper entry; release status requires verification

- **UniETP** · 2026
  A unified embodied task-planning benchmark spanning AI2-THOR, VirtualHome, Habitat, and BEHAVIOR with automatic task generation.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Scene Metadata` · `Language` · `Trajectories`
  [Code](https://github.com/woyut/UniETP) · Access: Unified environment and task-generation code available

- **AirCopBench** · 2025
  A benchmark for multi-drone collaborative embodied perception and reasoning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Trajectories` · `Language`
  [Code](https://github.com/zhajirong/AirCopBench) · Access: Official evaluation code and project resources available

- **EMMOE** · 2025
  A comprehensive benchmark for embodied mobile manipulation in open environments.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Object State`
  [Code](https://github.com/silence143/EMMOE) · Access: Official benchmark code available

- **FLAME** · 2025
  A large simulated demonstration benchmark for federated robot manipulation learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2503.01729) · Access: Paper entry; release status requires verification

- **HINT-Bench** · 2025
  A benchmark for early human-intention prediction in shared environments using LiDAR, skeleton, and robot-state trajectories.
  `Robotics / Embodied AI` · `Egocentric / Human` · `LiDAR` · `Agent Pose` · `Robot State` · `Trajectories`
  [Code](https://github.com/valerio-bo/HINT-Bench) · Access: Benchmark data and simulation generator publicly available

- **LabUtopia** · 2025
  A scientific-lab suite with multiphysics simulation, procedural scenes, and hierarchical embodied tasks.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2505.22634) · Access: Paper entry; release status requires verification

- **MIKASA** · 2025
  A memory-intensive reinforcement-learning benchmark for tabletop robotics.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2502.10550) · Access: Paper entry; release status requires verification

- **MRCD** · 2025
  An outdoor mobile-robot dataset for ROS2 perception and navigation.
  `Robotics / Embodied AI` · `RGB Video` · `LiDAR` · `IMU / GPS` · `Trajectories`
  [Homepage](https://sm20598.github.io/MRCD/) · [Code](https://github.com/SM20598/MRCD) · Access: Project page and repository available

- **MuBlE / SHOP-VRB2** · 2025
  A MuJoCo-Blender environment and benchmark for long-horizon physical manipulation reasoning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2503.02834) · Access: Paper entry; release status requires verification

- **NVIDIA Physical AI Autonomous Vehicles Dataset** · 2025
  A large, geographically diverse, multisensor driving dataset for end-to-end autonomous driving and physical AI research.
  `Autonomous Driving` · `Multi-view RGB Video` · `LiDAR` · `RADAR` · `GPS / IMU` · `Trajectories`
  [Homepage](https://huggingface.co/datasets/nvidia/PhysicalAI-Autonomous-Vehicles) · [Code](https://github.com/NVlabs/physical_ai_av) · Access: Available on Hugging Face after accepting dataset terms

- **OceanGym** · 2025
  A high-fidelity underwater simulation environment and dataset for perception, continuous-control navigation, and embodied decision-making.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Trajectories` · `Scene Metadata`
  [Homepage](https://oceangpt.github.io/OceanGym/) · [Paper](https://arxiv.org/abs/2509.26536) · [Code](https://github.com/OceanGPT/OceanGym) · Access: Environment data and trajectories available on Hugging Face

- **PartInstruct** · 2025
  A fine-grained robot-manipulation benchmark with part instructions, 3D labels, and expert demonstrations.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2505.21652) · Access: Paper entry; release status requires verification

- **RoboGround Data** · 2025
  A simulated robot-manipulation data resource with diverse objects and instructions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2504.21530) · Access: Paper entry; release status requires verification

- **SHREC** · 2025
  A multimodal human-robot interaction video dataset for socially intelligent embodied agents.
  `Robotics / Embodied AI` · `Egocentric / Human` · `RGB Video` · `Audio` · `Language` · `Trajectories`
  [Code](https://github.com/mitmedialab/SHREC) · Access: Official project repository and data documentation available

- **TPT-Bench** · 2025
  A large-scale, long-term robot-egocentric dataset and benchmark for target-person tracking.
  `Robotics / Embodied AI` · `Egocentric / Human` · `RGB Video` · `Trajectories` · `3D Annotations`
  [Code](https://github.com/MedlarTea/TPT-BENCH-TOOLS) · Access: Official benchmark tools and project repository available

- **BRMData** · 2024
  A bimanual-mobile robot manipulation dataset for household tasks spanning single- and dual-arm, tabletop and mobile, human-interactive, rigid, and flexible-object scenarios.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Depth` · `Action` · `Robot State`
  [Homepage](https://embodiedrobot.github.io/) · [Paper](https://arxiv.org/abs/2405.18860) · Access: Official project page and paper available; access conditions require verification

- **DROID** · 2024
  A large real-world robot manipulation dataset spanning many sites, operators, and everyday scenes, with synchronized vision, actions, language, and robot state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://droid-dataset.github.io/) · [Paper](https://arxiv.org/abs/2403.12945) · [Code](https://github.com/droid-dataset/droid) · Access: Open download

- **PARTNR** · 2024
  A large embodied benchmark for planning and reasoning in household human-robot collaboration, with simulation-grounded language tasks containing spatial, temporal, and heterogeneous-agent constraints.
  `Robotics / Embodied AI` · `Language` · `Action` · `Simulation State` · `Object State` · `Trajectory`
  [Paper](https://arxiv.org/abs/2411.00081) · [Code](https://github.com/facebookresearch/partnr-planner) · Access: Official benchmark planner and task resources available

- **RoboMIND** · 2024
  A large unified multi-embodiment manipulation dataset with successful and failed teleoperation trajectories, multiview observations, robot states, language descriptions, and a digital-twin environment.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State` · `Language` · `Depth`
  [Homepage](https://x-humanoid-robomind.github.io/) · [Paper](https://arxiv.org/abs/2412.13877) · [Code](https://github.com/x-humanoid-robomind/x-humanoid-robomind.github.io) · Access: Official project provides dataset and tooling entry points

- **BridgeData V2** · 2023
  A large real-robot multitask manipulation dataset spanning diverse kitchen and tabletop scenes.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://rail-berkeley.github.io/bridgedata/) · [Paper](https://arxiv.org/abs/2305.08990) · Access: Official project and download

- **FurnitureBench** · 2023
  A real-and-simulated long-horizon furniture assembly robot benchmark with trajectories.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Object State`
  [Homepage](https://clvrai.github.io/furniture-bench/) · [Paper](https://arxiv.org/abs/2305.12821) · [Code](https://github.com/clvrai/furniture-bench) · Access: Official benchmark and code

- **Jumanji** · 2023
  A JAX-based suite of combinatorial optimization and RL environments with batchable state-action-reward trajectories.
  `Games / Virtual Environments` · `Game State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/instadeepai/jumanji) · [Paper](https://arxiv.org/abs/2306.09884) · Access: Open-source benchmark suite

- **LIBERO** · 2023
  A benchmark for lifelong and language-conditioned robot manipulation with multi-task demonstrations, visual observations, actions, and task descriptions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://libero-project.github.io/) · [Paper](https://arxiv.org/abs/2306.14877) · [Code](https://github.com/Lifelong-Robot-Learning/LIBERO) · Access: Open generation toolkit

- **MimicGen** · 2023
  A framework that generates diverse robot manipulation demonstrations by replaying and composing a small number of human demonstrations in simulation.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://mimicgen.github.io/) · [Paper](https://arxiv.org/abs/2310.17596) · [Code](https://github.com/NVlabs/mimicgen) · Access: Open generation toolkit

- **Mini-BEHAVIOR** · 2023
  A procedural 3D gridworld benchmark for long-horizon embodied decision-making with household tasks, object states, interaction actions, and human-demonstration collection.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Simulation State` · `Object State` · `Trajectory`
  [Paper](https://arxiv.org/abs/2310.01824) · [Code](https://github.com/StanfordVL/mini_behavior) · Access: Official environment code and demonstration collection tools available

- **Open X-Embodiment** · 2023
  A large cross-embodiment collection assembled by Google DeepMind and more than 30 research institutions. It unifies real robot interactions across platforms, tasks, and environments for generalist embodied learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://robotics-transformer-x.github.io/) · [Paper](https://arxiv.org/abs/2310.08864) · [Code](https://github.com/google-deepmind/open_x_embodiment) · Access: Open / component-dependent

- **RoboHive** · 2023
  A unified benchmark framework for real and simulated robot-learning tasks, trajectories, and hardware interfaces.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Simulation State`
  [Homepage](https://sites.google.com/view/robohive) · [Paper](https://arxiv.org/abs/2310.06828) · [Code](https://github.com/vikashplus/robohive) · Access: Official framework

- **RoboSet** · 2023
  A real household tabletop manipulation dataset with multi-skill, multi-task demonstrations across everyday activities, four camera views, language-defined tasks, teleoperation, and kinesthetic playback trajectories.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State` · `Language` · `Trajectories`
  [Homepage](https://robopen.github.io/roboset/) · [Paper](https://arxiv.org/abs/2309.01918) · [Code](https://github.com/robopen/roboagent) · Access: Official RoboSet pages provide downloadable trajectories; alternate Hugging Face mirror is referenced by the code repository

- **UMI** · 2023
  A universal mobile-manipulation interface and dataset recording handheld vision, end-effector actions, and cross-robot trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://umi-gripper.github.io/) · [Paper](https://arxiv.org/abs/2402.10329) · Access: Open-source project and paper

- **WebArena** · 2023
  A reproducible real-website interaction environment with browser states, actions, and task trajectories.
  `Games / Virtual Environments` · `RGB Video` · `Text` · `Action` · `Reward`
  [Homepage](https://webarena.dev/) · [Code](https://github.com/web-arena-x/webarena) · [Paper](https://arxiv.org/abs/2307.13854) · Access: Open-source benchmark and deployment

- **Assembly101** · 2022
  A multiview egocentric and exocentric video dataset of procedural assembly actions.
  `Egocentric / Human` · `RGB Video` · `Action Labels` · `Hand Pose`
  [Homepage](https://assembly101.github.io/) · [Paper](https://arxiv.org/abs/2206.01063) · Access: Official benchmark

- **BEHAVIOR-1K** · 2022
  An embodied benchmark of 1,000 everyday household activities with tasks, scenes, and simulation.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Simulation State` · `Language`
  [Homepage](https://behavior.stanford.edu/) · [Paper](https://arxiv.org/abs/2403.09227) · [Code](https://github.com/StanfordVL/BEHAVIOR-1K) · Access: Official benchmark

- **BridgeData** · 2022
  Cross-scene robot manipulation demonstrations recording vision, actions, and state across diverse tabletop tasks.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://rail-berkeley.github.io/bridgedata/) · [Paper](https://arxiv.org/abs/2203.16897) · Access: Paper and project entry

- **CALVIN** · 2022
  A long-horizon language-conditioned robot benchmark in a controlled tabletop environment, with continuous interaction trajectories and compositional task sequences.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Language`
  [Homepage](https://calvin.cs.uni-freiburg.de/) · [Paper](https://arxiv.org/abs/2112.03227) · [Code](https://github.com/mees/calvin) · Access: Open download

- **Ego4D v2** · 2022
  A large egocentric daily-life video dataset with hand, object, action, and natural-language temporal annotations.
  `Egocentric / Human` · `RGB Video` · `Language` · `Action Labels` · `Object Metadata`
  [Homepage](https://ego4d-data.org/) · [Paper](https://arxiv.org/abs/2110.07058) · Access: Official challenge portal

- **Language-Table** · 2022
  A language-conditioned tabletop robot dataset and environment with long-horizon free-form instructions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Language` · `Robot State`
  [Paper](https://arxiv.org/abs/2210.06407) · [Code](https://github.com/google-research/language-table) · Access: Official dataset and code

- **MAgent2** · 2022
  Large-scale multi-agent grid-world environments with parallel actions, observations, and population-state trajectories.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/Farama-Foundation/MAgent2) · [Paper](https://arxiv.org/abs/2109.07807) · Access: Open-source environment

- **MoCapAct** · 2022
  A simulated humanoid-control dataset that releases expert policies tracking CMU MoCap clips and noisy rollouts with proprioceptive observations, actions, and rewards.
  `Robotics / Embodied AI` · `Physics / Science` · `3D State` · `Action` · `Reward` · `Simulation State` · `Trajectories`
  [Homepage](https://microsoft.github.io/MoCapAct/) · [Paper](https://arxiv.org/abs/2208.07363) · [Code](https://github.com/microsoft/MoCapAct) · Access: Official project page, GitHub code, and Hugging Face dataset collection available

- **ProcTHOR** · 2022
  A procedural framework for generating arbitrarily large, diverse, customizable interactive environments for embodied-agent training and evaluation, with an official 10,000-house sample.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Simulation State` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2206.06994) · [Code](https://github.com/allenai/procthor) · Access: Official generator and ProcTHOR-10K sample available

- **TEACh** · 2022
  A dialogue-driven embodied-task dataset with language and action trajectories from human commander-follower interactions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Language` · `Object State`
  [Homepage](https://teachingalfred.github.io/) · [Paper](https://arxiv.org/abs/2110.00534) · [Code](https://github.com/alexa/teach) · Access: Official benchmark and code

- **ALFWorld** · 2021
  An interactive benchmark aligning text tasks with indoor embodied environments and task-state trajectories.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `Text` · `RGB Video` · `Action` · `Game State`
  [Code](https://github.com/alfworld/alfworld) · [Paper](https://arxiv.org/abs/2010.03768) · Access: Open-source benchmark

- **nuPlan** · 2021
  A large-scale real-world planning dataset and benchmark with sensor logs, maps, trajectories, and closed-loop evaluation tools for autonomous driving.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `Trajectories` · `GPS / IMU`
  [Homepage](https://www.nuscenes.org/nuplan) · [Paper](https://arxiv.org/abs/2106.11810) · [Code](https://github.com/motional/nuplan-devkit) · Access: Registration required

- **PettingZoo** · 2021
  A standardized collection of multi-agent environments.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Homepage](https://pettingzoo.farama.org/) · [Code](https://github.com/Farama-Foundation/PettingZoo) · [Paper](https://arxiv.org/abs/2009.14471) · Access: Open-source library

- **robomimic Datasets** · 2021
  Robot manipulation demonstration datasets and benchmarks for imitation learning across tasks, sources, and visual states.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State`
  [Homepage](https://robomimic.github.io/) · [Paper](https://arxiv.org/abs/2108.03298) · [Code](https://github.com/ARISE-Initiative/robomimic) · Access: Official benchmark and download

- **ThreeDWorld Transport Challenge** · 2021
  A visually guided task-and-motion planning benchmark in ThreeDWorld where a two-armed agent finds, grasps, and transports household objects under physical constraints.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Simulation State` · `Object State`
  [Paper](https://arxiv.org/abs/2103.14025) · [Code](https://github.com/chuangg/tdw-transport-challenge-starter-code) · Access: Official paper and starter code available

- **ALFRED** · 2020
  A dataset and benchmark of language-guided indoor navigation and manipulation demonstrations.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Language` · `Object State`
  [Homepage](https://askforalfred.com/) · [Paper](https://arxiv.org/abs/1912.01734) · [Code](https://github.com/askforalfred/alfred) · Access: Official dataset and benchmark

- **Diving48** · 2020
  A video dataset of 48 fine-grained diving actions emphasizing temporal phase differences.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Paper](https://arxiv.org/abs/1903.11204) · Access: Official project and annotations

- **NetHack Learning Environment** · 2020
  A long-horizon NetHack interaction environment.
  `Games / Virtual Environments` · `Game State` · `Action` · `Text` · `Reward`
  [Code](https://github.com/facebookresearch/nle) · [Paper](https://arxiv.org/abs/2006.13760) · Access: Open-source environment

- **Ravens** · 2020
  A tabletop robot manipulation benchmark with procedural tasks and demonstration trajectories.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Simulation State`
  [Paper](https://arxiv.org/abs/2003.08927) · [Code](https://github.com/google-research/ravens) · Access: Official code and generation tools

- **RLBench** · 2020
  A programmable robot manipulation suite built on CoppeliaSim, offering many tasks, demonstrations, and multi-view observations for reinforcement learning, imitation, and controllable simulation.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Language`
  [Homepage](https://sites.google.com/view/rlbench) · [Paper](https://arxiv.org/abs/1909.12271) · [Code](https://github.com/stepjam/RLBench) · Access: Open generation toolkit

- **RoboTHOR** · 2020
  An indoor robot environment and trajectory benchmark for sim-to-real navigation.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Agent Pose` · `Maps`
  [Homepage](https://ai2thor.allenai.org/robothor/) · [Paper](https://arxiv.org/abs/2004.06799) · Access: Official challenge and simulator

- **BabyAI** · 2019
  An embodied-learning platform generating language instructions, grid environments, and expert trajectories.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Language` · `Simulation State`
  [Paper](https://arxiv.org/abs/1810.08272) · [Code](https://github.com/mila-iqia/babyai) · Access: Official environment and generator

- **Franka Kitchen** · 2019
  A long-horizon kitchen robot manipulation environment with human demonstration trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Object State`
  [Paper](https://arxiv.org/abs/1910.11956) · [Code](https://github.com/Farama-Foundation/D4RL) · Access: Official environment and offline data

- **Honda Research Institute Driving Dataset** · 2019
  A real-road driving dataset for driver behavior, scene understanding, and causal explanations, combining driving video, vehicle state, and human advice.
  `Autonomous Driving` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://usa.honda-ri.com/HAD) · [Paper](https://arxiv.org/abs/1811.02307) · Access: Official project page; access requires verification

- **Meta-World** · 2019
  A robot manipulation benchmark for multi-task and meta reinforcement learning, with a shared embodiment and programmable tasks for generated trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Reward`
  [Homepage](https://meta-world.github.io/) · [Paper](https://arxiv.org/abs/1910.10897) · [Code](https://github.com/Farama-Foundation/Metaworld) · Access: Open generation toolkit

- **MineRL** · 2019
  A Minecraft dataset of human demonstrations with long videos, keyboard and mouse actions, game state, and rewards for sample-efficient learning and open-world planning.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Game State` · `Reward`
  [Homepage](https://minerl.io/) · [Paper](https://arxiv.org/abs/1907.13440) · [Code](https://github.com/minerllabs/minerl) · Access: Open download

- **MiniWoB++** · 2019
  A suite of web-interaction environments providing actions, page states, and task trajectories for agent modeling.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Text` · `Reward`
  [Code](https://github.com/Farama-Foundation/miniwob-plusplus) · [Paper](https://arxiv.org/abs/1905.04362) · Access: Open-source benchmark

- **Neural MMO** · 2019
  A procedurally generated massively multi-agent environment recording actions, local observations, and population-state evolution.
  `Games / Virtual Environments` · `Game State` · `Action` · `Reward` · `RGB Video`
  [Homepage](https://neuralmmo.github.io/) · [Code](https://github.com/NeuralMMO/neural-mmo) · [Paper](https://arxiv.org/abs/1903.00784) · Access: Open-source environment

- **OffWorld Gym** · 2019
  An open physical robotics environment and benchmark for real-world reinforcement learning with sensor observations, actions, rewards, and interaction episodes.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Reward`
  [Paper](https://arxiv.org/abs/1910.08639) · [Code](https://github.com/offworld-projects/offworld-gym) · Access: Official repository available

- **OpenSpiel** · 2019
  A collection of game and multi-agent decision environments.
  `Games / Virtual Environments` · `Game State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/google-deepmind/open_spiel) · [Paper](https://arxiv.org/abs/1908.09453) · Access: Open-source framework

- **Overcooked-AI** · 2019
  A cooperative cooking multi-agent environment.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/HumanCompatibleAI/overcooked_ai) · [Paper](https://arxiv.org/abs/1910.05789) · Access: Open-source environment

- **SocNav1** · 2019
  A dataset for learning and benchmarking social-navigation conventions with human positions, orientations, groups, and obstacle relations in shared spaces.
  `Robotics / Embodied AI` · `Egocentric / Human` · `Agent Pose` · `Trajectories` · `Maps` · `Object State`
  [Paper](https://arxiv.org/abs/1909.02993) · [Code](https://github.com/gnns4hri/SocNav1) · Access: Official repository available

- **THÖR** · 2019
  A human-motion dataset for shared indoor spaces with accurate trajectories, head orientation, gaze, social groups, obstacle maps, and mobile-robot sensor data.
  `Robotics / Embodied AI` · `Egocentric / Human` · `Trajectories` · `Gaze` · `Agent Pose` · `LiDAR` · `Maps`
  [Paper](https://arxiv.org/abs/1909.04403) · Access: Paper entry; official access requires verification

- **40K Robotic Grasp Demonstrations** · 2018
  A dataset of roughly 40,000 naturalistic 6-DoF robotic grasp demonstrations with visual observations, end-effector poses, and grasp outcomes.
  `Robotics / Embodied AI` · `RGB Video` · `Depth` · `Action` · `Robot State` · `Trajectory`
  [Paper](https://arxiv.org/abs/1812.11683) · Access: Paper entry only; data access unverified

- **CoSTAR Block Stacking** · 2018
  A robot block-stacking demonstration dataset with visual observations, actions, and workspace constraints for compositional skill learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Object State`
  [Paper](https://arxiv.org/abs/1810.11714) · Access: Paper entry only; data access unverified

- **Gym Retro** · 2018
  Classic-game emulator environments with pixel observations, discrete actions, and game-state trajectories.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/openai/retro) · [Paper](https://arxiv.org/abs/1710.02298) · Access: Open-source emulator integration

- **RoboTurk** · 2018
  A real-robot demonstration dataset collected through crowdsourced teleoperation, with vision, actions, and robot state for scalable imitation learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://roboturk.stanford.edu/) · [Paper](https://arxiv.org/abs/1811.02790) · Access: Open project access

- **TrajNet** · 2018
  A benchmark for pedestrian and multi-agent trajectory prediction that standardizes future-location forecasting, social interaction, and multimodal uncertainty evaluation.
  `Egocentric / Human` · `Autonomous Driving` · `Trajectories` · `Agent Pose` · `Maps`
  [Paper](https://arxiv.org/abs/1805.07663) · [Code](https://github.com/vita-epfl/trajnetplusplusbaselines) · Access: Official benchmark repository available

- **VirtualHome** · 2018
  Represents household activities as executable programs in 3D homes, linking language, action sequences, object states, and rendered video.
  `Games / Virtual Environments` · `Robotics / Embodied AI` · `Text` · `Action` · `Simulation State` · `Synthetic Video`
  [Homepage](http://virtual-home.org/) · [Paper](https://arxiv.org/abs/1806.07011) · [Code](https://github.com/xavierpuigf/virtualhome) · Access: Open generation toolkit

- **PoseTrack** · 2017
  A multi-person pose estimation and tracking benchmark with temporally consistent keypoints and tracks in video.
  `Egocentric / Human` · `RGB Video` · `Agent Pose` · `Action Labels`
  [Homepage](https://posetrack.net/) · [Paper](https://arxiv.org/abs/1611.07727) · Access: Official challenge portal

- **NGSIM** · 2006
  A public naturalistic driving trajectory collection with continuous vehicle positions, speeds, and lane information on highways and urban roads for behavior forecasting.
  `Autonomous Driving` · `Trajectories` · `Maps` · `Agent Pose`
  [Homepage](https://ops.fhwa.dot.gov/trafficanalysistools/ngsim.htm) · Access: Official public data page

<a id="spatial-spatiotemporal-world-modeling"></a>

### Spatial & Spatiotemporal World Modeling (62)

- **AudioWorldSim** · 2026
  An open simulation platform for generating binaural-audio world-model trajectories.
  `Robotics / Embodied AI` · `Physics / Science` · `Audio` · `Agent Pose` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.21075) · [Code](https://github.com/Luizerko/AudioWorldSim) · Access: Paper entry; release status requires verification

- **EPIC-Bench** · 2026
  A fine-grained mask-grounding benchmark for localization, navigation-oriented perception, and manipulation-oriented perception.
  `Robotics / Embodied AI` · `RGB Video` · `Segmentation` · `Language`
  [Homepage](https://epic-bench.github.io/EPIC-Bench/) · [Paper](https://arxiv.org/abs/2605.17070) · [Code](https://github.com/rxc205/EPIC-Bench-Eval) · Access: Dataset available on Hugging Face and ModelScope

- **ESPIRE** · 2026
  A diagnostic benchmark for embodied spatial reasoning of vision-language models in procedurally generated simulated physical environments.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Language` · `Action` · `Object State`
  [Paper](https://arxiv.org/abs/2603.13033) · [Code](https://github.com/spatigen/espire) · Access: Generation framework and evaluation code available

- **Orbis-Tabletop** · 2026
  A high-quality tabletop-scale 3D scene dataset for robotics simulation, embodied AI, and computer vision.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `3D Mesh` · `3D Metadata` · `Object Metadata`
  [Code](https://github.com/IntimeAI/Orbis-Tabletop) · Access: Scene assets and documentation available through the official repository

- **Sekai2** · 2026
  A real-world long-horizon egocentric video dataset for interactive world models with camera trajectories and temporally grounded captions.
  `Egocentric / Human` · `RGB Video` · `Camera Pose` · `Language` · `Trajectories`
  [Homepage](https://kangverse.github.io/sekai2-project/) · [Paper](https://arxiv.org/abs/2608.09449) · [Code](https://github.com/kangverse/Sekai2-Dataset) · Access: Official dataset page announced; full release pending

- **STONE Dataset** · 2026
  A surround-view multimodal robotics dataset for off-road navigation and voxel-level 3D traversability prediction.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `LiDAR` · `3D Annotations` · `Robot State`
  [Homepage](https://konyul.github.io/STONE-dataset/) · [Code](https://github.com/konyul/STONE) · Access: Official release announced; download access is pending

- **TransBiolab** · 2026
  A real multiview RGB-D dataset of cluttered transparent biomedical objects.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB-D` · `3D Boxes` · `Segmentation` · `Camera Pose`
  [Paper](https://arxiv.org/abs/2607.21071) · [Homepage](https://dualtransparency.github.io/TransBiolab/) · Access: Paper entry; release status requires verification

- **CU-MULTI** · 2025
  A multi-robot outdoor dataset with long sequences collected by a ground robot.
  `Robotics / Embodied AI` · `RGB Video` · `LiDAR` · `IMU / GPS` · `Trajectories`
  [Code](https://github.com/arpg/CU-Multi) · Access: Official repository and sequence documentation available

- **EOC-Bench** · 2025
  A benchmark systematically evaluating object-centric embodied cognition in dynamic egocentric scenarios.
  `Egocentric / Human` · `Robotics / Embodied AI` · `RGB Video` · `Object State` · `QA` · `Language`
  [Homepage](https://circleradon.github.io/EOCBench/) · [Paper](https://arxiv.org/abs/2506.05287) · [Code](https://github.com/alibaba-damo-academy/EOCBench) · Access: Benchmark dataset and project page publicly available

- **GrandTour Dataset** · 2025
  A multisensor, long-range legged-robot trajectory dataset collected in challenging real-world environments.
  `Robotics / Embodied AI` · `RGB Video` · `LiDAR` · `IMU / GPS` · `Trajectories` · `Robot State`
  [Homepage](https://grand-tour.leggedrobotics.com/dataset) · [Paper](https://arxiv.org/abs/2602.18164) · [Code](https://github.com/leggedrobotics/grand_tour_dataset) · Access: Dataset page, Hugging Face repository, and localization benchmark available

- **i2Nav-Robot** · 2025
  A large-scale indoor-outdoor robot dataset for multisensor-fusion navigation and mapping.
  `Robotics / Embodied AI` · `RGB Video` · `LiDAR` · `IMU / GPS` · `Trajectories`
  [Code](https://github.com/i2Nav-WHU/i2Nav-Robot) · Access: Official repository and baseline code available

- **iilab Indoor LiDAR SLAM Dataset** · 2025
  Real-robot indoor LiDAR sequences and toolkit for SLAM, localization, and 3D reconstruction.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `LiDAR` · `IMU` · `Camera Pose` · `Trajectories`
  [Homepage](https://doi.org/10.25747/VHNJ-WM80) · [Code](https://github.com/JorgeDFR/iilabs3d-toolkit) · Access: Official toolkit and DOI-backed dataset entry available

- **M3DGR** · 2025
  A multisensor, multiscenario SLAM dataset for ground robots.
  `Robotics / Embodied AI` · `RGB Video` · `LiDAR` · `IMU / GPS` · `Trajectories`
  [Code](https://github.com/sjtuyinjie/M3DGR) · Access: Official dataset repository and benchmark code available

- **MineInsight** · 2025
  A multispectral dataset for humanitarian-demining robots in off-road environments.
  `Robotics / Embodied AI` · `RGB Video` · `LiDAR` · `3D Annotations` · `Scene Metadata`
  [Code](https://github.com/mariomlz99/MineInsight) · Access: Official repository and project resources available

- **Multimodal AMR Dataset** · 2025
  A multimodal temporal dataset from an autonomous mobile robot in industrial indoor and urban outdoor settings.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB Video` · `LiDAR` · `RADAR` · `Depth` · `Scene Metadata`
  [Code](https://github.com/SEW-Eurodrive-Open-Source/Multimodal_AMR_dataset) · Access: Official documentation and repository available

- **NextBestPath** · 2025
  Data and benchmarks for efficient 3D mapping and active exploration in unseen environments.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB Video` · `Depth` · `Camera Pose` · `Trajectories`
  [Homepage](https://shiyao-li.github.io/nbp/) · [Code](https://github.com/shiyao-li/NextBestPath) · Access: Official project page and code available

- **OmniWorld** · 2025
  A multi-domain, multimodal dataset for 4D world modeling across games, city walks, human-object interaction, and robot trajectories.
  `Games / Virtual Environments` · `Egocentric / Human` · `Robotics / Embodied AI` · `RGB Video` · `Depth` · `Camera Pose` · `Optical Flow` · `Text`
  [Homepage](https://yangzhou24.github.io/OmniWorld/) · [Paper](https://arxiv.org/abs/2509.12201) · [Code](https://github.com/yangzhou24/OmniWorld) · Access: Multiple subsets available on Hugging Face and ModelScope

- **Open3D-VQA** · 2025
  A VQA benchmark for embodied spatial reasoning in open 3D spaces.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB Video` · `3D Metadata` · `QA` · `Language`
  [Code](https://github.com/EmbodiedCity/Open3D-VQA.code) · Access: Official code and benchmark resources available

- **RadarRGBD** · 2025
  An indoor-outdoor perception dataset with RGB-D, mmWave point clouds, and raw radar matrices.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2505.15860) · [Code](https://github.com/song4399/RadarRGBD) · Access: Paper entry; release status requires verification

- **ROVR Open Dataset** · 2025
  A large-scale open 3D dataset for autonomous driving, robotics, and 4D perception.
  `Autonomous Driving` · `Urban / 3D Scene` · `RGB Video` · `3D Annotations` · `LiDAR` · `Camera Pose`
  [Homepage](https://rovr.network/#/dataset) · [Code](https://github.com/rovr-network/ROVR-Open-Dataset) · Access: Official dataset portal available

- **SLABIM** · 2025
  An indoor dataset coupling SLAM sensor data with building information models.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2502.16856) · [Code](https://github.com/HKUST-Aerial-Robotics/SLABIM) · Access: Paper entry; release status requires verification

- **SPICE-HL3** · 2025
  A single-photon, inertial, stereo, and odometry dataset in simulated high-latitude lunar conditions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2506.22956) · Access: Paper entry; release status requires verification

- **STRIDE** · 2025
  A spatiotemporal autonomy dataset organizing panoramic road imagery into observation, state, and action nodes.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2506.11302) · [Homepage](https://huggingface.co/datasets/Tera-AI/STRIDE) · Access: Paper entry; release status requires verification

- **UrbanVideo-Bench** · 2025
  An embodied benchmark using continuous first-person urban video to evaluate recall, perception, reasoning, and navigation.
  `Egocentric / Human` · `Urban / 3D Scene` · `RGB Video` · `Language` · `Trajectories` · `QA`
  [Homepage](https://huggingface.co/datasets/EmbodiedCity/UrbanVideo-Bench) · [Code](https://github.com/EmbodiedCity/UrbanVideo-Bench.code) · Access: Dataset and generation code publicly available

- **Ego-Exo4D** · 2024
  A synchronized first- and third-person dataset of human skills across sports, music, and cooking, with 3D, language, and camera information.
  `Egocentric / Human` · `Multi-view RGB Video` · `Audio` · `Language` · `Camera Pose` · `3D Annotations`
  [Homepage](https://ego-exo4d-data.org/) · [Paper](https://arxiv.org/abs/2311.18259) · [Code](https://github.com/facebookresearch/Ego4d) · Access: Application required

- **Argoverse 2** · 2023
  A multimodal autonomous-driving collection for perception, motion forecasting, and map understanding, with sensor logs, HD maps, and diverse urban motion scenarios.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `Trajectories` · `3D Boxes`
  [Homepage](https://www.argoverse.org/av2.html) · [Paper](https://arxiv.org/abs/2301.00493) · [Code](https://github.com/argoverse/av2-api) · Access: Open download

- **EmbodiedScan** · 2023
  A multimodal egocentric dataset and benchmark for holistic embodied 3D scene understanding, combining RGB-D views, language prompts, oriented 3D boxes, and dense semantic occupancy.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB-D` · `Language` · `3D Boxes` · `Semantic Labels` · `Camera Pose`
  [Paper](https://arxiv.org/abs/2312.16170) · [Code](https://github.com/OpenRobotLab/EmbodiedScan) · Access: Official code, annotations, and benchmark resources available

- **Objaverse** · 2023
  A large collection of 3D object assets for open-world 3D understanding and generation.
  `Urban / 3D Scene` · `Games / Virtual Environments` · `3D Mesh` · `Object Metadata` · `Text`
  [Homepage](https://objaverse.allenai.org/) · [Paper](https://arxiv.org/abs/2212.08051) · Access: Official dataset tooling

- **Robo360** · 2023
  An omnispective robotic manipulation dataset with dense multiview coverage and objects spanning varied material and optical properties for 3D physical-world modeling.
  `Robotics / Embodied AI` · `Physics / Science` · `Multi-view RGB Video` · `Camera Pose` · `Action` · `Object Metadata`
  [Homepage](https://robo360dataset.github.io/) · [Paper](https://arxiv.org/abs/2312.06686) · [Code](https://github.com/robo360dataset/robo360dataset.github.io) · Access: Official project repository and paper entry available; dataset terms require verification

- **ScanNet++** · 2023
  A high-fidelity indoor 3D scanning dataset with neural-rendering captures and dense semantic annotations.
  `Urban / 3D Scene` · `RGB-D` · `3D Mesh` · `Semantic Labels` · `Camera Pose`
  [Homepage](https://scannetpp.ml/) · [Paper](https://arxiv.org/abs/2308.11417) · Access: Official project page

- **MOVi** · 2022
  A family of Kubric-generated multi-object videos with instance masks, depth, optical flow, and 3D attributes for object discovery and interpretable dynamics.
  `Physics / Science` · `Synthetic Video` · `Depth` · `Optical Flow` · `Segmentation` · `3D State`
  [Paper](https://arxiv.org/abs/2203.12602) · [Code](https://github.com/google-research/kubric) · Access: Open download

- **ARKitScenes** · 2021
  An indoor RGB-D scanning and 3D reconstruction dataset captured with mobile devices.
  `Urban / 3D Scene` · `RGB-D` · `3D Mesh` · `Camera Pose`
  [Homepage](https://github.com/apple/ARKitScenes) · [Paper](https://arxiv.org/abs/2111.08853) · Access: Official download

- **Habitat-Matterport 3D** · 2021
  A collection of high-quality building-scale 3D scans for embodied navigation and indoor simulation, supporting generated RGB-D, semantic, and agent trajectories through Habitat.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `3D Mesh` · `RGB-D` · `Semantic Labels` · `Agent Pose`
  [Homepage](https://aihabitat.org/datasets/hm3d/) · [Paper](https://arxiv.org/abs/2109.08238) · [Code](https://github.com/facebookresearch/habitat-sim) · Access: Application required

- **Habitat-Matterport 3D (HM3D)** · 2021
  A high-quality collection of real indoor 3D scenes for embodied navigation and interaction simulation.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `3D Mesh` · `RGB Video` · `Maps`
  [Homepage](https://aihabitat.org/datasets/hm3d/) · [Paper](https://arxiv.org/abs/2109.08238) · Access: Official Habitat download

- **Audi Autonomous Driving Dataset** · 2020
  Audi's open autonomous-driving multisensor dataset with cameras, LiDAR, semantic labels, and vehicle state.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Semantic Labels` · `GPS / IMU`
  [Paper](https://arxiv.org/abs/2004.06320) · Access: Official download portal

- **HOPE Object Pose Dataset** · 2020
  An RGB-D dataset for 6D pose estimation of household objects in cluttered scenes.
  `Robotics / Embodied AI` · `RGB-D` · `3D Mesh` · `Camera Pose`
  [Paper](https://arxiv.org/abs/2003.09111) · Access: Official project page and code

- **KITTI-360** · 2020
  A multimodal 3D dataset for long-range urban driving with panoramic images, LiDAR, trajectories, and scene annotations.
  `Autonomous Driving` · `Urban / 3D Scene` · `LiDAR` · `RGB Video` · `3D Boxes` · `Maps` · `GPS / IMU`
  [Homepage](https://www.cvlibs.net/datasets/kitti-360/) · [Paper](https://arxiv.org/abs/2012.06268) · Access: Official benchmark download

- **PandaSet** · 2020
  A multi-sensor autonomous-driving dataset with cameras, LiDAR, GPS/IMU, and 3D annotations across urban traffic scenes.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `GPS / IMU` · `3D Boxes` · `Maps`
  [Paper](https://arxiv.org/abs/2102.02684) · [Code](https://github.com/scaleapi/pandaset-devkit) · Access: Open download

- **BLVD** · 2019
  A large-scale 5D semantic autonomous-driving benchmark combining video, 3D objects, trajectories, maps, and time for dynamic traffic-scene modeling.
  `Autonomous Driving` · `Urban / 3D Scene` · `RGB Video` · `3D Boxes` · `Trajectories` · `Maps` · `Semantic Labels`
  [Paper](https://arxiv.org/abs/1903.06405) · [Code](https://github.com/VCCIV/BLVD) · Access: Official repository available

- **Habitat-Lab** · 2019
  An embodied navigation and manipulation simulator.
  `Robotics / Embodied AI` · `RGB Video` · `Depth` · `Agent Pose` · `Action`
  [Homepage](https://aihabitat.org/) · [Code](https://github.com/facebookresearch/habitat-lab) · [Paper](https://arxiv.org/abs/1904.01201) · Access: Open-source simulator

- **iGibson** · 2019
  An indoor embodied-AI simulation platform providing visual, tactile, action, and physical-state trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Depth` · `Simulation State` · `Action`
  [Homepage](https://svl.stanford.edu/igibson/) · [Code](https://github.com/StanfordVL/iGibson) · [Paper](https://arxiv.org/abs/1810.03993) · Access: Open-source simulator and assets

- **Lyft Level 5 Dataset** · 2019
  A multimodal autonomous-driving dataset with LiDAR, cameras, maps, and trajectory annotations.
  `Autonomous Driving` · `LiDAR` · `RGB Video` · `Maps` · `Trajectories` · `GPS / IMU`
  [Paper](https://arxiv.org/abs/2006.14480) · Access: Official download portal

- **nuScenes** · 2019
  A multi-sensor autonomous-driving dataset covering urban roads in Boston and Singapore, with synchronized cameras, LiDAR, radar, localization, and 3D annotations for spatiotemporal modeling.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `RADAR` · `IMU / GPS` · `3D Boxes`
  [Homepage](https://www.nuscenes.org/) · [Paper](https://arxiv.org/abs/1903.11027) · [Code](https://github.com/nutonomy/nuscenes-devkit) · Access: Registration required

- **Oxford Radar RobotCar Dataset** · 2019
  A long-term repeated radar, LiDAR, and camera driving dataset for robust localization and dynamic-environment modeling.
  `Autonomous Driving` · `RADAR` · `LiDAR` · `RGB Video` · `GPS / IMU`
  [Homepage](https://oxford-robotics-institute.github.io/radar-robotcar-dataset/) · [Paper](https://arxiv.org/abs/1909.01384) · Access: Official download

- **Replica** · 2019
  A set of high-quality reconstructed indoor scenes with textured meshes, semantics, and photorealistic assets for embodied navigation and neural scene representations.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `3D Mesh` · `Semantic Labels` · `Camera Pose`
  [Paper](https://arxiv.org/abs/1906.05797) · [Code](https://github.com/facebookresearch/Replica-Dataset) · Access: Open download / agreement required

- **SoundSpaces** · 2019
  A 3D audio-visual navigation environment and dataset combining spatial audio, visual observations, actions, and position state for embodied agents.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB Video` · `Audio` · `Action` · `Simulation State` · `Maps`
  [Paper](https://arxiv.org/abs/1912.11474) · [Code](https://github.com/facebookresearch/sound-spaces) · Access: Official project access; registration may be required

- **Waymo Open Dataset** · 2019
  A high-quality autonomous-driving collection with cameras, LiDAR, maps, 3D detection labels, and motion scenarios for dynamic occupancy and trajectory prediction.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `3D Boxes` · `Trajectories`
  [Homepage](https://waymo.com/open/) · [Paper](https://arxiv.org/abs/1912.04838) · [Code](https://github.com/waymo-research/waymo-open-dataset) · Access: Registration required

- **ApolloScape** · 2018
  A multi-task autonomous-driving dataset with street-view video, stereo images, depth, 3D vehicles, and high-definition maps for urban spatiotemporal modeling.
  `Autonomous Driving` · `Urban / 3D Scene` · `RGB Video` · `Depth` · `Maps` · `3D Boxes` · `Semantic Labels`
  [Homepage](https://apolloscape.auto/) · [Paper](https://arxiv.org/abs/1803.06184) · [Code](https://github.com/ApolloScapeAuto/dataset-api) · Access: Registration required

- **comma2k19** · 2018
  A real highway commute driving dataset from comma.ai with road-facing video, GPS/GNSS, IMU, CAN bus data, vehicle speed, steering angle, and global camera poses.
  `Autonomous Driving` · `RGB Video` · `GPS / IMU` · `Action` · `Camera Pose` · `Trajectories`
  [Homepage](https://github.com/commaai/comma2k19) · [Paper](https://arxiv.org/abs/1812.05752) · Access: Public GitHub repository with dataset download instructions and examples

- **Gibson Environment Dataset** · 2018
  A collection of navigable 3D environments reconstructed from real scans, used with Gibson to generate RGB, depth, semantics, and agent trajectories.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `3D Mesh` · `RGB-D` · `Agent Pose` · `Semantic Labels`
  [Homepage](http://gibsonenv.stanford.edu/database/) · [Paper](https://arxiv.org/abs/1808.10654) · [Code](https://github.com/StanfordVL/GibsonEnv) · Access: Request / agreement required

- **DDD17** · 2017
  An event-camera driving dataset for end-to-end driving research, recording asynchronous visual events and driving-state signals on real roads.
  `Autonomous Driving` · `Event Camera` · `GPS / IMU` · `Action` · `Trajectories`
  [Paper](https://arxiv.org/abs/1711.01458) · Access: Paper entry; data access requires verification

- **Matterport3D** · 2017
  A building-scale RGB-D panorama dataset for indoor scene understanding and embodied navigation, with meshes, camera poses, semantics, and regions.
  `Urban / 3D Scene` · `Robotics / Embodied AI` · `RGB-D` · `3D Mesh` · `Camera Pose` · `Semantic Labels`
  [Homepage](https://niessner.github.io/Matterport/) · [Paper](https://arxiv.org/abs/1709.06158) · [Code](https://github.com/niessner/Matterport) · Access: Application / agreement required

- **MPI-INF-3DHP** · 2017
  An indoor/outdoor 3D human-pose video dataset with multiview and green-screen synthetic sequences.
  `Egocentric / Human` · `RGB Video` · `Agent Pose` · `Camera Pose`
  [Homepage](https://vcai.mpi-inf.mpg.de/3dhp-dataset/) · [Paper](https://arxiv.org/abs/1611.09813) · Access: Official project page

- **ScanNet** · 2017
  A large collection of handheld RGB-D indoor scan sequences with camera poses, reconstructed meshes, semantic labels, and instances.
  `Urban / 3D Scene` · `Robotics / Embodied AI` · `RGB-D` · `Camera Pose` · `3D Mesh` · `Semantic Labels`
  [Homepage](http://www.scan-net.org/) · [Paper](https://arxiv.org/abs/1702.04405) · [Code](https://github.com/ScanNet/ScanNet) · Access: Agreement required

- **Cityscapes** · 2016
  An urban-driving dataset from European cities with short sequences and fine semantic and instance annotations, widely used for future semantic prediction.
  `Autonomous Driving` · `Urban / 3D Scene` · `RGB Video` · `Semantic Labels` · `Segmentation` · `Depth`
  [Homepage](https://www.cityscapes-dataset.com/) · [Paper](https://openaccess.thecvf.com/content_cvpr_2016/html/Cordts_The_Cityscapes_Dataset_CVPR_2016_paper.html) · [Code](https://github.com/mcordts/cityscapesScripts) · Access: Registration required

- **DeepMind Lab** · 2016
  First-person 3D navigation and interaction environments with visual observations, actions, and game-state trajectories.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/google-deepmind/lab) · [Paper](https://arxiv.org/abs/1612.03801) · Access: Open-source environment

- **MiniGrid** · 2016
  Composable partially observable 2D navigation environments.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/Farama-Foundation/Minigrid) · [Paper](https://arxiv.org/abs/2010.02567) · Access: Open-source environment

- **Oxford RobotCar** · 2016
  An autonomous-driving dataset repeatedly collected along the same route for over a year, with cameras, LiDAR, radar, and localization for long-term environmental change.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `RADAR` · `GPS / IMU`
  [Homepage](https://robotcar-dataset.robots.ox.ac.uk/) · [Paper](https://arxiv.org/abs/1610.08265) · [Code](https://github.com/ori-mrg/robotcar-dataset-sdk) · Access: Open download

- **SYNTHIA** · 2016
  A synthetic urban-driving dataset with multi-season, multi-weather, and multi-view sequences plus pixel-level semantics and depth.
  `Autonomous Driving` · `Urban / 3D Scene` · `Synthetic Video` · `Depth` · `Semantic Labels` · `Camera Pose`
  [Homepage](https://synthia-dataset.net/) · [Paper](https://openaccess.thecvf.com/content_cvpr_2016/html/Ros_The_SYNTHIA_Dataset_CVPR_2016_paper.html) · Access: Request / agreement required

- **Virtual KITTI** · 2016
  A synthetic driving-video counterpart to KITTI with depth, optical flow, instance, semantic, and camera ground truth for controlled dynamics and domain transfer.
  `Autonomous Driving` · `Synthetic Video` · `Depth` · `Optical Flow` · `Segmentation` · `Camera Pose`
  [Homepage](https://europe.naverlabs.com/research/computer-vision/proxy-virtual-worlds-vkitti-1/) · [Paper](https://arxiv.org/abs/1605.06457) · Access: Open download

- **YCB-Video** · 2016
  Video sequences of 21 YCB objects with frame-level 6D pose annotations for robotic vision and manipulation.
  `Robotics / Embodied AI` · `RGB-D` · `3D Mesh` · `Camera Pose`
  [Homepage](https://rse-lab.cs.washington.edu/projects/posecnn/) · [Paper](https://arxiv.org/abs/1711.00199) · Access: Official download available

- **KITTI** · 2012
  A foundational autonomous-driving dataset with stereo cameras, LiDAR, GPS/IMU, and established benchmarks for depth, scene flow, odometry, and 3D perception.
  `Autonomous Driving` · `Stereo RGB` · `LiDAR` · `GPS / IMU` · `3D Boxes`
  [Homepage](https://www.cvlibs.net/datasets/kitti/) · [Paper](https://www.cvlibs.net/publications/Geiger2013IJRR.pdf) · [Code](https://github.com/utiasSTARS/pykitti) · Access: Open download

<a id="physical-causal-reasoning"></a>

### Physical & Causal Reasoning (28)

- **CG-World** · 2026
  A large computer-graphics world-state dataset explicitly recording states, events, relations, and counterfactual branches.
  `Robotics / Embodied AI` · `Physics / Science` · `Synthetic Video` · `3D State` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2607.26452) · Access: Paper entry; release status requires verification

- **GAUGE** · 2026
  A measurement-grounded benchmark evaluating physical fidelity in numerical physics engines and generative video world models.
  `Physics / Science` · `Robotics / Embodied AI` · `RGB Video` · `Trajectories` · `Object State` · `3D Metadata`
  [Homepage](https://internrobotics.github.io/GAUGE/) · [Paper](https://arxiv.org/abs/2608.05948) · [Code](https://github.com/InternRobotics/GAUGE) · Access: Benchmark dataset available on Hugging Face

- **KinDER** · 2026
  A physical-reasoning benchmark for robot learning and planning with task environments, demonstrations, and model resources.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action` · `Object State` · `Trajectories`
  [Homepage](https://huggingface.co/datasets/kinder-bench/kinder-datasets) · [Code](https://github.com/Princeton-Robot-Planning-and-Learning/kindergarden) · Access: Demonstration datasets available on Hugging Face

- **PhyCheck** · 2026
  A fine-grained evidence-grounded video-QA dataset for physical-law understanding.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `QA` · `Text`
  [Paper](https://arxiv.org/abs/2608.02150) · Access: Paper entry; release status requires verification

- **PhyGround** · 2026
  A benchmark evaluating physical plausibility in generative world models using prompts, first frames, and generated videos.
  `Physics / Science` · `RGB Video` · `Text` · `Object State`
  [Homepage](https://phyground.github.io/) · [Paper](https://arxiv.org/abs/2605.10806) · [Code](https://github.com/NU-World-Model-Embodied-AI/PhyGround) · Access: Prompts and first images available on Hugging Face

- **PhysEditWorld** · 2026
  A physics-editable world-model dataset generated by varying gravity while holding scenes, initial states, and action sequences fixed.
  `Games / Virtual Environments` · `Physics / Science` · `RGB Video` · `Action` · `Game State` · `Camera Pose`
  [Homepage](https://yizhiqianbi.github.io/physeditworld/) · [Paper](https://arxiv.org/abs/2606.26694) · [Code](https://github.com/yizhiqianbi/physeditworld) · Access: Public dataset entry on ModelScope

- **RigidBench** · 2026
  A rigid-body physics video-generation benchmark with exact simulator state.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Depth` · `3D State`
  [Paper](https://arxiv.org/abs/2608.15555) · Access: Paper entry; release status requires verification

- **VisTouch** · 2026
  A large-scale synchronized vision, force-tactile, and contact-audio dataset of robotic sliding interactions.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Audio` · `Robot State` · `Action`
  [Code](https://github.com/liangnjupt/VisTouch) · Access: Official repository provides metadata, loaders, benchmarks, and download instructions

- **CausalVQA** · 2025
  A real-video physical-causal VQA benchmark for counterfactuals, hypotheses, anticipation, and planning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2506.09943) · Access: Paper entry; release status requires verification

- **GRIP Dataset** · 2025
  A robotic incremental-potential contact simulation dataset for coupled deformable-rigid grasping.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action` · `Object State` · `3D State`
  [Homepage](https://bell0o.github.io/GRIP/) · [Code](https://github.com/BeLl0o/GRIP_Dataset) · Access: Project page and official repository available

- **OmniEmbodied / EAR-Bench** · 2025
  A text-based embodied benchmark for reasoning about physical interactions, tool use, and multi-agent coordination.
  `Robotics / Embodied AI` · `Text` · `Action` · `Object State` · `Trajectories`
  [Homepage](https://zju-real.github.io/OmniEmbodied/) · [Paper](https://arxiv.org/abs/2508.05614) · [Code](https://github.com/ZJU-REAL/OmniEmbodied) · Access: Benchmark data in repository and expert trajectories on Hugging Face

- **PokeFlex** · 2024
  A real-world pilot dataset for deformable-object manipulation, capturing complete 360-degree 3D mesh deformations together with robot-applied forces and torques during poking.
  `Robotics / Embodied AI` · `Physics / Science` · `3D Mesh` · `Action` · `Robot State` · `Multi-view RGB Video`
  [Homepage](https://pokeflex-dataset.github.io/) · [Paper](https://arxiv.org/abs/2409.17124) · [Code](https://github.com/pokeflex-dataset/reconstruction) · Access: Official project page and reconstruction code available

- **Melting Pot** · 2022
  A suite of multi-agent social interaction environments.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/google-deepmind/meltingpot) · [Paper](https://arxiv.org/abs/2211.13746) · Access: Open-source benchmark

- **Physion** · 2021
  A synthetic intuitive-physics dataset covering collisions, support, containment, and deformation, designed to test whether models can predict object contact and dynamics.
  `Physics / Science` · `Synthetic Video` · `Depth` · `Segmentation` · `Object State`
  [Homepage](https://physion-benchmark.github.io/) · [Paper](https://arxiv.org/abs/2106.08261) · [Code](https://github.com/cogtoolslab/physics-benchmarking-neurips2021) · Access: Open download

- **Physion** · 2021
  A physics-simulation video and question-answer dataset for visual physical reasoning.
  `Physics / Science` · `Games / Virtual Environments` · `RGB Video` · `QA` · `Simulation State`
  [Paper](https://arxiv.org/abs/2106.08261) · Access: Official benchmark code and data

- **CATER** · 2020
  A synthetic video dataset with compositional object motions and precise metadata, emphasizing spatiotemporal relations, occlusion, and long-term object tracking.
  `Physics / Science` · `Synthetic Video` · `Object State` · `Action Labels` · `3D Metadata`
  [Homepage](https://rohitgirdhar.github.io/CATER/) · [Paper](https://arxiv.org/abs/1910.04744) · [Code](https://github.com/rohitgirdhar/CATER) · Access: Open download

- **CausalWorld** · 2020
  An intervention-rich robot manipulation simulator for causal structure and generalization research.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action` · `Simulation State` · `Object State`
  [Homepage](https://sites.google.com/view/causal-world) · [Paper](https://arxiv.org/abs/2010.04296) · [Code](https://github.com/rr-learning/CausalWorld) · Access: Official environment

- **EGAD!** · 2020
  A procedurally generated robotic grasping dataset with over 2,000 objects spanning geometric complexity and grasp difficulty, plus 49 reproducible 3D-printable evaluation objects.
  `Robotics / Embodied AI` · `Physics / Science` · `3D Mesh` · `Object Metadata`
  [Homepage](https://dougsm.github.io/egad/) · [Paper](https://arxiv.org/abs/2003.01314) · [Code](https://github.com/dougsm/egad) · Access: Dataset download and generation code available from the official project

- **GraspNet-1Billion** · 2020
  A large 6D grasping benchmark with RGB-D cluttered scenes, object models, and billion-scale grasp annotations.
  `Robotics / Embodied AI` · `RGB-D` · `3D Mesh` · `Action Labels`
  [Homepage](https://graspnet.net/) · [Paper](https://arxiv.org/abs/1912.13470) · [Code](https://github.com/graspnet/graspnet-baseline) · Access: Official benchmark download

- **ContactDB** · 2019
  A dataset of human hand-object contact regions and force directions for tactile and visual interaction modeling.
  `Robotics / Embodied AI` · `Physics / Science` · `3D Mesh` · `Object State` · `Agent Pose`
  [Homepage](https://contactdb.cc.gatech.edu/) · [Paper](https://arxiv.org/abs/1904.03796) · Access: Official project page

- **PHYRE** · 2019
  A 2D physical reasoning benchmark where agents place objects to achieve goals across generated task templates, testing intervention, trial efficiency, and generalization.
  `Physics / Science` · `Games / Virtual Environments` · `Simulation State` · `Action` · `Synthetic Video`
  [Homepage](https://phyre.ai/) · [Paper](https://arxiv.org/abs/1908.05656) · [Code](https://github.com/facebookresearch/phyre) · Access: Open generation toolkit

- **BlockPuzzle** · 2018
  A MuJoCo and OpenAI Gym task framework for physical reasoning, using sparse-reward block puzzles to study rule learning, curriculum training, and transfer across tasks.
  `Robotics / Embodied AI` · `Physics / Science` · `Simulation State` · `Action` · `Reward` · `Object State`
  [Paper](https://arxiv.org/abs/1812.00091) · Access: Paper entry; environment access unverified

- **IntPhys** · 2018
  A synthetic visual-physics benchmark contrasting possible and impossible scenes to test object permanence, occlusion, shape, and support reasoning.
  `Physics / Science` · `Synthetic Video` · `Depth` · `Segmentation` · `Scene Metadata`
  [Homepage](https://intphys.cognitive-ml.fr/) · [Paper](https://arxiv.org/abs/1803.07616) · [Code](https://github.com/rronan/IntPhys) · Access: Open download

- **ShapeStacks** · 2018
  A procedurally generated dataset and toolkit of stacked shapes for reasoning about stability, support relations, and 3D physical structure from images.
  `Physics / Science` · `Synthetic Video` · `3D State` · `Object Metadata` · `Simulation State`
  [Paper](https://arxiv.org/abs/1804.08018) · [Code](https://github.com/ogroth/shapestacks) · Access: Open generation toolkit

- **TextWorld** · 2018
  A text-based interactive-world generator with language observations, actions, and hidden-state transitions.
  `Games / Virtual Environments` · `Text` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/microsoft/TextWorld) · [Paper](https://arxiv.org/abs/1806.11532) · Access: Open-source generator and games

- **MIT Planar Pushing Dataset** · 2016
  A high-fidelity planar pushing dataset recording actions and object motion across shapes, contacts, pushing directions, and friction conditions.
  `Robotics / Embodied AI` · `Physics / Science` · `Action` · `Object State` · `Trajectory` · `Robot State`
  [Paper](https://arxiv.org/abs/1604.04038) · [Code](https://github.com/mcubelab/pdproc) · Access: Official processing repository available

- **Physical Prediction Dataset** · 2016
  A synthetic dataset of collisions and motion sequences for video physical prediction.
  `Physics / Science` · `RGB Video` · `Simulation State`
  [Paper](https://arxiv.org/abs/1608.04239) · Access: Paper entry only; data access unverified

- **Physics 101** · 2016
  A real-video dataset of objects moving on inclined surfaces with material, mass, angle, and motion information for estimating physical properties and dynamics.
  `Physics / Science` · `RGB Video` · `Object Metadata` · `Trajectory`
  [Homepage](https://phys101.csail.mit.edu/) · [Paper](https://arxiv.org/abs/1511.07439) · Access: Open project access

<a id="world-model-evaluation-diagnostics"></a>

### World Model Evaluation & Diagnostics (72)

- **4DSynth** · 2026
  A controllable procedural 4D-world synthesis resource for dynamic embodied simulation.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.26947) · Access: Paper entry; data access requires verification

- **CaliBench** · 2026
  An interpretable benchmark for calibration of stochastic physical outcomes in video world models.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.16829) · Access: Paper entry; release status requires verification

- **CamWorldQA** · 2026
  A human-rated perceptual-quality benchmark for camera-controlled world-video generation.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Camera Pose`
  [Paper](https://arxiv.org/abs/2608.18710) · Access: Paper entry; release status requires verification

- **Complex-Scene Multi-Person Motion Forecasting** · 2026
  A dataset and benchmark for forecasting multiple people in complex scenes.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.27039) · Access: Paper entry; data access requires verification

- **DrivingGen** · 2026
  A benchmark evaluating generative driving video world models through both visual quality and physical plausibility of vehicle trajectories.
  `Autonomous Driving` · `RGB Video` · `Trajectories`
  [Homepage](https://drivinggen-bench.github.io/) · [Paper](https://arxiv.org/abs/2601.01528) · [Code](https://github.com/youngzhou1999/DrivingGen) · Access: Dataset available on Hugging Face

- **EgoSafetyBench** · 2026
  A diagnostic egocentric-video benchmark testing whether embodied VLMs can identify hazards and act as runtime safety guards.
  `Egocentric / Human` · `Robotics / Embodied AI` · `RGB Video` · `Language` · `Action Labels`
  [Paper](https://arxiv.org/abs/2607.00218) · [Code](https://github.com/AIM-Intelligence/EgoSafetyBench) · Access: Dataset available on Hugging Face

- **Embodied Scene Rearrangement Planning** · 2026
  An embodied scene-rearrangement planning benchmark with tasks and environment states.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.27371) · [Homepage](https://pie-lab.cn/ESRP/) · Access: Official project and paper entries available

- **Game2World** · 2026
  A paired-video, in-the-wild clip, and UI-asset dataset for gameplay cleanup and world-model training.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.24680) · [Homepage](https://github.com/Dongping-Chen/Game2World) · Access: Official project and paper entries available

- **GeoCon-Bench** · 2026
  A scene dataset and metric benchmark for cross-frame geometric consistency in generated video.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.09594) · Access: Paper entry; data access requires verification

- **GigaBrain Challenge 2026 World Models Track Dataset** · 2026
  Multi-task, multi-view video and state-trajectory data for trajectory-conditioned video generation and closed-loop VLA evaluation.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Trajectories` · `Robot State` · `Depth`
  [Homepage](https://gigaai-research.github.io/GigaBrain-Challenge-2026/guide/world-model.html) · [Code](https://github.com/open-gigaai/CVPR-2026-Workshop-WM-Track) · Access: Dataset and leaderboard available on Hugging Face

- **GigaWorld-1 / WMBench** · 2026
  A world-model benchmark for robot-policy evaluation covering closed-loop control, out-of-distribution rollouts, and long-horizon data from multiple sources.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Trajectories` · `Reward`
  [Code](https://github.com/Yvonne-OH/Giga-World-1-projectpage) · Access: Official project repository includes closed-loop and OOD rollout artifacts; full data access requires verification

- **H2R-Bench** · 2026
  A benchmark for human-to-robot cross-embodiment manipulation video generation.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action Labels` · `Object State`
  [Paper](https://arxiv.org/abs/2608.13049) · Access: Paper entry; release status requires verification

- **HarnessEval-W** · 2026
  An evidence-traceable evaluation suite for visual-world-model dynamics.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Text` · `QA`
  [Paper](https://arxiv.org/abs/2608.16859) · Access: Paper entry; release status requires verification

- **MILO HOI Benchmark** · 2026
  A 3D human-object interaction reconstruction dataset and benchmark.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.27407) · [Homepage](https://ac5113.github.io/MILO) · Access: Official project and paper entries available

- **Natural-Input Failure Discovery Benchmark** · 2026
  Reproducible test cases for discovering catastrophic world-model failures under valid natural inputs.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.22421) · Access: Paper entry; data access requires verification

- **PAWBench** · 2026
  A benchmark for probabilistic alignment between generated and real world dynamics.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.27345) · Access: Paper entry; data access requires verification

- **PersonaShot** · 2026
  A thousand-segment, 16-metric benchmark for person-centric narrative continuity in multi-shot video.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.16717) · Access: Paper entry; data access requires verification

- **PhAIL** · 2026
  A real-world Franka FR3 VLA evaluation dataset with multiview video, telemetry, action outcomes, and safety-stop rollouts.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Robot State` · `Action` · `Reward` · `Trajectories`
  [Homepage](https://phail.ai/releases/v1.0) · [Paper](https://arxiv.org/abs/2605.29710) · Access: Official release with videos, telemetry, and results

- **PlayWorld** · 2026
  An interactive world-model benchmark using agent players to pursue long-horizon objectives.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.13552) · [Code](https://github.com/kxding/PlayWorld) · Access: Paper entry; release status requires verification

- **PRIMO-R1 Process Reasoning Dataset** · 2026
  SFT, RL, and benchmark data for robot process-progress reasoning with failure detection and chain-of-thought progress labels.
  `Robotics / Embodied AI` · `RGB Video` · `Language` · `Reward` · `Action Labels`
  [Homepage](https://huggingface.co/datasets/LeonOverload/primo-bench-json) · [Paper](https://arxiv.org/abs/2603.28545) · Access: Benchmark JSON and model/data collection available on Hugging Face

- **R2M-Bench** · 2026
  A benchmark for revisit memory and relative consistency in interactive video world models.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.27328) · Access: Paper entry; data access requires verification

- **RoboDojo RealEval** · 2026
  A real-robot evaluation benchmark with task configurations, simulation environments, and result artifacts.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Scene Metadata`
  [Homepage](https://robodojo-benchmark.com/) · [Code](https://github.com/RoboDojo-Benchmark/RoboDojo) · Access: Official website and repository available; bulk real rollouts require verification

- **RoboReward** · 2026
  A real robot-rollout dataset and reward-model benchmark for task progress and success assessment.
  `Robotics / Embodied AI` · `RGB Video` · `Language` · `Reward` · `Trajectories`
  [Homepage](https://huggingface.co/datasets/teetone/RoboReward) · [Code](https://crfm.stanford.edu/helm/robo-reward-bench/) · Access: Dataset available on Hugging Face; benchmark available through HELM

- **RoboStressBench** · 2026
  A diagnostic dataset and benchmark for VLM robustness under physical visual stress in embodied scenes.
  `Robotics / Embodied AI` · `RGB Video` · `Language` · `Scene Metadata`
  [Homepage](https://yuevii.github.io/robostressbench-page/) · [Paper](https://arxiv.org/abs/2606.00828) · [Code](https://github.com/YUEVII/RoboStressBench) · Access: Official Hugging Face dataset entry and evaluation code available

- **RoboVista** · 2026
  An expert-annotated robot-centric VQA benchmark grounded in real decision points from robotic systems.
  `Robotics / Embodied AI` · `RGB Video` · `QA` · `Language`
  [Homepage](https://berkeleyautomation.github.io/robovista/) · [Code](https://github.com/ehehee/robovista) · Access: Dataset, viewer, and leaderboard publicly available

- **Sci-VBench** · 2026
  An expert-annotated benchmark for knowledge- and reasoning-intensive scientific video generation.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Text`
  [Paper](https://arxiv.org/abs/2608.09873) · Access: Paper entry; release status requires verification

- **SemComp-Data** · 2026
  A six-domain dataset of reference images, instructions, and outcome videos for semantic task completion.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Text`
  [Paper](https://arxiv.org/abs/2608.17426) · Access: Paper entry; release status requires verification

- **SpatialCrafter Benchmark** · 2026
  An evaluation resource for generating explorable 3D proxy worlds from a single image.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.27073) · [Homepage](https://fangchuan.github.io/SpatialCrafter/) · Access: Official project and paper entries available

- **ST-BiBench** · 2026
  A hierarchical benchmark for multi-stream spatiotemporal coordination in bimanual embodied tasks.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State` · `Language`
  [Paper](https://arxiv.org/abs/2602.08392) · [Code](https://github.com/stbibench/ST-BiBench) · Access: Evaluation code and benchmark assets available

- **SurgWMBench** · 2026
  A benchmark for short-horizon surgical instrument motion planning and rollout stability.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.08070) · Access: Paper entry; data access requires verification

- **Teaching Monster Challenge** · 2026
  An instructional-video generation benchmark with learner-persona adaptation and human judgments.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.08852) · Access: Paper entry; data access requires verification

- **TrapVLA Benchmark** · 2026
  A robot benchmark with configurable failure modes for vision-language-action models.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.26578) · [Homepage](https://john-liua.github.io/TrapVLA/) · Access: Official project and paper entries available

- **VBVR-Pro** · 2026
  A suite of 300 procedurally generated, verifiable native visual-reasoning tasks.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.26105) · Access: Paper entry; data access requires verification

- **VGI-Bench** · 2026
  A 27-task benchmark probing visual reasoning in video generation models.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Text` · `QA`
  [Paper](https://arxiv.org/abs/2608.19583) · Access: Paper entry; release status requires verification

- **VideoArgus-Bench** · 2026
  A frozen-rubric benchmark for unified video generation and editing evaluation.
  `Robotics / Embodied AI` · `RGB Video` · `Text` · `Simulation State`
  [Paper](https://arxiv.org/abs/2608.05485) · [Homepage](https://zzzmyyzeng.github.io/VideoArgus) · Access: Official project and paper entries available

- **ViewBench** · 2026
  A dataset and diagnostic benchmark for view consistency and loop closure in camera-conditioned long-horizon video world models.
  `Games / Virtual Environments` · `RGB Video` · `Depth` · `Camera Pose`
  [Homepage](https://huggingface.co/datasets/JEdward/viewbench-dataset) · [Paper](https://arxiv.org/abs/2602.07854) · [Code](https://github.com/jedward225/viewbench-dataset) · Access: Training split available on Hugging Face and ModelScope

- **VLAC-Cut Benchmark** · 2026
  A process-level robot-rollout benchmark for non-monotonic progress estimation and failure-recovery segmentation.
  `Robotics / Embodied AI` · `RGB Video` · `Language` · `Reward` · `Action`
  [Homepage](https://huggingface.co/datasets/InternRobotics/VLAC-Cut-Benchmark) · [Code](https://github.com/InternRobotics/VLAC-Cut) · Access: Benchmark and full data available on Hugging Face

- **WBench** · 2026
  A comprehensive multi-turn benchmark for evaluating action response, visual quality, and long-horizon consistency in interactive video world models.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Text`
  [Homepage](https://huggingface.co/datasets/meituan-longcat/WBench) · [Code](https://github.com/meituan-longcat/WBench) · Access: Dataset available on Hugging Face

- **WorldArena** · 2026
  A public benchmark and leaderboard for action-conditioned robot world models and data engines.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://huggingface.co/spaces/WorldArena/WorldArena) · [Paper](https://arxiv.org/abs/2607.29302) · [Code](https://github.com/boundless-large-model/boundless-world-model) · Access: Official project and code entries available

- **WorldMark** · 2026
  A unified benchmark suite for interactive video world models across multiple views, domains, and action sequences.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Camera Pose`
  [Homepage](https://alayalab.github.io/WorldMark/) · [Paper](https://arxiv.org/abs/2604.21686) · [Code](https://github.com/AlayaLab/WorldMark) · Access: Official prompts, action sequences, and evaluation code available

- **WRBench** · 2026
  A camera-controlled generation benchmark diagnosing whether video world models maintain persistent world state during camera motion.
  `Games / Virtual Environments` · `RGB Video` · `Camera Pose` · `Text`
  [Homepage](https://jinplu.github.io/WRBench/) · [Paper](https://arxiv.org/abs/2606.20545) · [Code](https://github.com/JinPLu/WRBench) · Access: Datasets, artifacts, and leaderboard available on Hugging Face

- **BEAR** · 2025
  A benchmark for atomic embodied capabilities in multimodal language models.
  `Robotics / Embodied AI` · `RGB Video` · `Language` · `Action`
  [Code](https://github.com/yqi19/BEAR-official) · Access: Official repository and benchmark resources available

- **DriveAction** · 2025
  A human-like driving-decision benchmark grounded in real driver action labels.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2506.05667) · Access: Paper entry; release status requires verification

- **EmbodiedBench** · 2025
  A comprehensive benchmark evaluating multimodal models as embodied agents across navigation, manipulation, ALFRED, and Habitat environments.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Language` · `Trajectories`
  [Homepage](https://embodiedbench.github.io/) · [Paper](https://arxiv.org/abs/2502.09560) · [Code](https://github.com/EmbodiedBench/EmbodiedBench) · Access: Benchmark datasets and generated trajectories available on Hugging Face

- **ENACT** · 2025
  An egocentric-interaction benchmark for forward and inverse world modeling with QA, replay, and HDF5 data.
  `Robotics / Embodied AI` · `Egocentric / Human` · `RGB Video` · `Action` · `Object State` · `Trajectories`
  [Homepage](https://huggingface.co/datasets/MLL-Lab/ENACT) · [Code](https://github.com/mll-lab-nu/ENACT) · Access: ENACT QA, HDF5, replay, and segmented datasets available

- **EXPRESS-Bench** · 2025
  An embodied question-answering benchmark for memory, localization, and reasoning over continuous visual observations.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB Video` · `QA` · `Language` · `Trajectories`
  [Homepage](https://hcplab-sysu.github.io/EXPRESS-Bench/) · [Code](https://github.com/HCPLab-SYSU/EXPRESS-Bench) · Access: Official project page and benchmark code available

- **Guardian FailCoT / RoboFail** · 2025
  Robot-failure reasoning and OOD evaluation data with planning failures, execution failures, and subtask annotations.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Language` · `Object State` · `Action Labels`
  [Homepage](https://huggingface.co/datasets/paulpacaud/Guardian-FailCoT-OOD-datasets) · Access: Failure datasets available on Hugging Face

- **ManipBench** · 2025
  A benchmark for low-level robot-manipulation reasoning in vision-language models.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2505.09698) · [Homepage](https://manipbench.github.io/) · Access: Paper entry; release status requires verification

- **MMR** · 2025
  A multi-target, multi-granularity object-and-part reasoning segmentation dataset.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2503.13881) · Access: Paper entry; release status requires verification

- **ORAD-3D** · 2025
  A multi-weather, multi-terrain 3D off-road driving dataset with world-model and trajectory-planning benchmarks.
  `Autonomous Driving` · `RGB Video` · `3D Annotations` · `Trajectories` · `GPS / IMU`
  [Homepage](https://modelscope.cn/datasets/Georgehhhh/ORAD-3D) · [Paper](https://arxiv.org/abs/2510.16500) · [Code](https://github.com/chaytonmin/ORAD-3D-Dataset-For-Off-Road-AD) · Access: Public release on ModelScope and Baidu Cloud

- **Robo2VLM-1** · 2025
  A spatial, goal, and interaction reasoning VQA dataset generated from real robot trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2505.15517) · Access: Paper entry; release status requires verification

- **RoboArena** · 2025
  A distributed real-robot policy-evaluation dataset with successful and failed rollouts, preference feedback, and action-state logs.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Reward` · `Trajectories`
  [Homepage](https://robo-arena.github.io/) · [Code](https://huggingface.co/datasets/RoboArena/DataDump_07-17-2026) · Access: Evaluation rollouts and feedback available on Hugging Face

- **SimWorld Benchmark** · 2025
  A simulator-conditioned autonomous-driving scene-generation dataset and benchmark.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2503.13952) · Access: Paper entry; release status requires verification

- **STU** · 2025
  A camera and densely labeled 3D LiDAR dataset for road-anomaly segmentation.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2505.02148) · Access: Paper entry; release status requires verification

- **WorldGym** · 2025
  A world-model environment for safe evaluation of real-robot policies.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2506.00613) · Access: Paper entry; release status requires verification

- **WoWBench** · 2025
  A benchmark sample set for physical consistency and causal reasoning in robot-interaction world models.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action` · `Robot State` · `Text`
  [Homepage](https://huggingface.co/datasets/WoW-world-model/WoW-1-Benchmark-Samples) · [Code](https://github.com/wow-world-model/wow-world-model) · Access: WoW benchmark samples publicly available on Hugging Face

- **AeroVerse** · 2024
  A UAV embodied-world-model benchmark suite describing real and simulated pretraining data, five instruction-tuning datasets, and evaluation across perception, reasoning, navigation, planning, and action.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB Video` · `Text` · `Agent Pose` · `Action` · `QA`
  [Paper](https://arxiv.org/abs/2408.15511) · Access: Paper entry only; dataset release and access status unverified

- **MMWorld** · 2024
  A human-annotated and synthetic benchmark for multidisciplinary, multifaceted world understanding in video, including explanation, counterfactual reasoning, and future prediction.
  `Physics / Science` · `Egocentric / Human` · `RGB Video` · `QA` · `Text`
  [Homepage](https://mmworld-bench.github.io/) · [Paper](https://arxiv.org/abs/2406.08407) · [Code](https://github.com/UCSB-AI/MMWorld) · Access: Official benchmark repository and project page available

- **Perception Test** · 2023
  A real-video benchmark for multimodal perception, memory, physics, and abstraction.
  `Egocentric / Human` · `Physics / Science` · `RGB Video` · `Audio` · `QA`
  [Homepage](https://github.com/deepmind/perception_test) · [Paper](https://arxiv.org/abs/2305.13786) · Access: Official benchmark

- **SceneReplica** · 2023
  A standardized benchmark for replicating real-world robot pick-and-place experiments, with YCB scenes, RGB-D metadata, grasp data, and sim-to-real setup tools.
  `Robotics / Embodied AI` · `RGB-D` · `3D Metadata` · `Object State` · `Action`
  [Homepage](https://irvlutd.github.io/SceneReplica/) · [Paper](https://arxiv.org/abs/2306.15620) · [Code](https://github.com/IRVLUTD/SceneReplica) · Access: Official repository links scene, grasp, and model files

- **XLand-MiniGrid** · 2023
  A scalable procedurally generated grid-world and task-rule system producing diverse state-action and goal-conditioned trajectories.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/corl-team/xland-minigrid) · [Paper](https://arxiv.org/abs/2107.12808) · Access: Open-source environment and task generator

- **SHIFT** · 2022
  A synthetic driving dataset for discrete and continuous domain shifts across weather, time, and traffic.
  `Autonomous Driving` · `RGB Video` · `Depth` · `Optical Flow` · `3D Boxes` · `Segmentation`
  [Homepage](https://www.vis.xyz/shift/) · [Paper](https://arxiv.org/abs/2206.08367) · [Code](https://github.com/SysCV/shift-dev) · Access: Official dataset and code

- **TAP-Vid** · 2022
  A benchmark for tracking arbitrary points through real, motion-capture, and synthetic videos.
  `Egocentric / Human` · `Physics / Science` · `RGB Video` · `Trajectory` · `Occlusion Labels`
  [Homepage](https://deepmind-tapir.github.io/) · [Paper](https://arxiv.org/abs/2211.03726) · [Code](https://github.com/google-deepmind/tapnet) · Access: Official benchmark code and data

- **VIMA-Bench** · 2022
  A procedurally generated robot-manipulation benchmark driven by multimodal prompts.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Language` · `Object Metadata`
  [Homepage](https://vimalabs.github.io/) · [Paper](https://arxiv.org/abs/2210.03094) · [Code](https://github.com/vimalabs/VIMA) · Access: Official benchmark code

- **Crafter** · 2021
  An open-world survival environment.
  `Games / Virtual Environments` · `RGB Video` · `Game State` · `Action` · `Reward`
  [Code](https://github.com/danijar/crafter) · [Paper](https://arxiv.org/abs/2109.06780) · Access: Open-source environment

- **Distracting Control Suite** · 2021
  A visual-dynamics robustness benchmark adding background, color, and camera changes to continuous-control videos.
  `Robotics / Embodied AI` · `RGB Video` · `Simulation State` · `Action` · `Reward`
  [Code](https://github.com/google-research/google-research/tree/master/distracting_control) · [Paper](https://arxiv.org/abs/2101.02722) · Access: Open-source benchmark generator

- **MiniHack** · 2021
  Composable NetHack-based environments for planning, memory, and long-horizon state evolution.
  `Games / Virtual Environments` · `Game State` · `Action` · `Text` · `Reward`
  [Code](https://github.com/facebookresearch/minihack) · [Paper](https://arxiv.org/abs/2109.13202) · Access: Open-source benchmark

- **bsuite** · 2020
  A reproducible suite of reinforcement-learning environments and trajectory benchmarks for core capabilities.
  `Games / Virtual Environments` · `Game State` · `Action` · `Reward` · `Trajectories`
  [Code](https://github.com/google-deepmind/bsuite) · [Paper](https://arxiv.org/abs/1908.03568) · Access: Open-source benchmark

- **CLEVRER** · 2020
  A synthetic benchmark for video-based physical and causal reasoning. Collision scenarios test descriptive, explanatory, predictive, and counterfactual reasoning with structured annotations.
  `Physics / Science` · `Synthetic Video` · `Object Metadata` · `Trajectory` · `Logic Program` · `QA`
  [Homepage](https://clevrer.csail.mit.edu/) · [Paper](https://arxiv.org/abs/1910.01442) · Access: Open download

- **BOP Benchmark** · 2018
  A unified 6D object-pose benchmark integrating multiple industrial and household-object datasets.
  `Robotics / Embodied AI` · `RGB-D` · `3D Mesh` · `Camera Pose`
  [Homepage](https://bop.felk.cvut.cz/) · [Paper](https://arxiv.org/abs/1808.08319) · Access: Official benchmark portal

- **Moving Symbols** · 2018
  A parameterized synthetic dataset designed to evaluate representations learned by video-prediction models through controlled symbol motion and compositional variation.
  `Physics / Science` · `Synthetic Video` · `Object State` · `Trajectory`
  [Paper](https://arxiv.org/abs/1802.08936) · [Code](https://github.com/rszeto/moving-symbols) · Access: Official code and generation repository

- **UCF-Crime** · 2018
  A long-form surveillance video dataset of anomalous events.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Homepage](https://www.crcv.ucf.edu/projects/real-world/) · [Paper](https://arxiv.org/abs/1801.04264) · Access: Official project page

<!-- DATASET_CATALOG_END -->

## Contributing and corrections

Please use GitHub Issues for all contributions and corrections. You can suggest a new dataset, report inaccurate metadata or broken links, question a classification, or share an update from an official source. When opening an issue, include the relevant official links, access and license information, primary task, and English and Chinese descriptions when available.

## Acknowledgments

The project was inspired by community-maintained world-model resources, especially [Awesome World Models](https://github.com/knightnemo/Awesome-World-Models), while focusing specifically on dataset discovery, comparison, and selection.
