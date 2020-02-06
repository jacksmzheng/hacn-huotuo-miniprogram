// pages/login/login.js

const app = getApp()
const host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl
const {
  $Message
} = require('../dist/base/index')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnText: '获取验证码',
    btnLock: false,
    timer: 60,
    staffId: '',
    mobileNum: '',
    verifyCode: ''
  },

  /**************************************************************************************
   * 页面事件
   */
  tapGetCaptcha() {
    if (this.data.mobileNum == '') {
      this.handleError('请填写手机号码')
      return
    }
    if (!/^\d{11}$/.test(this.data.mobileNum)){
      this.handleError('请填写11位手机号码')
      return
    }
    this.getCaptcha({
      "mobileNum": this.data.mobileNum
    }).then(resolve => {
      this.lockCaptcha()
    })
  },

  inputStaffId(e) {
    this.data.staffId = e.detail.value
  },

  inputPhone(e) {
    this.data.mobileNum = e.detail.value
  },

  inputCaptcha(e) {
    this.data.verifyCode = e.detail.value
  },

  tapLogin() {
    let data = {
      appId: app.globalData.appId,
      openId: app.globalData.session.openid,
      staffId: this.data.staffId,
      mobileNum: this.data.mobileNum,
      verifyCode: this.data.verifyCode
    }

    if (data.staffId == '' || data.mobileNum == '' || data.verifyCode == '') {
      this.handleError('请完善信息')
      return
    }

    this.doLogin(data).then(resolve => {
      if (resolve.data.code == 200) {
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.wechatLogin()
        wx.navigateBack({})
      } else {
        this.handleError('注册失败，请退出小程序重试')
      }
    }, reject => {
      this.handleError('网络连接失败')
    })
  },

  /**************************************************************************************
   * 生命周期函数
   */
  onLoad: function(options) {
    this.initData()
  },

  onShow: function() {

  },

  onHide: function() {

  },

  onUnload: function() {

  },

  /**************************************************************************************
   * 其他功能
   */
  initData() {
    wx.setNavigationBarTitle({
      title: '登陆'
    })
  },

  lockCaptcha() {
    if (this.data.btnLock) return
    else {
      this.setData({
        btnLock: true,
        btnText: '60秒后重试'
      })
      let i = setInterval(() => {
        this.setData({
          btnText: --this.data.timer + '秒后重试'
        })
        if (this.data.timer == 0) {
          clearInterval(i)
          this.setData({
            btnText: '获取验证码',
            btnLock: false,
            timer: 60
          })
        }
      }, 1000)
    }
  },

  handleError(message) {
    $Message({
      content: message || '请完善信息!',
      type: 'error'
    });
  },

  /**************************************************************************************
   * 接口访问
   */
  getCaptcha(data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: host + '/api/sendSMSVerifyCode',
        method: 'POST',
        data: data,
        success: res => resolve(res),
        fail: res => reject(res),
        complete: res => {}
      });
    })
  },

  doLogin(data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: host + '/api/register',
        method: 'POST',
        data: data,
        success: res => resolve(res),
        fail: res => reject(res),
        complete: res => {}
      });
    })
  }
})