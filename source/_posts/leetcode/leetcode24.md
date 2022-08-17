---
title: Javascript(leetcode#24) Swap Nodes in Pairs
date: 2022-08-03 10:42:05
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

<!--more-->

# 翻譯
給定一個鍊錶，交換每兩個相鄰節點並返回它的頭部。您必須在不修改列表節點中的值的情況下解決問題（即，只能更改節點本身。）

# 範例

Example 1
![example](../image/leetcode/leetcode24.png "example")
```
Input: head = [1,2,3,4]
Output: [2,1,4,3]

```


Example 2

```
Input: head = []
Output: []

```


Example 3

```
Input: head = [1]
Output: [1]

```

# 解題思路
1.創一個新的link list
2.將節點依序放入

# Solution
Code 1 :
```Javascript
var swapPairs = function(head) {
    let listnode=new ListNode(0);
    let newhead=listnode;
    let cur=null;
    let pre=null;
    while(head!=null){
   
        if(head.next!=null){
            newhead.next=new ListNode(head.next.val);
            newhead=newhead.next;  
           
        }
        if(head!=null){
            newhead.next=new ListNode(head.val);
            newhead=newhead.next;
            head=head.next;
         
        }
        if(head!=null){
         head=head.next;
        }
    }
    return listnode.next;
};

```
Code 2:
```Javascript
var swapPairs = function (head) {
    let ptr = head, start = true, pre = null;
    while (ptr && ptr.next) {
        let cur = ptr;
        let next = cur.next;
        cur.next = next.next;
        next.next = cur;
        if (start == true) {
            head = next;
            start = false;
        } else {
            pre.next = next;
        }
        pre = cur;
        ptr = cur.next;


    }
    return head;
};
```