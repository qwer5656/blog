---
title: "[探討]JavaScript Hoisting 是什麼？"
date: 2022-07-28 14:09:42
tags:
- JavaScript
- Hoisting
categories: JavaScript
---

# Hoisting 是甚麼?

先看下面的程式碼

```JavaScript
console.log(a);

```

<!-- more -->
在尚未宣告 a 變數之下，呼叫 a 變數會得到「a 還沒被宣告」這樣的錯誤：

![error](../image/jshosting/hostingerror.PNG "error")



 Javascript 是一行一行依序執行的語言，如果我把宣告 a 變數這行加在 console 下面，照理說還沒有跑到定義那一行，又呼叫 a ，應該會出現一樣的錯誤：

```JavaScript
console.log(a);
var a = 2;
```

結果卻是回傳了 undefined：


如果是函式，一樣在宣告函式之前呼叫他：
```JavaScript
name();
function name(){
  return 'Neil'
}


```

也回傳了正確的值：Neil

以上的現象，就是 Hoisting，我喜歡用一句話記憶 Hoisting 的概念：「幫你留位子」，因為 Hoisting 就是 Javascript 在執行任何程式碼之前，先把宣告的變數和函式放進記憶體空間裡，就像是事先幫他們留個位子的感覺。而變數和函數的 Hoisting 略有不同，以下來看幾個 Hoisting 的特性：


## 1.變數的宣告 (Declarations) 會被提升

```JavaScript
a=1;
console.log(a); // 1
var a;

```

在這裡我們在 console 的下面才宣告 a，但是因為宣告會被提升，在執行任何程式碼之前，Javascript 就幫他留了位子，所以其實執行起來就像是這樣：


```javascript
var a;
a = 1;
console.log(a); // 1
```

## 2.變數的初始化不會提升
```javascript

console.log(a); // undefined
var a=1;
```

從這裡我們就可以看出賦值沒有被提升，只有變數宣告被提升

undefined 跟 is not defined 是不一樣的意思
undefined是 有宣告沒賦值
is not defined 是沒宣告也沒賦值

## 3.函式陳述式 (function declaration) 會被提升

```javascript
test();// hello world
function test(){
    console.log("hello world");
}
```

函數陳述式宣告前呼叫函數，可以成功執行

## 4.函式運算式 (function expression) 不會被提升
```javascript
test(); 
var test=function(){
    console.log("hello world");
}
```
![error](../image/jshosting/hostingfnerror.png "error")

變數有被提升，但賦值沒被提升所以會跳出
<font color="#dd00">test is not a function</font>

## 5.函式與變數同名，函式優先

```javascript

console.log(test); //fn test(){}
var test="hello world";
function test(){
    console.log("hello world");
}
```
如果變數和函數同名時，函數和變數都會提升，函數優先級較高會覆蓋原本的變數，若是多個函數同名的話，後會覆蓋前

## 6.函式內的變數只會函數內的範疇提升
```javascript

test();
console.log(a); //a is not define
function test(){
  
    console.log(a);  // undefined
      var a="hello world";
}
```
![error](../image/jshosting/hostinginlinefnerror.png "error")

函數外的a跳出錯誤<font color="#dd00">a is not define</font>，函數內的a因為只有變數a提升但沒賦值所以印出undefined

# let, const and Hoisting
在 W3C 中是這樣說的：

>Variables and constants declared with let or const are not hoisted!
由 let 和 const 宣告的變數不會被提升

你可能會想說：「哦～所以 let 沒有變數提升！」，那你就太天真了，其實在 let/const 中也存在變數提升的，並且會提升到區塊作用域的頂部，但是他還有另一個概念就是「暫時死區」，也就是如果在宣告變數之前使用變數，這個變數就是存在「暫時死區」中無法存取！這時候使用它就會報錯 ReferenceError。

暫時死區的好處
暫時死區的特性可以幫助我們養成在變數還沒宣告之前不要使用他的好習慣，讓程式碼可讀性提高！更好理解，這也是建議使用 let/const 宣告變數的原因之一哦！

```javascript
console.log(name); // Uncaught ReferenceError: Cannot access 'name' before initialization
let name;
```
