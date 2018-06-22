//index.js
const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');
//获取应用实例
const app = getApp()

Page({
  data: {
    newGoods: [],
    hotGoods: [],
    topics: [],
    brands: [],
    banner: [],
    channer: [],
  },
  //事件处理函数
  onShareAppMessage: function(){
    return {
      title: 'copynideshop',
      desc: '仿站',
      path: '/pages/index/index'
    }
  },
  getIndexData: function(){
    let that = this;
    util.request(api.IndexUrl).then(function(res){
      if(res.errno === 0){
        that.setData({
          newGoods: res.data.newGoodsList,
          hotGoods: res.data.hotGoodsList,
          topics: res.data.topicList,
          brand: res.data.brandList,
          floorGoods: res.data.categoryList,
          banner: res.data.banner,
          channel: res.data.channel
        })
      }
    })
  },
  onLoad: function () {
    this.getIndexData();
  },
})
