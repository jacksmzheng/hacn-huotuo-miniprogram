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
  }

})