---
title: Javascript(leetcode#151) Reverse Words in a String
date:  2022-10-21 09:26:00
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

<!--more-->

# 翻譯

給定一個輸入字符串 s，顛倒單詞的順序。

單詞被定義為一系列非空格字符。 s 中的單詞將至少用一個空格分隔。

以相反的順序返回由單個空格連接的單詞字符串。

請注意， s 可能包含前導或尾隨空格或兩個單詞之間的多個空格。返回的字符串應該只有一個空格分隔單詞。不要包含任何額外的空格。


# 範例
Example 1:


```
Input: s = "the sky is blue"
Output: "blue is sky the"
```



Example 2:
```
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
```


Example 3:
```
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
```




# 解題思路
1.設一個儲存陣列arr
2.若非空白時將它加入字串str，若遇到空白時結束並加入arr並將str=" "
3.迴圈結束將arr組合成字串


# 程式碼

```javascript
var reverseWords = function (s) {
  let arr = [];
  let str = "";
  for (let i = s.length - 1; i >= 0; i--) {
    let char = s[i];
    if (char != " ") {
      str = char + str;
    }
    else if (str != "" && char == " ") {
      arr.push(str);
      str = "";
    }
  }
  if (str != "") {
    arr.push(str);
  }
  return arr.join(" ");
};

```