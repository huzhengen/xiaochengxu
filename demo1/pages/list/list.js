var time = require('../../utils/util');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    lists: [
      {
        content: 'hello',
        id: 1,
        time: Date.now()
      },
    ],    
  },
  edit(e) {
    var id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../add/add?add='+id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  add() {
    wx.navigateTo({
      url: '../add/add',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    initData(this);
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

function initData(page){
  var arr = wx.getStorageSync('txt');
  if(arr.length){
    arr.forEach((item, i)=>{
      var t = new Date(item.time);
      item.time = time.formatTime(t);
    })
    page.setData({
      lists:arr
    })
  }
}