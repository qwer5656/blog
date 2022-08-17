---
title: Javascript(Leetcode#8) String to Integer (atoi)
date: 2022-07-28 09:16:31
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目

Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

Requirements for atoi:
The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.

<!--more-->

# 翻譯

實作atoi將字串轉成int。

提示：小心仔細的考慮所有可能的輸入，如果你想挑戰自己，不要看下面的文字，直接想可能的輸入有哪些就可以開始寫了。

注意：這題目的輸入值有各種組合，你要先收集任何可能的輸入。

atoi的需求：
首先輸入的開頭可能是一連串的空白，因此要先找到第一個非空白字元。然後從這個字元開始可能會有正負號在數字的前面，將這些字串轉換成數字。

如果在數字後面有出現其他非數字的符號，因為他們對值沒有影響，可以忽略這些符號。

如果第一個非空白字元不是一個合法的int整數，或者字串裡面都是空白字元，那也視為不合法的輸入。

不合法的輸入回傳0，如果轉換後的數字num > INT_MAX (2147483647) 回傳2147483647， num < INT_MIN (-2147483648) 回傳 -2147483648

# 範例

Example 1

```
Input: s = "42"
Output: 42
Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-2^31, 2^31 - 1], the final result is 42.
```

Example 2

```
Input: s = "   -42"
Output: -42
Explanation:
Step 1: "   -42" (leading whitespace is read and ignored)
            ^
Step 2: "   -42" ('-' is read, so the result should be negative)
             ^
Step 3: "   -42" ("42" is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-2^31, 2^31 - 1], the final result is -42.
```


Example 2

```
Input: s = "4193 with words"
Output: 4193
Explanation:
Step 1: "4193 with words" (no characters read because there is no leading whitespace)
         ^
Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
             ^
The parsed integer is 4193.
Since 4193 is in the range [-2^31, 2^31 - 1], the final result is 4193.
```


# 解題思路
1.判定是否為空白如是空白繼續前進
2.判斷正負號
3.判定是否為數字
4.非數字時直接跳出迴圈
5.判定是否超出範圍



# Solution

Code 1 :
```javascript
var myAtoi = function(s) {
    let reg=/[0-9]/;
    let k=1;
    let num=0;
    let str="";
    while(s[num]==' '){
        num++;
    }
    s=s.slice(num);
    if(s[0]=='-'||s[0]=="+"){
      
        if(s[0]=="-"){
            k=-1;
        }
        s=s.slice(1);
    }

    for(let i=0;i<s.length;i++){

        if(reg.test(s[i])){
            str+=s[i];
        }
        
        else{
            
            break;
        }
    }
    let val=str*k;
    if(str==""){
        val=0;
    }
    if(val>Math.pow(2,31)-1){
        val=Math.pow(2,31)-1;
    }
    if(val<-Math.pow(2,31)){
        val=-Math.pow(2,31);
    }

   return val;

};
```



