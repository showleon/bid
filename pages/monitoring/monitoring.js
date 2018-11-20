// pages/monitoring/monitoring.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedIndex: 0
  },

  toMonitorDetailPage: function(evt){
    let { listid } = evt.currentTarget.dataset

    if( listid || listid == 0 ){
      wx.navigateTo({
        url: '/pages/monitorDetail/monitorDetail?id=' + listid,
      })
    }
  },

  fnCondition: function(evt){
    let { index } = evt.target.dataset;

    if(!index && index !== "0")
      return;
    this.setData({
      selectedIndex: +index
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