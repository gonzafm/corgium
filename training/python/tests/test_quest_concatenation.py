import pytest

from quest_concatenation import Solution

@pytest.mark.parametrize(
    "nums, expected",
    [
        ([1,2,1],[1,2,1,1,2,1]),
        ([1,3,2,1],[1,3,2,1,1,3,2,1])
    ]
)
def test_concatenation(nums: list[int],expected: list[int]):
    solution = Solution()
    result = solution.getConcatenation(nums)
    assert result == expected