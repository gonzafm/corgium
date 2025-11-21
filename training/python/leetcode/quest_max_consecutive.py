class Solution:
    def findMaxConsecutiveOnes(self, nums: list[int]) -> int:
        n = len(nums)
        max_consecutive = 0
        current = 0
        for i in range(len(nums)):
            if nums[i] == 1:
                current+=1
            elif nums[i] == 0:
                if current > max_consecutive:
                    max_consecutive = current
                #it should stop if remaining length < max_consecutive                    
                if max_consecutive + i > n:
                    return max_consecutive                    
                current = 0                    
        if current > max_consecutive:
            return current
        else:
            return max_consecutive