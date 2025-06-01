import { describe, expect, test } from '@jest/globals';
import { addTwoNumbers, ListNode } from '../../src/problems/add-two-numbers'

interface Case { l1: number[]; l2: number[]; expected: number[] }

describe('addTwoNumbersTest', () => {
  const cases: Case[] = [
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

  test.each(cases)('returns $expected for $l1 and $l2', ({ l1, l2, expected }) => {
    let result = addTwoNumbers(createListNode(l1), createListNode(l2))
    let expectedListNode = createListNode(expected)
    while (expectedListNode?.next != null) {
      expect(result?.val).toBe(expectedListNode.val)
      result = result?.next ?? null
      expectedListNode = expectedListNode.next;
    }
  });

  function createListNode(list: number[]): ListNode | null {
    var current = null;
    var result = null;
    for (let i in list) {
      if (current == null) {
        current = new ListNode(list[i])
        result = current
      }
      else {
        current.next = new ListNode(list[i])
        current = current.next
      }
    }
    return result;
  }
});