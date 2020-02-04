// pages/submithelpdonation/submithelpdonation.js

const {
  $Message
} = require('../dist/base/index');

Page({

  /**************************************************************************************
   * 页面的初始数据
   */
  data: {
    helpOrDonation: {
      items: [{
        id: 1,
        name: '求助 Help',
      }, {
        id: 2,
        name: '捐赠 Donate'
      }],
      title: 'Ask for help or donate （求助或者捐赠）',
      current: '求助 Help',
      position: 'left',
      checked: false,
      disabled: false,
    },
    staffID: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: true,
      isCRSRelated: false,
      maxlength: 8,
      type: 'number',
      label: '1. Your Staff ID （你的员工编号）',
      bindInputName: 'inputEvent',
      num: '1',
      content: ''
    },
    // Help data 求助页面数据
    maskHelp: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      label: '2. Mask Help （所需要的物质帮助）',
      array: [
        '请选择 Please Select',
        'Medical Mask 医用口罩',
        'N95 Mask N95口罩'
      ],
      index: 0,
      bindName: 'maskHelpPickerChange',
      content: '请选择 Please Select'
    },
    maskNum: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      label: '3. Number of Mask （所需口罩数量）',
      array: [
        '请选择 Please Select',
        '1',
        '2',
        '3'
      ],
      index: 0,
      bindName: 'maskNumPickerChange',
      content: '请选择 Please Select'
    },
    addHelp: '',
    helpNumber: '2297-5689',
    helpAddr: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      maxlength: 140,
      type: 'number',
      label: '6. Help address （求助地址）',
      bindInputName: 'inputEvent',
      num: '2',
      content: ''
    },
    // Donation data 捐赠页面数据
    maskDonation: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      label: '2. Mask Donation （所捐赠的物质帮助）',
      array: [
        '请选择 Please Select',
        'Medical Mask 医用口罩',
        'N95 Mask N95口罩'
      ],
      index: 0,
      bindName: 'maskDonationPickerChange',
      content: '请选择 Please Select'
    },
    maskDonationNum: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      label: '3. Number of Mask （所捐赠口罩数量）',
      array: [
        '请选择 Please Select',
        '1',
        '2',
        '3'
      ],
      index: 0,
      bindName: 'maskDonationNumPickerChange',
      content: '请选择 Please Select'
    },
    addDonation: '',
    donationNumber: '2297-5689',
    donationAddr: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      maxlength: 140,
      type: 'number',
      label: '6. Donation address （捐赠地址）',
      bindInputName: 'inputEvent',
      num: '3',
      content: ''
    }
  },

  /**************************************************************************************
   * 页面事件
   */
  helpOrDonationChange({
    detail = {}
  }) {
    this.setData({
      ['helpOrDonation.current']: detail.value
    })
    let value = this.getFieldValue(detail.value, this.data.helpOrDonation.items)
    this.setData({
      flag: value == 2
    })
  },

  inputEvent(e_) {
    const e = e_.detail.e ? e_.detail.e : e_
    console.log('input event : ', e)
    var num = e.currentTarget.dataset.num
    var field
    switch (num) {
      case '1':
        field = 'staffID.content'
        break
      case '2':
        field = 'helpAddr.content'
        break
      case '3':
        field = 'donationAddr.content'
        break
    }
    this.setData({
      [field]: e.detail.value
    })
  },

  maskHelpPickerChange(e) {
    console.log('mask help picker change : ', e)
    this.setData({
      ['maskHelp.index']: e.detail.value,
      ['maskHelp.content']: this.data.maskHelp.array[e.detail.value]
    })
  },

  maskDonationPickerChange(e) {
    console.log('mask donation picker change : ', e)
    this.setData({
      ['maskDonation.index']: e.detail.value,
      ['maskDonation.content']: this.data.maskDonation.array[e.detail.value]
    })
  },

  maskNumPickerChange(e) {
    console.log('mask num picker change : ', e)
    this.setData({
      ['maskNum.index']: e.detail.value,
      ['maskNum.content']: this.data.maskNum.array[e.detail.value]
    })
  },

  maskDonationNumPickerChange(e) {
    console.log('mask donation num picker change : ', e)
    this.setData({
      ['maskDonationNum.index']: e.detail.value,
      ['maskDonationNum.content']: this.data.maskDonationNum.array[e.detail.value]
    })
  },

  getFieldValue(value, data) {
    for (let i = 0; i < data.length; i++) {
      if (value == data[i].name) {
        return data[i].id
      }
    }
    return null
  },

  addHelpInput(e) {
    this.data.addHelp = e.detail.value
  },

  addDonationInput(e) {
    this.data.addDonation = e.detail.value
  },

  callHelpNumber() {
    wx.makePhoneCall({
      phoneNumber: this.data.helpNumber
    })
  },

  callDonationNumber() {
    wx.makePhoneCall({
      phoneNumber: this.data.donationNumber
    })
  },

  /**************************************************************************************
   * 其他功能
   */
  initData() {
    wx.setNavigationBarTitle({
      title: '求助和捐赠 Help & Donation'
    })
  },

  handleError(message) {
    $Message({
      content: message || '请完善信息!',
      type: 'error'
    });
  },

  submitHelp(e) {
    let staffID = this.data.staffID.content
    let maskHelp = this.data.maskHelp.content
    let maskNum = this.data.maskNum.content
    let addHelp = this.data.addHelp
    let helpAddr = this.data.helpAddr.content

    let data = {
      staffID,
      maskHelp,
      maskNum,
      addHelp,
      helpAddr
    }

    if (staffID == '') {
      this.handleError('请填写staffID')
      return
    }
    if (maskHelp != '请选择 Please Select' && maskNum == '请选择 Please Select') {
      this.handleError('请选择口罩数量')
      return
    }
    if (maskHelp == '请选择 Please Select') data.maskHelp = ''
    if (maskNum == '请选择 Please Select') data.maskNum = ''

    console.log(data)

  },

  submitDonation(e) {
    let staffID = this.data.staffID.content
    let maskDonation = this.data.maskDonation.content
    let maskDonationNum = this.data.maskDonationNum.content
    let addDonation = this.data.addDonation
    let donationAddr = this.data.donationAddr.content

    let data = {
      staffID,
      maskDonation,
      maskDonationNum,
      addDonation,
      donationAddr
    }

    if (staffID == '') {
      this.handleError('请填写staffID')
      return
    }
    if (maskDonation != '请选择 Please Select' && maskDonationNum == '请选择 Please Select') {
      this.handleError('请选择口罩数量')
      return
    }
    if (maskDonation == '请选择 Please Select') data.maskDonation = ''
    if (maskDonationNum == '请选择 Please Select') data.maskDonationNum = ''

    console.log(data)
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

  }
})