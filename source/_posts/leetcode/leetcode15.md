---
title: Javascript(leetcode#15)  3Sum
date: 2022-08-01 15:23:15
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

<!--more-->

# 翻譯

給定一個整數數組 nums，返回所有三元組 [nums[i], nums[j], nums[k]] 使得 i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0。

請注意，解決方案集不得包含重複的三元組。

# 範例

Example 1

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

Example 2

```
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```

Example 3

```
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```


# 解題思路
1.先將陣列小到大排列
2.避免重複組合 第一個數字判斷數字是否跟上一個數字相同 
3.總和為0時 記錄起來 避免重複組合 left和right判斷下一個數字是否跟當前數字相同
# Solution
Code 1 :
```Javascript
var threeSum = function(nums) {
    let res = []
    nums.sort((a,b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1])
            continue
        let target = -nums[i]
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            if (nums[left] + nums[right] === target) {
                res.push([nums[left], -target, nums[right]])
                while (nums[left] === nums[left + 1])
                    left++
                left++
                while (nums[right] === nums[right - 1])
                    right--
                right--
            }
            else if (nums[left] + nums[right] > target)
                right--
            else
                left++
        }
        
    }
    return res
};


```