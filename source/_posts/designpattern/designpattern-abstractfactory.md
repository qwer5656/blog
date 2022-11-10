---
title: 設計模式 Design Pattern (二) 抽象工廠模式(Factory Pattern)
date: 2022-08-23 10:27:41
tags: 
- C#
- Design Pattern
- oop
- 工廠模式
- 創建模式
categories: 
- C#
- Design Pattern
---





# 前言
抽象工廠模式介紹，以品牌建立各個產品來實作抽象工廠模式
抽象工廠模式算是比較少用的工廠模式，抽象工廠模式會將各個產品分成一個種類，此工廠可以產生種類的任一產品

<!--more-->

# 實作工廠模式
# 流程介紹

![result](../image/designpattern/designpattern_factory_3_1.PNG "result")

1.建立抽象Mouse和Keyboard

2.建立實體品牌Intel和Acer的Mouse及Keyboard

3.建立抽象Factory

4.建立實體品牌Intel和Acer的Factory

5.產生兩個品牌的產品

# 程式碼呈現

<h2 style="color:red">abstract 滑鼠和abstract 鍵盤</h2>

```C#
abstract class Mouse {
        abstract public void MouseInfo();

}
abstract class Keyboard {
        abstract public void KeyboardInfo();
}
```

<h2 style="color:red">實作intel及acer的滑鼠和鍵盤</h2>

```C#
class IntelMouse : Mouse
{
    public override void MouseInfo()
    {
        Console.WriteLine("Intel滑鼠");
    }
}

class AcerMouse : Mouse
{
    public override void MouseInfo()
    {
        Console.WriteLine("Acer滑鼠");
    }
}
class IntelKeyboard : Keyboard
{
    public override void KeyboardInfo()
    {
        Console.WriteLine("Intel鍵盤");
    }
}
class AcerKeyboard : Keyboard
{
    public override void KeyboardInfo()
    {
        Console.WriteLine("Acer鍵盤");
    }
}
```


<h2 style="color:red">abstract 工廠</h2>

```C#
abstract class Factory{
       public abstract Keyboard createKeyboard();
       public abstract Mouse createMouse();
}
```


<h2 style="color:red">實作intel及acer工廠</h2>

```C#
class IntelFactoy : Factory
{
    public override Keyboard createKeyboard()
    {
       return new IntelKeyboard();
    }
    public override Mouse createMouse()
    {
        return new IntelMouse();
    }
}
class AcerFactoy : Factory
{
    public override Keyboard createKeyboard()
    {
        return new AcerKeyboard();
    }
    public override Mouse createMouse()
    {
        return new AcerMouse();
    }
}
```

<h3 style="color:red">產生兩個品牌產品</h3>


```C#
static void Main(string[] args)
{
    IntelFactoy IntelFactoy = new IntelFactoy();
    AcerFactoy acerFactoy = new AcerFactoy();
    var intelkeyboard=IntelFactoy.createKeyboard();
    var intelmouse=IntelFactoy.createMouse();
    var acerkeyboard = acerFactoy.createKeyboard();
    var acermouse = acerFactoy.createMouse();
    intelkeyboard.KeyboardInfo();
    intelmouse.MouseInfo();    
    acerkeyboard.KeyboardInfo();
    acermouse.MouseInfo();
}
```

<h3 style="color:red">顯示結果</h3>

![result](../image/designpattern/designpattern_factory_3_2.PNG "result")


# 結語

## 優點：
1.改善了工廠模式每建立一個產品需再建立一個工廠


## 缺點：
抽象模式對新增新產品不符合開閉原則。如要生產顯示器，不僅要新增顯示器抽象類和顯示器具體類，還需要修改Factory,在抽象工廠中新增一個CreateDisplay抽象方法（或介面），intel工廠和acer工廠也要實現新增的抽象方法(或者介面）。
