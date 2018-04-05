//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      {
        id: 0,
        url: '',
        img: 'https://img12.360buyimg.com/cms/jfs/t18346/218/935740204/205023/6bf4f763/5ab3055cNc3b3ebab.jpg'
      },
      {
        id: 1,
        url: '',
        img: 'https://img11.360buyimg.com/cms/jfs/t14935/117/2547237798/240571/9c50c50a/5aa64652Ne9ab52f2.jpg'
      },
      {
        id: 2,
        url: '',
        img: 'https://img11.360buyimg.com/cms/jfs/t15616/14/2423833192/152027/4f561b52/5aa8d8fcNf71b97d3.jpg'
      },
    ],
    cardList: [
      {
        categorieTitle: "金龙鱼礼品卡",
        categorieDesc: "这里是类别的描述",
        items: [
          {
            id: 0,
            url: '/',
            title: '狗年旺旺',
            img: 'https://img12.360buyimg.com/da/jfs/t16882/203/494852723/110678/725bb9f4/5a829a47Nae7cd867.jpg'
          },
          {
            id: 1,
            url: '',
            title: '狗年旺旺',
            img: 'https://img13.360buyimg.com/da/jfs/t18850/343/892312785/120181/7f84ae7b/5ab07948N1d354a51.png'
          },
          {
            id: 2,
            url: '',
            title: '狗年旺旺',
            img: 'https://img12.360buyimg.com/da/jfs/t17659/45/951858332/281315/b3150408/5ab08031Ndc59a8a0.jpg'
          },
          {
            id: 3,
            url: '',
            title: '感谢有你',
            img: 'https://img11.360buyimg.com/cms/jfs/t15616/14/2423833192/152027/4f561b52/5aa8d8fcNf71b97d3.jpg'
          },
          {
            id: 4,
            url: '',
            title: '为你点赞',
            img: 'https://img11.360buyimg.com/cms/jfs/t14935/117/2547237798/240571/9c50c50a/5aa64652Ne9ab52f2.jpg'
          },
          {
            id: 5,
            url: '',
            title: '狗年旺旺',
            img: 'https://img12.360buyimg.com/cms/jfs/t18346/218/935740204/205023/6bf4f763/5ab3055cNc3b3ebab.jpg'
          },
        ]
      },

      {
        categorieTitle: "金龙鱼礼品卡",
        categorieDesc: "这里是类别的描述",
        items: [
          {
            id: 6,
            url: '',
            title: '狗年旺旺',
            img: 'https://img10.360buyimg.com/da/jfs/t17203/280/1039057526/153898/445adb84/5ab8d8f4N967c024d.jpg'
          },
          {
            id: 7,
            url: '',
            title: '感谢有你',
            img: 'https://img13.360buyimg.com/da/jfs/t18850/343/892312785/120181/7f84ae7b/5ab07948N1d354a51.png'
          },
          {
            id: 8,
            url: '',
            title: '为你点赞',
            img: 'https://img12.360buyimg.com/da/jfs/t17659/45/951858332/281315/b3150408/5ab08031Ndc59a8a0.jpg'
          },
        ]
      }
    ],
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
