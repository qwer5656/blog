---
title: Javascript(leetcode#80) Word Search
date: 2022-08-22 08:38:01
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:


```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.


<!--more-->

# 翻譯

給定一個按非遞減順序排序的整數數組 nums，就地刪除一些重複項，以使每個唯一元素最多出現兩次。元素的相對順序應保持不變。

由於在某些語言中無法更改數組的長度，因此您必須將結果放在數組 nums 的第一部分。更正式地說，如果刪除重複項後有 k 個元素，則 nums 的前 k 個元素應該保存最終結果。在前 k 個元素之外留下什麼並不重要。

將最終結果放入 nums 的前 k 個槽後返回 k。

不要為另一個數組分配額外的空間。您必須通過使用 O(1) 額外內存就地修改輸入數組來做到這一點。


# 範例

Example 1:
```
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

Example 2:
```
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

```



# 解題思路
1.檢查重複次數是否超過2次
2.超過時將它刪除
# Solution
```Javascript
var removeDuplicates = function (nums) {
    let num = 1;
    let key = undefined;
    let start = 0;
    while (start < nums.length) {
        if (nums[start] == key) {
            num++;
            if (num > 2) {
                nums.splice(start, 1);
            } else {
                start++;
            }
        }
        else {
            key = nums[start];
            num = 1;
            start++;
        }
    }
};
```