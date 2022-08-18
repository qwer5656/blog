---
title: Javascript(leetcode#70) Climbing Stairs
date: 2022-08-18 09:46:43
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**


# 題目
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
<!--more-->
# 翻譯
你正在爬樓梯。到達頂峰需要 n 步。

每次您可以爬 1 或 2 級台階。你可以通過多少種不同的方式爬上頂峰？


# 範例

Example 1
```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```


Example 2
```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

# 解題思路
1.動態規劃 走到N的走法為n-1或n-2得出f(n)=f(n-1)+f(n-2)
# Solution
Code 1 :
```Javascript
let arr=[];
var climbStairs = function(n) {
   
    if(n==1) return 1;
    if(n==2) return 2;
     
     if(!arr[n]) arr[n]=climbStairs(n-2)+climbStairs(n-1);
     return arr[n];
 
 };
```