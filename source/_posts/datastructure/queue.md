---
title: 資料結構隊列(Queue)
date: 2022-09-12 10:45:05
tags: 
- javascript
- Queue
- Data Structure 
categories: JavaScript
---

# 前言

# 何謂Queue
Queue是一種先進先出(FIFO, First-In-First-Out)的資料結構，它與堆疊處理資料方式是不大一樣的，亦即資料處理是在不同邊進行，也就是資料由一端加入，由另一端刪除。生活中就有用到隊列的實例，如排隊買飲料第一個購買飲料的人，會先結帳。
<!--more-->

![markdown](../image/javascript/queue.png  "markdown")
source: <a href="https://emn178.pixnet.net/blog/post/93475832-%E4%BD%87%E5%88%97%28queue%29">Queue(圖片來源)</a>


# 定義
1. 一群相同性質元素的組合，即有序串列(Ordered List) 。
2. 具有 FIFO(First In First Out) 先進先出的性質。
3. 加入元素的動作發生在 Rear(後)端。
4. 刪除元素的動作發生在 Front(前)端。
5. Add/Delete 的動作皆發生在不同兩端

# Array實作
```javascript

function Queue(num) {
    let arr = [];
    let max = num;

    this.Add = function (val) {
        if (!this.IsFull()) {
            arr.push(val);
        } else {
            console.log("Queue is Full");
        }
    }
    this.Delete = function () {
        return arr.shift();
    }
    this.IsEmpty = function () {
        if (arr.length == 0) return true;
        return false;
    }
    this.IsFull = function () {
        if (arr.length == max) {
            return true;
        }
        return false;
    }
    this.getQueue = function () {
        console.log(arr);
    }

}

let Queue1 = new Queue(4);
Queue1.Add(1);
Queue1.Add(3);
Queue1.Add(1);
Queue1.Add(3);
Queue1.Add(1);
Queue1.Add(3);
Queue1.getQueue();
```

# Object Property 實作
```javascript

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor(val) {
        this.fornt = null;
        this.rear = null;
        this.max = val;
        this.len = 0;
    }
    Add(val) {
        if (this.len > this.max) {
            return;
        }

        let node = new Node(val);
        if (this.fornt == null) {
            this.fornt = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = this.rear.next;
        }
        this.len++;
    }
    Delete() {
        if (this.fornt == null) {
            return;
        }
        this.fornt = this.fornt.next;
        this.len--;
    }
    GetQueue() {
        return this.fornt;
    }
    IsEmpty() {
        return this.fornt == null ? true : false;
    }
    IsFull() {
        return this.max == this.len ? true : false;
    }
}

let qs = new Queue(4);
console.log(qs.IsEmpty());
qs.Add(1);
qs.Add(2);
qs.Add(3);
qs.Add(4);
console.log(qs.IsFull());
qs.Delete(4);
console.log(qs.IsFull());
console.log(qs.GetQueue());
```


# 結語

1.以上程式碼利用javascript的Array和Object Property做出Queue的資料結構

2.Queue
用大O符號表示的時間複雜度
演算法 | 平均   | 最差
------ | ------ |----------
空間   | O(n)   | O(n)
搜尋   | O(n)   | O(n)
插入   | O(1)   | O(1)  
刪除   | O(1)   | O(1)