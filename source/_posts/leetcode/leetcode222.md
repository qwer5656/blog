---
title: Javascript(leetcode#222) Count Complete Tree Nodes
date:  2022-11-15 11:31:48
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than O(n) time complexity.
 
 

<!--more-->

# 翻譯
給定一棵完全二叉樹的根，返回樹中節點的數量。

根據維基百科，每一層，除了最後一層，都完全填充在一個完整的二叉樹中，最後一層的所有節點都盡可能地靠左。它在最後一層 h 可以有 1 到 2h 個節點。

設計一個運行時間複雜度小於 O(n) 的算法。

# 範例

Example 1:
```
Input: root = [1,2,3,4,5,6]
Output: 6
```


Example 2:
```
Input: root = []
Output: 0
```


Example 3:
```
Input: root = [1]
Output: 1
```




# 解題思路
1. 利用DFS搜尋數量
# 程式碼

```javascript
var countNodes = function(root) {
    
    let num=0;
    let dp=function(root){
        if(root==null)return;
        num++;
        if(root.left!=null)dp(root.left);
        if(root.right!=null)dp(root.right);
    }

    dp(root);
    return num;

};
```

