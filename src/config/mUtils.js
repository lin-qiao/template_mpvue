const error = function(title) {
    wx.showToast({
        title: title,
        image:'/static/images/error.png',
        duration: 1500
    })
};
const success = function(title) {
    wx.showToast({
        title: title,
        icon:'success',
        duration: 1500
    })
};
export default{
    error,
    success
}
