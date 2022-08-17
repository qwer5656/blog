---
title: Javascript(leetcode#31) Next Permutation
date: 2022-08-05 09:20:08
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.
<!--more-->
# 翻譯
整數數組的排列是將其成員排列成序列或線性順序。

例如，對於 arr = [1,2,3]，以下被認為是 arr 的排列：[1,2,3], [1,3,2], [3,1,2], [2,3,1]。
整數數組的下一個排列是其整數的下一個字典序更大的排列。更正式地說，如果數組的所有排列都根據它們的字典順序在一個容器中排序，那麼該數組的下一個排列是在排序容器中跟隨它的排列。如果這種排列是不可能的，則必須將數組重新排列為盡可能低的順序（即按升序排序）。

例如，arr = [1,2,3] 的下一個排列是 [1,3,2]。
類似地，arr = [2,3,1] 的下一個排列是 [3,1,2]。
而 arr = [3,2,1] 的下一個排列是 [1,2,3] 因為 [3,2,1] 沒有更大的字典重排。
給定一個整數數組 nums，找到 nums 的下一個排列。

替換必須就位並且僅使用恆定的額外內存。

# 範例


Example 1:
```
Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.

```

Example 2:
```
Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []

```

Example 3:
```
Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
```


# 解題思路
1.從最後跟前面比較，若比前面大時將前面的數字給為較大它一點的值
2.將後面的值從小到最大依序填入

# Solution
Code 1 :
```Javascript
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