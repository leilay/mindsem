// pages/shopping/exchange/index.js

var Zan = require('../../../assets/plugin/zanui/index.js');

Page(Object.assign({}, Zan.SelectCard, {

  /**
   * 页面的初始数据
   */
  data: {

    showPopup: false,
    showLeftPopup: false,
    showRightPopup: false,
    showTopPopup: false,
    showBottomPopup: false,
    items: [
      {
        value: '1',
        img: 'https://img13.360buyimg.com/da/jfs/t18850/343/892312785/120181/7f84ae7b/5ab07948N1d354a51.png',
      },
      {
        value: '2',
        img: 'https://img11.360buyimg.com/cms/jfs/t14935/117/2547237798/240571/9c50c50a/5aa64652Ne9ab52f2.jpg',
      },
      {
        value: '3',
        img: 'https://img11.360buyimg.com/cms/jfs/t15616/14/2423833192/152027/4f561b52/5aa8d8fcNf71b97d3.jpg',
      },
      {
        value: '4',
        img: 'https://img12.360buyimg.com/cms/jfs/t18346/218/935740204/205023/6bf4f763/5ab3055cNc3b3ebab.jpg',
      },
    ],


    checked: {
      base: '1',
    },

    cover: 'https://img13.360buyimg.com/da/jfs/t18850/343/892312785/120181/7f84ae7b/5ab07948N1d354a51.png',
    activeColor: '#fff',
    checkedValue: '2',

  },

  toggleBottomPopup() {
    this.setData({
      showBottomPopup: !this.data.showBottomPopup
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleZanSelectCardChange({ componentId, value }) {
    this.setData({
      [`checked.${componentId}`]: value
    });
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