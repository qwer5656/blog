---
title: Javascript(leetcode#97)  Interleaving String
date: 2022-09-13 14:46:41
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where s and t are divided into n and m non-empty substrings respectively, such that:

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
Note: a + b is the concatenation of strings a and b.
<!--more-->


# 翻譯
給定字符串 s1、s2 和 s3，找出 s3 是否由 s1 和 s2 交織而成。

兩個字符串 s 和 t 的交錯是一種配置，其中 s 和 t 分別分為 n 和 m 個非空子字符串，使得：

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
交織是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或 t1 + s1 + t2 + s2 + t3 + s3 + ...
注意：a + b 是字符串 a 和 b 的連接。


# 範例
![example](../image/leetcode/leetcode97.jpg "example")
Example 1:
```
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Explanation: One way to obtain s3 is:
Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
Since s3 can be obtained by interleaving s1 and s2, we return true.
```

Example 2:
```
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.
```

Example 3:
```
Input: s1 = "", s2 = "", s3 = ""
Output: true
```

# 解題思路
1.利用DP來解
2.obj紀錄以跑過的狀態減少時間
# Solution
```javascript
var isInterleave = function (s1, s2, s3) {
   if (s1.length + s2.length != s3.length) {
      return false;
   }
   let obj = {};
   let dps = function (pos1, pos2) {
      if (obj[[pos1, pos2]] != undefined) return obj[[pos1, pos2]];
      if (pos1 == s1.length && pos2 == s2.length) {
         return true;
      }
      if (s1[pos1] === s3[pos1+pos2] && pos1 < s1.length && dps(pos1+1, pos2)) {
         return true;
      }
      if (s2[pos2] === s3[pos1+pos2] && pos2 < s2.length && dps(pos1, pos2+1)) {
         return true;
      }
      obj[[pos1, pos2]] = false;
      return false;
   }
   return dps(0,0);
};
```