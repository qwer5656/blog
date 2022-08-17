---
title: Javascript(leetcode#30)  Substring with Concatenation of All Words
date: 2022-08-04 10:56:45
categories: 
- Leetcode
- Leetcode Hard 
tags:
- Leetcode
- Javascript
---

**Difficult:Hard**

# 題目
You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.

You can return the answer in any order.
<!--more-->
# 翻譯
給你一個字符串 s 和一個長度相同的字符串數組。返回 s 中子字符串的所有起始索引，它是單詞中每個單詞的連接，恰好一次，以任何順序，並且沒有任何中間字符。

您可以按任何順序返回答案。

# 範例

Example 1:
```
Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.

```

Example 2:
```
Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []

```

Example 3:
```
Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
```


# 解題思路
1.從s第一個字依序和words中的陣列配對是否符合

# Solution
Code 1 :
```Javascript
var findSubstring = function (s, words) {
    let arr = [];
    let len = words[0].length;
    let next = 0;
    for (let i = 0; i < s.length; i++) {
        if(s.length-i<len*words.length){
            break;
         }
        let numbersCopy = [...words];
        let judge = true;
        next = 0;

        while (true) {
            let comparestr = s.slice(i + next, len + next + i);
            if (numbersCopy.indexOf(comparestr) != -1) {
                numbersCopy.splice(numbersCopy.indexOf(comparestr), 1);
            } else {
                judge = false;
                break;
            }
            next += len;
            if (numbersCopy.length == 0) {
                break;
            }
        }
        if (judge == true) {
            arr.push(i);
        }

    }
    return arr;


};
```