// pages/my/myReturn/index.js
const { Tab, extend } = require('../../../assets/plugin/zanui/index');

Page(extend({}, Tab, {

  /**
   * 页面的初始数据
   */
  data: {
    tab1: {
      list: [{
        id: 'all',
        title: '售后申请'
      }, {
        id: 'history',
        title: '申请记录'
      }],
      selectedId: 'all'
    },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;

    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  },

  gotoReturnEdit: function () {
    wx.navigateTo({
      url: '/pages/my/myReturnEdit/index',
    })
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

  }
}));