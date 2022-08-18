---
title: Javascript(leetcode#75) Sort Colors
date: 2022-08-18 13:44:20
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.
<!--more-->
# 翻譯
給定一個數組 nums，其中有 n 個對象，顏色為紅色、白色或藍色，就地對它們進行排序，使相同顏色的對象相鄰，顏色按紅色、白色和藍色的順序排列。

我們將使用整數 0、1 和 2 分別表示紅色、白色和藍色。

您必須在不使用庫的排序功能的情況下解決此問題。



# 範例

Example 1
```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

Example 2
```
Input: nums = [2,0,1]
Output: [0,1,2]
```


# 解題思路
1.利用泡沫排序法求解
# Solution
Code 1 :
```Javascript
var sortColors = function(nums) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j]){
                let temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp;
            }
        }
    }
};
```