// pages/officestatus/officestatus.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   * 
   */
  data: {
    healthStatus:
      [
        {
          area:'广州办公室情况',
          areaen: 'Guangzhou Office Status',
          building:[
            {
              name:'TKH OT1',
              definiteCount:0,
              suspectedCount:3,
              feverCount:2,
            },
            {
              name: 'TKH OT2',
              definiteCount: 2,
              suspectedCount: 21,
              feverCount: 70,
            },
            {
              name: 'Jiangwan Office (Wework)',
              definiteCount: 13,
              suspectedCount: 34,
              feverCount: 135,
            },
            {
              name: 'Pazhou ODC',
              definiteCount: 24,
              suspectedCount: 5,
              feverCount: 7,
            },
            {
              name: 'Tancun ODC',
              definiteCount: 7,
              suspectedCount: 0,
              feverCount: 3,
            },
            {
              name: 'Renfeng ODC',
              definiteCount: 3,
              suspectedCount: 5,
              feverCount: 0,
            }
          ]
        },
        {
          area:'西安办公室情况',
          areaen: 'XiAn Office Status',
          building: [
            {
              name: 'XiAn Center',
              definiteCount: 6,
              suspectedCount: 0,
              feverCount: 5,
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  submitHealth: function(e) {
    console.log(e)
    app.goNext(e.currentTarget.dataset.url)
  },

  submitVPN: function(e) {
    console.log(e)
    app.goNext(e.currentTarget.dataset.url)
  }
})