---
title: Javascript(leetcode101)  Symmetric Tree
date: 2022-09-15 10:49:24
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**



# 題目
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
<!--more-->
# 翻譯
給定二叉樹的根，檢查它是否是自身的鏡像（即圍繞其中心對稱）。


# 範例
Example 1:
![example](../image/leetcode/leetcode101_1.jpg "example")
```
Input: root = [1,2,2,3,4,4,3]
Output: true
```

Example 2:
![example](../image/leetcode/leetcode101_2.jpg "example")
```
Input: root = [1,2,2,null,3,null,3]
Output: false
```


# 解題思路
1.利用動態規劃
2.分析if條件
# Solution
```javascript
var isSymmetric = function (root) {
    let dp = function (left, right) {
        if (left == null && right == null) return true;
        if (left != null && right == null) return false;
        if (left == null && right != null) return false;
        return left.val == right.val && dp(left.left, right.right) && dp(left.right, right.left);
    }
    return dp(root.left, root.right);
};
```