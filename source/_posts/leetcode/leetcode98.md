---
title: Javascript(leetcode#98)  Validate Binary Search Tree
date: 2022-09-14 15:41:30
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
<!--more-->

# 翻譯
給定二叉樹的根，確定它是否是有效的二叉搜索樹 (BST)。

有效的 BST 定義如下：

節點的左子樹僅包含鍵小於節點鍵的節點。
節點的右子樹只包含鍵大於節點鍵的節點。
左右子樹也必須是二叉搜索樹。


# 範例
Example 1:
![example](../image/leetcode/leetcode98_1.jpg "example")
```
Input: root = [2,1,3]
Output: true
```

Example 2:
![example](../image/leetcode/leetcode98_2.jpg "example")
```
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```


# 解題思路
1.利用動態規劃
2.已知條件1.左邊比中間小及右邊比中間大
# Solution
```javascript
var isValidBST = function(root) {
   return isValidBSTHelper(root, -Infinity, Infinity);
};

const isValidBSTHelper = (root, low, high) => {
   if (!root) {
       return true;
   }
   return root.val > low && root.val < high &&
       isValidBSTHelper(root.left, low, root.val) &&
       isValidBSTHelper(root.right, root.val, high);
}
```