from string import Template
import math
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        len_str1 = len(str1)
        len_str2 = len(str2)
        gcd = math.gcd(len_str1,len_str2)
        if len_str1 > len_str2:
            result = str2
        else:
            result = str1            
        for i in result:
            len_result = len(result)
            if (len_str1 % len_result == 0) and (len_str2 % len_result == 0):
                concat_str1 = self.concat(len_str1, len_result, result)
                concat_str2 = self.concat(len_str2, len_result, result)
                if concat_str1 == str1 and concat_str2 == str2:                         
                    return result
            else:               
                result = result[0:len_result - gcd]        
        return ""
    
    def concat(self, len_str, len_result, result) -> str:
        concat = ''
        for i in range(0,int(len_str/len_result)):
            concat = concat + result   
        return concat