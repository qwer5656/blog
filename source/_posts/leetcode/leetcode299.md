---
title: Javascript(leetcode#299) Bulls and Cows
date:  2022-11-10 09:38:45
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
You are playing the Bulls and Cows game with your friend.

You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

The number of "bulls", which are digits in the guess that are in the correct position.
The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.
<!--more-->


# 翻譯
你正在和你的朋友玩公牛和奶牛的遊戲。

你寫下一個秘密號碼，讓你的朋友猜猜這個號碼是什麼。當您的朋友進行猜測時，您會提供以下信息的提示：

“公牛”的數量，即猜測中處於正確位置的數字。
“奶牛”的數量，即猜測中的數字，它們在您的密碼中，但位於錯誤的位置。具體來說，猜測中的非多頭數字可以重新排列，使其成為多頭。
給定秘密數字 secret 和你朋友的猜測，返回你朋友猜測的提示。

提示的格式應為“xAyB”，其中 x 是公牛的數量，y 是奶牛的數量。請注意，秘密和猜測都可能包含重複的數字。



# 範例

Example 1:

```
Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1807"
  |
"7810"
```


Example 2:

```
Input: secret = "1123", guess = "0111"
Output: "1A1B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1123"        "1123"
  |      or     |
"0111"        "0111"
Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
```




# 解題思路
1. 設 A和B分別儲存A和B數量，dultip將已經為A的位置儲存，remain將guess未配對到的數儲存
2. 首先secret和guess做比較將為A的位置存入dultip及剩餘guess的數存入remain
3. 在做B的判斷，secret迴圈去跟remain做比較，若遇到dultip裡的位置時跳過判斷，當remain包含secret，將B + 1及把數從remain刪掉

# 程式碼

```javascript
var getHint = function (secret, guess) {

    let A = 0;
    let B = 0;
    let dultip = [];
    let remain = [];
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            A++;
            dultip.push(i);
        } else {
            remain.push(guess[i]);
        }
    }
    for (let i = 0; i < secret.length; i++) {
        if(dultip.includes(i)) continue;

        if(remain.includes(secret[i])){
           let index=remain.indexOf(secret[i]);
           B++;
           remain.splice(index,1);
        }

    }

    return A + "A" + B + "B";
};
```