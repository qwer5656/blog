---
title: C# 抓取中央氣象API
date: 2022-08-24 16:07:36
tags: 
- C#
- weather
- api
- json
categories: 
- C#
---


介紹如何使用C#抓取API

# 前言
我們要出去玩時，都會出門前會看一下今天天氣，這時我們就會去APP看今天天氣，突然有個想法，想自己寫一個天氣網頁
<!--more-->
# 流程圖

![result](../image/c_/getweatherapi_1.png "result")

1.接收client需求

2.發送request去跟API要資料

3.處理respone裡面的資料

4.呈現資料給client


# 前置作業
首先我們要先去下載C#處理json格式的程式庫

json net

官網:https://www.newtonsoft.com/json

我們也可以在 micsoft visual studio 裡面的Nuget下載

![result](../image/c_/getweatherapi_2.png "result")

中央氣象局API:https://opendata.cwb.gov.tw/dist/opendata-swagger.html

使用一般天氣預報-今明 36 小時天氣預報API當作範例

API:[https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=](https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?locationName=%E6%96%B0%E5%8C%97%E5%B8%82&Authorization=CWB-69332FDE-EB99-479F-8433-DA88413FE5BB)授權碼

中央氣象局開放平台:https://opendata.cwb.gov.tw/index

1.會員登入

2.取得API授權碼


![result](../image/c_/getweatherapi_3.png "result")

前置作業處理完後就來撰寫我們的程式碼

# 程式碼
## 首先要先引入JSON程式庫和HTTP請求程式庫和讀取資料流的程式庫

```C#
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Net;
using System.IO;
```

## 再來我們要寫一個webrequet的請求

```C#
static public JArray getJson(string uri)
 {
        HttpWebRequest req = (HttpWebRequest)WebRequest.Create(uri); //request請求
        req.Timeout = 10000; //request逾時時間
        req.Method = "GET"; //request方式
        HttpWebResponse respone = (HttpWebResponse)req.GetResponse(); //接收respone
        StreamReader streamReader = new StreamReader(respone.GetResponseStream(), Encoding.UTF8); //讀取respone資料
        string result = streamReader.ReadToEnd(); //讀取到最後一行
        respone.Close();
        streamReader.Close();
        JObject jsondata = JsonConvert.DeserializeObject<JObject>(result); //將資料轉為json物件
        return (JArray)jsondata["records"]["location"]; //回傳json陣列

}
```


## 接著呼叫API傳回資料，c#處理資料資料格式為json
## json online editor:https://jsoneditoronline.org/
<h2 style="color:red">回傳新北市json資料</h2>

![result](../image/c_/getweatherapi_4.png "result")

<h2 style="color:red">用json online editor 觀看JSON資料</h2>

![result](../image/c_/getweatherapi_5.png "result")
<h2 style="color:red">C#程式處理資料</h2>

```C#
static void Main(string[] args)
{
    //呼叫API
    JArray jsondata=getJson("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?&Authorization={API授權碼}");
       
     foreach(JObject  data in jsondata)
     {
          string loactionname = (string)data["locationName"]; //地名
          string weathdescrible = (string)data["weatherElement"][0]["time"][0]["parameter"]["parameterName"]; //天氣狀況
          string pop = (string)data["weatherElement"][1]["time"][0]["parameter"]["parameterName"];  //降雨機率
          string mintemperature = (string)data["weatherElement"][2]["time"][0]["parameter"]["parameterName"]; //最低溫度
          string maxtemperature = (string)data["weatherElement"][4]["time"][0]["parameter"]["parameterName"]; //最高溫度
          Console.WriteLine(loactionname + " 天氣:" + weathdescrible + " 溫度:" + mintemperature + "°c-" + maxtemperature + "°c 降雨機率:" + pop + "%");
     }
     Console.ReadLine();
}
```

# result
![result](../image/c_/getweatherapi_6.png "result")


# 結語
利用中央氣象局的免費api我們就可以自己製作自己的天氣網頁或是天氣app，以後就不用看新聞的天氣預報。