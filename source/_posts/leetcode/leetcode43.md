---
title: Javascript(leetcode#43)  Multiply Strings
date: 2022-08-10 08:58:42
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
<!--more-->
# 翻譯
給定兩個表示為字符串的非負整數 num1 和 num2，返回 num1 和 num2 的乘積，也表示為字符串。

注意：您不得使用任何內置 BigInteger 庫或直接將輸入轉換為整數。


# 範例
Example 1:
```
Input: num1 = "2", num2 = "3"
Output: "6"
```


Example 2:
```
Input: num1 = "123", num2 = "456"
Output: "56088"
```


# 解題思路

# Solution
Code 1 :
```Javascript
var multiply = function(num1, num2) {
  let m = num1.length
    let n = num2.length
    
    let c = 0
    
    let out = Array(m+n).fill(0)
    
    for(let i=m-1; i>=0; i--){
        for(let j = n-1; j>=0; j--){
            let p = num2[j] * num1[i]
            let index = m+n-1-(m-1-i+n-1-j)
            out[index] += p
            
            if(out[index]>9){
                out[index-1] += Math.floor(out[index]/10)
                out[index] %= 10
            }
        }
    }
    
    while(out[0] == 0) out.shift()
    
    return out.length == 0?  '0' : out.join('')
};

```