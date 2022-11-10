---
title: Javascript(leetcode#168) Excel Sheet Column Title
date:  2022-11-02 17:13:39
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**


# 題目
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

```

<!--more-->

# 翻譯
給定一個整數 columnNumber，返回其在 Excel 工作表中出現的相應列標題。

# 範例

Example 1:
```
Input: columnNumber = 1
Output: "A"
```


Example 2:
```
Input: columnNumber = 28
Output: "AB"
```



Example 3:
```
Input: columnNumber = 701
Output: "ZY"
```



# 解題思路
1. 取得charcode位置的字母
2. A-Z為26個字母

# 程式碼

```javascript
var convertToTitle = function(columnNumber) {
  const result = [];
  while(columnNumber > 0) {        
      columnNumber--;
      result.push(String.fromCharCode(columnNumber % 26 + 65));
      columnNumber = Math.floor(columnNumber / 26);
  }    
  return result.reverse().join('');    
};
```