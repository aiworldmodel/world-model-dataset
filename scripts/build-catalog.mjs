import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateRecord, validateRelations, resourceTypes } from "./catalog-policy.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(root, "data", "datasets");
const files = (await readdir(sourceDir)).filter((name) => name.endsWith(".json")).sort();
const records = [];
const ids = new Set();
const identities = new Set();
const archivedIds = new Set((await readdir(path.join(root, "audit", "archived-records"))).filter(name => name.endsWith(".json")).map(name => name.slice(0, -5)));
const catalogStart = "<!-- DATASET_CATALOG_START -->";
const catalogEnd = "<!-- DATASET_CATALOG_END -->";
const taskOrder = [
  "Predictive & Generative Dynamics",
  "Action-Conditioned Dynamics",
  "Decision-Making & Agent Trajectories",
  "Spatial & Spatiotemporal World Modeling",
  "Physical & Causal Reasoning",
  "World Model Evaluation & Diagnostics"
];
const taskZh = {
  "Predictive & Generative Dynamics": "预测与生成式动力学",
  "Action-Conditioned Dynamics": "动作条件动力学",
  "Decision-Making & Agent Trajectories": "决策与智能体轨迹",
  "Spatial & Spatiotemporal World Modeling": "空间与时空世界建模",
  "Physical & Causal Reasoning": "物理与因果推理",
  "World Model Evaluation & Diagnostics": "世界模型评测与诊断"
};
const taskAnchor = {
  "Predictive & Generative Dynamics": "predictive-generative-dynamics",
  "Action-Conditioned Dynamics": "action-conditioned-dynamics",
  "Decision-Making & Agent Trajectories": "decision-making-agent-trajectories",
  "Spatial & Spatiotemporal World Modeling": "spatial-spatiotemporal-world-modeling",
  "Physical & Causal Reasoning": "physical-causal-reasoning",
  "World Model Evaluation & Diagnostics": "world-model-evaluation-diagnostics"
};
const domainZh = {"Robotics / Embodied AI":"机器人 / 具身智能","Autonomous Driving":"自动驾驶","Games / Virtual Environments":"游戏 / 虚拟环境","Egocentric / Human":"第一人称 / 人类活动","Urban / 3D Scene":"城市 / 三维场景","Physics / Science":"物理 / 科学"};
const modalityZh = {"2D Boxes":"二维框","3D Annotations":"三维标注","3D Boxes":"三维框","3D Mesh":"三维网格","3D Metadata":"三维元数据","3D State":"三维状态","Action":"动作","Action Labels":"动作标签","Agent Pose":"智能体位姿","Audio":"音频","Camera Pose":"相机位姿","Depth":"深度","GPS / IMU":"GPS / 惯性测量单元","Game State":"游戏状态","Gaze":"视线","IMU":"惯性测量单元","IMU / GPS":"惯性测量单元 / GPS","Lane Markings":"车道线","Language":"语言","LiDAR":"激光雷达","Logic Program":"逻辑程序","Maps":"地图","Multi-view RGB Video":"多视角 RGB 视频","Object Metadata":"物体元数据","Object State":"物体状态","Optical Flow":"光流","QA":"问答","RADAR":"毫米波雷达","RGB Video":"RGB 视频","RGB Images":"RGB 图像","RGB-D":"RGB-D","Reward":"奖励","Robot State":"机器人状态","Scene Metadata":"场景元数据","Segmentation":"分割标注","Semantic Labels":"语义标签","Simulation State":"仿真状态","Stereo RGB":"双目 RGB","Stereo Grayscale":"双目灰度","Grayscale Video":"灰度视频","Event Camera":"事件相机","Occlusion Labels":"遮挡标注","Synthetic Video":"合成视频","Text":"文本","Text Templates":"文本模板","Trajectories":"轨迹","Trajectory":"轨迹"};

for (const file of files) {
  const record = JSON.parse(await readFile(path.join(sourceDir, file), "utf8"));
  for (const field of ["id", "name", "year", "summary", "summaryEn", "verdictEn", "wmNoteEn", "scaleZh", "organizationsZh", "accessZh", "licenseZh", "primaryTask", "domain", "modalities", "links"]) {
    if (record[field] === undefined) throw new Error(`${file}: missing ${field}`);
  }
  if (ids.has(record.id)) throw new Error(`${file}: duplicate id ${record.id}`);
  if (file !== `${record.id}.json`) throw new Error(`${file}: filename must match id`);
  if (archivedIds.has(record.id)) throw new Error(`${file}: archived records require re-review before restoration`);
  if (!taskOrder.includes(record.primaryTask)) throw new Error(`${file}: unknown primary task`);
  if (!Array.isArray(record.domain) || !Array.isArray(record.modalities)) throw new Error(`${file}: tags must be arrays`);
  if (record.links.download) throw new Error(`${file}: download links are not part of the catalog schema`);
  if (!record.links.homepage && !record.links.paper && !record.links.code) throw new Error(`${file}: at least one verified resource link is required`);
  validateRecord(record);
  for (const identity of [record.id, ...(record.aliases || [])]) {
    if (identities.has(identity)) throw new Error(`${file}: duplicate identity or alias ${identity}`);
    identities.add(identity);
  }
  ids.add(record.id);
  records.push(record);
}

