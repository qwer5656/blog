---
title: Javascript(leetcode#292)  Nim Game
date:  2022-11-18 08:51:36
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**


# 題目
You are playing the following Nim Game with your friend:

Initially, there is a heap of stones on the table.
You and your friend will alternate taking turns, and you go first.
On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
The one who removes the last stone is the winner.
Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.


<!--more-->

# 翻譯
你正在和你的朋友玩以下 Nim 遊戲：

最初，桌子上有一堆石頭。
你和你的朋友輪流輪流，你先走。
每輪，輪到他的人將從堆中移除 1 到 3 顆石頭。
移走最後一塊石頭的人就是贏家。
給定 n，即堆中石頭的數量，假設您和您的朋友都玩得最好，如果您能贏得比賽，則返回 true，否則返回 false。

# 範例

Example 1:
```
Input: n = 4
Output: false
Explanation: These are the possible outcomes:
1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
In all outcomes, your friend wins.
```


Example 2:
```
Input: n = 1
Output: true
```



Example 3:
```
Input: n = 2
Output: true
```



# 解題思路
1. 找到規律能被4整除時為對方獲勝

# 程式碼

```javascript
var canWinNim = function(n) {
    return n%4==0?false:true;
};
```