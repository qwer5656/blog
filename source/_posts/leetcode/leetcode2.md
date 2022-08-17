---
title: Javascript(Leetcode#2) Add Two Numbers
date: 2022-07-26 14:53:45
categories: 
- Leetcode 
- Leetcode Medium 
tags:
- Leetcode
- Javascript
---


**Difficulty: Medium**

# 題目
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


<!--more-->
# 翻譯

你將獲得兩個非空的鏈接列表，他們代表兩個非負值的整數.  這些數字以相反順序儲存，並且他們的每個節點都包含一個數字 將兩個數字相加並作為鏈接列表返回

您可以假設兩個數字不包含任何前導零，但數字0本身除外

# 範例

Example 1:

{% codeblock %}
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) 
Output: 7 -> 0 -> 8 
Explanation: 342 + 465 = 807.
{% endcodeblock %}

Example 2:
{% codeblock %}
Input: l1 = [0], l2 = [0]
Output: [0]
{% endcodeblock %}

Example 3:
{% codeblock %}
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
{% endcodeblock %}

# 解題思路
1.用新的link list儲存相加的結果並回傳

2.兩個相加有可能大於9，需考慮進位問題

3 要注意l1和l2有可能長度不同

# Solution

Code 1 :
```javascript
var addTwoNumbers = function(l1, l2) {
   let list,curlist;//linklist的head,curlist 連接後面用的
   let sum;//存取相加結果
   let temp=0; //判斷是否進位

        //11及l2都沒值 及temp不用進位
        while(l1||l2||temp>0)
        {
            sum=0;
            if(l1!=null)
            {
                sum+=l1.val;
                l1=l1.next;
            }
            if(l2!=null)
            {
                sum+=l2.val;
                l2=l2.next;
            }
            sum+=temp;
            if(list==null)
            {
                list=new ListNode(sum%10);
                curlist=list;
            }
            else
            {
                curlist.next=new ListNode(sum%10);
                curlist=curlist.next;
            }
            temp=parseInt(sum/10);

        }

        return list;

}
```

Code 2 :
```javascript
 var addTwoNumbers = function(l1, l2) {     
        return add(l1,l2,0);
}
function add(l1,l2,pre)
{
        
        if(l1==null&&l2==null)
        {
            return pre?{val:pre,next:null}:null;
        }
        let sum=0;
        sum=(l1?l1.val:0)+(l2?l2.val:0)+pre;
        l1=l1?l1.next:null;
        l2=l2?l2.next:null;
        return {val:sum%10,next:add(l1,l2,Math.floor(sum/10))};
}
```

