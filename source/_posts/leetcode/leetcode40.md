---
title: Javascript(leetcode#40)  Combination Sum II
date: 2022-08-08 11:00:18
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.
<!--more-->
# 翻譯
給定一組候選編號（candidates）和一個目標編號（target），找出候選編號總和為 target 的所有唯一組合。

候選中的每個數字在組合中只能使用一次。

注意：解決方案集不得包含重複的組合。


# 範例

Example 1:
```
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```

Example 2:
```
Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
```

# 解題思路
1.將題目分成小問題
2.利用遞迴求解

# Solution
Code 1 :
```Javascript
const combinationSum2 = (candidates, target) => {
    const res = [];
    candidates.sort((a, b) => a - b);
  
    const helper = (comb, t, i) => {
      if (t === 0) return res.push(comb);
  
      for (let j = i; j < candidates.length; j++) {
        if (j > i && candidates[j] === candidates[j - 1]) continue;
        if (candidates[j] <= t) helper([...comb, candidates[j]], t - candidates[j], j + 1);
      }
    };
    helper([], target, 0);
    return res;
  };
```