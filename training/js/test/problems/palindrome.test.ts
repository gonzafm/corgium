import { describe, expect, test } from '@jest/globals';
import { isPalindrome } from '../../src/problems/palindrome';

interface Case { input: number; expected: boolean }

describe('isPalindrome', () => {
  const cases: Case[] = [
    { input: 121, expected: true },
    { input: -121, expected: false },
    { input: 10, expected: false },
    { input: 2112, expected: true },
    { input: 123454321, expected: true },
    { input: 123456789, expected: false },
  ];

  test.each(cases)('returns $expected for $input', ({ input, expected }) => {
    expect(isPalindrome(input)).toBe(expected);
  });
});
