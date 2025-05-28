package org.corgium.training;

import java.util.stream.Stream;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import static org.junit.jupiter.params.provider.Arguments.of;
import org.junit.jupiter.params.provider.MethodSource;

public class PalindromeTest {
    
    private static Stream<org.junit.jupiter.params.provider.Arguments> arguments() {
        return Stream.of(of(121, true),
            of(-121, false),
            of(10, false),
            of(12321, true),
            of(1234321, true),
            of(221122, true)
        );
    }

    @ParameterizedTest
    @MethodSource("arguments")  
    void shouldReturnTrueIfPalindrome(int number, boolean expected) {
        Palindrome palindrome = new Palindrome();
        Assertions.assertThat(palindrome.isPalindrome(number)).isEqualTo(expected);        
    }
}