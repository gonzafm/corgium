import pytest

from greatest_common_divisor import Solution

@pytest.mark.parametrize(
    "str1, str2, expected",
    [("ABCABC","ABC","ABC"),
     ("ABABAB","ABAB","AB"),
     ("LEET","CODE",""),
     ("TAUXXTAUXXTAUXXTAUXXTAUXX","TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX","TAUXX"),
     ("NLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGM","NLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGM","NLZGM")
    ],
)
def test_gcdOfStrings(str1, str2, expected):
    solution = Solution()
    result = solution.gcdOfStrings(str1, str2)
    assert result == expected