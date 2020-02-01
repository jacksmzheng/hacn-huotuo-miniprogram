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
              suspectedCount:0,
              feverCount:0,
              desc:'0确认/Confirm 0疑似/Suspect 0发烧/Fever',
              status:0,
            },
            {
              name: 'TKH OT2',
              definiteCount: 0,
              suspectedCount: 10,
              feverCount: 0,
              desc: '0确认/Confirm 10疑似/Suspect 0发烧/Fever',
              status:1
            },
            {
              name: 'Jiangwan Office',
              definiteCount: 10,
              suspectedCount: 0,
              feverCount: 0,
              desc: '10确认/Confirm 0疑似/Suspect 0发烧/Fever',
              status:2
            },
            {
              name: 'Pazhou ODC',
              definiteCount: 10,
              suspectedCount: 0,
              feverCount: 0,
              desc: '0确认/Confirm 0疑似/Suspect 0发烧/Fever',
              status:0
            },
            {
              name: 'Tancun ODC',
              definiteCount: 10,
              suspectedCount: 0,
              feverCount: 0,
              desc: '0确认/Confirm 10疑似/Suspect 0发烧/Fever',
              status:1
            },
            {
              name: 'Renfeng ODC',
              definiteCount: 10,
              suspectedCount: 0,
              feverCount: 0,
              desc: '10确认/Confirm 0疑似/Suspect 0发烧/Fever',
              status:2
            }
          ]
        },
        {
          area:'西安办公室情况',
          areaen: 'XiAn Office Status',
          building: [
            {
              name: 'XiAn Center',
              definiteCount: 0,
              suspectedCount: 0,
              feverCount: 0,
              desc: '0确认/Confirm 0疑似/Suspect 0发烧/Fever',
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
              desc: '0 报告 Count of VPN Problem',
              status: 0,
            },
            {
              name: 'VPN-CN',
              desc: '100 报告 Count of VPN Problem',
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
    // wx.request({
    //   url: 'https://huatuo.app77.cn/api/health',
    //   method: 'GET',
    //   data: {},
    //   header: {
    //     'content-type': 'application/json',
    //   },
    //   success(res) {
    //     console.log('success : ', res)
    //   },
    //   fail(res) {
    //     console.log('fail : ', res)
    //   },
    //   complete(res) {
    //     console.log('complete : ', res)
    //   }
    // })
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