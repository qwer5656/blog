---
title: Javascript(leetcode#28)  Implement strStr()
date: 2022-08-04 10:09:09
categories:
- Leetcode 
- Leetcode Easy  
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**

# 題目
Implement strStr().

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
<!--more-->
# 翻譯

實現 strStr()。

給定兩個字符串 needle 和 haystack，返回 haystack 中第一次出現 needle 的索引，如果 needle 不是 haystack 的一部分，則返回 -1。

澄清：

當 needle 為空字符串時，我們應該返回什麼？這是面試時問的好問題。

為了解決這個問題，當 needle 為空字符串時，我們將返回 0。這與 C 的 strstr() 和 Java 的 indexOf() 一致。

# 範例

Example 1:
```
Input: haystack = "hello", needle = "ll"
Output: 2

```

Example 2:
```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

# 解題思路
1.先判斷是否為空及長度是否超過比對字串大小
2.haystack和needle第一個比對到最後一個都為一樣時才返回開始的index

# Solution
Code 1 :
```Javascript
var strStr = function (haystack, needle) {
    if (needle == "") {
        return 0;
    }
    if(needle.length>haystack.length){
        return -1;
    }
    let start = -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let judge = true;
            for (let j = 1; j < needle.length; j++) {
                if (needle[j] !== haystack[i + j]) {
                    judge = false;
                    break;
                }
            }
            if (judge == true) {
                start = i;
                break;
            }
        }
    }
    return start;

};


```