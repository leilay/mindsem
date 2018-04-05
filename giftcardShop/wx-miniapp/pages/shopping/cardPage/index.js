// pages/shopping/cardPage/index.js
var Zan = require('../../../assets/plugin/zanui/index.js');

Page(Object.assign({}, Zan.Stepper, Zan.SelectCard, Zan.TopTips, {
  data: {

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

    stepper1: {
      stepper: 10,
      min: 1,
      max: 20
    },
    stepper2: {
      stepper: 1,
      min: 1,
      max: 1
    },
    stepper3: {
      stepper: 10,
      min: 1,
      max: 20
    }


  },

  handleZanStepperChange(e) {
    var componentId = e.componentId;
    var stepper = e.stepper;

    this.setData({
      [`${componentId}.stepper`]: stepper,
    });
  },


  handleZanSelectCardChange({ componentId, value }) {
    this.setData({
      [`checked.${componentId}`]: value
    });
  },


  // gotoNext
  gotoNext: function () {
    wx.showModal({
      title: '支付',
      content: '您已付款成功',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/shopping/giveMyWish/index',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
}));