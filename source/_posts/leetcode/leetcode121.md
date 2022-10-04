---
title: Javascript(leetcode#121) Best Time to Buy and Sell Stock
date:  2022-09-27 08:48:42
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**



# 題目
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
<!--more-->
# 翻譯

給定一個數組價格，其中價格 [i] 是給定股票在第 i 天的價格。

您希望通過選擇一天購買一隻股票並選擇未來的另一天出售該股票來最大化您的利潤。

返回您可以從此交易中獲得的最大利潤。如果您無法獲得任何利潤，則返回 0。

# 範例

Example 1:

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```


Example 2:

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```



# 解題思路
1.先定義一個min存放當前的最小值
2.若價錢比最小值大時，比較利潤若比max大時改變max
3.min遇到比自己小時，更改min的值
4.最後返回max

# Solution
```javascript
var maxProfit = function (prices) {
    let max = 0;
    let min = null;
    for (let i = 0; i < prices.length; i++) {
        if (min == null) {
            min = prices[i];
        }
        else if (min < prices[i]) {
            let val = prices[i] - min;
            max = Math.max(max, val);
        }
        else {
            min = prices[i];
        }
    }
    return max;
};
```