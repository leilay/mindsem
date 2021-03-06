// pages/my/myGiftOrderList/index.js

const { Tab, extend } = require('../../../assets/plugin/zanui/index');

Page(extend({}, Tab, {

  /**
   * 页面的初始数据
   */
  data: {

    tab1: {
      list: [{
        id: 'all',
        title: '全部'
      }, {
        id: 'topay',
        title: '已送礼'
      }, {
        id: 'tosend',
        title: '已收礼'
      }, {
        id: 'send',
        title: '待领取'
      }],
      selectedId: 'all'
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
  giveFriend: function () {
    wx.navigateTo({
      url: '/pages/shopping/giveMyWish/index',
    })
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
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;

    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  }

}));