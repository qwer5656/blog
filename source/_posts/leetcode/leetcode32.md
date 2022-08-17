---
title: Javascript(leetcode#32) Longest Valid Parentheses
date: 2022-08-05 09:43:08
categories: 
- Leetcode 
- Leetcode Hard 
tags:
- Leetcode
- Javascript
---

**Difficult:Hard**


# 題目
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
<!--more-->
# 翻譯
給定一個僅包含字符 '(' 和 ')' 的字符串，找出最長有效（格式正確）括號子字符串的長度。


# 範例

Example 1:
```
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
```

Example 2:
```
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
```

Example 3:
```
Input: s = ""
Output: 0
```


# 解題思路
1.如果為(放入陣列裡
2.若為)時
 1.陣列裡面沒東西時將最後的位置移到那
 2.若拿掉陣列的(為空時將i-index去跟max比較
 3.若拿掉陣列的(為不空時去跟i-陣列[陣列.length-1]跟max比較
# Solution
Code 1 :
```Javascript
var longestValidParentheses = function (s) {
    let t = [];
    let index = -1;
    let max = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "(")
            t.push(i);
        else {
            if (t.length == 0) {
                index = i;
            }
            else {
                t.pop();
                if (t.length == 0) {
                    max = Math.max(max, i - index);
                }
                else {
                    max = Math.max(max, i - t[t.length - 1]);
                }

            }
        }

    }
    return max;
};

```