---
title: Javascript(leetcode#69) Sqrt(x)
date: 2022-08-18 09:09:59
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**


# 題目
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
<!--more-->

# 翻譯
給定一個非負整數 x，計算並返回 x 的平方根。

由於返回類型是整數，所以十進制數字被截斷，只返回結果的整數部分。

注意：您不能使用任何內置的指數函數或運算符，例如 pow(x, 0.5) 或 x ** 0.5。



# 範例

Example 1
```
Input: x = 4
Output: 2
```


Example 2
```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
```

# 解題思路
1.left和right取middle
2.middle*middle若大於x時將right=middle
3.middle*middle若小於x時將left=middle
# Solution
Code 1 :
```Javascript
var mySqrt = function(x) {
    if(x < 2) return x
    let left = 0, right = x
    while(right - left > 1) {
        const middle = Math.floor((left + right) / 2)
        const squrt = middle * middle
        if(squrt > x) {
            right = middle
        } else if (squrt < x){
            left = middle
        } else {
            return middle
        }
    }
        
    return left
};
```

