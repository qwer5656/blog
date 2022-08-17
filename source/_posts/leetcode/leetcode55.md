---
title: Javascript(leetcode#55) Jump Game
date: 2022-08-15 13:51:24
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

<!--more-->

# 翻譯
給你一個整數數組 nums。您最初位於數組的第一個索引處，數組中的每個元素都代表您在該位置的最大跳躍長度。

如果可以到達最後一個索引，則返回 true，否則返回 false。


# 範例

Example 1
```
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

```

Example 2
```
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```



# 解題思路
1.照著最佳路線判斷是否能走完全部。

# Solution
Code 1 :
```Javascript
var canJump = function (nums) {
  if (nums.length == 1) {
    return true;
  }
  let len = nums.length - 1;
  let min = Infinity;
  function step(n, curindex, len, sum) {
    sum++;
    if (n <= 0 || sum >= min) {
      return;
    }
    let max = 0;
    let maxindex = [];
    let end = false;
    for (let i = 1; i <= n; i++) {
      let pos = curindex + i;
      if (pos >= len) {
        end = true;
        break;
      }
      else {
        if (nums[pos] + pos > max) {
          max = nums[pos] + pos;
          maxindex = pos;
        }
      }
    }
    if (end == true) {
      return sum;
    } else {
      return step(nums[maxindex], maxindex, len, sum);
    }

  }
  let judge = step(nums[0], 0, len, 0);
  if (judge == undefined) {
    return false;
  } else {
    return true;
  }
};
```