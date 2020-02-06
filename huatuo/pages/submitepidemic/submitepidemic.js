// pages/submithealth/submithealth.js
const { $Message } = require('../dist/base/index');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    staffID: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      placeholder: '请输入 Please Enter',
      maxlength: 8,
      type: 'number',
      label: '1.请输入你的员工编号。',
      bindInputName: 'inputEvent',
      num: '1',
      content: ''
    },
    staffName: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      placeholder: '请输入 Please Enter',
      maxlength: 4,
      type: 'text',
      label: '2.请输入你的中文姓名。',
      bindInputName: 'inputEvent',
      num: '1',
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
      label: '3.请输入你的紧急联系电话。',
      confirmLabel: '3.Your cell phone for emergency call（你的紧急联系电话）',
      bindInputName: 'inputEvent',
      warningLabel: 'Please Enter cell phone (请输入紧急联系电话)',
      num: '2',
      content: ''
    },
    others: {
      items: [{
        id: 1,
        name: '是 Yes',
      }, {
        id: 2,
        name: '不是 No'
      }],
      title: '4.你为其他同事报告吗？',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false
    },
    isOthersFlag: true,
    othersStaffId: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      placeholder: '请输入 Please Enter',
      maxlength: 8,
      label: '5.你所报告同事的员工编号是？',
      bindInputName: 'inputEvent',
      warningLabel: 'Please Enter the staff ID (请输入员工编号)',
      num: '8',
      content: ''
    },
    city: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      label: '6.你或你所报告的同事在哪个办公城市？',
      array: [
        '请选择 Please Select',
        '上海市 SH',
        '北京市 BJ',
        '成都市 CD',
        '东莞市 DG',
        '佛山市 FS',
        '福州市 FZ',
        '广州市 GZ',
        '杭州市 HaZ',
        '惠州市 HuZ',
        '江门市 JM',
        '济南市 JN',
        '昆明市 KM',
        '南京市 NJ',
        '宁波市 NB',
        '深圳市 SZ',
        '天津市 TJ',
        '厦门市 XM',
        '中山市 ZS'
      ],
      index: 0,
      bindName: 'pickerCityChange',
      content: ''
    },
    department: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      label: '7.你或你所报告同事的部门是？',
      array: [
        '请选择 Please Select', 
        'RB',
        'CMB',
        'GB',
        'GM',
        'HOST',
        'RKM',
        'FIN',
        'HRD',
        'FCC',
        'RC',
        'SCY',
        'INA',
        'LGA',
        'CDD',
        'NETWORK'
        ],
      index: 0,
      bindName: 'pickerDepartmentChange',
      content: ''
    },
    visits: {
      items: [{
        id: 1,
        name: '无 None'
      }],
      title: '8.你或你所报告的同事14天内去过的办公行所。（可多选）',
      current: [],
      position: 'left',
      checked: false,
      disabled: false
    },
    workplaces: [
      ['无 None'],
      [
        '恒生银行（中国）有限公司',
        '上海分行',
        '上海静安嘉里中心支行',
        '上海自贸试验区支行',
        '上海安福路支行',
        '上海徐家汇支行',
        '上海娄山关路支行',
        '上海大拇指支行',
        '上海淮海路支行',
        '上海中山公园支行',
        '上海黄浦区瑞金路支行',
        '上海人民广场支行'
      ],
      [
        '北京分行',
        '北京中关村支行',
        '北京酒仙桥支行',
        '北京工体北路支行',
        '北京嘉里中心支行',
        '北京金融街支行'
      ],
      [
        '成都分行'
      ],
      [
        '东莞分行'
      ],
      [
        '佛山支行',
        '顺德支行'
      ],
      [
        '福州分行',
        '福州鼓楼支行'
      ],
      [
        '广州分行',
        '广州珠江新城支行',
        '广州中信广场支行',
        '广州江南西路支行',
        '广州东山支行'
      ],
      [
        '杭州分行'
      ],
      [
        '惠州支行'
      ],
      [
        '江门支行'
      ],
      [
        '济南分行'
      ],
      [
        '昆明分行'
      ],
      [
        '南京分行'
      ],
      [
        '宁波分行'
      ],
      [
        '深圳分行',
        '深圳前海支行',
        '深圳后海支行',
        '深圳福田中心区支行',
        '深圳罗湖支行',
        '深圳高新区支行'
      ],
      [
        '天津分行'
      ],
      [
        '厦门分行'
      ],
      [
        '中山支行'
      ]
    ],
    status: {
      items: [{
        id: 1,
        name: '由医疗机构或者疾控部门告知的确诊病毒性肺炎案例 Confirmed viral pneumonia as advised by hospital/authority',
      }, {
        id: 2,
        name: '由医疗机构或者疾控部门告知的疑似病毒性肺炎案例 Suspected viral pneumonia as advised by hospital/authority'
      }, {
        id: 3,
        name: '由医疗机构或者疾控部门告知的密切接触 Close contact as advised by hospital/authority'
      }, {
        id: 4,
        name: '有发烧但不是肺炎 Fever but not pneumonia',
      }, {
        id: 5,
        name: '没有发烧，但有其它身体不适的情况（请提供具体的症状）Not fever but feel uncomfortable (please provide the detail of symptoms)'
      }, {
        id: 6,
        name: '居住楼或小区被有关部门限制出入 The building or residential estate lived in is being restricted.'
      }],
      title: '9.你或你所报告的同事目前的健状态？',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false
    },
    moreStatus: {
      items: [{
        id: 1,
        name: '咳嗽',
      }, {
        id: 2,
        name: '感冒'
      }, {
        id: 3,
        name: '乏力'
      }, {
        id: 4,
        name: '呼吸困难',
      }, {
        id: 5,
        name: '腹泻'
      }, {
        id: 6,
        name: '其他'
      }],
      current: [],
      position: 'left',
      checked: false,
      disabled: false
    },
    isHideMoreSymptom: true,
    isHideOtherSymptom: true,
    isHideOtherWorkPlace: false,
    isolationOrNot: {
      items: [{
        id: 1,
        name: 'yes',
      }, {
        id: 2,
        name: 'no'
      }],
      title: '10.你或你所报告的员工是否已经开始隔离？',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false
    },
    isolationType: {
      items: [{
        id: 1,
        name: 'Active Isolation',
      }, {
        id: 2,
        name: 'Passive Isolation'
      }],
      title: '11.你或你所报告的员工正在进行自我主动隔离？还是被医疗机构或者疾控部门收治的被动隔离？',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false
    },
    isolationStartDate: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      label: '12.你所报告的员工的隔离起始日期是？',
      current: '请选择 Please Select',
      index: 0,
      bindName: 'pickerStartDateChange',
      content: '',
      start: '2020-01-01',
      end: '2021-01-01'
    },
    isolationEndDate: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      label: '13.你所报告的员工的预期隔离结束时间是？',
      current: '请选择 Please Select',
      index: 0,
      bindName: 'pickerEndDateChange',
      content: '',
      start: '2020-01-01',
      end: '2021-01-01'
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.initData();
  },

  //初始化数据
  initData: function () {
    var navigateTitle = '疫情上报 Report Epidemic';
    this.setData({
      navigateTitle
    })

    wx.setNavigationBarTitle({
      title: navigateTitle,
    })
  },

  pickerDepartmentChange: function (e) {
    console.log('picker change : ',e)

    this.setData({
      ['department.index']: e.detail.value,
      ['department.content']: this.data.department.array[e.detail.value]

    })
  },
  
  pickerVisitsChange: function (e) {
    console.log('picker change : ',e)

    this.setData({
      ['visits.index']: e.detail.value,
      ['visits.content']: this.data.visits.array[e.detail.value]

    })
  },
  
  pickerCityChange: function (e) {
    console.log('picker change : ',e)

    this.setData({
      ['city.index']: e.detail.value,
      ['city.content']: this.data.city.array[e.detail.value],
      ['visits.items']: this.buildItems(this.data.workplaces[e.detail.value])
    })
  },
  
  pickerStartDateChange: function (e) {
    console.log('picker change : ', e)

    this.setData({
      ['isolationStartDate.current']: e.detail.value
    })
  },
  
  pickerEndDateChange: function (e) {
    console.log('picker change : ', e)

    this.setData({
      ['isolationEndDate.current']: e.detail.value
    })
  },
  
  inputEvent: function (e_) {
    const e = e_.detail.e ? e_.detail.e : e_
    console.log('input event : ', e)
    var num = e.currentTarget.dataset.num;
    var field;
    switch(num) {
      case '1': field = 'stafID.content'; break;
      case '2': field = 'mobile.content'; break;
      case '3': field = 'othersStaffId.content'; break;
    }
    this.setData({
      [field]: e.detail.value
    })
  },
  
  handleOthersChange({ detail = {} }) {
    console.log(detail.value)
    this.setData({
      ['others.current']: detail.value
    });
    var value = this.getFieldValue(detail.value, this.data.others.items);
    this.setData({
      isOthersFlag: value == 2
    })
  },
  
  handleStatusMoreChange({ detail = {} }) {
    console.log(detail.value)
    var v = this.getFieldValue(detail.value, this.data.status.items);
    this.setData({
      ['status.current']: detail.value,
      ['moreStatus.current']: [],
      isHideMoreSymptom: v !== 5
    });
  },
  
  handleStatusOtherChange({ detail = {} }) {
    console.log(detail.value)
    const index = this.data.moreStatus.current.indexOf(detail.value);
    var v = this.getFieldValue(detail.value, this.data.moreStatus.items);
    index === -1 ? this.data.moreStatus.current.push(detail.value) : this.data.moreStatus.current.splice(index, 1);
    this.setData({
      ['moreStatus.current']: this.data.moreStatus.current,
      isHideOtherSymptom: (v == 6 ? !this.data.isHideOtherSymptom : this.data.isHideOtherSymptom)
    });
  },
  
  handleVisitsChange({ detail = {} }) {
    const index = this.data.visits.current.indexOf(detail.value);
    var id = this.getFieldValue(detail.value, this.data.visits.items);
    index === -1 ? this.data.visits.current.push(detail.value) : this.data.visits.current.splice(index, 1);
    this.setData({
      ['visits.current']: this.data.visits.current
    });
  },
  
  handleIsolationOrNotChange: function ({ detail = {} }) {
    console.log(detail.value)
    this.setData({
      ['isolationOrNot.current']: detail.value
    })
  },
  
  handleIsolationTypeChange: function ({ detail = {} }) {
    console.log(detail.value)
    this.setData({
      ['isolationType.current']: detail.value
    })
  },

  submitEpidemic(e) {
    console.log(e.detail.value);
    var staffId = this.data.stafID.content;
    var mobile = this.data.mobile.content;
    var department = this.data.department.content;
    var others = this.data.others.current;
    var others_id = this.data.othersStaffId.content;
    var status = this.data.status.current;
    var status_content = e.detail.value.status_content;
    var city = this.data.city.index;
    var visits = this.data.visits.current;
    var isInvalidDepartment = department == this.data.department.array[0] || department == '';
    if (staffId == '' || mobile == '' || others == '-' || isInvalidDepartment || status == '-' 
      || city == '0' || city == 0 || visits.length == 0) {
      this.handleError();
      return;
    }
    if (others == this.data.others.items[0].name) {
      if(others_id == '') {
        this.handleError();
        return;
      } else if (!(/^\d{8}$/g).test(others_id)) {
        this.handleError('请输入合法的员工编号或者电话号码！');
        return;
      } else if (staffId == others_id) {
        this.handleError('你所报告同事的员工编号不能重复!');
        return;
      }
      
    }
    if (status == this.data.status.items[4].name && status_content == '') {
      this.handleError();
      return;
    }
    //var reg = new RegExp('^\\d+$', 'gi');
    if (!(/^\d{8}$/g).test(staffId) || !(/^\d{11}$/g).test(mobile)) {
      this.handleError('请输入合法的员工编号或者电话号码！');
      return;
    }
    var data = this.buildHealthReportData(staffId, mobile, department, others, others_id, status, status_content, city, visits);
    this.request(data);
  },

  buildHealthReportData(staffId, mobile, department, others, others_id, status, status_content, city, visits) {
    var arrs = [];
    for(var i = 0; i < visits.length; i++) {
      var v = this.getFieldValue(visits[i], this.data.visits.items);
      arrs.push(v);
    }

    var others = this.getFieldValue(others, this.data.others.items);

    var data= {
      staffId: staffId,
      mobileNum: mobile,
      department: department,
      reporter: others == 2 ? staffId : others_id,
      healthStatus: this.getFieldValue(status, this.data.status.items),
      other: status_content,
      city: city == '1' ? 'GZ' : 'XA',
      workplace: arrs.indexOf(1) > -1 ? '1' : arrs.join(',')
    };
    return data;
  },
  
  request(data) {
    wx.showLoading({ title: '数据处理中...' });
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
  
  handleError(message) {
    $Message({
      content: message || '请完善信息!',
      type: 'error'
    });
  },
  
  getFieldValue(value, data) {
    for(var i = 0; i < data.length; i++) {
      if(value == data[i].name) {
        return data[i].id;
      }
    }
    return null;
  },

  buildItems(arr) {
    const res = []
    if (arr) {
      arr.forEach((ele, index) => {
        res.push({
          id: index,
          name: ele
        })
      })
    }
    return res
  }
})