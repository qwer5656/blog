---
title: Javascript(leetcode#91)  Decode Ways
date: 2022-08-29 08:41:22
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
A message containing letters from A-Z can be encoded into numbers using the following mapping:

```
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"

```

To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.

<!--more-->
# 翻譯
可以使用以下映射將包含 A-Z 字母的消息編碼為數字：

```
'A' -> “1”
“B”->“2”
...
“Z”->“26”

```

要解碼編碼消息，必須將所有數字分組，然後使用上述映射的反向映射回字母（可能有多種方式）。例如，“11106”可以映射為：

“AAJF”與分組 (1 1 10 6)
“KJF”與分組（11 10 6）
請注意，分組 (1 11 06) 無效，因為“06”不能映射到“F”，因為“6”與“06”不同。

給定一個只包含數字的字符串 s，返回解碼它的方法數。

生成測試用例以使答案適合 32 位整數。


# 範例

Example 1:
```
Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
```

Example 2:
```
Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
```

Example 3:
```
Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
```

# 解題思路
1.利用Dp演算法求解
# Solution
```Javascript
var numDecodings = function (s) {
   if (s.length === 0) return 0;
   let N = s.length;
   let dp = Array(N + 1).fill(0);
   dp[0] = 1;
   dp[1] = s[0] === '0' ? 0 : 1;
   for (let i = 2; i <= N; i++) {
      if (s[i - 1] !== '0') {
         dp[i] += dp[i - 1];
      }
      if (s[i - 2] === '1' || s[i - 2] === '2' && s[i - 1] <= '6') {
         dp[i] += dp[i - 2];
      }
   }
   return dp[N];
};
```

