---
title: Javascript(leetcode#107) Binary Tree Level Order Traversal II
date: 2022-09-21 08:41:38
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).
<!--more-->
# 翻譯
給定二叉樹的根，返回其節點值的自下而上級別順序遍歷。 （即從左到右，從葉到根逐級）。

# 範例
![example](../image/leetcode/leetcode107.jpg "example")
Example 1:
```
Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]
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
1.從上到下往下搜尋，將每個層的值塞入自己的層級陣列裡
2.由於得到的是從上到下，須將陣列反轉

# Solution
```javascript
var levelOrderBottom = function (root) {
    let arr = [];
    let dp = function (root, num) {
        if (root == null) return null;
        if (arr[num] == undefined) {
            arr[num] = [root.val];
        }
        else {
            arr[num].push(root.val);
        }
        dp(root.left, num + 1);
        dp(root.right, num + 1);
    }
    dp(root, 0);
    return arr.reverse();
};
```