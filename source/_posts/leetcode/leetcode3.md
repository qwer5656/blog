---
title: Javascript(Leetcode#3) Longest Substring Without Repeating Characters
date: 2022-07-27 08:53:45
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Given a string s, find the length of the longest substring without repeating characters.

<!--more-->

# 翻譯


給定一個字串s，找到不重複字符的最長子串的長度


# 範例

Example 1

{% codeblock %}
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
{% endcodeblock %}

Example 2

{% codeblock %}
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
{% endcodeblock %}

Example 3

{% codeblock %}
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
{% endcodeblock %}

# 解題思路
1.如果字串長度為1時直接回傳長度

2.定義一個暫存字串和紀錄最長的變數

3.用迴圈跑字串，暫存字串不包含當下字浮，若不包含將字浮加到暫存字串裡，跟最大長度做比較，若包含將暫存字串切掉重複的字浮產生新的字浮。

# Solution

Code 1 :
```javascript
function lengthOfLongestSubstring(str) {
    if (str.length == 1) {
        return 1;
    }
    let chache = '';
    let maxlength = 0;

    for (let i = 0; i < str.length; i++) {
        let curchar = str[i];
        if (chache.indexOf(curchar) == -1) {
            chache += curchar;
            if (maxlength < chache.length) {
                maxlength = chache.length;
            }
        }
        else {
            chache = chache.substring(chache.indexOf(curchar) + 1);
            chache += curchar;
        }

    }
    return maxlength;
}
```


Code 2 :
```javascript
function lengthOfLongestSubstring(str) {
    if (str.length == 1) {
        return 1;
    }
    let maxlength = 0;
    let chache = "";
    let endindex = 0;
    while (endindex < str.length) {
        let curchar = str[i];
        if (chache.indexOf(curchar) == -1) {
            chache += curchar;
            if (chache.length > maxlength) {
                maxlength = chache.length;
            }
        }
        else {
            chache = chache.substring(chache.indexOf(curchar) + 1);
            chache += curchar;
        }
        endindex++;
    }

    return maxlength;


}
```