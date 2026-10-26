import assert from 'node:assert/strict';
import test from 'node:test';

import { serviceFaqs, services } from '../src/data/services.ts';

await test('service records have unique route-safe identifiers and complete fields', () => {
  const slugs = services.map(({ slug }) => slug);
  const numbers = services.map(({ number }) => number);

  assert.equal(new Set(slugs).size, slugs.length, 'service slugs must be unique');
  assert.equal(new Set(numbers).size, numbers.length, 'service numbers must be unique');

  for (const service of services) {
    assert.match(service.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${service.slug} must be route-safe`);
    assert.match(service.number, /^\d{2}$/, `${service.slug} must have a two-digit display number`);
    for (const field of ['name', 'stage', 'summary', 'focus', 'benefit', 'idealClient', 'detail']) {
      assert.ok(service[field].trim(), `${service.slug}.${field} must not be empty`);
    }
  }
});

await test('service FAQs provide both a question and an answer', () => {
  assert.ok(serviceFaqs.length > 0, 'at least one service FAQ is required');

  for (const faq of serviceFaqs) {
    assert.ok(faq.question.trim(), 'FAQ question must not be empty');
    assert.ok(faq.answer.trim(), 'FAQ answer must not be empty');
  }
});
