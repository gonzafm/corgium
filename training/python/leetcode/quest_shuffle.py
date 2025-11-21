class Solution:
    def shuffle(self, nums: list[int], n: int) -> list[int]:
        ans = [0] * 2 * n
        for i in range(n):
            ans[i*2] = nums[i]
            ans[i *2 + 1] = nums[n+i]                
        return ans