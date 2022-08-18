---
title: Javascript(leetcode#78) Subsets
date: 2022-08-18 16:02:07
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
<!--more-->
# 翻譯
給定一個包含唯一元素的整數數組 nums，返回所有可能的子集（冪集）。

解決方案集不得包含重複的子集。以任何順序返回解決方案。



# 範例

Example 1
```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

Example 2
```
Input: nums = [0]
Output: [[],[0]]
```



# 解題思路
1.依動態編成求解
# Solution
Code 1 :
```Javascript
var subsets = function(nums) {
    let res = [[nums[0]]];
    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        res.forEach(a => res.push([...a, curr]));
        res.push([curr]);
    }
    res.unshift([]);
    return res;
};

```