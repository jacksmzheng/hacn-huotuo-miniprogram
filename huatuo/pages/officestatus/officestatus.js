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
              buildingName:'TKH OT1',
              confirmed:0,
              suspect:3,
              fever:2,
            },
            {
              buildingName: 'TKH OT2',
              confirmed: 2,
              suspect: 21,
              fever: 70,
            },
            {
              buildingName: 'Jiangwan Office (Wework)',
              confirmed: 13,
              suspect: 34,
              fever: 135,
            },
            {
              buildingName: 'Pazhou ODC',
              confirmed: 24,
              suspect: 5,
              fever: 7,
            },
            {
              buildingName: 'Tancun ODC',
              confirmed: 7,
              suspect: 0,
              fever: 3,
            },
            {
              buildingName: 'Renfeng ODC',
              confirmed: 3,
              suspect: 5,
              fever: 0,
            }
          ]
        },
        {
          area:'西安办公室情况',
          areaen: 'XiAn Office Status',
          buildingReports: [
            {
              buildingName: 'XiAn Center',
              confirmed: 6,
              suspect: 0,
              fever: 5,
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
              count: 32
            },
            {
              name: 'VPN-CN',
              count: 15
            }
          ]
        }
      ]
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
    // this.refreshData()
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
    that.requestHealthStatus()
    that.requestVPNStatus()
    that.setData({
      refreshEvent: setInterval(function () {
        that.requestHealthStatus()
        that.requestVPNStatus()
      }, 5 * 60 * 1000),
    })
  },

  requestHealthStatus: function () {
    const that = this
    wx.request({
      url: 'https://huatuo.app77.cn/api/health',
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
    });
  },

  requestVPNStatus: function () {
    console.log('requestVPNStatus')
    const that = this
    wx.request({
      url: 'https://huatuo.app77.cn/api/vpnstate',
      method: 'POST',
      data: {},
      header: {
        'content-type': 'application/json',
        'X-IS-DUMMY': false
      },
      success(res) {
        console.log('vpn status success res :',res)
      },
      fail(res) {
        console.log('vpn status fail res : : ', res)
      },
    })
  },

  formatHealthData: function(responseData){
    for (let i = 0; i < responseData.length; i++){
      console.log('responseData ' + i, responseData[i])
      if( responseData[i].area == 'GZ'){
        responseData[i].area = '广州办公室情况'
        responseData[i].areaen = 'Guangzhou Office Status'
      }
      if (responseData[i].area == 'XA'){
        responseData[i].area = '西安办公室情况'
        responseData[i].areaen = 'XiAn Office Status'
      }
    }
    return responseData
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