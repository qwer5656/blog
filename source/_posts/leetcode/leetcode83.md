---
title: Javascript(leetcode#83) Remove Duplicates from Sorted List
date: 2022-08-24 08:42:24
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**



# 題目
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

<!--more-->
# 翻譯
給定排序鍊錶的頭部，刪除所有重複項，使每個元素只出現一次。返回排序好的鍊錶。

Example 1:
![example](../image/leetcode/leetcode83_1.jpg "example")
```
Input: head = [1,1,2]
Output: [1,2]
```

Example 2:
![example](../image/leetcode/leetcode83_2.jpg "example")
```
Input: head = [1,1,2,3,3]
Output: [1,2,3]
```


# 解題思路
1.設當前及存放開頭的變數
2.當遇到相同值時，依序往前比較
# Solution
```Javascript
var deleteDuplicates = function (head) {
    let cur = head;
    let headnode = head;
    while (cur != null&&cur.next!=null) {
        let curval = cur.val;
        if (curval == cur.next.val) {
            let next = cur.next;
            while (next != null && next.val == curval) {
                next = next.next;
            }
            cur.next=next;
            cur=next;
        }else{
            cur=cur.next;
        }
    }
    return headnode;
};
```