---
title: Javascript(leetcode#125) Valid Palindrome
date:  2022-09-30 14:43:27
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**



# 題目
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
<!--more-->
# 翻譯
一個短語是回文，如果在將所有大寫字母轉換為小寫字母並刪除所有非字母數字字符後，它向前和向後讀取相同。 字母數字字符包括字母和數字。

給定一個字符串 s，如果它是回文則返回 true，否則返回 false。


# 範例

Example 1:

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```


Example 2:

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

Example 3:

```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

# 解題思路
1.先將非數字及英文字母的符號去掉
2.判斷是否為回文

# Solution
```javascript
    let str=s.replace(/[^a-z|^A-Z|^\d]/g,"").toLocaleLowerCase();
    let start=0;
    let end=str.length-1;
    while(start<end){
        if(str[start]!=str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
```