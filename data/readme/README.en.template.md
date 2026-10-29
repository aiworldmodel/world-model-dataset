# WorldModel Data Atlas

[English](./README.md) | [简体中文](./README.zh-CN.md)

_An evidence-first catalog of data resources for world-model research._

[![Live catalog](https://img.shields.io/badge/explore-live_catalog-2563eb)](https://aiworldmodel.github.io/world-model-dataset/)
[![Resources](https://img.shields.io/badge/resources-{{DATASET_COUNT}}-16a34a)](#dataset-catalog)
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

## Inclusion evidence

Every listed resource has a dated primary-source review establishing temporal state evolution, aligned controls, predictive trajectories, physical/counterfactual outcomes, or a dedicated world-model evaluation protocol. Static assets, generic perception/QA, model-only releases and unresolved candidates stay outside the main catalog. Read the [inclusion policy](CATALOG_POLICY.md) and [391-record audit](audit/evidence-review-2026-10-29.md).

Source review does not establish complete downloads, sample integrity or license permission. Paper-level evidence is labeled explicitly. Access conditions vary; not all resources are openly downloadable. Known collections and derived subsets can overlap.

## Catalog snapshot

| Reviewed resources | Primary tasks | Domains | Modalities |
| ---: | ---: | ---: | ---: |
| {{DATASET_COUNT}} | 6 | 6 | {{MODALITY_COUNT}} |

{{RESOURCE_TYPES}}

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

<!-- DATASET_CATALOG_END -->

## Contributing and corrections

Please use GitHub Issues for all contributions and corrections. You can suggest a new dataset, report inaccurate metadata or broken links, question a classification, or share an update from an official source. When opening an issue, include the relevant official links, access and license information, primary task, and English and Chinese descriptions when available.

## Acknowledgments

The project was inspired by community-maintained world-model resources, especially [Awesome World Models](https://github.com/knightnemo/Awesome-World-Models), while focusing specifically on dataset discovery, comparison, and selection.
