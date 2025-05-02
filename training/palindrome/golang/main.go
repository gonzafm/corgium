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
	return false
}
