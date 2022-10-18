---
title: Javascript(leetcode#138) Copy List with Random Pointer
date:  2022-10-11 08:46:35
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.
<!--more-->

# 翻譯
給定一個長度為 n 的鍊錶，使得每個節點都包含一個額外的隨機指針，該指針可以指向列表中的任何節點，或者為空。

構造列表的深層副本。深拷貝應該由恰好 n 個全新節點組成，其中每個新節點的值都設置為其對應的原始節點的值。新節點的 next 和 random 指針都應該指向複製列表中的新節點，以便原始列表和復制列表中的指針表示相同的列表狀態。新列表中的任何指針都不應指向原始列表中的節點。

例如，如果原始列表中有兩個節點 X 和 Y，其中 X.random --> Y，那麼對於復制的列表中對應的兩個節點 x 和 y，x.random --> y。

返回複製的鍊錶的頭部。

鍊錶在輸入/輸出中表示為 n 個節點的列表。每個節點都表示為一對 [val, random_index] 其中：

val：表示Node.val的整數
random_index：隨機指針指向的節點的索引（範圍從0到n-1），如果它不指向任何節點，則為null。
您的代碼只會被賦予原始鍊錶的頭部。

# 範例

Example 1:  

```
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
```

Example 2:

```
Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
```

Example 3:

```
Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
```


# 解題思路
1.用一個map將結點存入
2.結果重複時，回傳有的節點

# 程式碼

```javascript
var copyRandomList = function (head, clonemap = new Map()) {
    if (head == null) {
        return null;
    }
    if (clonemap.has(head)) {
        return clonemap.get(head);
    }
    let node = new Node(head.val, null, null);
    clonemap.set(head, node);
    node.next = copyRandomList(head.next, clonemap);
    node.random = copyRandomList(head.random, clonemap);
    return node;
};
```
