// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnText: '获取验证码',
    btnLock: false,
    timer: 60
  },

  /**************************************************************************************
   * 其他功能
   */
  tapGetCaptcha() {
    this.lockCaptcha()
  },

  lockCaptcha() {
    if (this.data.btnLock) return
    else {
      this.setData({
        btnLock: true,
        btnText: '60秒后重试'
      })
      let i = setInterval(() => {
        this.setData({
          btnText: --this.data.timer + '秒后重试'
        })
        if (this.data.timer == 0) {
          clearInterval(i)
          this.setData({
            btnText: '获取验证码',
            btnLock: false,
            timer: 60
          })
        }
      }, 1000)
    }
  },

  /**************************************************************************************
   * 其他功能
   */
  initData() {
    wx.setNavigationBarTitle({
      title: '登陆'
    })
  },

  /**************************************************************************************
   * 生命周期函数
   */
  onLoad: function(options) {
    this.initData()
  },

  onShow: function() {

  },

  onHide: function() {

  },

  onUnload: function() {

  }
})