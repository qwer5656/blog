---
title: Javascript(leetcode#56) Merge Intervals
date: 2022-08-16 09:00:24
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


<!--more-->
# 翻譯
給定一個區間數組，其中區間[i] = [starti, endi]，合併所有重疊區間，並返回一個包含輸入中所有區間的非重疊區間數組。


# 範例

Example 1
```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

Example 2
```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```


# 解題思路
1.先將陣列重新排列
2.第二個陣列跟第一個陣列的範圍做比較
# Solution
Code 1 :
```Javascript
var merge = function (intervals) {

  if (intervals.length == 1) {
    return intervals;
  }
  intervals = intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  let merges = function (merge, curpos) {

    if (curpos >= merge.length - 1) {
      return;
    }
    let firstleft = merge[curpos][0];
    let firstright = merge[curpos][1];
    let nextleft = merge[curpos + 1][0];
    let nextright = merge[curpos + 1][1];
    if (firstleft <= nextleft && nextleft <= firstright) {
      let min = Math.min(firstleft, nextleft);
      let max = Math.max(firstright, nextright);
      let arr = [min, max];
      merge.splice(curpos, 2, arr);
    } else {
      curpos++;
    }
    merges(merge, curpos);
  }

  merges(intervals, 0);
  return intervals;
};
```