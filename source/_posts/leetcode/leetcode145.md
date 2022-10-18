---
title: Javascript(leetcode#145)  Binary Tree Postorder Traversal
date: 2022-10-18 09:16:31
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**



# 題目
Given the root of a binary tree, return the postorder traversal of its nodes' values.
<!--more-->

# 翻譯
給定二叉樹的根，返回其節點值的後序遍歷。



# 範例

![example](../image/leetcode/leetcode144.jpg "example)
Example 1:
```
Input: root = [1,null,2,3]
Output: [3,2,1]
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
1. 已知後序遍布左->右->中的方式
2. 利用遞迴求解
3. 依序由左->右->中的條件找出樹的值

# 程式碼

```javascript
var preorderTraversal = function(root) {
    let arr=[];
    let dp=function(root){
        if(root==null) return;
        if(root.left!=null)dp(root.left);
        if(root.right!=null)dp(root.right);
        arr.push(root.val);
    }
    dp(root);
    return arr;
};
```