exports.install = function(Vue, options) {
  Vue.prototype.error = function(title) {
      wx.showToast({
          title: title,
          image:'/static/images/error.png',
          duration: 1500
      })
  };
  Vue.prototype.success = function(title) {
      wx.showToast({
          title: title,
          icon:'success',
          duration: 1500
      })
  };
}
