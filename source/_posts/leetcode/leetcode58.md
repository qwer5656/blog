---
title: Javascript(leetcode#58) Length of Last Word
date: 2022-08-16 10:28:55
categories: 
- Leetcode 
- Leetcode Easy
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**

# 題目
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

<!--more-->

# 翻譯
給定一個由單詞和空格組成的字符串 s，返回字符串中最後一個單詞的長度。

單詞是僅由非空格字符組成的最大子串。



# 範例

Example 1
```
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
```

Example 2
```
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
```

Example 3
```
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
```



# 解題思路
1.從字串後面開始尋找
2.當找第一個非空白字元時開始記錄長度，再碰到空白字元時結束。
# Solution
Code 1 :
```Javascript
var lengthOfLastWord = function (s) {
  let len = 0;
  let judge = false;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == ' ') {
      if (judge == true) {
        break;
      }
    } else {
      len++;
      judge = true;
    }
  }
  return len;
};


```