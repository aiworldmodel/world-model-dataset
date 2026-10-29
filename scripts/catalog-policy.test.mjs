import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateEvidence } from './catalog-policy.mjs';

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
