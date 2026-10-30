export const resourceTypes = ['dataset', 'benchmark', 'generator', 'aggregate', 'derived'];

const isWebUrl = value => {
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password; }
  catch { return false; }
};

export function validateRecord(record, today = new Date().toISOString().slice(0, 10)) {
  const fail = message => { throw new Error(`${record.id}: ${message}`); };
  for (const key of ['id', 'name', 'shortName', 'summary', 'summaryEn', 'primaryTask', 'primaryTaskZh', 'scale', 'scaleZh', 'organizations', 'organizationsZh', 'access', 'accessZh', 'license', 'licenseZh', 'wmNote', 'wmNoteEn']) {
    if (typeof record[key] !== 'string' || !record[key].trim()) fail(`missing or empty ${key}`);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(record.id)) fail('invalid id');
  if (!Number.isInteger(record.year) || record.year < 1900 || record.year > Number(today.slice(0, 4))) fail('invalid year');
  for (const key of ['domain', 'modalities', 'source', 'structure', 'secondaryTasks', 'aliases', 'relatedResources']) {
    const values = record[key] ?? (['aliases', 'relatedResources'].includes(key) ? [] : null);
    if (!Array.isArray(values) || values.some(v => typeof v !== 'string' || !v.trim()) || new Set(values).size !== values.length) fail(`invalid ${key}`);
  }
  if (!record.domain.length || !record.modalities.length) fail('empty domain or modalities');
  if (!record.links || !Object.keys(record.links).length || Object.entries(record.links).some(([key, value]) => !['homepage', 'paper', 'code'].includes(key) || !isWebUrl(value))) fail('invalid resource links');
  if (record.yearBasis && (!record.yearBasis.description?.trim() || !isWebUrl(record.yearBasis.source))) fail('invalid yearBasis');
  if ('rating' in record) fail('unsupported rating');
  validateEvidence(record);
  if (record.evidence.reviewedAt > today) fail('future review date');
}

export function validateRelations(records) {
  const ids = new Set(records.map(r => r.id));
  const identities = new Set();
  for (const record of records) {
    for (const identity of [record.id, ...(record.aliases || [])]) {
      const normalized = identity.trim().toLowerCase();
      if (identities.has(normalized)) throw new Error(`${record.id}: duplicate identity ${identity}`);
      identities.add(normalized);
    }
    for (const id of record.relatedResources || []) {
      if (id === record.id || !ids.has(id)) throw new Error(`${record.id}: invalid related resource ${id}`);
    }
  }
}

// This gate checks that a review was recorded, not that its scientific judgment is true.
export function validateEvidence(record) {
  const fail = message => { throw new Error(`${record.id}: ${message}`); };
  if (!resourceTypes.includes(record.resourceType)) fail('missing or unknown resourceType');
  const e = record.evidence;
  if (!e || e.status !== 'source-reviewed') fail('a completed source review is required');
  if (![1, 2, 3, 4, 5].includes(e.criterion)) fail('a strict inclusion criterion is required');
  if (!['paper', 'documentation'].includes(e.level)) fail('invalid evidence level');
  if (!/^https?:\/\//.test(e.source || '')) fail('a traceable evidence URL is required');
  if (!Object.values(record.links).includes(e.source)) fail('evidence must be a catalog resource link');
  for (const field of ['sourceTitle', 'locator', 'statement']) {
    if (typeof e[field] !== 'string' || !e[field].trim()) fail(`missing evidence ${field}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(e.reviewedAt || '') || !Number.isFinite(Date.parse(e.reviewedAt)) || new Date(e.reviewedAt).toISOString().slice(0, 10) !== e.reviewedAt) fail('invalid review date');
  if (typeof e.downloadTested !== 'boolean') fail('download verification status must be explicit');
}
