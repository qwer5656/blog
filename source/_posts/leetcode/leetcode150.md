---
title: Javascript(leetcode#150) Evaluate Reverse Polish Notation
date:  2022-10-20 09:02:34
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

Note that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.
<!--more-->

# 翻譯

用逆波蘭表示法計算算術表達式的值。

有效的運算符是 +、-、* 和 /。 每個操作數可以是整數或另一個表達式。

請注意，兩個整數之間的除法應該向零截斷。

保證給定的 RPN 表達式始終有效。 這意味著表達式將始終計算結果，並且不會有任何除以零操作。

# 範例
Example 1:


```
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```



Example 2:
```
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```


Example 3:
```
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```




# 解題思路
1. 逆波蘭表示法(後綴表示法)
2. 例如：
a+b => a b +
a+(b-c) => a b c - +
a+d*(b-c) => a d b c - * +
a=1+3 => a 1 3 + =
3. 依上面規則寫出判斷

# 程式碼

```javascript
var evalRPN = function (tokens) {
    let arr = [];
    for (let i = 0; i < tokens.length; i++) {
        let val = tokens[i];
        if (isNaN(val)) {
            let one = parseInt(arr.pop());
            let two = parseInt(arr.pop());
            let newval = 0;
            switch (val) {
                case "*":
                    newval = two * one;
                    break;
                case "-":
                    newval = two - one;
                    break;
                case "/":
                    newval = two / one;
                    break;
                case "+":
                    newval = two + one;
                    break;
            }
            arr.push(newval);
        } else {
            arr.push(val);
        }
    }
    return parseInt(arr[0]);
};
```

