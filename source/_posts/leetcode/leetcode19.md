---
title: Javascript(leetcode#19) Remove Nth Node From End of List
date: 2022-08-02 14:00:37
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given the head of a linked list, remove the nth node from the end of the list and return its head.


<!--more-->

# 翻譯
給定鍊錶的頭，從鍊錶的末尾刪除第 n 個節點並返回它的頭。

# 範例

Example 1
![example](../image/leetcode/leetcode19.jpg "example")

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

Example 2

```
Input: head = [1], n = 1
Output: []
```

Example 3

```
Input: head = [1,2], n = 1
Output: [1]
```


# 解題思路
1.先計算link list長度
2.設pre的node和cur的node
3.如果pre和cur都不為空時，將pre.next改為cur.next
4.如果pre為空和cur都不為空時，將head改為head.next
# Solution
Code 1 :
```Javascript
var removeNthFromEnd = function (head, n) {
    let headlen = 0;
    let t = head;
    while (t != null) {
        t = t.next;
        headlen++;
    }
    let len = headlen - n + 1;
    let cur = null;
    let pre = null;
    for (let i = 0; i < len; i++) {
        if (cur == null) {
            cur = head;
        } else {
            pre = cur;
            cur = cur.next;
        }

    }

    if (cur != null && pre != null) {
        pre.next = cur.next;
    }
    else if(pre == null && cur != null) {
        head = head.next;
    }

    return head;
};
```