---
title: 資料結構連結串列(Linked List)
date: 2022-09-23 10:45:05
tags: 
- JavaScript
- LinkedList
- Data Structure 
categories: JavaScript
---

# 前言
Linked List(連結串列)是一種常見的資料結構，利用node節點來記錄、表示、儲存資料，且利用每個
node的next指向下一個node，以此來連接多個node，並以Null來代表linked List的終點。

<!--more-->

![markdown](../image/javascript/linklist.png  "markdown")


# 單向鏈結串列

# Object Property 實作
```JavaScript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
let headenode=new Node(10);
let second=new Node(12);

headenode.next=second;
```


# 結語

優點:
1.不需要像Array先定義大小，可自由擴充。

2.新增和刪除較Array來的容易，只需改動next的值

缺點:
1.由於linklist沒有index在取得某個位置的值時，需要從頭開始找

2.需要額外的紀體儲存next