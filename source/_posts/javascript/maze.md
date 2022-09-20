---
title: 前端撰寫老鼠走迷宮
date: 2022-09-15 13:18:33
tags:
- JavaScript
- MAZE
categories: JavaScript
---

# 前言
了解了遞迴的用法我們就可以用遞迴幫忙我們解出迷宮的走法
<!--more-->
# 程式碼

```JavaScript
var map = document.querySelector("#map"); //抓取地圖
var n = 10; //地圖大小
var maparray = []; //地圖陣列
var index = 0; //正確路徑索引
var mouses = document.querySelector("#mouse"); //第一隻老鼠
var mouse1 = document.querySelector("#mouse1");//第二隻老鼠
var rotatechange = 0; //判定第一次轉
//老鼠物件
var mouse = {
    mousepath: [],//紀錄老鼠走過路徑
    direction: 0, //紀錄老鼠方向
    x: 1, //老鼠x座標
    y: 1, //老鼠y座標
};
//地圖 牆壁為0 可走通道1 
maparray = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
[0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
[0, 1, 1, 0, 1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
[0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
[0, 1, 0, 1, 1, 1, 0, 0, 1, 0],
[0, 0, 1, 0, 0, 1, 1, 1, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];



createmap(n); //建立迷宮
mousemove(mouse.x, mouse.y); //老鼠移動
var times = setInterval(mousemove, 200); //計時器

//老鼠移動函數
function mousemove(x, y) {
    x = mouse.x;//老鼠x座標
    y = mouse.y;//老鼠y座標
    maparray[x][y] = 2; //走過路徑設為2
    mouses.style.transform = `translate(${y * 50}px,${x * 50}px) rotate(${mouse.direction}deg)`; //老鼠移動到(x,y)座標上
    if (iswalk())//判定老鼠是否還在移動
    {
        mouse.mousepath.push({ x, y }); //老鼠路徑  	    
    }
    function normalmove() {
        var path = mouse.mousepath; //設為正確路徑
        if (mouse.mousepath[index]) {
            maparray[path[index].x][path[index].y] = 3;
            mouse1.style.transform = `translate(${path[index].y * 50}px,${path[index].x * 50}px)`; //老鼠1移動到(x,y)座標上
            index++; //索引+1
        }
        createmap(10);
    }
    function iswalk() {
        var walk = true; //判斷老鼠是否無路可走

        if (maparray[8][8] == 2) {

            clearInterval(times); //計時器關掉
            setInterval(normalmove, 100); //啟動老鼠1計時器
        }
        else if (maparray[x][y + 1] === 1) {
            mouse.direction = 270;//方向向右
            mouse.y++; //向右
            rotatechange = 0;//改變歸零
        }
        else if (maparray[x + 1][y] === 1) {
            mouse.direction = 0; //方向向下
            mouse.x++; //向下
            rotatechange = 0;//改變歸零
        }
        else if (maparray[x][y - 1] === 1) {
            mouse.direction = 90; //方向向左
            mouse.y--; //向左
            rotatechange = 0;//改變歸零
        }
        else if (maparray[x - 1][y] === 1) {
            mouse.direction = 180; //方向向上
            mouse.x--; //向上
            rotatechange = 0;//改變歸零
        }
        else {
            if (rotatechange == 0) //改變第一次
                mouse.direction -= 180;//反轉180

            rotatechange++; //改變++
            var len = mouse.mousepath.length - 1;
            mouse.x = mouse.mousepath[len].x;
            mouse.y = mouse.mousepath[len].y;
            mouse.mousepath.pop(); //刪除路徑
            walk = false; //無路可走反回原路
        }
        return walk;
    }

}
//迷宮建造函數
function createmap(n) {

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {
            var div = document.createElement("div");
            div.classList.add("cell");
            if (maparray[i][j] == 1) {
                div.style.backgroundColor = "white";
                div.style.top = i * 50 + "px";
                div.style.left = j * 50 + "px";
                map.appendChild(div);

            }
            else if (maparray[i][j] == 3) {
                div.style.backgroundColor = "yellow";
                div.style.top = i * 50 + "px";
                div.style.left = j * 50 + "px";
                map.appendChild(div);

            }
            else if (maparray[i][j] == 0) {
                div.style.backgroundColor = "gray";
                div.style.top = i * 50 + "px";
                div.style.left = j * 50 + "px";
                map.appendChild(div);

            }

        }
    }
}
```

# Demo
<a href="https://codepen.io/yu-zong-lai/pen/LYmxERd">demo</a>