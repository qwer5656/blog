---
title: Javascript(leetcode#77) Combinations
date: 2022-08-18 13:53:30
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.
<!--more-->
# 翻譯
給定兩個整數 n 和 k，返回從範圍 [1, n] 中選擇的 k 個數字的所有可能組合。

您可以按任何順序返回答案。



# 範例

Example 1
```
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
```


Example 2
```
Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.
```


# 解題思路
1.已知n為1-n個數字，k為抓取的數量
2 將k個數量放入陣列裡[0,...k]
3.排列組合由最後一個陣列位置依序往後到最後時前一個數字位置往後一個，依此規則循環直到第一個數字位置無法前進時返回結果
# Solution
Code 1 :
```Javascript
var combine = function (n, k) {
    let arr = [];
    let index = [];
    let res = [];

    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    for (let i = 0; i < k; i++) {
        index.push(i);
    }
    console.log(index, n - k);
    let last = index.length - 1;
    let curpos = function (arr, pos) {

        let inarr = [];
        for (let i = 0; i < index.length; i++) {
            let indexs = index[i];
            inarr.push(arr[indexs]);
        }
        res.push(inarr);

        if (index[0] == n - k) {
            return;
        } else {
            index[pos]++;
            if (index[pos] > n - 1) {
                let next = pos;
                while (index[next] > n - (pos - next) - 1) {
                    next--;
                    index[next]++;
                    console.log(index[next]);

                }
                for (let i = next; i < index.length; i++) {
                    index[i] = index[next] + (i - next);
                }
                curpos(arr, pos);

            }
            else {
                curpos(arr, pos);
            }
        }

    }

    curpos(arr, last);

    return res;
};
```