"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const add_two_numbers_1 = require("../../src/problems/add-two-numbers");
(0, globals_1.describe)('addTwoNumbersTest', () => {
    const cases = [
        { l1: [1, 1, 1], l2: [1, 1, 1], expected: [2, 2, 2] },
        { l1: [0], l2: [0], expected: [0] },
        { l1: [2, 4, 3], l2: [5, 6, 4], expected: [7, 0, 8] },
        { l1: [9, 9, 9], l2: [1], expected: [0, 0, 0, 1] },
        { l1: [1], l2: [9, 9, 9], expected: [0, 0, 0, 1] },
        { l1: [], l2: [], expected: [] },
        { l1: [5], l2: [], expected: [5] },
        { l1: [], l2: [5], expected: [5] },
        { l1: [9], l2: [1], expected: [0, 1] },
        { l1: [9, 9], l2: [1], expected: [0, 0, 1] },
        { l1: [9], l2: [9], expected: [8, 1] }
    ];
    globals_1.test.each(cases)('returns $expected for $l1 and $l2', ({ l1, l2, expected }) => {
        let result = (0, add_two_numbers_1.addTwoNumbers)(createListNode(l1), createListNode(l2));
        let expectedListNode = createListNode(expected);
        while (expectedListNode?.next != null) {
            (0, globals_1.expect)(result?.val).toBe(expectedListNode.val);
            result = result?.next ?? null;
            expectedListNode = expectedListNode.next;
        }
    });
    function createListNode(list) {
        var current = null;
        var result = null;
        for (let i in list) {
            if (current == null) {
                current = new add_two_numbers_1.ListNode(list[i]);
                result = current;
            }
            else {
                current.next = new add_two_numbers_1.ListNode(list[i]);
                current = current.next;
            }
        }
        return result;
    }
});
