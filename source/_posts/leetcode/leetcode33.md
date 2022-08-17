---
title: Javascript(leetcode#33) Search in Rotated Sorted Array
date: 2022-08-05 11:22:22
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
<!--more-->
# 翻譯

有一個整數數組 nums 按升序排序（具有不同的值）。

在傳遞給您的函數之前，nums 可能會以未知的樞軸索引 k (1 <= k < nums.length) 旋轉，使得結果數組為 [nums[k], nums[k+1], ... , nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed)。例如，[0,1,2,4,5,6,7] 可能在樞軸索引 3 處旋轉並變為 [4,5,6,7,0,1,2]。

給定可能的旋轉後的數組 nums 和一個整數目標，如果它在 nums 中，則返回目標的索引，如果它不在 nums 中，則返回 -1。

您必須編寫一個具有 O(log n) 運行時復雜度的算法。

# 範例

Example 1:
```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

Example 2:
```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

Example 3:
```
Input: nums = [1], target = 0
Output: -1
```


# 解題思路
1.二分搜尋法邏輯
# Solution
Code 1 :
```Javascript
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    while(left<=right) {
        const mid = Math.floor(left+(right-left)/2)
        
        if(nums[mid] === target) return mid
        
        if(nums[left] <= nums[mid]) {
            if(nums[mid] > target && nums[left] <= target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if(nums[mid] < target && nums[right] >= target ) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    
    return -1
};

```