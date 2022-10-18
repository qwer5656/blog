---
title: Javascript(leetcode#137) Single Number II
date:  2022-10-11 08:38:01
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.
<!--more-->


# 翻譯
給定一個整數數組 nums，其中每個元素都出現了 3 次，只有一個元素只出現了一次。找到單個元素並將其返回。

您必須實現具有線性運行時復雜性的解決方案，並且只使用恆定的額外空間。


# 範例

Example 1:

```
Input: nums = [2,2,3,2]
Output: 3
```

Example 2:

```
Input: nums = [0,1,0,1,0,1,99]
Output: 99
```

# 解題思路
1.定義一個obj將第一次出現的數字填入arr
2.若出現重複的數將它從arr中移除



# 程式碼
```Javascript
var singleNumber = function (nums) {
    let obj = {};
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1;
            arr.push(nums[i]);
        } else {
            obj[nums[i]]++;
            if (arr.indexOf(nums[i]) != -1) {
                arr.splice(arr.indexOf(nums[i]), 1);
            }
        }
    }
    return arr[0];
};
```