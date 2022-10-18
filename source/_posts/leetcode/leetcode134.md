---
title: Javascript(leetcode#134)  Gas Station
date:  2022-10-05 10:51:54
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**



# 題目
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
<!--more-->

# 翻譯
沿環形路線有 n 個加油站，第 i 個加油站的加油量為 gas[i]。

你有一輛油箱無限的汽車，從第 i 個站到下一個 (i + 1) 個站需要花費 [i] 的汽油。 您從其中一個加油站的空油箱開始旅程。

給定兩個整數數組 gas 和 cost，如果您可以沿順時針方向繞電路一圈，則返回起始加油站的索引，否則返回 -1。 如果存在解，則保證唯一

# 範例

Example 1:

```
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
```

Example 2:

```
Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
```

# 解題思路
1.已知返回原位必須經過所有的gas陣列
2.total紀錄經過的所有的和
3.start紀錄解的位置
4.curr紀錄當前的油量是否夠
# Solution

```javascript
var canCompleteCircuit = function(gas, cost) {
    let [curr, total, start] = [0, 0, 0];
    for(let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        curr += gas[i] - cost[i];
        if(curr < 0) {
            curr = 0;
            start = i+1;
        }   
    }
    return total >= 0 ? start : -1;
};

```