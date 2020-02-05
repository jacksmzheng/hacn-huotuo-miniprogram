// pages/submithealth/submithealth.js
const { $Message } = require('../dist/base/index');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booleanitems: [{
      id: 1,
      name: '是 Yes',
    }, {
      id: 2,
      name: '不是 No'
    }],
    staffId: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      placeholder: '请输入 Please Enter',
      maxlength: 8,
      type: 'number',
      label: '1. 你的员工编号 Your Staff ID:*',
      bindInputName: 'inputEvent',
      num: 'staffId',
      content: ''
    },
    staffName: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      placeholder: '请输入 Please Enter',
      maxlength: 8,
      type: 'text',
      label: '2. 你的中文名字:*',
      bindInputName: 'inputEvent',
      num: 'staffName',
      content: ''
    },
    mobileNo: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      maxlength: 11,
      placeholder: '请输入 Please Enter',
      type: 'number',
      label: '3. 你的联系电话 Your cell phone for emergency call:*',
      confirmLabel: '2. 你的联系电话 Your cell phone for emergency call:',
      bindInputName: 'inputEvent',
      warningLabel: 'Please Enter cell phone (请输入联系电话)',
      num: 'mobileNo',
      content: ''
    },
    location: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      label: '4.您的当前所在地* ',
      index: 0,
      bindName: 'pickerCityChange',
      content: ''
    },
    temperature: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      placeholder: '请输入 Please Enter',
      maxlength: 8,
      type: 'number',
      label: '5.您今天的体温（单位：摄氏度℃）',
      bindInputName: 'inputEvent',
      num: 'temperature',
      content: ''
    },
    aloneOrNot: {
      title: '6.您当前是否独居*',
      current: '-',
      position: 'left',
      flag: true,
      checked: false,
      disabled: false,
    },
    familyContact: {
      title: '7-1.您的家庭成员/合住成员是否被确诊新型肺炎或有接触病患史？*',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },
    familyCondiction: {
      title: '7-2.近期您的家庭成员/合住成员是否有发热、乏力、咳嗽、呼吸困难等症状？',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },
    transitCity: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      placeholder: '请输入 Please Enter',
      maxlength: 35,
      type: 'text',
      label: '8.自2020年1月18日起，您还去过哪个/哪些城市？*',
      bindInputName: 'inputEvent',
      num: 'transitCity',
      content: ''
    },
    transitMethod: {
      title: '9.自2020年1月18日起，您是否有乘坐飞机/火车等公共长途交通工具？',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
      flag: true
    },
    transitNo: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      placeholder: '请输入 Please Enter',
      maxlength: 35,
      type: 'text',
      label: '10.1.请提供您上述乘坐过的公共交通工具的详细班次信息',
      bindInputName: 'inputEvent',
      num: 'transitNo',
      content: ''
    },
    date:{
      label: '10.2.请提供您上述乘坐过的公共交通工具的详细日期',
      content: ''
    },
    wuhanOrNot: {
      title: '11.自2020年1月18日起，您是否途径/中转/停留武汉？',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
      flag: true
    },
    hubeiOrNot: {
      title: '12.自2020年1月18日起，您是否途径/中转/停留湖北省？',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
      flag: true
    },
    hubei: {
      items: [{
        id: 1,
        name: '黄冈',
      }, {
        id: 2,
        name: '孝感'
      }, {
        id: 3,
        name: '襄阳'
      }, {
        id: 4,
        name: '荆州',
      }, {
        id: 2,
        name: '随州'
      }, {
        id: 2,
        name: '宜昌'
      }, {
        id: 2,
        name: '荆门'
      }, {
        id: 2,
        name: '黄石'
      }, {
        id: 2,
        name: '鄂州'
      }, {
        id: 2,
        name: '咸宁'
      }, {
        id: 2,
        name: '十堰'
      }, {
        id: 2,
        name: '仙桃'
      }, {
        id: 2,
        name: '天门'
      }, {
        id: 2,
        name: '恩施'
      }, {
        id: 2,
        name: '潜江'
      }, {
        id: 2,
        name: '神农架地区'
      }],
      title: '12.1.自2020年1月18日起，您途径/中转/停留湖北的城市*',
      current: [],
      position: 'left',
      checked: false,
      disabled: false,
    },
    contactHistory: {
      items: [{
        id: 1,
        name: '接触过武汉的客人/亲友',
      }, {
        id: 2,
          name: '接触过 湖北的客人/亲友'
      }, {
        id: 3,
          name: '接触过有以下症状的病人（发热、咳嗽、乏力、呼吸困难）'
      }, {
        id: 4,
          name: '以上均无',
      }],
      title: '13.过去的两周内您是否有以下情况？*',
      current: [],
      position: 'left',
      checked: false,
      disabled: false,
    },
    bodyHistory: {
      items: [{
        id: 1,
        name: '咳嗽',
      }, {
        id: 2,
        name: '感冒'
      }, {
        id: 3,
        name: '发烧'
      }, {
        id: 4,
        name: '乏力',
      }, {
        id: 4,
        name: '呼吸困难',
      }, {
        id: 4,
        name: '腹泻',
      }, {
        id: 4,
        name: '其他',
      }, {
        id: 4,
        name: '以上均无',
      }],
      title: '14.过去两周您是否有出现任何身体不适的症状？*',
      current: [],
      position: 'left',
      checked: false,
      disabled: false,
    }
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
    var navigateTitle = '出行记录报备 Report A Case';
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
    var num = e.currentTarget.dataset.num;
    this.setData({
      [num + '.content']: e.detail.value
    })
  },
  //
  handleAloneOrNotChange({ detail = {} }) {
    this.setData({
      ['aloneOrNot.current']: detail.value
    });
    var value = this.getFieldValue(detail.value, this.data.booleanitems);
    console.log(detail.value, value, value == 2)
    this.setData({
      ['aloneOrNot.flag']: value == 2
    })
  },
  //
  handleFamilyContactChange({ detail = {} }) {
    this.setData({
      ['familyContact.current']: detail.value
    });
  },
  //
  handleFamilyCondictionChange({ detail = {} }) {
    this.setData({
      ['familyCondiction.current']: detail.value
    });
  },
  //
  handleTransitMethodChange({ detail = {} }) {
    this.setData({
      ['transitMethod.current']: detail.value
    });
    var value = this.getFieldValue(detail.value, this.data.booleanitems);
    this.setData({
      ['transitMethod.flag']: value == 2
    })
  },
  //
  handleWuhanOrNotChange({ detail = {} }) {
    this.setData({
      ['wuhanOrNot.current']: detail.value
    });
    var value = this.getFieldValue(detail.value, this.data.booleanitems);
    this.setData({
      ['wuhanOrNot.flag']: value == 2
    })
  },
  //
  handleHubeiOrNotChange({ detail = {} }) {
    this.setData({
      ['hubeiOrNot.current']: detail.value
    });
    var value = this.getFieldValue(detail.value, this.data.booleanitems);
    this.setData({
      ['hubeiOrNot.flag']: value == 2
    })
  },
  regionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ['location.content']: e.detail.value
    })
  },
  //
  handleHubeiChange({ detail = {} }) {
    const index = this.data.hubei.current.indexOf(detail.value);
    var id = this.getFieldValue(detail.value, this.data.hubei.items);

    index === -1 ? this.data.hubei.current.push(detail.value) : this.data.hubei.current.splice(index, 1);
    this.setData({
      ['hubei.current']: this.data.hubei.current
    });
  },
  //
  handleContactHistoryChange({ detail = {} }) {
    const index = this.data.contactHistory.current.indexOf(detail.value);
    var id = this.getFieldValue(detail.value, this.data.contactHistory.items);
    
    index === -1 ? this.data.contactHistory.current.push(detail.value) : this.data.contactHistory.current.splice(index, 1);
    this.setData({
      ['contactHistory.current']: this.data.contactHistory.current
    });
  },
  //
  handleBodyHistoryChange({ detail = {} }) {
    const index = this.data.bodyHistory.current.indexOf(detail.value);
    var id = this.getFieldValue(detail.value, this.data.bodyHistory.items);

    index === -1 ? this.data.bodyHistory.current.push(detail.value) : this.data.bodyHistory.current.splice(index, 1);
    this.setData({
      ['bodyHistory.current']: this.data.bodyHistory.current
    });
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ['date.content']: e.detail.value
    })
  },

  submitHealthForm(e) {
    console.log(this.data, e);
    var staffId = this.data.staffId.content;
    var staffName = this.data.staffName.content;
    var mobileNo = this.data.mobileNo.content;
    var location = this.data.location.content;
    var temperature = this.data.temperature.content;
    var aloneOrNot = this.data.aloneOrNot.current;
    var familyContact = this.data.familyContact.current;
    var familyCondiction = this.data.familyCondiction.current;
    var transitCity = this.data.transitCity.content;
    var transitMethod = this.data.transitMethod.current;
    var transitNo = this.data.transitNo.content;
    var date = this.data.date.content;
    var wuhanOrNot = this.data.wuhanOrNot.current;
    var hubeiOrNot = this.data.hubeiOrNot.current;
    var hubei = this.data.hubei.current;
    var contactHistory = this.data.contactHistory.current;
    var bodyHistory = this.data.bodyHistory.current;

    var data = {
      staffId: staffId,
      staffName: staffName,
      mobileNo: mobileNo,
      location: location,
      temperature: temperature,
      aloneOrNot: aloneOrNot,
      familyContact: familyContact,
      familyCondiction: familyCondiction,
      transitCity: transitCity,
      transitMethod: transitMethod,
      transitNo: transitNo,
      date: date,
      wuhanOrNot: wuhanOrNot,
      hubeiOrNot: hubeiOrNot,
      hubei: hubei,
      contactHistory: contactHistory,
      bodyHistory: bodyHistory,
    }
    console.log(data)
    if (staffId == '' 
    || staffName == '' 
    || mobileNo == '' 
    || location == '' 
    || !temperature 
    || aloneOrNot == '-' 
    || (aloneOrNot == '不是 No' && (familyContact == '-' || familyCondiction == '-'))
    || !transitCity 
    || transitMethod == '-' 
    || (hubeiOrNot == '是 Yes' &&(!transitNo || !date) ) 
    || wuhanOrNot == '-' 
    || (wuhanOrNot == '不是 No' && hubeiOrNot == '-' )
    || (hubeiOrNot == '是 Yes' && !hubei )
    || !contactHistory 
    || !bodyHistory) {
      this.handleError();
      return;
    }
    //var reg = new RegExp('^\\d+$', 'gi');
    if (!(/^\d{8}$/g).test(staffId) || !(/^\d{11}$/g).test(mobileNo)) {
      this.handleError('请输入合法的员工编号或者电话号码！');
      return;
    }
    var data = {
      staffId: staffId,
      staffName: staffName,
      mobileNo: mobileNo,
      location: location,
      temperature: temperature,
      aloneOrNot: aloneOrNot,
      familyContact: familyContact,
      familyCondiction: familyCondiction,
      transitCity: transitCity,
      transitMethod: transitMethod,
      transitNo: transitNo,
      date: date,
      wuhanOrNot: wuhanOrNot,
      hubeiOrNot: hubeiOrNot,
      hubei: hubei,
      contactHistory: contactHistory,
      bodyHistory: bodyHistory,
    }
    this.request(data);
  },
  //call api
  request(data) {
    wx.showLoading({ title: '数据处理中...' });
    wx.navigateTo({
      url: '/pages/successful/successful'
    })
    
    var host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    wx.request({
      url: host + '/api/health',
      method: 'POST',
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data);
        var page = '/pages/successful/successful';
        if(res.statusCode !== 200) {
          page = '/pages/errors/errors';
        }
        wx.navigateTo({
          url: page
        })
      },
      complete(res) {
        wx.hideLoading();
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
    for(var i = 0; i < data.length; i++) {
      if(value == data[i].name) {
        return data[i].id;
      }
    }
    return null;
  }
})