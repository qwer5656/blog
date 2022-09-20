---
title: Javascript(leetcode100)   Same Tree
date: 2022-09-15 10:01:52
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**



# 題目
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 
<!--more-->
# 翻譯
給定兩個二叉樹 p 和 q 的根，編寫一個函數來檢查它們是否相同。

如果兩個二叉樹在結構上相同並且節點具有相同的值，則它們被認為是相同的。


# 範例
Example 1:
![example](../image/leetcode/leetcode100_1.jpg "example")
```
Input: p = [1,2,3], q = [1,2,3]
Output: true
```

Example 2:
![example](../image/leetcode/leetcode100_2.jpg "example")
```
Input: p = [1,2], q = [1,null,2]
Output: false
```

Example 3:
![example](../image/leetcode/leetcode100_3.jpg "example")
```
Input: p = [1,2,1], q = [1,1,2]
Output: false
```

# 解題思路
1.利用動態規劃
2.分析條件
# Solution
```javascript
var isSameTree = function (p, q) {
   let dp = function (p, q) {
        if (p == null && q == null) return true;
        if (p != null && q == null) return false;
        if (p == null && q != null) return false;
        return p.val === q.val && dp(p.left, q.left) && dp(p.right, q.right)
    }
    return dp(p, q);
};
```