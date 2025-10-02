import pytest
from add_two_numbers import Solution
from add_two_numbers import ListNode
from typing import Optional


@pytest.mark.parametrize(
    "list_1, list_2, expected",
    [
        ([1, 1, 1], [1, 1, 1], [2, 2, 2]),
        ([4, 2, 1], [4, 1, 1], [8, 3, 2]),
        ([2, 4, 3], [5, 6, 4], [7, 0, 8]),
        ([0], [0], [0]),
        ([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9], [8, 9, 9, 9, 0, 0, 0, 1]),
    ],
)
def test_add_two_numbers(list_1, list_2, expected):
    solution = Solution()
    l1 = build_node(list_1)
    l2 = build_node(list_2)
    ex = build_node(expected)
    lr = solution.addTwoNumbers(l1, l2)
    size = len(expected)
    current_expected = ex
    current_compare = lr
    for i in range(size):
        assert lr.val == ex.val
        current_expected = current_expected.next
        current_compare = current_compare.next


def build_node(list) -> Optional[ListNode]:
    size = len(list)
    current = None
    for i in range(size):
        if current is None:
            current = ListNode(list[size - i - 1])
        else:
            current = ListNode(list[size - i - 1], current)
    return current
