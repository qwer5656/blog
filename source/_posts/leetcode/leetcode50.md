---
title: Javascript(leetcode#50) Pow(x, n)
date: 2022-08-10 14:21:59
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
<!--more-->
# 翻譯
實現 pow(x, n)，它計算 x 的 n 次冪（即 xn）。

# 範例
Example 1:
```
Input: x = 2.00000, n = 10
Output: 1024.00000
```

Example 2:
```
Input: x = 2.10000, n = 3
Output: 9.26100
```

Example 3:
```
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
```
# 解題思路
1.利用遞迴將問題猜解
2.若為偶數不需乘X
# Solution
Code 1 :
```Javascript
var myPow = function(x, n) {
  if(n<0){
    return power(1/x,-n);
  }else{
    return power(x,n);
  }
};

function power(x, y){
  if (y === 0) {
    return 1;
  }
  var yBy2 = y / 2;
  var pow = power(x, parseInt( yBy2, 10) );
  if (y % 2 === 0) {
    return pow * pow;
  } else {
    return x * pow * pow;
  }
}
```