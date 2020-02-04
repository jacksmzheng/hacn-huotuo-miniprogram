//app.js
App({
  api: {
    isProdEnv: false,
    devUrl: 'https://huatuo-test.app77.cn',
    prodUrl: ''
  },
  globalData: {
    appId: 'wxf60257610325b729',
    prodVersion: false,
    userInfo: null
  },
  goNext(url) {
    wx.navigateTo({
      url: url
    })
  }
})