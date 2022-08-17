---
title: Javascript(Leetcode#10) Regular Expression Matching
date: 2022-07-29 09:13:35
categories: 
- Leetcode 
- Leetcode Hard 
tags:
- Leetcode
- Javascript
---

**Difficult:Hard**

# 題目

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

<!--more-->

# 翻譯

給定一個輸入字符串 s 和一個模式 p，實現支持 '.' 的正則表達式匹配。和 '*' 其中：

'。'匹配任意單個字符。​​​​
'*' 匹配零個或多個前面的元素。
匹配應覆蓋整個輸入字符串（不是部分）。

# 範例

Example 1

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

Example 2

```
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

Example 3

```
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

# 解題思路
此題給了pattern (p)及string (s)，pattern裡的 . 符號可代表任意字元，而 * 符號可代表空值或前一個字元，要比對p是否可匹配組成s。

# Solution

Code 1 :
```javascript
  var isMatch = function(s, p) {
    s = ' ' + s
    p = ' ' + p
    const S=s.length
    const P=p.length
    
    const dp=new Array(S).fill(0).map(() => new Array(P).fill(0))
    
    dp[0][0]=1
    // m * s *
    // 0 1 0 1
    for (let j=2; j<P; j++) {
       dp[0][j] = dp[0][j-2]&& (p[j]==='*') ? 1 : 0
    }
    console.log(dp)
    for (let i=1; i<S; i++){
        for (let j=1; j< P; j++) {
            if (s[i] === p[j] || p[j]==='.') {
                dp[i][j]=dp[i-1][j-1]
            } else if (p[j] === '*') {
                
               // 1 m i s *
                //m 1 0 0 0
                //i 0 1 0 1
                //s 0 0 1 1
                //s 0 0 0 1
               dp[i][j]= dp[i][j-2] || (s[i]===p[j-1]||p[j-1]==='.') && dp[i-1][j]
            }
        }
    }
   
    return dp[S-1][P-1]==true
};

```

Code 2 :
```javascript
const isMatch = (s, p) => {
    if (p.length === 0 && s.length === 0) return true;
    if (p[1] === '*') {
      for (let i = 0; i < s.length && (p[0] === '.' || p[0] === s[i]); i++) {
        if (isMatch(s.slice(i + 1), p.slice(2))) return true;
      }
      return isMatch(s, p.slice(2));
    }
    return s.length && (p[0] === '.' || s[0] === p[0]) && isMatch(s.slice(1), p.slice(1));
  };

```
