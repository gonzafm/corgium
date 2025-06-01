package org.corgium.training;

import java.util.List;
import java.util.stream.Stream;

import org.assertj.core.api.Assertions;
import org.corgium.training.utils.ListNode;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import static org.junit.jupiter.params.provider.Arguments.of;
import org.junit.jupiter.params.provider.MethodSource;

public class AddTwoNumbersTest {

    private final AddTwoNumbers addTwoNumbers = new AddTwoNumbers();

    private static Stream<Arguments> arguments() {
        return Stream.of(
            of(buildListNode(List.of(1, 1, 1)), 
               buildListNode(List.of(1, 1, 1)), 
               buildListNode(List.of(2, 2, 2))),
            of(buildListNode(List.of(2, 4, 3)),
               buildListNode(List.of(5, 6, 7)),
               buildListNode(List.of(7, 0, 1,1))),
            of(buildListNode(List.of(0)),
               buildListNode(List.of(0)),
               buildListNode(List.of(0)))               
        );
    }

    @ParameterizedTest
    @MethodSource("arguments")
    void testAddNumbers(ListNode l1, ListNode l2, ListNode expected) {
        var result = addTwoNumbers.addTwoNumbers(l1, l2);
        while (result.next != null) {
            Assertions.assertThat(result.val).isEqualTo(expected.val);
            result = result.next;
            expected = expected.next;
        }
    }

    private static ListNode buildListNode(List<Integer> values) {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;
        for (Integer value : values) {
            current.next = new ListNode(value);
            current = current.next;
        }
        return dummy.next;
    }
}
