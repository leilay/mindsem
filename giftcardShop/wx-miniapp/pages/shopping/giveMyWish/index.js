// pages/shopping/giveMyWish/index.js

var Zan = require('../../../assets/plugin/zanui/index.js');

Page(Object.assign({}, Zan.Field, {

  /**
   * 页面的初始数据
   */
  data: {
    cover: 'https://img13.360buyimg.com/da/jfs/t18850/343/892312785/120181/7f84ae7b/5ab07948N1d354a51.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },


  shareMe: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log('res')
    }
    return {
      title: '感谢你一直的支持',
      path: '/pages/shopping/getGift/index',
      imageUrl: 'https://img13.360buyimg.com/da/jfs/t18850/343/892312785/120181/7f84ae7b/5ab07948N1d354a51.png',
      success: function (res) {
        // 转发成功
        wx.redirectTo({
          url: '/pages/shopping/giveMyWishSuccess/index',
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showModal({
          title: '提示',
          content: '赠送失败，请重试',
        })
      }
    }
  }
}));