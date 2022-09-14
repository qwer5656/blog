---
title: Javascript(leetcode#93)  Restore IP Addresses
date: 2022-09-12 09:16:15
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.
<!--more-->


# 翻譯
一個有效的 IP 地址正好由四個由單點分隔的整數組成。每個整數介於 0 和 255（含）之間，並且不能有前導零。

例如，“0.1.2.201”和“192.168.1.1”是有效的IP地址，但“0.011.255.245”、“192.168.1.312”和“192.168@1.1”是無效的IP地址。
給定一個只包含數字的字符串 s，返回所有可能的有效 IP 地址，這些地址可以通過在 s 中插入點來形成。您不得重新排序或刪除 s 中的任何數字。您可以按任何順序返回有效的 IP 地址。


# 範例

Example 1:
```
Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]
```

Example 2:
```
Input: s = "0000"
Output: ["0.0.0.0"]
```

Example 3:
```
Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
```

# 解題思路
1.先把數組長度的所有排列組合組出來
2.寫一個判定是否符合0-255及0不為前導的函數
3.將結果返回


# Solution
```javascript
var restoreIpAddresses = function (s) {
    let len = s.length;
    let arr = [];
    numarr(len, "", 0, arr);
    let finalarr = [];

    let judgeval = function (judgearr) {
        let start = 0;
        let arr = [];
        for (let i = 0; i < judgearr.length; i++) {
            let val = s.slice(start, start + parseInt(judgearr[i]));
            if (val < 0 || val > 255) {
                return false;
            }
            if (val[0] == 0 && val.length > 1) {
                return false;
            }
            start += parseInt(judgearr[i]);
            arr.push(val);
        }
        return arr.join(".");
    }

    for (let i = 0; i < arr.length; i++) {
        let str = judgeval(arr[i]);
        if (str != false) {
            finalarr.push(str);
        }
    }
    return finalarr;

};


function numarr(len, str, number, arr) {

    if (number > 4 || len < 0) {
        return false;
    }

    let one = str + "1";
    let two = str + "2";
    let three = str + "3";
    if (len - 1 >= 0) {
        numarr(len - 1, one, number + 1, arr);
    }
    if (len - 2 >= 0) {
        numarr(len - 2, two, number + 1, arr);
    }
    if (len - 3 >= 0) {
        numarr(len - 3, three, number + 1, arr);
    }

    if (number == 4 && len == 0) {
        arr.push(str.split(""));
    }
}
```
