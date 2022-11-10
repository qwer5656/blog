---
title: Javascript(leetcode#160) Intersection of Two Linked Lists
date:  2022-10-25 09:08:42
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**


# 題目
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:


The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Custom Judge:

The inputs to the judge are given as follows (your program is not given these inputs):

intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
listA - The first linked list.
listB - The second linked list.
skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.

<!--more-->

# 翻譯
給定兩個單鍊錶 headA 和 headB 的頭，返回兩個列表相交的節點。如果兩個鍊錶完全沒有交集，則返回 null。

例如，以下兩個鍊錶在節點 c1 處開始相交：


生成的測試用例使得整個鏈接結構中的任何地方都沒有循環。

請注意，函數返回後，鍊錶必須保持其原始結構。

自定義裁判：

給法官的輸入如下（你的程序沒有給出這些輸入）：

intersectVal - 發生交點的節點的值。如果沒有相交節點，則為 0。
listA - 第一個鍊錶。
listB - 第二個鍊錶。
skipA - 在 listA 中向前跳過（從頭部開始）以到達相交節點的節點數。
skipB - 在 listB 中向前跳過（從頭部開始）以到達相交節點的節點數。
然後，法官將根據這些輸入創建鏈接結構，並將兩個頭（headA 和 headB）傳遞給您的程序。如果您正確返回相交節點，那麼您的解決方案將被接受。

# 範例

Example 1:
```
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
- Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.
```


Example 2:
```
Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
```



Example 3:
```
Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.
```



# 解題思路
1. 已經有相交節點，若不想計算較長的link list
2. 可先將較長的link 走過多餘的部分再跟另一個link list開始比較

# 程式碼

```javascript
var getIntersectionNode = function(headA, headB) {
    var l1 = headA;
    var l2 = headB;
    
    while (l1 != l2) {
        if (l1) {
           l1 = l1.next; 
        }else {
            l1 = headB;
        }
        if (l2) {
           l2 = l2.next; 
        }else {
            l2 = headA;
        }
    }
    
    return l1;
};
```