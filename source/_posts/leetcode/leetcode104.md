---
title: Javascript(leetcode#104)  Maximum Depth of Binary Tree
date: 2022-09-19 10:04:05
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**



# 題目
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
<!--more-->


# 翻譯
給定二叉樹的根，返回其最大深度。

二叉樹的最大深度是從根節點到最遠葉節點的最長路徑上的節點數。

# 範例
Example 1:
![example](../image/leetcode/leetcode104.jpg "example")
```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

Example 2:
```
Input: root = [1,null,2]
Output: 2
```

# 解題思路
1.利用遞迴搜尋
2.找出最大的深度

# Solution
```javascript
var maxDepth = function (root) {
    let depth=0;
    let trace = function (root, num) {
        if (root == null) return;
        trace(root.left, num + 1);
        trace(root.right, num + 1);
        depth=Math.max(num,depth);
    }
    trace(root, 1);
    return depth;
};
```