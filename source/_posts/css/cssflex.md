---
title: 圖解 CSS Flex排版介紹
tags:
- Css
- Flex
categories: Css
---

# 前言
網頁排版分為Flex、Grid還有早期的float，這篇我們要來介紹Flex的排版，Flex中分為外容器和內元件，
下圖解釋兩種的差異


![flexcontainer](../image/css/flex/cssflex.png "flexcontainer")
<!--more-->

# Flex布局是甚麼
Flex(Flexible Box)縮寫，意為彈性布局，為盒子提供最大的靈活性，任何一個容器都可使用Flex布局
如下例子
```
.box{
  display: flex;
}
```
也可使用行內元素
```
.box{
  display: inline-flex;
}
```

<h3 style="color:red">注意:設為flex布局時，float和clear及vertical-align屬性將失效</h3>

# flex 布局屬性

## 外容器
 - display
 - flex-flow
   + flex-direction
   + flex-wrap
 - justify-content
 - align-items

## 內元件
- flex
    + flex-grow
    + flex-shrink
    + flex-basis
- order
- align-self


# 外容器介紹

### display
首先要用flex布局之前，要把display設為flex或inline-flex。

```
.flex-container {
  display: flex | inline-flex;
}
```


### flex-direction
Flex 決定內元件排序方向的重要屬性，這也直接影響了 flex 的軸線 (主軸及交錯軸)，flex 中的對齊屬性都與此有很大的相關聯，下圖中是預設狀態的軸線方向。

![flex_direction](../image/css/flex/flex-axis.png "flex_direction")


這個屬性決定了flex主軸的方向

![flex_direction](../image/css/flex/flex_direction.png "flex_direction")

圖上排列
```
.flex-container{
  flex-direction:column-reverse | column | row | row-reverse;
}
```

```
row(默認值): 主軸水平排列，起點由左往右

row-reverse: 主軸水平排列，起點由右向左

column: 主軸垂直排列，起點由上到下

row-reverse: 主軸垂直排列，起點由下到上

```

### flex-wrap
默認情況下當內容物超過主體寬度時並不會換行，要讓內容物換行時須定義flex-wrap並把屬性值設定為wrap

![flex-wrap](../image/css/flex/flex-wrap.png "flex-wrap")

```
.flex-container{
  flex-wrap:nowrap | wrap | wrap-reverse;
}
```

nowrap(默認狀態)
![flex-nowrap](../image/css/flex/flex_wrap_nowrap.png "flex-nowrap")

wrap(內容物換行)
![flex-wrap](../image/css/flex/flex_wrap_wrap.jpg "flex-wrap")

wrap-reverse(內容物換行，第一行再下方)
![flex-wrap](../image/css/flex/flex_wrap_reverse.jpg "flex-wrap")


### flex-flow
flex-flow為flex-direction和flex-wrap的簡寫，默認值為row nowrap

```
.flex-container{
  flex-flow:<flex-direction> <flex-wrap>;
}
```


### justify-content
主軸對齊方式

![justify-content](../image/css/flex/flex_justify_content.png "justify-content")

```
.flex-container{
  justify-content:flex-start | flex-end | center | space-between | space-around;
}
```

```
flex-start(默認值):主軸起點對齊

flex-end:主軸終點對齊

center:主軸的中心點對齊

space-between:兩端靠齊，項目之間的間隔相等

space-around:項目之間的間隔相等，中間的項目間隔由於是兩個項目間隔合再一起會大一倍

```

### align-items
交錯軸對齊方式

![align_items](../image/css/flex/flex_align_items.png "align_items")

```
.flex-container{
  align-items:flex-start | flex-end | center | stretch | baseline;
}
```

```
stretch(默認):如果項目未設定高度或auto，將占滿整個容器的高度

flex-start: 交錯軸的起點對齊

flex-end: 交錯軸的終點對齊

center: 交錯軸的中心點對齊

baseline:項目的第一行文字設為基礎線對齊


```

### align-content
多根軸線的對齊方式，當只有一個軸線時，該屬性不起作用

![align-content](../image/css/flex/flex_align_content.png "align-content")

```
.flex-container{
  align-content:flex-start | flex-end | center | stretch | space-between | space-around; 
}
```

```
stretch（默認值）：軸線佔滿整個交錯軸

flex-start: 交錯軸的起點對齊

flex-end: 交錯軸的終點對齊

center: 交錯軸中心點對齊

space-between:與交錯軸兩端對齊，軸線之間的間隔平均分布

space-around:軸線兩側的間隔相等，軸線中間的間隔比軸線與邊的間隔大一倍

```


# 內元件介紹

### flex
flex為縮寫，裡面包合flex-grow、flex-shrink、flex-basis，如果只設定一個則是flex-grow。


```
.flex-item{
  flex:<flex-grow> <flex-shrink> <flex-basis>;
}
```

- flex-grow:項目的伸展性，是一個數值，當空間分配還有剩餘空間時，預設值為0，當伸展性為0時。則不會縮放

![flex-grow](../image/css/flex/flex-grow.png "flex-grow")

- flex-shrink:項目的收縮性，是一個數值，當空間分配還有剩餘空間時，預設值為1，當收縮性為0時。則不會縮放

![flex-shrink](../image/css/flex/flex-shrink.jpg "flex-shrink")

- flex-basis:項目的基準值，可使用不同單位


### order
項目的排列順序，數值越小，排列越前面，默認為0

![flex_order](../image/css/flex/flex_order.png "flex_order")

```
.flex-item{
  order: <integer>;
}
```

### align-self
允許單個項目與其他項目不一樣的對齊方式，可覆蓋align-items的屬性，預設值為auto，自動繼承父元素的align-items

```
.flex-item{
  align-item:auto | flex-start | flex-end | center | stretch | baseline;
}
```

![flex_order](../image/css/flex/flex-align-item.png "flex_order")

該屬性6個值，除了auto，其他值都與align-items對齊方式一樣

# 參考資料
https://www.runoob.com/w3cnote/flex-grammar.html

https://www.casper.tw/css/2017/07/21/css-flex/