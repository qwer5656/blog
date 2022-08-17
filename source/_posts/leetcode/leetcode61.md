---
title: Javascript(leetcode#61) Rotate List
date: 2022-08-17 08:55:36
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given the head of a linked list, rotate the list to the right by k places.
<!--more-->
# 翻譯
給定鍊錶的頭部，將鍊錶向右旋轉 k 位。



# 範例

Example 1
![example](../image/leetcode/leetcode61_1.jpg "example")
```
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
```


Example 2
![example](../image/leetcode/leetcode61_2.jpg "example")
```
Input: head = [0,1,2], k = 4
Output: [2,0,1]
```

# 解題思路
1.先算出node長度
2.反轉node將最後的依序往前
# Solution
Code 1 :
```Javascript
var rotateRight = function (head, k) {
    if (head == null || head.next == null || k == 0) {
        return head;
    }
    let headnode = head;
    let curnode = headnode;
    let prenode;
    let length = 1;
    while (curnode.next != null) {
        prenode = curnode;
        curnode = curnode.next;
        length++;
    }
    prenode.next = null;
    curnode.next = headnode;
    headnode = curnode;
    k = (k - 1) % length;
    for (let i = 0; i < k; i++) {
        while (curnode.next != null) {
            prenode = curnode;
            curnode = curnode.next;
        }
        prenode.next = null;
        curnode.next = headnode;
        headnode = curnode;
    }
    return curnode;
};

```