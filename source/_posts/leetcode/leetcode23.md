---
title: Javascript(leetcode#23) Merge k Sorted Lists
date: 2022-08-03 10:08:14
categories: 
- Leetcode 
- Leetcode Hard 
tags:
- Leetcode
- Javascript
---

**Difficult:Hard**

# 題目
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.


<!--more-->

# 翻譯

給定一個由 k 個鍊錶組成的數組，每個鍊錶按升序排序。

將所有鍊錶合併為一個排序的鍊錶並返回。

# 範例

Example 1

```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
```


Example 2

```
Input: lists = []
Output: []

```


Example 3

```
Input: lists = [[]]
Output: []

```

# 解題思路
1.檢查每個元素的值找到最小的數值
2.檢查每個元素是否都為空了
3.把最小的元素的link list陣列位置記錄起來
4.新的list的next指向最小值node

# Solution
Code 1 :
```Javascript
var mergeKLists = function (lists) {
    let listarr = new ListNode(0);
    let head = listarr;
    let end = true;
    while (end) {
        let min = Infinity;
        let pos = null;
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] != null) {
                if (min > lists[i].val) {
                    pos = i;
                    min = lists[i].val;
                }
            }
        }
        if (pos != null) {
            head.next = lists[pos];
            lists[pos] = lists[pos].next;
            head = head.next;
        }
        if (min == Infinity) {
            end = false;
        }
    }
    return listarr.next;
};
```