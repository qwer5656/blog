---
title: Javascript(leetcode#105) Construct Binary Tree from Preorder and Inorder Traversal
date: 2022-09-20 10:32:19
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
<!--more-->



# 翻譯
給定兩個整數數組 preorder 和 inorder，其中 preorder 是二叉樹的前序遍歷，inorder 是同一棵樹的中序遍歷，構造並返回二叉樹。


# 範例
Example 1:
![example](../image/leetcode/leetcode105.jpg "example")
```
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
```

Example 2:
```
Input: preorder = [-1], inorder = [-1]
Output: [-1]
```

# 解題思路
1.我們知道預排序數組的第一個索引將是根。
2.我們可以在中序數組中找到根的索引。
3.中序數組中當前索引左側的所有內容都屬於左子樹。
4.右邊的一切都屬於右子樹。


# Solution
```javascript
const helper = (preorder, indexPre, inorder, leftIn, rightIn) => {
    if (indexPre > preorder.length - 1 || leftIn > rightIn) {
        return null
    }  
    let root = new TreeNode(preorder[indexPre]);
    let indexOfRoot = inorder.indexOf(root.val);   
    let nextRightRootIndex = indexPre  - leftIn+indexOfRoot + 1;
    root.left = helper(preorder, indexPre + 1, inorder, leftIn, indexOfRoot - 1)
    root.right = helper(preorder, nextRightRootIndex, inorder, indexOfRoot + 1, rightIn)
    return root
}
var buildTree = function(preorder, inorder) {
    return helper(preorder, 0, inorder, 0, inorder.length-1);
};
```