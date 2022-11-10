---
title: Javascript(leetcode#153) Find Minimum in Rotated Sorted Array
date:  2022-10-25 09:08:33
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.


<!--more-->

# 翻譯

假設一個按升序排序的長度為 n 的數組旋轉 1 到 n 次。例如，數組 nums = [0,1,2,4,5,6,7] 可能變為：

[4,5,6,7,0,1,2] 如果旋轉 4 次。
[0,1,2,4,5,6,7] 如果旋轉 7 次。
請注意，將數組 [a[0], a[1], a[2], ..., a[n-1]] 旋轉 1 次會得到數組 [a[n-1], a[0] , a[1], a[2], ..., a[n-2]]。

給定唯一元素的排序旋轉數組 nums，返回該數組的最小元素。

您必須編寫一個在 O(log n) 時間內運行的算法。

# 範例

Example 1:
```
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
```


Example 2:
```
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
```


Example 3:
```
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
```


# 解題思路
1. 從陣列裡面找到最小的值
2. 使用二分搜尋演算法

# 程式碼

```javascript
var findMin = function(nums) {
     let left = 0
        let right = nums.length - 1
    
    while (left < right){
        let mid = Math.floor((left + right)/2)
        if (nums[mid] > nums[right]) left = mid + 1
        else right = mid
    }
    return nums[left]
};
```