---
title: Javascript(leetcode#167) Two Sum II - Input Array Is Sorted
date:  2022-11-02 17:09:49
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 
 

<!--more-->

# 翻譯
給定一個 1 索引的整數數組，該數組已經按非遞減順序排序，找到兩個數字，使它們加起來等於特定的目標數字。讓這兩個數字為 numbers[index1] 和 numbers[index2]，其中 1 <= index1 < index2 <= numbers.length。

返回兩個數字 index1 和 index2 的索引，加一作為長度為 2 的整數數組 [index1, index2]。

生成的測試使得只有一種解決方案。您不能兩次使用相同的元素。

您的解決方案只能使用恆定的額外空間。

# 範例

Example 1:
```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
```


Example 2:
```
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
```


Example 3:
```
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
```




# 解題思路
1. 利用obj將sub及num的位置存入
2. 比較差值若找到回傳當前位置及差值位置
# 程式碼

```javascript
var twoSum = function(numbers, target) {
    let obj={};

    for(let i=0;i<numbers.length;i++){
      let sub=target-numbers[i];
      if(!obj[sub]){
        obj[numbers[i]]=i+1;
      }
      else{
        return  [obj[sub],i+1];
      }
    }
    return obj;
};
```