// pages/ranzhi/ranzhi.js
var datas = require("../../data/datas.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: null,
    zi: "添加此训练",
    idx:0
  },
    tianjia() {
      wx.showToast({
        title: '添加成功',
      })
      var arr=wx.getStorageSync('tian')
      if (arr==''){
        arr=[]
      }
      var obj = {
        name:'猫屎咖啡你的看法',
        tet:"的积分卡的减肥"
      }
      var idx = this.data.idx
      arr[idx]=obj
      wx.setStorage({
        key: 'tian',
        data: arr
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var idx = options.index
    var detailData = datas.short_time_exer
    this.setData({
      detailData: detailData[1][idx],
      idx
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