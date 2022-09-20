---
title: Javascript(leetcode#103)  Binary Tree Zigzag Level Order Traversal
date: 2022-09-19 09:56:20
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
<!--more-->

# 翻譯
給定二叉樹的根，返回其節點值的鋸齒形級別順序遍歷。 （即，從左到右，然後從右到左進入下一個級別，並在兩者之間交替）。




# 範例
Example 1:
![example](../image/leetcode/leetcode103.jpg "example")
```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
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
2.根據單雙數層級，依push或是unshift方式加入陣列裡面。

# Solution
```javascript
var zigzagLevelOrder = function (root) {
    let arr = [];
    let trace = function (root, num) {
        if (root == null) return;
        trace(root.left, num + 1);
        trace(root.right, num + 1);
        if (arr[num] == undefined) {
            arr[num] = [root.val];
        } else {
            if (num % 2 == 1) {
                arr[num].unshift(root.val);
            }
            else {
                arr[num].push(root.val);
            }
        }
    }
    trace(root, 0);
    return arr;
};
```