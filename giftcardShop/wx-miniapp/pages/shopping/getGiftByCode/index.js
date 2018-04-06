// pages/shopping/getGiftByCode/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#dd0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },

  // gotoNext
  gotoNext: function () {
    wx.showModal({
      title: '校验成功',
      content: '礼品卡已加入您的卡包中，是否立即兑换该礼品卡？',
      confirmText: '立即兑换',
      cancelText: '暂不兑换',
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
})