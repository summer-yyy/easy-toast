<template>
  <transition name="fade">
    <div class="wrap" v-show="visible">
        <div class="content">
          <div class="icon" v-if="type !== undefined">
            <img v-if="type === 'success'" src="./images/icon-check.png" alt="">
            <img v-if="type === 'fail'" src="./images/icon-cross.png" alt="">
          </div>
          <div class="main">
            <p class="title">{{title}}</p>
            <p class="message">{{message}}</p>          
          </div>
        </div>  
    </div>
  </transition> 
</template>

<script>
export default {
  name: 'toast',
  data () {
    return {
      visible: false,
      message: "",
      type: "",
      title: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@fontColor: #252626;
@bgActive: #47be7b;
@bgColor: #f0f2f1;
.padding {
  padding: 5px 20px;
}
.active {
  color: #fff;
  background: @bgActive;
}
.wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
 .content {
   padding: 20px;
   display: flex;
   align-items: center;
   background: #fff;
   border-radius: 10px; 
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate3d(-50%, -50%, 0);
   box-shadow: 0px 5px 10px rgba(44,44,44, 0.3);
   .icon {
     margin-right: 10px;
     height: 20px;
   }
   .main {
     color: #444;
     .title {
       font-size: 14px;
       font-weight: bold;
     }
   }
 }
}
</style>
