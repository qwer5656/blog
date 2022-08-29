---
title: Javascript(leetcode#88)  Merge Sorted Array
date: 2022-08-25 09:00:20
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**


# 題目
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
<!--more-->

# 翻譯
給定兩個整數數組 nums1 和 nums2，按非遞減順序排序，以及兩個整數 m 和 n，分別表示 nums1 和 nums2 中的元素個數。

將 nums1 和 nums2 合併為一個按非降序排序的數組。

最終的排序數組不應由函數返回，而是存儲在數組 nums1 中。為了適應這一點，nums1 的長度為 m + n，其中前 m 個元素表示應該合併的元素，最後 n 個元素設置為 0 並且應該被忽略。 nums2 的長度為 n。


Example 1:
```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

Example 2:
```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

Example 3:
```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```



# 解題思路
1.先將nums1和nums2合併
2.再將nums1排序
# Solution
```Javascript
var merge = function(nums1, m, nums2, n) {
    for(let i=m;i<m+n;i++){
        nums1[i]=nums2[i-m];
    }
    nums1=nums1.sort(function(a,b){
        return a-b;
    });
};
```