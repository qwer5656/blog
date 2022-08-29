---
title: 設計模式 Design Pattern (一) 工廠模式(Factory Pattern)_工廠模式
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
工廠模式介紹，以RPG遊戲建立各個職業來實作工廠模式
工廠模式是很常見的設計模式，工廠模式分為工廠和要製造的商品，工廠主要負責生產商品，商品主要是呈現有哪些功能和特性，就以RPG的職業為例子來實作工廠模式

<!--more-->


# 實作工廠模式
# 流程介紹

![result](../image/designpattern/designpattern-factory-2_1.png "result")

1.建立character的interface

2.實作戰士和法師這個兩職業

3.建立工廠的interface

4.建立產生戰士的工廠和產生法師的工廠

5.產出這兩個職業


# 程式碼呈現

<h2 style="color:red">腳色interface</h2>



```C#
public interface Icharacter {
        string Name { get; set; }
        int Strength { get; set; }
        int Magic { get; set; } 

        public void skill() { }
        public void attack() { }


}
```

<h2 style="color:red">法師腳色</h2>

```C#
class Mage : Icharacter
{
        public string Name { get; set; }
        public int Strength { get; set; }
        public int Magic { get; set; }

        public Mage()
        {
            Name = "法師";
            Strength = 1;
            Magic = 5;
        }
        public void skill() {
            Console.WriteLine("十字展造成" + Strength*5+"傷害");
        
        }
        public void attack() {
            Console.WriteLine(Name + "攻擊造成" + Strength + "傷害");
        }
}
```

<h2 style="color:red">戰士腳色</h2>

```C#
class Warrior : Icharacter
    {
        public string Name { get; set; }
        public int Strength { get; set; }
        public int Magic { get; set; }

        public Warrior()
        {
            Name = "戰士";
            Strength = 5;
            Magic = 1;
        }
        public void skill()
        {
            Console.WriteLine("隕石術造成"+Magic*10+ "傷害");

        }
        public void attack()
        {
            Console.WriteLine(Name + "攻擊造成" + Magic + "傷害");
        }
}
```

<h2 style="color:red">工廠interface</h2>

```C#
interface IFactory {


        public Icharacter CreateCharacter();

}
```

<h2 style="color:red">產生戰士工廠</h2>

```C#
class WarriorFactory : IFactory
{
        public Icharacter CreateCharacter()
        {
            return new Warrior();
        }
}
```


<h2 style="color:red">產生法師工廠</h2>

```C#
class MageFactory : IFactory
{
        public Icharacter CreateCharacter()
        {
            return new Mage();
        }
}
```


<h3 style="color:red">產生兩個職業</h3>


```C#
static void Main(string[] args)
{
    WarriorFactory warriorFactory = new WarriorFactory();
    var warrior = warriorFactory.CreateCharacter();
    MageFactory mageFactory = new MageFactory();
    var mage = mageFactory.CreateCharacter();
    warrior.attack();
    warrior.skill();
    mage.attack();
    mage.skill();
}
```

<h3 style="color:red">顯示結果</h3>

![result](../image/designpattern/designpattern-factory-2_2.png "result")




# 結語

## 優點：
1.一個調用者想創建一個對象，只要它的名字就可以了。 

2.擴展性高如果想增加一個產品，只要擴展一個工廠類就可以。

3.屏蔽產品的具體實現，調用者可以只涉及產品的接口。
## 缺點：
每次增加一個產品時，都需要增加一個具體類和對象實現工廠，使得系統中類的個數成倍增加，在一定程度上增加了系統的複雜度，同時也增加了系統具體類的依賴。這並不是什麼好事