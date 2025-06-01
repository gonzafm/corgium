// isPalindrome checks if the given integer is a palindrome.
package leetcode

import "strconv"

func IsPalindrome(x int) bool {
	number := strconv.Itoa(x)
	j := len(number)
	correction := j % 2
	for i := range j {
		if i == j-i-correction {
			return true
		} else if number[i] != number[j-i-1] {
			return false
		}
	}
	return false
}
