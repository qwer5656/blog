---
title: Javascript(leetcode#38) Count and Say
date: 2022-08-05 15:23:10
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

For example, the saying and conversion for digit string "3322251":

![example](../image/leetcode/leetcode38.jpg "example")

Given a positive integer n, return the nth term of the count-and-say sequence.
<!--more-->
# 翻譯

count-and-say 序列是由遞歸公式定義的數字字符串序列：

countAndSay(1) = "1"
countAndSay(n) 是您從 countAndSay(n-1) 中“說出”數字字符串的方式，然後將其轉換為不同的數字字符串。
要確定如何“說”一個數字字符串，請將其拆分為最少數量的子字符串，以使每個子字符串恰好包含一個唯一數字。然後對於每個子字符串，說出位數，然後說出數字。最後，連接每個所說的數字。

例如數字字符串“3322251”的說法和轉換：

給定一個正整數 n，返回 count-and-say 序列的第 n 項。

# 範例
Example 1:
```
Input: n = 1
Output: "1"
Explanation: This is the base case.
```

Example 2:
```
Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
countAndSay(5) = say "1211" = one 2 + three 1 = "12" + "31" = "1231"
```

# 解題思路
1.將題目分成小問題
2.利用遞迴求解

# Solution
Code 1 :
```Javascript
var countAndSay = function(n) {
    if(n==1){
        return "1";
    }
        let before=countAndSay(n-1);
        let str="";
        let start=0;
        let count=1;
        while(start<before.length){
            if(before[start]==before[start+1]){
                count++;
                
            }else{

                str+=count+before[start];
                count=1;
            }       
            start++;
        }
        return str;
};

```