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
    subBranches: [],
    activeIsolation: 0,
    passiveIsolation: 0,
    realTimeNews: '2.10日所有网点恢复营业',
    realTimeNewsList: [],
    scrollInterval: null,
    unreadNum: 0
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
    this.getNewsList({
      openId: app.globalData.userInfo ? app.globalData.userInfo.openId : '',
      appId: app.globalData.appId
    })
    this.scrollNews()
  },

  onHide: function() {
    clearInterval(this.data.refreshEvent)
    clearInterval(this.data.scrollInterval)
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
          console.log('wx login : ', res)
          app.globalData.session = res.data.session
          app.globalData.userInfo = res.data.userInfo
          if (app.globalData.userInfo == null) {
            wx.redirectTo({
              url: '/pages/login/login',
            })
          } else {
            this.getNewsList({
              openId: app.globalData.userInfo.openId,
              appId: app.globalData.appId
            })
          }
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
          subBranches: tmp3,
          activeIsolation: res.data.activeIsolation || 0,
          passiveIsolation: res.data.passiveIsolation || 0
        })
      },
      fail: res => console.log(res),
      complete: res => {}
    });
  },

  getNewsList(data) {
    if (!data.openId) return
    let host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    wx.request({
      url: host + '/api/important-news',
      method: 'POST',
      data: data,
      success: res => {
        console.log(res)
        this.setData({
          realTimeNewsList: res.data.returnObject.importantNewsResponseList,
          realTimeNews: res.data.returnObject.importantNewsResponseList[0],
          unreadNum: res.data.returnObject.unReadCount
        })
      },
      fail: res => console.log(res),
      complete: res => {}
    });
  },

  scrollNews() {
    let time = 0;
    this.data.scrollInterval = setInterval(() => {
      let realTimeNewsList = this.data.realTimeNewsList
      let listLen = this.data.realTimeNewsList.length
      if (listLen > 0) {
        this.setData({
          realTimeNews: realTimeNewsList[time % listLen]
        })
        time++
      }
    }, 7 * 1000)
  },

  /****************************************************************************************
   * 页面事件
   */
  submitHealth(e) {
    app.goNext(e.currentTarget.dataset.url)
  },
  submitVPN(e) {
    app.goNext(e.currentTarget.dataset.url)
  },
  submitHelpDonation(e) {
    app.goNext(e.currentTarget.dataset.url)
  },
  submitCase(e) {
    app.goNext(e.currentTarget.dataset.url)
  },
  readNews(e) {
    app.goNext(e.currentTarget.dataset.url)
  }
})