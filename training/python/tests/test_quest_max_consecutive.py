import pytest
from quest_max_consecutive import Solution

@pytest.mark.parametrize(
    "nums, expected",
    [([1,1,0,1,1,1],3),
        ([1,0,1,1,0,1],2)]
)
def test_concatenation(nums: list[int],expected: int):
    solution = Solution()
    result = solution.findMaxConsecutiveOnes(nums)
    assert result == expected