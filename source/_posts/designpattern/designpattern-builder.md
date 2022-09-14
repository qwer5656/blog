---
title: 設計模式 Design Pattern (三) 建造者模式(Builder Pattern)
date: 2022-08-26 11:40:37
tags: 
- C#
- Design Pattern
- oop
- 建造者模式
- 創建模式
categories: 
- C#
- Design Pattern
---



# 前言
甚麼是創建者模式，將一個複雜對象的構建與他的表示分離，使得同樣的構建過程可以創建不同的表示。 一步一步創建一個複雜的對象，它允許用戶只通過指定複雜對象的類型和內容就可以建構它們，用戶不需要知道內部的具體建構細節。
建造者模式客戶端返回的不是一個簡單的產品，而是一個由多個部件組成的複雜產品。

<!--more-->


# 組成
 1.抽象建造者(Builder)：為創建具體產品的具體建造者提供接口
 2.具體建造者(ConcreteBuilder)：建造具體產品
 3.指揮者(Director)：調用Builder接口來創建產品對象
 4.產品角色(Product)：具體產品

# 實作創建者模式

# 程式碼呈現

<h2 style="color:red">自動測試class</h2>

```C#
sealed class AutoTest{
    private List<string> allCases = new List<string>()
    public void addClass(string type)
    {
        allCases.Add(type);
    
    public void TestAll()
    {
        Console.WriteLine("============ 開始執行測驗用例 ============");
        foreach (var item in allCases)
        {
            Console.WriteLine(item);
        }
        Console.WriteLine("============ 執行測驗用例結束 ============");
    }
}
```

<h2 style="color:red">Builder class</h2>

```C#
abstract class Builder
{
    protected  AutoTest autoTest = new AutoTest();
    abstract public void BuildTestCaseA();
    abstract public void BuildTestCaseB()
    public  AutoTest GetAutoTest()
    {
        return autoTest;
    }
}
class IntelTestCaseBuilder : Builder
{

    public override void BuildTestCaseA()
    {
        autoTest.addClass("Intel測試A");
    }
    public override void BuildTestCaseB()
    {
        autoTest.addClass("Intel測試B");
    }
  
}
class LenovoTestCaseBuilder : Builder
{
  
    public override void BuildTestCaseA()
    {
        autoTest.addClass("Lenovo測試A");
    }
    public override void BuildTestCaseB()
    {
        autoTest.addClass("Lenovo測試B");
    }
 
}
```


<h2 style="color:red">Director class</h2>

```C#
class Director {
    public void Construct(Builder builder)
    {
        builder.BuildTestCaseA();
        builder.BuildTestCaseB();
    }
}
```



<h3 style="color:red">產生兩個品牌測試</h3>


```C#
static void Main(string[] args)
{
    IntelTestCaseBuilder intelbuilder = new IntelTestCaseBuilder();
    LenovoTestCaseBuilder lenovobuilder = new LenovoTestCaseBuilder();
    Director director = new Director();
    director.Construct(intelbuilder);
    director.Construct(lenovobuilder);
    AutoTest autoTest = intelbuilder.GetAutoTest();
    AutoTest autoTest1 = lenovobuilder.GetAutoTest()
    autoTest.TestAll();
    autoTest1.TestAll();
    Console.ReadLine();
}
```

<h3 style="color:red">顯示結果</h3>

![result](../image/designpattern/designpattern_builder.PNG "result")


# 結語
## 優點：
1.建造者獨立，易擴展。

2.便於控制細節風險。

## 缺點：
​1. 產品必須有共同點，範圍有限制。

​2. 如內部變化複雜，會有很多的建造類。