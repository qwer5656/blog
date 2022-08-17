---
title: Javascript(leetcode#13)  Roman to Integer
date: 2022-08-01 15:04:32
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**

# 題目

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

<!--more-->

羅馬數字由七個不同的符號表示：I、V、X、L、C、D 和 M。

# 翻譯

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

例如，2 用羅馬數字寫成 II，只是兩個加在一起。 12寫成XII，就是X+II。數字 27 寫作 XXVII，即 XX + V + II。

羅馬數字通常從左到右從大到小寫。但是，四的數字不是 IIII。相反，數字四寫為 IV。因為一個在五個之前，所以我們減去它得到四個。同樣的原則也適用於數字九，它寫成 IX。有六個使用減法的實例：

I 可以放在 V (5) 和 X (10) 之前，組成 4 和 9。
X 可以放在 L (50) 和 C (100) 之前，組成 40 和 90。
C可以放在D（500）和M（1000）之前，組成400和900。
給定一個羅馬數字，將其轉換為整數。

# 範例


Example 1

```
Input: s = "III"
Output: 3
Explanation: III = 3.
```

Example 2

```
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

Example 3

```
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```


# 解題思路
1.先把的羅馬數字規則存到一個物件裡
2.特殊規則為後面的羅馬數字大於前面時，須由大減小得到新的數字


# Solution
Code 1 :
```javascript
var romanToInt = function(str) {
      let obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] < obj[str[i + 1]] && i != str.length - 1) {
            num += obj[str[i + 1]] - obj[str[i]];
            i++;
        }
        else {
            num += obj[str[i]];
        }
    }
    return num;
};



```