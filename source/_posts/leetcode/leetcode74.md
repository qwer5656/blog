---
title: Javascript(leetcode#74) Search a 2D Matrix
date: 2022-08-18 13:23:32
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
<!--more-->


# 翻譯
編寫一個在 m x n 整數矩陣矩陣中搜索值目標的高效算法。該矩陣具有以下性質：

每行中的整數從左到右排序。
每行的第一個整數大於前一行的最後一個整數。



# 範例

Example 1
![example](../image/leetcode/leetcode74_1.jpg "example")
```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
```



Example 2
![example](../image/leetcode/leetcode74_2.jpg "example")
```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
```



# 解題思路
1.利用二分法求解
# Solution
Code 1 :
```Javascript
var searchMatrix = function(matrix, target) {
    let m=matrix[0].length;
    let n=matrix.length-1;

    let x=m-1;
    let y=0;
    while(x>=0&&y<=n){
        let val=matrix[y][x];
        if(target==val){
            return true;
        }
        else if(target>val){
            y++;
        }
        else if(target<val){
            x--;
        }
    }

    return false;
};

```