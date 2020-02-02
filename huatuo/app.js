//app.js
App({
  api: {
    isProdEnv: false,
    devUrl: 'https://huatuo.app77.cn',
    prodUrl: ''
  },
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