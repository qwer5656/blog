---
title: 如何使用 Hexo + GitHub Pages 架設個人部落格
date: 2022-07-26 09:47:04
tags: 
- Hexo
- github 
categories: Hexo
---


## 前言

本篇主要介紹如何使用 Hexo 並搭配 GitHub 來快速架設網誌。從介紹什麼是 Hexo 框架，該如何安裝、建立環境，接著介紹一些常用指令，以及如何部署到 GitHub 上。

# 文章大綱：
+ [前置作業](#前置作業)
  + Node.js
  + VsCode
  + Git
+ [ 建立 GitHub Pages 環境](#github-pages-環境建置)
+ [Hexo 環境建置](#hexo-環境建置)
+ 常用指令
+ 部署到 GitHub
    + 建立 GitHub 專案
    + 將檔案發布到 GitHub
<!--more-->
# 什麼是Hexo ？
引用官網介紹：A fast, simple & powerful blog framework, powered by Node.js.

Hexo 其實就是一個基於 Node.js 開發的網誌框架，具有下列幾項特點：

編譯速度非常快
能夠支援 Markdown 語法解析文章，並透過主題渲染靜態檔案
具有豐富的外掛套件
支援一鍵部署到 GitHub Pages 或 Heroku 等支援靜態網頁的空間

# 前置作業
在開始安裝 Hexo 之前，必須先在電腦安裝下列工具：

[Node.js](https://www.mdeditor.tw/)：提供 npm 來安裝所需的套件。這裡可選擇安裝左側 16.16.0 LTS 版本
Hexo 官網建議使用 Node.js 10.0 及以上版本，若不確定下載哪個版本，可在終端機輸入 npm versin 查看版本號。
![node.js](../image/hexo/nodeDownload.PNG "node.js")


[Visual Studio Code]("https://code.visualstudio.com/")（簡稱 VS Code）:是一款由微軟開發且跨平台的免費原始碼編輯器。該軟體支援語法突顯、程式碼自動補全（又稱 IntelliSense）、程式碼重構功能，並且內建了命令列工具和 Git 版本控制系統。使用者可以更改佈景主題和鍵盤捷徑實現個人化設定，也可以透過內建的擴充元件程式商店安裝擴充元件以加強軟體功能。

![vsocde](../image/hexo/vscodedownload.PNG "vsocde")

[Git]("https://git-scm.com/"): 版本控制是一種記錄一個或若干文件內容變化，以便將來查閱特定版本修訂情況的系統。 在本書的範例中，你將會學到如何對軟體的原始碼做版本控制。當然，你實際上可以對電腦上任意型態的檔案做版本控制。

![git](../image/hexo/gitdownload.PNG "git")
# GitHub Pages 環境建置

1.註冊 Github 帳號
[github](https://github.com/)

2.建立 Github Pages

靜態網頁的好夥伴：Github Pages，它可以給我們託管在 GitHub 上的靜態網頁。在申請完 Github 帳號之後，點一下畫面New的按鈕

![markdown](../image/hexo/githubnewButton.PNG "markdown")

接著將專案名稱取名為 username.github.io 並按下最下方的 Create repository

註： **username 指的是你的 GitHub 帳號**，在旁邊 Owner 的地方就會顯示你的帳號。例如我的帳號是 xdxd123，那麼專案名稱就取名為 xdxd123.github.io。

![markdown](../image/hexo/githubnewRepositories.PNG "markdown")

接著進入專案
1.進入Settings 頁面
2.點選左側Pages
3.選擇 Choose a theme
![markdown](../image/hexo/githubpage.PNG  "markdown")

接著進入Choose a theme畫面，官方提供多個模板選擇，先隨意選個模板按下 Select theme <font color=#fcc>(這時候的樣板只是暫時，之後才會部署自己的 Hexo 部落格上來)</font> 

![markdown](../image/hexo/gitselectpage.PNG  "markdown")

最後在網址列輸入 https://username.github.io/ (username 是自己的 GitHub 帳號)，就能看到自己剛架好的 Github Pages 了唷！

![markdown](../image/hexo/githubthemepage.PNG "markdown")

# Hexo 環境建置

待續....