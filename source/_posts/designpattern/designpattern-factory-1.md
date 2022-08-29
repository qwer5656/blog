---
title: 設計模式 Design Pattern (一) 工廠模式(Factory Pattern)_簡單工廠模式
date: 2022-08-16 16:06:05
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
設計模式介紹，以飲料店為實例來實現工廠模式的情境
工廠模式是很常見的設計模式，簡單工廠模式有一個工廠，由工廠專門負責製造使用者需要的商品，商品主要是呈現有哪些功能和特性，就以飲料店為例子來實作工廠模式


<!--more-->

# 實作簡單工廠模式
# 流程介紹

![result](../image/designpattern/factory_1.png "result")
1.首先我們要有一個主商品模型

2.其他次商品繼承主商品的特性在另外擴充(extend)其他特性(Property)

3.工廠接收客戶(client)需求

4.產出客戶所要的商品



# 程式碼呈現


<h2 style="color:red">主商品模型</h2>



```C#
public interface IProduct
{
      string Name { get; }//名稱
      int Accoumt{get;}//數量
      string Size{get;}//尺寸
      string Ice{get;}//冰塊
      string Sugar { get; }//甜度
      void doclientproduct(int accoumt, string size, string ice,string sugar="");//客人的需求
      void doproduct();//無客製化
      void info();//顯示資訊
}
```

<h2 style="color:red">次商品繼承主商品模型</h2>

<h3 style="color:red">商品(一)茶類</h3>

```C#
class tea:IProduct
    {
        private int accoumt;//數量
        private string size;//尺寸
        private string ice;//冰塊
        private string sugar;//甜度
        private string name;//名稱
        public tea(){}
        public tea(string name)
        {
            Name = name;
        }
        public int Accoumt
        {
            get 
            {
               return accoumt;
            }
            set
            {
                accoumt = value;
            }
        }
        public string Size
        {
            get
            {
                return size;
            }
            set
            {
                size = value;
            }
        }
        public string Ice
        {
            get
            {
                return ice;
            }
            set
            {
                ice = value;
            }
        }
        public string Sugar
        {
            get
            {
                return sugar;
            }
            set
            {
                sugar = value;
            }
        }
        public string Name
        {
            get
            {
                return name;
            }
            set
            {
                name = value;
            }
        }
        //客製化商品
        public void doclientproduct(int accoumt, string size, string ice, string sugar)
        {
            Accoumt = accoumt;
            Size = size;
            Ice= ice;
            Sugar = sugar;
        }
        //預設商品
        public void doproduct()
        {
            Accoumt = 1;
            Size = "M";
            Ice = "正常";
            Sugar = "正常";
        }
        //顯示商品資訊
        public void info()
        {
            Console.WriteLine(name+" 尺寸:" + size + ",冰塊:" + ice +",甜度:" +sugar+",數量:" + accoumt);
        }

}
```

<h3 style="color:red">商品(二) 水果類</h3>


```C#
class fruit:IProduct
    {
        private int accoumt;//數量
        private string size;//尺寸
        private string ice;//冰塊
        private string sugar;//不給調甜度
        private string name;//名稱
        public fruit(string name)
        {
            Name = name;
        }
        public int Accoumt
        {
            get{return accoumt;}
            set{accoumt = value;}
        }
        public string Size
        {
            get{return size;}
            set{size = value;}
        }
        public string Ice
        {
            get
            {return ice;}
            set{ice = value;}
        }
        public string Name
        {
            get{return name;}
            set{name = value;}
        }
        public string Sugar
        {
            get{return sugar;}
            set
            {
                if(value=="無糖")
                sugar = value;
            }
        }
        //客製化商品
        public void doclientproduct(int accoumt, string size, string ice, string sugar="")
        {
            Accoumt = accoumt;
            Size = size;
            Ice= ice;
            Sugar = "無糖";
        }
        //預設商品
        public void doproduct()
        {
            Accoumt = 1;
            Size = "M";
            Ice = "正常";
            Sugar = "無糖";
        }
        //顯示商品
        public void info()
        {
            Console.WriteLine(name + " 尺寸:" + size + ",冰塊:" + ice + ",甜度:" + sugar + ",數量:" + accoumt);
        }
    }
```
<h3 style="color:red">簡單工廠</h3>

```C#
   class Factory { 
        public IProduct createproduct(string type,string name)
        {
            if (type == "茶類")
            {
                return new tea(name);
            }
            else if (type == "水果類")
            {
                return new fruit(name);
            }

            return null;
        }
    
    
    }

```

<h3 style="color:red">接收客戶需求</h3>


```C#
static void Main(string[] args)
{
      Factory store = new Factory();//生成工廠
      var client1 = store.createproduct("茶類","紅茶"); //接收客戶1需求
      var client2 = store.createproduct("水果類", "蘋果汁"); //接收客戶2需求
      client1.doproduct(); //開始製作客戶1的飲料
      client2.doclientproduct(1,"M","正常"); //開始製作客戶2的飲料
      client1.info(); //顯示客戶1飲料資訊
      client2.info(); //顯示客戶2飲料資訊
      Console.ReadLine();
}
```


<h3 style="color:red">顯示結果</h3>

![result](../image/designpattern/factory_2.png "result")


# 結語
## 優點：
1.工廠含必要的邏輯判斷，可以決定在什麼時候創建哪一個產品的實例，客戶端可以免除直接創建產品對象的責任。

2.可以減少使用者的記憶量。

3.可以在不修改客戶端資料的情況下，變更或新增具體產品，提高了系統的靈活性。
## 缺點：
1.工廠集中所有產品的創建邏輯，一旦無法正常使用，整個系統都受影響。

2.系統擴展困難，一旦增加新產品就不得不修改工廠邏輯，而在產品多的情況下，可能造成工廠邏輯複雜，不利於系統的擴展與維護。