---
title: Javascript(leetcode#89)  Gray Code
date: 2022-08-25 09:15:20
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
An n-bit gray code sequence is a sequence of 2n integers where:

Every integer is in the inclusive range [0, 2n - 1],
The first integer is 0,
An integer appears no more than once in the sequence,
The binary representation of every pair of adjacent integers differs by exactly one bit, and
The binary representation of the first and last integers differs by exactly one bit.
Given an integer n, return any valid n-bit gray code sequence.
<!--more-->
# 翻譯
n 位格雷碼序列是 2n 個整數的序列，其中：

每個整數都在 [0, 2n - 1] 範圍內，
第一個整數是0，
一個整數在序列中出現的次數不超過一次，
每對相鄰整數的二進製表示正好相差一位，並且
第一個和最後一個整數的二進製表示正好相差一位。
給定一個整數 n，返回任何有效的 n 位格雷碼序列。

# 範例

Example 1:
```
Input: n = 2
Output: [0,1,3,2]
Explanation:
The binary representation of [0,1,3,2] is [00,01,11,10].
- 00 and 01 differ by one bit
- 01 and 11 differ by one bit
- 11 and 10 differ by one bit
- 10 and 00 differ by one bit
[0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01].
- 00 and 10 differ by one bit
- 10 and 11 differ by one bit
- 11 and 01 differ by one bit
- 01 and 00 differ by one bit
```

Example 2:
```
Input: n = 1
Output: [0,1]
```



# 解題思路
1.利用遞迴解
# Solution
```Javascript
var grayCode = function (n) {
    let arr=changebit(n);
    for(let i=0;i<arr.length;i++){
        arr[i]=parseInt(arr[i],2);
    }
    return arr;
};
function changebit(n) {
    if (n == 1) {
        return [0, 1];
    } else {
        let one = changebit(n - 1);
        let two = [...one].reverse();
        for (let i = 0; i < one.length; i++) {
            one[i] = "0" + one[i];
            two[i] = "1" + two[i];
        }
        one.push(...two);
        return one;
    }
}
```