---
title: Javascript(Leetcode#7) Reverse Integer
date: 2022-07-28 08:41:05
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
<!--more-->

# 翻譯

給定一個帶符號的 32 位整數 x，返回 x 的數字反轉。如果反轉 x 導致值超出有符號的 32 位整數範圍 [-2^31, 2^31 - 1]，則返回 0。

假設環境不允許您存儲 64 位整數（有符號或無符號）


# 範例

Example 1

```
Input: x = 123
Output: 321
```

Example 2

```
Input: x = -123
Output: -321
```

Example 3

```
Input: x = 120
Output: 21
```

# 解題思路
1.將數字變成字串
2.判斷是否為負的整數
3.把負值提出再跑反向迴圈
4.判定是否超出範圍

# Solution

Code 1 :
```javascript
var reverse = function(x) {
    let k=1;
    if(x<0){
        k=-1;
    }
    let str=Math.abs(x).toString();
    let tempstr="";
     for(let i=str.length-1;i>=0;i--){
         tempstr+=str[i];
     }
 
     return Number(tempstr)>(Math.pow(2,31)-1)?0:tempstr*k;
 
 
 };
```


Code 2 :
```javascript
var reverse = function(x) {

    var k =1;
    if(x<0){
     k=-1;
    }
    var res = Number(String(Math.abs(x)).split('').reverse().join(''));
    return res>Math.pow(2,31)?0:res*k;
};
```