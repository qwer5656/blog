---
title: Javascript(leetcode#139) Word Break
date:  2022-10-13 11:22:44
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 前言
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
<!--more-->
# 翻譯
給定一個字符串 s 和一個字符串字典 wordDict，如果 s 可以分割成一個或多個字典單詞的空格分隔序列，則返回 true。

請注意，字典中的同一個詞可能會在分詞中重複使用多次。



# 範例

Exampele 1:

```
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
```

Example 2:

```
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
```

Example 3:

```
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
```


# 解題思路
1. str為空和set有值時回傳true
2. map有值返回map裡面的值

# 程式碼
```javascript
var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict);
    const dp  = new Map();
    const solve = (str = s) => {
        console.log(str);
        if(str == '' || set.has(str)) return true;
        if(dp.has(str)) return dp.get(str);
        
        let temp = '';
        for(let i = 0; i < str.length; i++) {
            temp += str[i];
            if(set.has(temp)) {
                if(solve(str.slice(i + 1))) {
                    dp.set(str, true);
                    return true;
                }
            }
        }
        dp.set(str, false);
        return false;
    }
    return solve();
};
```