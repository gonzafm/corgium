"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
exports.addTwoNumbers = addTwoNumbers;
// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
exports.ListNode = ListNode;
function addTwoNumbers(l1, l2) {
    const result = new ListNode(0);
    let current = result;
    let carry = 0;
    while (l1 != null || l2 != null || carry > 0) {
        let x = 0;
        if (l1 != null) {
            x = l1.val;
            l1 = l1.next;
        }
        let y = 0;
        if (l2 != null) {
            y = l2.val;
            l2 = l2.next;
        }
        const total = x + y + carry;
        carry = ~~(total / 10);
        current.next = new ListNode(total % 10);
        current = current.next;
    }
    return result.next;
}
;
