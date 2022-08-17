---
title: Javascript(Leetcode#6) Zigzag Conversion
date: 2022-07-27 14:53:34
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---


**Difficult:Medium**

# 題目

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)


```
P   A   H   N
A P L S I I G
Y   I   R
```
And then read line by line: "PAHNAPLSIIGYIR"


Write the code that will take a string and make this conversion given a number of rows:

```
string convert(string s, int numRows);

```
<!--more-->
# 翻譯
字符串"PAYPALISHIRING"在給定數量的行上以鋸齒形圖案寫入，如下所示：（您可能希望以固定字體顯示此圖案以提高可讀性）

然後逐行閱讀："PAHNAPLSIIGYIR"

編寫將採用字符串並在給定行數的情況下進行此轉換的代碼：

# 範例

Example 1

```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

Example 2

```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
```

Example 3

```
Input: s = "A", numRows = 1
Output: "A"
```


# 解題思路
1.若numRows為1 回傳s
2.將字串塞入二維矩陣
3.印出二維矩陣裡的字串


# Solution

Code 1 :
```javascript
var convert = function(s, numRows) {
    if(numRows==1){
        return s;
    }
    let outindex=0;
    let strindex=0;
    let arr=[];
    while(strindex<=s.length-1){
      
        for(let i=0;i<numRows;i++){
            let num=outindex%(numRows-1);
            if(strindex>s.length-1){
                break;
            }
            if(typeof arr[i]!="object"){
                arr[i]=[];
            }
            if(num==0){
                arr[i][outindex]=s[strindex];
                strindex++;
            }
            else if(i==numRows-num-1){
                arr[i][outindex]=s[strindex];
                strindex++;
            }
            else{
                arr[i][outindex]="";
            }
         

        }
        outindex++;

    }
    let newarr="";
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]!=""){
                newarr+=arr[i][j];
            }
        }
    }
    return newarr;
};

```
Code 2:
```javascript
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const calcRow = numRows - 1
    const base = calcRow * 2;
    let result = '';
    
    for (let i = 0; i < numRows; i++) {
        const start = base - (2* (i % calcRow))
        const gap = base - start || start;
        let num = i
        let isEven = true
        while(s[num]) {
            result += s[num];
            num += isEven ? start : gap
            isEven = !isEven;
        }
    }
    
    return result
};

```