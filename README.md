# easy-toast
vue simple toast component


# install 
npm i easy-toast

# use
```
import Vue from 'vue'  
import Toast from 'easy-toast';  
Vue.use(Toast, {duration: 1500 // 消失间隔，可以不传，默认1.5s});  
```

# option
## Object  
  ### type 
  图标类型Sting： success，fail, warning，默认不显示  
  ### title 
  标题String:  默认：""  
  ### message
  内容String:  默认：""  
## 
### 或者直接传String类，直接显示内容  
 
# methods
### 手动关闭的方法:
```
this.$toast.hide();
```

 # example
```
this.$toast({
  type: "warning",
  title: "警告",
  message: "这是警告信息"
});
this.$toast({
  type: "success",
  title: "成功",
  message: "这是条信息"
});
this.$toast({
  type: "fail",
  title: "失败",
  message: "这是条信息"
});
this.$toast("这是条信息");
 ```
![warning](https://i.loli.net/2018/08/28/5b850b02bb860.png)
![success](https://i.loli.net/2018/08/28/5b850b02bb3b2.png)
![fail](https://i.loli.net/2018/08/28/5b850b02c83e0.png)
![info](https://i.loli.net/2018/08/28/5b850b02c83bb.png)
