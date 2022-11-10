---
title: Javascript(leetcode#155) Min Stack
date:  2022-10-25 09:08:41
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.


<!--more-->

# 翻譯
設計一個支持 push、pop、top 和在恆定時間內檢索最小元素的堆棧。

實現 MinStack 類：

MinStack() 初始化堆棧對象。
void push(int val) 將元素 val 推入堆棧。
void pop() 移除棧頂元素。
int top() 獲取棧頂元素。
int getMin() 檢索堆棧中的最小元素。
您必須為每個函數實現具有 O(1) 時間複雜度的解決方案。

# 範例

Example 1:
```
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```




# 解題思路
1. 撰寫資料結構stack堆疊的各種function

# 程式碼

```javascript
var MinStack = function() {
    this.arr=[];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.arr.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   return Math.min(...this.arr);
};
```