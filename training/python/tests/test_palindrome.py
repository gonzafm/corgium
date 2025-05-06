import pytest
from palindrome import Solution

@pytest.mark.parametrize("x, expected", [
    (121, True),
    (-121, False),
    (10, False),
    (11, True),
    (2222, True),
    (0, True),
    (12321, True),
    (12345, False),
])
def test_is_palindrome(x, expected):
    solution = Solution()
    assert solution.isPalindrome(x) == expected
