---
title: 設計模式 Design Pattern (二) 單例模式(Singleton Pattern)
date: 2022-08-24 16:06:05
tags: 
- C#
- Design Pattern
- oop
- 單例模式
- 創建模式
categories: 
- C#
- Design Pattern
---

甚麼是單例模式，單例對象的類必須保證只有一個實例存在，並提供全域的訪問


# 前言
單例模式屬於創建模式，從單例模式的定義中，當我們的系統中某個物件只需要一個實例的情況。
例如:作業系統的工作管理員、存取ＩＯ和資料庫等資源。

<!--more-->

# 實作單例模式

# 程式碼呈現

<h2 style="color:red">單例模式_懶散模式(Lazy)</h2>

```C#
public class Singleton
{
    private static Singleton singleton;
    private Singleton()
    {

    }
    public static Singleton GetSingleton()
    {
        if (singleton == null)
        {
            singleton = new Singleton();
        }
        return singleton;
    }
}
```
上面的單例模式在單執行緒的下是沒問題的，但是在多執行緒的情況下會得到多個Singleton例項，因為兩個執行緒在同時執行GetSingleton()方法時，此時兩個執行緒判斷(singleton==null)這個條件時返回都為真，此時兩個執行緒就建立了兩個Singleton例項，這樣就違背單例模式的初衷了，既然上面的實現會執行多個執行緒執行，那我們對於多執行緒的解決方案自然就是使GetSingleton()方法在同一時間只執行一個執行緒執行就好了,也就是我們執行緒同步的問題了。

<h2 style="color:red">單例模式_懶散模式(Lazy)多執行緒</h2>

```C#
public class Singleton
{
    private static volatile  Singleton singleton;
    private static readonly  object locker=new object();
    private Singleton()
    {

    }
    public static Singleton GetSingleton()
    {
        if(instance == null){
            lock(locker){
                if (singleton == null)
                {
                    singleton = new Singleton();
                }
            }
        }
        return singleton;
    }
}
```

# 結語
單例模式在多執行緒的應用場合下必須小心使用。如果當唯一實例尚未創建時，有兩個執行緒同時調用創建方法，那麼它們同時沒有檢測到唯一實例的存在，從而同時各自創建了一個實例，這樣就有兩個實例被構造出來，從而違反了單例模式中實例唯一的原則。 解決這個問題的辦法是為指示類是否已經實例化的變量提供一個互斥鎖（雖然這樣會降低效率）。