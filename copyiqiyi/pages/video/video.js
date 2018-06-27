// pages/video/video.js

import util from '../../utils/util.js';
import {videos} from '../../mock.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    vtab: 1,
    videoList_hot: null,
    videoList_amuse: null,
    videoList_variety: null,
    videoList_information: null,
    line_ml: '70',
    hasMore: true,
    isLoading: true,
    page: 0,
    datasize: 3
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList('down');
  },

  getList(type){
    this.setData({
      isLoading: true,
      hasMore: true
    })
    type === 'down' ? this.setData({page: 0}) : null;
    util.request({
      url: 'videos',
      mock: true,
      data: {
        page: this.data.page,
        datasize: this.data.datasize,
        type: this.data.vtab,
        tag: 'video',
        langs: 'en'
      }
    }).then(res=>{
      this.processData(type, res.data, res.res);
      this.setData({
        isLoading: false
      })
    }).catch(e=>{
      this.setData({
        isLoading: true,
        hasMore: false
      })
      wx.stopPullDownRefresh();
      wx.showToast({title: `网络错误！`, duration: 1000, icon: 'none'})
    })
  },

  processData(type, list, status){
    
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