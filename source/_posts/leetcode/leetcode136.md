---
title: Javascript(leetcode#136) Single Number
date:  2022-10-06 09:04:18
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**



# 題目
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

<!--more-->
# 翻譯
給定一個非空整數數組 nums，每個元素出現兩次，除了一個。找到那個單一的。

您必須實現具有線性運行時復雜性的解決方案，並且只使用恆定的額外空間。



# 範例
Example 1:
```
Input: nums = [2,2,1]
Output: 1

```

Example 2:
```
Input: nums = [4,1,2,1,2]
Output: 4

```

Example 3:
```
Input: nums = [1]
Output: 1
```


# 解題思路
1.先將nums降冪或升冪排列
2.start不等於start+1的數就是唯一數
# Solution

```javascript
var singleNumber = function (nums) {
    let arr = nums.sort();
    let start = 0;
    while (start < arr.length) {
        if (arr[start] != arr[start + 1]) {
            return arr[start];
        } else {
            start += 2;
        }
    }

};
```