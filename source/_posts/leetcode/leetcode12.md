---
title: Javascript(leetcode#12) Integer to Roman
date: 2022-08-01 09:48:02
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

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
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.


<!--more-->

# 翻譯

羅馬數字由七個不同的符號表示：I、V、X、L、C、D 和 M。

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如，2 用羅馬數字寫成 II，只是兩個 1 相加。 12寫成XII，就是X+II。數字 27 寫作 XXVII，即 XX + V + II。

羅馬數字通常從左到右從大到小寫。但是，四的數字不是 IIII。相反，數字四寫為 IV。因為一個在五個之前，所以我們減去它得到四個。同樣的原則也適用於數字九，它寫成 IX。有六個使用減法的實例：

I 可以放在 V (5) 和 X (10) 之前，組成 4 和 9。
X 可以放在 L (50) 和 C (100) 之前，組成 40 和 90。
C可以放在D（500）和M（1000）之前，組成400和900。
給定一個整數，將其轉換為羅馬數字。

# 範例

Example 1

```
Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
```

Example 2

```
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
```

Example 3

```
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

```

# 解題思路
1.先把特利的羅馬數字列出來
2.依照數字去做組合從大到小



# Solution
Code 1 :
```javascript
var intToRoman = function(num) {
    let str='';
    let val=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let Romanstr=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

 

    for(let i=0;i<Romanstr.length;i++){
       
        while(num>=val[i]){

            num-=val[i];
            str+=Romanstr[i];

        }
      
       
    }


    return str;


};
```