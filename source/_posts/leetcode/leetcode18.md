---
title: Javascript(leetcode#18) 4Sum
date: 2022-08-02 13:30:37
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.


<!--more-->

# 翻譯
給定一個包含 n 個整數的數組 nums，返回一個包含所有唯一四元組 [nums[a], nums[b], nums[c], nums[d]] 的數組，使得：

0 <= a, b, c, d < n
a、b、c 和 d 是不同的。
nums[a] + nums[b] + nums[c] + nums[d] == 目標
您可以按任何順序返回答案。

# 範例

Example 1

```
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
```


Example 2

```
Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
```


# 解題思路
1.先將陣列小到大排列
2.避免重複組合 第一個數字判斷數字是否跟上一個數字相同 
3.總和為target時 記錄起來 避免重複組合 left和right判斷下一個數字是否跟當前數字相同

# Solution
Code 1 :
```Javascript
var fourSum = function (nums, target) {
    let arr = [];
    nums=nums.sort((a,b)=>a-b);
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]===nums[i-1]) continue;
        let val = nums[i];
      
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[j]===nums[j-1]&&j!=i+1) continue;
            let inval = nums[j];
            let left = j + 1;
            let right = nums.length-1;
            while (left < right) {
                let sum = val + inval + nums[left] + nums[right];
                if (sum === target) {
                    arr.push([val, inval, nums[left], nums[right]]);
                    while(nums[left]==nums[left+1]) left++;
                    while(nums[right]==nums[right-1]) right--;
                    left++;
                    right--;
                }
                else if(sum>target){
                    right--;
                }
                else if(sum<target){
                    left++;
                }
            }


        }



    }
    return arr;
};
```