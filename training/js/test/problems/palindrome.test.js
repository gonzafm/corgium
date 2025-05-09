"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const palindrome_1 = require("../../src/problems/palindrome");
(0, globals_1.describe)('isPalindrome', () => {
    const cases = [
        { input: 121, expected: true },
        { input: -121, expected: false },
        { input: 10, expected: false },
        { input: 2112, expected: true },
        { input: 123454321, expected: true },
        { input: 123456789, expected: false },
    ];
    globals_1.test.each(cases)('returns $expected for $input', ({ input, expected }) => {
        (0, globals_1.expect)((0, palindrome_1.isPalindrome)(input)).toBe(expected);
    });
});
