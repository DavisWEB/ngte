// pages/gte-order/gte-order01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pros:["咖啡","沙拉","营养餐","奶昔","欧包","人气热卖"],
    chose:0,
    pick:true,
  },
  change:function(e){
   var vid=e.target.dataset.vid
   this.setData({
     chose:vid
   })
  },
  pick:function(){
    if(this.data.pick===true){
      this.setData({
        pick:false
      })
    }else{
      this.setData({
        pick: true
      })
    }
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