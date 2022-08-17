---
title: Javascript(leetcode#57) Insert Interval
date: 2022-08-16 09:54:42
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

<!--more-->

# 翻譯
給定一個非重疊區間的數組，其中 interval[i] = [starti, endi] 表示第 i 個區間的開始和結束，區間按 starti 升序排序。您還會得到一個間隔 newInterval = [start, end]，它表示另一個間隔的開始和結束。

將 newInterval 插入到區間中，以便區間仍然按 starti 升序排序，並且區間仍然沒有任何重疊區間（如有必要，合併重疊區間）。

插入後的返回間隔。


# 範例

Example 1
```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

Example 2
```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```


# 解題思路
1.將要插入的陣列跟原本的陣列做比較
2.紀錄開始的地方和要刪除的數量
# Solution
Code 1 :
```Javascript
var insert = function (intervals, newInterval) {
  if (intervals.length == 0) {
    return [newInterval];
  }
  let start = null;
  let count = 0;

  for (let i = 0; i < intervals.length; i++) {

    if (newInterval[0] >= intervals[i][0]) {

      if (intervals[i][0] <= newInterval[0] && intervals[i][1] >= newInterval[0]) {

        start = i;
        count++;
        let max = Math.max(newInterval[1], intervals[i][1]);
        newInterval = [intervals[i][0], max];
        console.log(newInterval);
      } else {
        start = i + 1;
      }
    } else {
      if (newInterval[0] <= intervals[i][0] && intervals[i][0] <= newInterval[1]) {
        count++;
        let max = Math.max(newInterval[1], intervals[i][1]);
        newInterval = [newInterval[0], max];
      } else {
        if (start != null) {
          break;
        }
      }

    }
  }

  intervals.splice(start, count, newInterval);

  return intervals;
};
```