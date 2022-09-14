---
title: Javascript(leetcode#90)  Subsets II
date: 2022-08-26 08:58:55
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
<!--more-->
# 翻譯
給定一個可能包含重複項的整數數組 nums，返回所有可能的子集（冪集）。

解決方案集不得包含重複的子集。以任何順序返回解決方案。

# 範例

Example 1:
```
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
```


Example 2:
```
Input: nums = [0]
Output: [[],[0]]
```


# 解題思路
1.利用遞迴解
# Solution

```Javascript
var subsetsWithDup = function(nums) {
    const res = [];
    const track = [];  
    const backtrack = (nums, start)=> {
        const sorted = nums.sort((a, b)=>a-b)    
        res.push(track.slice());
        for(let i = start; i < nums.length; i++){
            if(nums[i] === nums[i-1] && i > start) continue;
            track.push(nums[i]);
            backtrack(nums, i+1);
            track.pop();
        }
    }
    backtrack(nums, 0);
    return res;
};
```
