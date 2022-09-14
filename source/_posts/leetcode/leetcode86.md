---
title: Javascript(leetcode#86)  Partition List
date: 2022-08-24 08:57:18
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.
<!--more-->
# 翻譯
給定鍊錶的頭部和值 x，將其分區，使得所有小於 x 的節點都在大於或等於 x 的節點之前。

您應該保留兩個分區中每個分區中節點的原始相對順序。


# 範例

Example 1:
![example](../image/leetcode/leetcode86.jpg "example")
```
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
```

Example 2:
```
Input: head = [2,1], x = 2
Output: [1,2]
```


# 解題思路
1.當小於x的node放到minhead裡
2.當大於等於的node放到maxhead裡
3 最後再將minhead和maxhead連結
# Solution
```Javascript
var partition = function (head, x) {
    let cur = head;
    let minhead = head;
    let maxhead;
    let minnode;
    let maxnode;
    while (cur != null) {
        if (cur.val < x) {
            if (minnode == null) {
                minnode = cur;
                headnode = cur;
            } else {
                minnode.next = cur;
                minnode = minnode.next;
            }
        } else {
            if (maxnode == null) {
                maxnode = cur;
                maxhead = cur;
            } else {
                maxnode.next = cur;
                maxnode = maxnode.next;
            }
        }
        cur = cur.next;
    }
    if (minnode != null && maxnode != null) {
        minnode.next = maxhead;
        maxnode.next = null;
    }
    return minhead;
};
```