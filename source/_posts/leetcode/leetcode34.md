---
title: Javascript(leetcode#34) Find First and Last Position of Element in Sorted Array
date: 2022-08-05 13:47:55
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
<!--more-->
 
# 翻譯
給定一個按非降序排序的整數數組 nums，找到給定目標值的開始和結束位置。

如果在數組中找不到目標，則返回 [-1, -1]。

您必須編寫一個具有 O(log n) 運行時復雜度的算法。

# 範例

Example 1:
```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```


Example 2:
```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

Example 3:
```
Input: nums = [], target = 0
Output: [-1,-1]
```

# 解題思路


# Solution
Code 1 :
```Javascript
var searchRange = function (nums, target) {
    let index = nums.indexOf(target);
    if (index == -1) {
        return [-1, -1];
    } else {
        let end = index + 1;
        while (true) {
            if (nums[end] != target) {
                break;
            }
            end++;
        }
        return [index, end - 1]
    }
};

```