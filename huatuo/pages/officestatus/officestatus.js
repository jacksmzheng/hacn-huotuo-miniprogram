// pages/officestatus/officestatus.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   * 
   */
  data: {
    prodVersion: app.globalData.prodVersion,
    healthStatus: [{
        area: '城市状况',
        areaen: 'City Status',
        buildingReports: [{
            buildingName: '上海 Shanghai',
            confirmed: 1,
            suspect: 2,
            fever: 3,
          },
          {
            buildingName: '北京 Beijing',
            confirmed: 1,
            suspect: 2,
            fever: 3,
          },
          {
            buildingName: '成都 Chengdu',
            confirmed: 1,
            suspect: 2,
            fever: 3,
          },
          {
            buildingName: '东莞 Dongguan',
            confirmed: 1,
            suspect: 2,
            fever: 3,
          },
          {
            buildingName: '佛山 Foshan',
            confirmed: 1,
            suspect: 2,
            fever: 3,
          },
          {
            buildingName: '福州 Fuzhou',
            confirmed: 1,
            suspect: 2,
            fever: 3,
          }
        ]
      },
      {
        area:'西安办公室情况',
        areaen: "Xi'An Office Status",
        buildingReports: [
          {
            buildingName: '',
            confirmed: 0,
            suspect: 0,
            fever: 0,
          }
        ]
      }
    ],
    vpnStatus: [{
      vpn: [{
          name: 'VPN-HK',
          count: 0
        },
        {
          name: 'VPN-CN',
          count: 0
        }
      ]
    }],
    branches: [
      [{
        area: '上海',
        area_en: 'Shanghai',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }, {
        area: '北京',
        area_en: 'Beijing',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }, {
        area: '成都',
        area_en: 'Chengdu',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }],
      [{
        area: '东莞',
        area_en: 'Dongguan',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }, {
        area: '福州',
        area_en: 'Fuzhou',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }, {
        area: '广州',
        area_en: 'Guangzhou',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }],
      [{
        area: '杭州',
        area_en: 'Hnagzhou',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }, {
        area: '济南',
        area_en: 'Jinan',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }, {
        area: '昆明',
        area_en: 'Kunming',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }],
      [{
        area: '南京',
        area_en: 'Nanjing',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }, {
        area: '宁波',
        area_en: 'Ningbo',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }, {
        area: '深圳',
        area_en: 'Shenzhen',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }],
      [{
        area: '厦门',
        area_en: 'Xiamen',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }, {
        area: '天津',
        area_en: 'Tianjin',
        confirmed: 1,
        suspect: 2,
        fever: 3,
      }]
    ],
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

  /**
   * 生命周期函数--监听页面加载
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
    this.refreshData()
  },

  onHide: function() {
    clearInterval(this.data.refreshEvent)
  },

  wechatLogin() {
    var host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
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
        complete: res => { }
      });
    }, reject => {
      console.log(reject)
    })
  },

  refreshData: function() {
    const that = this
    wx.showLoading({
      title: '数据加载中...'
    })
    that.requestDict()
    that.setData({
      refreshEvent: setInterval(function() {
        that.requestDict()
      }, 5 * 60 * 1000),
    })
  },

  requestDict: function() {
    const that = this
    var host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    wx.request({
      url: host + '/api/datadict',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json',
        'X-IS-DUMMY': false
      },
      success(res) {
        console.log('dictionary success res :', res)
        if (res.statusCode == 200) {
          that.setData({
            areaDic: res.data.area,
            buildingDic: res.data.building,
            vpnDic: res.data.vpn
          })
          wx.showLoading({
            title: '数据加载中...',
          })
          that.requestHealthStatus()
          that.requestVPNStatus()
        }

      },
      fail(res) {
        wx.hideLoading()
        console.log('dictionary fail res : ', res)
      },
      complete(res) {
        wx.hideLoading()
      }
    });

  },

  requestHealthStatus: function() {
    const that = this
    var host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    wx.request({
      url: host + '/api/health',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json',
        'X-IS-DUMMY': false
      },
      success(res) {
        console.log('health status success res :', res)
        if (res.statusCode == 200 && res.data) {
          const healthStatus = that.formatHealthData(res.data)
          that.setData({
            healthStatus
          })
        }
      },
      fail(res) {
        console.log('health status fail res : ', res)
      },
      complete(res) {
        wx.hideLoading()
      }
    });
  },

  requestVPNStatus: function() {
    const that = this
    var host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    wx.request({
      url: host + '/api/vpn/report',
      method: 'POST',
      data: {
        "day": 0
      },
      header: {
        'content-type': 'application/json',
        'X-IS-DUMMY': false
      },
      success(res) {
        console.log('vpn status success res :', res)
        if (res.statusCode == 200 && res.data) {
          const vpnStatus = that.formatVPNData(res.data)
          that.setData({
            vpnStatus
          })
        }
      },
      fail(res) {
        console.log('vpn status fail res : : ', res)
      },
      complete(res) {
        wx.hideLoading()
      }
    })
  },

  formatHealthData: function(responseData) {
    const areaDic = this.data.areaDic
    const buildingDic = this.data.buildingDic
    for (let i = 0; i < responseData.length; i++) {
      if (areaDic && responseData[i].area == 'GZ') {
        responseData[i].area = areaDic.GZ["zh-cn"]
        responseData[i].areaen = areaDic.GZ["en-hk"]
        responseData[i].buildingReports[0].buildingName = buildingDic["2"]
        responseData[i].buildingReports[1].buildingName = buildingDic["3"]
        responseData[i].buildingReports[2].buildingName = buildingDic["4"]
        responseData[i].buildingReports[3].buildingName = buildingDic["5"]
        responseData[i].buildingReports[4].buildingName = buildingDic["6"]
        responseData[i].buildingReports[5].buildingName = buildingDic["7"]

      }
      if (areaDic && responseData[i].area == 'XA') {
        responseData[i].area = areaDic.XA["zh-cn"]
        responseData[i].areaen = areaDic.XA["en-hk"]
        for (let j = 0; j < responseData[i].buildingReports.length; j++) {
          responseData[i].buildingReports[j].buildingName = buildingDic["8"]
        }
      }
    }
    return responseData
  },

  formatVPNData: function(responseData) {
    const vpnReports = responseData.vpnReports
    const vpnStatus = this.data.vpnStatus
    const vpnDic = this.data.vpnDic

    for (let i = 0; i < vpnReports.length; i++) {
      if (vpnDic[vpnReports[i].vpnType]) {
        vpnStatus[0].vpn[i].name = vpnDic[vpnReports[i].vpnType]['en-hk']
        vpnStatus[0].vpn[i].cnname = vpnDic[vpnReports[i].vpnType]['zh-cn']
        vpnStatus[0].vpn[i].count = vpnReports[i].count
      }
    }

    return vpnStatus
  },

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
    app.goNext(e.currentTarget.dataset.url)
  },

  submitCase(e) {
    if (app.globalData.userInfo == null) app.goNext('/pages/login/login')
    else app.goNext(e.currentTarget.dataset.url)
  },

  readRTNews() {

  }
})