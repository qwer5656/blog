---
title: Javascript(leetcode#49) Group Anagrams
date: 2022-08-10 14:21:59
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
<!--more-->
# 翻譯
給定一個字符串數組，將字謎組合在一起。您可以按任何順序返回答案。

字謎是通過重新排列不同單詞或短語的字母而形成的單詞或短語，通常只使用所有原始字母一次。


# 範例
Example 1:
```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```



Example 2:
```
Input: strs = [""]
Output: [[""]]
```

Example 3:
```
Input: strs = ["a"]
Output: [["a"]]
```

# 解題思路
1.設長度26內容為0的矩陣
2.字串中有的字母將0改為1
3.檢查map是否有這個群組
# Solution
Code 1 :
```Javascript
var groupAnagrams = function(strs) {
  let arr=new Map();
    for(let i=0;i<strs.length;i++){
      let a_zstr=Array(26).fill(0);
      for(let str of strs[i]){
       
        a_zstr[str.charCodeAt()-"a".charCodeAt()]++;
      }
     
      const key = a_zstr.join('-');
      let val=arr.has(key)?arr.get(key):[];
      val.push(strs[i]);
      arr.set(key,val);
    }


    return [...arr.values()];
};
```