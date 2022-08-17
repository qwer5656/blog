---
title: Javascript(leetcode#60)  Permutation Sequence
date: 2022-08-16 11:19:17
categories: 
- Leetcode 
- Leetcode Hard 
tags:
- Leetcode
- Javascript
---

**Difficult:Hard**


# 題目
The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

<!--more-->
# 翻譯
集合 [1, 2, 3, ..., n] 總共包含 n!獨特的排列。

通過按順序列出和標記所有排列，我們得到以下 n = 3 的序列：

“123”
“132”
“213”
“231”
“312”
“321”
給定 n 和 k，返回第 k 個置換序列。


# 範例

Example 1
```
Input: n = 3, k = 3
Output: "213"
```


Example 2
```
Input: n = 4, k = 9
Output: "2314"
```

Example 3
```
Input: n = 3, k = 1
Output: "123"
```

# 解題思路
1.利用遞迴算出結果
# Solution
Code 1 :
```Javascript
var getPermutation = function (n, k) {

  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }



  let prenum = function (arr, k) {
    if (k <= 1) {
      return arr;
    }
    let curpos = -1;
    let curval;

    for (let i = n - 1; i >= 0; i--) {
      let cur = arr[i];
      let pre = arr[i - 1];
      if (cur > pre) {
        curpos = i - 1;
        curval = pre;
        break;
      }
    }
    if (curpos == -1) {
      arr = arr.sort(function (a, b) {
        return a - b;
      });
        return prenum(arr,k-1);
    } else {
      let newarr = arr.slice(curpos);
      newarr = newarr.sort(function (a, b) {
        return a - b;
      });
      let twoval = arr.slice(0, curpos);

      for (let i = 0; i < newarr.length; i++) {
        if (newarr[i] > curval) {
          twoval.push(...newarr.splice(i, 1));
          break;
        }
      }
      twoval.push(...newarr);
      
      return () =>  prenum(twoval, k - 1);
     
    }

  }

  return trampolines(prenum)(arr,k).join("");
};

function trampolines (fn) {
  return (...args) => {
    let result = fn(...args)
    while (typeof result === 'function') result = result()
    return result
  }
}
```