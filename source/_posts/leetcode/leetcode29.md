---
title: Javascript(leetcode#29) Divide Two Integers
date: 2022-08-04 10:29:45
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.
<!--more-->
# 翻譯
給定兩個整數被除數和除數，在不使用乘法、除法和模運算符的情況下將兩個整數相除。

整數除法應該向零截斷，這意味著丟失其小數部分。例如，8.345 將被截斷為 8，-2.7335 將被截斷為 -2。

返回除以除數後的商。

注意：假設我們正在處理的環境只能存儲 32 位有符號整數範圍內的整數：[−231, 231 − 1]。對於這個問題，如果商嚴格大於 231 - 1，則返回 231 - 1，如果商嚴格小於 -231，則返回 -231。

# 範例

Example 1:
```
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.

```

Example 2:
```
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.
```

# 解題思路
1.利用減法求解

# Solution
Code 1 :
```Javascript
var divide = function(dividend, divisor) {
   if (divisor === 1) return dividend;
    if (divisor === -1) {
        return (dividend === -2147483648) ? 2147483647 : -dividend;
    }

    let count=0;
    let dividendsing=1;
    let divisorsing=1;
    if(dividend<0){
        dividendsing=-1;
    }
    if(divisor<0){
        divisorsing=-1;
    }
    while(Math.abs(dividend)>=Math.abs(divisor)){
        let val=Math.abs(dividend);
        dividend=val-Math.abs(divisor);
        count++;
    }
    let final=count*dividendsing*divisorsing;
    if(final>2147483647){
        return 2147483647;
    }
    if(final<-2147483648){
        return -2147483648;
    }

    return final;
};
```
