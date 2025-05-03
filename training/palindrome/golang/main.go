package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run main.go <number>")
		return
	}

	num, err := strconv.Atoi(os.Args[1])
	if err != nil {
		fmt.Println("Error: Invalid number")
		return
	} else {
		condition := isPalindrome(num)
		fmt.Println("Is the number a palindrome?", condition)
	}
}

// isPalindrome checks if the given integer is a palindrome.
func isPalindrome(x int) bool {
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
