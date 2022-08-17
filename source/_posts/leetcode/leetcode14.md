---
title: Javascript(leetcode#14)  Longest Common Prefix
date: 2022-08-01 15:10:06
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**

# 題目
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

<!--more-->

# 翻譯


編寫一個函數來查找字符串數組中最長的公共前綴字符串。

如果沒有公共前綴，則返回一個空字符串""

# 範例

Example 1

```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

Example 2

```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```



# 解題思路
1.從第一個陣列第一個字比對後面的陣列


# Solution
Code 1 :
```javascript
var longestCommonPrefix = function (strs) {
    if (strs.length <= 0) return "";
    let first = strs[0];
    let checkstr = true;
    let len = "";

    for (var i = 0; i < first.length; i++) {
        let str = first[i];

        for (var y = 0; y < strs.length; y++) {

            if (str != strs[y][i]) {
                checkstr = false;
                break;
            }
        }
        if (checkstr == false) {
            break;
        }
        len += str;


    }
    return len;
};
```


