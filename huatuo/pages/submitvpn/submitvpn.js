// pages/submitvpn/submitvpn.js
const { $Message } = require('../dist/base/index');
const app = getApp();
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
      label: '1. 你的员工编号 Your Staf ID',
      bindInputName: 'inputEvent',
      placeholder: '请输入 Please Enter',
      content: ''
    },

    city: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: true,
      isCRSRelated: false,
      label: '2. 你所在的城市 Your location',
      array: [
        '请选择 Please Select',
        '广州 Guangzhou',
        '西安 Xi\'an'
      ],
      index: 0,
      bindName: 'pickerCityChange',
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
      title: '3. 你所使用的宽带服务 Your internet ISP',
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
      title: '4. 你所使用的上网线路 Your internet link',
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
      title: '5. 你所使用的带宽 Your bandwidth',
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
      label: '6. 你所用的VPN类型 Your VPN type',
      array: ['请选择 Please Select', '中国大陆VPN CN VPN', '香港VPN HK VPN'],
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
        name: '没有重启 NO',//note:Suggest to try again after reboot 建议重启再试
      }
      ],
      title: '7. 你重启ADSL基带猫了吗？ Have you rebooted your ADSL modem ?',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },

    symptom: {
      items: [{
        id: 1,
        name: '无法登陆VPN Cannot login VPN',
      }, {
        id: 2,
        name: 'VPN连接经常会断开 Always disconnect',
      }, {
        id: 3,
        name: '其他，请填写第9题 Others, please fill in Question #9',
      }
      ],
      title: '8. 有什么症状？ What is the symptom ?',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },

    performs: {
      items: [{
        id: 1,
        name: '电邮 Outlook',
      }, {
        id: 2,
        name: '打电话 Jabber',
      }, {
        id: 3,
        name: '即时通讯 Sametime',
      }, {
        id: 4,
        name: '视频会议 Video Conference',
      }, {
        id: 5,
          name: '公盘 Sharepoint；Shared Folder',
      }, {
        id: 6,
          name: '其他应用程序反应很慢 Other applications perform very slow',
      }, {
        id: 7,
          name: "某些应用程序不能访问 Some application can't access",
      }],
      title: '9. 使用VPN时有些程序反应慢 Poor performance of some applications when using VPN',
      current: [],
      position: 'left',
      checked: false,
      disabled: false,
    },
    isHideOtherAppSlow: true,
    isHideSomeAppSlow: true,
    spinShow: true

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
    var navigateTitle = 'VPN问题 VPN Problem'
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
  //
  pickerCityChange: function (e) {
    console.log('picker change : ', e)

    this.setData({
      ['city.index']: e.detail.value,
      ['city.content']: this.data.city.array[e.detail.value]

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
    var id = this.getFieldValue(detail.value, this.data.performs.items);
    
    if(id == 6) {
      this.setData({
        isHideOtherAppSlow: index !== -1
      })
    }
    if(id == 7) {
      this.setData({
        isHideSomeAppSlow: index !== -1
      })
    }
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

  submitVPNForm: function(e) {
    var staffId = this.data.stafID.content;
    var city = this.data.city.index;
    var isp = this.data.internetISP.current;
    var linkType = this.data.internetLink.current;
    var bandWidth = this.data.bandWidth.current;
    var vpnType = this.data.vpn.index;
    var hadRebootADSL = this.data.adslModem.current;
    var symptom = this.data.symptom.current;
    var performs = this.data.performs.current;
    var performs_other_content = e.detail.value.performs_other_content;
    var performs_some_content = e.detail.value.performs_some_content;
    var symptom_id = this.getFieldValue(symptom, this.data.symptom.items);
    if (staffId == '' || city == 0 || city == '0' || isp == '-' || linkType == '-'
      || bandWidth == '-' || vpnType == 0 || vpnType == '0' || hadRebootADSL == '-'
      || symptom == '-') {
      this.handleError();
      return;
    }
    var performsArr = [];
    for(var i = 0; i < performs.length; i++) {
      var v = this.getFieldValue(performs[i], this.data.performs.items);
      performsArr.push(v);
    }
    if (symptom_id == '3') {
      if (performsArr.length == 0 || (performsArr.indexOf(6) > -1 && performs_other_content == '') || (performsArr.indexOf(7) > -1 && performs_some_content == '')) {
        this.handleError();
        return;
      }
    }
    if (!(/^\d+$/g).test(staffId)) {
      this.handleError('请输入合法的员工编号！');
      return;
    }
    var data = {
      //"openId": "xdfgdfg", // wechat open id
      "staffId": staffId, // staff id
      "location": city == '1' ? 'GZ' : 'XA',// or the code
      "isp": this.getFieldValue(isp, this.data.internetISP.items), // or the code
      "linkType": this.getFieldValue(linkType, this.data.internetLink.items),
      "bandWidth": this.getFieldValue(bandWidth, this.data.bandWidth.items), // 50-, 50-100, 100+, unknown
      "vpnType": vpnType, //hkVPN
      "hadRebootADSL": this.getFieldValue(hadRebootADSL, this.data.adslModem.items), // 1:yes, 2:no
      "symptom": this.getFieldValue(symptom, this.data.symptom.items), // cannotLogin, alwaysDisconnect, others
      "outlookSlow": performsArr.indexOf(1) > -1 ? 1 : 0, // 0:no, 1:yes
      "jabberSlow": performsArr.indexOf(2) > -1 ? 1 : 0, // 0:no, 1:yes
      "sametimeSlow": performsArr.indexOf(3) > -1 ? 1 : 0, // 0:no, 1:yes
      "videoConferenceSlow": performsArr.indexOf(4) > -1 ? 1 : 0, // 0:no, 1:yes
      "sharepointSharedFolderSlow": performsArr.indexOf(5) > -1 ? 1 : 0, // 0:no, 1:yes
      "hasOtherApplicationsSlow": performsArr.indexOf(6) > -1 ? 1 : 0, // 0:no, 1:yes
      "otherSlowApplications": performs_other_content, // wording
      "hasSomeApplicationsCannotAccess": performsArr.indexOf(7) > -1 ? 1 : 0, // 0:no, 1:yes
      "cannotAccessApplications": performs_some_content, // wording
      "reporterStaffId": staffId // staff id
    }
    this.request({vpnInfo: data});
  },

  //call api
  request(data) {
    this.setData({
      spinShow: true
    })
    var host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    wx.request({
      url: host + '/api/vpn',
      method: 'POST',
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data);
        var page = '/pages/successful/successful';
        if (res.statusCode !== 200) {
          page = '/pages/errors/errors';
        }
        wx.navigateTo({
          url: page
        })
      }
    })
  },
  //show error message
  handleError(message) {
    $Message({
      content: message || '请完善信息!',
      type: 'error'
    });
  },
  //
  getFieldValue(value, data) {
    for (var i = 0; i < data.length; i++) {
      if (value == data[i].name) {
        return data[i].id;
      }
    }
    return null;
  }
})