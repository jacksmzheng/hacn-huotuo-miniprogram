// pages/officestatus/officestatus.js
const app = getApp()
const cityMap = {
  'SH': ['上海', 'Shanghai'],
  'BJ': ['北京', 'Beijing'],
  'CD': ['成都', 'Chengdu'],
  'DG': ['东莞', 'Dongguan'],
  'FZ': ['福州', 'Fuzhou'],
  'GZ': ['广州', 'Guangzhou'],
  'HaZ': ['杭州', 'Hangzhou'],
  'JN': ['济南', 'Jinan'],
  'KM': ['昆明', 'Kunming'],
  'NJ': ['南京', 'Nanjing'],
  'NB': ['宁波', 'Ningbo'],
  'SZ': ['深圳', 'Shenzhen'],
  'XM': ['厦门', 'Xiamen'],
  'TJ': ['天津', 'Tianjin'],
  'FS': ['佛山', 'Foshan'],
  'HuZ': ['惠州', 'Huizhou'],
  'JM': ['江门', 'Jiangmen'],
  'ZS': ['中山', 'Zhongshan']
}

Page({
  /**
   * 页面的初始数据
   * 
   */
  data: {
    prodVersion: app.globalData.prodVersion,
    branches: [],
    subBranches: [{
        area: '佛山',
        area_en: 'Foshan',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      },
      {
        area: '惠州',
        area_en: 'Huizhou',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      },
      {
        area: '江门',
        area_en: 'Jiangmen',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      },
      {
        area: '中山',
        area_en: 'Zhongshan',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }
    ],
    realTimeNews: '2.10日所有网点恢复营业'
  },

  /**************************************************************************************
   * 生命周期函数
   */
  onLoad: function(options) {
    const screenWidth = wx.getSystemInfoSync().windowWidth
    const imageWidth = (screenWidth - 100) / 5
    const imageHeight = imageWidth
    this.setData({
      imageWidth,
      imageHeight
    })
    this.wechatLogin()
  },

  onShow: function() {
    this.getHealthStatus()
    this.refreshData()
  },

  onHide: function() {
    clearInterval(this.data.refreshEvent)
  },


  /**************************************************************************************
   * 其他功能
   */
  wechatLogin() {
    let host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    new Promise((resolve, reject) => {
      wx.login({
        success: (res) => {
          if (res.code) resolve(res.code)
          else reject('登录失败！' + res.errMsg)
        }
      })
    }).then(resolve => {
      wx.request({
        url: host + '/api/wechat-login',
        method: 'POST',
        data: {
          "appId": app.globalData.appId,
          "code": resolve
        },
        success: res => {
          app.globalData.session = res.data.session
          app.globalData.userInfo = res.data.userInfo
        },
        fail: res => console.log('health status fail res : ', res),
        complete: res => {}
      });
    }, reject => {
      console.log(reject)
    })
  },

  refreshData: function() {
    wx.showLoading({
      title: '数据加载中...'
    })
    this.setData({
      refreshEvent: setInterval(() => {
        this.getHealthStatus()
      }, 5 * 60 * 1000),
    })
  },

  getHealthStatus() {
    let host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    wx.request({
      url: host + '/api/hacn/health',
      method: 'GET',
      data: {},
      success: res => {
        wx.hideLoading()
        let tmp1 = []
        let tmp2 = []
        res.data.branches.forEach((e, i, a) => {
          e.area_cn = cityMap[e.area][0]
          e.area_en = cityMap[e.area][1]
          tmp2.push(e)
          if (tmp2.length == 3 || i + 1 >= a.length) {
            tmp1.push(tmp2)
            tmp2 = []
          }
        })
        let tmp3 = []
        res.data.subBranches.forEach((e, i, a) => {
          e.area_cn = cityMap[e.area][0]
          e.area_en = cityMap[e.area][1]
          tmp3.push(e)
        })
        this.setData({
          branches: tmp1,
          subBranches: tmp3
        })
      },
      fail: res => console.log(res),
      complete: res => {}
    });
  },

  /****************************************************************************************
   * 页面事件
   */
  submitHealth: function(e) {
    console.log(e)
    app.goNext(e.currentTarget.dataset.url)
  },
  submitVPN: function(e) {
    console.log(e)
    app.goNext(e.currentTarget.dataset.url)
  },
  submitHelpDonation(e) {
    console.log(e)
    if (app.globalData.userInfo == null) app.goNext('/pages/login/login')
    else app.goNext(e.currentTarget.dataset.url)
  },
  submitCase(e) {
    if (app.globalData.userInfo == null) app.goNext('/pages/login/login')
    else app.goNext(e.currentTarget.dataset.url)
  },
  readNews(e) {
    app.goNext(e.currentTarget.dataset.url)
  },
  readRTNews() {

  }
})