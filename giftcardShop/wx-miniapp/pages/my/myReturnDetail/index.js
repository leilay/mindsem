// pages/my/myReturnDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps: [
      {
        current: true,
        done: true,
        text: '提交',
        desc: '123'
      },
      {
        done: false,
        current: false,
        text: '商家审核',
        desc: '123'
      },
      {
        done: false,
        current: false,
        text: '客户确认',
        desc: '2018-04-05 10:08:10'
      },
      {
        done: false,
        current: false,
        text: '商家收货',
        desc: '2018-04-05 10:08:10'
      },
      {
        done: false,
        current: false,
        text: '完成',
        desc: '2018-04-05 10:08:10'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goback: function () {
    wx.showModal({
      title: '提示',
      content: '请确认快递单号是否正确',
      success: function (res) {
        if (res.confirm) {
          wx.navigateBack({
            delta: 1
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

  }
})