---
title: Javascript(leetcode#81) Search in Rotated Sorted Array II
date: 2022-08-23 08:41:02
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

You must decrease the overall operation steps as much as possible.

<!--more-->

# 翻譯
有一個整數數組 nums 以非遞減順序排序（不一定具有不同的值）。

在傳遞給您的函數之前，nums 在未知的樞軸索引 k (0 <= k < nums.length) 處旋轉，使得結果數組為 [nums[k], nums[k+1], ..., nums [n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed)。例如，[0,1,2,4,4,4,5,6,6,7] 可能在樞軸索引 5 處旋轉並變為 [4,5,6,6,7,0,1,2, 4,4]。

給定旋轉後的數組 nums 和一個整數目標，如果目標在 nums 中，則返回 true，如果不在 nums 中，則返回 false。

您必須盡可能減少整體操作步驟。


Example 1:
```
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
```

Example 2:
```
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
```


# 解題思路
1.如果比頭小時，從尾巴開始搜尋
# Solution
```Javascript
var search = function (nums, target) {
    let start = "head";
    if (target < nums[nums.length - 1]) {
        start = "end";
    }
    if (start == "head") {
        for (let i = 0; i <= nums.length - 1; i++) {
            if (target == nums[i]) {
                return true;
            }
        }
    }
    else if (start == "end") {
        for (let i = nums.length - 1; i >= 0; i--) {
            if (target == nums[i]) {
                return true;
            }
        }
    }
    return false;
};
```