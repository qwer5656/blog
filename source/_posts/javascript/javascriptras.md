---
title: 前端login Ras加密
date: 2022-09-08 13:39:48
tags:
---

# 前言
由於前端資訊不安全，需透過Ras加密方式將密碼傳給後端並進行解密，RAS是一種非對稱加密演算法，在公開金鑰加密和電子商業中被廣泛使用。

<!-- more -->
# 傳統加密
在傳統的加密算法中，通信的雙方會採用一個共享的密鑰進行加密和解密，前端進行加密後傳給後端，後端接收後進行解密，由於加密和解密採用的密鑰是相同的，這種算法又稱為對稱加密
如下圖所示：
![result](../image/javascript/stmmetric.png "result")
圖片來源：<a href="https://www.twilio.com/blog/what-is-public-key-cryptography">twillo</a>
非對稱加密算法中，通信的雙方會採用一個公鑰和一個私鑰進行加密和解密，由於前端的資訊不安全通常只放公鑰在前端進行加密，在由後端利用私鑰進行解密
如下圖所示：
![result](../image/javascript/publictoprivate.png "result")
圖片來源：<a href="https://www.twilio.com/blog/what-is-public-key-cryptography">twillo</a>
# RSA加密與解密
1.使用公钥加密的数据,利用私钥进行解密
2.使用私钥加密的数据,利用公钥进行解密
# RSA秘钥生成方式
Mac系統內置OpenSSL(開源加密庫),所以可以直接在終端上使用命令。
Windows系統可以使用git命令行工具
單擊鼠標右鍵——git bash here 調出git bash
生成私鑰，密鑰長度為1024bit
```
    $ openssl genrsa -out private.pem 1024
    Generating RSA private key, 1024 bit long modulus (2 primes)
    ...+++++
    .............................+++++
    e is 65537 (0x010001)
```
從私鑰中提取公鑰
```
  $ openssl rsa -in private.pem -pubout -out public.pem
  writing RSA key
```
這樣就生成了private.pem 和 public.pem兩個文件

# jsencrypt介绍
jsencrypt是一個基於rsa加解密的js庫

安裝
```
npm install jsencrypt 
```

# vue環境下的程式碼

```javascript
<template>
  <div class="hello">
  

  </div>
</template>

<script>
import JSEncrypt from 'jsencrypt'
export default {
  name: 'HelloWorld',
  setup() {
    let content="要加密的内容";
    console.log("加密前:"+content);
    var encryptor = new JSEncrypt() 
    var pubKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD4oPAzFTGWT8MZMKDNw9BBaOOL
LQeRsBAA8KmqCDB8l5SWpae+nG5D73bz7cbOY/JgdCGD31ZX8mtvlKslJLQ7Y2BJ
GZkObJSxryVRy7PoVohQuX/63QtdXivmsIQNo2PjZzjiljTkEiQrP27WmgBIDo0D
B9MEOtgwa2nxwbywwwIDAQAB`;
    encryptor.setPublicKey(pubKey)//設置公鑰
    var rsaPassWord = encryptor.encrypt(content);
    console.log("加密內容:"+rsaPassWord);
    var decrypt = new JSEncrypt()
    var priKey = `MIICWwIBAAKBgQD4oPAzFTGWT8MZMKDNw9BBaOOLLQeRsBAA8KmqCDB8l5SWpae+
nG5D73bz7cbOY/JgdCGD31ZX8mtvlKslJLQ7Y2BJGZkObJSxryVRy7PoVohQuX/6
3QtdXivmsIQNo2PjZzjiljTkEiQrP27WmgBIDo0DB9MEOtgwa2nxwbywwwIDAQAB
AoGAAnZNiqP2Fr/5daFmpkL/J/aq8jDi901gCzJW68ki+cjifs9rJtcTvHZ9nhLH
ujmBJ/Vec5jdmQdciwFU5IxFgKAPF+YDeaQEnEBvWoIdJ8Yv66HkS+xOeesNobrc
46uaDSWFdbCypTlE9KgvYm/8mLOOEHNp19UsgEjdKwiT1tkCQQD+RlZU5mUXG5zA
TK0MAsLr8CrxgoZ6ifd0HfXXknKY+eiiOVDwbpAAP/6Zb/MCVk17QHttPYCHLuNO
aQIrVXPFAkEA+lDLR+dClOGBY8KTmloEJa990XwlppacI9J2xDAdBDZnzp7YMUdY
cUc2D0xZyCsWhZXlS5PW7Lmv+hz7hX3y5wJAS/DL1d1dcbJQdWoxAHZOqtJ2sNxv
t2c/HVHZW4GkciWpIdIGZ1hN75UtP7wckqUdzOKsOir1GOqa/o8EE9cYlQJAeaJl
BW2k9v+Vhkp4uxpexYk/VFpFWWv6N5X/zFms3+0oCEk7uMZ4faMi69AoGJKHgSZT
o6QVXjblAl6vAjEvpQJAGDiLg173MOTcLDAy+7yMGGKDfumHCdTkN1hH79gbICgd
bn5i62SpyiHRzh+tL2DSxCYbLW5KOU6CoxRfw/o55A==`;
    decrypt.setPrivateKey(priKey)//設置私鑰
    var uncrypted = decrypt.decrypt(rsaPassWord)
    console.log("解密:"+uncrypted);
    
  },
 
}
</script>
```

# result
![result](../image/javascript/result.png "result")


# 結語

1.RAS與一般對稱加密安全許多

2.NIST建議的RSA密鑰長度為至少2048位元[8]。

3.比起AES、3DES和其它對稱演算法來說，RSA要慢得多。實際的運用（如TLS）一般結合了對稱加密（如AES）和非對稱加密（如RSA）兩者。