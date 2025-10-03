import pytest
from merge_strings_alternately import Solution

@pytest.mark.parametrize(
    "word1, word2, expected",
    [("abc","pqr","apbqcr"),
     ("ab","pqrs","apbqrs"),
     ("abcd","pq","apbqcd")
    ],
)
def test_Alternately(word1,word2,expected):
    solution = Solution()
    result = solution.mergeAlternately(word1,word2)
    assert result == expected
