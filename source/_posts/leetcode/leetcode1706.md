---
title: Javascript(leetcode#1706) Where Will the Ball Fall
date:  2022-11-01 16:00:29
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
You have a 2-D grid of size m x n representing a box, and you have n balls. The box is open on the top and bottom sides.

Each cell in the box has a diagonal board spanning two corners of the cell that can redirect a ball to the right or to the left.

A board that redirects the ball to the right spans the top-left corner to the bottom-right corner and is represented in the grid as 1.
A board that redirects the ball to the left spans the top-right corner to the bottom-left corner and is represented in the grid as -1.
We drop one ball at the top of each column of the box. Each ball can get stuck in the box or fall out of the bottom. A ball gets stuck if it hits a "V" shaped pattern between two boards or if a board redirects the ball into either wall of the box.

Return an array answer of size n where answer[i] is the column that the ball falls out of at the bottom after dropping the ball from the ith column at the top, or -1 if the ball gets stuck in the box.
<!--more-->


# 翻譯
你有一個大小為 m x n 的二維網格，代表一個盒子，你有 n 個球。盒子的頂部和底部都是打開的。

盒子中的每個單元格都有一個橫跨單元格兩個角的對角板，可以將球重定向到右側或左側。

將球重定向到右側的棋盤跨越左上角到右下角，並在網格中表示為 1。
將球重定向到左側的棋盤跨越右上角到左下角，並在網格中表示為 -1。
我們在盒子每一列的頂部放一個球。每個球都可能卡在盒子里或從底部掉出來。如果球擊中兩個板之間的“V”形圖案，或者如果板將球重定向到盒子的任一壁，則球會被卡住。

返回一個大小為 n 的數組 answer，其中 answer[i] 是球從頂部的第 i 列掉落後從底部掉出的列，如果球卡在盒子裡，則返回 -1。



# 範例

Example 1:

```
Input: grid = [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]
Output: [1,-1,-1,-1,-1]
Explanation: This example is shown in the photo.
Ball b0 is dropped at column 0 and falls out of the box at column 1.
Ball b1 is dropped at column 1 and will get stuck in the box between column 2 and 3 and row 1.
Ball b2 is dropped at column 2 and will get stuck on the box between column 2 and 3 and row 0.
Ball b3 is dropped at column 3 and will get stuck on the box between column 2 and 3 and row 0.
Ball b4 is dropped at column 4 and will get stuck on the box between column 2 and 3 and row 1.
```


Example 2:

```
Input: grid = [[-1]]
Output: [-1]
Explanation: The ball gets stuck against the left wall.
```


Example 3:

```
Input: grid = [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]
Output: [0,1,2,3,4,-1]
```



# 解題思路
1. 檢查當前位置是否牆壁閉合
2. 檢查最邊牆邊是否卡牆
3. 判斷是否卡牆
4. 檢查是否成功，成功將他存入arr

# 程式碼

```javascript
var findBall = function (matrix) {
    let arr = [];
    let checkres = function (x, y) {
        if (matrix[x][y] == 1) {
            if (y == matrix[0].length - 1) {
                return false;
            }
            else if (matrix[x][y] !== matrix[x][y + 1]) {
                return false;
            }
            x++;
            y++;
        }
        else if (matrix[x][y] == -1) {
            if (y == 0) {
                return false;
            }
            else if (matrix[x][y] !== matrix[x][y - 1]) {
                return false;
            }
            x++;
            y--;
        }
        if (x > matrix.length - 1) {
            arr.push(y);
            return true;
        }
        return checkres(x, y);
    }
    for (let i = 0; i < matrix[0].length; i++) {
        if (checkres(0, i) == false) {
            arr.push(-1);
        }

    }
    return arr;
};


```