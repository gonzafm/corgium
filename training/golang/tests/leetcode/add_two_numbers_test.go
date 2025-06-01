package leetcode

import (
	"corgium/training/golang/pkg/leetcode"
	"testing"
)

type testCaseAddTwoNumbers struct {
	l1     []int
	l2     []int
	result []int
}

var testCasesAddTwoNumbers = []testCaseAddTwoNumbers{
	{[]int{1, 1, 1}, []int{1, 1, 1}, []int{2, 2, 2}},
	{[]int{4, 2, 1}, []int{4, 1, 1}, []int{8, 3, 2}},
	{[]int{2, 4, 3}, []int{5, 6, 4}, []int{7, 0, 8}},
	{[]int{0}, []int{0}, []int{0}},
	{[]int{9, 9, 9, 9, 9, 9, 9}, []int{9, 9, 9, 9}, []int{8, 9, 9, 9, 0, 0, 0, 1}},
}

func TestAddTwoNumbers(t *testing.T) {
	for _, test := range testCasesAddTwoNumbers {
		got := leetcode.AddTwoNumbers(convertSliceToListNode(test.l1), convertSliceToListNode(test.l2))
		expected := convertSliceToListNode(test.result)
		for i, v := 0, expected; v != nil; i, v = i+1, v.Next {
			if got == nil || got.Val != v.Val {
				t.Errorf("AddTwoNumbers(%v, %v)[%d] = %v; want %v", test.l1, test.l2, i, got, v.Val)
				break
			}
			got = got.Next
		}
		if got != nil {
			t.Errorf("AddTwoNumbers(%v, %v) has extra elements", test.l1, test.l2)
		}
	}
}

func convertSliceToListNode(slice []int) *leetcode.ListNode {
	var head *leetcode.ListNode
	for i := len(slice) - 1; i >= 0; i-- {
		head = &leetcode.ListNode{Val: slice[i], Next: head}
	}
	return head
}
