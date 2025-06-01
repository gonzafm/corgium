package leetcode

/**
 * Definition for singly-linked list.
 */
type ListNode struct {
	Val  int
	Next *ListNode
}

func AddTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	result := &ListNode{0, nil}
	current := result
	var carry = 0
	for l1 != nil || l2 != nil || carry > 0 {
		var x = 0
		if l1 != nil {
			x = l1.Val
			l1 = l1.Next
		}
		var y = 0
		if l2 != nil {
			y = l2.Val
			l2 = l2.Next
		}
		total := x + y + carry
		carry = total / 10
		current.Next = &ListNode{total % 10, nil}
		current = current.Next
	}
	return result.Next
}
