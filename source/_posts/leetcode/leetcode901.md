---
title: Javascript(leetcode#901) Longest Palindrome by Concatenating Two Letter Words
date:  2022-11-09 09:12:09
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.

For example, if the price of a stock over the next 7 days were [100,80,60,70,60,75,85], then the stock spans would be [1,1,1,2,1,4,6].
Implement the StockSpanner class:

StockSpanner() Initializes the object of the class.
int next(int price) Returns the span of the stock's price given that today's price is price.
<!--more-->


# 翻譯
設計一種算法，收集某隻股票的每日報價並返回該股票當天價格的跨度。

今天股票價格的跨度定義為股票價格小於或等於今天價格的最大連續天數（從今天開始向後）。

例如，如果未來 7 天的股票價格為 [100,80,60,70,60,75,85]，則股票跨度將為 [1,1,1,2,1,4, 6]。
實現 StockSpanner 類：

StockSpanner() 初始化類的對象。
int next(int price) 假設今天的價格是價格，則返回股票價格的跨度。


# 範例

Example 1:

```
Input
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]

Explanation
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6
```




# 解題思路
1. 用一個陣列儲存
2. next中num用來記數，與陣列的數做比較，若價錢小於數時跳出迴圈返回記數

# 程式碼

```javascript
var StockSpanner = function() {
    this.arr=[];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.arr.push(price);
    let num=0;
    for(let i=this.arr.length-1;i>=0;i--){
        if(price<this.arr[i]){
            break;
        }
        num++;
    }
    return num;

};
```