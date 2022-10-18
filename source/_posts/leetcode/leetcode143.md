---
title: Javascript(leetcode#143)  Reorder List
date:  2022-10-17 09:58:01
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
You are given the head of a singly linked-list. The list can be represented as:

```
L0 → L1 → … → Ln - 1 → Ln
```

Reorder the list to be on the following form:

```
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
```
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

<!--more-->

# 翻譯
給你一個單鍊錶的頭部。 該列表可以表示為：

將列表重新排序為以下形式：

您不能修改列表節點中的值。 只有節點本身可以改變。

# 範例
Example 1:
![example](../image/leetcode/leetcode143_1.jpg "example")
```
Input: head = [1,2,3,4]
Output: [1,4,2,3]
```

Example 2:
![example](../image/leetcode/leetcode143_2.jpg "example")
```
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
```


# 解題思路
1. 找到link list的中間將它分為兩半分別存入first及second
2. 將second反轉
3. 再將first及second合併

# 程式碼

```javascript
var reorderList = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let secondHead = slow.next;
    slow.next = null;
    let pre = null;

    while (secondHead) {
        let temp = secondHead.next;
        secondHead.next = pre;
        pre = secondHead;
        secondHead = temp;
    }
    let first = head;
    let second = pre;
    while (second) {
        let temp = first.next;
        first.next = second;
        second = second.next;
        first.next.next = temp;
        first = first.next.next;
    }
};
```