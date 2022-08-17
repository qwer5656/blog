---
title: Javascript(Leetcode#1) Two Sum
date: 2022-07-26 12:53:45
keywords: Javascript,Leetcode
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---


**Difficulty: Easy**

# 規則
Given an array of integers, return indices of the two numbers such that they add up to a specific target.


You may assume that each input would have exactly one solution, and you may not use the same element twice.

<!-- more -->

# 翻譯
給予一個整數陣列，回傳兩個數組的索引以至於他們加起來為特定的目標

您可以假設每個輸入都只有一個解決方案，並且不能兩次使用相同的元素。

# 範例

Example 1:

{% codeblock %}
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
{% endcodeblock %}

Example 2:
{% codeblock %}
Input: nums = [3,2,4], target = 6
Output: [1,2]
{% endcodeblock %}

Example 3:
{% codeblock %}
Input: nums = [3,3], target = 6
Output: [0,1]
{% endcodeblock %}

# 解題思路
首先會先得到一個數組和一個target數值，利用迴圈抓取數組內容，target數值減掉數組內容的值，所得到的差值就是我要去匹配其他數組內容是否符合，最終找到符合的回傳兩個值的引索位置。

# Solution

Code 1 :
```javascript
var twoSum = function(nums, target) {
    let obj={};
    for(var i=0;i<nums.length;i++)
    {
        let sub=target-nums[i];
        if(obj[sub]!=undefined)
        return [i,obj[sub]];
        
        obj[nums[i]]=i;
    }
}
```

Code 2 :
```javascript
var twoSum = function(nums, target) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        let sub=target-nums[i];
        if(map.has(sub)){
            return [map.get(sub),i];
        }
        map.set(nums[i],i);


    }

}
```