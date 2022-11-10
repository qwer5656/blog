---
title: 設計模式 Design Pattern (五) 原型模式(Prototype Pattern)
date: 2022-10-20 15:26:05
tags: 
- C#
- Design Pattern
- oop
- 原型模式
- 創建模式
categories: 
- C#
- Design Pattern
---



# 前言

一、原型模式的作用？
1、基本就是你需要從A的實例得到一份與A內容相同，但是又互不干擾的實例的話，就需要使用原型模式。
2、用原型實例指定創建對象的種類，並且通過拷貝這些原型創建新的對象。這個其實和C++的拷貝構造函數的作用是相似的（但不相同），實際上就是動態抽取 當前對象 運行時 的 狀態。
3、當然有的時候，如果我們並不需要基於現有的對象複製新的對象，或者我們需要的就是一個乾淨的空對象，那麼我的首先還是工廠模式或者抽象工廠模式。

二、為什麼需要原型模式？
1、為什麼不用new直接新建對象，而要用原型模式？
首先，用new新建對像不能獲取當前對象運行時的狀態，其次就算new了新對象，在將當前對象的值複製給新對象，效率也不如原型模式高。
2、為什麼不直接使用拷貝構造函數，而要使用原型模式？
原型模式與拷貝構造函數是不同的概念，拷貝構造函數涉及的類是已知的，原型模式涉及的類可以是未知的（基類的拷貝構造函數只能複制得到基類的對象）。
原型模式生成的新對象可能是一個派生類。拷貝構造函數生成的新對像只能是類本身。原型模式是描述了一個通用方法(或概念)，它不管是如何實現的，而拷貝構造則是描述了一個具體實現方法。
<!--more-->
# UML

!["prototype"](../image/designpattern/prototype.png "prototype")

# 程式碼

# 淺拷貝

```C#
    /// <summary>
    /// Prototype Design Pattern
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {
            ConcreteCar concreteCar = new ConcreteCar("Benz", 100, 4);

            ConcreteCar concreteCar1 = (ConcreteCar)concreteCar.Clone();
            concreteCar1.Model = "Toyoto";
            concreteCar.Show();
            concreteCar1.Show();
        }
    }
    class ConcreteCar : ICloneable
    {

        private string model;
        private int speend;
        private int wheel;

        public ConcreteCar(string _model, int _speend, int _wheel)
        {
            model = _model;
            speend = _speend;
            wheel = _wheel;
        }

        public string Model
        {
            get { return model; }
            set { model = value; }
        }
        public void Show()
        {
            Console.WriteLine($"車子品牌:{model},速度:{speend}KM,輪子:{wheel}");
        }

        // Create a shallow copy
        public object Clone()
        {
            return this.MemberwiseClone();
        }
    }
```
# 輸出結果
!["prototype"](../image/designpattern/designpattern-prototype-1.png "prototype")
# 深拷貝

```C#
    /// <summary>
    /// Prototype Design Pattern
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {
            ConcreteWheel concreteWheel = new ConcreteWheel(4, "380");
            ConcreteCar concreteCar = new ConcreteCar("Benz", 100, concreteWheel);

            ConcreteCar shallowconcreteCar = (ConcreteCar)concreteCar.Clone();
            ConcreteCar deepconcreteCar = (ConcreteCar)concreteCar.DeepClone();

       
            Console.WriteLine("=====未更改的原形======");
            concreteCar.Show();
            Console.WriteLine("=====淺拷貝更改======");
            shallowconcreteCar.ConcreteWheel.Wheel = 10;
            shallowconcreteCar.Show();
            Console.WriteLine("=====被更改的原形======");
            concreteCar.Show();
            Console.WriteLine("=====深拷貝更改======");
            deepconcreteCar.ConcreteWheel.Wheel = 200;
            deepconcreteCar.Show();
            Console.WriteLine("====未被改的原形======");
            concreteCar.Show();
        }
    }
    class ConcreteCar : ICloneable
    {

        private string model;
        private int speend;
        private ConcreteWheel concreteWheel;
        public ConcreteCar(string _model, int _speend, ConcreteWheel _concreteWheel)
        {
            model = _model;
            speend = _speend;
            concreteWheel = _concreteWheel;
        }

        public string Model
        {
            get { return model; }
            set { model = value; }
        }
        public void Show()
        {
            Console.WriteLine($"車子品牌:{model},車速:{speend},車子輪子{concreteWheel.Show()}");
        }


        public ConcreteWheel ConcreteWheel
        {
            get { return concreteWheel;}
            set { concreteWheel = value; }

        }

        // Create a deep copy
        public object DeepClone()
        {
            ConcreteCar concreteCar = new ConcreteCar(model, speend, concreteWheel.newClone());

            return concreteCar;

        }

        // Create a shallow copy
        public object Clone()
        {
            return this.MemberwiseClone();
        }
    }
    class ConcreteWheel : ICloneable
    {
        private int wheel;
        private string motor;

        public ConcreteWheel(int _wheel, string _motor)
        {
            wheel = _wheel;
            motor = _motor;
        }
        public string  Show()
        {
            return $"車子輪數:{wheel},車子馬達:{motor}";
        }

        public int Wheel
        {
            get { return wheel; }
            set { wheel = value; }
        }


        public object Clone()
        {
            return this.MemberwiseClone();
        }
        public ConcreteWheel newClone()
        {
            return new ConcreteWheel(wheel, motor);
        }
    }
```
# 輸出結果
!["prototype"](../image/designpattern/designpattern-prototype-2.png "prototype")

# 結語

# 優缺點

# 優點：
原型模式向客戶隱藏了建立新例項的複雜性
原型模式允許動態增加或較少產品類。
原型模式簡化了例項的建立結構，工廠方法模式需要有一個與產品類等級結構相同的等級結構，而原型模式不需要這樣。
產品類不需要事先確定產品的等級結構，因為原型模式適用於任何的等級結構
# 缺點：

每個類必須配備一個克隆方法。
配備克隆方法需要對類的功能進行通盤考慮，這對於全新的類不是很難，但對於已有的類不一定很容易，特別當一個類引用不支援序列化的間接物件，或者引用含有迴圈結構的時候。