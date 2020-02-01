// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    department: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: true,
      isCRSRelated: false,
      label: 'Department (部门)',
      confirmLabel: 'Department (部门)',
      array: ['- Please Select (请选择) -', 'PWS', 'PIB', 'HACN'],
      index: 0,
      bindName: 'pickerChange',
      placeholder: '',
      warningLabel: 'Please Select Department (请选择部门)',
      content: ''
    },

    stafID: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: true,
      isCRSRelated: false,
      maxlength: 8,
      label: '1. 你的员工编号 Your Staff ID:',
      confirmLabel: '1. 你的员工编号 Your Staff ID:',
      bindInputName: 'inputEvent',
      warningLabel: 'Please Enter Staf ID (请输入员工号)',
      num: '1',
      content: ''
    },
    mobile: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: true,
      isCRSRelated: false,
      maxlength: 8,
      label: '2. 你的紧急联系电话 Your cell phone for emergency call:',
      confirmLabel: '2. 你的紧急联系电话 Your cell phone for emergency call:',
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
      title: '3. 你为其他同事报告吗 Are you reporting for other colleague? *',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },
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
      title: '4. 你或者被你报告的同事，现在的情况是 What is the current circumstance of the reported colleague? *',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },
    address: {
      hasLabel: true,
      hasWarning: false,
      isMandatory: true,
      isCRSRelated: false,
      maxlength: 8,
      label: '5. 你或者被你报告的同事，现在的所在地 Where are you or the reported colleague located?',
      confirmLabel: '5. 你或者被你报告的同事，现在的所在地 Where are you or the reported colleague located?',
      bindInputName: 'inputEvent',
      warningLabel: 'Please Enter your locations (请输入所在地)',
      num: '3',
      content: ''
    },
    visits: {
      items: [{
        id: 1,
        name: '无 None',
      }, {
        id: 2,
        name: '广州 GZ'
      }, {
        id: 3,
        name: '西安 XA'
      }],
      title: '6. 14天之内去过的办公地点 Which office did you visit in 14 days? *',
      current: [],
      position: 'left',
      checked: false,
      disabled: false,
    },
    supports: {
      items: [{
        id: 1,
        name: '需要提供紧急支持 (请提供联系方式及需要支持的内容） Yes, need the emergency support (please provide the contact number and what kind of support is required)',
      }, {
        id: 2,
        name: '不需要提供紧急支持 (No need for emergency support)'
      }],
      title: '7. 你或者被你报告的同事，需要公司提供紧急支持吗 Does the reported colleague need emergency support from the company?',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },
    remote: {
      items: [{
        id: 1,
        name: '可以远程工作 Yes, can work from home',
      }, {
        id: 2,
        name: '无法远程工作(请提供具体原因）No, cannot work from home (please describe your current status)'
      }],
      title: '8. 你或者被你报告的同事，如身体情况允许远程工作，是否有远程工作的条件，包括Laptop，V.P.N token，Internet WIFI等 If the health condition allows you or the reported colleague to work remotely, do you or the reported colleague have sufficient facilities to work from home, including Laptop, V.P.N token, and internet WIFI, etc?',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },
    date: ''
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
    var navigateTitle = '健康问卷调查';
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

  pickerChange: function (e) {
    console.log('picker change : ',e)

    this.setData({
      ['department.index']: e.detail.value,
      ['department.content']: this.data.department.array[e.detail.value]

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
    }
    this.setData({
      [field]: e.detail.value
    })
  },
  //
  handleOthersChange({ detail = {} }) {
    console.log(detail.value)
    this.setData({
      ['others.current']: detail.value
    });
  },
  //
  handleStatusChange({ detail = {} }) {
    console.log(detail.value)
    this.setData({
      ['status.current']: detail.value
    });
  },
  //
  handleSupportsChange({ detail = {} }) {
    console.log(detail.value)
    this.setData({
      ['supports.current']: detail.value
    });
  },
  //
  handleRemoteChange({ detail = {} }) {
    console.log(detail.value)
    this.setData({
      ['remote.current']: detail.value
    });
  },
  //
  handleVisitsChange({ detail = {} }) {
    const index = this.data.visits.current.indexOf(detail.value);
    index === -1 ? this.data.visits.current.push(detail.value) : this.data.visits.current.splice(index, 1);
    this.setData({
      ['visits.current']: this.data.visits.current
    });
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  submitHealthForm(e) {
    console.log(e.detail.value);
  }
})