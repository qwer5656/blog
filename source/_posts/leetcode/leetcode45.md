---
title: Javascript(leetcode#45)  Jump Game II
date: 2022-08-10 09:10:10
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.
<!--more-->
# 翻譯
給定一個非負整數數組 nums，您最初位於數組的第一個索引處。

數組中的每個元素代表您在該位置的最大跳躍長度。

您的目標是以最少的跳躍次數達到最後一個索引。

您可以假設您始終可以到達最後一個索引。

# 範例
Example 1:
```
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

```

Example 2:
```
Input: nums = [2,3,0,1,4]
Output: 2
```


# 解題思路
1.已知最佳路線為i+nums[i]為最大時
# Solution
Code 1 :
```Javascript
var jump = function (a) {


  let far = 0;
  let jump = 0;
  let current = 0;

  for (let i = 0; i < a.length - 1; i++) {
    far = Math.max(far, a[i] + i);
    if (i === current) {
      current = far;
      jump++;
    }
  }

  return jump;

};

```

Code 2:
```Javascript
var jump = function (nums) {
  if (nums.length == 1) {
    return 0;
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
        if (nums[pos]+pos > max) {
          max = nums[pos]+pos;
          maxindex=pos;
        }
      }
    }
    if (end == true) {
     return sum;
    } else {
      return step(nums[maxindex],maxindex, len, sum);
    }

  }
  return step(nums[0], 0, len, 0);
  
};
```