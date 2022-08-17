---
title: Javascript(leetcode#47) Permutations II
date: 2022-08-10 13:40:23
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**

# 題目
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

<!--more-->
# 翻譯
給定一個可能包含重複的數字集合 nums，以任何順序返回所有可能的唯一排列。

# 範例
Example 1:
```
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
```

Example 2:
```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

# 解題思路
1.從最後跟前面比較，若比前面大時將前面的數字給為較大它一點的值
2.將後面的值從小到最大依序填入

# Solution
Code 1 :
```Javascript
var permute = function(nums) {
    let last=nums.reverse().join("");
    let arr=[];
    while(true){
      let newstr=nextPermutation(nums);
      arr.push([...newstr]);
      if(newstr.join("")==last){
        break;
      }
    
    }

    return arr;
}
var nextPermutation = function (nums) {
  let curpos = -1;
  let arr = [];
  for (let i = nums.length - 1; i >= 0; i--) {
      arr.push(nums[i]);
      if (nums[i] > nums[i - 1]) {
          curpos = i - 1;
          break;
      }
  }
  arr = arr.sort(function (a, b) {
      return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
      if (nums[curpos] < arr[i]) {
          let temp = arr[i];
          arr[i] = nums[curpos];
          nums[curpos] = temp;
          break;
      }
  }
  arr = arr.sort(function (a, b) {
      return a - b;
  });


  for (let i = 0; i < arr.length; i++) {
      nums[i + curpos + 1] = arr[i];
  }

  return nums;

}

```