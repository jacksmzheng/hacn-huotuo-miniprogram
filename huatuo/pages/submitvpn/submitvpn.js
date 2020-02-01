// pages/submitvpn/submitvpn.js
const { $Message } = require('../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stafID: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: true,
      isCRSRelated: false,
      maxlength: 8,
      label: '1. 员工号 Staf ID',
      bindInputName: 'inputEvent',
      content: ''
    },

    area: {
      region: '请选择 Please Select',
    },

    internetISP: {
      items: [{
        id: 1,
        name: '中国电信 China Telecom',
      }, {
        id: 2,
        name: '中国移动 China Mobile',
      }, {
        id: 3,
        name: '中国联通 China Unicom',
      }, {
        id: 4,
        name: "不知道 Don't Know",
      },{
        id: 5,
        name: '其它 Others',
      }],
      title: '3. 您所使用的宽带服务 Your internet ISP',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },

    internetLink: {
      items: [{
        id: 1,
        name: '共享 Shared',
      }, {
        id: 2,
        name: '独享 Dedicated',
      }, {
        id: 3,
        name: "不知道 Don't Know",
      }],
      title: '4. 您所使用的上网线路 Your internet link',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },

    bandWidth: {
      items: [{
        id: 1,
        name: '50Mbps以下 below 50Mbps',
      }, {
        id: 2,
        name: '50Mbps-100Mbps',
      }, {
        id: 3,
        name: "100Mbps以上 above 100Mbps",
      }, {
        id: 4,
        name: "不知道 Don't Know",
      }
      ],
      title: '5. 您所使用的带宽 Your bandwidth',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },

    vpn: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: true,
      isCRSRelated: false,
      label: '6. 您在使用中国大陆 V.P.N 还是 香港V.P.N You are using CN V.P.N or HK V.P.N?',
      array: ['请选择 Please Select', '中国大陆V.P.N CN V.P.N', '香港V.P.N HK V.P.N'],
      index: 0,
      bindName: 'vpnPickerChange',
      content: ''
    },

    adslModem: {
      items: [{
        id: 1,
        name: '已经重启 YES',
      }, {
        id: 2,
        name: '没有重启 NO',
      }
      ],
      title: '7. 您重启ADSL基带猫了吗？ Have you try to reboot your ADSL modem?',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },

    symptom: {
      items: [{
        id: 1,
        name: '无法登陆V.P.N Can not login',
      }, {
        id: 2,
        name: 'V.P.N连接经常会断开 Always disconnect',
      }, {
        id: 3,
        name: '其他，请填写第9题 Others, please fill in Question #9',
      }
      ],
      title: '8. What is the symptom? 有什么症状？',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },

    performs: {
      items: [{
        id: 1,
        name: 'Outlook 电邮',
      }, {
        id: 2,
        name: 'Jabber 打电话'
      }, {
        id: 3,
        name: 'Sametime 即时通讯'
      }, {
        id: 4,
        name: 'Video Conference 视频会议',
      }, {
        id: 5,
        name: 'Sharepoint；Shared Folder 公盘',
      }, {
        id: 6,
        name: 'Other applications perform very slow 其他应用程序反应很慢',
      }, {
        id: 7,
        name: "Some application can't access 某些应用程序不能访问",
      }],
      title: '9. 使用V.P.N.时，有些应用程序反应很慢 Using V.P.N. some application performs very slow:',
      current: [],
      position: 'left',
      checked: false,
      disabled: false,
    },

    // wfh: {
    //   hasLabel: true,
    //   hasWarning: false,
    //   isMandatory: true,
    //   isCRSRelated: false,
    //   label: '10. 是否有带电脑回家办公：',
    //   array: ['请选择 Please Select', '是 YES', '否 NO'],
    //   index: 0,
    //   bindName: 'wfhPickerChange',
    //   content: ''
    // },

    // token: {
    //   hasLabel: true,
    //   hasWarning: false,
    //   isMandatory: true,
    //   isCRSRelated: false,
    //   label: '11. 是否拥有token：',
    //   array: ['请选择 Please Select', '是 YES', '否 NO'],
    //   index: 0,
    //   bindName: 'tokenPickerChange',
    //   content: ''
    // },

    // vpnType: {
    //   hasLabel: true,
    //   hasWarning: false,
    //   isMandatory: true,
    //   isCRSRelated: false,
    //   label: '12. 所用VPN类型',
    //   array: ['请选择 Please Select', 'CN', 'HK'],
    //   index: 0,
    //   bindName: 'vpnTypePickerChange',
    //   content: ''
    // },
    // support: {
    //   hasLabel: true,
    //   hasWarning: false,
    //   isMandatory: true,
    //   isCRSRelated: false,
    //   maxlength: 50,
    //   label: '13. 是否需要公司提供Token协助：',
    //   bindInputName: 'supportInputEvent',
    //   content: ''
    // },

    // remoteWork: {
    //   items: [{
    //     id: 1,
    //     name: '可以远程工作 Yes, can work from home',
    //   }, {
    //     id: 2,
    //     name: '无法远程工作(请提供具体原因）No, cannot work from home (please describe your current status)'
    //   }],
    //   title: '4. 你或者被你报告的同事，现在的情况是 What is the current circumstance of the reported colleague? *',
    //   current: '-',
    //   position: 'left',
    //   checked: false,
    //   disabled: false,
    // },

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
    var navigateTitle = 'VPN情况调查 V.P.N Survey'
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

  vpnPickerChange: function (e) {
    console.log('picker change : ', e)

    this.setData({
      ['vpn.index']: e.detail.value,
      ['vpn.content']: this.data.vpn.array[e.detail.value]
    })
  },

  inputEvent: function (e_) {
    const e = e_.detail.e ? e_.detail.e : e_
    console.log('input event : ', e)

    this.setData({
      ['stafID.content']: e.detail.value
    })
  },

  regionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ['area.region']: e.detail.value
    })
  },
  
  handleinternetISPChange({ detail = {} }) {
    console.log(detail.value)
    this.setData({
      ['internetISP.current']: detail.value
    });
  },
  
  handleinternetLinkChange({ detail = {} }) {
    console.log(detail.value)
    this.setData({
      ['internetLink.current']: detail.value
    });
  },

  handlebandWidthChange({ detail = {} }) {
    console.log(detail.value)
    this.setData({
      ['bandWidth.current']: detail.value
    });
  },

  handleadslModemChange({ detail = {} }) {
    console.log(detail.value)
    this.setData({
      ['adslModem.current']: detail.value
    });
  },

  handlesymptomChange({ detail = {} }) {
    console.log(detail.value)
    this.setData({
      ['symptom.current']: detail.value
    });
  },

  handlePerformsChange({ detail = {} }) {
    const index = this.data.performs.current.indexOf(detail.value);
    index === -1 ? this.data.performs.current.push(detail.value) : this.data.performs.current.splice(index, 1);
    this.setData({
      ['performs.current']: this.data.performs.current
    });
  },

  
  wfhPickerChange: function(e) {
    console.log('picker change : ', e)

    this.setData({
      ['wfh.index']: e.detail.value,
      ['wfh.content']: this.data.wfh.array[e.detail.value]
    })
  },

  tokenPickerChange: function(e) {
    console.log('picker change : ', e)

    this.setData({
      ['token.index']: e.detail.value,
      ['token.content']: this.data.token.array[e.detail.value]
    })
  },

  vpnTypePickerChange: function(e) {
    console.log('picker change : ', e)

    this.setData({
      ['vpnType.index']: e.detail.value,
      ['vpnType.content']: this.data.vpnType.array[e.detail.value]
    })
  },

  supportInputEvent: function(e_) {
    const e = e_.detail.e ? e_.detail.e : e_
    console.log('input event : ', e)

    this.setData({
      ['support.content']: e.detail.value
    })
  },

  handleRemoteWorkChange({ detail = {} }) {
    console.log(detail.value)
    this.setData({
      ['remoteWork.current']: detail.value
    });
  },

  submitVPNForm: function() {
    //this.handleError();
    wx.navigateTo({
      url: '/pages/successful/successful',
    })
  },
  //show error message
  handleError() {
    $Message({
      content: '请完善信息!',
      type: 'error'
    });
  }
})