<template>
  <transition name="fade">
    <div class="wrap" v-show="visible">
        <div class="content">
          <div class="icon" v-if="type !== undefined">
            <img v-if="type === 'success'" :src="successImg" alt="">
            <img v-if="type === 'fail'" :src="failImg" alt="">
            <img v-if="type === 'warning'" :src="warningImg" alt="">
          </div>
          <div class="main">
            <p v-if="title" class="title">{{title}}</p>
            <p v-if="message" class="message">{{message}}</p>          
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
      title: "",
      warningImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACTUExURQAAAPZ/AP9/APaAAPR/APaAAPV/APZ/AP+qAO9/APZ/APWAAPZ/APZ/APZ/APaAAPaAAP+ZAPZ/APWAAPV/APV/APV/APaAAPaAAPWAAPaAAPV/APWBAPaAAP////7z6PmkWf/x5v7v4veTOfaHG/mmW//8+fmxcP///v3m0/7o1v717v/x5f727/zavfzYuf7z6apjXjkAAAAddFJOUwBYBq1M6YDqAxCW+eiSlJNXBezF+PrGkceB68RNKOvwJQAAAOJJREFUKM+Fk+kSgjAMhAO0VAREPPFIPQDv6/2fTvHABKTuv+03k0mTDcBHsRiPgsEgGI1FDFV5rsJSU9fj1AqQKbAIbLWxpnarpA7+kPPhEf5U50W72KDus2fZhGXRv0selovFklgXwCb/xZXWa2KVDYKW0w9RLyA04QhmJtwHZcIKfBP2a3jHMSt+0HrPi/epTS/XlLcWokERHwtmGbNzsHvEbjebLR8qW8lR6zNfCVsoX4nyKnHIb6f8695x7BjD9C+Kf4JcnEElcNKqHNGE/L838WpXFoswkcOhTEJhl493LVFPACiux+0AAAAASUVORK5CYII=",
      successImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADzUExURQAAAJDcAH/UAJDbAZDdAJDbAY/bAY/cAar/AI/fAJDbAZDcAY/bAY/cAZDcAY/cAY/bAJnMAI/cAY/cAY/cAY/cAZDcAZDbAZDbAY/cAZDbAZDcAY7aAJDcAf///////sDrgP3++pbeHpDcBf7//bjpcPv++OD1wPf87fb8653gNPH747vpdpfeIM7wnPX76Z/hNsjukPz++eX3yrXoau/637PoZf3+/J3gMfL85+b3zfD74ZHcCMLshPf87szvl+T2yLHnYpzgL7DnYLTnaM/wn8zvmP3++7PoZsTtiLvpdJ/hOcHsguf4z+j40cbtjZbeHLpPNNsAAAAddFJOUwBYBq1M6YDqAxCW+eiSlJNXBcXs+PrGkYHHxOtNLrP61QAAASZJREFUKM+Fk+d2gzAMhQWxcUggBMhsaydNuvfee+/2/Z+m2BjjACH3j+7RdzCSLQEk8lG347RaTqeLfMjKtghVmrfsSWo4dEKOocFqjeZUqypaoQWqJNyjhWrEtEmnqClqxtMw5vVbBWAcBwvAJHm6fLN+zyMxAeXpx4CxXeEQuPlvlxhja8J6MJelR5wOtoQPQP56NPz6E+bplNNhnCVQj80qY9/bUTxZjCi7lifVJb56jZIXI/oo6DtVWB5+x9OHbwc8/Ko6CASxeThmifbTMgPV2NmlpLdaF156LRubgu7oTS6AGSZ+7zyizzqNLlV7ks+flZexjq3SByV26TjIcWyUDtOsUZwxyHwNMvVhI7NEvTCFYc/ObZmP3D5ut3HfRaZK/gMtNFN4YO6L0wAAAABJRU5ErkJggg==",
      failImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAF0UExURQAAAOsAZOoAY+cAXOoAY+sAY/8AZuoAY+oAY+sAZOoAY+oAZP8AVe4AZuoAY+sAY+oAZOkAZOoAZOoAY+sAY+oAZOoAZOsAY+sAY+sAZOsAY+sAY+oAZOsAZOsAY+sAY+oAZOoAZOsAZP///+sAZesAY+sAZucAR+cASegAUukAWekAVOkAVeoAXecAS+oAW+sAYeYARewAaP7o8ecASOwAZ+kAVuYAR/FLjP7w9uoAWe4mdv3k7v/z9/NhnOoAXuwGbOwPbfzL3uoAXP/9/u0Rbf7r8ugAVf3l7+wLa+oAWukAWukAW/FKi+wAav/y9/JLj/FJjOYARv7p8vFFif/+//JKjvFEh/7s8+sAaesFZ+wEa/3k7e4ace4oevJLjPRlnv7u9PJMjesEZv/8/ecARv3j7f3f6/NlnvFGiewRbf3g6/3g7P3U5f7n8PBFiO4XcP7r8+wNbP3h7f/0+e0cce0acf/y9v7p8e4mef3V5OwAaRMuFI4AAAAidFJOUwBP7gtVgAXk4/SXVgYPlMXxVH+V8/KTkMPEj6mlqJKn4sZUh3icAAABs0lEQVQoz32T91sCMQyGq4B3yhBwgLjrDfYSHDgYCu699957r3/eptcK4j1+P9zlydu0TZogxGVxuNxiQ4PgdjksqFxWp4h/JDitv6m5BIJEcyltw39kK9IWrKN2Thuxrli8A2xJ9kewRN1SyC9TywjUUE1pYCvpo1wJpjNByqsNBDthYTR4/rY9rxKvFM7mhoYDMnhNCFVVgpGKdxH1xbDivTwlVnISvJVVqIKeFxq5Ab6sJna6yX9OjlB3BarRrjM2MU7cKwOb67BsxqddvgbVaoYSzkNY/xI9RGW51SKBWYr3tdBFdXwX0xIjxUf1vApKYuMM6OCHygpAUvvBEj7ZHQR89ZVQeIidby7JsYtRbfPCi5fzDn413HsIqLuffN7zYcY7WWLYtwf04WgAthifGJNYYlpZpvEzcd/ee3vXYNnnSIiVRSuqH4r6lCWHLi4Aj6dYUZEJDDmwP5R7DJMXkdXV64Phnih7Ev6gPZl0UKEJ+pTZQPFBkZEmFvWHWDfgyFRJOyBk02+mOt5srXq0udiqjf/E6o2BYC4bIpNQAk3WP1NmMXqaRLtdbPIYiyP4De4Jb0xTfGlwAAAAAElFTkSuQmCC"
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
        height: 20px;
        line-height: 20px;
      }
      .message {
        height: 20px;
        line-height: 20px;
      }
   }
 }
}
</style>
