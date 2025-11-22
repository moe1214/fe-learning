import { describe, it, expect } from 'vitest';
import { formatDate } from '../src/index';

describe('shared utils', () => {
  it('formatDate', () => {
    expect(formatDate(new Date('2024-01-02'))).toBe('2024-01-02');
  });
});