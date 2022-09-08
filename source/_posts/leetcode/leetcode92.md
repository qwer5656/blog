---
title: Javascript(leetcode#92)  Reverse Linked List II
date: 2022-09-08 08:41:22
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
<!--more-->
# 翻譯
給定單鍊錶的頭部和左右兩個整數，其中left <= right，將列表的節點從左到右反轉，並返回反轉後的列表。

Example 1:
![example](../image/leetcode/leetcode92.jpg "example")
```
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
```

Example 2:
```
Input: head = [5], left = 1, right = 1
Output: [5]
```


# 解題思路
1.反轉N個元素
# Solution
```Javascript
var reverseBetween = function(head, left, right) {
    
    var headnode = new ListNode(0, head); 
    var i = 0;
    var curnode = headnode;
    while(i < right){
        if(i < left-1){curnode = curnode.next;} 
        else if(i == left - 1){
            var start = curnode; // start reverse 2
            curnode = curnode.next; 
        }else if(i >= left){
            var last = curnode.next; 
            curnode.next = curnode.next.next; 
            last.next = start.next; 
            start.next = last; // do not go to the next as the next has been move to the front
        }        
        i++; 
    }
    return headnode.next;
};
```