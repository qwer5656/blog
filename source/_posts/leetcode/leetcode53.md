---
title: Javascript(leetcode#53) Maximum Subarray
date: 2022-08-15 10:16:13
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
<!--more-->

# 翻譯
給定一個整數數組 nums，找到總和最大的連續子數組（至少包含一個數）並返回其總和。

子數組是數組的連續部分。

# 範例
Example 1:
```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```


Example 2:
```
Input: nums = [1]
Output: 1
```

Example 1:
```
Input: nums = [5,4,-1,7,8]
Output: 23
```

# 解題思路
1.相加若小於時，歸零不需要前面的數字，重新開始計算

# Solution
Code 1 :
```Javascript
var maxSubArray = function (nums) {
  let max = -Infinity;
  let cur = 0;
  for (var n of nums) {
    cur = cur < 0 ? 0 : cur;
    cur += n;
    max = Math.max(cur, max);
  }
  return max;
};
```