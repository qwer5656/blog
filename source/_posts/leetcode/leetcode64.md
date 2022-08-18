---
title: Javascript(leetcode#64) Minimum Path Sum
date: 2022-08-17 13:37:18
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
<!--more-->
# 翻譯
給定一個填充有非負數的 m x n 網格，找到一條從左上角到右下角的路徑，該路徑最小化沿其路徑的所有數字的總和。

注意：您只能在任何時間點向下或向右移動。



# 範例

Example 1
![example](../image/leetcode/leetcode64.jpg "example")
```
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
```


Example 2
```
Input: grid = [[1,2,3],[4,5,6]]
Output: 12
```


# 解題思路
1.利用動態規劃求解
# Solution
Code 1 :
```Javascript
var minPathSum = function (grid) {
    let x = grid[0].length;
    let y = grid.length;
    let arr = [];
    for (let i = 0; i < y; i++) {
        let obj = [];
        for (let j = 0; j < x; j++) {
            obj.push(0);
        }
        arr[i] = obj;
    }
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            if (i == 0 && j == 0) {
                arr[i][j] = grid[i][j];
            } else {
                let top = Infinity;
                let left = Infinity;
                if (i - 1 >= 0) {
                    top = grid[i - 1][j];
                    if (arr[i - 1][j] != 0) {
                        top = arr[i - 1][j];
                    }
                }
                if (j - 1 >= 0) {
                    left = grid[i][j - 1];
                    if (arr[i][j - 1] != 0) {
                        left = arr[i][j - 1];
                    }
                }
                let min = Math.min(top, left);

                arr[i][j] = grid[i][j] + min;
            }
        }
    }
    return arr[y - 1][x - 1];
};
```
