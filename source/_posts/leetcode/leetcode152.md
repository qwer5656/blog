---
title: Javascript(leetcode#152) Maximum Product Subarray
date:  2022-10-21 11:09:40
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.


<!--more-->

# 翻譯

給定一個整數數組 nums，在數組中找到一個具有最大乘積的連續非空子數組，並返回該乘積。

生成測試用例以使答案適合 32 位整數。

子數組是數組的連續子序列。

# 範例

Example 1:
```
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
```


Example 2:
```
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
```




# 解題思路
1.設三個變數min,max,res
2.當nums[i]<0時將max跟min做交換，由於負成負會變成正的
3.將res和max做比較

# 程式碼

```javascript
var maxProduct = function (nums) {

  let res = nums[0];
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max *= nums[i];
    min *= nums[i];
    if (nums[i] < 0) {
      let temp = max;
      max = min;
      min = temp;
    }
    max=Math.max(max,nums[i]);
    min=Math.min(min,nums[i]);
    res=Math.max(res,max);
  
  
  }
  return res;
};
```



 0