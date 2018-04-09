// pages/my/myCanGiveFriend/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    checkboxItems: [
      { name: '金龙鱼礼品卡298金卡', value: '0', date: '2018-12-31', checked: true },
      { name: '金龙鱼礼品卡198银卡', value: '1', date: '2018-10-31' },
      { name: '金龙鱼礼品卡298金卡', value: '2', date: '2018-10-31' },
      { name: '金龙鱼礼品卡398钻石卡', value: '3', date: '2018-10-31' },
      { name: '金龙鱼礼品卡198银卡', value: '4', date: '2018-10-31' },
      { name: '金龙鱼礼品卡398钻石卡', value: '5', date: '2018-10-31' }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },

  // gotoEditMyWish
  gotoEditMyWish: function () {
    wx.navigateTo({
      url: '/pages/shopping/giveMyWish/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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