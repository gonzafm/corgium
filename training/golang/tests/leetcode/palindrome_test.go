package leetcode

import (
	"corgium/training/golang/pkg/leetcode"
	"testing"
)

type testCasePalindrome struct {
	candidate int
	result    bool
}

var testCasesPalindrome = []testCasePalindrome{
	{121, true},
	{-121, false},
	{10, false},
	{1234321, true},
	{12345678987654321, true},
	{123456789876543210, false},
	{0, true},
	{11, true},
	{2112, true},
	{-11, false},
}

func TestIsPalindrome(t *testing.T) {
	for _, test := range testCasesPalindrome {
		if got := leetcode.IsPalindrome(test.candidate); got != test.result {
			t.Errorf("IsPalindrome(%d) = %v; want %v", test.candidate, got, test.result)
		}
	}
}
