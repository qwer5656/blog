---
title: Javascript(leetcode#128)  Longest Consecutive Sequence
date:  2022-09-30 15:27:07
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
<!--more-->
# 翻譯
給定一個未排序的整數數組，返回最長連續元素序列的長度。

您必須編寫一個在 O(n) 時間內運行的算法。

# 範例


Example 1:

```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```
Example 2:

```
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```



# 解題思路
1.紀錄每個連續數的長度
# Solution
```javascript
var longestConsecutive = function(nums) {
    let dict = {};
    nums.forEach((item) => {
        dict[item] = 1;
    })
    let ans =0;
    for(let i=0; i<nums.length; i++) {
        let seq = 0;  
        let temp = nums[i];
        if(dict[temp]) {
            while(dict[temp]) {
                seq = seq + Number(dict[temp]);
                if(dict[temp] > 1) break;
                temp--;
            }
        }
        dict[nums[i]] = seq;
        ans = Math.max(ans, seq);
    }
    return ans;
};
```