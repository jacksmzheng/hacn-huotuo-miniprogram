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
      name: '是',
    }, {
      id: 2,
      name: '否'
    }],
    staffId: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      placeholder: '请输入',
      maxlength: 8,
      type: 'number',
      label: '1. 你的员工编号:*',
      bindInputName: 'inputEvent',
      num: 'staffId',
      content: ''
    },
    staffName: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      placeholder: '请输入',
      maxlength: 15,
      type: 'text',
      label: '2. 你的中文名字:*',
      bindInputName: 'inputEvent',
      num: 'staffName',
      content: ''
    },
    mobileNumber: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      maxlength: 11,
      placeholder: '请输入',
      type: 'number',
      label: '3. 你的联系电话:*',
      confirmLabel: '3. 你的联系电话',
      bindInputName: 'inputEvent',
      warningLabel: '请输入联系电话',
      num: 'mobileNumber',
      content: ''
    },
    location: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      label: '4.您的当前所在地:* ',
      index: 0,
      bindName: 'pickerCityChange',
      content: []
    },
    temperature: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      placeholder: '请输入',
      maxlength: 4,
      type: 'digit',
      label: '5.您今天的体温（单位：摄氏度℃）:*',
      bindInputName: 'inputEvent',
      num: 'temperature',
      content: ''
    },
    aloneOrNot: {
      title: '6.您当前是否独居:*',
      current: '',
      position: 'left',
      flag: false,
      checked: false,
      disabled: false,
    },
    familyContact: {
      title: '6-1.您的家庭成员/合住成员是否被确诊新型肺炎或有接触病患史？*',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },
    familyCondition: {
      title: '6-2.近期您的家庭成员/合住成员是否有发热、乏力、咳嗽、呼吸困难等症状？*',
      current: '',
      position: 'left',
      checked: false,
      disabled: false,
    },
    transitCity: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      placeholder: '请输入',
      maxlength: 35,
      type: 'text',
      label: '7.自2020年1月18日起，您还去过哪个/哪些城市？',
      bindInputName: 'inputEvent',
      num: 'transitCity',
      content: ''
    },
    transitMethod: {
      title: '8.自2020年1月18日起，您是否有乘坐飞机/火车等公共长途交通工具？*',
      current: '',
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
      placeholder: '请输入',
      maxlength: 35,
      type: 'text',
      label: '8.1.请提供您上述乘坐过的公共交通工具的详细班次信息:*',
      bindInputName: 'inputEvent',
      num: 'transitNo',
      content: ''
    },
    transitDate:{
      label: '8.2.请提供您上述乘坐过的公共交通工具的详细日期:*',
      content: ''
    },
    transitWuHan: {
      title: '9.自2020年1月18日起，您是否途径/中转/停留武汉？*',
      current: '',
      position: 'left',
      checked: false,
      disabled: false,
      flag: true
    },
    transitHuBei: {
      title: '10.自2020年1月18日起，您是否途径/中转/停留湖北省？*',
      current: '',
      position: 'left',
      checked: false,
      disabled: false,
      flag: true
    },
    transitCityOfHuBei: {
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
      title: '10.1.自2020年1月18日起，您途径/中转/停留湖北的城市:*',
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
      title: '11.过去的两周内您是否有以下情况？*',
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
        id: 5,
        name: '呼吸困难',
      }, {
        id: 6,
        name: '腹泻',
      }, {
        id: 7,
        name: '其他',
      }, {
        id: 8,
        name: '以上均无',
      }],
      title: '12.过去两周您是否有出现任何身体不适的症状？*',
      current: [],
      position: 'left',
      notSeletedOther: true,
      otherBodyHistory:'',
      checked: false,
      disabled: false,
    },
    isHideContactHistory: false,
    isHideBodyHistory: false,
    nonowDatew: '',
    id: '',
    isDisbaled: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id) {
      wx.showLoading({ title: '数据处理中...' });
      var host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
      var that = this
      wx.request({
        url: host + '/api/hacn/trip/detail',
        method: 'POST',
        data: { "serailNumber": options.id },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          console.log(res.data);
          var data = res.data.returnObject
          if (res.statusCode == 200) {
            that.setData({
              ["id"]: options.id,
              ["staffId.isDisabled"]: true,
              ["staffName.isDisabled"]: true,
              ["mobileNumber.isDisabled"]: true,
              ["temperature.isDisabled"]: true,
              ["transitCity.isDisabled"]: true,
              ["transitNo.isDisabled"]: true,
              ["staffId.content"]: data.staffId,
              ["staffName.content"]: data.staffName,
              ["mobileNumber.content"]: data.mobileNumber,
              ["location.content"]: data.location.split(','),
              ["temperature.content"]: data.temperature,
              ["aloneOrNot.current"]: data.aloneOrNot === '0' ? '是' : '否',
              ["familyCondition.current"]: data.familyCondition === '0' ? '是' : '否',
              ["familyContact.current"]: data.familyContact === '0' ? '是' : '否',
              ["transitCity.content"]: data.transitCity,
              ["transitMethod.current"]: data.transitMethod === '0' ? '是' : '否',
              ["transitNo.content"]: data.transitNo,
              ["transitDate.content"]: data.transitDate,
              ["transitWuHan.current"]: data.transitWuHan === '0' ? '是' : '否',
              ["transitHuBei.current"]: data.transitHuBei === '0' ? '是' : '否',
              ["transitCityOfHuBei.current"]: data.transitCityOfHuBei.split(','),
              ["bodyHistory.current"]: data.bodyHistory.split(','),
              ["contactHistory.current"]: data.contactHistory.split(','),
              ["bodyHistory.otherBodyHistory"]: data.otherBodyHistory,
              
            })
            if (data.aloneOrNot=='1') {
              that.setData({
                ["aloneOrNot.flag"]: true,
              })
            }
            if (data.transitMethod == '0') {
              that.setData({
                ["transitMethod.flag"]: false,
              })
            }
            if (data.transitHuBei == '0') {
              that.setData({
                ["transitHuBei.flag"]: false,
              })
            }
            if (data.bodyHistory.indexOf('其他')!==-1) {
              that.setData({
                ["bodyHistory.notSeletedOther"]: false,
              })
            }
          } else {
            that.handleError(res.data.message || '网络错误');
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
    var navigateTitle = '出行记录报备';
    this.setData({
      navigateTitle
    })

    wx.setNavigationBarTitle({
      title: navigateTitle,
    })
    var userInfo = getApp().globalData.userInfo
    if (userInfo) {
      this.setData({
        ['staffId.content']: userInfo.staffId,
        ['mobileNumber.content']: userInfo.mobileNum,
        ["staffId.isDisabled"]: userInfo.staffId ? true : false
      })
    }
    // 日期限制
    var nowDate = new Date()
    this.setData({
      ['nowDate']: nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate()
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
    console.log(detail)
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
  handlefamilyConditionChange({ detail = {} }) {
    this.setData({
      ['familyCondition.current']: detail.value
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
      ['transitWuHan.current']: detail.value
    });
    var value = this.getFieldValue(detail.value, this.data.booleanitems);
    this.setData({
      ['transitWuHan.flag']: value == 2
    })
  },
  //
  handleHubeiOrNotChange({ detail = {} }) {
    this.setData({
      ['transitHuBei.current']: detail.value
    });
    var value = this.getFieldValue(detail.value, this.data.booleanitems);
    this.setData({
      ['transitHuBei.flag']: value == 2
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
    const index = this.data.transitCityOfHuBei.current.indexOf(detail.value);
    var id = this.getFieldValue(detail.value, this.data.transitCityOfHuBei.items);

    index === -1 ? this.data.transitCityOfHuBei.current.push(detail.value) : this.data.transitCityOfHuBei.current.splice(index, 1);
    this.setData({
      ['transitCityOfHuBei.current']: this.data.transitCityOfHuBei.current
    });
  },
  //
  handleContactHistoryChange({ detail = {} }) {
    const index = this.data.contactHistory.current.indexOf(detail.value);
    var id = this.getFieldValue(detail.value, this.data.contactHistory.items);
    if (id == 4) {
      this.setData({
        isHideContactHistory: index == -1
      })
    }
    index === -1 ? this.data.contactHistory.current.push(detail.value) : this.data.contactHistory.current.splice(index, 1);
    this.setData({
      ['contactHistory.current']: this.data.contactHistory.current
    });
  },
  //
  handleBodyHistoryChange({ detail = {} }) {
    const index = this.data.bodyHistory.current.indexOf(detail.value);
    var id = this.getFieldValue(detail.value, this.data.bodyHistory.items);
    if (id == 8) {
      this.setData({
        isHideBodyHistory: index == -1
      })
    }
    index === -1 ? this.data.bodyHistory.current.push(detail.value) : this.data.bodyHistory.current.splice(index, 1);
    this.setData({
      ['bodyHistory.current']: this.data.bodyHistory.current,
      ['bodyHistory.notSeletedOther']: this.data.bodyHistory.current.indexOf('其他') == -1 ? true : false
    });
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ['transitDate.content']: e.detail.value
    })
  },

  submitHealthForm(e) {
    console.log(this.data);
    var staffId = this.data.staffId.content;
    var staffName = this.data.staffName.content;
    var mobileNumber = this.data.mobileNumber.content;
    var location = this.data.location.content;
    var temperature = this.data.temperature.content;
    var aloneOrNot = this.data.aloneOrNot.current;
    var familyContact = this.data.familyContact.current;
    var familyCondition = this.data.familyCondition.current;
    var transitCity = this.data.transitCity.content;
    var transitMethod = this.data.transitMethod.current;
    var transitNo = this.data.transitNo.content;
    var transitDate = this.data.transitDate.content;
    var transitWuHan = this.data.transitWuHan.current;
    var transitHuBei = this.data.transitHuBei.current;
    var transitCityOfHuBei = this.data.transitCityOfHuBei.current;
    var contactHistory = this.data.contactHistory.current;
    var bodyHistory = this.data.bodyHistory.current;
    var otherBodyHistory = e.detail.value.otherBodyHistory

    if (staffId == '' 
    || staffName == '' 
    || mobileNumber == '' 
    || location == '' 
    || !temperature 
    || aloneOrNot == '-' 
    || (aloneOrNot == '否' && (familyContact == '-' || familyCondition == '-'))
    // || !transitCity 
    || transitMethod == '-' 
    || (transitMethod == '是' &&(!transitNo || !transitDate) ) 
    || transitWuHan == '-' 
    || (transitWuHan == '否' && transitHuBei == '-' )
    || (transitHuBei == '是' && transitCityOfHuBei == [] )
    || contactHistory.length == 0
    || bodyHistory.length == 0
    || (bodyHistory.indexOf('其他')!==-1 && !otherBodyHistory)) {
      this.handleError();
      return;
    }
    //var reg = new RegExp('^\\d+$', 'gi');
    if (!(/^\d{8}$/g).test(staffId) || !(/^\d{11}$/g).test(mobileNumber)) {
      this.handleError('请输入合法的员工编号或者电话号码！');
      return;
    }
    var data = {
      staffId: staffId,
      staffName: staffName,
      mobileNumber: mobileNumber,
      location: location.join(','),
      temperature: temperature,
      aloneOrNot: aloneOrNot == '是' ? '0' : '1',
      familyContact: familyContact == '是' ? '0' : '1',
      familyCondition: familyCondition == '是' ? '0' : '1',
      transitCity: transitCity,
      transitMethod: transitMethod == '是' ? '0' : '1',
      transitNo: transitNo,
      transitDate: transitDate,
      transitWuHan: transitWuHan == '是' ? '0' : '1',
      transitHuBei: transitHuBei == '是' ? '0' : '1',
      transitCityOfHuBei: transitCityOfHuBei.join(','),
      contactHistory: contactHistory.join(','),
      bodyHistory: bodyHistory.join(','),
      otherBodyHistory: otherBodyHistory
    }
    console.log(data)
    this.request(data);
  },
  //call api
  request(data) {
    wx.showLoading({ title: '数据处理中...' });
    var host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    wx.request({
      url: host + '/api/hacn/trip/survey',
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
        wx.redirectTo({
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