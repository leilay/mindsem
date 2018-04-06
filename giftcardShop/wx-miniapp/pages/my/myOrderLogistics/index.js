// pages/my/myOrderLogistics/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps: [
      {
        current: true,
        done: true,
        text: '[深圳市]快件已到达－广州深圳罗湖民乐分布',
        desc: '2018-04-05 10:08:10'
      },
      {
        done: false,
        current: false,
        text: '［武汉市］业务员已收件',
        desc: '2018-04-05 10:08:10'
      },
      {
        done: false,
        current: false,
        text: '［您的订单由第三方卖家捡货完毕，运单号为12345678901234］',
        desc: '2018-04-05 10:08:10'
      }
    ],
    steps2: [
      {
        current: false,
        done: true,
        text: '步骤一',
        desc: '10.01'
      },
      {
        done: true,
        current: true,
        text: '步骤二',
        desc: '10.02'
      },
      {
        done: false,
        current: false,
        text: '步骤三',
        desc: '10.03'
      }
    ],
    steps3: [
      {
        current: false,
        done: true,
        text: '[深圳市]快件已到达－广州深圳罗湖民乐分布',
        desc: '2018-04-05 10:08:10'
      },
      {
        done: true,
        current: false,
        text: '［武汉市］业务员已收件',
        desc: '2018-04-05 10:08:10'
      },
      {
        done: true,
        current: true,
        text: '［您的订单由第三方卖家捡货完毕，运单号为12345678901234］',
        desc: '2018-04-05 10:08:10'
      }
    ]
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