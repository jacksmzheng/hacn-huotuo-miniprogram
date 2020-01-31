/*
 * COPYRIGHT. HSBC HOLDINGS PLC 2019. ALL RIGHTS RESERVED.
 *
 * This software is only to be used for the purpose for which it has been
 * provided. No part fo it is to be reproduced, disassembled, transmitted,
 * stored in retrieval system nor translated in any human or computer
 * language in any way or for any other purposes whatever without the prior
 * written consent of HSBC Holdings plc.
 */
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    this.initData();
  },

  initData: function () {
    var navigateTitle = '提交成功'
    var successful = '信息提交成功'
    var alert = "我们已经收到你的反馈信息"
    var remarks = '注：'
    var notice = '请勿重复提交。'
    var exit = '返回'
    

    this.setData({
      navigateTitle, successful, alert, notice, remarks, exit, successful
    })

    wx.setNavigationBarTitle({
      title: navigateTitle,
    })
  },

  generateRanNum: function () {
    var random = ''
    for (let i = 0; i < 6; i++) {
      random += Math.floor(Math.random() * 10)
    }
    return random
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
    // clearTimeout(timer)
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {
    // clearTimeout(timer)
    // app.setTimestamp('')
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  onShareAppMessage() {
    return app.data.shareData
  },

  exit: function () {
    // clearTimeout(timer)
    // app.setTimestamp('')
    wx.reLaunch({
      url: '/pages/home/home',
    })
  },


})