---
title: Javascript(leetcode#374) Guess Number Higher or Lower
date: 2022-11-16 09:32:06
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**



# 題目
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

 
<!--more-->

# 翻譯
我們正在玩猜謎遊戲。遊戲如下：

我從 1 到 n 中選擇一個數字。你得猜猜我選了哪個號碼。

每次你猜錯，我都會告訴你我選的數字是比你猜的高還是低。

您調用預定義的 API int guess(int num)，它返回三種可能的結果：

-1：你猜的比我選的數字大（即 num > pick）。
1：你猜的比我選的數字小（即num < pick）。
0：你的猜測等於我選擇的數字（即 num == pick）。
返回我選擇的號碼。


# 範例

Example 1:
```
Input: n = 10, pick = 6
Output: 6
```


Example 2:
```
Input: n = 1, pick = 1
Output: 1
```

Example 3:
```
Input: n = 2, pick = 1
Output: 1
```


# 解題思路
1. 設上限和下限，取中間值來判斷是否猜對

# 程式碼

```javascript
var guessNumber = function(n) {
    let num=Math.floor(n/2);
    let cell=n;
    let floor=1;
    while(guess(num)!=0){
        if(guess(num)==1){
            let mids=Math.ceil((cell+num)/2);
            floor=num;
             num=mids;
        }
         else if(guess(num)==-1){
            let mids=Math.floor((floor+num)/2);
            cell=num;
            num=mids;
         }
    }
    return num;
};
```