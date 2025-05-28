package org.corgium.training;

public class Palindrome {
    
    // func isPalindrome(x int) bool {
// 	number := strconv.Itoa(x)
// 	j := len(number)
// 	correction := j % 2
// 	for i := range j {
// 		if i == j-i-correction {
// 			return true
// 		} else if number[i] != number[j-i-1] {
// 			return false
// 		}
// 	}
// 	return false
// }
    public boolean isPalindrome(int x) {
        String number = Integer.toString(x);
        int j = number.length();
        int correction = j % 2;
        for (int i = 0; i < j; i++) {
            if (i == j - i - correction) {
                return true;
            } else if (number.charAt(i) != number.charAt(j - i - 1)) {
                return false;
            }
        }
        return false;    
    }
}