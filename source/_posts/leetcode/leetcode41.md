---
title: Javascript(leetcode#41)  First Missing Positive
date: 2022-08-09 09:41:07
categories: 
- Leetcode 
- Leetcode Hard 
tags:
- Leetcode
- Javascript
---

**Difficult:Hard**

# 題目
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.
<!--more-->

# 翻譯
給定一個未排序的整數數組 nums，返回最小的缺失正整數。

您必須實現一個在 O(n) 時間內運行並使用恆定額外空間的算法。


# 範例

Example 1:
```
Input: nums = [1,2,0]
Output: 3
```

Example 2:
```
Input: nums = [3,4,-1,1]
Output: 2
```

Example 3:
```
Input: nums = [7,8,9,11,12]
Output: 1
```


# 解題思路
先把數組裡每個正整數從i位放到第i-1位上，這樣就形成了有序的序列，然後檢查每一下標index與當前元素值，就能知道當前下標所對應的正整數是否缺失，若缺失則返回下標index + 1即可。

# Solution
Code 1 :
```Javascript
var firstMissingPositive = function (nums) {
  let n = nums.length;
  for (let i = 0; i < n; ++i) {

    while (i + 1 != nums[i] && nums[i] != nums[nums[i] - 1] && nums[i] > 0) {
      temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }

  for (let i = 0; i < n; ++i) {
    if (i + 1 != nums[i])
      return i + 1;
  }

  return n + 1;
};


```