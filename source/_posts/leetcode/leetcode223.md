---
title: Javascript(leetcode#223) Rectangle Area
date:  2022-11-17 15:30:36
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.

The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).

The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).
 
 

<!--more-->

# 翻譯
給定二維平面中兩個直線矩形的坐標，返回兩個矩形覆蓋的總面積。

第一個矩形由其左下角 (ax1, ay1) 和右上角 (ax2, ay2) 定義。

第二個矩形由其左下角 (bx1, by1) 和右上角 (bx2, by2) 定義。
# 範例

Example 1:
```
Input: ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
Output: 45
```

Example 2:
```
Input: ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
Output: 16
```

# 解題思路
1. 將xarea和yarea先求出
2. 將相交的面積求出
3  返回xarea+yarea-相交面積
# 程式碼

```javascript
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let xarea = (ax2 - ax1) * (ay2 - ay1);
    let yarea = (bx2 - bx1) * (by2 - by1);
    let subarea = 0;
    let w = 0;
    let h = 0;
    let getlen=function(x1,x2,y1,y2){
        if(x1==x2||y1==y2){
            return 0;
        }
        if((x1<y1&&x2<y1)||(x1>y1&&x1>y2)){
            return 0;
        }
        let arr=[];
        arr.push(x1,x2,y1,y2);

        arr.sort(function(a,b){
            return a-b;
        });
        return arr[2]-arr[1];

    }
    w=getlen(ax1,ax2,bx1,bx2);
    h=getlen(ay1,ay2,by1,by2);
    subarea = w * h;
    return xarea + yarea - subarea;
};
```

