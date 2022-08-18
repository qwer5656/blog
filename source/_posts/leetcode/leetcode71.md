---
title: Javascript(leetcode#71) Simplify Path
date: 2022-08-18 10:06:43
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---

**Difficult:Medium**


# 題目
Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

The canonical path should have the following format:

The path starts with a single slash '/'.
Any two directories are separated by a single slash '/'.
The path does not end with a trailing '/'.
The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
Return the simplified canonical path.
<!--more-->

# 翻譯
給定一個字符串路徑，它是 Unix 風格文件系統中文件或目錄的絕對路徑（以斜杠 '/' 開頭），將其轉換為簡化的規範路徑。

在 Unix 風格的文件系統中，句點 '.'表示當前目錄，雙句點“..”表示上一級目錄，任何多個連續斜杠（即“//”）都被視為單個斜杠“/”。對於此問題，任何其他格式的句點（例如“...”）都被視為文件/目錄名稱。

規範路徑應具有以下格式：

路徑以單斜杠“/”開頭。
任何兩個目錄都由一個斜杠“/”分隔。
路徑不以尾隨“/”結尾。
該路徑僅包含從根目錄到目標文件或目錄的路徑上的目錄（即沒有句點“.”或雙句點“..”）
返回簡化的規範路徑。

# 範例

Example 1
```
Input: path = "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.
```

Example 2
```
Input: path = "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
```


Example 3
```
Input: path = "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
```
# 解題思路
1.用一個陣列將路徑存在裡面
2.當'../'或是'..'結束時移掉一個路徑
# Solution
Code 1 :
```Javascript
var simplifyPath = function (path) {
    let arr = [];
    let num = 0;
    let str = "";
    for (let i = 0; i < path.length; i++) {
        if (path[i] == '.') {
            num++;
            str += ".";
        }
        else if (path[i] != '.' && path[i] != '/') {
            str += path[i];
            num = 0;
        }
        else if (path[i] == '/') {
            if (num == 1 && str.length == 1) {
                num = 0;
                str = "";
            }
            else if (num == 2 && str.length == 2) {
                arr.pop();
                num = 0;
                str = "";
            }
            else if (str != "") {
                arr.push(str);
                num = 0;
                str = "";
            }
        }
    }
    if (num == 1 && str.length == 1) {
        num = 0;
        str = "";
    }
    else if (num == 2 && str.length == 2) {
        arr.pop();
        num = 0;
        str = "";
    }
    else if (str != "") {
        arr.push(str);
        num = 0;
        str = "";
    }
    return "/" + arr.join("/");
};
```
