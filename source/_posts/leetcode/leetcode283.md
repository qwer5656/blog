---
title: Javascript(leetcode#283) Move Zeroes
date:  2022-11-07 15:19:04
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**


# 題目
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

<!--more-->

# 翻譯
給定一個整數數組 nums，將所有 0 移動到它的末尾，同時保持非零元素的相對順序。

請注意，您必須在不復制數組的情況下就地執行此操作。

# 範例

Example 1:
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```


Example 2:
```
Input: nums = [0]
Output: [0]
```





# 解題思路
1.將非0和0的數互相交換

# 程式碼

```javascript
var moveZeroes = function(nums) {
    let zero =0;
 for(let i=0; i<nums.length; i++){
     if (nums[i] !== 0){
         [nums[zero], nums[i]] = [nums[i], nums[zero]]
         zero++
     }
 }
 
};
```