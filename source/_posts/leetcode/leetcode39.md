---
title: Javascript(leetcode#39)  Combination Sum
date: 2022-08-08 09:18:00
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
<!--more-->
# 翻譯
給定一個由不同整數候選者組成的數組和一個目標整數目標，返回一個包含所有唯一候選者組合的列表，其中所選數字總和為目標。您可以按任何順序返回組合。

可以從候選人中無限次選擇相同的數字。如果至少一個所選數字的頻率不同，則兩個組合是唯一的。

對於給定的輸入，保證總和為目標的唯一組合的數量少於 150 個組合。


# 範例

Example 1:
```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```


Example 2:
```
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```


Example 3:
```
Input: candidates = [2], target = 1
Output: []
```


# 解題思路
1.將題目分成小問題
2.利用遞迴求解

# Solution
Code 1 :
```Javascript
var combinationSum = function(candidates, target) {
    let outarr=[];
    let  fn=function(newarr,start, target){
        let sum=0;
        for(let j=0;j<newarr.length;j++){  
         sum+=newarr[j];
        }
        if(sum==target){
            outarr.push(newarr);
        }
        else if(sum>target){
            return [];
        }
        for(let i=start;i<candidates.length;i++){
            let innewarr=[...newarr];
            innewarr.push(candidates[i]);
            fn(innewarr,i,target);
        }
        return [];
    }
    for(let i=0;i<candidates.length;i++){
        let arr=[candidates[i]];
        if(arr==target){
            outarr.push(arr);
        }else{
            fn(arr,i,target); 
        }
    }   
   return outarr;
};

```