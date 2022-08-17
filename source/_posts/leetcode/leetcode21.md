---
title: Javascript(leetcode#21)  Merge Two Sorted Lists
date: 2022-08-02 15:15:43
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**


# 題目

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.


<!--more-->

# 翻譯

給你兩個排序的鍊錶list1 和list2 的頭。

將兩個列表合併到一個排序列表中。該列表應通過將前兩個列表的節點拼接在一起來製作。

返回合併鍊錶的頭部。

# 範例

Example 1

![example](../image/leetcode/leetcode19.jpg "example")

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

Example 2

```
Input: list1 = [], list2 = []
Output: []
```

Example 3

```
Input: list1 = [], list2 = [0]
Output: [0]
```

# 解題思路
1.檢查兩個link list是否為空不是的互相比較值
2.再把最後剩餘的list塞到新的list後

# Solution
Code 1 :
```Javascript
var mergeTwoLists = function(list1, list2) {
    let newlinklist = new ListNode(0);
    let cur=newlinklist;
     while(list1!=null&&list2!=null){
        if(list1.val<list2.val){
            cur.next=list1;
            list1=list1.next;
        }else{
            cur.next=list2;
            list2=list2.next;
        }
        cur=cur.next;
    }

    if(list1!=null){
        cur.next=list1;
    }

    if(list2!=null){
        cur.next=list2;
 
    }
    return newlinklist.next;
};

```