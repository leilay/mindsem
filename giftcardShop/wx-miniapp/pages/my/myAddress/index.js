// pages/my/myAddress/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addrList: [{
      name: '曾源',
      phone: '136****8888',
      content: '广东省深圳市，龙岗区，布吉街道爱义商务中心B406',
      checked: true,
      value: '0',
    }, {
      name: '曾源',
      phone: '136****8888',
      content: '广东省深圳市，龙岗区，布吉街道爱义商务中心B406',
      checked: '',
      value: '1',
    }, {
      name: '曾源',
      phone: '136****8888',
      content: '广东省深圳市，龙岗区，布吉街道爱义商务中心B406',
      checked: '',
      value: '2',
    }]

  },

  radioChange: function (e) {
    var addrList = this.data.addrList;
    var checkArr = e.detail.value;
    for (var i = 0; i < addrList.length; i++) {
      if (checkArr.indexOf(i + "") != -1) {
        addrList[i].checked = true;
      } else {
        addrList[i].checked = false;
      }
    }
    this.setData({
      addrList: addrList
    })
  },

  gotoEdit: function () {
    wx.navigateTo({
      url: '/pages/my/myAddressEdit/index',
    })
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

  }
})