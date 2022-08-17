---
title: Javascript(leetcode#48) Rotate Image
date: 2022-08-10 13:42:26
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
<!--more-->
# 翻譯
給定一個表示圖像的 n x n 2D 矩陣，將圖像旋轉 90 度（順時針）。

您必須就地旋轉圖像，這意味著您必須直接修改輸入的 2D 矩陣。不要分配另一個二維矩陣並進行旋轉。


# 範例
Example 1:
![example](../image/leetcode/leetcode48_mat1.jpg "example")
```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
```

Example 2:
![example](../image/leetcode/leetcode48_mat2.jpg "example")
```
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```


# 解題思路
1.規律 1到n的第1個index 從最後矩陣值依序填入
2.遵循規律繼續往前一個矩陣
# Solution
Code 1 :
```Javascript
var rotate = function(matrix) {
  let newarr= JSON.parse(JSON.stringify(matrix));
  let x=0,y;
    for(let i=0;i<matrix.length;i++){
      y=matrix.length-1;
      for(let j=0;j<matrix[i].length;j++){
        matrix[i][j]=newarr[y][x];
        y--;
       
      }
      x++;
    }
    return matrix;
};
```