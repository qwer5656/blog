---
title: Javascript(leetcode#16)  3Sum Closest
date: 2022-08-02 09:10:10
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.


<!--more-->

# 翻譯

給定一個長度為 n 的整數數組 nums 和一個整數目標，在 nums 中找到三個整數，使得總和最接近目標。

返回三個整數的和。

您可以假設每個輸入都只有一個解決方案。


# 範例

Example 1

```
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

Example 2
```
Input: nums = [0,0,0], target = 1
Output: 0
```

# 解題思路
1.先將陣列小到大排列
2.避免重複組合 第一個數字判斷數字是否跟上一個數字相同 
3.相差大於min相差時 記錄起來

# Solution
Code 1 :
```Javascript
var threeSumClosest=function(nums, target) {
       let min=null;
        let newarr=nums.sort(function(a,b){
            return a-b;
        });
        for(let i=0;i<newarr.length;i++){
            if(newarr[i]==newarr[i-1])continue;
            let left=i+1;
            let right=newarr.length-1;
            while(left<right){
                let leftval=newarr[left];
                let rightval=newarr[right];
                let sum=leftval+rightval+newarr[i];
                if(min==null||(Math.abs(target-min)>Math.abs(target-sum))){
                    min=sum;
                }
                if(target>sum){
    
                    left++;
                }
                else{
                    right--;
                }            
            }
        }
        return min;
}

```
