---
title: Javascript(leetcode#141)  Linked List Cycle
date:  2022-10-17 09:41:46
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
<!--more-->

# 翻譯
給定head，鍊錶的頭，判斷鍊表中是否有環。

如果鍊錶中有某個節點可以通過不斷跟隨next指針再次到達，則鍊錶中存在一個循環。 在內部，pos 用於表示 tail 的 next 指針所連接的節點的索引。 請注意， pos 不作為參數傳遞。

如果鍊錶中存在循環，則返回 true。 否則，返回假。


# 範例
Example 1:
![example](../image/leetcode/leetcode141_1.png "example")
```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```


Example 2:
![example](../image/leetcode/leetcode141_2.png "example")
```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```


Example 3:
![example](../image/leetcode/leetcode141_3.png "example")
```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```


# 解題思路
1. 利用龜兔賽跑演算法求解
2. 設slow和fast兩個變數 slow一次走一步 fast一次走兩步 若兩個相遇時表示為circle link list
3. 若走到為空時表示非circle link list

# 程式碼
```javascript
var hasCycle = function(head) {
   if(head==null) return false;

   let fast=head;
   let slow=head;
    while(fast!==null&&fast.next!==null){
        fast=fast.next.next;
        slow=slow.next;
        if(fast==slow){
            return true;
        }
    }


    return false;

};
```