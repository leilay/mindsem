// pages/my/myGiftCard/index.js

const { Tab, extend } = require('../../../assets/plugin/zanui/index');

Page(extend({}, Tab, {
  /**
   * 页面的初始数据
   */
  data: {

    showBottomPopup: false,

    tab1: {
      list: [{
        id: 'all',
        title: '全部'
      }, {
        id: 'topay',
        title: '可兑换'
      }, {
        id: 'tosend',
        title: '已兑换'
      }, {
        id: 'send',
        title: '已过期'
      }],
      selectedId: 'all'
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  toggleBottomPopup() {
    this.setData({
      showBottomPopup: !this.data.showBottomPopup
    });
  },
  toScan: function () {
    wx.showToast({
      title: '扫一扫',
    })
  },
  toVerify: function () {
    this.setData({
      showBottomPopup: !this.data.showBottomPopup
    });
    wx.showModal({
      title: '提示',
      content: '您的礼品卡已校验通过，并加入到您的卡包中',
      confirmText: '立即兑换',
      cancelText: '以后再说',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/shopping/exchange/index',
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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

  },
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;

    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  }
}));