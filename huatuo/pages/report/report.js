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
    doneStyle: '',
    tripList: [],
    enquiryList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({ title: '数据处理中...' });
    var userInfo = getApp().globalData.userInfo || {}
    var host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    var that = this
    // enquiry history
    if (!userInfo.openId) {
      $Message({
        content: '获取openId失败!',
        type: 'error'
      });
      wx.hideLoading();
    } else {
      wx.request({
        url: host + '/api/hacn/health/enquiry',
        method: 'POST',
        data: { "openId": userInfo.openId || "ccccccccccccccc" },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          console.log(res.data);
          if (res.statusCode == 200) {
            that.setData({
              enquiryList: res.data.healthReportRecordList
            })
          } else {
            this.handleError(res.data.message);
          }
        },
        complete(res) {
          wx.hideLoading();
        }
      })
    }
    // trip history
    if (!userInfo.staffId) {
      $Message({
        content: '获取员工编号失败!',
        type: 'error'
      });
      wx.hideLoading();
    } else {
      wx.request({
        url: host + '/api/hacn/trip/history',
        method: 'POST',
        data: { "staffId": userInfo.staffId || "43862696" },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          console.log(res.data);
          if (res.statusCode == 200) {
            that.setData({
              tripList: res.data.returnObject
            })
          } else {
            this.handleError(res.data.message);
          }
        },
        complete(res) {
          wx.hideLoading();
        }
      })
    }
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
    var navigateTitle = '员工上报';
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