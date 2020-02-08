// pages/submithelpdonation/submithelpdonation.js

const app = getApp()
const {
  $Message
} = require('../dist/base/index');

Page({

  /**************************************************************************************
   * 页面的初始数据
   */
  data: {
    staffID: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: true,
      isCRSRelated: false,
      maxlength: 8,
      type: 'number',
      label: '1. 您的员工编号',
      bindInputName: 'inputEvent',
      num: '1',
      content: ''
    },
    yourPhone: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: true,
      isCRSRelated: false,
      maxlength: 11,
      type: 'number',
      label: '2. 您的联系电话',
      bindInputName: 'inputEvent',
      num: '2',
      content: ''
    },
    materialHelp: {
      items: [{
        id: 1,
        name: '医用口罩（1人至多3个/1天）',
      }, {
        id: 2,
        name: 'N95口罩（1人至多1个/2天）'
      }, {
        id: 3,
        name: '办公场地消毒需求'
      }],
      title: '3. 所需要的物质帮助/防护协助',
      current: [],
      position: 'left',
      checked: false,
      disabled: false,
    },
    maskNum: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      label: '4. 所需口罩数量',
      array: [
        '请选择',
        '1',
        '2',
        '3'
      ],
      index: 0,
      bindName: 'maskNumPickerChange',
      content: '请选择'
    },
    helpAddr: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      maxlength: 140,
      type: 'text',
      label: '5. 您的办公地址（以便向您提供所需物资或实现办公场地消毒需求）',
      bindInputName: 'inputEvent',
      num: '3',
      content: ''
    },
    addHelp: '',
    helpNumber: '4008308008',
    helpCenterAddr: '上海市浦东南路528号'
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
        field = 'yourPhone.content'
        break
      case '3':
        field = 'helpAddr.content'
        break
    }
    this.setData({
      [field]: e.detail.value
    })
  },

  handleMaterialHelpChange({
    detail = {}
  }) {
    let value = detail.value
    let materialHelp = this.data.materialHelp
    let index = materialHelp.current.indexOf(value);
    let id = this.getFieldValue(value, materialHelp.items);
    index === -1 ? materialHelp.current.push(value) : materialHelp.current.splice(index, 1);
    if (id == 1) {
      materialHelp.current = materialHelp.current.filter((e, i, a) => {
        return this.getFieldValue(e, materialHelp.items) != 2
      })
    } else if (id == 2) {
      materialHelp.current = materialHelp.current.filter((e, i, a) => {
        return this.getFieldValue(e, materialHelp.items) != 1
      })
    }
    this.setData({
      ['materialHelp.current']: materialHelp.current
    });
  },

  maskNumPickerChange(e) {
    console.log('mask num picker change : ', e)
    this.setData({
      ['maskNum.index']: e.detail.value,
      ['maskNum.content']: this.data.maskNum.array[e.detail.value]
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

  callHelpNumber() {
    wx.makePhoneCall({
      phoneNumber: this.data.helpNumber
    })
  },

  /**************************************************************************************
   * 其他功能
   */
  initData() {
    wx.setNavigationBarTitle({
      title: '需求收集'
    })
    if (app.globalData.userInfo) {
      this.setData({
        ['staffID.content']: app.globalData.userInfo.staffId
      })
    }
  },

  handleError(message) {
    $Message({
      content: message || '请完善信息!',
      type: 'error'
    });
  },

  submitHelp(e) {
    let staffId = this.data.staffID.content
    let mobileNumber = this.data.yourPhone.content
    let materialHelp = this.data.materialHelp.content
    let maskNum = this.data.maskNum.content
    let addHelp = this.data.addHelp
    let helpAddr = this.data.helpAddr.content

    let data = {
      staffId,
      mobileNumber,
      materialHelp,
      maskNum,
      addHelp,
      helpAddr
    }

    if (staffID == '') {
      this.handleError('请填写staffID')
      return
    }

    let selectedMask = this.data.materialHelp.current.some((e, i, a) => {
      return e == '医用口罩（1人至多3个/1天）' || e == 'N95口罩（1人至多1个/2天）'
    })
    if (selectedMask && maskNum == '请选择') {
      this.handleError('请选择口罩数量')
      return
    }

    if (!selectedMask) data.materialHelp = ''
    if (!selectedMask || maskNum == '请选择') data.maskNum = ''

    console.log(data)

    // wx.request({
    //   url: host + '/api/hacn/needs-collection',
    //   method: 'POST',
    //   data: data,
    //   success: res => {

    //     wx.navigateTo({
    //       url: '/pages/successful/successful',
    //     })
    //   },
    //   fail: res => {},
    //   complete: res => {}
    // });
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