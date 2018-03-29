Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  change(e){
    var value = e.detail.value;
    this.setData({
      content: value
    });
  },
  cancel(){
    wx.navigateBack();
  },
  sure(){
    var reg = /^\s*$/g;
    if(!this.data.content || reg.test(this.data.content)){
      return;
    }
    this.setData({
      time: Date.now()
    })
    setValue(this);
    wx.navigateBack();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.add;
    if(id){
      getData(id,this);
    }else{
      this.setData({
        id: Date.now()
      })
    }
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

function getData(id,page){
  var arr = wx.getStorageSync('txt');
  if(arr.length){
    arr.forEach((item)=>{
      if(item.id == id){
        page.setData({
          id: item.id,
          content: item.content
        })
      }
    })
  }
}

function setValue(page){
  var arr = wx.getStorageSync('txt');
  var data = [];
  var flag = true;
  if(arr.length){
    arr.forEach((item)=>{
      if(item.id == page.data.id){
        item.time = Date.now();
        item.content = page.data.content;
        flag = false;
      }
      data.push(item);
    })
  }
  if(flag){
    data.push(page.data);
  }
  wx.setStorageSync('txt', data)
}