package org.corgium.training;

public class Palindrome {
    
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