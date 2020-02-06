// pages/survey/survey.js
const { $Message } = require('../dist/base/index');
const app = getApp();
var util = require('../common/js/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showNewSurvey: true,
    newStyle: 'survey-tab-button-selected',
    doneStyle: ''
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
    this.initData();
  },
  //初始化数据
  initData: function () {
    var navigateTitle = '员工上报 Report A Case';
    this.setData({
      navigateTitle
    })

    wx.setNavigationBarTitle({
      title: navigateTitle,
    })
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

  // inputEvent: function (e_) {
  //   const e = e_.detail.e ? e_.detail.e : e_
  //   console.log('input event : ', e)
  //   var num = e.currentTarget.dataset.num;
  //   var field;
  //   switch(num) {
  //     case '1': field = 'stafID.content'; break;
  //     case '2': field = 'mobile.content'; break;
  //   }
  //   this.setData({
  //     [field]: e.detail.value
  //   })
  // },
  changeTab:function(e) {
    console.log(e);
    var id = e.target.id;
    this.setData({
      newStyle: id == 'new' ? 'survey-tab-button-selected' : '',
      doneStyle: id == 'done' ? 'survey-tab-button-selected' : '',
      showNewSurvey: id == 'new' ? true : false
    })
  },

  getStaffidValue: function (e) {
    this.setData({
      ['staffID.content']: e.detail.value
    })
  },

  viewSurveyNewPage: function(e) {
    var id = e.target.id;
    wx.navigateTo({
      url: '/pages/submitsurvey/submitsurvey?id=' + id,
    })
  },
  //
  toubmit: function (e) {
    var id = e.currentTarget.id;
    console.log(this.data.showNewSurvey)
    wx.navigateTo({
      url:
        (this.data.showNewSurvey ? '/pages/submitepidemic/submitepidemic?id=' : '/pages/travelReport/travelReport?id=') + id,
    })
  }
})