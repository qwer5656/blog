---
title: Javascript(leetcode#162) Find Peak Element
date:  2022-10-25 09:08:43
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

<!--more-->

# 翻譯
峰值元素是嚴格大於其鄰居的元素。

給定一個索引為 0 的整數數組 nums，找到一個峰值元素，並返回它的索引。如果數組包含多個峰，則返回任何峰的索引。

你可以想像 nums[-1] = nums[n] = -∞。換句話說，一個元素總是被認為嚴格大於數組外部的鄰居。

您必須編寫一個在 O(log n) 時間內運行的算法。
# 範例

Example 1:
```
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
```


Example 2:
```
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
```






# 解題思路
1. 若小於長度2返回null
2. 駝峰分為三種
    2-1 左大於右，及只有左跟右2個，
    2-2 中大於左和右
    2-3右大於左，及只有左跟右2個
3. 達成以上條件即可為駝峰

# 程式碼

```javascript
var findPeakElement = function(nums) {
    if(nums.length<2) return null;
    for(let i=1;i<nums.length;i++){
        let  minbool=nums[i-1]==undefined?true:nums[i]>nums[i-1];
        let  maxbool=nums[i+1]==undefined?true:nums[i]>nums[i+1];
        if(minbool&&maxbool){
            return i;
        }
    }
    return null;
};
```