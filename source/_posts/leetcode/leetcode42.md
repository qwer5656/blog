---
title: Javascript(leetcode#42)  Trapping Rain Water
date: 2022-08-09 10:26:31
categories: 
- Leetcode 
- Leetcode Hard 
tags:
- Leetcode
- Javascript
---

**Difficult:Hard**

# 題目
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

<!--more-->
# 翻譯
給定 n 個非負整數，表示每個條的寬度為 1 的高程圖，計算下雨後它可以捕獲多少水。

# 範例
Example 1:
![example](../image/leetcode/leetcode42.png "example")
```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

Example 2:
```
Input: height = [4,2,0,3,2,5]
Output: 9
```


# 解題思路
1.左右邊比較大小，較小的一方往前移動。

# Solution
Code 1 :
```Javascript
var trap = function(height) {
    let [l, r, lmax, rmax, max] = [0, height.length-1, 0, 0, 0];
    while(l < r) {
        if(height[l] <= height[r]) {
            if(height[l] >= lmax) {
                lmax = height[l];
            } else {
                max += lmax-height[l];
            }
            l++;
        } else {
            if(height[r] >= rmax) {
                rmax = height[r];
            } else {
                max += rmax-height[r];
            }
            r--;
        }
        
    }
    return max;
};

```

Code 2 :
```Javascript
var trap = function (height) {
  let start = 0;
  let end = 0;
  let res = 0;
  while (start < height.length) {
    if (height[start] > 0) {
      let sum = 0;
      let secmax = 0;
      let secindex = -1;
      end = -1;
      for (let i = start + 1; i < height.length; i++) {
        if (height[i] >= height[start]) {
          end = i;
          break;
        } else {
          sum += height[i];
          if (height[i] > secmax) {
            secmax = height[i];
            secindex = i;
          }
        }

      }
      if (end != -1) {

        let val = (end - start - 1) * height[start] - sum;
        res += val;

        start = end - 1;
      } else {

        if (secindex - start > 1) {
          let secsum = 0;
          for (let i = start + 1; i < secindex; i++) {
            secsum += height[i];
          }
          let val = (secindex - start - 1) * height[secindex] - secsum;
          res += val;
          start = secindex - 1;
        }
      }

    }

    start++;
  }
  return res;
};

```