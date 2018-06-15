# easy-toast
vue simple toast component


# install 
npm i easy-toast

# use
import Vue from 'vue'  
import Toast from 'easy-toast';  
Vue.use(Toast, {duration: 1500 // 消失间隔，可以不传，默认1.5s});  

# option
## Object  
  ### type 
  图标类型Sting： success，fail ，默认不显示  
  ### title 
  标题String:  默认：""  
  ### message
  内容String:  默认：""  
## 
### 或者直接传String类，直接显示内容  
 
 
 # example
 ## 
 this.$toast({  
  type: "success",  
  title: "提示",  
  message: "操作成功！"  
 });  
 ## 
 
 this.$toast("操作成功！");
