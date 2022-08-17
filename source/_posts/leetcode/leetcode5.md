---
title: Javascript(Leetcode#5) Longest Palindromic Substring 
date: 2022-07-27 13:13:19
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---


**Difficult:Medium**

# 題目

Given a string s, return the longest palindromic substring in s.

<!--more-->


# 翻譯

給定一個字串s，返回 s 中最長的回文子串

# 範例

Example 1

{% codeblock %}
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
{% endcodeblock %}


{% codeblock %}
Input: s = "cbbd"
Output: "bb"
{% endcodeblock %}

# 解題思路

1.長度為1回傳str第一個char

2.left位置的值與right值做比較，若中間還有值時，依照偶數和奇數做不同流程

3.偶數時right和left依續往前比較，若都相同時傳回最終字串

4.奇數時right和left依續往前比較，若中間剩一個值不再比較，若都相同時傳回最終字串

# Solution

Code 1 :
```javascript
function lengthOfLongestSubstring(str) {
    if (str.length == 1) {
        return str;
    }
    let chache = '';
    let maxstr = "";
    let startindex = 0;
    let endindex = 1;
    let lt=0;
    let rt=0;
    while (startindex != str.length - 1) {
        if (endindex == str.length) {
            chache = "";
            startindex++;
            endindex = startindex + 1;
        }
        let cur = str[endindex];
        if (str[startindex] == cur && startindex != endindex) {
            let sub=endindex - startindex;
            if (sub > 2) {
                lt=startindex;
                rt=endindex;
                let judge=true;
                while(lt!=rt&&rt>lt){
                    let ltval=str[lt];
                    let rtval=str[rt];
                    if(ltval!=rtval){
                        judge=false;
                        break;
                    }
                    lt++;
                    rt--;
                }


                if (judge==true) {
                    chache=str.substring(startindex,endindex+1);
                    if (chache.length > maxstr.length) {
                        maxstr = chache;
                    }
                }

            }
            else {
                chache=str.substring(startindex,endindex+1);
                if (chache.length > maxstr.length) {
                    maxstr = chache;
                }
            }
           

        }
        endindex++;
    }
    return maxstr;
}
```

Code 1 :
```javascript
var longestPalindrome = function (s) {
    var longest = '', c;
    for (c = 0; c < s.length; c++) {
        if ((s.length - c) * 2 <= longest.length) break;  // exit early if remaining can't surpass largest found

        longest = scanOutward(s, longest, c, c);   // odd length "ata"
        longest = scanOutward(s, longest, c + 1, c); // even length "atta"
    }
    return longest;
};

function scanOutward(s, longest, left, right) {
    if (left > 0 && right < s.length && s[left - 1] === s[right + 1]) {
        return scanOutward(s, longest, left - 1, right + 1);
    } else {
        return (right - left + 1 >= longest.length) ? s.substring(left, right + 1) : longest;
    }
}
```




