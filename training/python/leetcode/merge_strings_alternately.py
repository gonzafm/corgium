class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        merge = ""
        len1 = len(word1)
        len2 = len(word2)
        maxlen = max(len1,len2)        
        for i in range(maxlen):
            char1 = ""
            char2 = ""
            if i < len1:
                char1 =  word1[i]
            else:
                char1 = ""   
            if i < len2:
                char2 = word2[i]
            else:
                char2 = ""
            merge += char1 + char2    
        return merge