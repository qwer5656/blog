---
title: Javascript(leetcode#1047) Remove All Adjacent Duplicates In String
date: 2022-11-10 09:14:16
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**


# 題目
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
<!--more-->

# 翻譯
給你一個由小寫英文字母組成的字符串 s。重複刪除包括選擇兩個相鄰且相等的字母並將它們刪除。

我們反复在 s 上進行重複刪除，直到我們不再可以為止。

在完成所有此類重複刪除後返回最終字符串。可以證明答案是獨一無二的。


# 範例

Example 1:
```
Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
```


Example 2:
```
Input: s = "azxxzy"
Output: "ay"
```


# 解題思路
1. 設一個stack將資料存入
2. 設一個迴圈和stack做比較，若stack不為空時及當前val與stack最後一個相等時，將最後一個數移除，不同時將它加入stack
3. 最後返回stack.join("")

# 程式碼

```javascript
var removeDuplicates = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let val = s[i];
        if (stack.length != 0 && stack[stack.length - 1] == val) {
            stack.pop();
        } else {
            stack.push(val);
        }
    }

    return stack.join("");
};
```