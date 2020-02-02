//app.js
App({
  globalData: {
    prodVersion: false,
    userInfo: null
  },
  goNext(url) {
    wx.navigateTo({
      url: url
    })
  }
})