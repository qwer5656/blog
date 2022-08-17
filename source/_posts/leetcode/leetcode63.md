---
title: Javascript(leetcode#63) Unique Paths II
date: 2022-08-17 13:05:32
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 * 109.
<!--more-->
# 翻譯
給定一個 m x n 整數數組網格。最初有一個機器人位於左上角（即 grid[0][0]）。機器人試圖移動到右下角（即 grid[m-1][n-1]）。機器人只能在任何時間點向下或向右移動。

障礙物和空間在網格中分別標記為 1 或 0。機器人走的路徑不能包括任何作為障礙物的正方形。

返回機器人到達右下角可以走的唯一路徑的數量。

生成測試用例以使答案小於或等於 2 * 109。


# 範例

Example 1
![example](../image/leetcode/leetcode63_1.jpg "example")
```
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
```


Example 2
![example](../image/leetcode/leetcode63_2.jpg "example")
```
Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
```

# 解題思路
1.利用動態規劃求解
# Solution
Code 1 :
```Javascript
var uniquePathsWithObstacles = function (obstacleGrid) {
    let n = obstacleGrid[0].length;
    let m = obstacleGrid.length;
    if (obstacleGrid[m - 1][n - 1] == 1 || obstacleGrid[0][0] == 1) {
        return 0;
    }
    let xstone = false;
    let ystone = false;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] == 1) {
                obstacleGrid[i][j] = 'X';
                if (i == 0) {
                    ystone = true;
                }
                if (j == 0) {
                    xstone = true;
                }
            }
            else if (j == 0 && xstone == false) {
                obstacleGrid[i][j] = 1;
            }
            else if (i == 0 && ystone == false) {
                obstacleGrid[i][j] = 1;
            }

        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            let val = obstacleGrid[i - 1][j] == 'X' ? 0 : obstacleGrid[i - 1][j];
            let val2 = obstacleGrid[i][j - 1] == 'X' ? 0 : obstacleGrid[i][j - 1];
            if (obstacleGrid[i][j] != 'X') {
                obstacleGrid[i][j] = val + val2;
            }
        }
    }
    return obstacleGrid[m - 1][n - 1];
};
```
