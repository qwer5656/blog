---
title: Javascript(Leetcode#9) Palindrome Number
date: 2022-07-29 08:46:48
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**

# 題目

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

<!--more-->

# 翻譯

給定一個整數 x，如果 x 是回文整數，則返回 true。

當一個整數向後讀和向前讀一樣時，它就是一個回文數。

例如，121 是回文，而 123 不是。

# 範例

Example 1

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

Example 2

```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```


Example 3

```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

# 解題思路
1.小於0直接回傳false
2.建立一個右和左變數，兩個變數依序往前和往後比較
3.若有不相同時直接返回false,都相同時返回true
4.數字為偶數時，只需比到相差為1
5.奇數時，需比較相同位置

# Solution

Code 1 :
```javascript
var isPalindrome = function(x) {
    if(0>x){
        return false;
    }
    let right;
    let left=0;
    let judge=true;
    let str=x.toString();
    right=str.length-1;
    while(true){
        if(str[left]!=str[right]){
            judge=false;
            break;
        }
        if(left==right&&str.length%2==1){
            break;
        }
        if(left+1==right&&str.length%2==0){
            break;
        }
        left++;
        right--;
    }
    return judge;

};


```

Code 2 :
```javascript
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    return x.toString()===x.toString().split("").reverse().join("");
};

```