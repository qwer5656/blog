---
title: Javascript(leetcode#1544) Make The String Great
date: 2022-11-08 09:22:17
categories: 
- Leetcode 
- Leetcode Easy 
tags:
- Leetcode
- Javascript
---

**Difficult:Easy**



# 題目
Given a string s of lower and upper case English letters.

A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

0 <= i <= s.length - 2
s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

Notice that an empty string is also good.
<!--more-->

# 翻譯
給定一個由大小寫英文字母組成的字符串 s。

一個好的字符串是沒有兩個相鄰字符 s[i] 和 s[i + 1] 的字符串，其中：

0 <= i <= s.length - 2
s[i] 是小寫字母，s[i + 1] 是相同的字母，但大寫，反之亦然。
要使字符串變好，您可以選擇兩個使字符串變壞的相鄰字符並將它們刪除。您可以繼續這樣做，直到字符串變好。

把它弄好後返回字符串。答案在給定的約束下保證是唯一的。

請注意，空字符串也很好。


# 範例

Example 1:
```
Input: s = "leEeetcode"
Output: "leetcode"
Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
```


Example 2:
```
Input: s = "abBAcC"
Output: ""
Explanation: We have many possible scenarios, and all lead to the same answer. For example:
"abBAcC" --> "aAcC" --> "cC" --> ""
"abBAcC" --> "abBA" --> "aA" --> ""
```

Example 3:

```
Input: s = "s"
Output: "s"
```

# 解題思路
1. 設一個stack存取字元
2. last=[i]，s[char]=[i+1]
3. 判斷last是否為undefined及[i+1]!==last及last及[i+1]是否為對應大小寫
，以上都不是的話將[i+1]加入stack，是的話將last移除stack
4. 最後返回stack.join("")字串

# 程式碼

```javascript
const makeGood = s => {
   let stack=[];

   for(let char in s){
      let last=stack.at(-1);
      if(last&&last!==s[char]&&s[char].toLowerCase()===last.toLowerCase()){
        stack.pop();
      }else{
        stack.push(s[char]);
      }

   }

   return stack.join("");
};
```