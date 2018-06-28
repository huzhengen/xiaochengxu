// pages/index/video-detail/video-detail.js

import util from '../../utils/util.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    video_id: '',
    isListHidden: true,
    isDescHidden: true,
    isLoading: true,
    isSelected: 1,
    mediaList: null,
    playerUrl: '',
    historyClear: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      video_id: option.id,
      mediaList: null,
    })
    wx.setNavigationBarTitle({
      title: option.title
    })
    if(option.hasOwnProperty('num')){
      this.requestVideo(option.num);
    }else{
      this.requestVideo(option.num);
    }
  },

  requestVideo: function(num=0){
    util.request({
      url: `https://www.easy-mock.com/mock/5b0c37bed0e51c310ce24ab0/iqiyi/media#!method=get`,
      mock: false,
      data: {
        id: this.data.video_id,
        tag: 'dramas',
        langs: 'en'
      }
    }).then(res=>{
      this.setData({
        mediaList: res,
        isLoading: false,
        playerUrl: res.drama_num[num].video_url
      })
      this.pickNum(num);
    })
  },

  openList: function(){
    this.setData({
      isListHidden: false
    })
  },

  closeList: function(){
    this.setData({
      isListHidden: true
    })
  },

  openDesc: function(){
      let isDescHidden = !this.data.isDescHidden;
      this.setData({
        isDescHidden
      })
  },

  changenum: function(e){
    let mediaList = this.data.mediaList;
    let palyerUrl = this.data.playerUrl;
    this.picNum(e.currentTarget.dataset.num);
  },

  changevideo: function(e){
    let mediaList = this.data.mediaList;
    let palyerUrl = this.data.playerUrl;
    for(let i of mediaList.recommend_video){
      i.selected = parseInt(i.recommend_id) === parseInt(e.currentTarget.dataset.num) + 1;
      if(i.selected){
        playerUrl = i.video_url
      }
    }
    for(let i of mediaList.drama_num){
      i.selected = false;
    }
    this.setData({
      mediaList,
      playerUrl
    })
  },

  pickNum: function(num){
    let mediaList = this.data.mediaList;
    let palyerUrl = this.data.playerUrl;
    for(let i of mediaList.drama_num){
      i.selected = parseInt(i.drama_id) === parseInt(num) + 1;
      if(i.selected){
        playerUrl = i.video_url
      }
    }
    for(let i of mediaList.recommend_video){
      i.selected = false;
    }
    this.setData({
      meidaList,
      playerUrl
    })
  },

  next: function(e){

  },

  stop: function(e){

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo');
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