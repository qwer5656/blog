---
title: Javascript(leetcode#73) Set Matrix Zeroes
date: 2022-08-18 13:05:07
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.
<!--more-->

# 翻譯
給定一個 m x n 整數矩陣矩陣，如果一個元素為 0，則將其整行和整列設置為 0。

你必須在原地做。

# 範例

Example 1
![example](../image/leetcode/leetcode73_1.jpg "example")
```
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
```

Example 2
![example](../image/leetcode/leetcode73_2.jpg "example")
```
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```


# 解題思路
1. 將零的位置記錄起來
2. 將有零的位置橫和縱都改為0
# Solution
Code 1 :
```Javascript
var setZeroes = function (matrix) {
    let arr = [];
    let m = matrix[0].length;
    let n = matrix.length;
    let x = [];
    let y = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] == 0) {
                if (!x.includes(j)) {
                    x.push(j);
                }
                if (!y.includes(i)) {
                    y.push(i);
                }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (x.includes(j)) {
                matrix[i][j] = 0;
            }
            if (y.includes(i)) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};
```