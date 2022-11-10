---
title: Javascript(leetcode#345) Reverse Vowels of a String
date: 2022-11-04 13:11:22
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**



# 題目
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
<!--more-->

# 翻譯
給定一個字串s，只反轉字串裡所有的元音並返回它

元音是“a”、“e”、“i”、“o”和“u”，它們可以多次出現在小寫和大寫中。


# 範例

Example 1:
```
Input: s = "hello"
Output: "holle"
```


Example 2:
```
Input: s = "leetcode"
Output: "leotcede"
```



# 解題思路
1.設一個start,和end節點
2.從開始往後找到元音及結束往前找元音
3.都找到後互相交換位置
4.當start>end結束交換

# 程式碼

```javascript
var reverseVowels = function(s) {
    let jugde=function(char){
        let arr=["a","e","i","o","u","A","E","I","O","U"];
        if(arr.includes(char)){
            return true;
        }
        return false;
    }
    let start=0;
    let end=s.length-1;
    let len=Math.floor(s.length);
    let arr=s.split("");
    while(true){
        while(!jugde(arr[start])&&arr[start]!=undefined){
            start++;
        }
        while(!jugde(arr[end])&&arr[end]!=undefined){
            end--;
        }
        if(start>end){
            break;
        }
        let temp=arr[end];
        arr[end]=arr[start];
        arr[start]=temp;
        start++;
        end--;
    }
    return arr.join("");
};
```