---
title: Javascript(leetcode#35) Search Insert Position
date: 2022-08-05 14:13:35
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**

# 題目
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

<!--more-->
# 翻譯
給定一個由不同整數組成的排序數組和一個目標值，如果找到目標，則返回索引。如果不是，則返回按順序插入的索引。

您必須編寫一個具有 O(log n) 運行時復雜度的算法。

# 範例

Example 1:
```
Input: nums = [1,3,5,6], target = 5
Output: 2
```


Example 2:
```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

Example 3:
```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

# 解題思路
1.從陣列第一個數開始比較

# Solution
Code 1 :
```Javascript
var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(target<=nums[i]){
            return i;
        }
    }
    return nums.length;
};

```