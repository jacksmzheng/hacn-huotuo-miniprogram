// pages/officestatus/officestatus.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   * 
   */
  data: {
    prodVersion: app.globalData.prodVersion,
    healthStatus:
      [
        {
          area:'广州办公室情况',
          areaen: 'Guangzhou Office Status',
          buildingReports:[
            {
              buildingName:'',
              confirmed:0,
              suspect:0,
              fever:0,
            },
            {
              buildingName: '',
              confirmed: 0,
              suspect: 0,
              fever: 0,
            },
            {
              buildingName: '',
              confirmed: 0,
              suspect: 0,
              fever: 0,
            },
            {
              buildingName: '',
              confirmed: 0,
              suspect: 0,
              fever: 0,
            },
            {
              buildingName: '',
              confirmed: 0,
              suspect: 0,
              fever: 0,
            },
            {
              buildingName: '',
              confirmed: 0,
              suspect: 0,
              fever: 0,
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
    vpnStatus: 
      [
        {
          vpn: [
            {
              name: 'VPN-HK',
              count: 0
            },
            {
              name: 'VPN-CN',
              count: 0
            }
          ]
        }
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const screenWidth =  wx.getSystemInfoSync().windowWidth
    const imageWidth = (screenWidth - 100)/5
    const imageHeight = imageWidth
    this.setData({ imageWidth, imageHeight })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.refreshData()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(this.data.refreshEvent)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  refreshData: function () {
    const that = this
    wx.showLoading({ title: '数据加载中...' })
    that.requestDict()
    that.setData({
      refreshEvent: setInterval(function () {
        that.requestDict()
      }, 5 * 60 * 1000),
    })
  },

  requestDict:function() {
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
        if (res.statusCode == 200){
          that.setData({
            areaDic: res.data.area,
            buildingDic: res.data.building,
            vpnDic: res.data.vpn
          })
          wx.showLoading({ title: '数据加载中...', })
          that.requestHealthStatus()
          that.requestVPNStatus()
        }

      },
      fail(res) {
        console.log('dictionary fail res : ', res)
      },
      complete(res) {
        wx.hideLoading()
      }
    });

  },

  requestHealthStatus: function () {
    const that = this
    var host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    wx.request({
      url: host+ '/api/health',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json',
        'X-IS-DUMMY': false
      },
      success(res) {
        console.log('health status success res :',res)
        if ( res.statusCode == 200 && res.data ){
          const healthStatus = that.formatHealthData(res.data)
          that.setData({ healthStatus })
        }
      },
      fail(res) {
        console.log('health status fail res : ', res)
      },
      complete(res){
        wx.hideLoading()
      }
    });
  },

  requestVPNStatus: function () {
    const that = this
    var host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    wx.request({
      url: host+ '/api/vpn/report',
      method: 'POST',
      data: {
        "day": 0
      },
      header: {
        'content-type': 'application/json',
        'X-IS-DUMMY': false
      },
      success(res) {
        console.log('vpn status success res :',res)
        if (res.statusCode == 200 && res.data) {
          const vpnStatus = that.formatVPNData(res.data)
          that.setData({ vpnStatus })
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

  formatHealthData: function(responseData){
    const areaDic = this.data.areaDic
    const buildingDic = this.data.buildingDic
    for (let i = 0; i < responseData.length; i++){
      if (areaDic && responseData[i].area == 'GZ' ){
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
        for (let j = 0; j < responseData[i].buildingReports.length; j++){
          responseData[i].buildingReports[j].buildingName = buildingDic["8"]
        }
      }
    }
    return responseData
  },

  formatVPNData: function(responseData){
    const vpnReports = responseData.vpnReports
    const vpnStatus = this.data.vpnStatus
    const vpnDic = this.data.vpnDic

    for (let i = 0; i < vpnReports.length; i++){
      if(vpnDic[vpnReports[i].vpnType]){
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
  }
})