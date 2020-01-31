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
      label: 'Staf ID (员工号)',
      confirmLabel: 'Staf ID (员工号)',
      bindInputName: 'inputEvent',
      warningLabel: 'Please Enter Staf ID (请输入员工号)',
      content: ''
    },
    visitHuBei: {
      items: [{
        id: 1,
        name: '去过湖北',
      }, {
        id: 2,
        name: '接触过来自湖北的客人/亲友'
      }, {
        id: 3,
        name: '接触过有以下症状的病人(发热38度以上、咳嗽、咳痰等)'
      }, {
        id: 4,
        name: '以上情况均无',
      }],
      title: '自2020年1月1日以来是否有一下情况:(*)',
      current: '-',
      position: 'left',
      checked: false,
      disabled: false,
    },
    healths: {
      items: [{
        id: 1,
        name: '发热',
      }, {
        id: 2,
        name: '干咳'
      }, {
        id: 3,
        name: '乏力'
      }, {
        id: 4,
        name: '腹泻',
      }, {
      id: 5,
      name: '感冒',
      }, {
        id: 6,
        name: '头疼头晕',
      }, {
        id: 7,
        name: '以上均没有',
      }],
      title: '您是否有以下症状:(*)',
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
    
    this.setData({
      ['stafID.content']: e.detail.value
    })
  },
  //
  handleVisitHubeiChange({ detail = {} }) {
    console.log(detail.value)
    this.setData({
      ['visitHuBei.current']: detail.value
    });
  },
  //
  handleHealthChange({ detail = {} }) {
    const index = this.data.healths.current.indexOf(detail.value);
    index === -1 ? this.data.healths.current.push(detail.value) : this.data.healths.current.splice(index, 1);
    this.setData({
      ['healths.current']: this.data.healths.current
    });
  },
})