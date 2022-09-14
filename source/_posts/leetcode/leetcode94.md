---
title: Javascript(leetcode#94) Binary Tree Inorder Traversal
date: 2022-09-12 17:13:15
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**



# 題目
Given the root of a binary tree, return the inorder traversal of its nodes' values.

<!--more-->
# 翻譯
給定二叉樹的根，返回其節點值的中序遍歷。



# 範例

Example 1:
![example](../image/leetcode/leetcode94.jpg "example")
```
Input: root = [1,null,2,3]
Output: [1,3,2]
```

Example 2:
```
Input: root = []
Output: []
```

Example 3:
```
Input: root = [1]
Output: [1]
```

# 解題思路
1.利用遞迴解

# Solution
```javascript
var inorderTraversal = function (root) {
    let arr = [];
    traversal(root, arr);

    return arr;
};

function traversal(node, arr) {

    if (node == null || node == undefined) return;
    traversal(node.left);
    arr.push(node.val);
    traversal(node.right);
}
```