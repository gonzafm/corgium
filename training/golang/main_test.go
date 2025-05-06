package main

import (
	"testing"
)

type testCase struct {
	candidate int
	result    bool
}

var testCases = []testCase{
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
	for _, test := range testCases {
		if got := isPalindrome(test.candidate); got != test.result {
			t.Errorf("isPalindrome(%d) = %v; want %v", test.candidate, got, test.result)
		}
	}
}
