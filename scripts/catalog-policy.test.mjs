import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateEvidence, validateRecord, validateRelations } from './catalog-policy.mjs';

const sample = JSON.parse(readFileSync(new URL('../data/datasets/mocapact.json', import.meta.url), 'utf8'));
test('documented action-aligned rollouts pass the evidence gate', () => {
  assert.doesNotThrow(() => validateEvidence(sample));
});
test('an old catalog entry cannot enter without a source review', () => {
  const old = {...sample};
  delete old.evidence;
  assert.throws(() => validateEvidence(old), /completed source review/);
});
test('a URL alone cannot substitute for a strict criterion', () => {
  const invalid = structuredClone(sample);
  invalid.evidence.criterion = 0;
  assert.throws(() => validateEvidence(invalid), /inclusion criterion/);
});
test('a stale citation cannot be detached from the displayed resource links', () => {
  const invalid = structuredClone(sample);
  invalid.evidence.source = 'https://example.org/unreviewed';
  assert.throws(() => validateEvidence(invalid), /catalog resource link/);
});

test('display fields, URL schemes and years are validated before publication', () => {
  for (const patch of [{wmNote: ''}, {year: '2022'}, {year: 2099}, {links: {...sample.links, homepage: 'javascript:alert(1)'}}]) {
    assert.throws(() => validateRecord({...sample, ...patch}, '2026-10-30'));
  }
});
test('impossible calendar dates and future reviews are rejected', () => {
  for (const reviewedAt of ['2026-02-30', '2027-01-01']) {
    assert.throws(() => validateRecord({...sample, evidence: {...sample.evidence, reviewedAt}}, '2026-10-30'));
  }
});
test('related resources must resolve and aliases cannot differ only by case', () => {
  assert.throws(() => validateRelations([{...sample, relatedResources:['missing-resource']}]), /related resource/);
  assert.throws(() => validateRelations([{...sample, aliases:[sample.id.toUpperCase()]}]), /duplicate identity/);
});
