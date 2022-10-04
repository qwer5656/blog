---
title: Docker介紹
date: 2022-09-27 16:11:34
tags:
- Docker
- VirtualBox
categories:
- Docker
---


# 前言
甚麼是Docker?
Docker是一種軟體平台，可讓您快速地建立，測試和部屬應用程式。
Docker將軟體封裝到名為容器的標準化單位，其中包合程式庫、系統工具、程式碼和執行時間等執行軟體許需的所有項目。
使用Docker可以快速部屬到各種環境並加以擴充，而且知道程式碼是可執行的。

<!--more-->


# Docker的運作方式
Docker透過提供執行程式碼的標準方法進行運作。
Docker是容器的作業系統，與虛擬機器虛擬化(免除直接管理的需要)伺服器硬體的方法相似，容器可虛擬化伺服器的作業系統。
Docker安裝在每部伺服器上，並提供簡單的命令讓您使用已建立、啟動或停止容器。

![Docker](../image/docker/dockervsvm.png "Docker")

# Docker和Vm的差異

VirtualBox:
 - 需要安裝執行程式的作業系統
 - VM裡面的作業系統開機需要花時間
 - 佔用硬碟的容量較大
 - 完全的把系統的硬體資源分離

Docker:
 - 直接從 Docker Hub Pull 作業系統的 Image
 - 不用開機，啟動速度比 VM 快
 - 底層還是使用作業系統的 Kernel
 - 占用硬碟的容量較小


Docker 和 VM 不只可以單獨的使用，也可以搭配的拿來使用。
要確保整體系統完整的虛擬化就先用 VM 安裝作業系統，然後在 VM 的作業系統上使用 Docker 啟動需要執行的 container。
這可以按照使用者的使用情境決定要如何的安排使用 VM 和 Docker。

# Docker基本概念

映像檔(Image)
- Docker映像檔是個唯讀的模板
- 映像檔可建立Docker容器

容器(Cotainer)
 - 將映像檔執行實例
 - 可被啟動、開始、停止、刪除
 - 可將容器間互相連結

倉庫(Repository)
 - 映像檔的存放場所
 - push、pull的方式上傳和下載