validateRelations(records);
records.sort((a, b) => b.year - a.year || a.name.localeCompare(b.name));
await writeFile(path.join(root, "datasets.json"), `${JSON.stringify(records, null, 2)}\n`);

const resourceLinks = (record, zh) => {
  const labels = zh ? {homepage:"主页",paper:"论文",code:"代码"} : {homepage:"Homepage",paper:"Paper",code:"Code"};
  return Object.entries(record.links).map(([key, url]) => `[${labels[key]}](${url})`).join(" · ");
};
const typeLabels = {dataset:["Dataset","数据集"],benchmark:["Benchmark","评测集"],generator:["Generation environment / toolkit","生成环境 / 工具"],aggregate:["Collection / registry","聚合集合 / 注册表"],derived:["Derived data / subset","派生数据 / 子集"]};

const renderCatalog = (zh) => {
  const navigation = taskOrder.map((task) => {
    const count = records.filter((record) => record.primaryTask === task).length;
    const label = zh ? taskZh[task] : task;
    return `[${label} (${count})](#${taskAnchor[task]})`;
  }).join(" · ");
  const sections = taskOrder.map((task) => {
  const entries = records.filter((record) => record.primaryTask === task).map((record) => {
    const summary = zh ? record.summary : record.summaryEn;
    const domains = record.domain.map((value) => zh ? (domainZh[value] || value) : value);
    const modalities = record.modalities.slice(0, 5).map((value) => zh ? (modalityZh[value] || value) : value);
    const tags = [...domains, ...modalities].map((value) => `\`${value}\``).join(" · ");
    const access = zh ? record.accessZh : record.access;
    const accessLine = zh ? `访问方式：${access}` : `Access: ${access}`;
    const e = record.evidence;
    const evidenceLine = zh ? `入选依据 C${e.criterion}（英文审查说明）：${e.statement}` : `Inclusion evidence C${e.criterion}: ${e.statement}`;
    const sourceLabel = zh ? "审查来源" : "Reviewed source";
    return `- **${record.name}** · ${record.year} · ${typeLabels[record.resourceType][zh ? 1 : 0]}\n  ${summary}\n  ${tags}\n  ${resourceLinks(record, zh)} · ${accessLine}\n  ${evidenceLine} [${sourceLabel}](${e.source}) · ${e.reviewedAt}`;
  });
  const heading = zh ? `${taskZh[task]}（${entries.length}）` : `${task} (${entries.length})`;
  return `<a id="${taskAnchor[task]}"></a>\n\n### ${heading}\n\n${entries.join("\n\n")}`;
  }).join("\n\n");
  return `${navigation}\n\n${sections}`;
};

const modalityCount = new Set(records.flatMap((record) => record.modalities)).size;
for (const [file, template, zh] of [["README.md", "README.en.template.md", false], ["README.zh-CN.md", "README.zh-CN.template.md", true]]) {
  const readmePath = path.join(root, file);
  const templatePath = path.join(root, "data", "readme", template);
  const readme = (await readFile(templatePath, "utf8"))
    .replaceAll("{{DATASET_COUNT}}", String(records.length))
    .replaceAll("{{RESOURCE_TYPES}}", resourceTypes.map(type => `${typeLabels[type][zh ? 1 : 0]}: ${records.filter(r => r.resourceType === type).length}`).join(" · "))
    .replaceAll("{{MODALITY_COUNT}}", String(modalityCount));
  const start = readme.indexOf(catalogStart);
  const end = readme.indexOf(catalogEnd);
  if (start === -1 || end === -1 || end < start) throw new Error(`${file}: missing dataset catalog markers`);
  const generated = `${catalogStart}\n\n${renderCatalog(zh)}\n\n${catalogEnd}`;
  await writeFile(readmePath, `${readme.slice(0, start)}${generated}${readme.slice(end + catalogEnd.length)}`);
}
console.log(`Built datasets.json from ${records.length} records.`);
