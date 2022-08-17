---
title: Javascript(Leetcode#4) Median of Two Sorted Arrays
date: 2022-07-27 10:26:45
categories: 
- Leetcode 
- Leetcode Hard 
tags:
- Leetcode
- Javascript
---

**Difficult:Hard**

# 題目
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.



The overall run time complexity should be O(log (m+n)).



<!--more-->

# 翻譯

給定兩個大小分別為 m 和 n 的排序數組 nums1 和 nums2，返回兩個排序數組的中位數。

總體運行時間複雜度應為 O(log (m+n))。

# 範例

Example 1

{% codeblock %}
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
{% endcodeblock %}

Example 2

{% codeblock %}
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
{% endcodeblock %}

# 解題思路

1.將兩個排序數組結合並重新排序成新的數組

2.取出中間值，奇數時直接回傳中間值，偶數時回傳中間值和上一個值相加平均


# Solution

Code 1 :
```javascript
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [...nums1, ...nums2].sort(function (a, b) {
        return a - b;
    });
    let len = Math.floor(arr.length / 2);
    let medium = 0;

    medium = arr[len];
    if (arr.length % 2 == 0) {
        medium += arr[len - 1];
        medium = medium / 2;
    }

    return medium;

}
```

Code 2:
```javascript
var findMedianSortedArrays = function (nums1, nums2) {
    let newarr = [];
    let nums1index = 0;
    let nums2index = 0;
    while (newarr.length != nums1.length + nums2.length) {
        let num1val = nums1[nums1index];
        let num2val = nums2[nums2index];
        if (num1val < num2val || num2val == undefined) {
            newarr.push(num1val);
            nums1index++;
        } else {
            newarr.push(num2val);
            nums2index++;
        }
    }

    let len = Math.floor(newarr.length / 2);
    let medium = 0;

    medium = newarr[len];
    if (newarr.length % 2 == 0) {
        medium += newarr[len - 1];
        medium = medium / 2;
    }

    return medium;
}
```