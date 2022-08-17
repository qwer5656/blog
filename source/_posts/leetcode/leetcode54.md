---
title: Javascript(leetcode#54) Spiral Matrix
date: 2022-08-15 11:34:01
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Given an m x n matrix, return all elements of the matrix in spiral order.

<!--more-->
# 翻譯
給定一個 m x n 矩陣，以螺旋順序返回矩陣的所有元素。


Example 1:
![example](../image/leetcode/leetcode54_1.jpg "example")
```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
```


Example 2:
![example](../image/leetcode/leetcode54_2.jpg "example")
```
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

# 解題思路
1.方向為右下左上，往右時上面會多一層，往下時右邊會多一層，往左時下面會多一層，往上時左邊會多層，以此類推

# Solution
Code 1 :
```Javascript
var spiralOrder = function (matrix) {


  let dir = "right";
  let arr = [];
  let x = 0;
  let y = 0;
  let width = matrix[0].length - 1;
  let rightcell = 0;
  let downcell = 0;
  let lefthell = 0;
  let topcell = 0;
  let height = matrix.length - 1;
  let val;
  let count=0;
  let sum=(width+1)*(height+1);
  while (count<sum) {
    console.log(dir);
    switch (dir) {
      case "right":
        val = matrix[x][y];
        y++;
        if (y > width - rightcell) {
          y = width - rightcell;
          topcell++;
          x = topcell;
          dir = "down";
        }
        arr.push(val);
        break;
      case "down":
        val = matrix[x][y];
        x++;
        if (x > height - downcell) {
          x = height - downcell;
          rightcell++;
          y = width - rightcell;
          dir = "left";
        }
        arr.push(val);
        break;
      case "left":
        val = matrix[x][y];
        y--;
        if (y < 0 + lefthell) {
          y = 0 + lefthell;
          downcell++;
          x = height - downcell;
          dir = "top";
          console.log(x,y);
        }
        arr.push(val);
        break;
      case "top":
         val = matrix[x][y];
         x--;
        if (x < 0 + topcell) {
          x = 0 + topcell;
          lefthell++;
          y = lefthell;
          dir = "right";
        }
        arr.push(val);
        break;


    }
   
    count++;
  }
  return arr;

};

```