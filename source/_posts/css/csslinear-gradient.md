---
title: Css linear-gradient
date: 2022-07-27 11:24:04
tags:
- Css
- linear-gradient
categories: Css
---

# 漸層 background linear-gradient
css background:linear-gradient(direction, color-stop1, color-stop2, ...);

direction角度 可設為 to top,to left,to right,to left 或是 (-∞~∞deg) 預設是由0deg 由下而上

<!--more-->

## 範例一

<div class="exmaple1">&nbsp;</div>
</br>

```css
background:linear-gradient(to top,red,yellow);
```
linear-gradient  有一個特性為 repeat-linear-gradient 重複貼上直到填滿為止

## 範例二

<div class="exmaple2_1">&nbsp;</div>
</br>
<div class="exmaple2_2">&nbsp;</div>


</br>
```css
.exmaple2_1  /*first style */
{
width:100%;
height:100px;
  background:repeating-linear-gradient(90deg,black 0%,black 5%,transparent 5%,transparent 10%);
}
.exmaple2_2 /*second style */
{
width:100%;
height:100px;
  background:repeating-linear-gradient(135deg,red 0%,red 5%,transparent 5%,transparent 10%);
}
```

結合上面方法做出特殊圖案

## 範例三
<div id="exmaple3">&nbsp;</div>
</br>

```css
#exmaple3 {  
    height: 300px;
    width:300px;
   background:linear-gradient(45deg,#ff8000 50%,transparent 50%),linear-gradient(135deg,#f9ff21 100%,transparent 100%),linear-gradient(135deg, #12e6c8 50%, transparent 50%) 100% 0%,linear-gradient(45deg, #0000ff 100%, transparent 100%) 100% 0%,linear-gradient(135deg,#dcb5ff 50%,transparent 50%) 0% 100%,linear-gradient(135deg,#ff5da2 100%,transparent 100%) 0% 100%,linear-gradient(45deg, #8b104e 50%, transparent 50%) 100% 100%,linear-gradient(135deg, #77529e 100%, transparent 100%) 100% 100%;
   background-size:50% 50%;
   background-repeat:no-repeat;
   border-radius:50%;
   border:10px solid #ff1f5a;
   box-sizing:border-box;
   transition:0.5s all;
   box-shadow:0px 0px 10px gray;
   position:relative;
}
#exmaple3::after
{
  content:'';
  position:absolute;
  display:block;
  border:1px solid #ff1f5a;
  width:10%;
  height:10%;
  left:50%;
  top:50%;
  border-radius:50%;
  transform:translate(-50%,-50%);
  box-shadow:inset 0px 0px 5px white;
}
#exmaple3:hover
{
  transform:rotate(360deg);
}
```

<style>
.exmaple1 {
   background:linear-gradient(to top,red,yellow);
}
.exmaple2_1  /*first style */
{
width:100%;
height:100px;
  background:repeating-linear-gradient(90deg,black 0%,black 5%,transparent 5%,transparent 10%);
}
.exmaple2_2 /*second style */
{
width:100%;
height:100px;
  background:repeating-linear-gradient(135deg,red 0%,red 5%,transparent 5%,transparent 10%);
}
#exmaple3 {  
    height: 300px;
width:300px;
   background:linear-gradient(45deg,#ff8000 50%,transparent 50%),linear-gradient(135deg,#f9ff21 100%,transparent 100%),linear-gradient(135deg, #12e6c8 50%, transparent 50%) 100% 0%,linear-gradient(45deg, #0000ff 100%, transparent 100%) 100% 0%,linear-gradient(135deg,#dcb5ff 50%,transparent 50%) 0% 100%,linear-gradient(135deg,#ff5da2 100%,transparent 100%) 0% 100%,linear-gradient(45deg, #8b104e 50%, transparent 50%) 100% 100%,linear-gradient(135deg, #77529e 100%, transparent 100%) 100% 100%;
   background-size:50% 50%;
   background-repeat:no-repeat;
   border-radius:50%;
   border:10px solid #ff1f5a;
   box-sizing:border-box;
   transition:0.5s all;
   box-shadow:0px 0px 10px gray;
   position:relative;
}
#exmaple3::after
{
  content:'';
  position:absolute;
  display:block;
  border:1px solid #ff1f5a;
  width:10%;
  height:10%;
  left:50%;
  top:50%;
  border-radius:50%;
  transform:translate(-50%,-50%);
  box-shadow:inset 0px 0px 5px white;
}
#exmaple3:hover
{
  transform:rotate(360deg);
}
</style>