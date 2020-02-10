// pages/submithealth/submithealth.js
const { $Message } = require('../dist/base/index');
const app = getApp();
const cityMap = {
  'SH':'上海市 SH',
  'BJ':'北京市 BJ',
  'CD':'成都市 CD',
  'DG':'东莞市 DG',
  'FS':'佛山市 FS',
  'FZ':'福州市 FZ',
  'GZ':'广州市 GZ',
  'HaZ':'杭州市 HaZ',
  'HuZ':'惠州市 HuZ',
  'JM':'江门市 JM',
  'JN':'济南市 JN',
  'KM':'昆明市 KM',
  'NJ':'南京市 NJ',
  'NB':'宁波市 NB',
  'SZ':'深圳市 SZ',
  'TJ':'天津市 TJ',
  'XM':'厦门市 XM',
  'ZS':'中山市 ZS'
}

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
      placeholder: '请输入',
      maxlength: 8,
      type: 'number',
      label: '1.请输入你的员工编号。*',
      bindInputName: 'inputEvent',
      num: '1',
      content: '',
      isDisabled: false
    },
    staffName: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      placeholder: '请输入',
      maxlength: 20,
      type: 'text',
      label: '2.请输入你的中文姓名。*',
      bindInputName: 'inputEvent',
      num: '2',
      content: '',
      isDisabled: false
    },
    mobileNo: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      maxlength: 11,
      placeholder: '请输入',
      type: 'number',
      label: '3.请输入你的紧急联系电话。*',
      confirmLabel: '3.Your cell phone for emergency call（你的紧急联系电话）',
      bindInputName: 'inputEvent',
      warningLabel: 'Please Enter cell phone (请输入紧急联系电话)',
      num: '3',
      content: '',
      isDisabled: false
    },
    others: {
      items: [{
        id: 1,
        name: '是',
        value: 'Y'
      }, {
        id: 2,
        name: '不是',
        value: 'N'
      }],
      title: '4.你为其他同事报告吗？*',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
      isOthersFlag: true,
      bindName: 'handleOthersChange',
      content: ''
    },
    othersStaffId: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      placeholder: '请输入',
      maxlength: 8,
      label: '你所报告同事的员工编号是？*',
      bindInputName: 'inputEvent',
      warningLabel: 'Please Enter the staff ID (请输入员工编号)',
      num: '4',
      content: '',
      isDisabled: false
    },
    city: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      label: '5.你或你所报告的同事在哪个办公城市？*',
      array: [
        '请选择',
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
      label: '6.你或你所报告同事的部门是？*',
      array: [
        '请选择', 
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
        name: '无'
      }],
      title: '7.你或你所报告的同事14天内去过的办公行所。（可多选）*',
      current: [],
      index: [],
      position: 'left',
      checked: false,
      disabled: false,
      bindName: 'handleVisitsChange',
      workplaces: [
        ['无'],
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
      ]
    },
    goWorkplace: {
      items: [{
        id: 1,
        name: '是',
        value: 'Y'
      }, {
        id: 2,
        name: '否',
        value: 'N'
      }],
      title: '8. 是否14天内去过办公场所。*',
      current: '-',
      content: '',
      position: 'left',
      checked: false,
      disabled: false,
      bindName: 'handleGoWorkplaceChange'
    },
    status: {
      items: [{
        id: 1,
        name: '确诊:由医疗机构或疾控部门认定的确诊案例',
      }, {
        id: 2,
        name: '疑似:由医疗机构或疾控部门认定的疑似案例'
      }, {
        id: 3,
        name: '死亡:由医疗机构或疾控部门认定的死亡案例'
      }, {
        id: 4,
        name: '被动隔离: 由医疗机构或疾控部门认定得密切接触者 或 收到隔离通知单',
      }, {
        id: 5,
        name: '主动隔离:根据当地防疫要求或出于自律所采取的主动隔离 (如湖北接触史;与确诊/疑似病例居住同一大楼小区等)'
      }],
      title: '9.你或你所报告的同事目前的健康状态？*',
      current: '-',
      index: 0,
      position: 'left',
      checked: false,
      disabled: false,
      isHideMoreSymptom: true,
      bindName: 'handleStatusChange',
      status_content: '',
      placeholder: '可以描述具体情况'
    },
    isolationOrNot: {
      items: [{
        id: 1,
        name: '是',
        value: 'Y'
      }, {
        id: 2,
        name: '否',
        value: 'N'
      }],
      title: '10.你或你所报告的员工是否已经开始隔离？',
      current: '-',
      content: '',
      position: 'left',
      checked: false,
      disabled: false,
      bindName: 'handleIsolationOrNotChange'
    },
    isolationStartDate: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: false,
      isCRSRelated: false,
      label: '11.你或你所报告的员工的隔离起始日期是？',
      current: '请选择',
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
      label: '12.你或你所报告的员工的预期隔离结束日期是？',
      current: '请选择',
      bindName: 'pickerEndDateChange',
      content: '',
      start: '2020-01-01',
      end: '2021-01-01'
    },
    id: '',
    isDisabled: false
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
        url: host + '/api/hacn/health/detail',
        method: 'POST',
        data: { "serailNumber": options.id },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          console.log(res.data);
          var data = res.data.returnObject
          if (res.statusCode == 200) {
            // build data
            var visitsItems = that.buildItems(that.data.visits.workplaces[(that.data.city.array.indexOf(cityMap[data.cityShortName]))])
            var visits = []
            data.workplace.split(',').forEach(val => {
              visits.push(that.getItemNameById(val, visitsItems))
            })

            that.setData({
              ["id"]: options.id,
              ["isDisabled"]: true,
              ["staffID.isDisabled"]: true,
              ["staffName.isDisabled"]: true,
              ["mobileNo.isDisabled"]: true,
              ["othersStaffId.isDisabled"]: true,
              
              ["staffID.content"]: data.staffId,
              ["staffName.content"]: data.staffName,
              ["mobileNo.content"]: data.mobileNumber,
              ["others.current"]: data.isReportOther === 'Y' ? '是' : '否',
              ["others.isOthersFlag"]: data.isReportOther === 'Y' ? false : true,
              ["othersStaffId.content"]: data.reportStaffId,
              ["city.index"]: that.data.city.array.indexOf(cityMap[data.cityShortName]),
              ["visits.items"]: visitsItems,
              ["goWorkplace.current"]: data.goWorkplace ==='Y' ? '是' : '否',
              ["department.index"]: data.department,
              
              ["status.current"]: that.getItemNameById(data.healthStatus, that.data.status.items),
              ["status.isHideMoreSymptom"]: data.healthStatus == 5 ? false : true,
              ["status.status_content"]: data.healthDescription,

              ["isolationOrNot.current"]: data.isIsolation === 'Y' ? '是' : '否',
              ["isolationStartDate.current"]: data.isolationStartDate,
              ["isolationEndDate.current"]: data.isolationEndDate
            })

            that.setData({
              ["visits.current"]: visits
            })
          } else {
            that.handleError(res.data.message);
          }
        },
        complete(res) {
          wx.hideLoading();
        }
      })
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
    var navigateTitle = '疫情上报';
    this.setData({
      navigateTitle
    })

    if (app.globalData.userInfo) {
      this.setData({
        ['staffID.content']: app.globalData.userInfo.staffId,
        ['mobileNo.content']: app.globalData.userInfo.mobileNum
      })
    }

    wx.setNavigationBarTitle({
      title: navigateTitle,
    })
  },

  inputEvent: function (e_) {
    const e = e_.detail.e ? e_.detail.e : e_
    console.log('input event : ', e)
    var num = e.currentTarget.dataset.num;
    var field;
    switch(num) {
      case '1': field = 'staffID.content'; break;
      case '2': field = 'staffName.content'; break;
      case '3': field = 'mobileNo.content'; break;
      case '4': field = 'othersStaffId.content'; break;
    }
    this.setData({
      [field]: e.detail.value
    })
  },

  handleOthersChange({ detail = {} }) {
    console.log(detail.value)
    var id = this.getItemId(detail.value, this.data.others.items);
    var value = this.getItemValue(detail.value, this.data.others.items);
    this.setData({
      ['others.current']: detail.value,
      ['others.content']: value
    });
    this.setData({
      ['others.isOthersFlag']: id == 2
    })
  },

  pickerCityChange: function (e) {
    console.log('picker change : ',e)

    this.setData({
      ['city.index']: e.detail.value,
      ['city.content']: this.data.city.array[e.detail.value],
      ['visits.items']: this.buildItems(this.data.visits.workplaces[e.detail.value]),
      ['visits.current']: [],
      ['visits.index']: [],
    })
  },

  pickerDepartmentChange: function (e) {
    console.log('picker change : ',e)

    this.setData({
      ['department.index']: e.detail.value,
      ['department.content']: this.data.department.array[e.detail.value]

    })
  },

  handleVisitsChange({ detail = {} }) {
    console.log(detail.value)
    const index = this.data.visits.current.indexOf(detail.value);
    index === -1 ? this.data.visits.current.push(detail.value) : this.data.visits.current.splice(index, 1);
    var id = this.getItemId(detail.value, this.data.visits.items);
    this.data.visits.index.indexOf(id) === -1 ? this.data.visits.index.push(id) : this.data.visits.index.splice(id, 1)
    this.setData({
      ['visits.current']: this.data.visits.current,
      ['visits.index']: this.data.visits.index
    });
  },

  handleGoWorkplaceChange: function ({ detail = {} }) {
    console.log(detail.value)
    let value = this.getItemValue(detail.value, this.data.isolationOrNot.items);
    this.setData({
      ['goWorkplace.current']: detail.value,
      ['goWorkplace.content']: value
    })
  },

  handleStatusChange({ detail = {} }) {
    console.log(detail.value)
    var v = this.getItemId(detail.value, this.data.status.items);
    this.setData({
      ['status.current']: detail.value,
      ['status.index']: v,
      ['status.isHideMoreSymptom']: v !== 5
    });
    if (v !== 5) {
      this.setData({
        ['status.status_content']: ''
      });
    }
  },

  handleIsolationOrNotChange: function ({ detail = {} }) {
    console.log(detail.value)
    let value = this.getItemValue(detail.value, this.data.isolationOrNot.items);
    this.setData({
      ['isolationOrNot.current']: detail.value,
      ['isolationOrNot.content']: value
    })
  },
  
  pickerStartDateChange: function (e) {
    console.log('picker change : ', e)

    this.setData({
      ['isolationStartDate.current']: e.detail.value,
      ['isolationStartDate.content']: e.detail.value
    })
  },
  
  pickerEndDateChange: function (e) {
    console.log('picker change : ', e)

    this.setData({
      ['isolationEndDate.current']: e.detail.value,
      ['isolationEndDate.content']: e.detail.value
    })
  },
  
  submitEpidemic(e) {
    console.log(e.detail.value);

    var openId = app.globalData.userInfo.openId;
    var staffId = this.data.staffID.content;
    var staffName = this.data.staffName.content;
    var mobileNumber = this.data.mobileNo.content;
    var isReportOther = this.data.others.content;
    var reportStaffId = this.data.othersStaffId.content;
    var cityShortName = this.data.city.content;
    var department = this.data.department.index;
    var workplace = this.data.visits.index;
    var goWorkplace = this.data.goWorkplace.content;
    var healthStatus = this.data.status.index;
    var healthDescription = e.detail.value.status_content;
    var isIsolation = this.data.isolationOrNot.content;
    var isolationStartDate = this.data.isolationStartDate.content;
    var isolationEndDate = this.data.isolationEndDate.content;

    if (!openId) {
      this.handleError('请重新登陆或重启小程序！');
      return;
    }

    if (!staffId) {
      this.handleError('员工编号不能为空！');
      return;
    }

    if (!(/^\d{8}$/g).test(staffId)) {
      this.handleError('请输入合法的员工编号！');
      return; 
    }

    if (!staffName) {
      this.handleError('中文姓名不能为空！');
      return;
    }

    if (!(/^[\u4e00-\u9fa5\·]{1,20}$/g).test(staffName)) {
      this.handleError('请输入合法的中文姓名！');
      return;
    }

    if (!mobileNumber) {
      this.handleError('联系电话不能为空！');
      return;
    }

    if (!(/^\d{11}$/g).test(mobileNumber)) {
      this.handleError('请输入合法的电话号码！');
      return;
    }

    if (!isReportOther) {
      this.handleError('请选择是否为其他同事报告！');
      return;
    }

    if (isReportOther == 'Y') {
      if (!reportStaffId) {
        this.handleError('同事员工编号不能为空！');
        return;
      }
  
      if (reportStaffId == staffId) {
        this.handleError('你所报告同事的员工编号不能重复!');
        return;
      }
  
      if (!(/^\d{8}$/g).test(reportStaffId)) {
        this.handleError('请输入合法的同事员工编号！');
        return;
      }
    }

    if (!cityShortName) {
      this.handleError('请选择办公城市!');
      return;
    }

    if (department == '0') {
      this.handleError('请选择部门!');
      return;
    }

    if (workplace.length == 0) {
      this.handleError('请选择办公行所！');
      return;
    }

    if (!goWorkplace) {
      this.handleError('请选择是否去过办公场所！');
      return;
    }
    

    if (healthStatus == '0') {
      this.handleError('请选择健康状态！');
      return;
    }
    
    if (!isIsolation) {
      this.handleError('请选择是否已隔离！');
      return;
    }

    if (isIsolation == 'Y') {
  
      if (!isolationStartDate) {
        this.handleError('请选择隔离起始日期！');
        return;
      }
  
      if (!isolationEndDate) {
        this.handleError('请选择隔离结束日期！');
        return;
      }

    }

    if (isolationStartDate > isolationEndDate) {
      this.handleError('结束日期不能小于起始日期！');
      return;
    }
    
    var data = this.buildData(openId, staffId, staffName, mobileNumber, isReportOther, reportStaffId, cityShortName, department, workplace, goWorkplace,  healthStatus, healthDescription, isIsolation, isolationStartDate, isolationEndDate);

    console.log('data', data)
    this.request(data);
  },

  buildData(openId, staffId, staffName, mobileNumber, isReportOther, reportStaffId, cityShortName, department, workplace, goWorkplace,  healthStatus, healthDescription, isIsolation, isolationStartDate, isolationEndDate) {
    var data= {
      openId: openId,
      staffId: reportStaffId,
      staffName: staffName,
      mobileNumber: mobileNumber,
      isReportOther: isReportOther,
      reportStaffId: staffId,
      cityShortName: cityShortName.slice(-3).trim(),
      department: department,
      workplace: workplace.join(','),
      goWorkplace: goWorkplace,
      healthStatus: healthStatus,
      healthDescription: healthDescription,
      isIsolation: isIsolation,
      isolationStartDate: isolationStartDate,
      isolationEndDate: isolationEndDate
    };
    return data;
  },
  
  request(data) {
    wx.showLoading({ title: '数据处理中...' });
    var host = app.api.isProdEnv ? app.api.prodUrl : app.api.devUrl;
    wx.request({
      url: host + '/api/hacn/health/report',
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
  
  handleError(message) {
    $Message({
      content: message || '请完善信息!',
      type: 'error'
    });
  },

  getItemId(value, data) {
    for(var i = 0; i < data.length; i++) {
      if(value == data[i].name) {
        return data[i].id;
      }
    }
    return null;
  },

  getItemValue(value, data) {
    for(var i = 0; i < data.length; i++) {
      if(value == data[i].name) {
        return data[i].value;
      }
    }
    return null;
  },

  getItemNameById(id, data) {
    for(var i = 0; i < data.length; i++) {
      if(id == data[i].id) {
        return data[i].name;
      }
    }
    return null;
  },

  buildItems(arr) {
    const res = []
    if (arr) {
      arr.forEach((ele, index) => {
        res.push({
          id: index + 1,
          name: ele
        })
      })
    }
    return res
  }
})