---
title: Javascript(leetcode#130)  Surrounded Regions
date:  2022-10-03 15:24:02
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.
<!--more-->
 

# 翻譯
給定一個包含 'X' 和 'O' 的 m x n 矩陣板，捕獲所有被 'X' 4 方向包圍的區域。

通過將周圍區域中的所有“O”翻轉為“X”來捕獲一個區域。


# 例子

![Example](../image/leetcode/leetcode130.jpg "Example")
Example 1:
```
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Notice that an 'O' should not be flipped if:
- It is on the border, or
- It is adjacent to an 'O' that should not be flipped.
The bottom 'O' is on the border, so it is not flipped.
The other three 'O' form a surrounded region, so they are flipped.
```


Example2:
```
Input: board = [["X"]]
Output: [["X"]]
```


# 解題思路
1.利用遞迴解
2.分成小問題
3.找出條件
  1.上下左右都必須是X,
  2.若旁邊為牆壁時返回false
  3.若是上下左右是O時則將碰到(i,j)傳進遞迴裡判斷

# Solution
```javascript
var solve = function (board) {
    let listarr = [];
    let jude = function (board, arr, i, j) {
        if (i - 1 < 0 || i + 1 > board.length - 1 || j - 1 < 0 || j + 1 > board[i].length - 1) {
            return false;
        }
        if (board[i + 1][j] == "O" && arr[`${i+1},${j}`] == undefined) {
            arr[`${i+1},${j}`] = [i + 1, j];
            if (jude(board, arr, i + 1, j) == false) {
                return false;
            }
        }
        if (board[i - 1][j] == "O" && arr[`${i-1},${j}`] == undefined) {
            arr[`${i-1},${j}`] = [i - 1, j];

            if (jude(board, arr, i - 1, j) == false) {
                return false;
            }
        }
        if (board[i][j - 1] == "O" && arr[`${i},${j-1}`] == undefined) {
            arr[`${i},${j-1}`] = [i, j - 1];
            if (jude(board, arr, i, j - 1) == false) {
                return false;
            }
        }
        if (board[i][j + 1] == "O" && arr[`${i},${j+1}`] == undefined) {
            arr[`${i},${j+1}`] = [i, j + 1];
            if (jude(board, arr, i, j + 1) == false) {
                return false;
            }
        }
        return arr;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == "O") {
                let arr = {};
                arr[i + "," + j] = [i, j];
                let d = jude(board, arr, i, j);
                if (d != false) {
                    console.log(d);
                    for (let i in d) {
                        let sp = i.split(",");
                        board[sp[0]][sp[1]] = "X";
                    }
                }
            }
        }
    }
    return board;
};
```