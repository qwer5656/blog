---
title: Javascript(leetcode#165) Compare Version Numbers
date:  2022-10-25 09:08:44
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given two version numbers, version1 and version2, compare them.

Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.

To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.

Return the following:

If version1 < version2, return -1.
If version1 > version2, return 1.
Otherwise, return 0.
 

<!--more-->

# 翻譯
給定兩個版本號，version1 和 version2，比較它們。

版本號由一個或多個用點“.”連接的修訂組成。每個修訂版都由數字組成，並且可能包含前導零。每個修訂版至少包含一個字符。修訂是從左到右的 0 索引，最左邊的修訂是修訂 0，下一個修訂是修訂 1，依此類推。例如 2.5.33 和 0.1 是有效的版本號。

要比較版本號，請按從左到右的順序比較它們的修訂版本。使用忽略任何前導零的整數值比較修訂。這意味著修訂版 1 和 001 被視為相同。如果版本號未在索引處指定修訂，則將修訂視為 0。例如，版本 1.0 小於版本 1.1，因為它們的修訂 0 相同，但它們的修訂 1 分別為 0 和 1，以及 0 < 1。

返回以下內容：

如果版本 1 < 版本 2，則返回 -1。
如果版本 1 > 版本 2，則返回 1。
否則，返回 0。
# 範例

Example 1:
```
Input: version1 = "1.01", version2 = "1.001"
Output: 0
Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".
```


Example 2:
```
Input: version1 = "1.0", version2 = "1.0.0"
Output: 0
Explanation: version1 does not specify revision 2, which means it is treated as "0".
```


Example 3:
```
Input: version1 = "0.1", version2 = "1.1"
Output: -1
Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.
```




# 解題思路
1. 將兩個版本分割
2. 計算兩者中最長的長度
3. 依序比較

# 程式碼

```javascript
var compareVersion = function(version1, version2) {
    let version1arr=version1.split(".");
    let version2arr=version2.split(".");
    let len=Math.max(version1arr.length,version2arr.length);
    for(let i=0;i<len;i++){
      let val1=!version1arr[i]?0:parseInt(version1arr[i]);
      let val2=!version2arr[i]?0:parseInt(version2arr[i]);
      if(val1<val2){
        return -1;
      }
      else if(val1>val2){
        return 1;
      }
    }

    return 0;
};
```