---
title: Javascript(leetcode#11) Container With Most Water
date: 2022-08-01 08:53:39
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

<!--more-->

# 翻譯

給定一個長度為 n 的整數數組高度。繪製了 n 條垂直線，使得第 i 條線的兩個端點是 (i, 0) 和 (i, height[i])。

找到兩條線，它們與 x 軸一起形成一個容器，使得容器中的水最多。

返回容器可以存儲的最大水量。

請注意，您不能傾斜容器。

# 範例

Example 1


![example](../image/leetcode/leetcode11.PNG "example")

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

Example 2

```
Input: height = [1,1]
Output: 1
```



# 解題思路
1.兩個變數取最小值為高，兩個變數位置相差為寬
2.寬*高=面積，取得最大面積
3.依上續2點能得到，自身高離比自身高的柱子最大距離就是此柱子的能得到的最大面積

# Solution
Code 1 :
```javascript
let water = 0
let left = 0
let right = height.length - 1
while(left < right) {
    const area = Math.min(height[left], height[right]) * (right - left)
    water = Math.max(area, water)
    if (height[left] <= height[right]) left++
    else right--
}
return water
```
