---
title: Javascript(leetcode#67) Add Binary
date: 2022-08-17 15:28:36
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**


# 題目
Given two binary strings a and b, return their sum as a binary string.

<!--more-->
# 翻譯
給定兩個二進製字符串 a 和 b，將它們的和作為二進製字符串返回。




# 範例

Example 1
```
Input: a = "11", b = "1"
Output: "100"
```


Example 2
```
Input: a = "1010", b = "1011"
Output: "10101"
```


# 解題思路
1.從最後開始計算超過2進位
# Solution
Code 1 :
```Javascript
var addBinary = function (a, b) {

    let len = Math.max(a.length - 1, b.length - 1);
    let lens = 0;
    let str = [];
    let n = 0;
    while (lens <= len || n == 1) {
        let aval = parseInt(a[a.length - 1 - lens]) || 0;
        let bval = parseInt(b[b.length - 1 - lens]) || 0;
        let sum = aval + bval + n;
        if (sum > 1) {
            n = 1;
            sum %= 2;
        } else {
            n = 0;
        }
        str.unshift(sum);
        lens++;
    }
    return str.join("");
};

```