---
title: Javascript(leetcode#17) Letter Combinations of a Phone Number 
date: 2022-08-02 10:51:37
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



![example](../image/leetcode/leetcode17.png "example")

<!--more-->

# 翻譯
給定一個包含 2-9 數字的字符串，返回該數字可以表示的所有可能的字母組合。以任意順序返回答案。

下面給出了數字到字母的映射（就像在電話按鈕上一樣）。請注意，1 不映射到任何字母。


# 範例

Example 1

```
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

Example 2

```
Input: digits = ""
Output: []
```

Example 3

```
Input: digits = "2"
Output: ["a","b","c"]
```


# 解題思路
1.可將組合分解成較小的組合case
2.再一較小的組合case一層層增加

# Solution
Code 1 :
```Javascript
var letterCombinations = function(digits) {
    let obj={
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    }
    let combs=digits?[""]:[];
    for(let digit of digits){
        let newval=[];
       for(let comb of combs){
          for(let objitem of obj[digit]){
            newval.push(comb+objitem);
          }
       }
       combs=newval;
    }
    return combs;
};

```