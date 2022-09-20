---
title: Javascript(leetcode#102)  Binary Tree Level Order Traversal
date: 2022-09-16 08:41:30
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
<!--more-->
# 翻譯
給定二叉樹的根，返回其節點值的級別順序遍歷。 （即從左到右，逐級）。



# 範例
Example 1:
![example](../image/leetcode/leetcode102_1.jpg "example")
```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
```

Example 2:
```
Input: root = [1]
Output: [[1]]
```

Example 3:
```
Input: root = []
Output: []
```

# 解題思路
1.利用遞迴搜尋
2.依層級加入陣列裡面

# Solution
```javascript
var levelOrder = function (root) {
    let arr = [];
    let trace = function (root, num) {
        if (root == null) return;

        trace(root.left, num + 1);
        if (arr[num] == undefined) {
            arr[num] = [root.val];
        } else {
            arr[num].push(root.val);
        }
        trace(root.right, num + 1);
    }
    trace(root, 0);
    return arr;
};
```