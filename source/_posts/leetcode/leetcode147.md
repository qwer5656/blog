---
title: Javascript(leetcode#147) Insertion Sort List
date:  2022-10-20 08:56:08
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:

Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
It repeats until no input elements remain.
The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

![leetcode147](../image/leetcode/leetcode147_1.gif "leetcode147")

<!--more-->

# 翻譯
給定單鍊錶的頭部，使用插入排序對列表進行排序，並返回排序後的列表的頭部。

插入排序算法的步驟：

插入排序迭代，每次重複消耗一個輸入元素並增長一個排序的輸出列表。
在每次迭代中，插入排序從輸入數據中刪除一個元素，在排序列表中找到它所屬的位置並將其插入那裡。
它重複直到沒有輸入元素。
以下是插入排序算法的圖形示例。 部分排序的列表（黑色）最初只包含列表中的第一個元素。 每次迭代都會從輸入數據中刪除一個元素（紅色）並就地插入到排序列表中。


# 範例
Example 1:
![leetcode147](../image/leetcode/leetcode147_2.jpg "leetcode147")
```
Input: head = [4,2,1,3]
Output: [1,2,3,4]
```



Example 2:
![leetcode147](../image/leetcode/leetcode147_3.jpg "leetcode147")
```
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
```

# 解題思路
1. 插入演算法由第一個位置依序往下插入
2. 若比遇到的大時繼續往下比較，碰到比自己的值時，插入在他的前面

# 程式碼

```javascript
var insertionSortList = function (head) {
    let link = null;
    while (head) {
        if (link == null) {
            link = new ListNode(head.val);
        } else {
            link = insert(head.val, link);
        }
        head = head.next;
    }
    function insert(val, link) {
        let pre = null;
        let head = link;
        while (link) {
            if (val < link.val) {
                let root = new ListNode(val);
                if (pre == null) {

                    root.next = link;
                    return root;
                } else {
                    let temp = pre.next;
                    pre.next = root;
                    root.next = temp;

                    return head;
                }
            }
            pre = link;
            link = link.next;
        }
        pre.next = new ListNode(val);
        return head;
    }
    return link;
};
```