---
title: Vue_Pinia(簡易使用)
date: 2022-09-07 16:33:02
tags: 
- Vue
- Pinia 
categories: Vue
---


# 前言
在開發中小型專案時由於vuex會造成程式碼太過攏長不夠直覺，因此我們能使用pinia來取代vuex當作data store

<!--more-->
# 安裝環境
1.Vue3
2.Pinia
3.Vue devtool

```
1.vue create my-project
2.cd my-project
3.npm install pinia
```

# 架構圖
<h2 style="color:red">Vuex 架構圖</h2>

![result](../image/vue/vuexstruct.webp "result")

<h2 style="color:red">pinia 架構圖</h2>

![result](../image/vue/piniastruct.webp "result")

# 程式碼

<h2 style="color:red">修改main.js</h2>

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(store).use(router).mount('#app')
```

<h2 style="color:red">在store裡建立一個pinia.js</h2>

```javascript
import { defineStore } from 'pinia'
export const useStore=defineStore('main', {
    state(){
        return{
        message:"Hello Pinia"
        }
    },
    getters: {
    },
    actions: {
    },
});
```

<h2 style="color:red">修改componets 元件</h2>

```javascript
<template>
  <div class="hello">
  <h1>  {{plusOne}}</h1>
    <input v-model="plusOne">
   
  </div>
</template>

<script>
import { useStore } from '../store/pinia';
import {computed} from 'vue'
export default {
  name: 'HelloWorld',
  setup() {
    const common = useStore();

    const plusOne = computed({
      get: () => common.message,
      set: (val) => {
       common.message=val;
      },
    })
    return {
      plusOne
    }
  },
  props: {
    msg: String
  }
}
</script>
```

# result

![result](../image/vue/piniaview.png "result")


# 結語
1.pinia去掉mutation，支持直接導入使用，配合vue3 setup，讓資料管理更方便。