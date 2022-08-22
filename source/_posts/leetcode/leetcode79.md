---
title: Javascript(leetcode#79) Word Search
date: 2022-08-19 08:31:52
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
<!--more-->
# 翻譯
給定一個 m x n 的字符板網格和一個字符串單詞，如果單詞存在於網格中，則返回 true。

單詞可以由順序相鄰單元格的字母構成，其中相鄰單元格水平或垂直相鄰。同一個字母單元格不能多次使用。



# 範例

Example 1
![example](../image/leetcode/leetcode79_1.jpg "example")
```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
```

Example 2
![example](../image/leetcode/leetcode79_2.jpg "example")
```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
```

Example 3
![example](../image/leetcode/leetcode79_3.jpg "example")
```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
```


# 解題思路
1.利用遞迴求解
# Solution
Code 1 :
```Javascript
const exist = (B, W) => {
    for (let i = 0; i < B.length; i++) {
        for (let j = 0; j < B[i].length; j++) {
            if (W[0]==B[i][j]&&search(B, W, i, j, 0)) return true;
        }
    }
    return false;
};

const search = (B, W, row, col, wIdx) => {
    if (wIdx === W.length) return true;
    if (row < 0 || row >= B.length || col < 0 || col >= B[row].length) return false;

    if (W[wIdx] === B[row][col]) {
        B[row][col] = '#'; // Visited
        if (
            search(B, W, row + 1, col, wIdx + 1) ||
            search(B, W, row - 1, col, wIdx + 1) ||
            search(B, W, row, col + 1, wIdx + 1) ||
            search(B, W, row, col - 1, wIdx + 1)
        )
            return true;
        B[row][col] = W[wIdx];
    }
    return false;
};
```