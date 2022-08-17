---
title: Javascript(leetcode#22) Generate Parentheses
date: 2022-08-02 15:55:05
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


<!--more-->

# 翻譯

給定 n 對括號，編寫一個函數來生成格式正確的括號的所有組合。

# 範例

Example 1

```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```

Example 2

```
Input: n = 1
Output: ["()"]
```



# 解題思路


# Solution
Code 1 :
```Javascript
var generateParenthesis = function (n) {
    let res = [];
    function helper(s, l, r) {
      if (l === 0 && r === 0) res.push(s);
      if (l > 0) helper(s + "(", l - 1, r);
      if (r > l) helper(s + ")", l, r - 1);
      return res;
    }
    return helper("", n, n);
    
  };
```