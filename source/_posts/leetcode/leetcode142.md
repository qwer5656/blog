---
title: Javascript(leetcode#142)  Linked List Cycle II
date:  2022-10-17 09:50:54
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.
<!--more-->

# 翻譯
給定鍊錶的頭部，返回循環開始的節點。 如果沒有循環，則返回 null。

如果鍊錶中有某個節點可以通過不斷跟隨next指針再次到達，則鍊錶中存在一個循環。 在內部，pos 用於表示tail 的next 指針連接到的節點的索引（0-indexed）。 如果沒有循環，則為 -1。 請注意， pos 不作為參數傳遞。

不要修改鍊錶。


# 範例
Example 1:
![example](../image/leetcode/leetcode141_1.png "example")
```
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```


Example 2:
![example](../image/leetcode/leetcode141_2.png "example")
```
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```


Example 3:
![example](../image/leetcode/leetcode141_3.png "example")
```
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
```

# 解題思路
1. 利用龜兔賽跑演算法求解
2. 若走到為空時表示非circle link list
3. 設slow和fast兩個變數 slow一次走一步 fast一次走兩步 若兩個相遇時，利用龜兔賽跑演算法中的定義，將slow設為head，相遇的點和slow等速前進，再次相遇時就是cirlce link list的起點 

# 程式碼
```javascript
var detectCycle = function(head) {
    let slow = head
    let fast = head 

    while(fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            slow = head; 
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};
```