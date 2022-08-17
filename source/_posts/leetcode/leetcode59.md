---
title: Javascript(leetcode#59) Spiral Matrix II
date: 2022-08-16 10:36:52
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
<!--more-->
# 翻譯
給定一個正整數 n，生成一個 n x n 矩陣，其中以螺旋順序填充從 1 到 n2 的元素。



# 範例

Example 1
![Example](../image/leetcode/leetcode59.jpg "Example")
```
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
```

Example 2
```
Input: n = 1
Output: [[1]]
```
# 解題思路
1.先建立好n*n的矩陣
2.自訂4個方向，依序填入數字
# Solution
Code 1 :
```Javascript
var generateMatrix = function (n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Array(n).fill(0));
  }
  let count = n * n;
  let num = 1;
  let i = 0;
  let j = 0;
  let dir = "right";
  while (num <= count) {

    if (dir == "right") {
      arr[i][j] = num;
      j++;
      if (j >= n || arr[i][j] != 0) {
        dir = "down";
        j = j - 1;
        i++;
      }
    }
    else if (dir == "down") {
      arr[i][j] = num;
      i++;
      if (i >= n || arr[i][j] != 0) {
        i = i - 1;
        dir = "left";
        j--;
      }
    }
    else if (dir == "left") {
      arr[i][j] = num;
      j--;
      if (j < 0 || arr[i][j] != 0) {
        j = j + 1;
        dir = "top";
        i--;
      }
    }
    else if (dir == "top") {

      arr[i][j] = num;
      i--;

      if (i < 0 || arr[i][j] != 0) {
        i = i + 1;
        dir = "right";
        j++;
      }
    }
    num++;
  }
  return arr;

};

```