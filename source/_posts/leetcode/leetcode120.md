---
title: Javascript(leetcode#120) Triangle
date:  2022-09-26 10:14:56
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
<!--more-->
# 翻譯
給定一個三角形數組，返回從上到下的最小路徑和。

對於每個步驟，您可以移動到下一行的相鄰編號。 更正式地說，如果您在當前行的索引 i 上，您可以移動到下一行的索引 i 或索引 i + 1。


# 範例
Example 1:
```
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
```

Example 2:
```
Input: triangle = [[-10]]
Output: -10
```

# 解題思路
1.利用動態規劃，找出規則
2.求到規則為
  1.j==0，新的值會=f(i-1,j)+f(i,j);
  2.j==triangle[i].length - 1，新的值會=f(i-1,j)+f(i-1,j-1);
  3.其他，新的值會=f(i-1,j)+取最小( f(i-1,j-1) OR f(i-1,j) );
3 最後在從(triangle.length - 1)陣列中取最小的數字
# Solution
```javascript
var minimumTotal = function (triangle) {
    let min = triangle[0][0];
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j == 0) {
                triangle[i][j] += triangle[i - 1][j];
            }
            else if (j == triangle[i].length - 1) {
                triangle[i][j] += triangle[i - 1][j - 1];

            }
            else {
                triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
            }
        }
        if (i === triangle.length - 1) {
            min = Math.min(...triangle[i]);
        }
    }
    return min;
};
```