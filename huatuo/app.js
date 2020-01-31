//app.js
App({
  globalData: {
    userInfo: null
  },
  goNext(url) {
    wx.navigateTo({
      url: url
    })
  }
})