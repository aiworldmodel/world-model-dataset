# Dataset Research TODO

Scope: a strict catalog of datasets first publicly released before or during 2026 that directly expose world-state evolution, action-conditioned transitions, future observations, or dedicated world-model evaluation protocols.

## Workflow

- [ ] Discover candidates from all available channels
- [ ] Normalize names, papers, URLs, and aliases
- [ ] Deduplicate against `data/datasets/`
- [ ] Verify at least one traceable paper, official homepage, repository, data page, or generation toolkit
- [ ] Classify by one Primary Task and supporting tags
- [ ] Record access, license, scale, and bilingual metadata
- [ ] Exclude weak candidates with a written reason
- [ ] Run catalog build and link audit
- [ ] Update the website and both README catalogs
- [ ] Commit and push each completed batch

## Sources

- [x] arXiv API: dataset, benchmark, video prediction, robotics, driving, physics, 3D/4D queries
- [ ] Semantic Scholar: related-paper and citation expansion
- [x] Hugging Face Datasets: official and high-confidence dataset repositories
- [x] Papers with Code / Hugging Face migration: task and benchmark cross-check
- [x] GitHub Search and Topics: official dataset repositories and download toolkits
- [ ] Awesome World Models and related curated lists
- [ ] Robotics laboratory and simulator project pages
- [ ] Autonomous-driving dataset catalogs and benchmark pages
- [ ] Physics and causal-reasoning benchmark pages

## Year batches

- [ ] 2025
- [ ] 2024
- [ ] 2023
- [ ] 2022
- [ ] 2021
- [ ] 2020
- [ ] 2019
- [ ] 2018
- [ ] 2017
- [ ] 2016 and earlier

## Review rules

- Include datasets, benchmark datasets, and official generation toolkits with an identifiable data path
- Require direct evidence of at least one strict criterion: (1) state/observation transitions over time, (2) actions or controls aligned to those transitions, (3) trajectories usable for world-state prediction, (4) counterfactual physical/causal rollouts, or (5) a benchmark explicitly designed to evaluate world models
- Domain datasets such as robotics, autonomous driving, video, 3D, or simulation are not sufficient by themselves; their record must document the strict criterion above
- Exclude ordinary static perception, classification, detection, segmentation, generic VQA, and model-only resources even when they are used by embodied systems
- Require at least one traceable entry point: paper, official homepage, official repository, data page, or generation toolkit
- A paper-only entry may be included, but its access status must remain unverified unless the paper identifies a data channel
- Keep uncertain license or access details explicit; do not infer openness from a paper alone
- Exclude model-only repositories, ordinary static perception datasets, personal mirrors without provenance, and duplicate releases
- Never claim exhaustive coverage until every source and year batch above has been processed

## Strict audit log

The historical batch notes below are superseded by the [2026-10-29 source review](audit/evidence-review-2026-10-29.md). Earlier “retained” decisions are not current approvals.

- 2026 batch 1: reviewed 20 records; retained 17 and removed 3 (CodecArena, AlloEgo-View, AeroGround) for lacking world-state transitions, action-aligned trajectories, or dedicated world-model evaluation evidence.
- 2026/2017-2025 batch 2: reviewed 20 records; retained 18 and removed 2 (Digital Twin Catalog, FloodReasonBench) because they were static digital-twin imagery or ordinary flood-scene perception without strict world-model evidence.
- Remaining queue review (2026-08-31): reviewed the remaining 43 flagged records across 2016-2026. All retained records document at least one strict signal (state evolution, action/trajectory alignment, simulation rollouts, physical/counterfactual reasoning, or explicit world-model evaluation). Records with paper-only access remain marked as access-unverified; no additional removals were justified from the available evidence.
- 2026-09-01 discovery: added six strict robot rollout/failure datasets with official data portals (RoboArena, PhAIL, PRIMO-R1, AgiBot World 2026, REBOOT26, Guardian FailCoT/RoboFail) and one 2023 offline-RL dataset (TriFinger RL).
- 2026-09-02 discovery: added Mini Moving Shapes and Procgen Action-Conditioned World Model Dataset; both include action-aligned next-state/frame prediction and rollout evaluation.
- 2026-09-02 discovery: added GigaWorld-1 / WMBench, a closed-loop robot-policy world-model benchmark with documented rollout artifacts and evaluation metrics.
- 2026-09-02 pre-2026 discovery: added RetroAct, an annotated 974-environment action-conditioned dataset used by GenieRedux world-model training and exploration.
- 2026-09-02 pre-2026 discovery: added D4RL, Atari 100K, DeepMind Control Suite, RL Unplugged, and World Models CarRacing rollouts as historical state-action world-model resources.

## Current status

- Formal catalog: 266 source-reviewed resources, not 266 independent acquired datasets
- Baseline reconciliation: 391 = 266 retained + 79 pending + 38 excluded + 8 merged
- Pending queue: filter `status=pending` in [the review ledger](audit/evidence-review-2026-10-29.csv); original records are recoverable in `audit/archived-records/`
- Current focus: resolve primary-source identity and temporal schemas before restoring candidates; follow [CATALOG_POLICY.md](CATALOG_POLICY.md)
- Completed scope: source-level eligibility review of the 391 existing records; no claim of exhaustive external discovery, complete data downloads or license validation
- Known limitation: some official pages and dataset cards could not be retrieved. A failed request is recorded as unresolved, not as proof of an unavailable resource.
