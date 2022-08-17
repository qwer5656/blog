---
title: Javascript(leetcode#62) Unique Paths
date: 2022-08-17 09:36:32
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

<!--more-->
# 翻譯
在 m x n 網格上有一個機器人。機器人最初位於左上角（即 grid[0][0]）。機器人試圖移動到右下角（即 grid[m - 1][n - 1]）。機器人只能在任何時間點向下或向右移動。

給定兩個整數 m 和 n，返回機器人可以到達右下角的可能唯一路徑的數量。

生成測試用例以使答案小於或等於 2 * 109。


# 範例

Example 1
![example](../image/leetcode/leetcode62.png "example")
```
Input: m = 3, n = 7
Output: 28
```


Example 2
```
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
```

# 解題思路
1.利用動態規劃求解
# Solution
Code 1 :
```Javascript
var uniquePaths = function(m, n) {
    let arr=[];
     for(let i=0;i<m;i++)
     {
         arr[i]=[];
         for(let j=0;j<n;j++){
             if(j==0){
                 arr[i].push(1);
             }
             else if(i==0){
                 arr[i].push(1);
             }
             else{
                 arr[i].push(0);
             }
         }
     }
     for(let i=1;i<m;i++)
     {
         for(let j=1;j<n;j++){
             arr[i][j]=arr[i-1][j]+arr[i][j-1];
         }
     }
     return arr[m-1][n-1];
 };
```


