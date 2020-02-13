//app.js
App({
  api: {
    isProdEnv: true,
    devUrl: 'https://huatuo-test.app77.cn',
    prodUrl: 'https://huatuo.app77.cn'
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