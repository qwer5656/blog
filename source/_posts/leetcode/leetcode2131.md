---
title: Javascript(leetcode#2131) Longest Palindrome by Concatenating Two Letter Words
date:  2022-11-03 10:33:10
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
You are given an array of strings words. Each element of words consists of two lowercase English letters.

Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.

Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.

A palindrome is a string that reads the same forward and backward.
<!--more-->


# 翻譯
給你一個字符串單詞數組。單詞的每個元素由兩個小寫英文字母組成。

通過從單詞中選擇一些元素並以任意順序連接它們來創建可能的最長回文。每個元素最多可以選擇一次。

返回您可以創建的最長回文的長度。如果不可能創建任何回文，則返回 0。

回文是一個向前和向後讀取相同的字符串。



# 範例

Example 1:

```
Input: words = ["lc","cl","gg"]
Output: 6
Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
Note that "clgglc" is another longest palindrome that can be created.
```


Example 2:

```
Input: words = ["ab","ty","yt","lc","cl","ab"]
Output: 8
Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
Note that "lcyttycl" is another longest palindrome that can be created.
```


Example 3:

```
Input: words = ["cc","ll","xx"]
Output: 2
Explanation: One longest palindrome is "cc", of length 2.
Note that "ll" is another longest palindrome that can be created, and so is "xx".
```



# 解題思路
1. 設一個stack存疊字的英文
2. obj存回文的字串判斷是否有相對應的回文
3. sum計算他們的總和

# 程式碼

```javascript
var longestPalindrome = function (words) {
    let obj = {};
    let stack = [];
    let sum = 0;
    let check = 0;
    for (let i = 0; i < words.length; i++) {
        let val = words[i];
        if (!obj[val]) {
            if (val[0] === val[1]) {
                if (stack.indexOf(val) != -1) {
                    stack.splice(stack.indexOf(val), 1);
                    sum += 4;
                } else {
                    stack.push(val);
                }
            }
            else {
                let str = val[1] + val[0];
                if (obj[str]) {
                    obj[str].num++;
                } else {
                    obj[str] = {
                        val,
                        num: 1
                    };
                }
            }
        }
        else {
            if (obj[val].num > 0) {
                sum += 4;
                check += 4;
                obj[val].num--;
            } else {
                let str = val[1] + val[0];
                if (obj[str]) {
                    obj[str].num++;
                } else {
                    obj[str] = {
                        val,
                        num: 1
                    };
                }
            }
        }
    }
    if (stack.length != 0) {
        sum += 2;
    }
    return sum;
};
```


