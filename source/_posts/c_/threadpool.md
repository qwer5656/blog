---
title: Thread Pooling(執行緒池)
date: 2022-09-07 13:08:42
tags: 
- C#
- Thread
categories: 
- C#
---

# 前言
線程池是在多線程應用程式初始化期間創建線程集合的過程，然後在需要時將這些線程重用於新任務，而不是創建新線程。然後，每個進程都有一些固定數量的線程，具體取決於可用的內存量，這些線程是應用程式的需要，但我們可以自由地增加線程數。池中的每個線程都有一個特定的給定任務。線程返回到池，並在給定任務完成後等待下一個分配。

通常，當我們創建了許多線程來執行許多任務時，線程池是必需的，在此佇列中組織。通常，我們的任務比線程多。一旦線程完成其任務，它將從佇列中請求下一個任務，直到所有任務都已完成。然後，線程可以終止或休眠，直到有新任務可用。

<!--more-->

# 架構圖

![result](../image/c_/threadpool.png "result")


# 範例

<h2 style="color:red">thread 和 threadpool區別</h2>

```C#
using System;
using System.Threading;

public class Example
{
    public static void Main()
    {
        for(int i = 0; i < 10; i++)
        {
            Thread th = new Thread(thread);
            th.Start();
            
        }
        for (int i = 0; i < 10; i++)
        {
            ThreadPool.QueueUserWorkItem(t => threadpool());
        }
        Console.ReadLine();
    }

    public static void threadpool()
    {
        Console.WriteLine("ThreadPool:"+Thread.CurrentThread.ManagedThreadId);
    }
    public static void thread()
    {
        Console.WriteLine("Thread:"+Thread.CurrentThread.ManagedThreadId);
    }
}
```
# 結果
![result](../image/c_/threadpool_2.PNG "result")

# 結語
Thread和Threadpool 的區別：

1.區別：DeadThread 10個線程，但是沒有被GC回收，每次開啟都需要消耗一個線程。

2.threadpool解決同樣的問題，沒有死線程，而且都是預設初始化的