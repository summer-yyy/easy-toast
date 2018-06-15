/**
 * 自定义 提示框( Toast )组件
 */
var Toast = {};
var showToast = false, // 存储toast显示状态
  toastVM = null; // 存储toast vm
 
Toast.install = function (Vue, options) {
  // 参数
  var opt = {
    duration: 1500
  };
  for (var property in options) {
    opt[property] = options[property];
  }
 
  Vue.prototype.$toast = function (config) {
    if (showToast) {
      // 如果toast还在，则不再执行
      return;
    }
    if (!toastVM) {
      var toastTpl = Vue.extend(require("./toast.vue").default);
      toastVM = new toastTpl()
      var tpl = toastVM.$mount().$el;
      console.log(toastVM)
      document.body.appendChild(tpl);
    }
    toastVM.visible = true;
    toastVM.message = config.message;
    toastVM.type = config.type;
    toastVM.title = typeof config === "string" ? config : config.title;
 
    setTimeout(function () {
      toastVM.visible = showToast = false;
    }, opt.duration)
  };

}
 
// 向外暴露接口
module.exports = Toast;