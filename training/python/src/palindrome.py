class Solution:
    def isPalindrome(self, x: int) -> bool:
        num_str = str(x)
        str_len = len(num_str)
        correction = str_len % 2
        for i in range(str_len):
            if i == str_len - i -correction:
                return True
            if num_str[i] != num_str[str_len - 1 - i]:
                return False
        return False