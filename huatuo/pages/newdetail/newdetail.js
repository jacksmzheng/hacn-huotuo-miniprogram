// pages/newdetail/newdetail.js
const app = getApp();
const util = require('../common/js/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newdetail:{
      title: "",
      author: "",
      time: "",
      id: 4,
      paragraph: [],
      priority:'',
      enable:''
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    wx.request({
      url: host + '/api/news/detail',
      method: 'POST',
      data: {
        "openId": app.globalData.userInfo.openId,
        "staffId": app.globalData.userInfo.staffId,
        "newsId": options.id,
        "appId": app.globalData.appId
      },
      header: {
        'content-type': 'application/json',
        'X-IS-DUMMY': false
      },
      success(res) {
        console.log(res)
        if (res.statusCode == 200) {
          let paragraphs= res.data.content.split('<br />');
          that.setData({
            newdetail: {
              title: res.data.title,
              author: res.data.source,
              time: res.data.date,
              id: res.data.id,
              paragraph: paragraphs,
              priority: res.data.priority,
              enable: res.data.enable
            }
          })
        } else {
          util.showErrorMessage(res.statusCode, res)
          console.log('fail : ', res)
        }
      },
      fail(res) {
        util.showErrorMessage();
        console.log(' fail : ', res)
      },
    });
  },
  getDateValue(t){
    return t = t>9? t : '0'+t;
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

  }
})