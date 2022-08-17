---
title: Javascript(leetcode#26)  Remove Duplicates from Sorted Array
date: 2022-08-04 08:51:42
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**


# 題目
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:
```
The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.
```
<!--more-->

# 翻譯

給定一個按非遞減順序排序的整數數組 nums，就地刪除重複項，使每個唯一元素只出現一次。元素的相對順序應保持不變。

由於在某些語言中無法更改數組的長度，因此您必須將結果放在數組 nums 的第一部分。更正式地說，如果刪除重複項後有 k 個元素，則 nums 的前 k 個元素應該保存最終結果。在前 k 個元素之外留下什麼並不重要。

將最終結果放入 nums 的前 k 個槽後返回 k。

不要為另一個數組分配額外的空間。您必須通過使用 O(1) 額外內存就地修改輸入數組來做到這一點。


# 範例

Example 1:
```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

Example 2:
```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

```

# 解題思路
1.找到一樣的把它刪除

# Solution
Code 1 :
```Javascript
var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length-1;){
        if(nums[i]==nums[i+1]){
            nums.splice(i,1);
        }else{
            i++;
        }
    }
    return nums.legnth;
};
```

