---
title: Javascript(leetcode#20)  Valid Parentheses
date: 2022-08-02 14:36:43
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**


# 題目
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


<!--more-->

# 翻譯
給定一個僅包含字符 '(', ')', '{', '}', '[' 和 ']' 的字符串 s，確定輸入字符串是否有效。

輸入字符串在以下情況下有效：

開括號必須用相同類型的括號閉合。
開括號必須以正確的順序閉合。

# 範例

Example 1

```
Input: s = "()"
Output: true
```

Example 2

```
Input: s = "()[]{}"
Output: true
```

Example 3

```
Input: s = "(]"
Output: false
```


# 解題思路
1.檢查是否為前墜的字元，是的話放入堆疊中
2.不是前墜的字元，跟堆疊中最後一個字比對
# Solution
Code 1 :
```Javascript
var isValid = function(s){
    let obj={
        "{":"}",
        "[":"]",
        "(":")",
    }
    let arr=[];
    for(let i=0;i<s.length;i++){
        let char=s[i];
       if(obj[char]){
         arr.push(obj[char]);
       }else{
         if(arr.pop()!=char){
           return false
         }
       }
    }
    return arr.length===0;
};
```