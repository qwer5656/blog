---
title: C# Qrcode製作
date: 2022-08-24 16:07:36
tags: 
- C#
- QrCode
- winform
- Zxing
categories: 
- C#
---


Qrcode 製作介紹

# 前言
現代人人手一支手機，因此只要有手機就能將Qrcode的內容，呈現在使用者的手機上，這樣不用使用者慢慢key網址，節省很多時間。

# 流程圖

![result](../image/c_/qrcodemake_1.png "result")

撰寫產生Qrcode的程式

使用者掃Qrcode

將內容傳給使用者
<!--more-->
# 前置準備
要使用的程序庫

nuget抓取Zxing


# 程式碼


<h2 style="color:red">使用程式庫</h2>

```C#
using ZXing.QrCode;
using ZXing;
using ZXing.Common;
using ZXing.Rendering;
```

<h2 style="color:red">內容</h2>

```C#
public partial class Qrcode : Form
{        
        private string imagePath = @"{圖片位置}";
        public Qrcode()
        {
            InitializeComponent();
            this.pictureBox1.Image = GetQRCodeByZXingNet("https://dotblogs.com.tw/neil_coding", 200, 200);
            Console.WriteLine("1122222222222");
        }
        private Bitmap GetQRCodeByZXingNet(String strMessage, Int32 width, Int32 height)
        {
            Bitmap result = null;
            try
            {
                BarcodeWriter barCodeWriter = new BarcodeWriter();
                barCodeWriter.Format = BarcodeFormat.QR_CODE; //barcode格式
                barCodeWriter.Options.Hints.Add(EncodeHintType.CHARACTER_SET, "UTF-8");  //編碼字元utf-8
                barCodeWriter.Options.Hints.Add(EncodeHintType.ERROR_CORRECTION, ZXing.QrCode.Internal.ErrorCorrectionLevel.H); //錯誤校正等級
                barCodeWriter.Options.Height = height; //高度
                barCodeWriter.Options.Width = width; //寬度
                barCodeWriter.Options.Margin = 0; //外邊距
                ZXing.Common.BitMatrix bm = barCodeWriter.Encode(strMessage); //將訊息寫入
                result = barCodeWriter.Write(bm);
                
                Bitmap overlay = new Bitmap(imagePath); //載入圖片

                int deltaHeigth = result.Height - overlay.Height; //圖片y
                int deltaWidth = result.Width - overlay.Width; //圖片x

                Graphics g = Graphics.FromImage(result); //圖型
                g.DrawImage(overlay, new Point(deltaWidth / 2, deltaHeigth / 2)); //畫出圖片
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
            return result;
        }
}
```

# Result

![result](../image/c_/qrcodemake_2.png "result")

# 結語
利用Zxing程式庫就可以製作出客製化的Qrcode，讓使用者去掃描