---
title: 資料結構堆疊(Stack)
date: 2022-09-08 14:48:11
tags: 
- javascript
- Stack
- Data Structure 
categories: JavaScript
---

# 前言
# 什麼是 Stack？

stack是一種資料結構，資料像盤子一個一個往上疊，只能從最上面的開始拿取，採取先進後出的概念，即「Last In First Out」縮寫「LIFO」。
<!--more-->


![markdown](../image/javascript/Lifo_stack.png  "markdown")
source: <a href="https://en.wikipedia.org/wiki/Stack_(abstract_data_type)">Stack (abstract data type) - Wikipedia</a>

# 應用
Stack 的特性就是取得最新的資料，所以有這種需求的應用會適合用 stack 來處理，例如：

1.瀏覽器的 call stack
2.Undo / Redo 功能
3.歷史紀錄

# Array 實作
JavaScript 有Array可以直接實作出stack的資料結構，push將資料堆疊，pop取出最後的資料
```JavaScript
let arr=[];
arr.push(1);
arr.push(2);
arr.pop();
console.log(arr);
```

# Object Property 實作

```javascript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(val) {
        let node = new Node(val);
        if (this.size == 0) {
            this.top = node;
        } else {
            node.next=this.top;
            this.top=node;
        }
        this.size++;

    }
    pop() {
        if (this.size == 0) {
            return;
        }
        this.top=this.top.next;
        this.size--;
      
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
console.log(stack);
```

# 結語

1.以上程式碼利用javascript的Array和Object Property做出stack的資料結構

2.堆疊常用在動態編成和遞迴中，不過要注意太多堆疊會造成overflow的錯誤