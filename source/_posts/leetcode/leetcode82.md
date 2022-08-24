---
title: Javascript(leetcode#82)  Remove Duplicates from Sorted List II
date: 2022-08-23 09:15:40
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
<!--more-->
# 翻譯
給定一個排序鍊錶的頭部，刪除所有具有重複數字的節點，只留下原始鍊錶中不同的數字。返回排序好的鍊錶。


Example 1:
![example](../image/leetcode/leetcode82_1.jpg "example")
```
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
```

Example 2:
![example](../image/leetcode/leetcode82_2.jpg "example")
```
Input: head = [1,1,1,2,3]
Output: [2,3]
```


# 解題思路
1.設當前及上一個node和存放開頭的變數
2.當遇到相同值時，依序往前比較
3.如pre還是空時，將開頭直接等於next
# Solution
```Javascript
var deleteDuplicates = function (head) {
    if (head == null) {
        return head;
    }
    let cur = head;
    let headnode = head;
    let pre = null;
    while (cur != null && cur.next != null) {
        if (cur.val == cur.next.val) {
            let next = cur.next;
            while (next != null && next.val == cur.val) {
                next = next.next;
            }
            if (pre == null) {
                headnode = next;
                cur = next;
            } else {
                pre.next = next;
                cur = next;
            }
        } else {
            pre = cur;
            cur = cur.next;
        }
    }
    return headnode;
};

```
