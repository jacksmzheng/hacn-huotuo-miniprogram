// pages/newslist/newslist.js
const app = getApp();
const util = require('../common/js/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
//    id 是新闻的id
//    title 是文章标题
//    priority 1 - 重要 0-一般
//    date 发布日期
//    source 发布源
//    a Y - 已读，其他-未读
  onLoad: function(options) {
    let that = this;
    let host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    wx.request({
      url: host + '/api/news-info/lists',
      method: 'POST',
      data: {
        "openId": app.globalData.openId,
      },
      header: {
        'content-type': 'application/json',
        'X-IS-DUMMY': false
      },
      success(res) {
        console.log(res)
        if (res.statusCode == 200) {
          // res.data.newsInfoList.map( item => {
          //   item.date = item.date.substring(0,16);
          // })
          that.setData({
            newsList : res.data.newsInfoList
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

  getDatail: function(e) {
    let newId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/newdetail/newdetail?id=' + newId,
    })
    console.log(e)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})