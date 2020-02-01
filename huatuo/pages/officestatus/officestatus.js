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
          area:'广州 (Guang Zhou)',
          building:[
            {
              name:'TKH OT1',
              definiteCount:0,
              suspectedCount:0,
              feverCount:0,
              desc:'0确诊 0疑似 0发烧',
              status:0,
            },
            {
              name: 'TKH OT2',
              definiteCount: 0,
              suspectedCount: 10,
              feverCount: 0,
              desc: '0确诊 10疑似 0发烧',
              status:1
            },
            {
              name: 'Jiangwan Office',
              definiteCount: 10,
              suspectedCount: 0,
              feverCount: 0,
              desc: '10确诊 0疑似 0发烧',
              status:2
            },
            {
              name: 'Pazhou ODC',
              definiteCount: 10,
              suspectedCount: 0,
              feverCount: 0,
              desc: '0确诊 0疑似 0发烧',
              status:0
            },
            {
              name: 'Tancun ODC',
              definiteCount: 10,
              suspectedCount: 0,
              feverCount: 0,
              desc: '0确诊 10疑似 0发烧',
              status:1
            },
            {
              name: 'Renfeng ODC',
              definiteCount: 10,
              suspectedCount: 0,
              feverCount: 0,
              desc: '10确诊 0疑似 0发烧',
              status:2
            }
          ]
        },
        {
          area:'西安 (Xi An)',
          building: [
            {
              name: 'XiAn Center',
              definiteCount: 0,
              suspectedCount: 0,
              feverCount: 0,
              desc: '0确诊 0疑似 0发烧',
              status: 0,
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
              desc: '0报告',
              status: 0,
            },
            {
              name: 'VPN-CN',
              desc: '100报告',
              status: 1
            }
          ]
        }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    app.goNext(e.target.dataset.url)
  },

  submitVPN: function(e) {
    console.log(e)
    app.goNext(e.target.dataset.url)
  }
})