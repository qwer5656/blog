---
title: Javascript(leetcode#36) Valid Sudoku
date: 2022-08-05 14:15:40
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1.Each row must contain the digits 1-9 without repetition.
2.Each column must contain the digits 1-9 without repetition.
3.Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
<!--more-->
# 翻譯

確定 9 x 9 數獨板是否有效。只有填充的單元格需要根據以下規則進行驗證：

每行必須包含數字 1-9，不得重複。
每列必須包含數字 1-9，不得重複。
網格的九個 3 x 3 子框中的每一個都必須包含數字 1-9，且不得重複。
筆記：

數獨板（部分填充）可能是有效的，但不一定是可解的。
只有填充的單元格需要根據上述規則進行驗證。


# 範例

Example 1:
```
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
```


Example 2:
```
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
```


# 解題思路
1.直著檢查
2.橫的檢查
3.3x3方形檢查

# Solution
Code 1 :
```Javascript
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let arr = [];
        let linearr = [];
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != '.') {
                if (arr.indexOf(board[i][j]) == -1) {
                    arr.push(board[i][j]);
                } else {
                    return false;
                }
            }

            if (board[j][i] != '.') {
                if (linearr.indexOf(board[j][i]) == -1) {
                    linearr.push(board[j][i]);
                } else {
                    return false;
                }
            }
        }
    }
    for (let outerx = 0; outerx < 3; outerx++) {

        for (let outery = 0; outery < 3; outery++) {
            let squarearr = [];
            for (let x = 0 + 3 * outerx; x < 3 * outerx + 3; x++) {
                for (let y = 0 + 3 * outery; y < 3 * outery + 3; y++) {
                    if (board[y][x] != '.') {
                        if (squarearr.indexOf(board[y][x]) == -1) {
                            squarearr.push(board[y][x]);
                        } else {
                            return false;
                        }
                    }
                }
            }
        }
    }
    return true;
};
```