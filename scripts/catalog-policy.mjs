export const resourceTypes = ['dataset', 'benchmark', 'generator', 'aggregate', 'derived'];

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
  if (!/^\d{4}-\d{2}-\d{2}$/.test(e.reviewedAt || '') || !Number.isFinite(Date.parse(e.reviewedAt))) fail('invalid review date');
  if (typeof e.downloadTested !== 'boolean') fail('download verification status must be explicit');
}
